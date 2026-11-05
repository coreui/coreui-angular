import { Pipe, PipeTransform } from '@angular/core';

import { INavData } from '../app-sidebar-nav';

@Pipe({
  name: 'appSidebarNavBadge',
  standalone: true
})
export class AppSidebarNavBadgePipe implements PipeTransform {

  transform(item: INavData): Record<string, boolean> {
    const classes: Record<string, boolean> = {
      badge: true
    };
    if (item.badge?.variant) {
      classes[`badge-${item.badge.variant}`] = true;
    }
    if (item.badge?.class) {
      classes[item.badge.class] = true;
    }
    return classes;
  }

}
