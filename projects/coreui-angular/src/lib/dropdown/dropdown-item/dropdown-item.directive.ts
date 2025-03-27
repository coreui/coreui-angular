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
    '[attr.aria-current]': 'ariaCurrent()',
    '[attr.aria-disabled]': 'disabled || null',
    '[role]': 'role()',
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
   * @return boolean
   * @default undefined
   */
  readonly active = input<boolean>();

  /**
   * Configure dropdown-item close dropdown behavior.
   * @return boolean
   * @default true
   */
  readonly autoClose = input<boolean>(true);

  /**
   * Disables a dropdown-item.
   * @return boolean
   * @default undefined
   */
  readonly disabledInput = input(false, { transform: booleanAttribute, alias: 'disabled' });

  readonly #disabled = linkedSignal({
    source: this.disabledInput,
    computation: (value) => value
  });

  set disabled(value) {
    this.#disabled.set(value);
  }

  get disabled() {
    return this.#disabled();
  }

  readonly role = input<string>('list-item');

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
