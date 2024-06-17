import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-modal-body',
  template: '<ng-content />',
  styleUrls: ['./modal-body.component.scss'],
  standalone: true
})
export class ModalBodyComponent {
  @HostBinding('class')
  get hostClasses(): any {
    return {
      'modal-body': true
    };
  }
}
