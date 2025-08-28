import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { HtmlAttributesDirective } from '../../shared';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
import { INavData } from '../app-sidebar-nav';
import { AppSidebarNavBadgePipe } from './app-sidebar-nav-badge.pipe';

@Component({
  selector: 'app-sidebar-nav-label, cui-sidebar-nav-label',
  templateUrl: './app-sidebar-nav-label.component.html',
  standalone: true,
  imports: [AppSidebarNavBadgePipe, HtmlAttributesDirective, NgClass]
})
export class AppSidebarNavLabelComponent implements OnInit {
  @Input() item: INavData = {};

  private classes = {
    'nav-label': true,
    active: true
  };
  private iconClasses = {};

  constructor(
    public helper: SidebarNavHelper
  ) { }

  ngOnInit() {
    this.iconClasses = this.helper.getIconClass(this.item);
  }

  getItemClass() {
    const itemClass = this.item.class;
    // @ts-ignore
    this.classes[itemClass] = !!itemClass;
    return this.classes;
  }
  getLabelIconClass() {
    const variant = `text-${this.item.label?.variant}`;
    // @ts-ignore
    this.iconClasses[variant] = !!this.item.label?.variant;
    const labelClass = this.item.label?.class;
    // @ts-ignore
    this.iconClasses[labelClass] = !!labelClass;
    return this.iconClasses;
  }
}
