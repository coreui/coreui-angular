import { computed, Directive, input } from '@angular/core';

import { BreakpointInfix } from '../coreui.types';
import { NumberOfColumns } from './row.type';

@Directive({
  selector: '[cRow]',
  host: {
    class: 'row',
    '[class]': 'hostClasses()'
  }
})
export class RowDirective {
  /**
   * The number of columns/offset/order on extra small devices (<576px).
   * @returns NumberOfColumns
   */
  readonly xs = input<NumberOfColumns>();

  /**
   * The number of columns/offset/order on small devices (<768px).
   * @returns NumberOfColumns
   */
  readonly sm = input<NumberOfColumns>();

  /**
   * The number of columns/offset/order on medium devices (<992px).
   * @returns NumberOfColumns
   */
  readonly md = input<NumberOfColumns>();

  /**
   * The number of columns/offset/order on large devices (<1200px).
   * @returns NumberOfColumns
   */
  readonly lg = input<NumberOfColumns>();

  /**
   * The number of columns/offset/order on X-Large devices (<1400px).
   * @returns NumberOfColumns
   */
  readonly xl = input<NumberOfColumns>();

  /**
   * The number of columns/offset/order on XX-Large devices (≥1400px).
   * @returns NumberOfColumns
   */
  readonly xxl = input<NumberOfColumns>();

  readonly hostClasses = computed(() => {
    const cols = this.xs();

    const classes: Record<string, boolean> = {
      row: true,
      [`row-cols-${cols}`]: !!cols
    };

    Object.keys(BreakpointInfix).forEach((breakpoint) => {
      // @ts-ignore
      const value: any = this[breakpoint]();
      if (typeof value === 'number' || typeof value === 'string') {
        const infix: string = breakpoint === 'xs' ? '' : `-${breakpoint}`;
        classes[`row-cols${infix}-${value}`] = !!value;
      }
    });

    return classes;
  });
}
