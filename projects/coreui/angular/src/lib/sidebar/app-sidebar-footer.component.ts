import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-sidebar-footer, cui-sidebar-footer',
  template: `<ng-content></ng-content>`
})
export class AppSidebarFooterComponent {

  @HostBinding('class.sidebar-footer') _sidebarFooter = true;

  constructor() { }
}
