import { Directive } from '@angular/core';

@Directive({
  selector: '[cCardTitle]',
  standalone: true,
  host: { class: 'card-title' }
})
export class CardTitleDirective {}
