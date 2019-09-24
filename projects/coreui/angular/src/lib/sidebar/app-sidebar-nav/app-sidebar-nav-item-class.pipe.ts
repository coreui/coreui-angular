import { Pipe, PipeTransform } from '@angular/core';

import {SidebarNavHelper} from '../app-sidebar-nav.service';

@Pipe({
  name: 'appSidebarNavItemClass'
})
export class AppSidebarNavItemClassPipe implements PipeTransform {

  constructor(
    public helper: SidebarNavHelper
  ) {}

  transform(item: any, ...args: any[]): any {
      const itemType = this.helper.itemType(item);
      let itemClass;
      if (['divider', 'title'].includes(itemType)) {
        itemClass = `nav-${itemType}`;
      } else if (itemType === 'dropdown') {
        itemClass = 'nav-item nav-dropdown' ;
      } else {
        itemClass = 'nav-item';
      }
      return item.class ? `${itemClass} ${item.class}` : itemClass;
    }
}
