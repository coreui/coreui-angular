import { AfterViewInit, booleanAttribute, Directive, inject, input, linkedSignal } from '@angular/core';
import { DropdownService } from '../dropdown.service';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Directive({
  selector: '[cDropdownClose]',
  exportAs: 'cDropdownClose',
  host: {
    '[class.disabled]': 'disabled()',
    '[attr.aria-disabled]': 'disabled() || null',
    '[attr.tabindex]': 'tabIndex()',
    '(click)': 'onClick($event)',
    '(keyup)': 'onKeyUp($event)'
  }
})
export class DropdownCloseDirective implements AfterViewInit {
  #dropdownService = inject(DropdownService);
  dropdown? = inject(DropdownComponent, { optional: true });

  /**
   * Disables a dropdown-close directive.
   * @return boolean
   * @default undefined
   */
  readonly disabledInput = input(undefined, { transform: booleanAttribute, alias: 'disabled' });

  readonly disabled = linkedSignal({
    source: this.disabledInput,
    computation: (value) => value || null
  });

  readonly dropdownComponent = input<DropdownComponent>();

  ngAfterViewInit(): void {
    const dropdownComponent = this.dropdownComponent();
    if (dropdownComponent) {
      this.dropdown = dropdownComponent;
      this.#dropdownService = dropdownComponent?.dropdownService;
    }
  }

  readonly tabIndexInput = input<string | number | null>(null, { alias: 'tabIndex' });

  readonly tabIndex = linkedSignal({
    source: this.tabIndexInput,
    computation: (value) => (this.disabled() ? '-1' : value)
  });

  onClick($event: MouseEvent): void {
    this.handleToggle();
  }

  onKeyUp($event: KeyboardEvent): void {
    if ($event.key === 'Enter') {
      this.handleToggle();
    }
  }

  private handleToggle(): void {
    if (!this.disabled()) {
      this.#dropdownService.toggle({ visible: false, dropdown: this.dropdown });
    }
  }
}
