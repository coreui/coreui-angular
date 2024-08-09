import { Directive } from '@angular/core';

@Directive({
  selector: '[cDropdownHeader]',
  standalone: true,
  host: { class: 'dropdown-header' }
})
export class DropdownHeaderDirective {}
