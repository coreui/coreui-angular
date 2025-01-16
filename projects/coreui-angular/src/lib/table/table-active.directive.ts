import { booleanAttribute, Directive, input } from '@angular/core';

@Directive({
  selector: '[cTableActive]',
  exportAs: 'cTableActive',
  host: {
    '[class.table-active]': 'active()'
  }
})
export class TableActiveDirective {
  /**
   * Highlight a table row or cell
   * @return boolean
   */
  readonly active = input(false, { alias: "cTableActive", transform: booleanAttribute });
}
