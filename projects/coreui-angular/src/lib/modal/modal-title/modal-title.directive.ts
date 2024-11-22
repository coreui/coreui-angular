import { Directive } from '@angular/core';

@Directive({
  selector: '[cModalTitle]',
  host: { class: 'modal-title' }
})
export class ModalTitleDirective {}
