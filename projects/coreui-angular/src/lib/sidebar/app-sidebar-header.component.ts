import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-sidebar-header, cui-sidebar-header',
  template: `<ng-content></ng-content>`
})
export class AppSidebarHeaderComponent {

  @HostBinding('class.sidebar-header') sidebarHeaderClass = true;

  constructor() { }
}
