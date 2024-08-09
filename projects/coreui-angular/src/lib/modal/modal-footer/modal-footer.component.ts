import { Component } from '@angular/core';

@Component({
  selector: 'c-modal-footer',
  template: '<ng-content />',
  standalone: true,
  host: { class: 'modal-footer' }
})
export class ModalFooterComponent {}
