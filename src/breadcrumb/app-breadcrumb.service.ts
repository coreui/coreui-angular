import { Injectable, Injector } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Injectable()
export class AppBreadcrumbService {

  public breadcrumbs: Array<Object>;

  constructor(private router: Router, private route: ActivatedRoute) {

    this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event) => {
      this.breadcrumbs = [];
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
            this.breadcrumbs.push({
              label: route.snapshot.data,
              url:   url
            });
            currentRoute = route;
          }
        });
      } while (currentRoute);
      return this.breadcrumbs;
    });
  }
}
