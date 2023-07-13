import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[cImg]',
  standalone: true
})
export class ImgDirective {

  /**
   * Set the horizontal aligment.
   * @type {'' | 'start' | 'end' | 'center'}
   */
  @Input() align: '' | 'start' | 'end' | 'center' = '';

  /**
   * Make image responsive.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) fluid: string | boolean = false;

  /**
   * Make image rounded.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) rounded: string | boolean = false;

  /**
   * Give an image a rounded 1px border appearance.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) thumbnail: string | boolean = false;

  /**
   * Color for image placeholder.
   */
  @Input() placeholderColor = 'transparent';

  @HostBinding('style')
  get getStyles(): any {
    return { backgroundColor: this.placeholderColor };
  }

  @HostBinding('class')
  get hostClasses(): any {
    const align = this.align;
    return {
      [`float-${align}`]: align === 'start' || align === 'end',
      'd-block': align === 'center',
      'mx-auto': align === 'center',
      'img-fluid': this.fluid,
      'rounded': this.rounded,
      'img-thumbnail': this.thumbnail
    };
  }
}
