import { Component } from '@angular/core';

@Component({
  selector: 'c-modal-content',
  template: '<ng-content />',
  standalone: true,
  host: { class: 'modal-content' }
})
export class ModalContentComponent {}
