import { computed, Directive, input, InputSignal } from '@angular/core';
import { TextColors } from '../coreui.types';

@Directive({
  selector: '[cTextColor]',
  host: {
    '[class]': 'hostClasses()'
  }
})
export class TextColorDirective {
  /**
   * Set text-color of element
   * @type TextColors
   */
  readonly color: InputSignal<TextColors> = input('', { alias: 'cTextColor' });

  readonly hostClasses = computed(() => {
    const color = this.color();
    return {
      [`text-${color}`]: !!color
    };
  });
}
