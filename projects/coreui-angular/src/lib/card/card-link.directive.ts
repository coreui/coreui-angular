import { Directive } from '@angular/core';

@Directive({
  selector: '[cCardLink]',
  host: { class: 'card-link' }
})
export class CardLinkDirective {}
