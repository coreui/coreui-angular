import { Directive, HostBinding, Input } from '@angular/core';
import { Rounded, RoundedSize } from './rounded.type';

@Directive({
  selector: '[cRounded]',
  standalone: true
})
export class RoundedDirective {

  /**
   * Set border radius variant and radius size
   * @type Rounded
   */
  @Input('cRounded') rounded: Rounded = true;

  @HostBinding('class')
  get hostClasses(): any {

    if ( typeof this.rounded === 'boolean' ) {
      return { rounded: true };
    }
    if ( typeof this.rounded === 'number' || typeof this.rounded === 'string' ) {
      return {
        [`rounded-${this.rounded}`]: true
      };
    }
    if ( typeof this.rounded === 'object' ) {
      const roundedObj = {
        top: undefined,
        end: undefined,
        bottom: undefined,
        start: undefined,
        circle: undefined,
        pill: undefined,
        size: undefined,
        ...this.rounded,
      };
      // @ts-ignore
      const keys = Object.keys(roundedObj).filter(key => roundedObj[key] !== undefined );
      const classes = {};
      keys.forEach(key => {
        // @ts-ignore
        const val = roundedObj[key];
        if (typeof val === 'boolean') {
          // @ts-ignore
          classes[`rounded-${key}`] = val;
        } else {
          // @ts-ignore
          classes[`rounded-${val}`] = true;
        }
      });
      // console.log('rounded keys', keys, classes);
      return Object.entries(classes).length === 0 ? {rounded: false} : classes;
    }
  }
}
