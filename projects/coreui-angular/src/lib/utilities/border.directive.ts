import { Directive, HostBinding, Input } from '@angular/core';
import { Border, BorderColor, IBorderElement, BorderWidth } from './border.type';

@Directive({
  selector: '[cBorder]'
})
export class BorderDirective {
  /**
   * Add or remove an element’s borders
   * @type Border
   */
  @Input('cBorder') border: Border = true;

  @HostBinding('class')
  get hostClasses(): any {

    if ( typeof this.border === 'boolean' ) {
      return { border: true };
    }
    if ( typeof this.border === 'number' || typeof this.border === 'string' ) {
      return {
        border: true,
        [`border-${this.border}`]: true
      };
    }
    if ( typeof this.border === 'object' ) {
      const borderObj = { top: undefined, end: undefined, bottom: undefined, start: undefined, color: undefined, ...this.border };
      // @ts-ignore
      const keys = Object.keys(borderObj).filter(key => borderObj[key] !== undefined);
      const classes = {};
      keys.forEach(key => {
        // @ts-ignore
        const val = borderObj[key];
        if ( typeof val === 'boolean') {
          // @ts-ignore
          classes[`border-${key}`] = true;
        } else if ( typeof val === 'number' || typeof val === 'string' ) {
          // @ts-ignore
          classes[`border-${key}-${val}`] = true;
        } else if ( typeof val === 'object' ) {
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
      return Object.entries(classes).length === 0 ? {border: false} : classes;
    }
  }
}
