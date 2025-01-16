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
  readonly color = input<Colors>(undefined, { alias: "cTableColor" });

  readonly hostClasses = computed((): Record<string,boolean> =>  {
    return {
      [`table-${this.color()}`]: !!this.color()
    };
  });
}
