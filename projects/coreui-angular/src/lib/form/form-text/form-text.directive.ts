import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cFormText]',
  standalone: true
})
export class FormTextDirective {
  @HostBinding('class')
  get hostClasses(): any {
    return {
      'form-text': true
    };
  }
}
