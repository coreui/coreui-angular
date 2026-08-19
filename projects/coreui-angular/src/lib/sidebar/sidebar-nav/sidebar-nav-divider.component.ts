import { Component, input } from '@angular/core';
import { INavData } from './sidebar-nav';

@Component({
  selector: 'c-sidebar-nav-divider',
  template: ``
})
export class SidebarNavDividerComponent {
  /**
   * The nav data item rendered as a sidebar nav divider.
   * @returns INavData
   */
  readonly item = input<INavData>();
}
