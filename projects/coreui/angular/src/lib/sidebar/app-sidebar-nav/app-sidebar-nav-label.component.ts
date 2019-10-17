import {Component, Input, OnInit} from '@angular/core';
import {SidebarNavHelper} from '../app-sidebar-nav.service';

@Component({
  selector: 'app-sidebar-nav-label, cui-sidebar-nav-label',
  templateUrl: './app-sidebar-nav-label.component.html'
})
export class AppSidebarNavLabelComponent implements OnInit {
  @Input() item: any;

  private classes = {
    'nav-label': true,
    'active': true
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
    this.classes[itemClass] = !!itemClass;
    return this.classes;
  }
  getLabelIconClass() {
    const variant = `text-${this.item.label.variant}`;
    this.iconClasses[variant] = !!this.item.label.variant;
    const labelClass = this.item.label.class;
    this.iconClasses[labelClass] = !!labelClass;
    return this.iconClasses;
  }
}
