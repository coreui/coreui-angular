import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cCardText]'
})
export class CardTextDirective {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'card-text': true
    };
  }
}
