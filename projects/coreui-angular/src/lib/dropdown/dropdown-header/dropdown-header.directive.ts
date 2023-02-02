import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cDropdownHeader]',
  standalone: true,
})
export class DropdownHeaderDirective {
  @HostBinding('class')
  get hostClasses(): any {
    return {
      'dropdown-header': true,
    };
  }

}
