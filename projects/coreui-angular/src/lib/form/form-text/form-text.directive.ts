import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cFormText]'
})
export class FormTextDirective {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'form-text': true,
    };
  }

  constructor() { }
}
