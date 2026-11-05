import { Pipe, PipeTransform, inject } from '@angular/core';

import { SidebarNavHelper } from '../app-sidebar-nav.service';
import { INavData } from '../app-sidebar-nav';

@Pipe({
  name: 'appSidebarNavItemClass',
  standalone: true
})
export class AppSidebarNavItemClassPipe implements PipeTransform {
  helper = inject(SidebarNavHelper);


  transform(item: INavData): string {
    const itemType = this.helper.itemType(item);
    let itemClass;
    if (['divider', 'title'].includes(itemType)) {
      itemClass = `nav-${itemType}`;
    } else if (itemType === 'dropdown') {
      itemClass = 'nav-item nav-dropdown';
    } else {
      itemClass = 'nav-item';
    }
    return item.class ? `${itemClass} ${item.class}` : itemClass;
  }
}
