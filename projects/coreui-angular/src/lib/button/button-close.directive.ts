import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';
import { ButtonDirective } from './button.directive';

@Directive({
  selector: '[cButtonClose]',
  standalone: true
})
export class ButtonCloseDirective extends ButtonDirective {

  /**
   * Change the default color to white.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) white: string | boolean = false;

  @HostBinding('class')
  override get hostClasses(): any {
    return {
      btn: true,
      'btn-close': true,
      'btn-close-white': this.white,
      [`btn-${this.size}`]: !!this.size,
      disabled: this.disabled,
      active: this.active
    };
  }
}
