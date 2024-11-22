import { Directive } from '@angular/core';

@Directive({
  selector: '[cAlertHeading]',
  host: { class: 'alert-heading' }
})
export class AlertHeadingDirective {}
