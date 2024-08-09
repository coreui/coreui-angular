import { Directive } from '@angular/core';

@Directive({
  selector: '[cAlertLink]',
  standalone: true,
  host: { class: 'alert-link' }
})
export class AlertLinkDirective {}
