import { Directive, HostBinding, input, InputSignal } from '@angular/core';
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
  readonly color: InputSignal<TextColors> = input('', { alias: 'cTextColor' });

  @HostBinding('class')
  get hostClasses(): any {
    const color = this.color();
    return {
      [`text-${color}`]: !!color
    };
  }
}
