import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-modal-header',
  template: `
    <ng-content></ng-content>`,
})
export class ModalHeaderComponent {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'modal-header': true
    };
  }

}
