import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-modal-content',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: { class: 'modal-content' }
})
export class ModalContentComponent {}
