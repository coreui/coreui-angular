/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        // const s = this.service.crumbs$.subscribe((x) => {
        //   this.crumbs = x;
        // });
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
                    template: "\n    <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs\" let-last = last>\n      <li class=\"breadcrumb-item\"\n          *ngIf=\"breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/'||breadcrumb.label.title&&last\"\n          [ngClass]=\"{active: last}\">\n        <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n        <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n      </li>\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    AppBreadcrumbComponent.ctorParameters = function () { return [
        { type: AppBreadcrumbService, },
        { type: ElementRef, },
    ]; };
    AppBreadcrumbComponent.propDecorators = {
        "fixed": [{ type: Input },],
    };
    return AppBreadcrumbComponent;
}());
export { AppBreadcrumbComponent };
function AppBreadcrumbComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppBreadcrumbComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppBreadcrumbComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AppBreadcrumbComponent.propDecorators;
    /** @type {?} */
    AppBreadcrumbComponent.prototype.fixed;
    /** @type {?} */
    AppBreadcrumbComponent.prototype.breadcrumbs;
    /** @type {?} */
    AppBreadcrumbComponent.prototype.service;
    /** @type {?} */
    AppBreadcrumbComponent.prototype.el;
}
//# sourceMappingURL=app-breadcrumb.component.js.map