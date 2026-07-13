import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { IBreadcrumbItem } from '../breadcrumb-item/breadcrumb-item';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { BreadcrumbRouterService } from './breadcrumb-router.service';
import { BreadcrumbItemComponent } from '../breadcrumb-item/breadcrumb-item.component';

@Component({
  selector: 'c-breadcrumb-router, [cBreadcrumbRouter]',
  templateUrl: './breadcrumb-router.component.html',
  imports: [BreadcrumbComponent, BreadcrumbItemComponent]
})
export class BreadcrumbRouterComponent {
  readonly #breadcrumbRouterService = inject(BreadcrumbRouterService);

  /**
   * Optional array of IBreadcrumbItem to override default BreadcrumbRouter behavior. [docs]
   * @return IBreadcrumbItem[]
   */
  readonly items = input<IBreadcrumbItem[]>();

  readonly #breadcrumbs = toSignal(this.#breadcrumbRouterService.breadcrumbs$);

  readonly breadcrumbs = computed(() => {
    return this.items() ?? this.#breadcrumbs() ?? [];
  });
}
