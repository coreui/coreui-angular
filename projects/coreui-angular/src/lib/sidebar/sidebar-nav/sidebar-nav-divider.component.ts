import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { INavData } from './sidebar-nav';

@Component({
  selector: 'c-sidebar-nav-divider',
  changeDetection: ChangeDetectionStrategy.Eager,
  template: ``
})
export class SidebarNavDividerComponent {
  readonly item = input<INavData>();
}
