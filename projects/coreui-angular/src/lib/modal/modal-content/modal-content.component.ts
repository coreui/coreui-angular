import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-modal-content',
  template: '<ng-content></ng-content>',
  standalone: true
})
export class ModalContentComponent {
  @HostBinding('class')
  get hostClasses(): any {
    return {
      'modal-content': true
    };
  }
}
