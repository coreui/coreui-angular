/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs/index';
import { filter } from 'rxjs/operators';
export class AppBreadcrumbService {
    /**
     * @param {?} router
     * @param {?} route
     */
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this._breadcrumbs = new BehaviorSubject(new Array());
        this.breadcrumbs = this._breadcrumbs.asObservable();
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
            /** @type {?} */
            const breadcrumbs = [];
            /** @type {?} */
            let currentRoute = this.route.root;
            /** @type {?} */
            let url = '';
            do {
                /** @type {?} */
                const childrenRoutes = currentRoute.children;
                currentRoute = null;
                // tslint:disable-next-line:no-shadowed-variable
                childrenRoutes.forEach(route => {
                    if (route.outlet === 'primary') {
                        /** @type {?} */
                        const routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
                        breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
            this._breadcrumbs.next(Object.assign([], breadcrumbs));
            return breadcrumbs;
        });
    }
}
AppBreadcrumbService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AppBreadcrumbService.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute }
];
if (false) {
    /** @type {?} */
    AppBreadcrumbService.prototype.breadcrumbs;
    /**
     * @type {?}
     * @private
     */
    AppBreadcrumbService.prototype._breadcrumbs;
    /**
     * @type {?}
     * @private
     */
    AppBreadcrumbService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AppBreadcrumbService.prototype.route;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJyZWFkY3J1bWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9icmVhZGNydW1iL2FwcC1icmVhZGNydW1iLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLFlBQVksQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFNL0IsWUFBb0IsTUFBYyxFQUFVLEtBQXFCO1FBQTdDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUUvRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksZUFBZSxDQUFXLElBQUksS0FBSyxFQUFVLENBQUMsQ0FBQztRQUV2RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssWUFBWSxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFOztrQkFDckYsV0FBVyxHQUFHLEVBQUU7O2dCQUNsQixZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJOztnQkFDbEMsR0FBRyxHQUFHLEVBQUU7WUFDUixHQUFHOztzQkFDSyxjQUFjLEdBQUcsWUFBWSxDQUFDLFFBQVE7Z0JBQzVDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLGdEQUFnRDtnQkFDaEQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDN0IsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTs7OEJBQ3hCLGFBQWEsR0FBRyxLQUFLLENBQUMsUUFBUTt3QkFDcEMsR0FBRyxJQUFJLEdBQUcsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3RFLFdBQVcsQ0FBQyxJQUFJLENBQUM7NEJBQ2YsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSTs0QkFDMUIsR0FBRyxFQUFJLEdBQUc7eUJBQ1gsQ0FBQyxDQUFDO3dCQUNILFlBQVksR0FBRyxLQUFLLENBQUM7cUJBQ3RCO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ0osUUFBUSxZQUFZLEVBQUU7WUFFdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUV2RCxPQUFPLFdBQVcsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXRDRixVQUFVOzs7O1lBSkYsTUFBTTtZQUFFLGNBQWM7Ozs7SUFPN0IsMkNBQXVDOzs7OztJQUV2Qyw0Q0FBcUQ7Ozs7O0lBRXpDLHNDQUFzQjs7Ozs7SUFBRSxxQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvaW5kZXgnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwQnJlYWRjcnVtYlNlcnZpY2Uge1xuXG4gIGJyZWFkY3J1bWJzOiBPYnNlcnZhYmxlPEFycmF5PE9iamVjdD4+O1xuXG4gIHByaXZhdGUgX2JyZWFkY3J1bWJzOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8T2JqZWN0Pj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcblxuICAgIHRoaXMuX2JyZWFkY3J1bWJzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxPYmplY3RbXT4obmV3IEFycmF5PE9iamVjdD4oKSk7XG5cbiAgICB0aGlzLmJyZWFkY3J1bWJzID0gdGhpcy5fYnJlYWRjcnVtYnMuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSkuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSBbXTtcbiAgICAgIGxldCBjdXJyZW50Um91dGUgPSB0aGlzLnJvdXRlLnJvb3QsXG4gICAgICB1cmwgPSAnJztcbiAgICAgIGRvIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW5Sb3V0ZXMgPSBjdXJyZW50Um91dGUuY2hpbGRyZW47XG4gICAgICAgIGN1cnJlbnRSb3V0ZSA9IG51bGw7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zaGFkb3dlZC12YXJpYWJsZVxuICAgICAgICBjaGlsZHJlblJvdXRlcy5mb3JFYWNoKHJvdXRlID0+IHtcbiAgICAgICAgICBpZiAocm91dGUub3V0bGV0ID09PSAncHJpbWFyeScpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlU25hcHNob3QgPSByb3V0ZS5zbmFwc2hvdDtcbiAgICAgICAgICAgIHVybCArPSAnLycgKyByb3V0ZVNuYXBzaG90LnVybC5tYXAoc2VnbWVudCA9PiBzZWdtZW50LnBhdGgpLmpvaW4oJy8nKTtcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzLnB1c2goe1xuICAgICAgICAgICAgICBsYWJlbDogcm91dGUuc25hcHNob3QuZGF0YSxcbiAgICAgICAgICAgICAgdXJsOiAgIHVybFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjdXJyZW50Um91dGUgPSByb3V0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSB3aGlsZSAoY3VycmVudFJvdXRlKTtcblxuICAgICAgdGhpcy5fYnJlYWRjcnVtYnMubmV4dChPYmplY3QuYXNzaWduKFtdLCBicmVhZGNydW1icykpO1xuXG4gICAgICByZXR1cm4gYnJlYWRjcnVtYnM7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==