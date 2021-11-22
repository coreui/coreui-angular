import { Directive, HostBinding, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  selector: '[cImg]'
})
export class ImgDirective {
  static ngAcceptInputType_fluid: BooleanInput;
  static ngAcceptInputType_rounded: BooleanInput;
  static ngAcceptInputType_thumbnail: BooleanInput;

  /**
   * Set the horizontal aligment.
   * @type {'' | 'start' | 'end' | 'center'}
   */
  @Input() align: '' | 'start' | 'end' | 'center' = '';

  /**
   * Make image responsive.
   * @type boolean
   */
  @Input()
  set fluid(value: boolean) {
    this._fluid = coerceBooleanProperty(value);
  };
  get fluid() {
    return this._fluid;
  }
  private _fluid = false;

  /**
   * Make image rounded.
   * @type boolean
   */
  @Input()
  set rounded(value: boolean){
    this._rounded = coerceBooleanProperty(value);
  };
  get rounded() {
    return this._rounded;
  }
  private _rounded = false;

  /**
   * Give an image a rounded 1px border appearance.
   * @type boolean
   */
  @Input()
  set thumbnail(value: boolean) {
    this._thumbnail = coerceBooleanProperty(value);
  };
  get thumbnail() {
    return this._thumbnail;
  }
  private _thumbnail = false;

  /**
   * Color for image placeholder.
   */
  @Input() placeholderColor = 'transparent';

  @HostBinding('style')
  get getStyles(): any {
    return {backgroundColor: this.placeholderColor};
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
      'img-thumbnail': this.thumbnail,
    };
  }

  constructor() {}
}
