import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cDropdownDivider]',
  standalone: true
})
export class DropdownDividerDirective {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'dropdown-divider': true
    };
  }

}
