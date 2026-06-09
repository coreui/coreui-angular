import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-offcanvas-header',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: { class: 'offcanvas-header' }
})
export class OffcanvasHeaderComponent {}
