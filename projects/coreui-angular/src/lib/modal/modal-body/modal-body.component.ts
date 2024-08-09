import { Component } from '@angular/core';

@Component({
  selector: 'c-modal-body',
  template: '<ng-content />',
  styleUrls: ['./modal-body.component.scss'],
  standalone: true,
  host: { class: 'modal-body' }
})
export class ModalBodyComponent {}
