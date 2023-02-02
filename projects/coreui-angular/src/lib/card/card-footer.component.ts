import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-card-footer, [c-card-footer]',
  template: '<ng-content></ng-content>',
  standalone: true
})
export class CardFooterComponent {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'card-footer': true
    };
  }
}
