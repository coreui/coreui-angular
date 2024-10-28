import { Component } from '@angular/core';

@Component({
  selector: 'c-navbar-text',
  template: '<ng-content />',
  standalone: true,
  host: { class: 'navbar-text' }
})
export class NavbarTextComponent {}
