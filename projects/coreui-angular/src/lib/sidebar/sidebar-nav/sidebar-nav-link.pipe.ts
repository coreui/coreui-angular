import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cSidebarNavLink',
  standalone: true
})
export class SidebarNavLinkPipe implements PipeTransform {

  transform(item: any): any {

    const disabled = item?.attributes?.disabled;

    return {
      'nav-link': true,
      disabled,
      'btn-link': disabled,
      [`nav-link-${item.variant}`]: !!item.variant
    };
  }
}
