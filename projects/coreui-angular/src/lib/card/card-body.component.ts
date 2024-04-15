import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'c-card-body, [c-card-body]',
  template: '<ng-content />',
  standalone: true
})
export class CardBodyComponent {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'card-body': true,
    };
  }
}
