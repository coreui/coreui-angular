import { Component } from '@angular/core';

@Component({
  selector: 'c-nav-item',
  template: '<ng-content />',
  styleUrls: ['./nav-item.component.scss'],
  host: { class: 'nav-item' }
})
export class NavItemComponent {}
