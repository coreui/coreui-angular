import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[cTableActive]',
  standalone: true
})
export class TableActiveDirective {

  /**
   * Highlight a table row or cell
   * @type boolean
   */
  @Input({ alias: 'cTableActive', transform: booleanAttribute }) active: string | boolean = false;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'table-active': this.active
    };
  }
}
