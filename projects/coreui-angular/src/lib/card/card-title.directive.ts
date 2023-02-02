import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cCardTitle]',
  standalone: true
})
export class CardTitleDirective {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'card-title': true
    };
  }
}
