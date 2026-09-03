import { FocusableOption, FocusOrigin } from '@angular/cdk/a11y';
import { booleanAttribute, computed, Directive, ElementRef, inject, input, linkedSignal } from '@angular/core';
import { DropdownService } from '../dropdown.service';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Directive({
  selector: '[cDropdownItem]',
  exportAs: 'cDropdownItem',
  host: {
    class: 'dropdown-item',
    '[class]': 'hostClasses()',
    '[attr.tabindex]': 'tabIndex()',
    '[aria-current]': 'ariaCurrent()',
    '[aria-disabled]': 'disabled || null',
    '[attr.role]': 'role()',
    '(click)': 'onClick($event)',
    '(keyup)': 'onKeyUp($event)'
  }
})
export class DropdownItemDirective implements FocusableOption {
  readonly #elementRef: ElementRef = inject(ElementRef);
  readonly #dropdownService = inject(DropdownService);
  dropdown? = inject(DropdownComponent, { optional: true });

  /**
   * Set active state to a dropdown-item.
   * @returns boolean
   * @default undefined
   */
  readonly active = input<boolean>();

  /**
   * Configure dropdown-item close dropdown behavior.
   * @returns boolean
   * @default true
   */
  readonly autoClose = input<boolean>(true);

  /**
   * Disables a dropdown-item.
   * @returns boolean
   * @default false
   */
  readonly disabledInput = input(false, { transform: booleanAttribute, alias: 'disabled' });

  readonly #disabled = linkedSignal(this.disabledInput);

  set disabled(value) {
    this.#disabled.set(value);
  }

  get disabled() {
    return this.#disabled();
  }

  /**
   * Default role for dropdown-item.
   * @returns string
   * @default 'list-item'
   */
  readonly role = input<string>('list-item');

  /**
   * Tab index of the dropdown-item.
   * @returns string | number | null
   * @default '0'
   */
  readonly tabIndexInput = input<string | number | null>('0', { alias: 'tabIndex' });

  readonly tabIndex = linkedSignal({
    source: this.tabIndexInput,
    computation: (value) => (this.disabled ? '-1' : value)
  });

  focus(origin?: FocusOrigin | undefined): void {
    this.#elementRef?.nativeElement?.focus();
  }

  getLabel?(): string {
    return this.#elementRef?.nativeElement?.textContent.trim();
  }

  readonly ariaCurrent = computed(() => {
    return this.active() ? 'true' : null;
  });

  readonly hostClasses = computed(() => {
    return {
      'dropdown-item': true,
      active: this.active(),
      disabled: this.disabled
    } as Record<string, boolean>;
  });

  onClick($event: MouseEvent): void {
    this.handleInteraction();
  }

  onKeyUp($event: KeyboardEvent): void {
    if ($event.key === 'Enter') {
      this.handleInteraction();
    }
  }

  private handleInteraction(): void {
    if (this.autoClose()) {
      this.#dropdownService.toggle({ visible: 'toggle', dropdown: this.dropdown });
    }
  }
}
