import { computed, Directive, input } from '@angular/core';
import { Rounded } from './rounded.type';

@Directive({
  selector: '[cRounded]',
  exportAs: 'cRounded',
  host: { '[class]': 'hostClasses' }
})
export class RoundedDirective {
  /**
   * Set border radius variant and radius size
   * @type Rounded
   */
  readonly cRounded = input<Rounded>(true);

  readonly hostClasses = computed( () => {
    const rounded = this.cRounded();
    if (typeof rounded === 'boolean') {
      return { rounded: true };
    }
    if (typeof rounded === 'number' || typeof rounded === 'string') {
      return {
        [`rounded-${rounded}`]: true
      };
    }
    if (typeof rounded === 'object') {
      const roundedObj = {
        top: undefined,
        end: undefined,
        bottom: undefined,
        start: undefined,
        circle: undefined,
        pill: undefined,
        size: undefined,
        ...rounded
      };
      // @ts-ignore
      const keys = Object.keys(roundedObj).filter((key) => roundedObj[key] !== undefined);
      const classes = {};
      keys.forEach((key) => {
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
      return Object.entries(classes).length === 0 ? { rounded: false } : classes;
    }
    return { rounded: false };
  });
}
