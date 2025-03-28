import { Component, Input } from '@angular/core';
import { INavData } from '../app-sidebar-nav';

@Component({
  selector: 'app-sidebar-nav-divider, cui-sidebar-nav-divider',
  template: ``,
  standalone: true
})
export class AppSidebarNavDividerComponent {
  @Input() item?: INavData;
}
