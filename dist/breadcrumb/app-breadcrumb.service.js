/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
var AppBreadcrumbService = /** @class */ (function () {
    function AppBreadcrumbService(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.router.events.filter(function (event) { return event instanceof NavigationEnd; }).subscribe(function (event) {
            _this.breadcrumbs = [];
            var /** @type {?} */ currentRoute = _this.route.root, /** @type {?} */
            url = '';
            do {
                var /** @type {?} */ childrenRoutes = currentRoute.children;
                currentRoute = null;
                // tslint:disable-next-line:no-shadowed-variable
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var /** @type {?} */ routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        _this.breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
            return _this.breadcrumbs;
        });
    }
    AppBreadcrumbService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AppBreadcrumbService.ctorParameters = function () { return [
        { type: Router, },
        { type: ActivatedRoute, },
    ]; };
    return AppBreadcrumbService;
}());
export { AppBreadcrumbService };
function AppBreadcrumbService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppBreadcrumbService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppBreadcrumbService.ctorParameters;
    /** @type {?} */
    AppBreadcrumbService.prototype.breadcrumbs;
    /** @type {?} */
    AppBreadcrumbService.prototype.router;
    /** @type {?} */
    AppBreadcrumbService.prototype.route;
}
//# sourceMappingURL=app-breadcrumb.service.js.map