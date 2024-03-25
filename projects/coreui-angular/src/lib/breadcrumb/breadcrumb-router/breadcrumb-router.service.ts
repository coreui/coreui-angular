import { Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IBreadcrumbItem } from '../breadcrumb-item/breadcrumb-item';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbRouterService {
  public outlet = 'primary';

  readonly #breadcrumbsBehaviorSubject: BehaviorSubject<IBreadcrumbItem[]> = new BehaviorSubject<IBreadcrumbItem[]>(new Array<IBreadcrumbItem>());
  readonly breadcrumbs$: Observable<IBreadcrumbItem[]> = this.#breadcrumbsBehaviorSubject.asObservable();

  constructor(private router: Router, private route: ActivatedRoute) {

    this.router.events
      .pipe(
        takeUntilDestroyed(),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        const breadcrumbs: any[] = [];
        let currentRoute: ActivatedRoute | null = this.route.root;
        let url = '';
        do {
          const childrenRoutes: ActivatedRoute[] = currentRoute.children;
          currentRoute = null;
          childrenRoutes.forEach((childRoute) => {
            // console.log('breadcrumb event', event, 'route', route);
            if (childRoute.outlet === this.outlet) {
              const routeSnapshot = childRoute.snapshot;
              url += '/' + routeSnapshot.url.map((segment) => segment.path).join('/');
              breadcrumbs.push({
                label: routeSnapshot.data['title'] ?? routeSnapshot.title ?? '',
                url,
                queryParams: routeSnapshot.queryParams
              });
              currentRoute = childRoute;
            }
          });
        } while (currentRoute);

        this.#breadcrumbsBehaviorSubject.next(Object.assign([], breadcrumbs));

        return breadcrumbs;
      });
  }
}
