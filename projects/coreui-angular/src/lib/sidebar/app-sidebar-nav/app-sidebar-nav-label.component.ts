import { Component, Input, OnInit, inject } from '@angular/core';
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
  helper = inject(SidebarNavHelper);

  @Input() item: INavData = {};

  private classes: Record<string, boolean> = {
    'nav-label': true,
    active: true
  };
  private iconClasses: Record<string, boolean> = {};

  ngOnInit() {
    this.iconClasses = this.helper.getIconClass(this.item);
  }

  getItemClass() {
    const itemClass = this.item.class;
    if (itemClass) {
      this.classes[itemClass] = true;
    }
    return this.classes;
  }
  getLabelIconClass() {
    const variant = this.item.label?.variant;
    if (variant) {
      this.iconClasses[`text-${variant}`] = true;
    }
    const labelClass = this.item.label?.class;
    if (labelClass) {
      this.iconClasses[labelClass] = true;
    }
    return this.iconClasses;
  }
}
