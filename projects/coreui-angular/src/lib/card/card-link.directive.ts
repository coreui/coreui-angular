import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cCardLink]'
})
export class CardLinkDirective {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'card-link': true
    };
  }
}
