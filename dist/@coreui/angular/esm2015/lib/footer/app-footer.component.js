/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
export class AppFooterComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     */
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
        this.fixedClass = 'footer-fixed';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isFixed(this.fixed);
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
AppFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-footer, cui-footer',
                template: `<ng-content></ng-content>`
            }] }
];
/** @nocollapse */
AppFooterComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
AppFooterComponent.propDecorators = {
    fixed: [{ type: Input }],
    true: [{ type: HostBinding, args: ['class.app-footer',] }]
};
if (false) {
    /** @type {?} */
    AppFooterComponent.prototype.fixed;
    /** @type {?} */
    AppFooterComponent.prototype.true;
    /**
     * @type {?}
     * @private
     */
    AppFooterComponent.prototype.fixedClass;
    /**
     * @type {?}
     * @private
     */
    AppFooterComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    AppFooterComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZm9vdGVyL2FwcC1mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBTXpDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBTzdCLFlBQzRCLFFBQWEsRUFDL0IsUUFBbUI7UUFERCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFKWixlQUFVLEdBQUcsY0FBYyxDQUFDO0lBSzFDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsUUFBaUIsSUFBSSxDQUFDLEtBQUs7UUFDakMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDN0Q7SUFDSCxDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7Ozs7NENBU0ksTUFBTSxTQUFDLFFBQVE7WUFmOEMsU0FBUzs7O29CQVF4RSxLQUFLO21CQUVMLFdBQVcsU0FBQyxrQkFBa0I7Ozs7SUFGL0IsbUNBQXdCOztJQUV4QixrQ0FBc0M7Ozs7O0lBRXRDLHdDQUE2Qzs7Ozs7SUFHM0Msc0NBQXVDOzs7OztJQUN2QyxzQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSG9zdEJpbmRpbmcsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZm9vdGVyLCBjdWktZm9vdGVyJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYXBwLWZvb3RlcicpIHRydWU7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgZml4ZWRDbGFzcyA9ICdmb290ZXItZml4ZWQnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0ZpeGVkKHRoaXMuZml4ZWQpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5maXhlZENsYXNzKTtcclxuICB9XHJcblxyXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4gPSB0aGlzLmZpeGVkKTogdm9pZCB7XHJcbiAgICBpZiAoZml4ZWQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuZml4ZWRDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==