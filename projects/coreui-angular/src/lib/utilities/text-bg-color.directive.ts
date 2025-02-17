import { computed, Directive, input, InputSignal } from '@angular/core';
import { Colors } from '../coreui.types';

@Directive({
  selector: '[cTextBgColor]',
  host: {
    '[class]': 'hostClasses()'
  }
})
export class TextBgColorDirective {
  /**
   * Set text-bg-color of element
   * @type Colors
   */
  readonly textBgColor: InputSignal<Colors> = input('', { alias: 'cTextBgColor' });

  readonly hostClasses = computed(() => {
    const color = this.textBgColor();
    return {
      [`text-bg-${color}`]: !!color
    } as Record<string, boolean>;
  });
}
