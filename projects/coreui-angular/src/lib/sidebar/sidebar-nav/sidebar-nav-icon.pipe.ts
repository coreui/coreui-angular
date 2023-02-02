import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cSidebarNavIcon',
  standalone: true
})
export class SidebarNavIconPipe implements PipeTransform {

  transform(item: any, args?: any): any {
    const icon = item.icon;
    return {
      'nav-icon': true,
      [`${icon}`]: !!icon
    };
  }
}
