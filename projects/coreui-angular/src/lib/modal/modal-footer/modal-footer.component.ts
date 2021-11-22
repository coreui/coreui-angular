import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-modal-footer',
  template: '<ng-content></ng-content>',
})
export class ModalFooterComponent {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'modal-footer': true,
    };
  }

}
