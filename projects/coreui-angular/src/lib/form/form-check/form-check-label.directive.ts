import { Directive } from '@angular/core';

@Directive({
  selector: 'label[cFormCheckLabel]',
  standalone: true,
  host: { class: 'form-check-label' }
})
export class FormCheckLabelDirective {}
