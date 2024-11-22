import { Directive } from '@angular/core';

@Directive({
  selector: '[cCardTitle]',
  host: { class: 'card-title' }
})
export class CardTitleDirective {}
