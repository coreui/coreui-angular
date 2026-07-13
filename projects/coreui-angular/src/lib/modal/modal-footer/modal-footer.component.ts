import { Component } from '@angular/core';

@Component({
  selector: 'c-modal-footer',
  template: '<ng-content />',
  host: { class: 'modal-footer' }
})
export class ModalFooterComponent {}
