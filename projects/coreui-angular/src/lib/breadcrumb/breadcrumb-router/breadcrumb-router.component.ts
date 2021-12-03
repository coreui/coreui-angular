import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import {IBreadcrumbItem} from '../breadcrumb-item/breadcrumb-item';
import {Observable, Observer} from 'rxjs';
import { BreadcrumbRouterService } from './breadcrumb-router.service';

@Component({
  selector: 'c-breadcrumb-router, [cBreadcrumbRouter]',
  templateUrl: './breadcrumb-router.component.html',
  styleUrls: ['./breadcrumb-router.component.scss']
})
export class BreadcrumbRouterComponent implements OnChanges, OnDestroy, OnInit {
  /**
   * Optional array of IBreadcrumbItem to override default BreadcrumbRouter behavior. [docs]
   * @type IBreadcrumbItem[]
   */
  @Input() items?: IBreadcrumbItem[];

  public breadcrumbs: Observable<IBreadcrumbItem[]> | undefined;

  constructor(
    public service: BreadcrumbRouterService,
  ) { }

  ngOnInit(): void {
    this.breadcrumbs = this.service.breadcrumbs$;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.setup();
    }
  }

  setup(): void {
    if (this.items && this.items.length > 0) {
      this.breadcrumbs = new Observable<IBreadcrumbItem[]>((observer: Observer<IBreadcrumbItem[]>) => {
        if (this.items) {
          observer.next(this.items);
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.breadcrumbs = undefined;
  }
}
