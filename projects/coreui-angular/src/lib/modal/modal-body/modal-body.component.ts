import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-modal-body',
  template: '<ng-content></ng-content>',
  styleUrls: ['./modal-body.component.scss']
})
export class ModalBodyComponent {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'modal-body': true,
    };
  }
}
