import { Component } from '@angular/core';

@Component({
  selector: 'c-sidebar-footer',
  template: '<ng-content />',
  standalone: true,
  host: { class: 'sidebar-footer' }
})
export class SidebarFooterComponent {}
