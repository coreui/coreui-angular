import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss']
})
export class SidebarHeaderComponent {
  constructor() {}

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'sidebar-header': true
    };
  }
}
