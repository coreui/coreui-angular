import { Directive, HostBinding, Input } from '@angular/core';
import { Alignment } from '../coreui.types';

@Directive({
  selector: '[cAlign]'
})
export class AlignDirective {
  /**
   * Set vertical alignment of inline, inline-block, inline-table, and table cell elements
   * @type Alignment
   */
  @Input('cAlign') align?: Alignment;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      [`align-${this.align}`]: !!this.align,
    };
  }

}
