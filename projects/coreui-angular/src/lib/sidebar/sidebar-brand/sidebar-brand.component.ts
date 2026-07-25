import { Component, computed, input } from '@angular/core';
import { RouterLink, type UrlTree } from '@angular/router';

import { HtmlAttributesDirective } from '../../shared';

@Component({
  selector: 'c-sidebar-brand',
  templateUrl: './sidebar-brand.component.html',
  imports: [RouterLink, HtmlAttributesDirective],
  host: { class: 'sidebar-brand' }
})
export class SidebarBrandComponent {

  /**
   * Image for the wide sidebar.
   */
  readonly brandFull = input<any>();

  /**
   * Image for the narrow sidebar.
   */
  readonly brandNarrow = input<any>();

  /**
   * Router link for the brand images.
   */
  readonly routerLink = input<string | any[] | UrlTree | null | undefined>();

  readonly brandImg = computed(() => Boolean(this.brandFull() || this.brandNarrow()));
}
