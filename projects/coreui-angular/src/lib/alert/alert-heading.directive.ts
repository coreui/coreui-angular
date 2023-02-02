import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cAlertHeading]',
  standalone: true
})
export class AlertHeadingDirective {

  @HostBinding('class')
  get hostClasses(): any {

    return {
      'alert-heading': true,
    };
  }

  constructor() { }

}
