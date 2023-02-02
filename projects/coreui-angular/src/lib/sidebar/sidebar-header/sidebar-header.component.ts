import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-sidebar-header',
  template: `<ng-content></ng-content>`,
  standalone: true
})
export class SidebarHeaderComponent {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'sidebar-header': true
    };
  }
}
