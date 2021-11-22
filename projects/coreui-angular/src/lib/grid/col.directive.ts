import { Directive, HostBinding, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty, coerceNumberProperty, NumberInput } from '@angular/cdk/coercion';

import { ColOrder, ICol } from './col.type';
import { BreakpointInfix } from '../coreui.types';

@Directive({
  selector: '[cCol]'
})
export class ColDirective implements ICol {

  static ngAcceptInputType_xs: (BooleanInput | NumberInput);
  static ngAcceptInputType_sm: (BooleanInput | NumberInput);
  static ngAcceptInputType_md: (BooleanInput | NumberInput);
  static ngAcceptInputType_lg: (BooleanInput | NumberInput);
  static ngAcceptInputType_xl: (BooleanInput | NumberInput);
  static ngAcceptInputType_xxl: (BooleanInput | NumberInput);

  /**
   * The number of columns/offset/order on extra small devices (<576px).
   * @type { 'auto' | number |  boolean }
   */
  @Input()
  set xs(value) {
    this._xs = this.coerceInput(value);
  }
  get xs(): (BooleanInput | NumberInput) {
    return this._xs;
  }
  private _xs: (BooleanInput | NumberInput) = false;

  /**
   * The number of columns/offset/order on small devices (<768px).
   * @type { 'auto' | number |  boolean }
   */
  @Input()
  set sm(value) {
    this._sm = this.coerceInput(value);
  }
  get sm(): (BooleanInput | NumberInput) {
    return this._sm;
  }
  private _sm: (BooleanInput | NumberInput) = false;

  /**
   * The number of columns/offset/order on medium devices (<992px).
   * @type { 'auto' | number |  boolean }
   */
  @Input()
  set md(value) {
    this._md = this.coerceInput(value);
  }
  get md(): (BooleanInput | NumberInput) {
    return this._md;
  }
  private _md: (BooleanInput | NumberInput) = false;

  /**
   * The number of columns/offset/order on large devices (<1200px).
   * @type { 'auto' | number |  boolean }
   */
  @Input()
  set lg(value) {
    this._lg = this.coerceInput(value);
  }
  get lg(): (BooleanInput | NumberInput) {
    return this._lg;
  }
  private _lg: (BooleanInput | NumberInput) = false;

  /**
   * The number of columns/offset/order on X-Large devices (<1400px).
   * @type { 'auto' | number |  boolean }
   */
  @Input()
  set xl(value) {
    this._xl = this.coerceInput(value);
  }
  get xl(): (BooleanInput | NumberInput) {
    return this._xl;
  }
  private _xl: (BooleanInput | NumberInput) = false;

  /**
   * The number of columns/offset/order on XX-Large devices (≥1400px).
   * @type { 'auto' | number |  boolean }
   */
  @Input()
  set xxl(value) {
    this._xxl = this.coerceInput(value);
  }
  get xxl(): (BooleanInput | NumberInput) {
    return this._xxl;
  }
  private _xxl: (BooleanInput | NumberInput) = false;

  @Input() offset?: (number | { 'xs'?: number, sm?: number, md?: number, lg?: number, xl?: number, xxl?: number });
  @Input() order?: (ColOrder | { xs?: ColOrder, sm?: ColOrder, md?: ColOrder, lg?: ColOrder, xl?: ColOrder, xxl?: ColOrder });

  @HostBinding('class')
  get hostClasses(): any {

    const classes: any = {
      col: true
    };

    Object.keys(BreakpointInfix).forEach((breakpoint) => {
      // @ts-ignore
      const value: number | string | boolean = this[breakpoint];
      const infix = breakpoint === 'xs' ? '' : `-${breakpoint}`;
      classes[`col${infix}`] = value === true;
      classes[`col${infix}-${value}`] = (typeof value === 'number') || (typeof value === 'string');
    });

    if (typeof this.offset === 'object') {
      const offset = { ...this.offset };
      Object.entries(offset).forEach((entry) => {
        const [breakpoint, value] = [...entry];
        const infix = breakpoint === 'xs' ? '' : `-${breakpoint}`;
        classes[`offset${infix}-${value}`] = value >= 0 && value <= 11;
      });
    } else {
      classes[`offset-${this.offset}`] = (typeof this.offset === 'number') && this.offset > 0 && this.offset <= 11;
    }

    if (typeof this.order === 'object') {
      const order = { ...this.order };
      Object.entries(order).forEach((entry) => {
        const [breakpoint, value] = [...entry];
        const infix = breakpoint === 'xs' ? '' : `-${breakpoint}`;
        classes[`order${infix}-${value}`] = value;
      });
    } else {
      classes[`order-${this.order}`] = !!this.order;
    }

    // if there is no 'col' class, add one
    classes.col = (!Object.entries(classes).filter(i => i[0].startsWith('col-') && i[1]).length) || this.xs === true;
    return classes;
  }

  coerceInput(value: (BooleanInput | NumberInput)) {
    if (value === 'auto') {
      return value;
    }
    if (value === '' || value === undefined || value === null) {
      return coerceBooleanProperty(value);
    }
    if (typeof value === 'boolean') {
      return value;
    }
    return coerceNumberProperty(value);
  }
}
