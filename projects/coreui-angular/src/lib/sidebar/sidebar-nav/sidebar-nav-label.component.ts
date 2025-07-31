import { Component, computed, inject, input } from '@angular/core';
import { NgClass } from '@angular/common';

import { HtmlAttributesDirective } from '../../shared';
import { SidebarNavHelper } from './sidebar-nav.service';
import { SidebarNavBadgePipe } from './sidebar-nav-badge.pipe';
import { INavData } from './sidebar-nav';

@Component({
  selector: 'c-sidebar-nav-label',
  templateUrl: './sidebar-nav-label.component.html',
  imports: [HtmlAttributesDirective, SidebarNavBadgePipe, NgClass]
})
export class SidebarNavLabelComponent {
  readonly helper = inject(SidebarNavHelper);

  readonly item = input<INavData>({});

  readonly itemClass = computed(() => {
    const classes: Record<string, boolean> = {
      'c-nav-label': true,
      'c-active': true
    };
    const itemClass = this.item().class;
    if (itemClass) {
      classes[itemClass] = !!itemClass;
    }
    return classes;
  });

  readonly labelIconClass = computed(() => {
    const item = this.item();
    const iconClasses: Record<string, boolean> = this.helper.getIconClass(item);
    const variant = `text-${item.label?.variant}`;
    iconClasses[variant] = !!item.label?.variant;
    const labelClass = item.label?.class ?? '';
    iconClasses[labelClass] = !!labelClass;
    return iconClasses;
  });
}
