import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IBreadcrumbItem } from '../breadcrumb-item/breadcrumb-item';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbRouterService {
  public outlet = 'primary';

  breadcrumbs$: Observable<IBreadcrumbItem[]>;
  private breadcrumbsBehaviorSubject: BehaviorSubject<IBreadcrumbItem[]>;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.breadcrumbsBehaviorSubject = new BehaviorSubject<any[]>(
      new Array<IBreadcrumbItem>()
    );

    this.breadcrumbs$ = this.breadcrumbsBehaviorSubject.asObservable();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
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
              url +=
                '/' +
                routeSnapshot.url.map((segment) => segment.path).join('/');
              breadcrumbs.push({
                label: childRoute.snapshot.data['title'] || '',
                url,
                queryParams: routeSnapshot.queryParams,
              });
              currentRoute = childRoute;
            }
          });
        } while (currentRoute);

        this.breadcrumbsBehaviorSubject.next(Object.assign([], breadcrumbs));

        // console.log('breadcrumbs', breadcrumbs);
        return breadcrumbs;
      });
  }
}
