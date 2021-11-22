import { Pipe, PipeTransform } from '@angular/core';

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
      [`${badge.class}`]: !!badge.class
    };
  }

}
