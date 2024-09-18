import { computed, Directive, input, InputSignal } from '@angular/core';

@Directive({
  selector: '[cCardImg]',
  standalone: true,
  host: { '[class]': 'hostClasses()' }
})
export class CardImgDirective {
  /**
   * Optionally orientate the image to the top, bottom, or make it overlaid across the card.
   * @type {'top | 'bottom'}
   */
  readonly orientation: InputSignal<'top' | 'bottom' | undefined> = input<'top' | 'bottom'>();

  readonly hostClasses = computed(() => {
    const orientation = this.orientation();
    const suffix = !!orientation ? `-${orientation}` : '';
    return {
      [`card-img${suffix}`]: true
    } as Record<string, boolean>;
  });
}
