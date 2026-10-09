import { FocusKeyManager } from '@angular/cdk/a11y';
import {
  afterNextRender,
  computed,
  DestroyRef,
  inject,
  Injectable,
  Injector,
  Signal,
  signal,
  TemplateRef,
  untracked,
  WritableSignal
} from '@angular/core';
import type { ChipComponent } from '../chip/chip.component';
import { ChipSetRef } from '../chip/chip-set-ref';
import { AnnouncerService } from '../services/announcer.service';
import { RtlService } from '../services/rtl.service';
import { ChipSelectionMode } from './chip-set.types';

export interface ChipSetHost {
  readonly ariaAddedAnnouncement: Signal<string>;
  readonly ariaRemoveLabel: Signal<string | undefined>;
  readonly ariaRemovedAnnouncement: Signal<string>;
  readonly disabled: Signal<boolean>;
  readonly element: HTMLElement;
  readonly filter: Signal<boolean>;
  readonly initialStop: 'first' | 'last';
  readonly isListbox: Signal<boolean>;
  readonly removable: Signal<boolean>;
  readonly removeIcon: Signal<TemplateRef<unknown> | undefined>;
  readonly selectable: Signal<boolean>;
  readonly selected: WritableSignal<string[]>;
  readonly selectedIcon: Signal<TemplateRef<unknown> | undefined>;
  readonly selectionMode: Signal<ChipSelectionMode>;

  focusFallback(): void;

  removeRequested(identity: string): void;
}

const NAVIGATION_KEYS = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];

@Injectable()
export class ChipSetService extends ChipSetRef {
  readonly #announcer = inject(AnnouncerService);
  readonly #destroyRef = inject(DestroyRef);
  readonly #injector = inject(Injector);
  readonly #rtl = inject(RtlService);

  readonly #host = signal<ChipSetHost | null>(null);
  readonly #registry = new Set<ChipComponent>();
  readonly #warned = new WeakSet<ChipComponent>();
  #focusedItem: ChipComponent | null = null;
  #scheduled = false;
  #settled = false;
  #snapshot: ChipComponent[] = [];

  readonly ariaRemoveLabel = computed(() => this.#host()?.ariaRemoveLabel());
  readonly disabled = computed(() => this.#host()?.disabled() ?? false);
  readonly filter = computed(() => this.#host()?.filter() ?? false);
  readonly isListbox = computed(() => this.#host()?.isListbox() ?? false);
  readonly removable = computed(() => this.#host()?.removable() ?? false);
  readonly removeIcon = computed(() => this.#host()?.removeIcon());
  readonly selectable = computed(() => this.#host()?.selectable() ?? false);
  readonly selectedIcon = computed(() => this.#host()?.selectedIcon());

  readonly orderedItems = signal<ChipComponent[]>([]);
  readonly activeItem = signal<ChipComponent | null>(null);

  readonly #ordered = computed(() => new Set(this.orderedItems()));

  readonly #stop = computed(() => {
    const items = this.orderedItems();
    const active = this.activeItem();
    if (active && items.includes(active)) {
      return active.focusable() ? active : this.#nearestFocusable(items, items.indexOf(active));
    }
    return this.#initialStop(items);
  });

  readonly #keyManager = new FocusKeyManager<ChipComponent>(this.orderedItems, this.#injector)
    .skipPredicate((chip) => !chip.focusable())
    .withVerticalOrientation(false)
    .withHorizontalOrientation('ltr')
    .withHomeAndEnd();

  constructor() {
    super();
    this.#keyManager.change.subscribe(() => {
      const active = this.#keyManager.activeItem;
      if (active) {
        this.activeItem.set(active);
      }
    });
    this.#destroyRef.onDestroy(() => this.#keyManager.destroy());
  }

  attach(host: ChipSetHost): void {
    this.#host.set(host);
    this.#scheduleRefresh();
  }

  register(chip: ChipComponent): void {
    this.#registry.add(chip);
    this.#scheduleRefresh();
  }

  unregister(chip: ChipComponent): void {
    this.#registry.delete(chip);
    this.#scheduleRefresh();
  }

  isSelected(identity: string): boolean {
    return this.#host()?.selected().includes(identity) ?? false;
  }

  toggle(chip: ChipComponent, selected: boolean): void {
    const host = this.#host();
    if (!host) {
      return;
    }
    const identity = chip.identity();
    const current = host.selected();
    if (selected) {
      if (host.selectionMode() === 'single') {
        host.selected.set([identity]);
      } else if (!current.includes(identity)) {
        host.selected.set([...current, identity]);
      }
      return;
    }
    if (current.includes(identity)) {
      host.selected.set(current.filter((value) => value !== identity));
    }
  }

  tabIndexFor(chip: ChipComponent): number | null {
    if (!this.#registry.has(chip) || !chip.focusable()) {
      return null;
    }
    if (this.orderedItems().length === 0) {
      return chip === this.#firstFocusable() ? 0 : -1;
    }
    if (!this.#ordered().has(chip)) {
      return null;
    }
    return chip === this.#stop() ? 0 : -1;
  }

  requestRemove(chip: ChipComponent): void {
    this.#host()?.removeRequested(chip.identity());
  }

  handleKeydown($event: KeyboardEvent): void {
    const host = this.#host();
    if (!host || !NAVIGATION_KEYS.includes($event.key)) {
      return;
    }
    this.#updateOrder();
    const chip = this.#chipContaining($event.target);
    if (!chip?.focusable()) {
      return;
    }
    this.#keyManager.withHorizontalOrientation(this.#rtl.isRTL(host.element) ? 'rtl' : 'ltr');
    this.#keyManager.updateActiveItem(chip);
    this.#keyManager.onKeydown($event);
  }

  handleFocusin($event: FocusEvent): void {
    const chip = this.#chipContaining($event.target);
    this.#focusedItem = chip;
    if (chip?.focusable() && this.#host()?.element.contains(chip.element)) {
      [...this.#registry]
        .filter((item) => item !== chip && item.element.getAttribute('tabindex') === '0')
        .forEach((item) => item.element.setAttribute('tabindex', '-1'));
      chip.element.setAttribute('tabindex', '0');
      this.activeItem.set(chip);
      this.#keyManager.updateActiveItem(chip);
    }
  }

  handleFocusout($event: FocusEvent): void {
    const chip = this.#focusedItem;
    if (!chip) {
      return;
    }
    if ($event.relatedTarget) {
      this.#focusedItem = null;
      return;
    }
    queueMicrotask(() => {
      if (this.#focusedItem === chip && chip.element.isConnected && chip.element.ownerDocument.hasFocus()) {
        this.#focusedItem = null;
      }
    });
  }

  #scheduleRefresh(): void {
    if (this.#scheduled || this.#destroyRef.destroyed) {
      return;
    }
    this.#scheduled = true;
    afterNextRender(
      {
        mixedReadWrite: () => {
          this.#scheduled = false;
          this.#refresh();
        }
      },
      { injector: this.#injector }
    );
  }

  #refresh(): void {
    const host = this.#host();
    if (!host) {
      return;
    }
    const previous = this.#snapshot;
    const items = this.#updateOrder();
    this.#snapshot = items;

    if (this.#settled) {
      this.#announce(host, previous, items);
    }

    this.#reconcileActive(items, previous);
    this.#restoreFocus(host, items, previous);
    this.#warnUnidentified(items);
    this.#settled = true;
  }

  #updateOrder(): ChipComponent[] {
    const element = this.#host()?.element;
    const items = [...this.#registry]
      .filter((chip) => !!element?.contains(chip.element))
      .sort((a, b) => (a.element.compareDocumentPosition(b.element) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
    const current = untracked(this.orderedItems);
    if (items.length !== current.length || items.some((chip, index) => chip !== current[index])) {
      this.orderedItems.set(items);
    }
    return items;
  }

  #announce(host: ChipSetHost, previous: ChipComponent[], current: ChipComponent[]): void {
    const element = host.element;
    if (!element.isConnected || (typeof element.checkVisibility === 'function' && !element.checkVisibility())) {
      return;
    }
    const added = this.#difference(current, previous)[0];
    const removed = this.#difference(previous, current)[0];
    const message = added
      ? added.text() && `${added.text()} ${host.ariaAddedAnnouncement()}`
      : removed?.text() && `${removed.text()} ${host.ariaRemovedAnnouncement()}`;
    if (message) {
      this.#announcer.announce(message, { context: element });
    }
  }

  #difference(from: ChipComponent[], subtract: ChipComponent[]): ChipComponent[] {
    const counts = new Map<string, number>();
    subtract.forEach((chip) => counts.set(chip.identity(), (counts.get(chip.identity()) ?? 0) + 1));
    return from.filter((chip) => {
      const count = counts.get(chip.identity()) ?? 0;
      counts.set(chip.identity(), count - 1);
      return count <= 0;
    });
  }

  #reconcileActive(items: ChipComponent[], previous: ChipComponent[]): void {
    const active = untracked(this.activeItem);
    if (active && !items.includes(active)) {
      this.activeItem.set(this.#replacement(active, items, previous));
    }
    const stop = untracked(this.#stop);
    if (stop) {
      this.#keyManager.updateActiveItem(stop);
    }
  }

  #restoreFocus(host: ChipSetHost, items: ChipComponent[], previous: ChipComponent[]): void {
    const removed = this.#focusedItem;
    if (!removed || items.includes(removed)) {
      return;
    }
    this.#focusedItem = null;
    const active = removed.element.ownerDocument.activeElement;
    const focusLost = !active || active === removed.element.ownerDocument.body || removed.element.contains(active);
    if (!focusLost) {
      return;
    }
    const target = this.#replacement(removed, items, previous);
    if (target) {
      this.activeItem.set(target);
      this.#keyManager.updateActiveItem(target);
      target.element.setAttribute('tabindex', '0');
      target.focus();
      return;
    }
    host.focusFallback();
  }

  #replacement(removed: ChipComponent, items: ChipComponent[], previous: ChipComponent[]): ChipComponent | null {
    const identity = removed.identity();
    const twin = items.find((chip) => chip.identity() === identity && chip.focusable() && !previous.includes(chip));
    if (twin) {
      return twin;
    }
    const index = previous.indexOf(removed);
    for (let i = index + 1; i < previous.length; i++) {
      if (items.includes(previous[i]) && previous[i].focusable()) {
        return previous[i];
      }
    }
    for (let i = index - 1; i >= 0; i--) {
      if (items.includes(previous[i]) && previous[i].focusable()) {
        return previous[i];
      }
    }
    return null;
  }

  #nearestFocusable(items: ChipComponent[], index: number): ChipComponent | null {
    return (
      items.slice(index + 1).find((chip) => chip.focusable()) ??
      items
        .slice(0, index)
        .reverse()
        .find((chip) => chip.focusable()) ??
      null
    );
  }

  #initialStop(items: ChipComponent[]): ChipComponent | null {
    const focusable = items.filter((chip) => chip.focusable());
    if (this.#host()?.initialStop === 'last') {
      return focusable.at(-1) ?? null;
    }
    return focusable.find((chip) => this.isSelected(chip.identity())) ?? focusable[0] ?? null;
  }

  #firstFocusable(): ChipComponent | null {
    for (const chip of this.#registry) {
      if (chip.focusable()) {
        return chip;
      }
    }
    return null;
  }

  #chipContaining(target: EventTarget | null): ChipComponent | null {
    if (!(target instanceof Node)) {
      return null;
    }
    return [...this.#registry].find((chip) => chip.element.contains(target)) ?? null;
  }

  #warnUnidentified(items: ChipComponent[]): void {
    for (const chip of items) {
      if (
        !this.#warned.has(chip) &&
        (chip.isSelectable() || chip.isRemovable()) &&
        chip.value() === undefined &&
        !chip.text()
      ) {
        this.#warned.add(chip);
        console.warn('CoreUI [c-chip] without text needs a value to be selected or removed in a chip set');
      }
    }
  }
}
