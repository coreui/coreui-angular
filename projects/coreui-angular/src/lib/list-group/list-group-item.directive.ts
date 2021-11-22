import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Colors } from '../coreui.types';

@Directive({
  selector: '[cListGroupItem], c-list-group-item',
  exportAs: 'cListGroupItem'
})
export class ListGroupItemDirective {

  static ngAcceptInputType_disabled: BooleanInput;

  /**
   * Toggle the active state for the component.
   * @type boolean
   */
  @Input() active?: boolean;

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  @Input() color?: Colors;

  /**
   * Set disabled attr for the host element. [docs]
   * @type boolean
   */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @HostBinding('attr.aria-disabled')
  get isDisabled(): boolean | null {
    return this.disabled || null;
  }

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.disabled ? '' : null;
  };

  @HostBinding('attr.tabindex')
  get getTabindex(): string | null {
    return this.disabled ? '-1' : null;
  }

  @HostBinding('attr.aria-current') get ariaCurrent(): boolean {
    return !!this.active;
  }

  @HostBinding('class')
  get hostClasses(): any {
    const host: HTMLElement = this.hostElement.nativeElement;
    return {
      'list-group-item': true,
      'list-group-item-action': host.nodeName === 'A' || host.nodeName === 'BUTTON',
      active: !!this.active,
      disabled: this.isDisabled,
      [`list-group-item-${this.color}`]: !!this.color
    };
  }

  constructor(
    private hostElement: ElementRef
  ) { }
}
