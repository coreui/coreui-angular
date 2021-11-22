import { Directive, HostBinding, Input } from '@angular/core';

import { BreakpointInfix } from '../coreui.types';
import { IRow, NumberOfColumns } from './row.type';

@Directive({
  selector: '[cRow]'
})
export class RowDirective implements IRow {
  /**
   * The number of columns/offset/order on extra small devices (<576px).
   * @type {{ cols: 'auto' | number }
   */
  @Input() xs?: NumberOfColumns;
  /**
   * The number of columns/offset/order on small devices (<768px).
   * @type {{ cols: 'auto' | number }
   */
  @Input() sm?: NumberOfColumns;
  /**
   * The number of columns/offset/order on medium devices (<992px).
   * @type {{ cols: 'auto' | number }
   */
  @Input() md?: NumberOfColumns;
  /**
   * The number of columns/offset/order on large devices (<1200px).
   * @type {{ cols: 'auto' | number }
   */
  @Input() lg?: NumberOfColumns;
  /**
   * The number of columns/offset/order on X-Large devices (<1400px).
   * @type {{ cols: 'auto' | number }
   */
  @Input() xl?: NumberOfColumns;
  /**
   * The number of columns/offset/order on XX-Large devices (≥1400px).
   * @type {{ cols: 'auto' | number }
   */
  @Input() xxl?: NumberOfColumns;

  @HostBinding('class')
  get hostClasses(): any {

    const cols = this.xs;

    const classes: any = {
      row: true,
      [`row-cols-${cols}`]: !!cols,
    };

    Object.keys(BreakpointInfix).forEach(breakpoint => {
      // @ts-ignore
      const value: any = this[breakpoint];
      if ((typeof value === 'number') || (typeof value === 'string')) {
        const infix: string = breakpoint === 'xs' ? '' : breakpoint;
        classes[`row-cols-${infix}-${value}`] = !!value;
      }
    });

    return classes;
  }
}
