/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
var AppBreadcrumbService = /** @class */ (function () {
    function AppBreadcrumbService(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._breadcrumbs = new BehaviorSubject(new Array());
        this.breadcrumbs = this._breadcrumbs.asObservable();
        this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event instanceof NavigationEnd; }))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var breadcrumbs = [];
            /** @type {?} */
            var currentRoute = _this.route.root;
            /** @type {?} */
            var url = '';
            do {
                /** @type {?} */
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                // tslint:disable-next-line:no-shadowed-variable
                childrenRoutes.forEach((/**
                 * @param {?} route
                 * @return {?}
                 */
                function (route) {
                    if (route.outlet === 'primary') {
                        /** @type {?} */
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map((/**
                         * @param {?} segment
                         * @return {?}
                         */
                        function (segment) { return segment.path; })).join('/');
                        breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                }));
            } while (currentRoute);
            _this._breadcrumbs.next(Object.assign([], breadcrumbs));
            return breadcrumbs;
        }));
    }
    AppBreadcrumbService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AppBreadcrumbService.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute }
    ]; };
    /** @nocollapse */ AppBreadcrumbService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AppBreadcrumbService_Factory() { return new AppBreadcrumbService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i1.ActivatedRoute)); }, token: AppBreadcrumbService, providedIn: "root" });
    return AppBreadcrumbService;
}());
export { AppBreadcrumbService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJyZWFkY3J1bWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9icmVhZGNydW1iL2FwcC1icmVhZGNydW1iLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUV4QztJQVVFLDhCQUFvQixNQUFjLEVBQVUsS0FBcUI7UUFBakUsaUJBK0JDO1FBL0JtQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFFL0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGVBQWUsQ0FBVyxJQUFJLEtBQUssRUFBVSxDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLFlBQVksYUFBYSxFQUE5QixDQUE4QixFQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFLOztnQkFDakYsV0FBVyxHQUFHLEVBQUU7O2dCQUNsQixZQUFZLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJOztnQkFDbEMsR0FBRyxHQUFHLEVBQUU7WUFDUixHQUFHOztvQkFDSyxjQUFjLEdBQUcsWUFBWSxDQUFDLFFBQVE7Z0JBQzVDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLGdEQUFnRDtnQkFDaEQsY0FBYyxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQSxLQUFLO29CQUMxQixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFOzs0QkFDeEIsYUFBYSxHQUFHLEtBQUssQ0FBQyxRQUFRO3dCQUNwQyxHQUFHLElBQUksR0FBRyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRzs7Ozt3QkFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQVosQ0FBWSxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN0RSxXQUFXLENBQUMsSUFBSSxDQUFDOzRCQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUk7NEJBQzFCLEdBQUcsRUFBSSxHQUFHO3lCQUNYLENBQUMsQ0FBQzt3QkFDSCxZQUFZLEdBQUcsS0FBSyxDQUFDO3FCQUN0QjtnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNKLFFBQVEsWUFBWSxFQUFFO1lBRXZCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFFdkQsT0FBTyxXQUFXLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkF6Q0YsVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOTSxNQUFNO2dCQUFFLGNBQWM7OzsrQkFEL0I7Q0ErQ0MsQUExQ0QsSUEwQ0M7U0F0Q1ksb0JBQW9COzs7SUFFL0IsMkNBQXVDOzs7OztJQUV2Qyw0Q0FBcUQ7Ozs7O0lBRXpDLHNDQUFzQjs7Ozs7SUFBRSxxQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG4gIH1cbilcbmV4cG9ydCBjbGFzcyBBcHBCcmVhZGNydW1iU2VydmljZSB7XG5cbiAgYnJlYWRjcnVtYnM6IE9ic2VydmFibGU8QXJyYXk8T2JqZWN0Pj47XG5cbiAgcHJpdmF0ZSBfYnJlYWRjcnVtYnM6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxPYmplY3Q+PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuXG4gICAgdGhpcy5fYnJlYWRjcnVtYnMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE9iamVjdFtdPihuZXcgQXJyYXk8T2JqZWN0PigpKTtcblxuICAgIHRoaXMuYnJlYWRjcnVtYnMgPSB0aGlzLl9icmVhZGNydW1icy5hc09ic2VydmFibGUoKTtcblxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBicmVhZGNydW1icyA9IFtdO1xuICAgICAgbGV0IGN1cnJlbnRSb3V0ZSA9IHRoaXMucm91dGUucm9vdCxcbiAgICAgIHVybCA9ICcnO1xuICAgICAgZG8ge1xuICAgICAgICBjb25zdCBjaGlsZHJlblJvdXRlcyA9IGN1cnJlbnRSb3V0ZS5jaGlsZHJlbjtcbiAgICAgICAgY3VycmVudFJvdXRlID0gbnVsbDtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXNoYWRvd2VkLXZhcmlhYmxlXG4gICAgICAgIGNoaWxkcmVuUm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICAgICAgICAgIGlmIChyb3V0ZS5vdXRsZXQgPT09ICdwcmltYXJ5Jykge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVTbmFwc2hvdCA9IHJvdXRlLnNuYXBzaG90O1xuICAgICAgICAgICAgdXJsICs9ICcvJyArIHJvdXRlU25hcHNob3QudXJsLm1hcChzZWdtZW50ID0+IHNlZ21lbnQucGF0aCkuam9pbignLycpO1xuICAgICAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7XG4gICAgICAgICAgICAgIGxhYmVsOiByb3V0ZS5zbmFwc2hvdC5kYXRhLFxuICAgICAgICAgICAgICB1cmw6ICAgdXJsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGN1cnJlbnRSb3V0ZSA9IHJvdXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IHdoaWxlIChjdXJyZW50Um91dGUpO1xuXG4gICAgICB0aGlzLl9icmVhZGNydW1icy5uZXh0KE9iamVjdC5hc3NpZ24oW10sIGJyZWFkY3J1bWJzKSk7XG5cbiAgICAgIHJldHVybiBicmVhZGNydW1icztcbiAgICB9KTtcbiAgfVxufVxuIl19