/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { Replace } from './../shared';
import { AppBreadcrumbService } from './app-breadcrumb.service';
var AppBreadcrumbComponent = /** @class */ (function () {
    function AppBreadcrumbComponent(service, el) {
        this.service = service;
        this.el = el;
    }
    /**
     * @return {?}
     */
    AppBreadcrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        Replace(this.el);
        this.isFixed(this.fixed);
        this.breadcrumbs = this.service.breadcrumbs;
    };
    /**
     * @param {?} fixed
     * @return {?}
     */
    AppBreadcrumbComponent.prototype.isFixed = /**
     * @param {?} fixed
     * @return {?}
     */
    function (fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('breadcrumb-fixed');
        }
    };
    AppBreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-breadcrumb',
                    template: "\n    <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last = last>\n      <li class=\"breadcrumb-item\"\n          *ngIf=\"breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)\"\n          [ngClass]=\"{active: last}\">\n        <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n        <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n      </li>\n    </ng-template>\n  "
                },] },
    ];
    AppBreadcrumbComponent.ctorParameters = function () { return [
        { type: AppBreadcrumbService },
        { type: ElementRef }
    ]; };
    AppBreadcrumbComponent.propDecorators = {
        fixed: [{ type: Input }]
    };
    return AppBreadcrumbComponent;
}());
export { AppBreadcrumbComponent };
if (false) {
    /** @type {?} */
    AppBreadcrumbComponent.prototype.fixed;
    /** @type {?} */
    AppBreadcrumbComponent.prototype.breadcrumbs;
    /** @type {?} */
    AppBreadcrumbComponent.prototype.service;
    /** @type {?} */
    AppBreadcrumbComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJyZWFkY3J1bWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvYXBwLWJyZWFkY3J1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVoRTtJQWlCRSxnQ0FBbUIsT0FBNkIsRUFBUyxFQUFjO1FBQXBELFlBQU8sR0FBUCxPQUFPLENBQXNCO1FBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFJLENBQUM7Ozs7SUFFckUseUNBQVE7OztJQUFmO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsd0NBQU87Ozs7SUFBUCxVQUFRLEtBQWM7UUFDcEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FBRTtJQUN2RixDQUFDOztnQkEzQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxtZUFTVDtpQkFDRjs7O2dCQWRRLG9CQUFvQjtnQkFGVCxVQUFVOzs7d0JBa0IzQixLQUFLOztJQWNSLDZCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0FmWSxzQkFBc0I7OztJQUNqQyx1Q0FBd0I7O0lBQ3hCLDZDQUFtQjs7SUFFUCx5Q0FBb0M7O0lBQUUsb0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0ICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXBsYWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xyXG5pbXBvcnQgeyBBcHBCcmVhZGNydW1iU2VydmljZSB9IGZyb20gJy4vYXBwLWJyZWFkY3J1bWIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1icmVhZGNydW1iJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1icmVhZGNydW1iIFtuZ0Zvck9mXT1cImJyZWFkY3J1bWJzIHwgYXN5bmNcIiBsZXQtbGFzdCA9IGxhc3Q+XHJcbiAgICAgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbVwiXHJcbiAgICAgICAgICAqbmdJZj1cImJyZWFkY3J1bWIubGFiZWwudGl0bGUgJiYgKGJyZWFkY3J1bWIudXJsLnNsaWNlKC0xKSA9PSAnLycgfHwgbGFzdClcIlxyXG4gICAgICAgICAgW25nQ2xhc3NdPVwie2FjdGl2ZTogbGFzdH1cIj5cclxuICAgICAgICA8YSAqbmdJZj1cIiFsYXN0XCIgW3JvdXRlckxpbmtdPVwiYnJlYWRjcnVtYi51cmxcIj57e2JyZWFkY3J1bWIubGFiZWwudGl0bGV9fTwvYT5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImxhc3RcIiBbcm91dGVyTGlua109XCJicmVhZGNydW1iLnVybFwiPnt7YnJlYWRjcnVtYi5sYWJlbC50aXRsZX19PC9zcGFuPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBmaXhlZDogYm9vbGVhbjtcclxuICBwdWJsaWMgYnJlYWRjcnVtYnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBBcHBCcmVhZGNydW1iU2VydmljZSwgcHVibGljIGVsOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcclxuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcclxuICAgIHRoaXMuYnJlYWRjcnVtYnMgPSB0aGlzLnNlcnZpY2UuYnJlYWRjcnVtYnM7XHJcbiAgfVxyXG5cclxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5maXhlZCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnYnJlYWRjcnVtYi1maXhlZCcpOyB9XHJcbiAgfVxyXG59XHJcbiJdfQ==