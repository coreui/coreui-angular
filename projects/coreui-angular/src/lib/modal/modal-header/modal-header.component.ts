import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-modal-header',
  template: '<ng-content />',
  standalone: true
})
export class ModalHeaderComponent {
  @HostBinding('class')
  get hostClasses(): any {
    return {
      'modal-header': true
    };
  }
}
