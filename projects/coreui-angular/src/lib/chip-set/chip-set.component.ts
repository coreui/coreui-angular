import {
  booleanAttribute,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  model,
  output,
  signal,
  TemplateRef
} from '@angular/core';
import { ChipComponent } from '../chip/chip.component';
import { ChipSetRef } from '../chip/chip-set-ref';
import { optionalNumberAttribute } from '../chip/chip.utils';
import { ChipSetService } from './chip-set.service';
import { ChipItem } from './chip-set.types';

@Component({
  selector: 'c-chip-set',
  exportAs: 'cChipSet',
  templateUrl: './chip-set.component.html',
  imports: [ChipComponent],
  providers: [ChipSetService, { provide: ChipSetRef, useExisting: ChipSetService }],
  host: {
    class: 'chip-set',
    '[class.disabled]': 'disabled()',
    '[attr.role]': 'roleAttr()',
    '[attr.aria-orientation]': 'isListbox() ? "horizontal" : null',
    '[attr.aria-multiselectable]': 'isListbox() && selectionMode() === "multiple" ? "true" : null',
    '[attr.aria-disabled]': 'ariaDisabled()',
    '[attr.tabindex]': 'tabIndex()',
    '(keydown)': 'onKeydown($event)',
    '(focusin)': 'onFocusin($event)',
    '(focusout)': 'onFocusout($event)'
  }
})
export class ChipSetComponent {
  readonly #elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly #service = inject(ChipSetService);

  /**
   * Wording announced to screen readers after a chip is added; the chip text is prepended.
   * @returns string
   * @default 'added'
   */
  readonly ariaAddedAnnouncement = input('added');

  /**
   * Label of the remove buttons; each chip appends its text, e.g. `'Remove Angular'`.
   * Chips in a selectable set have no remove buttons for assistive technology: removal runs from the chip itself.
   * @returns string
   * @default 'Remove'
   */
  readonly ariaRemoveLabel = input('Remove');

  /**
   * Wording announced to screen readers after a chip is removed; the chip text is prepended.
   * @returns string
   * @default 'removed'
   */
  readonly ariaRemovedAnnouncement = input('removed');

  /**
   * Chips rendered from data, as values or `ChipItem` objects. The set never changes the list itself:
   * it emits `chipsChange` without the removed chip, so `[(chips)]` removes it and `[chips]` with `(remove)` lets
   * the parent decide.
   * @returns (string | ChipItem)[] | undefined
   * @default undefined
   */
  readonly chips = input<(string | ChipItem)[]>();

  /**
   * Disables the set and every chip that does not set `disabled` itself.
   * @returns boolean
   * @default false
   */
  readonly disabled = input(false, { transform: booleanAttribute });

  /**
   * Makes the chips filter chips: selectable, with a check icon while selected.
   * @returns boolean
   * @default false
   */
  readonly filter = input(false, { transform: booleanAttribute });

  /**
   * Shows remove buttons on the chips.
   * @returns boolean
   * @default false
   */
  readonly removable = input(false, { transform: booleanAttribute });

  /**
   * Replaces the default remove icon of the chips.
   * @returns TemplateRef<unknown> | undefined
   * @default undefined
   */
  readonly removeIcon = input<TemplateRef<unknown>>();

  /**
   * Overrides the role of the set: `listbox` when selectable, otherwise `group`.
   * A selectable set needs an accessible name, e.g. `aria-label` or `aria-labelledby`.
   * @returns string | undefined
   * @default undefined
   */
  readonly role = input<string>();

  /**
   * Makes the chips selectable.
   * @returns boolean
   * @default false
   */
  readonly selectable = input(false, { transform: booleanAttribute });

  /**
   * Values of the selected chips, two-way bindable with `[(selected)]`. A one-way `[selected]` applies every new value
   * from the parent, but the parent does not learn about selection changes made by the user.
   * @returns string[]
   * @default []
   */
  readonly selected = model<string[]>([]);

  /**
   * Replaces the default check icon of the selected filter chips.
   * @returns TemplateRef<unknown> | undefined
   * @default undefined
   */
  readonly selectedIcon = input<TemplateRef<unknown>>();

  /**
   * Sets how many chips can be selected at once.
   * @returns 'single' | 'multiple'
   * @default 'multiple'
   */
  readonly selectionMode = input<'single' | 'multiple'>('multiple');

  /**
   * Tab index of the set host. Without it the set takes `-1` only while it holds focus after its last chip is removed.
   * @returns number | undefined
   * @default undefined
   */
  readonly tabindex = input<number | undefined, unknown>(undefined, { transform: optionalNumberAttribute });

  /**
   * Emits the chip list without the chip whose removal was requested, for `[(chips)]`.
   * @returns (string | ChipItem)[]
   */
  readonly chipsChange = output<(string | ChipItem)[]>();

  /**
   * Emits the value of the chip whose removal was requested.
   * @returns string
   */
  readonly remove = output<string>();

  readonly #holdsFallbackFocus = signal(false);

  readonly items = computed(() => {
    const seen = new Set<string>();
    return (this.chips() ?? [])
      .map((chip) => (typeof chip === 'string' ? { value: chip } : chip))
      .filter((chip) => !seen.has(chip.value) && !!seen.add(chip.value));
  });

  readonly isListbox = computed(() => this.roleAttr() === 'listbox');

  readonly roleAttr = computed(() => this.role() ?? (this.selectable() || this.filter() ? 'listbox' : 'group'));

  readonly ariaDisabled = computed(() => {
    const role = this.roleAttr();
    return this.disabled() && role !== 'none' && role !== 'presentation' ? 'true' : null;
  });

  readonly tabIndex = computed(() => this.tabindex() ?? (this.#holdsFallbackFocus() ? -1 : null));

  constructor() {
    this.#service.attach({
      ariaAddedAnnouncement: this.ariaAddedAnnouncement,
      ariaRemoveLabel: this.ariaRemoveLabel,
      ariaRemovedAnnouncement: this.ariaRemovedAnnouncement,
      disabled: this.disabled,
      element: this.#elementRef.nativeElement,
      filter: this.filter,
      initialStop: 'first',
      isListbox: this.isListbox,
      removable: this.removable,
      removeIcon: this.removeIcon,
      selectable: this.selectable,
      selected: this.selected,
      selectedIcon: this.selectedIcon,
      selectionMode: this.selectionMode,
      focusFallback: () => this.#focusHost(),
      removeRequested: (identity) => this.#removeRequested(identity)
    });
  }

  onKeydown($event: KeyboardEvent): void {
    this.#service.handleKeydown($event);
  }

  onFocusin($event: FocusEvent): void {
    this.#service.handleFocusin($event);
  }

  onFocusout($event: FocusEvent): void {
    this.#service.handleFocusout($event);
    const next = $event.relatedTarget as Node | null;
    if (!next || !this.#elementRef.nativeElement.contains(next)) {
      this.#holdsFallbackFocus.set(false);
    }
  }

  #focusHost(): void {
    const element = this.#elementRef.nativeElement;
    this.#holdsFallbackFocus.set(true);
    element.setAttribute('tabindex', String(this.tabindex() ?? -1));
    element.focus();
  }

  #removeRequested(identity: string): void {
    this.remove.emit(identity);
    const chips = this.chips();
    const next = chips?.filter((chip) => (typeof chip === 'string' ? chip : chip.value) !== identity);
    if (next && next.length !== chips?.length) {
      this.chipsChange.emit(next);
    }
  }
}
