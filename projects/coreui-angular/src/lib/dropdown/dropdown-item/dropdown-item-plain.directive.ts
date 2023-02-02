import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cDropdownItemPlain]',
  standalone: true
})
export class DropdownItemPlainDirective {
  @HostBinding('class')
  get hostClasses(): any {
    return {
      'dropdown-item-text': true
    };
  }
}
