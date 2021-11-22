import {Component, Input, OnInit} from '@angular/core';
import {SidebarNavHelper} from './sidebar-nav.service';

@Component({
  selector: 'c-sidebar-nav-label',
  templateUrl: './sidebar-nav-label.component.html'
})
export class SidebarNavLabelComponent implements OnInit {
  @Input() item: any;

  private classes = {
    'c-nav-label': true,
    'c-active': true
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
    const variant = `text-${this.item.label.variant}`;
    // @ts-ignore
    this.iconClasses[variant] = !!this.item.label.variant;
    const labelClass = this.item.label.class;
    // @ts-ignore
    this.iconClasses[labelClass] = !!labelClass;
    return this.iconClasses;
  }
}
