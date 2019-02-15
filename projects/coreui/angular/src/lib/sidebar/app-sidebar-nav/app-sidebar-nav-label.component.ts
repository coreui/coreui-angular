import {Component, Input, OnInit} from '@angular/core';
import {SidebarNavHelper} from '../app-sidebar-nav.service';

@Component({
  selector: 'app-sidebar-nav-label',
  templateUrl: './app-sidebar-nav-label.component.html'
})
export class AppSidebarNavLabelComponent implements OnInit {
  @Input() item: any;

  constructor(
    public helper: SidebarNavHelper
  ) { }

  ngOnInit() {
  }

  getItemClass() {
    const labelClass = {
      'nav-label': true,
      'active': true
    };
    const itemClass = this.item.class;
    labelClass[itemClass] = !!itemClass;
    return labelClass;
  }
  getLabelIconClass() {
    const classes = this.helper.getIconClass(this.item);
    const variant = `text-${this.item.label.variant}`;
    classes[variant] = !!variant;
    const labelClass = this.item.label.class;
    classes[labelClass] = !!labelClass;
    return classes;
  }
}
