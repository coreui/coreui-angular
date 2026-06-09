import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-modal-footer',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: { class: 'modal-footer' }
})
export class ModalFooterComponent {}
