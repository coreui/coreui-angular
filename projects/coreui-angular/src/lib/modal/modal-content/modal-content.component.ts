import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-modal-content',
  template: '<ng-content></ng-content>'
})
export class ModalContentComponent {

  constructor() { }

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'modal-content': true
    };
  }
}
