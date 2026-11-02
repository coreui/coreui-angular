import { Injectable } from '@angular/core';
import { containsTree } from '@angular/router';

import { INavData } from './sidebar-nav';
import { classMap } from './sidebar-nav.utils';

@Injectable()
export abstract class SidebarNavService {
  /**
   * Returns a sidebar-nav items config NavData
   */
  abstract getSidebarNavItemsConfig(): INavData[];
}

@Injectable({
  providedIn: 'root'
})
export class SidebarNavHelper {
  itemType(item: INavData): string {
    if (item.divider) {
      return 'divider';
    } else if (item.title) {
      return 'title';
    } else if (item.children && item.children.length > 0) {
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
    if (item.url == null) {
      return false;
    }
    const url = Array.isArray(item.url) ? router.createUrlTree(item.url) : router.parseUrl(item.url);
    return containsTree(router.parseUrl(router.url), url, {
      paths: 'subset',
      queryParams: 'subset',
      matrixParams: 'ignored',
      fragment: 'ignored'
    });
  }

  public isDisabledLink = (item: INavData) => Boolean(item?.attributes?.['disabled']);
  public isExternalLink = (item: INavData) => {
    const linkPath = Array.isArray(item?.url) ? item.url[0] : item?.url;
    return !!item?.href || linkPath?.substring(0, 4) === 'http';
  };

  public hasBadge = (item: INavData) => Boolean(item?.badge);
  public hasIcon = (item: INavData) => Boolean(item?.icon) || item?.icon === '';
  public hasIconComponent = (item: INavData) => Boolean(item?.iconComponent);

  public getIconClass(item: INavData): any {
    return {
      'nav-icon': true,
      ...classMap(item.icon)
    };
  }
}
