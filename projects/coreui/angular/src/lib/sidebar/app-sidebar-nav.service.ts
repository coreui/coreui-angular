import { Injectable } from '@angular/core';

import { INavData } from './app-sidebar-nav';

@Injectable()
export abstract class SidebarNavService {
  /**
   * Returns a sidebar-nav items config NavData
   */
  abstract getSidebarNavItemsConfig(): INavData[];
}

@Injectable()
export class SidebarNavHelper {

  itemType(item) {
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
    } else {
      return 'link';
    }
  }

  public isActive(router, item) {
    return router.isActive(item.url, false);
  }

  public hasBadge = (item) => Boolean(item.badge);
  public hasIcon = (item) => Boolean(item.icon);

  public getIconClass(item) {
    const classes = {
      'nav-icon': true
    };
    const icon = item.icon;
    classes[icon] = this.hasIcon(item);
    return classes;
  }
}
