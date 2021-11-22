import { Directive, HostBinding, Input } from '@angular/core';
import { Colors } from '../coreui.types';

@Directive({
  selector: '[cTableColor]'
})
export class TableColorDirective {

  /**
   * Use contextual color for tables, table rows or individual cells.
   * @type Colors
   */
  @Input('cTableColor') color?: Colors;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      [`table-${this.color}`]: !!this.color,
    };
  }
}
