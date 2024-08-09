import { Component } from '@angular/core';

@Component({
  selector: 'c-offcanvas-header',
  template: '<ng-content />',
  standalone: true,
  host: { class: 'offcanvas-header' }
})
export class OffcanvasHeaderComponent {}
