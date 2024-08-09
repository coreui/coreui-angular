import { Directive } from '@angular/core';

@Directive({
  selector: '[cAlertHeading]',
  standalone: true,
  host: { class: 'alert-heading' }
})
export class AlertHeadingDirective {}
