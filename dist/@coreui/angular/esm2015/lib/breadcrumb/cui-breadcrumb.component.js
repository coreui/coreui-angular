/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AppBreadcrumbService } from './app-breadcrumb.service';
export class CuiBreadcrumbComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} service
     */
    constructor(document, renderer, service) {
        this.document = document;
        this.renderer = renderer;
        this.service = service;
        this.fixedClass = 'breadcrumb-fixed';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isFixed(this.fixed);
        this.breadcrumbs = this.service.breadcrumbs;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    /**
     * @param {?=} fixed
     * @return {?}
     */
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
}
CuiBreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'cui-breadcrumb',
                template: "<ol class=\"breadcrumb\">\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last = last>\n    <li class=\"breadcrumb-item\"\n        *ngIf=\"breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)\"\n        [ngClass]=\"{active: last}\">\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n    </li>\n  </ng-template>\n  <ng-content></ng-content>\n</ol>\n"
            }] }
];
/** @nocollapse */
CuiBreadcrumbComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: AppBreadcrumbService }
];
CuiBreadcrumbComponent.propDecorators = {
    fixed: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VpLWJyZWFkY3J1bWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvY3VpLWJyZWFkY3J1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFjLE1BQU0sRUFBRSxLQUFLLEVBQXFCLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFNOUQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7O0lBTWpDLFlBQzRCLFFBQWEsRUFDL0IsUUFBbUIsRUFDcEIsT0FBNkI7UUFGVixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDcEIsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7UUFMckIsZUFBVSxHQUFHLGtCQUFrQixDQUFDO0lBTTdDLENBQUM7Ozs7SUFFRSxRQUFRO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxRQUFpQixJQUFJLENBQUMsS0FBSztRQUNqQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM3RDtJQUNILENBQUM7OztZQTdCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsd2hCQUE4QzthQUMvQzs7Ozs0Q0FRSSxNQUFNLFNBQUMsUUFBUTtZQWhCNkMsU0FBUztZQUdsRSxvQkFBb0I7OztvQkFPekIsS0FBSzs7OztJQUFOLHVDQUF3Qjs7SUFFeEIsNkNBQW1COzs7OztJQUNuQiw0Q0FBaUQ7Ozs7O0lBRy9DLDBDQUF1Qzs7Ozs7SUFDdkMsMENBQTJCOztJQUMzQix5Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge0FwcEJyZWFkY3J1bWJTZXJ2aWNlfSBmcm9tICcuL2FwcC1icmVhZGNydW1iLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjdWktYnJlYWRjcnVtYicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdWktYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ3VpQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG5cbiAgcHVibGljIGJyZWFkY3J1bWJzO1xuICBwcml2YXRlIHJlYWRvbmx5IGZpeGVkQ2xhc3MgPSAnYnJlYWRjcnVtYi1maXhlZCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgc2VydmljZTogQXBwQnJlYWRjcnVtYlNlcnZpY2UsXG4gICkgeyB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcbiAgICB0aGlzLmJyZWFkY3J1bWJzID0gdGhpcy5zZXJ2aWNlLmJyZWFkY3J1bWJzO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuZml4ZWRDbGFzcyk7XG4gIH1cblxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuID0gdGhpcy5maXhlZCk6IHZvaWQge1xuICAgIGlmIChmaXhlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuZml4ZWRDbGFzcyk7XG4gICAgfVxuICB9XG59XG4iXX0=