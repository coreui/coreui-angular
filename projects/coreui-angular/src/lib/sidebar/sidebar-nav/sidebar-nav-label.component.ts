import { Component, computed, inject, input } from '@angular/core';

import { HtmlAttributesDirective } from '../../shared';
import { SidebarNavHelper } from './sidebar-nav.service';
import { SidebarNavBadgePipe } from './sidebar-nav-badge.pipe';
import { INavData } from './sidebar-nav';
import { classMap } from './sidebar-nav.utils';

@Component({
  selector: 'c-sidebar-nav-label',
  templateUrl: './sidebar-nav-label.component.html',
  imports: [HtmlAttributesDirective, SidebarNavBadgePipe]
})
export class SidebarNavLabelComponent {
  readonly helper = inject(SidebarNavHelper);

  /**
   * The nav data item rendered as a sidebar nav label.
   * @returns INavData
   * @default {}
   */
  readonly item = input<INavData>({});

  readonly itemClass = computed(() => ({
    'nav-link': true,
    'nav-label': true,
    'c-nav-label': true,
    'c-active': true,
    ...classMap(this.item().class)
  }));

  readonly labelIconClass = computed(() => {
    const item = this.item();
    return {
      ...this.helper.getIconClass(item),
      [`text-${item.label?.variant}`]: !!item.label?.variant,
      ...classMap(item.label?.class)
    };
  });
}
