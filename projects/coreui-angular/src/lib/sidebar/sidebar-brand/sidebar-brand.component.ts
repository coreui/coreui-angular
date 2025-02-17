import { Component, computed, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, type UrlTree } from '@angular/router';

import { HtmlAttributesDirective } from '../../shared';

@Component({
  selector: 'c-sidebar-brand',
  templateUrl: './sidebar-brand.component.html',
  imports: [RouterLink, HtmlAttributesDirective, NgClass],
  host: { class: 'sidebar-brand' }
})
export class SidebarBrandComponent {
  readonly brandFull = input<any>();
  readonly brandNarrow = input<any>();

  readonly routerLink = input<string | any[] | UrlTree | null | undefined>();

  readonly brandImg = computed(() => Boolean(this.brandFull() || this.brandNarrow()));
}
