import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';
import { ThemeDirective } from '../shared/theme.directive';
import { ButtonDirective } from './button.directive';

@Directive({
  selector: '[cButtonClose]',
  standalone: true,
  hostDirectives: [
    { directive: ThemeDirective, inputs: ['dark'] }
  ]
})
export class ButtonCloseDirective extends ButtonDirective {

  /**
   * Change the default color to white.
   * @type boolean
   * @deprecated 5.0.0. Use `cButtonClose.dark` instead.
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
