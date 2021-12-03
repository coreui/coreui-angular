import { Directive, HostBinding, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { ButtonDirective } from './button.directive';

@Directive({
  selector: '[cButtonClose]'
})
export class ButtonCloseDirective extends ButtonDirective {

  static ngAcceptInputType_white: BooleanInput;
  private _white = false;
  /**
   * Change the default color to white.
   * @type boolean
   */
  @Input()
  get white(): boolean {
    return this._white;
  }
  set white(value: boolean) {
    this._white = coerceBooleanProperty(value);
  }

  @HostBinding('class')
  override get hostClasses(): any {
    return {
      'btn-close': true,
      'btn-close-white': this.white,
      [`btn-${this.size}`]: !!this.size,
      disabled: this.disabled,
      active: this.active,
    };
  }
}
