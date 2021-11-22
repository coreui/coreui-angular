import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'c-sidebar-footer',
  templateUrl: './sidebar-footer.component.html',
  styleUrls: ['./sidebar-footer.component.scss']
})
export class SidebarFooterComponent {

  constructor() { }

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'sidebar-footer': true
    };
  }
}
