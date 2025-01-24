import { Component, effect, inject, input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AsyncPipe } from '@angular/common';

import { IBreadcrumbItem } from '../breadcrumb-item/breadcrumb-item';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { BreadcrumbRouterService } from './breadcrumb-router.service';
import { BreadcrumbItemComponent } from '../breadcrumb-item/breadcrumb-item.component';

@Component({
  selector: 'c-breadcrumb-router, [cBreadcrumbRouter]',
  templateUrl: './breadcrumb-router.component.html',
  imports: [BreadcrumbComponent, BreadcrumbItemComponent, AsyncPipe]
})
export class BreadcrumbRouterComponent implements OnDestroy, OnInit {
  readonly service = inject(BreadcrumbRouterService);

  /**
   * Optional array of IBreadcrumbItem to override default BreadcrumbRouter behavior. [docs]
   * @return IBreadcrumbItem[]
   */
  readonly items = input<IBreadcrumbItem[]>();
  public breadcrumbs: Observable<IBreadcrumbItem[]> | undefined;

  ngOnInit(): void {
    this.breadcrumbs = this.service.breadcrumbs$;
  }

  readonly setup = effect(() => {
    const items = this.items();
    if (items && items.length > 0) {
      this.breadcrumbs = new Observable<IBreadcrumbItem[]>((observer: Observer<IBreadcrumbItem[]>) => {
        const itemsValue = this.items();
        if (itemsValue) {
          observer.next(itemsValue);
        }
      });
    }
  });

  ngOnDestroy(): void {
    this.breadcrumbs = undefined;
  }
}
