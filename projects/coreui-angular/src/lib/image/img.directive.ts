import { booleanAttribute, computed, Directive, input, InputSignal, InputSignalWithTransform } from '@angular/core';

@Directive({
  selector: '[cImg]',
  standalone: true,
  host: {
    '[class]': 'hostClasses()',
    '[style]': 'hostStyles()'
  }
})
export class ImgDirective {
  /**
   * Set the horizontal aligment.
   * @type {'' | 'start' | 'end' | 'center'}
   */
  readonly align: InputSignal<'' | 'start' | 'end' | 'center'> = input<'' | 'start' | 'end' | 'center'>('');

  /**
   * Make image responsive.
   * @type boolean
   */
  readonly fluid: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  /**
   * Make image rounded.
   * @type boolean
   */
  readonly rounded: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  /**
   * Give an image a rounded 1px border appearance.
   * @type boolean
   */
  readonly thumbnail: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });

  /**
   * Color for image placeholder.
   */
  readonly placeholderColor = input('transparent');

  readonly hostStyles = computed(() => {
    return { backgroundColor: this.placeholderColor() };
  });

  readonly hostClasses = computed(() => {
    const align = this.align();
    return {
      [`float-${align}`]: align === 'start' || align === 'end',
      'd-block': align === 'center',
      'mx-auto': align === 'center',
      'img-fluid': this.fluid(),
      rounded: this.rounded(),
      'img-thumbnail': this.thumbnail()
    } as Record<string, boolean>;
  });
}
