import { booleanAttribute, computed, Directive, input } from '@angular/core';

@Directive({
  selector: '[cPlaceholder]',
  exportAs: 'cPlaceholder',
  host: {
    '[class]': 'hostClasses()',
    '[aria-hidden]': 'ariaHidden()'
  }
})
export class PlaceholderDirective {
  /**
   * Toggle placeholder visibility
   * @returns boolean
   * @default false
   */
  readonly visible = input(false, { transform: booleanAttribute, alias: 'cPlaceholder' });

  /**
   * Size the placeholder xs, small, large.
   */
  readonly size = input<'xs' | 'sm' | 'lg'>(undefined, { alias: 'cPlaceholderSize' });

  readonly ariaHidden = computed(() => {
    return this.visible() ? null : true;
  });

  readonly hostClasses = computed(() => {
    const size = this.size();
    return {
      placeholder: this.visible(),
      [`placeholder-${size}`]: !!size
    } as Record<string, boolean>;
  });
}
