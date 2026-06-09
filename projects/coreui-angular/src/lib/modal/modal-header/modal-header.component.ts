import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-modal-header',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: { class: 'modal-header' }
})
export class ModalHeaderComponent {}
