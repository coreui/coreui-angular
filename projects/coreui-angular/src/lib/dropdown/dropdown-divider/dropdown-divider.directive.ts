import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cDropdownDivider]'
})
export class DropdownDividerDirective {

  constructor() {
  }

  @HostBinding('class')
  get hostClasses(): any {

    return {
      'dropdown-divider': true,
    };
  }

}
