/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AppBreadcrumbService } from './app-breadcrumb.service';
var CuiBreadcrumbComponent = /** @class */ (function () {
    function CuiBreadcrumbComponent(document, renderer, service) {
        this.document = document;
        this.renderer = renderer;
        this.service = service;
        this.fixedClass = 'breadcrumb-fixed';
    }
    /**
     * @return {?}
     */
    CuiBreadcrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isFixed(this.fixed);
        this.breadcrumbs = this.service.breadcrumbs;
    };
    /**
     * @return {?}
     */
    CuiBreadcrumbComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    };
    /**
     * @param {?=} fixed
     * @return {?}
     */
    CuiBreadcrumbComponent.prototype.isFixed = /**
     * @param {?=} fixed
     * @return {?}
     */
    function (fixed) {
        if (fixed === void 0) { fixed = this.fixed; }
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    };
    CuiBreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cui-breadcrumb',
                    template: "<ol class=\"breadcrumb\">\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last = last>\n    <li class=\"breadcrumb-item\"\n        *ngIf=\"breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)\"\n        [ngClass]=\"{active: last}\">\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n    </li>\n  </ng-template>\n  <ng-content></ng-content>\n</ol>\n"
                }] }
    ];
    /** @nocollapse */
    CuiBreadcrumbComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: AppBreadcrumbService }
    ]; };
    CuiBreadcrumbComponent.propDecorators = {
        fixed: [{ type: Input }]
    };
    return CuiBreadcrumbComponent;
}());
export { CuiBreadcrumbComponent };
if (false) {
    /** @type {?} */
    CuiBreadcrumbComponent.prototype.fixed;
    /** @type {?} */
    CuiBreadcrumbComponent.prototype.breadcrumbs;
    /**
     * @type {?}
     * @private
     */
    CuiBreadcrumbComponent.prototype.fixedClass;
    /**
     * @type {?}
     * @private
     */
    CuiBreadcrumbComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    CuiBreadcrumbComponent.prototype.renderer;
    /** @type {?} */
    CuiBreadcrumbComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VpLWJyZWFkY3J1bWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvY3VpLWJyZWFkY3J1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFjLE1BQU0sRUFBRSxLQUFLLEVBQXFCLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFFOUQ7SUFVRSxnQ0FDNEIsUUFBYSxFQUMvQixRQUFtQixFQUNwQixPQUE2QjtRQUZWLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwQixZQUFPLEdBQVAsT0FBTyxDQUFzQjtRQUxyQixlQUFVLEdBQUcsa0JBQWtCLENBQUM7SUFNN0MsQ0FBQzs7OztJQUVFLHlDQUFROzs7SUFBZjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELDRDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUVELHdDQUFPOzs7O0lBQVAsVUFBUSxLQUEyQjtRQUEzQixzQkFBQSxFQUFBLFFBQWlCLElBQUksQ0FBQyxLQUFLO1FBQ2pDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQzs7Z0JBN0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQix3aEJBQThDO2lCQUMvQzs7OztnREFRSSxNQUFNLFNBQUMsUUFBUTtnQkFoQjZDLFNBQVM7Z0JBR2xFLG9CQUFvQjs7O3dCQU96QixLQUFLOztJQXlCUiw2QkFBQztDQUFBLEFBOUJELElBOEJDO1NBMUJZLHNCQUFzQjs7O0lBQ2pDLHVDQUF3Qjs7SUFFeEIsNkNBQW1COzs7OztJQUNuQiw0Q0FBaUQ7Ozs7O0lBRy9DLDBDQUF1Qzs7Ozs7SUFDdkMsMENBQTJCOztJQUMzQix5Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge0FwcEJyZWFkY3J1bWJTZXJ2aWNlfSBmcm9tICcuL2FwcC1icmVhZGNydW1iLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjdWktYnJlYWRjcnVtYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdWktYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ3VpQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG5cbiAgcHVibGljIGJyZWFkY3J1bWJzO1xuICBwcml2YXRlIHJlYWRvbmx5IGZpeGVkQ2xhc3MgPSAnYnJlYWRjcnVtYi1maXhlZCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgc2VydmljZTogQXBwQnJlYWRjcnVtYlNlcnZpY2UsXG4gICkgeyB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcbiAgICB0aGlzLmJyZWFkY3J1bWJzID0gdGhpcy5zZXJ2aWNlLmJyZWFkY3J1bWJzO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuZml4ZWRDbGFzcyk7XG4gIH1cblxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuID0gdGhpcy5maXhlZCk6IHZvaWQge1xuICAgIGlmIChmaXhlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuZml4ZWRDbGFzcyk7XG4gICAgfVxuICB9XG59XG4iXX0=