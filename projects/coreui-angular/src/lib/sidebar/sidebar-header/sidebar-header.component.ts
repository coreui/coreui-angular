import { Component } from '@angular/core';

@Component({
  selector: 'c-sidebar-header',
  template: '<ng-content />',
  standalone: true,
  host: { class: 'sidebar-header' }
})
export class SidebarHeaderComponent {}
