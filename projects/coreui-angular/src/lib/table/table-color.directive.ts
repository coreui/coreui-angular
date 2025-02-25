import { computed, Directive, input } from '@angular/core';
import { Colors } from '../coreui.types';

@Directive({
  selector: '[cTableColor]',
  exportAs: 'cTableColor',
  host: {
    '[class]': 'hostClasses()'
  }
})
export class TableColorDirective {
  /**
   * Use contextual color for tables, table rows or individual cells.
   * @return Colors
   */
  readonly color = input<Colors | undefined>(undefined, { alias: 'cTableColor' });

  readonly hostClasses = computed(() => {
    const color = this.color();
    return {
      [`table-${color}`]: !!color
    } as Record<string, boolean>;
  });
}
