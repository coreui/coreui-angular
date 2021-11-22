import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'c-card-group, [c-card-group]',
  template: '<ng-content></ng-content>'
})
export class CardGroupComponent {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'card-group': true
    };
  }
}
