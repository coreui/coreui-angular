import { computed, Directive, input } from '@angular/core';
import { Alignment } from '../coreui.types';

@Directive({
  selector: '[cAlign]',
  exportAs: 'cAlign',
  host: { '[class]': 'hostClasses()' }
})
export class AlignDirective {
  /**
   * Set vertical alignment of inline, inline-block, inline-table, and table cell elements
   * @return Alignment
   */
  readonly align = input<Alignment | undefined>(undefined, { alias: 'cAlign' });

  readonly hostClasses = computed(() => {
    const align = this.align();
    return {
      [`align-${align}`]: !!align
    } as Record<string, boolean>;
  });
}
