/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject, Renderer2, HostBinding } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { asideMenuCssClasses } from '../shared';
export class AppAsideComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     */
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
        this.fixedClass = 'aside-menu-fixed';
        this._aside = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isFixed(this.fixed);
        this.isOffCanvas(this.offCanvas);
        this.displayBreakpoint(this.display);
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
    /**
     * @param {?=} offCanvas
     * @return {?}
     */
    isOffCanvas(offCanvas = this.offCanvas) {
        if (offCanvas) {
            this.renderer.addClass(this.document.body, 'aside-menu-off-canvas');
        }
    }
    /**
     * @param {?=} display
     * @return {?}
     */
    displayBreakpoint(display = this.display) {
        if (display !== false) {
            /** @type {?} */
            const cssClass = this.display ? `aside-menu-${this.display}-show` : asideMenuCssClasses[0];
            this.renderer.addClass(this.document.body, cssClass);
        }
    }
}
AppAsideComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-aside, cui-aside',
                template: `<ng-content></ng-content>`
            }] }
];
/** @nocollapse */
AppAsideComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
AppAsideComponent.propDecorators = {
    display: [{ type: Input }],
    fixed: [{ type: Input }],
    offCanvas: [{ type: Input }],
    _aside: [{ type: HostBinding, args: ['class.aside-menu',] }]
};
if (false) {
    /** @type {?} */
    AppAsideComponent.prototype.display;
    /** @type {?} */
    AppAsideComponent.prototype.fixed;
    /** @type {?} */
    AppAsideComponent.prototype.offCanvas;
    /**
     * @type {?}
     * @private
     */
    AppAsideComponent.prototype.fixedClass;
    /** @type {?} */
    AppAsideComponent.prototype._aside;
    /**
     * @type {?}
     * @private
     */
    AppAsideComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    AppAsideComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWFzaWRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9hc2lkZS9hcHAtYXNpZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQU1oRCxNQUFNLE9BQU8saUJBQWlCOzs7OztJQVM1QixZQUM0QixRQUFhLEVBQy9CLFFBQW1CO1FBREQsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBTlosZUFBVSxHQUFHLGtCQUFrQixDQUFDO1FBRWhCLFdBQU0sR0FBRyxJQUFJLENBQUM7SUFLM0MsQ0FBQzs7OztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLFFBQWlCLElBQUksQ0FBQyxLQUFLO1FBQ2pDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsWUFBcUIsSUFBSSxDQUFDLFNBQVM7UUFDN0MsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxVQUFlLElBQUksQ0FBQyxPQUFPO1FBQzNDLElBQUksT0FBTyxLQUFLLEtBQUssRUFBRzs7a0JBQ2hCLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxjQUFjLElBQUksQ0FBQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDOzs7OzRDQVdJLE1BQU0sU0FBQyxRQUFRO1lBbkJpQyxTQUFTOzs7c0JBVTNELEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUlMLFdBQVcsU0FBQyxrQkFBa0I7Ozs7SUFOL0Isb0NBQXNCOztJQUN0QixrQ0FBd0I7O0lBQ3hCLHNDQUE0Qjs7Ozs7SUFFNUIsdUNBQWlEOztJQUVqRCxtQ0FBK0M7Ozs7O0lBRzdDLHFDQUF1Qzs7Ozs7SUFDdkMscUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSwgSW5qZWN0LCBSZW5kZXJlcjIsIEhvc3RCaW5kaW5nfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IGFzaWRlTWVudUNzc0NsYXNzZXMgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYXNpZGUsIGN1aS1hc2lkZScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQXNpZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGRpc3BsYXk6IGFueTtcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG9mZkNhbnZhczogYm9vbGVhbjtcblxuICBwcml2YXRlIHJlYWRvbmx5IGZpeGVkQ2xhc3MgPSAnYXNpZGUtbWVudS1maXhlZCc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hc2lkZS1tZW51JykgX2FzaWRlID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcbiAgICB0aGlzLmlzT2ZmQ2FudmFzKHRoaXMub2ZmQ2FudmFzKTtcbiAgICB0aGlzLmRpc3BsYXlCcmVha3BvaW50KHRoaXMuZGlzcGxheSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5maXhlZENsYXNzKTtcbiAgfVxuXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4gPSB0aGlzLmZpeGVkKTogdm9pZCB7XG4gICAgaWYgKGZpeGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5maXhlZENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBpc09mZkNhbnZhcyhvZmZDYW52YXM6IGJvb2xlYW4gPSB0aGlzLm9mZkNhbnZhcyk6IHZvaWQge1xuICAgIGlmIChvZmZDYW52YXMpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnYXNpZGUtbWVudS1vZmYtY2FudmFzJyk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheUJyZWFrcG9pbnQoZGlzcGxheTogYW55ID0gdGhpcy5kaXNwbGF5KTogdm9pZCB7XG4gICAgaWYgKGRpc3BsYXkgIT09IGZhbHNlICkge1xuICAgICAgY29uc3QgY3NzQ2xhc3MgPSB0aGlzLmRpc3BsYXkgPyBgYXNpZGUtbWVudS0ke3RoaXMuZGlzcGxheX0tc2hvd2AgOiBhc2lkZU1lbnVDc3NDbGFzc2VzWzBdO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIGNzc0NsYXNzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==