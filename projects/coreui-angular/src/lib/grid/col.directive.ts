import { booleanAttribute, computed, Directive, input, numberAttribute } from '@angular/core';
import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import { BreakpointInfix } from '../coreui.types';
import { ColOrder } from './col.type';

export type ColOffsetType = number | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number; xxl?: number };
export type ColOrderType =
  | ColOrder
  | { xs?: ColOrder; sm?: ColOrder; md?: ColOrder; lg?: ColOrder; xl?: ColOrder; xxl?: ColOrder };

@Directive({
  selector: '[cCol]',
  host: {
    '[class]': 'hostClasses()'
  }
})
export class ColDirective {
  static ngAcceptInputType_cCol: BooleanInput | NumberInput;
  static ngAcceptInputType_xs: BooleanInput | NumberInput;
  static ngAcceptInputType_sm: BooleanInput | NumberInput;
  static ngAcceptInputType_md: BooleanInput | NumberInput;
  static ngAcceptInputType_lg: BooleanInput | NumberInput;
  static ngAcceptInputType_xl: BooleanInput | NumberInput;
  static ngAcceptInputType_xxl: BooleanInput | NumberInput;

  /**
   * The number of columns/offset/order on extra small devices (<576px).
   * @return { 'auto' | number |  boolean }
   */
  readonly cCol = input(false, { transform: this.coerceInput });
  readonly xs = input(false, { transform: this.coerceInput });

  /**
   * The number of columns/offset/order on small devices (<768px).
   * @return { 'auto' | number |  boolean }
   */
  readonly sm = input(false, { transform: this.coerceInput });

  /**
   * The number of columns/offset/order on medium devices (<992px).
   * @return { 'auto' | number |  boolean }
   */
  readonly md = input(false, { transform: this.coerceInput });

  /**
   * The number of columns/offset/order on large devices (<1200px).
   * @return { 'auto' | number |  boolean }
   */
  readonly lg = input(false, { transform: this.coerceInput });

  /**
   * The number of columns/offset/order on X-Large devices (<1400px).
   * @return { 'auto' | number |  boolean }
   */
  readonly xl = input(false, { transform: this.coerceInput });

  /**
   * The number of columns/offset/order on XX-Large devices (≥1400px).
   * @return { 'auto' | number |  boolean }
   */
  readonly xxl = input(false, { transform: this.coerceInput });

  readonly breakpoints = computed(() => {
    return {
      xs: this.xs() || this.cCol(),
      sm: this.sm(),
      md: this.md(),
      lg: this.lg(),
      xl: this.xl(),
      xxl: this.xxl()
    } as Record<string, any>;
  });

  readonly offset = input<ColOffsetType>();
  readonly order = input<ColOrderType>();

  readonly hostClasses = computed(() => {
    const classes: Record<string, boolean> = {
      col: true
    };

    const breakpoints = this.breakpoints();
    const offsetInput = this.offset();
    const orderInput = this.order();

    Object.keys(BreakpointInfix).forEach((breakpoint) => {
      const value = breakpoints[breakpoint];
      const infix = breakpoint === 'xs' ? '' : `-${breakpoint}`;
      classes[`col${infix}`] = value === true;
      classes[`col${infix}-${value}`] = typeof value === 'number' || typeof value === 'string';
    });

    if (typeof offsetInput === 'object') {
      const offset = { ...offsetInput };
      Object.entries(offset).forEach((entry) => {
        const [breakpoint, value] = [...entry];
        const infix = breakpoint === 'xs' ? '' : `-${breakpoint}`;
        classes[`offset${infix}-${value}`] = value >= 0 && value <= 11;
      });
    } else {
      const offset = numberAttribute(offsetInput);
      classes[`offset-${offset}`] = typeof offset === 'number' && offset > 0 && offset <= 11;
    }

    if (typeof orderInput === 'object') {
      const order = { ...orderInput };
      Object.entries(order).forEach((entry) => {
        const [breakpoint, value] = [...entry];
        const infix = breakpoint === 'xs' ? '' : `-${breakpoint}`;
        classes[`order${infix}-${value}`] = !!value;
      });
    } else {
      const order = orderInput;
      classes[`order-${order}`] = !!order;
    }

    // if there is no 'col' class, add one
    classes['col'] =
      !Object.entries(classes).filter((i) => i[0].startsWith('col-') && i[1]).length || breakpoints['xs'] === true;
    return classes as Record<string, boolean>;
  });

  coerceInput(value: BooleanInput | NumberInput) {
    if (value === 'auto') {
      return value;
    }
    if (value === '' || value === undefined || value === null) {
      return booleanAttribute(value);
    }
    if (typeof value === 'boolean') {
      return value;
    }
    return numberAttribute(value);
  }
}
