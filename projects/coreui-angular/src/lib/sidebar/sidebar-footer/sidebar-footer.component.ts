import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-sidebar-footer',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: { class: 'sidebar-footer' }
})
export class SidebarFooterComponent {}
