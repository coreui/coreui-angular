import { Directive } from '@angular/core';

@Directive({
  selector: '[cCardText]',
  standalone: true,
  host: { class: 'card-text' }
})
export class CardTextDirective {}
