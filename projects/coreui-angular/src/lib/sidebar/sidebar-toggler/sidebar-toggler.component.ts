import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'c-sidebar-toggler',
  template: ``,
})
export class SidebarTogglerComponent {

  @HostBinding('attr.role')
  @Input() role = 'button';

  @HostBinding('class.sidebar-toggler') sidebarTogglerClass = true;
}
