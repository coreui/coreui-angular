import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appSidebarNavLink'
})
export class AppSidebarNavLinkPipe implements PipeTransform {

  transform(item: any): any {

    const classes = { 'nav-link': true };

    const disabled = item.attributes && item.attributes.disabled;
    classes['disabled'] = disabled;
    classes['btn-link'] = disabled;
    classes[`nav-link-${item.variant}`] = !!item.variant;
    return classes;
  }
}
