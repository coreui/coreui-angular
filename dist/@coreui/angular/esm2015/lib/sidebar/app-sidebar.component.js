/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject, HostBinding, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { sidebarCssClasses } from '../shared';
export class AppSidebarComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     */
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.displayBreakpoint(this.display);
        this.isCompact(this.compact);
        this.isFixed(this.fixed);
        this.isMinimized(this.minimized);
        this.isOffCanvas(this.offCanvas);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, 'sidebar-fixed');
    }
    /**
     * @param {?=} compact
     * @return {?}
     */
    isCompact(compact = this.compact) {
        if (compact) {
            this.renderer.addClass(this.document.body, 'sidebar-compact');
        }
    }
    /**
     * @param {?=} fixed
     * @return {?}
     */
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, 'sidebar-fixed');
        }
    }
    /**
     * @param {?=} minimized
     * @return {?}
     */
    isMinimized(minimized = this.minimized) {
        if (minimized) {
            this.renderer.addClass(this.document.body, 'sidebar-minimized');
        }
    }
    /**
     * @param {?=} offCanvas
     * @return {?}
     */
    isOffCanvas(offCanvas = this.offCanvas) {
        if (offCanvas) {
            this.renderer.addClass(this.document.body, 'sidebar-off-canvas');
        }
    }
    /**
     * @param {?=} fixed
     * @return {?}
     */
    fixedPosition(fixed = this.fixed) {
        console.warn('deprecated fixedPosition(), use isFixed() instead');
        if (fixed) {
            this.renderer.addClass(this.document.body, 'sidebar-fixed');
        }
    }
    /**
     * @param {?=} display
     * @return {?}
     */
    displayBreakpoint(display = this.display) {
        if (display !== false) {
            /** @type {?} */
            const cssClass = display ? `sidebar-${display}-show` : sidebarCssClasses[0];
            this.renderer.addClass(this.document.body, cssClass);
        }
    }
}
AppSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar',
                template: `<ng-content></ng-content>`
            }] }
];
/** @nocollapse */
AppSidebarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
AppSidebarComponent.propDecorators = {
    compact: [{ type: Input }],
    display: [{ type: Input }],
    fixed: [{ type: Input }],
    minimized: [{ type: Input }],
    offCanvas: [{ type: Input }],
    true: [{ type: HostBinding, args: ['class.sidebar',] }]
};
if (false) {
    /** @type {?} */
    AppSidebarComponent.prototype.compact;
    /** @type {?} */
    AppSidebarComponent.prototype.display;
    /** @type {?} */
    AppSidebarComponent.prototype.fixed;
    /** @type {?} */
    AppSidebarComponent.prototype.minimized;
    /** @type {?} */
    AppSidebarComponent.prototype.offCanvas;
    /** @type {?} */
    AppSidebarComponent.prototype.true;
    /**
     * @type {?}
     * @private
     */
    AppSidebarComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    AppSidebarComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQU05QyxNQUFNLE9BQU8sbUJBQW1COzs7OztJQVM5QixZQUM0QixRQUFhLEVBQy9CLFFBQW1CO1FBREQsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQzFCLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBRSxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLFVBQW1CLElBQUksQ0FBQyxPQUFPO1FBQ3ZDLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUUsQ0FBQztTQUNoRTtJQUNILENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLFFBQWlCLElBQUksQ0FBQyxLQUFLO1FBQ2pDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDN0Q7SUFDSCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxZQUFxQixJQUFJLENBQUMsU0FBUztRQUM3QyxJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUM7U0FDakU7SUFDSCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxZQUFxQixJQUFJLENBQUMsU0FBUztRQUM3QyxJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLG9CQUFvQixDQUFDLENBQUM7U0FDbEU7SUFDSCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxRQUFpQixJQUFJLENBQUMsS0FBSztRQUN2QyxPQUFPLENBQUMsSUFBSSxDQUFDLG1EQUFtRCxDQUFDLENBQUM7UUFDbEUsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztTQUM3RDtJQUNILENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsVUFBZSxJQUFJLENBQUMsT0FBTztRQUMzQyxJQUFJLE9BQU8sS0FBSyxLQUFLLEVBQUU7O2tCQUNmLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUMzRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7OztZQWxFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7Ozs7NENBV0ksTUFBTSxTQUFDLFFBQVE7WUFuQitDLFNBQVM7OztzQkFVekUsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO21CQUVMLFdBQVcsU0FBQyxlQUFlOzs7O0lBTjVCLHNDQUEwQjs7SUFDMUIsc0NBQXNCOztJQUN0QixvQ0FBd0I7O0lBQ3hCLHdDQUE0Qjs7SUFDNUIsd0NBQTRCOztJQUU1QixtQ0FBbUM7Ozs7O0lBR2pDLHVDQUF1Qzs7Ozs7SUFDdkMsdUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSW5qZWN0LCBIb3N0QmluZGluZywgT25Jbml0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBzaWRlYmFyQ3NzQ2xhc3NlcyB9IGZyb20gJy4uL3NoYXJlZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGNvbXBhY3Q6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZGlzcGxheTogYW55O1xyXG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG1pbmltaXplZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBvZmZDYW52YXM6IGJvb2xlYW47XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2lkZWJhcicpIHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzcGxheUJyZWFrcG9pbnQodGhpcy5kaXNwbGF5KTtcclxuICAgIHRoaXMuaXNDb21wYWN0KHRoaXMuY29tcGFjdCk7XHJcbiAgICB0aGlzLmlzRml4ZWQodGhpcy5maXhlZCk7XHJcbiAgICB0aGlzLmlzTWluaW1pemVkKHRoaXMubWluaW1pemVkKTtcclxuICAgIHRoaXMuaXNPZmZDYW52YXModGhpcy5vZmZDYW52YXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItZml4ZWQnICk7XHJcbiAgfVxyXG5cclxuICBpc0NvbXBhY3QoY29tcGFjdDogYm9vbGVhbiA9IHRoaXMuY29tcGFjdCk6IHZvaWQge1xyXG4gICAgaWYgKGNvbXBhY3QpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdzaWRlYmFyLWNvbXBhY3QnICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuID0gdGhpcy5maXhlZCk6IHZvaWQge1xyXG4gICAgaWYgKGZpeGVkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnc2lkZWJhci1maXhlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNNaW5pbWl6ZWQobWluaW1pemVkOiBib29sZWFuID0gdGhpcy5taW5pbWl6ZWQpOiB2b2lkIHtcclxuICAgIGlmIChtaW5pbWl6ZWQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdzaWRlYmFyLW1pbmltaXplZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNPZmZDYW52YXMob2ZmQ2FudmFzOiBib29sZWFuID0gdGhpcy5vZmZDYW52YXMpOiB2b2lkIHtcclxuICAgIGlmIChvZmZDYW52YXMpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdzaWRlYmFyLW9mZi1jYW52YXMnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpeGVkUG9zaXRpb24oZml4ZWQ6IGJvb2xlYW4gPSB0aGlzLmZpeGVkKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLndhcm4oJ2RlcHJlY2F0ZWQgZml4ZWRQb3NpdGlvbigpLCB1c2UgaXNGaXhlZCgpIGluc3RlYWQnKTtcclxuICAgIGlmIChmaXhlZCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItZml4ZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpc3BsYXlCcmVha3BvaW50KGRpc3BsYXk6IGFueSA9IHRoaXMuZGlzcGxheSk6IHZvaWQge1xyXG4gICAgaWYgKGRpc3BsYXkgIT09IGZhbHNlKSB7XHJcbiAgICAgIGNvbnN0IGNzc0NsYXNzID0gZGlzcGxheSA/IGBzaWRlYmFyLSR7ZGlzcGxheX0tc2hvd2AgOiBzaWRlYmFyQ3NzQ2xhc3Nlc1swXTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIGNzc0NsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19