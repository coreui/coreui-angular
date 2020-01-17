import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  }
)
export class AppBreadcrumbService {

  breadcrumbs: Observable<Array<any>>;

  private breadcrumbSubject: BehaviorSubject<Array<any>>;

  constructor(private router: Router, private route: ActivatedRoute) {

    this.breadcrumbSubject = new BehaviorSubject<any[]>(new Array<any>());

    this.breadcrumbs = this.breadcrumbSubject.asObservable();

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
      const breadcrumbs = [];
      let currentRoute = this.route.root;
      let url = '';
      do {
        const childrenRoutes = currentRoute.children;
        currentRoute = null;
        // tslint:disable-next-line:no-shadowed-variable
        childrenRoutes.forEach(route => {
          if (route.outlet === 'primary') {
            const routeSnapshot = route.snapshot;
            url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
            breadcrumbs.push({
              label: route.snapshot.data,
              url
            });
            currentRoute = route;
          }
        });
      } while (currentRoute);

      this.breadcrumbSubject.next(Object.assign([], breadcrumbs));

      return breadcrumbs;
    });
  }
}
