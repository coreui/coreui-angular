import { Component } from '@angular/core';

@Component({
  selector: 'c-offcanvas-body',
  template: '<ng-content />',
  styleUrls: ['./offcanvas-body.component.scss'],
  host: { class: 'offcanvas-body' }
})
export class OffcanvasBodyComponent {}
