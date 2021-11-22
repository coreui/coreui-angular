import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cDropdownItemPlain]'
})
export class DropdownItemPlainDirective {

  constructor() {
  }

  @HostBinding('class')
  get hostClasses(): any {

    return {
      'dropdown-item-text': true,
    };
  }

}
