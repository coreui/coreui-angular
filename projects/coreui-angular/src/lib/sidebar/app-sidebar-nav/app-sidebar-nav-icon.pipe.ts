import { Pipe, PipeTransform } from '@angular/core';

import { INavData } from '../app-sidebar-nav';

@Pipe({
  name: 'appSidebarNavIcon',
  standalone: true
})
export class AppSidebarNavIconPipe implements PipeTransform {

  transform(item: INavData): Record<string, boolean> {
    const classes: Record<string, boolean> = {
      'nav-icon': true
    };
    if (item.icon) {
      classes[item.icon] = true;
    }
    return classes;
  }
}
