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
     * @return {?}
     */
    AppBreadcrumbComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        document.body.classList.remove('breadcrumb-fixed');
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
                }] }
    ];
    /** @nocollapse */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJyZWFkY3J1bWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvYXBwLWJyZWFkY3J1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEU7SUFpQkUsZ0NBQW1CLE9BQTZCLEVBQVMsRUFBYztRQUFwRCxZQUFPLEdBQVAsT0FBTyxDQUFzQjtRQUFTLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBSSxDQUFDOzs7O0lBRXJFLHlDQUFROzs7SUFBZjtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCx3Q0FBTzs7OztJQUFQLFVBQVEsS0FBYztRQUNwQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUFFO0lBQ3ZGLENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLG1lQVNUO2lCQUNGOzs7O2dCQWRRLG9CQUFvQjtnQkFGVCxVQUFVOzs7d0JBa0IzQixLQUFLOztJQWtCUiw2QkFBQztDQUFBLEFBaENELElBZ0NDO1NBbkJZLHNCQUFzQjs7O0lBQ2pDLHVDQUF3Qjs7SUFDeEIsNkNBQW1COztJQUVQLHlDQUFvQzs7SUFBRSxvQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXBsYWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xyXG5pbXBvcnQgeyBBcHBCcmVhZGNydW1iU2VydmljZSB9IGZyb20gJy4vYXBwLWJyZWFkY3J1bWIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1icmVhZGNydW1iJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1icmVhZGNydW1iIFtuZ0Zvck9mXT1cImJyZWFkY3J1bWJzIHwgYXN5bmNcIiBsZXQtbGFzdCA9IGxhc3Q+XHJcbiAgICAgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbVwiXHJcbiAgICAgICAgICAqbmdJZj1cImJyZWFkY3J1bWIubGFiZWwudGl0bGUgJiYgKGJyZWFkY3J1bWIudXJsLnNsaWNlKC0xKSA9PSAnLycgfHwgbGFzdClcIlxyXG4gICAgICAgICAgW25nQ2xhc3NdPVwie2FjdGl2ZTogbGFzdH1cIj5cclxuICAgICAgICA8YSAqbmdJZj1cIiFsYXN0XCIgW3JvdXRlckxpbmtdPVwiYnJlYWRjcnVtYi51cmxcIj57e2JyZWFkY3J1bWIubGFiZWwudGl0bGV9fTwvYT5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImxhc3RcIiBbcm91dGVyTGlua109XCJicmVhZGNydW1iLnVybFwiPnt7YnJlYWRjcnVtYi5sYWJlbC50aXRsZX19PC9zcGFuPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xyXG4gIHB1YmxpYyBicmVhZGNydW1icztcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IEFwcEJyZWFkY3J1bWJTZXJ2aWNlLCBwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xyXG4gICAgdGhpcy5pc0ZpeGVkKHRoaXMuZml4ZWQpO1xyXG4gICAgdGhpcy5icmVhZGNydW1icyA9IHRoaXMuc2VydmljZS5icmVhZGNydW1icztcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdicmVhZGNydW1iLWZpeGVkJyk7XHJcbiAgfVxyXG5cclxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5maXhlZCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnYnJlYWRjcnVtYi1maXhlZCcpOyB9XHJcbiAgfVxyXG59XHJcbiJdfQ==