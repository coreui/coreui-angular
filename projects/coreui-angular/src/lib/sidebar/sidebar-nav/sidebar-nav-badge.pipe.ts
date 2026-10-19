import { Pipe, PipeTransform } from '@angular/core';

import { classMap } from './sidebar-nav.utils';

@Pipe({
  name: 'cSidebarNavBadge'
})
export class SidebarNavBadgePipe implements PipeTransform {
  transform(item: any, args?: any): any {
    const badge = item.badge;
    return {
      badge: true,
      'ms-auto': true,
      'badge-sm': !badge.size,
      [`badge-${badge.size}`]: !!badge.size,
      [`bg-${badge.color}`]: !!badge.color,
      ...classMap(badge.class)
    };
  }
}
