import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[cCardImg]'
})
export class CardImgDirective {
  /**
   * Optionally orientate the image to the top, bottom, or make it overlaid across the card.
   * @type {'top | 'bottom'}
   */
  @Input('cCardImg') orientation?: 'top' | 'bottom';

  @HostBinding('class')
  get hostClasses(): any {
    const suffix = !!this.orientation ? `-${this.orientation}` : '';
    return {
      [`card-img${suffix}`]: true
    };
  }
}
