import { Component, HostBinding, Input, OnChanges, inject } from '@angular/core';
import { Router } from '@angular/router';

import { INavData } from './app-sidebar-nav';
import { AppSidebarNavItemsComponent } from './app-sidebar-nav/app-sidebar-nav-items.component';
import {SidebarNavHelper} from "./app-sidebar-nav.service";

@Component({
  selector: 'app-sidebar-nav, cui-sidebar-nav',
  templateUrl: './app-sidebar-nav.component.html',
  standalone: true,
  imports: [AppSidebarNavItemsComponent],
  providers: [SidebarNavHelper]
})
export class AppSidebarNavComponent implements OnChanges {
  router = inject(Router);

  @Input() navItems: INavData[] = [];

  @HostBinding('class.sidebar-nav') sidebarNavClass = true;
  @HostBinding('attr.role') @Input() role = 'nav';

  public navItemsArray: INavData[] = [];

  public ngOnChanges(): void {
    this.navItemsArray = Array.isArray(this.navItems) ? this.navItems.slice() : [];
  }
}
