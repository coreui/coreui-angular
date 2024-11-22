import { Directive } from '@angular/core';

@Directive({
  selector: 'label[cFormCheckLabel]',
  host: { class: 'form-check-label' }
})
export class FormCheckLabelDirective {}
