import { Directive, HostBinding, Input } from '@angular/core';
import { TextColors } from '../coreui.types';

@Directive({
  selector: '[cTextColor]',
  standalone: true
})
export class TextColorDirective {

  /**
   * Set text-color of element
   * @type TextColors
   */
  @Input('cTextColor') color: TextColors = '';

  @HostBinding('class')
  get hostClasses(): any {
    const color = this.color;
    return {
      [`text-${color}`]: !!color
    };
  }

  constructor() {}
}
