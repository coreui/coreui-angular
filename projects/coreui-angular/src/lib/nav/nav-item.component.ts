import { Component } from '@angular/core';

@Component({
  selector: 'c-nav-item',
  template: '<ng-content />',
  styleUrls: ['./nav-item.component.scss'],
  standalone: true,
  host: { class: 'nav-item' }
})
export class NavItemComponent {}
