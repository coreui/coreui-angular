import { Directive } from '@angular/core';

@Directive({
  selector: '[cCardLink]',
  standalone: true,
  host: { class: 'card-link' }
})
export class CardLinkDirective {}
