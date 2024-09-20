import { computed, Directive, input } from '@angular/core';

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
  readonly orientation = input<'top' | 'bottom' | 'start' | 'end' | undefined>(undefined, { alias: 'cCardImg' });

  readonly hostClasses = computed(() => {
    const orientation = this.orientation();
    const suffix = !!orientation ? `-${orientation}` : '';
    const horizontal = ['start', 'end'].includes(orientation ?? '-') ? orientation : undefined;
    return {
      [`card-img${suffix}`]: !horizontal,
      'img-fluid': !!horizontal,
      [`rounded-${horizontal}`]: !!horizontal
    } as Record<string, boolean>;
  });
}
