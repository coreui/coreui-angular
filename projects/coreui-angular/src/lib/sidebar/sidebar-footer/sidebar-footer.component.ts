import { Component } from '@angular/core';

@Component({
  selector: 'c-sidebar-footer',
  template: '<ng-content />',
  host: { class: 'sidebar-footer' }
})
export class SidebarFooterComponent {}
