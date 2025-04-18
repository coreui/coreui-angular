import { Component, inject, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { HtmlAttributesDirective } from '../../shared';
import { SidebarNavHelper } from './sidebar-nav.service';
import { SidebarNavBadgePipe } from './sidebar-nav-badge.pipe';

@Component({
  selector: 'c-sidebar-nav-label',
  templateUrl: './sidebar-nav-label.component.html',
  imports: [HtmlAttributesDirective, SidebarNavBadgePipe, NgClass]
})
export class SidebarNavLabelComponent implements OnInit {
  readonly helper = inject(SidebarNavHelper);

  @Input() item: any;

  private classes = {
    'c-nav-label': true,
    'c-active': true
  };
  private iconClasses = {};

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
    const variant = `text-${this.item.label.variant}`;
    // @ts-ignore
    this.iconClasses[variant] = !!this.item.label.variant;
    const labelClass = this.item.label.class;
    // @ts-ignore
    this.iconClasses[labelClass] = !!labelClass;
    return this.iconClasses;
  }
}
