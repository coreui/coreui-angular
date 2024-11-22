import { Directive } from '@angular/core';

@Directive({
  selector: '[cCardText]',
  host: { class: 'card-text' }
})
export class CardTextDirective {}
