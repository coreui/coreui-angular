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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJyZWFkY3J1bWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9icmVhZGNydW1iL2FwcC1icmVhZGNydW1iLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLFlBQVksQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFNL0IsWUFBb0IsTUFBYyxFQUFVLEtBQXFCO1FBQTdDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUUvRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksZUFBZSxDQUFXLElBQUksS0FBSyxFQUFVLENBQUMsQ0FBQztRQUV2RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssWUFBWSxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFOztrQkFDckYsV0FBVyxHQUFHLEVBQUU7O2dCQUNsQixZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJOztnQkFDbEMsR0FBRyxHQUFHLEVBQUU7WUFDUixHQUFHOztzQkFDSyxjQUFjLEdBQUcsWUFBWSxDQUFDLFFBQVE7Z0JBQzVDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLGdEQUFnRDtnQkFDaEQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDN0IsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTs7OEJBQ3hCLGFBQWEsR0FBRyxLQUFLLENBQUMsUUFBUTt3QkFDcEMsR0FBRyxJQUFJLEdBQUcsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3RFLFdBQVcsQ0FBQyxJQUFJLENBQUM7NEJBQ2YsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSTs0QkFDMUIsR0FBRyxFQUFJLEdBQUc7eUJBQ1gsQ0FBQyxDQUFDO3dCQUNILFlBQVksR0FBRyxLQUFLLENBQUM7cUJBQ3RCO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ0osUUFBUSxZQUFZLEVBQUU7WUFFdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUV2RCxPQUFPLFdBQVcsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXRDRixVQUFVOzs7O1lBSkYsTUFBTTtZQUFFLGNBQWM7Ozs7SUFPN0IsMkNBQXVDOzs7OztJQUV2Qyw0Q0FBcUQ7Ozs7O0lBRXpDLHNDQUFzQjs7Ozs7SUFBRSxxQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9pbmRleCc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwcEJyZWFkY3J1bWJTZXJ2aWNlIHtcclxuXHJcbiAgYnJlYWRjcnVtYnM6IE9ic2VydmFibGU8QXJyYXk8T2JqZWN0Pj47XHJcblxyXG4gIHByaXZhdGUgX2JyZWFkY3J1bWJzOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8T2JqZWN0Pj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcblxyXG4gICAgdGhpcy5fYnJlYWRjcnVtYnMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE9iamVjdFtdPihuZXcgQXJyYXk8T2JqZWN0PigpKTtcclxuXHJcbiAgICB0aGlzLmJyZWFkY3J1bWJzID0gdGhpcy5fYnJlYWRjcnVtYnMuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSBbXTtcclxuICAgICAgbGV0IGN1cnJlbnRSb3V0ZSA9IHRoaXMucm91dGUucm9vdCxcclxuICAgICAgdXJsID0gJyc7XHJcbiAgICAgIGRvIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlblJvdXRlcyA9IGN1cnJlbnRSb3V0ZS5jaGlsZHJlbjtcclxuICAgICAgICBjdXJyZW50Um91dGUgPSBudWxsO1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICAgIGNoaWxkcmVuUm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xyXG4gICAgICAgICAgaWYgKHJvdXRlLm91dGxldCA9PT0gJ3ByaW1hcnknKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlU25hcHNob3QgPSByb3V0ZS5zbmFwc2hvdDtcclxuICAgICAgICAgICAgdXJsICs9ICcvJyArIHJvdXRlU25hcHNob3QudXJsLm1hcChzZWdtZW50ID0+IHNlZ21lbnQucGF0aCkuam9pbignLycpO1xyXG4gICAgICAgICAgICBicmVhZGNydW1icy5wdXNoKHtcclxuICAgICAgICAgICAgICBsYWJlbDogcm91dGUuc25hcHNob3QuZGF0YSxcclxuICAgICAgICAgICAgICB1cmw6ICAgdXJsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjdXJyZW50Um91dGUgPSByb3V0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSB3aGlsZSAoY3VycmVudFJvdXRlKTtcclxuXHJcbiAgICAgIHRoaXMuX2JyZWFkY3J1bWJzLm5leHQoT2JqZWN0LmFzc2lnbihbXSwgYnJlYWRjcnVtYnMpKTtcclxuXHJcbiAgICAgIHJldHVybiBicmVhZGNydW1icztcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=