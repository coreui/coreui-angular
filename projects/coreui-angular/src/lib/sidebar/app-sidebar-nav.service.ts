import { Injectable } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { INavData } from './app-sidebar-nav';
import { Router } from '@angular/router';

@Injectable()
export abstract class SidebarNavService {
  /**
   * Returns a sidebar-nav items config NavData
   */
  abstract getSidebarNavItemsConfig(): INavData[];
}

@Injectable()
export class SidebarNavHelper {

  public itemType(item: INavData) {
    if (item.divider) {
      return 'divider';
    } else if (item.title) {
      return 'title';
    } else if (item.children) {
      return 'dropdown';
    } else if (item.label) {
      return 'label';
    } else if (!Object.keys(item).length) {
      return 'empty';
    }
    return 'link';
  }

  public isActive(router: any, item: INavData) {
    return router.isActive(item.url, false);
  }

  public hasBadge = (item: INavData) => Boolean(item.badge);
  public hasIcon = (item: INavData) => Boolean(item.icon);

  public getIconClass(item: INavData) {
    const classes = {
      'nav-icon': true
    };
    if (this.hasIcon(item)) {
      const icon = item.icon;
      // @ts-ignore
      classes[icon] = this.hasIcon(item);
    }
    return classes;
  }
}
