import { Injectable, inject } from '@angular/core';
import { Router, ActivatedRoute, Data, NavigationEnd } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface IBreadcrumb {
  label: Data;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppBreadcrumbService {
  private router = inject(Router);
  private route = inject(ActivatedRoute);


  breadcrumbs: Observable<IBreadcrumb[]>;

  private breadcrumbSubject: BehaviorSubject<IBreadcrumb[]>;

  constructor() {

    this.breadcrumbSubject = new BehaviorSubject<IBreadcrumb[]>([]);

    this.breadcrumbs = this.breadcrumbSubject.asObservable();

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      const breadcrumbs: IBreadcrumb[] = [];
      let currentRoute: ActivatedRoute | null = this.route.root;
      let url = '';
      do {
        const childrenRoutes = currentRoute.children;
        currentRoute = null;
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
    });
  }
}
