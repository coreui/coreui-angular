import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-sidebar-form, cui-sidebar-form',
  template: `<ng-content />`,
  standalone: true
})
export class AppSidebarFormComponent {

  @HostBinding('class.sidebar-form') sidebarFormClass = true;

}
