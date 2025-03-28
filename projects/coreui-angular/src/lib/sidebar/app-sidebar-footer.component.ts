import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-sidebar-footer, cui-sidebar-footer',
  template: `<ng-content />`,
  standalone: true
})
export class AppSidebarFooterComponent {

  @HostBinding('class.sidebar-footer') sidebarFooterClass = true;

  constructor() { }
}
