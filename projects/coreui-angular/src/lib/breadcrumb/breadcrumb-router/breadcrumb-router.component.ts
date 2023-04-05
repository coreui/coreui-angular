import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';

import { IBreadcrumbItem } from '../breadcrumb-item/breadcrumb-item';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { BreadcrumbRouterService } from './breadcrumb-router.service';
import { BreadcrumbItemComponent } from '../breadcrumb-item/breadcrumb-item.component';

@Component({
  selector: 'c-breadcrumb-router, [cBreadcrumbRouter]',
  templateUrl: './breadcrumb-router.component.html',
  styleUrls: ['./breadcrumb-router.component.scss'],
  standalone: true,
  imports: [BreadcrumbComponent, BreadcrumbItemComponent, NgForOf, NgIf, AsyncPipe]
})
export class BreadcrumbRouterComponent implements OnChanges, OnDestroy, OnInit {
  constructor(
    public service: BreadcrumbRouterService
  ) {}

  /**
   * Optional array of IBreadcrumbItem to override default BreadcrumbRouter behavior. [docs]
   * @type IBreadcrumbItem[]
   */
  @Input() items?: IBreadcrumbItem[];
  public breadcrumbs: Observable<IBreadcrumbItem[]> | undefined;

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
      this.breadcrumbs = new Observable<IBreadcrumbItem[]>(
        (observer: Observer<IBreadcrumbItem[]>) => {
          if (this.items) {
            observer.next(this.items);
          }
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.breadcrumbs = undefined;
  }
}
