import { Directive } from '@angular/core';

@Directive({
  selector: '[cAlertLink]',
  host: { class: 'alert-link' }
})
export class AlertLinkDirective {}
