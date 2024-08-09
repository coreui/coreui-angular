import { Directive } from '@angular/core';

@Directive({
  selector: '[cDropdownItemPlain]',
  standalone: true,
  host: { class: 'dropdown-item-text' }
})
export class DropdownItemPlainDirective {}
