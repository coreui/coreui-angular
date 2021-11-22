import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'c-card-header, [c-card-header]',
  template: '<ng-content></ng-content>',
})
export class CardHeaderComponent {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'card-header': true,
    };
  }
}
