import { Pipe, PipeTransform } from '@angular/core';

import { INavData } from '../app-sidebar-nav';

@Pipe({
  name: 'appSidebarNavLink',
  standalone: true
})
export class AppSidebarNavLinkPipe implements PipeTransform {

  transform(item: INavData): Record<string, boolean> {

    const classes: Record<string, boolean> = { 'nav-link': true };

    const disabled = !!item.attributes?.['disabled'];
    classes['disabled'] = disabled;
    classes['btn-link'] = disabled;
    classes[`nav-link-${item.variant}`] = !!item.variant;
    return classes;
  }
}
