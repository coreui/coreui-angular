/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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
        this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof NavigationEnd))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
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
                childrenRoutes.forEach((/**
                 * @param {?} route
                 * @return {?}
                 */
                route => {
                    if (route.outlet === 'primary') {
                        /** @type {?} */
                        const routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map((/**
                         * @param {?} segment
                         * @return {?}
                         */
                        segment => segment.path)).join('/');
                        breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                }));
            } while (currentRoute);
            this._breadcrumbs.next(Object.assign([], breadcrumbs));
            return breadcrumbs;
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJyZWFkY3J1bWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9icmVhZGNydW1iL2FwcC1icmVhZGNydW1iLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFNL0IsWUFBb0IsTUFBYyxFQUFVLEtBQXFCO1FBQTdDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUUvRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksZUFBZSxDQUFXLElBQUksS0FBSyxFQUFVLENBQUMsQ0FBQztRQUV2RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssWUFBWSxhQUFhLEVBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFOztrQkFDckYsV0FBVyxHQUFHLEVBQUU7O2dCQUNsQixZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJOztnQkFDbEMsR0FBRyxHQUFHLEVBQUU7WUFDUixHQUFHOztzQkFDSyxjQUFjLEdBQUcsWUFBWSxDQUFDLFFBQVE7Z0JBQzVDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLGdEQUFnRDtnQkFDaEQsY0FBYyxDQUFDLE9BQU87Ozs7Z0JBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzdCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7OzhCQUN4QixhQUFhLEdBQUcsS0FBSyxDQUFDLFFBQVE7d0JBQ3BDLEdBQUcsSUFBSSxHQUFHLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHOzs7O3dCQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDdEUsV0FBVyxDQUFDLElBQUksQ0FBQzs0QkFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJOzRCQUMxQixHQUFHLEVBQUksR0FBRzt5QkFDWCxDQUFDLENBQUM7d0JBQ0gsWUFBWSxHQUFHLEtBQUssQ0FBQztxQkFDdEI7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7YUFDSixRQUFRLFlBQVksRUFBRTtZQUV2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBRXZELE9BQU8sV0FBVyxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBdENGLFVBQVU7Ozs7WUFKRixNQUFNO1lBQUUsY0FBYzs7OztJQU83QiwyQ0FBdUM7Ozs7O0lBRXZDLDRDQUFxRDs7Ozs7SUFFekMsc0NBQXNCOzs7OztJQUFFLHFDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcHBCcmVhZGNydW1iU2VydmljZSB7XHJcblxyXG4gIGJyZWFkY3J1bWJzOiBPYnNlcnZhYmxlPEFycmF5PE9iamVjdD4+O1xyXG5cclxuICBwcml2YXRlIF9icmVhZGNydW1iczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PE9iamVjdD4+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG5cclxuICAgIHRoaXMuX2JyZWFkY3J1bWJzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxPYmplY3RbXT4obmV3IEFycmF5PE9iamVjdD4oKSk7XHJcblxyXG4gICAgdGhpcy5icmVhZGNydW1icyA9IHRoaXMuX2JyZWFkY3J1bWJzLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGJyZWFkY3J1bWJzID0gW107XHJcbiAgICAgIGxldCBjdXJyZW50Um91dGUgPSB0aGlzLnJvdXRlLnJvb3QsXHJcbiAgICAgIHVybCA9ICcnO1xyXG4gICAgICBkbyB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW5Sb3V0ZXMgPSBjdXJyZW50Um91dGUuY2hpbGRyZW47XHJcbiAgICAgICAgY3VycmVudFJvdXRlID0gbnVsbDtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgICBjaGlsZHJlblJvdXRlcy5mb3JFYWNoKHJvdXRlID0+IHtcclxuICAgICAgICAgIGlmIChyb3V0ZS5vdXRsZXQgPT09ICdwcmltYXJ5Jykge1xyXG4gICAgICAgICAgICBjb25zdCByb3V0ZVNuYXBzaG90ID0gcm91dGUuc25hcHNob3Q7XHJcbiAgICAgICAgICAgIHVybCArPSAnLycgKyByb3V0ZVNuYXBzaG90LnVybC5tYXAoc2VnbWVudCA9PiBzZWdtZW50LnBhdGgpLmpvaW4oJy8nKTtcclxuICAgICAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IHJvdXRlLnNuYXBzaG90LmRhdGEsXHJcbiAgICAgICAgICAgICAgdXJsOiAgIHVybFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY3VycmVudFJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gd2hpbGUgKGN1cnJlbnRSb3V0ZSk7XHJcblxyXG4gICAgICB0aGlzLl9icmVhZGNydW1icy5uZXh0KE9iamVjdC5hc3NpZ24oW10sIGJyZWFkY3J1bWJzKSk7XHJcblxyXG4gICAgICByZXR1cm4gYnJlYWRjcnVtYnM7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19