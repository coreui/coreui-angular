import { Directive, ElementRef, HostBinding, HostListener, inject, Input, Optional } from '@angular/core';
import { FocusableOption, FocusOrigin } from '@angular/cdk/a11y';
import { DropdownService } from '../dropdown.service';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Directive({
  selector: '[cDropdownItem]',
  exportAs: 'cDropdownItem',
  standalone: true,
  host: { class: 'dropdown-item' }
})
export class DropdownItemDirective implements FocusableOption {
  /**
   * Set active state to a dropdown-item.
   * @type boolean
   * @default undefined
   */
  @Input() active?: boolean;
  /**
   * Configure dropdown-item close dropdown behavior.
   * @type boolean
   * @default true
   */
  @Input() autoClose: boolean = true;
  /**
   * Disables a dropdown-item.
   * @type boolean
   * @default undefined
   */
  @Input() disabled?: boolean;

  #elementRef: ElementRef = inject(ElementRef);

  constructor(
    private dropdownService: DropdownService,
    @Optional() public dropdown?: DropdownComponent
  ) {}

  focus(origin?: FocusOrigin | undefined): void {
    this.#elementRef?.nativeElement?.focus();
  }

  getLabel?(): string {
    return this.#elementRef?.nativeElement?.textContent.trim();
  }

  @HostBinding('attr.aria-current')
  get ariaCurrent(): string | null {
    return this.active ? 'true' : null;
  }

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'dropdown-item': true,
      active: this.active,
      disabled: this.disabled
    };
  }

  @HostBinding('attr.tabindex')
  @Input()
  set tabIndex(value: string | number | null) {
    this._tabIndex = value;
  }

  get tabIndex() {
    return this.disabled ? '-1' : this._tabIndex;
  }

  private _tabIndex: string | number | null = null;

  @HostBinding('attr.aria-disabled')
  get isDisabled(): boolean | null {
    return this.disabled || null;
  }

  @HostListener('click', ['$event'])
  private onClick($event: MouseEvent): void {
    if (this.autoClose) {
      this.dropdownService.toggle({ visible: 'toggle', dropdown: this.dropdown });
    }
  }

  @HostListener('keyup', ['$event'])
  private onKeyUp($event: KeyboardEvent): void {
    if ($event.key === 'Enter') {
      if (this.autoClose) {
        this.dropdownService.toggle({ visible: false, dropdown: this.dropdown });
      }
    }
  }
}
