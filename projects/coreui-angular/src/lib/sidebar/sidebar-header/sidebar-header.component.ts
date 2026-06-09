import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'c-sidebar-header',
  template: '<ng-content />',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: { class: 'sidebar-header' }
})
export class SidebarHeaderComponent {}
