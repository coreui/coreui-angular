import { Directive } from '@angular/core';

@Directive({
  selector: '[cDropdownItemPlain]',
  host: { class: 'dropdown-item-text' }
})
export class DropdownItemPlainDirective {}
