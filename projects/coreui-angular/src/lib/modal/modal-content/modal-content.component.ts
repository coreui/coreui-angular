import { Component } from '@angular/core';

@Component({
  selector: 'c-modal-content',
  template: '<ng-content />',
  host: { class: 'modal-content' }
})
export class ModalContentComponent {}
