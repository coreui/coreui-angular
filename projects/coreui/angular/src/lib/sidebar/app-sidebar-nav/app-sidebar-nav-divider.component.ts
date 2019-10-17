import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar-nav-divider, cui-sidebar-nav-divider',
  template: ``
})
export class AppSidebarNavDividerComponent implements OnInit {
  @Input() item: any;

  constructor () {}

  ngOnInit() {}
}
