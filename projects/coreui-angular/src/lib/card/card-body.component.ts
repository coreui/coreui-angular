import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'c-card-body, [c-card-body]',
  template: '<ng-content></ng-content>'
})
export class CardBodyComponent {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'card-body': true,
    };
  }
}
