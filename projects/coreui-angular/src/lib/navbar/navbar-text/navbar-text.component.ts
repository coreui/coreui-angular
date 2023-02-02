import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-navbar-text',
  template: '<ng-content></ng-content>',
  standalone: true
})
export class NavbarTextComponent {

  @HostBinding('class.navbar-text') navbarTextClass = true;

}
