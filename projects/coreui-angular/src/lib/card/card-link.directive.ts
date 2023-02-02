import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cCardLink]',
  standalone: true
})
export class CardLinkDirective {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'card-link': true
    };
  }
}
