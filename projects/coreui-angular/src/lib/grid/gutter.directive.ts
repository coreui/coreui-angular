import { computed, Directive, input } from '@angular/core';

import { BreakpointInfix } from '../coreui.types';
import { GutterBreakpoints, Gutters, IGutter, IGutterObject } from './gutter.type';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[gutter]',
  exportAs: 'gutter',
  host: {
    '[class]': 'hostClasses()'
  }
})
export class GutterDirective implements IGutter {
  /**
   * Define padding between columns to space and align content responsively in the Bootstrap grid system.
   */
  readonly gutter = input<IGutterObject | GutterBreakpoints | Gutters>({});

  readonly hostClasses = computed(() => {
    let gutterClass: Record<string, boolean>;
    const gutterInput = this.gutter();

    if (typeof gutterInput === 'number') {
      gutterClass = GutterDirective.getGutterClasses({ g: gutterInput });
      return gutterClass;
    }

    {
      const { g, gx, gy } = { ...(gutterInput as IGutterObject) };
      gutterClass = GutterDirective.getGutterClasses({ g, gx, gy });
    }

    Object.keys(BreakpointInfix).forEach((key) => {
      // @ts-ignore
      const gutter: IGutterObject = gutterInput[key] ? { ...gutterInput[key] } : undefined;
      if (gutter) {
        const classes = GutterDirective.getGutterClasses(gutter, key);
        gutterClass = { ...gutterClass, ...classes };
      }
    });
    return gutterClass;
  });

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
