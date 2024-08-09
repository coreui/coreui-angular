import { Directive } from '@angular/core';

@Directive({
  selector: '[cFormText]',
  standalone: true,
  host: { class: 'form-text' }
})
export class FormTextDirective {}
