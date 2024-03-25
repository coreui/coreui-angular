import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-nav-item',
  template: '<ng-content />',
  styleUrls: ['./nav-item.component.scss'],
  standalone: true
})
export class NavItemComponent {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'nav-item': true
    };
  }
}
