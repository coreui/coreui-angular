import { Pipe, PipeTransform } from '@angular/core';

import { classMap } from './sidebar-nav.utils';

@Pipe({
  name: 'cSidebarNavIcon'
})
export class SidebarNavIconPipe implements PipeTransform {
  transform(item: any, args?: any): any {
    return {
      'nav-icon': true,
      ...classMap(item?.icon)
    };
  }
}
