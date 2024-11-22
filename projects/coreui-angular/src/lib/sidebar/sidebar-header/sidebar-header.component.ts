import { Component } from '@angular/core';

@Component({
  selector: 'c-sidebar-header',
  template: '<ng-content />',
  host: { class: 'sidebar-header' }
})
export class SidebarHeaderComponent {}
