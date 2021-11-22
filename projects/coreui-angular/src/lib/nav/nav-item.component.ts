import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'nav-item': true
    };
  }
}
