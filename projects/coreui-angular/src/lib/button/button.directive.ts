import { Directive, HostBinding, Input } from '@angular/core';
import {  coerceBooleanProperty,   BooleanInput } from '@angular/cdk/coercion';

import { ButtonType, Colors, Shapes } from '../coreui.types';

@Directive({
  selector: '[cButton]',
  exportAs: 'cButton'
})
export class ButtonDirective {

  constructor() {}

  static ngAcceptInputType_active: BooleanInput;
  private _active = false;
  static ngAcceptInputType_disabled: BooleanInput;
  private _disabled = false;

  /**
   * Toggle the active state for the component. [docs]
   * @type boolean
   */
  @Input()
  get active(): boolean {
    return this._active;
  }
  set active(value: boolean) {
    this._active = coerceBooleanProperty(value);
  }

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   * @type Colors
   */
  @Input() color?: Colors = 'primary';
  /**
   * Toggle the disabled state for the component.
   * @type boolean
   */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  /**
   * Select the shape of the component.
   * @type { 'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string }
   */
  @Input() shape?: Shapes;
  /**
   * Size the component small or large.
   * @type {'sm' | 'lg'}
   */
  @Input() size?: 'sm' | 'lg' | '' = '';
  /**
   * Specifies the type of button. Always specify the type attribute for the `<button>` element.
   * Different browsers may use different default types for the `<button>` element.
   */
  @Input() type: ButtonType = 'button';
  /**
   * Set the button variant to an outlined button or a ghost button.
   * @type {'ghost' | 'outline'}
   */
  @Input() variant?: 'ghost' | 'outline';

  @HostBinding('class')
  get hostClasses(): any {
    return {
      btn: true,
      [`btn-${this.color}`]: !!this.color && !this.variant,
      [`btn-${this.variant}`]: !!this.variant && !this.color,
      [`btn-${this.variant}-${this.color}`]: !!this.variant && !!this.color,
      [`btn-${this.size}`]: !!this.size,
      [`${this.shape}`]: !!this.shape,
      disabled: this.disabled,
      active: this.active
    };
  }

  @HostBinding('attr.aria-disabled')
  get ariaDisabled () {
    return this.disabled || null;
  };

  @HostBinding('attr.aria-pressed')
  get isActive(): boolean | null {
    return this.active || null;
  }

  @HostBinding('attr.disabled')
  get attrDisabled () {
    return this.disabled ? '' : null;
  };

  @HostBinding('attr.tabindex')
  get tabIndex(): string | null {
    return this.disabled ? '-1' : null;
  }
}
