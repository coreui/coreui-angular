import { Directive, HostBinding, Input } from '@angular/core';
import { Colors } from '../coreui.types';

@Directive({
  selector: '[cTextBgColor]',
  standalone: true
})
export class TextBgColorDirective {

  /**
   * Set text-bg-color of element
   * @type Colors
   */
  @Input('cTextBgColor') textBgColor: Colors = '';

  @HostBinding('class')
  get hostClasses(): any {
    const color = this.textBgColor;
    return {
      [`text-bg-${color}`]: !!color
    };
  }
}
