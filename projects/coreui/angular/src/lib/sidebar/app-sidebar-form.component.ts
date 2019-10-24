import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-sidebar-form, cui-sidebar-form',
  template: `<ng-content></ng-content>`
})
export class AppSidebarFormComponent {

  @HostBinding('class.sidebar-form') _sidebarForm = true;

  constructor() { }
}
