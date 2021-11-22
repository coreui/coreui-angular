import { Pipe, PipeTransform } from '@angular/core';

import {SidebarNavHelper} from './sidebar-nav.service';

@Pipe({
  name: 'cSidebarNavItemClass'
})
export class SidebarNavItemClassPipe implements PipeTransform {

  constructor(
    public helper: SidebarNavHelper
  ) {}

  // transform(item: any, ...args: any[]): any {
  transform(item: any, args?: any[]): any {
      const itemType = this.helper.itemType(item);
      let itemClass;
      if (['divider', 'title'].includes(itemType)) {
        itemClass = `nav-${itemType}`;
      } else if (itemType === 'group') {
        // itemClass = 'c-sidebar-nav-group' ;
        itemClass = '' ;
      } else {
        itemClass = 'nav-item';
      }
      return item.class ? `${itemClass} ${item.class}` : itemClass;
    }
}
