import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cAlertHeading]'
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
