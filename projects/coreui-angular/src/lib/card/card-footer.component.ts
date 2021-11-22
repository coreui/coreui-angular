import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'c-card-footer, [c-card-footer]',
  template: '<ng-content></ng-content>'
})
export class CardFooterComponent {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'card-footer': true,
    };
  }
}
