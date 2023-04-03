import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appSidebarNavBadge',
  standalone: true
})
export class AppSidebarNavBadgePipe implements PipeTransform {

  transform(item: any, args?: any): any {
    const classes: any = {
      badge: true
    };
    const variant = `badge-${item.badge.variant}`;
    classes[variant] = !!item.badge.variant;
    classes[item.badge.class] = !!item.badge.class;
    return classes;
  }

}
