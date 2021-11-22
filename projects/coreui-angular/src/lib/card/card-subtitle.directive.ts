import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cCardSubtitle]'
})
export class CardSubtitleDirective {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'card-subtitle': true
    };
  }
}
