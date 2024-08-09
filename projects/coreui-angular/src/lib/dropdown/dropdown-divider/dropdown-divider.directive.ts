import { Directive } from '@angular/core';

@Directive({
  selector: '[cDropdownDivider]',
  standalone: true,
  host: { class: 'dropdown-divider' }
})
export class DropdownDividerDirective {}
