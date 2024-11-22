import { Directive } from '@angular/core';

@Directive({
  selector: '[cDropdownDivider]',
  host: { class: 'dropdown-divider' }
})
export class DropdownDividerDirective {}
