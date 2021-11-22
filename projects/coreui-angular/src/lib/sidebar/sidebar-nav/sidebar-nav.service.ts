import { Injectable } from '@angular/core';

import { INavData } from './sidebar-nav';

@Injectable()
export abstract class SidebarNavService {
  /**
   * Returns a sidebar-nav items config NavData
   */
  abstract getSidebarNavItemsConfig(): INavData[];
}

@Injectable()
export class SidebarNavHelper {

  itemType(item: INavData): string {
    if (item.divider) {
      return 'divider';
    } else if (item.title) {
      return 'title';
    } else if (item.children && item.children.length > 0 ) {
      return 'group';
    } else if (item.label) {
      return 'label';
    } else if (!Object.keys(item).length) {
      return 'empty';
    } else {
      return 'link';
    }
  }

  public isActive(router: any, item: INavData): boolean {
    return router.isActive(item.url, false);
  }

  public hasBadge = (item: INavData) => Boolean(item.badge);
  public hasIcon = (item: INavData) => Boolean(item.icon) || item.icon === '';
  public hasIconComponent = (item: INavData) => Boolean(item.iconComponent);

  public getIconClass(item: INavData): any {
    const classes = {
      'nav-icon': true
    };
    const icon = item.icon;
    // @ts-ignore
    classes[icon] = this.hasIcon(item);
    return classes;
  }
}
