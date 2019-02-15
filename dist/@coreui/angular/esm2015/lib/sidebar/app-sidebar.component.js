/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject, Renderer2, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { sidebarCssClasses } from '../shared';
export class AppSidebarComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} hostElement
     */
    constructor(document, renderer, hostElement) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        renderer.addClass(hostElement.nativeElement, 'sidebar');
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
    { type: Renderer2 },
    { type: ElementRef }
];
AppSidebarComponent.propDecorators = {
    compact: [{ type: Input }],
    display: [{ type: Input }],
    fixed: [{ type: Input }],
    minimized: [{ type: Input }],
    offCanvas: [{ type: Input }]
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
    /**
     * @type {?}
     * @private
     */
    AppSidebarComponent.prototype.hostElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQXFCLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQU05QyxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFPOUIsWUFDNEIsUUFBYSxFQUMvQixRQUFtQixFQUNuQixXQUF1QjtRQUZMLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUUvQixRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFFLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsVUFBbUIsSUFBSSxDQUFDLE9BQU87UUFDdkMsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBRSxDQUFDO1NBQ2hFO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsUUFBaUIsSUFBSSxDQUFDLEtBQUs7UUFDakMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztTQUM3RDtJQUNILENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFlBQXFCLElBQUksQ0FBQyxTQUFTO1FBQzdDLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztTQUNqRTtJQUNILENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFlBQXFCLElBQUksQ0FBQyxTQUFTO1FBQzdDLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztTQUNsRTtJQUNILENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsVUFBZSxJQUFJLENBQUMsT0FBTztRQUMzQyxJQUFJLE9BQU8sS0FBSyxLQUFLLEVBQUU7O2tCQUNmLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUMzRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7OztZQTVERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7Ozs7NENBU0ksTUFBTSxTQUFDLFFBQVE7WUFqQmlDLFNBQVM7WUFBRSxVQUFVOzs7c0JBVXZFLEtBQUs7c0JBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzs7OztJQUpOLHNDQUEwQjs7SUFDMUIsc0NBQXNCOztJQUN0QixvQ0FBd0I7O0lBQ3hCLHdDQUE0Qjs7SUFDNUIsd0NBQTRCOzs7OztJQUcxQix1Q0FBdUM7Ozs7O0lBQ3ZDLHVDQUEyQjs7Ozs7SUFDM0IsMENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBJbmplY3QsIE9uSW5pdCwgT25EZXN0cm95LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBzaWRlYmFyQ3NzQ2xhc3NlcyB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjb21wYWN0OiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNwbGF5OiBhbnk7XG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBtaW5pbWl6ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG9mZkNhbnZhczogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NpZGViYXInKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlzcGxheUJyZWFrcG9pbnQodGhpcy5kaXNwbGF5KTtcbiAgICB0aGlzLmlzQ29tcGFjdCh0aGlzLmNvbXBhY3QpO1xuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcbiAgICB0aGlzLmlzTWluaW1pemVkKHRoaXMubWluaW1pemVkKTtcbiAgICB0aGlzLmlzT2ZmQ2FudmFzKHRoaXMub2ZmQ2FudmFzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnc2lkZWJhci1maXhlZCcgKTtcbiAgfVxuXG4gIGlzQ29tcGFjdChjb21wYWN0OiBib29sZWFuID0gdGhpcy5jb21wYWN0KTogdm9pZCB7XG4gICAgaWYgKGNvbXBhY3QpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnc2lkZWJhci1jb21wYWN0JyApO1xuICAgIH1cbiAgfVxuXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4gPSB0aGlzLmZpeGVkKTogdm9pZCB7XG4gICAgaWYgKGZpeGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItZml4ZWQnKTtcbiAgICB9XG4gIH1cblxuICBpc01pbmltaXplZChtaW5pbWl6ZWQ6IGJvb2xlYW4gPSB0aGlzLm1pbmltaXplZCk6IHZvaWQge1xuICAgIGlmIChtaW5pbWl6ZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnc2lkZWJhci1taW5pbWl6ZWQnKTtcbiAgICB9XG4gIH1cblxuICBpc09mZkNhbnZhcyhvZmZDYW52YXM6IGJvb2xlYW4gPSB0aGlzLm9mZkNhbnZhcyk6IHZvaWQge1xuICAgIGlmIChvZmZDYW52YXMpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnc2lkZWJhci1vZmYtY2FudmFzJyk7XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheUJyZWFrcG9pbnQoZGlzcGxheTogYW55ID0gdGhpcy5kaXNwbGF5KTogdm9pZCB7XG4gICAgaWYgKGRpc3BsYXkgIT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBjc3NDbGFzcyA9IGRpc3BsYXkgPyBgc2lkZWJhci0ke2Rpc3BsYXl9LXNob3dgIDogc2lkZWJhckNzc0NsYXNzZXNbMF07XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgY3NzQ2xhc3MpO1xuICAgIH1cbiAgfVxufVxuIl19