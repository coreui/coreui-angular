import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-modal-body',
  template: '<ng-content />',
  styleUrls: ['./modal-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  host: { class: 'modal-body' }
})
export class ModalBodyComponent {}
