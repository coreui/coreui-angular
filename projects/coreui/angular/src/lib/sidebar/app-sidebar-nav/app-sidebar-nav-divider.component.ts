import {Component, Input, OnInit} from '@angular/core';
import { INavData } from '../app-sidebar-nav';

@Component({
  selector: 'app-sidebar-nav-divider, cui-sidebar-nav-divider',
  template: ``
})
export class AppSidebarNavDividerComponent implements OnInit {
  @Input() item: INavData;

  constructor() {}

  ngOnInit() {}
}
