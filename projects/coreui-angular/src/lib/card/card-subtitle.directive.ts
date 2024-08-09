import { Directive } from '@angular/core';

@Directive({
  selector: '[cCardSubtitle]',
  standalone: true,
  host: { class: 'card-subtitle' }
})
export class CardSubtitleDirective {}
