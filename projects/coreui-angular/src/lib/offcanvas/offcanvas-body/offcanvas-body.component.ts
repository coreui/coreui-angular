import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-offcanvas-body',
  template: '<ng-content />',
  styleUrls: ['./offcanvas-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  host: { class: 'offcanvas-body' }
})
export class OffcanvasBodyComponent {}
