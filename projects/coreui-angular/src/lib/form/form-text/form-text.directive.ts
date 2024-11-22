import { Directive } from '@angular/core';

@Directive({
  selector: '[cFormText]',
  host: { class: 'form-text' }
})
export class FormTextDirective {}
