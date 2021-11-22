import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cSidebarNavLink'
})
export class SidebarNavLinkPipe implements PipeTransform {

  transform(item: any): any {

    const disabled = item?.attributes?.disabled;

    const classes = {
      'nav-link': true,
      disabled,
      'btn-link': disabled,
      [`nav-link-${item.variant}`]: !!item.variant
    };
    return classes;
  }
}
