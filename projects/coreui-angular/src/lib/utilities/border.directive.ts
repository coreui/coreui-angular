import { computed, Directive, input } from '@angular/core';
import { Border } from './border.type';

@Directive({
  selector: '[cBorder]',
  exportAs: 'cBorder',
  host: { '[class]': 'hostClasses()' }
})
export class BorderDirective {
  /**
   * Add or remove an element’s borders
   * @return Border
   */
  readonly cBorder = input<Border>(true);

  readonly hostClasses = computed<Record<string, boolean>>(() => {
    const border = this.cBorder();
    if (typeof border === 'boolean') {
      return { border: border };
    }
    if (typeof border === 'number' || typeof border === 'string') {
      return {
        border: true,
        [`border-${border}`]: true
      };
    }
    if (typeof border === 'object') {
      const borderObj = {
        top: undefined,
        end: undefined,
        bottom: undefined,
        start: undefined,
        color: undefined,
        ...border
      };
      // @ts-ignore
      const keys = Object.keys(borderObj).filter((key) => borderObj[key] !== undefined);
      const classes = {};
      keys.forEach((key) => {
        // @ts-ignore
        const val = borderObj[key];
        if (typeof val === 'boolean') {
          // @ts-ignore
          classes[`border-${key}`] = true;
        } else if (typeof val === 'number' || typeof val === 'string') {
          // @ts-ignore
          classes[`border-${key}-${val}`] = true;
        } else if (typeof val === 'object') {
          if ('color' in val) {
            // @ts-ignore
            classes[`border-${key}-${val.color}`] = true;
          }
          if ('width' in val) {
            // @ts-ignore
            classes[`border-${key}-${val.width}`] = true;
          }
        }
      });
      return Object.entries(classes).length === 0 ? { border: false } : classes;
    }
    return { border: false };
  });
}
