import { Component } from '@angular/core';

@Component({
  selector: 'c-offcanvas-body',
  template: '<ng-content />',
  styleUrls: ['./offcanvas-body.component.scss'],
  standalone: true,
  host: { class: 'offcanvas-body' }
})
export class OffcanvasBodyComponent {}
