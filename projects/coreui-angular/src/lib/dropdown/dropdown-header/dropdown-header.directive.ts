import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cDropdownHeader]'
})
export class DropdownHeaderDirective {

  constructor() {
  }

  @HostBinding('class')
  get hostClasses(): any {

    return {
      'dropdown-header': true,
    };
  }

}
