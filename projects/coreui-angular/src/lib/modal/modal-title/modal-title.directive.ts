import { Directive } from '@angular/core';

@Directive({
  selector: '[cModalTitle]',
  standalone: true,
  host: { class: 'modal-title' }
})
export class ModalTitleDirective {}
