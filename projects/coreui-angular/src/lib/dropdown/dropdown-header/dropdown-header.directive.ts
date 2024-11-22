import { Directive } from '@angular/core';

@Directive({
  selector: '[cDropdownHeader]',
  host: { class: 'dropdown-header' }
})
export class DropdownHeaderDirective {}
