import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cAlertLink]',
  standalone: true
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
