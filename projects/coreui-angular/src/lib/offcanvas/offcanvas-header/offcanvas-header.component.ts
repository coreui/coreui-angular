import { Component } from '@angular/core';

@Component({
  selector: 'c-offcanvas-header',
  template: '<ng-content />',
  host: { class: 'offcanvas-header' }
})
export class OffcanvasHeaderComponent {}
