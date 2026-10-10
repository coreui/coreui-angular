import { FocusableOption } from '@angular/cdk/a11y';
import { NgTemplateOutlet } from '@angular/common';
import {
  afterEveryRender,
  afterRenderEffect,
  booleanAttribute,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  input,
  linkedSignal,
  OnInit,
  output,
  signal,
  TemplateRef
} from '@angular/core';
import { Colors } from '../coreui.types';
import { UIDService } from '../services/uid.service';
import { ChipSetRef } from './chip-set-ref';
import { ChipVariant } from './chip.types';
import { getChipText, optionalBooleanAttribute, optionalNumberAttribute } from './chip.utils';

@Component({
  selector: 'c-chip',
  exportAs: 'cChip',
  templateUrl: './chip.component.html',
  imports: [NgTemplateOutlet],
  host: {
    class: 'chip',
    '[class]': 'hostClasses()',
    '[attr.role]': 'roleAttr()',
    '[attr.aria-selected]': 'ariaSelected()',
    '[attr.aria-pressed]': 'ariaPressed()',
    '[attr.aria-disabled]': 'ariaDisabled()',
    '[attr.data-coreui-chip-focusable]': 'focusable() || null',
    '[attr.data-coreui-chip-value]': 'identity()',
    '[attr.tabindex]': 'tabIndex()',
    '(click)': 'onClick($event)',
    '(keydown)': 'onKeydown($event)'
  }
})
export class ChipComponent implements FocusableOption, OnInit {
  readonly #elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly #set = inject(ChipSetRef, { optional: true });
  readonly #uid = inject(UIDService).getUID('chip');

  /**
   * Toggles the active state of a chip that is not selectable.
   * @returns boolean
   * @default false
   */
  readonly active = input(false, { transform: booleanAttribute });

  /**
   * Accessible name of the remove button. When set on the chip it is used as is; otherwise the label of the
   * chip set (or `'Remove'`) is followed by the chip text, e.g. `'Remove Angular'`.
   * @returns string | undefined
   * @default undefined
   */
  readonly ariaRemoveLabel = input<string>();

  /**
   * Adds hover styling and a pointer cursor to the chip.
   * @returns boolean
   * @default false
   */
  readonly clickable = input(false, { transform: booleanAttribute });

  /**
   * Sets the color context of the chip to one of CoreUI’s themed colors.
   * @returns Colors | undefined
   * @default undefined
   */
  readonly color = input<Colors>();

  /**
   * Disables the chip. Inside a chip set an unset value takes the value of the set.
   * @returns boolean | undefined
   * @default undefined
   */
  readonly disabledInput = input<boolean | undefined, unknown>(undefined, {
    alias: 'disabled',
    transform: optionalBooleanAttribute
  });

  /**
   * Makes the chip a filter chip: selectable, with a check icon while selected.
   * Inside a chip set an unset value takes the value of the set.
   * @returns boolean | undefined
   * @default undefined
   */
  readonly filter = input<boolean | undefined, unknown>(undefined, { transform: optionalBooleanAttribute });

  /**
   * Shows a remove button; Backspace and Delete request removal too.
   * Inside a chip set an unset value takes the value of the set.
   * @returns boolean | undefined
   * @default undefined
   */
  readonly removable = input<boolean | undefined, unknown>(undefined, { transform: optionalBooleanAttribute });

  /**
   * Replaces the default remove icon.
   * @returns TemplateRef<unknown> | undefined
   * @default undefined
   */
  readonly removeIcon = input<TemplateRef<unknown>>();

  /**
   * Overrides the role the chip takes from its context (`option` in a selectable set, `button` when selectable).
   * @returns string | undefined
   * @default undefined
   */
  readonly role = input<string>();

  /**
   * Makes the chip selectable with click, Enter and Space.
   * Inside a chip set an unset value takes the value of the set.
   * @returns boolean | undefined
   * @default undefined
   */
  readonly selectable = input<boolean | undefined, unknown>(undefined, { transform: optionalBooleanAttribute });

  /**
   * Selected state of a selectable chip, two-way bindable with `[(selected)]`.
   * Inside a chip set the set keeps the selection in its own `selected`, and this input is ignored.
   * @returns boolean
   * @default false
   */
  readonly selected = input(false, { transform: booleanAttribute });

  /**
   * Replaces the default check icon of a selected filter chip.
   * @returns TemplateRef<unknown> | undefined
   * @default undefined
   */
  readonly selectedIcon = input<TemplateRef<unknown>>();

  /**
   * Size the chip small or large.
   * @returns 'sm' | 'lg' | undefined
   * @default undefined
   */
  readonly size = input<'sm' | 'lg'>();

  /**
   * Tab index of a standalone chip. Inside a chip set it is ignored: the set keeps one tab stop for all its chips.
   * @returns number | undefined
   * @default undefined
   */
  readonly tabindex = input<number | undefined, unknown>(undefined, { transform: optionalNumberAttribute });

  /**
   * Value that identifies the chip in a chip set. Without it the chip text is used; set it wherever the text
   * can change, e.g. with translations.
   * @returns string | undefined
   * @default undefined
   */
  readonly value = input<string>();

  /**
   * Sets the visual variant of the chip.
   * @returns 'outline' | undefined
   * @default undefined
   */
  readonly variant = input<ChipVariant>();

  /**
   * Emits when removal is requested with the remove button, Backspace or Delete.
   * @returns MouseEvent | KeyboardEvent
   */
  readonly remove = output<MouseEvent | KeyboardEvent>();

  /**
   * Emits the new selected state when the chip is toggled by the user.
   * @returns boolean
   */
  readonly selectedChange = output<boolean>();

  readonly #selected = linkedSignal(this.selected);
  #content: string | null = null;
  #writtenLabel: string | null = null;

  readonly text = signal('');

  readonly identity = computed(() => this.value() ?? (this.text() || this.#uid));

  readonly isDisabled = computed(() => this.disabledInput() ?? this.#set?.disabled() ?? false);

  readonly isFilter = computed(() => this.filter() ?? this.#set?.filter() ?? false);

  readonly isSelectable = computed(() => (this.selectable() ?? this.#set?.selectable() ?? false) || this.isFilter());

  readonly isRemovable = computed(() => this.removable() ?? this.#set?.removable() ?? false);

  readonly isCoordinated = computed(() => !!this.#set && this.isSelectable());

  readonly isSelected = computed(() =>
    this.isCoordinated() ? this.#set!.isSelected(this.identity()) : this.#selected()
  );

  readonly focusable = computed(() => !this.isDisabled() && (this.isSelectable() || this.isRemovable()));

  readonly roleAttr = computed(() => {
    return this.role() ?? (this.#set?.isListbox() ? 'option' : this.isSelectable() ? 'button' : null);
  });

  readonly ariaSelected = computed(() =>
    this.roleAttr() === 'option' && this.isSelectable() ? String(this.isSelected()) : null
  );

  readonly ariaPressed = computed(() =>
    this.roleAttr() === 'button' && this.isSelectable() ? String(this.isSelected()) : null
  );

  readonly isLocked = computed(() => this.isSelectable() && !!this.#set?.readonly());

  readonly ariaDisabled = computed(() => (this.roleAttr() && (this.isDisabled() || this.isLocked()) ? 'true' : null));

  readonly hasRemoveButton = computed(() => this.isRemovable() && !this.isDisabled() && this.roleAttr() !== 'option');

  readonly #label = computed(() =>
    this.roleAttr() === 'button' && this.hasRemoveButton() ? this.text() || null : null
  );

  readonly tabIndex = computed(() => {
    if (this.#set) {
      return this.#set.tabIndexFor(this);
    }
    return this.tabindex() ?? (this.focusable() ? 0 : null);
  });

  readonly removeLabel = computed(() => {
    const own = this.ariaRemoveLabel();
    if (own !== undefined) {
      return own;
    }
    return [this.#set?.ariaRemoveLabel() ?? 'Remove', this.text()].filter(Boolean).join(' ');
  });

  readonly removeIconTemplate = computed(() => this.removeIcon() ?? this.#set?.removeIcon());

  readonly selectedIconTemplate = computed(() => this.selectedIcon() ?? this.#set?.selectedIcon());

  readonly hostClasses = computed(() => {
    const color = this.color();
    const size = this.size();
    return {
      chip: true,
      active: this.isSelectable() ? this.isSelected() : this.active(),
      disabled: this.isDisabled(),
      [`chip-${color}`]: !!color,
      [`chip-${size}`]: !!size,
      'chip-clickable': (this.clickable() || this.isSelectable()) && !this.isLocked(),
      'chip-outline': this.variant() === 'outline'
    } as Record<string, boolean>;
  });

  get element(): HTMLElement {
    return this.#elementRef.nativeElement;
  }

  get disabled(): boolean {
    return this.isDisabled();
  }

  constructor() {
    this.#set?.register(this);
    inject(DestroyRef).onDestroy(() => this.#set?.unregister(this));
    afterEveryRender({
      earlyRead: () => {
        const content = this.element.textContent;
        if (content === this.#content) {
          return null;
        }
        this.#content = content;
        return getChipText(this.element);
      },
      write: (text) => {
        if (text !== null) {
          this.text.set(text);
        }
      }
    });
    afterRenderEffect({
      write: () => this.#writeLabel(this.#label())
    });
  }

  ngOnInit(): void {
    if (this.#set && this.tabindex() !== undefined) {
      console.warn('CoreUI [c-chip] inside a chip set ignores tabindex - the set keeps one tab stop for its chips');
    }
  }

  focus(): void {
    this.element.focus();
  }

  getLabel(): string {
    return this.text();
  }

  onClick($event: MouseEvent): void {
    if (this.isDisabled() || ($event.target as HTMLElement).closest('.chip-remove')) {
      return;
    }
    if (this.isSelectable()) {
      this.#toggle();
    }
  }

  onKeydown($event: KeyboardEvent): void {
    if (this.isDisabled()) {
      return;
    }
    switch ($event.key) {
      case 'Enter':
      case ' ':
      case 'Spacebar': {
        if (this.isSelectable() && !($event.target as HTMLElement).closest('.chip-remove')) {
          $event.preventDefault();
          this.#toggle();
        } else if ($event.key !== 'Enter' && $event.target === this.element && this.focusable()) {
          $event.preventDefault();
        }
        break;
      }
      case 'Backspace':
      case 'Delete': {
        if (this.isRemovable()) {
          $event.preventDefault();
          this.#requestRemove($event);
        }
        break;
      }
    }
  }

  onRemoveClick($event: MouseEvent): void {
    $event.stopPropagation();
    if (this.isRemovable() && !this.isDisabled()) {
      this.#requestRemove($event);
    }
  }

  #toggle(): void {
    if (this.isLocked()) {
      return;
    }
    const next = !this.isSelected();
    this.#selected.set(next);
    this.selectedChange.emit(next);
    if (this.isCoordinated()) {
      this.#set!.toggle(this, next);
    }
  }

  #requestRemove($event: MouseEvent | KeyboardEvent): void {
    this.remove.emit($event);
    this.#set?.requestRemove(this);
  }

  #writeLabel(label: string | null): void {
    const current = this.element.getAttribute('aria-label');
    if (current !== null && current !== this.#writtenLabel) {
      this.#writtenLabel = null;
      return;
    }
    if (label) {
      this.element.setAttribute('aria-label', label);
    } else if (current !== null) {
      this.element.removeAttribute('aria-label');
    }
    this.#writtenLabel = label;
  }
}
