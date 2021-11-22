import { Directive, HostBinding, Input } from '@angular/core';
import { BackgroundColors } from '../coreui.types';

@Directive({
  selector: '[cBgColor]'
})
export class BgColorDirective {

  /**
   * Set the background of an element to any contextual class
   */
  @Input('cBgColor') color: BackgroundColors = '';
  /**
   * Add linear gradient as background image to the backgrounds.
   * @type boolean
   */
  @Input() gradient?: boolean;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      [`bg-${this.color}`]: !!this.color,
      'bg-gradient': this.gradient,
    };
  }

  constructor() { }
}
