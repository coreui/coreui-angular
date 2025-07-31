import { Component, input } from '@angular/core';
import { INavData } from './sidebar-nav';

@Component({
  selector: 'c-sidebar-nav-divider',
  template: ``
})
export class SidebarNavDividerComponent {
  readonly item = input<INavData>();
}
