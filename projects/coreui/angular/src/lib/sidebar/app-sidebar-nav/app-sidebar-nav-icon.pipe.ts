import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appSidebarNavIcon'
})
export class AppSidebarNavIconPipe implements PipeTransform {

  transform(item: any, args?: any): any {
    const classes = {
      'nav-icon': true
    };
    const icon = item.icon;
    classes[icon] = !!item.icon;
    return classes;
  }
}
