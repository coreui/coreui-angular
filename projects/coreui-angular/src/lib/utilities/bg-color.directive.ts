import { computed, Directive, input } from '@angular/core';
import { BackgroundColors } from '../coreui.types';

@Directive({
  selector: '[cBgColor]',
  exportAs: 'cBgColor',
  host: { '[class]': 'hostClasses' }
})
export class BgColorDirective {
  /**
   * Set the background of an element to any contextual class
   */
  readonly cBgColor = input<BackgroundColors>('');

  /**
   * Add linear gradient as background image to the backgrounds.
   * @return boolean
   */
  readonly gradient = input<boolean>();

  readonly hostClasses = computed(() => {
    const color = this.cBgColor();
    return {
      [`bg-${color}`]: !!color,
      'bg-gradient': this.gradient()
    };
  });
}
