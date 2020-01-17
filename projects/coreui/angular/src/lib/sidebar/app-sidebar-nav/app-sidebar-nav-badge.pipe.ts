import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appSidebarNavBadge'
})
export class AppSidebarNavBadgePipe implements PipeTransform {

  transform(item: any, args?: any): any {
    const classes = {
      badge: true
    };
    const variant = `badge-${item.badge.variant}`;
    classes[variant] = !!item.badge.variant;
    classes[item.badge.class] = !!item.badge.class;
    return classes;
  }

}
