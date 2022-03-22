import { Directive, HostBinding, HostListener, Input, Optional } from '@angular/core';
import { DropdownService } from '../dropdown.service';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Directive({
  selector: '[cDropdownClose]',
  exportAs: 'cDropdownClose'
})
export class DropdownCloseDirective {

  /**
   * Disables a dropdown-close directive.
   * @type boolean
   * @default undefined
   */
  @Input() disabled?: boolean;

  constructor(
    private dropdownService: DropdownService,
    @Optional() public dropdown?: DropdownComponent
  ) { }

  @HostBinding('class')
  get hostClasses(): any {
    return {
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
    this.dropdownService.toggle({ visible: false, dropdown: this.dropdown });
  }

  @HostListener('keyup', ['$event'])
  private onKeyUp($event: KeyboardEvent): void {
    if ($event.key === 'Enter') {
      this.dropdownService.toggle({ visible: false, dropdown: this.dropdown });
    }
  }
}
