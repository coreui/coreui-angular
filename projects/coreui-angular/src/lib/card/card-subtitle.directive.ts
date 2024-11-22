import { Directive } from '@angular/core';

@Directive({
  selector: '[cCardSubtitle]',
  host: { class: 'card-subtitle' }
})
export class CardSubtitleDirective {}
