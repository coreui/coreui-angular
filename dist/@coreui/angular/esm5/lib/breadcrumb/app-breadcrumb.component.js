/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AppBreadcrumbService } from './app-breadcrumb.service';
import { Replace } from '../shared';
var AppBreadcrumbComponent = /** @class */ (function () {
    function AppBreadcrumbComponent(document, renderer, service, el) {
        this.document = document;
        this.renderer = renderer;
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
     * @return {?}
     */
    AppBreadcrumbComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.renderer.removeClass(this.document.body, 'breadcrumb-fixed');
    };
    /**
     * @param {?=} fixed
     * @return {?}
     */
    AppBreadcrumbComponent.prototype.isFixed = /**
     * @param {?=} fixed
     * @return {?}
     */
    function (fixed) {
        if (fixed === void 0) { fixed = this.fixed; }
        if (fixed) {
            this.renderer.addClass(this.document.body, 'breadcrumb-fixed');
        }
    };
    AppBreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-breadcrumb',
                    template: "\n    <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last = last>\n      <li class=\"breadcrumb-item\"\n          *ngIf=\"breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)\"\n          [ngClass]=\"{active: last}\">\n        <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n        <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n      </li>\n    </ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    AppBreadcrumbComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
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
    /**
     * @type {?}
     * @private
     */
    AppBreadcrumbComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    AppBreadcrumbComponent.prototype.renderer;
    /** @type {?} */
    AppBreadcrumbComponent.prototype.service;
    /** @type {?} */
    AppBreadcrumbComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJyZWFkY3J1bWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvYXBwLWJyZWFkY3J1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFFbEM7SUFpQkUsZ0NBQzRCLFFBQWEsRUFDL0IsUUFBbUIsRUFDcEIsT0FBNkIsRUFDN0IsRUFBYztRQUhLLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwQixZQUFPLEdBQVAsT0FBTyxDQUFzQjtRQUM3QixPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQ25CLENBQUM7Ozs7SUFFRSx5Q0FBUTs7O0lBQWY7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELDRDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7SUFFRCx3Q0FBTzs7OztJQUFQLFVBQVEsS0FBMkI7UUFBM0Isc0JBQUEsRUFBQSxRQUFpQixJQUFJLENBQUMsS0FBSztRQUNqQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUM7U0FDaEU7SUFDSCxDQUFDOztnQkF0Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxtZUFTVDtpQkFDRjs7OztnREFNSSxNQUFNLFNBQUMsUUFBUTtnQkF4QjZDLFNBQVM7Z0JBR2xFLG9CQUFvQjtnQkFIVCxVQUFVOzs7d0JBb0IxQixLQUFLOztJQXlCUiw2QkFBQztDQUFBLEFBdkNELElBdUNDO1NBMUJZLHNCQUFzQjs7O0lBQ2pDLHVDQUF3Qjs7SUFDeEIsNkNBQW1COzs7OztJQUdqQiwwQ0FBdUM7Ozs7O0lBQ3ZDLDBDQUEyQjs7SUFDM0IseUNBQW9DOztJQUNwQyxvQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge0FwcEJyZWFkY3J1bWJTZXJ2aWNlfSBmcm9tICcuL2FwcC1icmVhZGNydW1iLnNlcnZpY2UnO1xuaW1wb3J0IHtSZXBsYWNlfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYnJlYWRjcnVtYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1icmVhZGNydW1iIFtuZ0Zvck9mXT1cImJyZWFkY3J1bWJzIHwgYXN5bmNcIiBsZXQtbGFzdCA9IGxhc3Q+XG4gICAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW1cIlxuICAgICAgICAgICpuZ0lmPVwiYnJlYWRjcnVtYi5sYWJlbC50aXRsZSAmJiAoYnJlYWRjcnVtYi51cmwuc2xpY2UoLTEpID09ICcvJyB8fCBsYXN0KVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwie2FjdGl2ZTogbGFzdH1cIj5cbiAgICAgICAgPGEgKm5nSWY9XCIhbGFzdFwiIFtyb3V0ZXJMaW5rXT1cImJyZWFkY3J1bWIudXJsXCI+e3ticmVhZGNydW1iLmxhYmVsLnRpdGxlfX08L2E+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwibGFzdFwiIFtyb3V0ZXJMaW5rXT1cImJyZWFkY3J1bWIudXJsXCI+e3ticmVhZGNydW1iLmxhYmVsLnRpdGxlfX08L3NwYW4+XG4gICAgICA8L2xpPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG4gIHB1YmxpYyBicmVhZGNydW1icztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBzZXJ2aWNlOiBBcHBCcmVhZGNydW1iU2VydmljZSxcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWZcbiAgKSB7IH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgICB0aGlzLmlzRml4ZWQodGhpcy5maXhlZCk7XG4gICAgdGhpcy5icmVhZGNydW1icyA9IHRoaXMuc2VydmljZS5icmVhZGNydW1icztcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnYnJlYWRjcnVtYi1maXhlZCcpO1xuICB9XG5cbiAgaXNGaXhlZChmaXhlZDogYm9vbGVhbiA9IHRoaXMuZml4ZWQpOiB2b2lkIHtcbiAgICBpZiAoZml4ZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnYnJlYWRjcnVtYi1maXhlZCcpO1xuICAgIH1cbiAgfVxufVxuIl19