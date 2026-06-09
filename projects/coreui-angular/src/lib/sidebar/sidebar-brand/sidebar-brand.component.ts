import { Component, computed, input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, type UrlTree } from '@angular/router';

import { HtmlAttributesDirective } from '../../shared';

@Component({
  selector: 'c-sidebar-brand',
  templateUrl: './sidebar-brand.component.html',
  imports: [RouterLink, HtmlAttributesDirective],
  changeDetection: ChangeDetectionStrategy.Eager,
  host: { class: 'sidebar-brand' }
})
export class SidebarBrandComponent {
  readonly brandFull = input<any>();
  readonly brandNarrow = input<any>();

  readonly routerLink = input<string | any[] | UrlTree | null | undefined>();

  readonly brandImg = computed(() => Boolean(this.brandFull() || this.brandNarrow()));
}
