import { Directive, HostBinding, Input } from '@angular/core';

import { BreakpointInfix } from '../coreui.types';
import { GutterBreakpoints, Gutters, IGutter, IGutterObject } from './gutter.type';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[gutter]'
})
export class GutterDirective implements IGutter {
  /**
   * Define padding between columns to space and align content responsively in the Bootstrap grid system.
   */
  @Input() gutter: (IGutterObject | GutterBreakpoints | Gutters) = {};

  constructor() { }

  @HostBinding('class')
  get hostClasses(): any {

    let gutterClass: any;

    if (typeof this.gutter === 'number') {
      gutterClass = GutterDirective.getGutterClasses({ g: this.gutter });
      return gutterClass;
    }

    {
      // @ts-ignore
      const { g, gx, gy } = { ...this.gutter };
      gutterClass = GutterDirective.getGutterClasses({ g, gx, gy });
    }

    Object.keys(BreakpointInfix).forEach(key => {
      // @ts-ignore
      const gutter = this.gutter[key] ? { ...this.gutter[key] } : undefined;
      if (gutter) {
        const classes = GutterDirective.getGutterClasses(gutter, key);
        gutterClass = { ...gutterClass, ...classes };
      }
    });
    return gutterClass;
  }

  private static getGutterClasses(gutter: IGutterObject, breakpoint?: string): any {
    const { g, gx, gy } = { ...gutter };
    const infix = breakpoint ? `-${breakpoint}` : '';
    return {
      [`g${infix}-${g}`]: typeof g === 'number',
      [`gx${infix}-${gx}`]: typeof gx === 'number',
      [`gy${infix}-${gy}`]: typeof gy === 'number'
    };
  }
}
