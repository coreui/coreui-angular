import { Component } from '@angular/core';

@Component({
  selector: 'c-navbar-text',
  template: '<ng-content />',
  host: { class: 'navbar-text' }
})
export class NavbarTextComponent {}
