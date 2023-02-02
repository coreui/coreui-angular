import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-card-group, [c-card-group]',
  template: '<ng-content></ng-content>',
  standalone: true
})
export class CardGroupComponent {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'card-group': true
    };
  }
}
