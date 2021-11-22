import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cAlertLink]'
})
export class AlertLinkDirective {

  @HostBinding('class')
  get hostClasses(): any {

    return {
      'alert-link': true,
    };
  }

  constructor() { }

}
