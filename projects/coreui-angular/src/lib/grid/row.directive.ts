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
   * @return { cols: 'auto' | number }
   */
  readonly xs = input<NumberOfColumns>();

  /**
   * The number of columns/offset/order on small devices (<768px).
   * @return { cols: 'auto' | number }
   */
  readonly sm = input<NumberOfColumns>();

  /**
   * The number of columns/offset/order on medium devices (<992px).
   * @return { cols: 'auto' | number }
   */
  readonly md = input<NumberOfColumns>();

  /**
   * The number of columns/offset/order on large devices (<1200px).
   * @return { cols: 'auto' | number }
   */
  readonly lg = input<NumberOfColumns>();

  /**
   * The number of columns/offset/order on X-Large devices (<1400px).
   * @return { cols: 'auto' | number }
   */
  readonly xl = input<NumberOfColumns>();

  /**
   * The number of columns/offset/order on XX-Large devices (≥1400px).
   * @return { cols: 'auto' | number }
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
