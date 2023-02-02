import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[cCardSubtitle]',
  standalone: true
})
export class CardSubtitleDirective {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'card-subtitle': true
    };
  }
}
