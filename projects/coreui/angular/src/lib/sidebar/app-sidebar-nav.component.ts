import { Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { INavData } from './app-sidebar-nav';

@Component({
  selector: 'app-sidebar-nav, cui-sidebar-nav',
  templateUrl: './app-sidebar-nav.component.html'
})
export class AppSidebarNavComponent implements OnChanges {
  @Input() navItems: INavData[] = [];

  @HostBinding('class.sidebar-nav') _sidebarBav = true;
  @HostBinding('attr.role') @Input() role = 'nav';

  public navItemsArray: INavData[] = [];

  constructor(
    public router: Router,
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {
    this.navItemsArray = Array.isArray(this.navItems) ? this.navItems.slice() : [];
  }
}
