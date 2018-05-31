import { Injectable, Injector } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import 'rxjs/add/operator/filter';

@Injectable()
export class AppBreadcrumbService {

  breadcrumbs: Observable<Array<Object>>;

  private _breadcrumbs: BehaviorSubject<Array<Object>>;

  constructor(private router: Router, private route: ActivatedRoute) {

    this._breadcrumbs = new BehaviorSubject<Object[]>(new Array<Object>());

    this.breadcrumbs = this._breadcrumbs.asObservable();

    this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event) => {
      const breadcrumbs = [];
      let currentRoute = this.route.root,
      url = '';
      do {
        const childrenRoutes = currentRoute.children;
        currentRoute = null;
        // tslint:disable-next-line:no-shadowed-variable
        childrenRoutes.forEach(route => {
          if (route.outlet === 'primary') {
            const routeSnapshot = route.snapshot;
            url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
            if (route.routeConfig.data && route.routeConfig.data.title) {
              breadcrumbs.push({
                label: route.snapshot.data,
                url:   url
              });
            }
            currentRoute = route;
          }
        });
      } while (currentRoute);

      this._breadcrumbs.next(Object.assign([], breadcrumbs));

      return breadcrumbs;
    });
  }
}
