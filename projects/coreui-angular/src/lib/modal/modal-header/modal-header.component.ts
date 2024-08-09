import { Component } from '@angular/core';

@Component({
  selector: 'c-modal-header',
  template: '<ng-content />',
  standalone: true,
  host: { class: 'modal-header' }
})
export class ModalHeaderComponent {}
