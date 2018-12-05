/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding } from '@angular/core';
import { sidebarCssClasses } from './../shared';
export class AppSidebarComponent {
    constructor() { }
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
        document.body.classList.remove('sidebar-fixed');
    }
    /**
     * @param {?} compact
     * @return {?}
     */
    isCompact(compact) {
        if (this.compact) {
            document.querySelector('body').classList.add('sidebar-compact');
        }
    }
    /**
     * @param {?} fixed
     * @return {?}
     */
    isFixed(fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('sidebar-fixed');
        }
    }
    /**
     * @param {?} minimized
     * @return {?}
     */
    isMinimized(minimized) {
        if (this.minimized) {
            document.querySelector('body').classList.add('sidebar-minimized');
        }
    }
    /**
     * @param {?} offCanvas
     * @return {?}
     */
    isOffCanvas(offCanvas) {
        if (this.offCanvas) {
            document.querySelector('body').classList.add('sidebar-off-canvas');
        }
    }
    /**
     * @param {?} fixed
     * @return {?}
     */
    fixedPosition(fixed) {
        console.warn('fixedPosition() is deprecated, use isFixed() instead');
        if (this.fixed) {
            document.querySelector('body').classList.add('sidebar-fixed');
        }
    }
    /**
     * @param {?} display
     * @return {?}
     */
    displayBreakpoint(display) {
        if (this.display !== false) {
            /** @type {?} */
            let cssClass;
            this.display ? cssClass = `sidebar-${this.display}-show` : cssClass = sidebarCssClasses[0];
            document.querySelector('body').classList.add(cssClass);
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
AppSidebarComponent.ctorParameters = () => [];
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU1oRCxNQUFNLE9BQU8sbUJBQW1CO0lBUzlCLGdCQUFlLENBQUM7Ozs7SUFFaEIsUUFBUTtRQUNOLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsT0FBZ0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FBRTtJQUN4RixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFjO1FBQ3BCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUFFO0lBQ3BGLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFNBQWtCO1FBQzVCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQUU7SUFDNUYsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsU0FBa0I7UUFDNUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FBRTtJQUM3RixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxLQUFjO1FBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0RBQXNELENBQUMsQ0FBQTtRQUNwRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7U0FBRTtJQUNwRixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLE9BQVk7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRzs7Z0JBQ3ZCLFFBQVE7WUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsV0FBVyxJQUFJLENBQUMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRixRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEQ7SUFDSCxDQUFDOzs7WUF0REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDOzs7OztzQkFFRSxLQUFLO3NCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7bUJBRUwsV0FBVyxTQUFDLGVBQWU7Ozs7SUFONUIsc0NBQTBCOztJQUMxQixzQ0FBc0I7O0lBQ3RCLG9DQUF3Qjs7SUFDeEIsd0NBQTRCOztJQUM1Qix3Q0FBNEI7O0lBRTVCLG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2lkZWJhckNzc0NsYXNzZXMgfSBmcm9tICcuLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjb21wYWN0OiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNwbGF5OiBhbnk7XG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBtaW5pbWl6ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG9mZkNhbnZhczogYm9vbGVhbjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpZGViYXInKSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpc3BsYXlCcmVha3BvaW50KHRoaXMuZGlzcGxheSk7XG4gICAgdGhpcy5pc0NvbXBhY3QodGhpcy5jb21wYWN0KTtcbiAgICB0aGlzLmlzRml4ZWQodGhpcy5maXhlZCk7XG4gICAgdGhpcy5pc01pbmltaXplZCh0aGlzLm1pbmltaXplZCk7XG4gICAgdGhpcy5pc09mZkNhbnZhcyh0aGlzLm9mZkNhbnZhcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItZml4ZWQnKTtcbiAgfVxuXG4gIGlzQ29tcGFjdChjb21wYWN0OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29tcGFjdCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1jb21wYWN0Jyk7IH1cbiAgfVxuXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maXhlZCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1maXhlZCcpOyB9XG4gIH1cblxuICBpc01pbmltaXplZChtaW5pbWl6ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5taW5pbWl6ZWQpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItbWluaW1pemVkJyk7IH1cbiAgfVxuXG4gIGlzT2ZmQ2FudmFzKG9mZkNhbnZhczogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLm9mZkNhbnZhcykgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1vZmYtY2FudmFzJyk7IH1cbiAgfVxuXG4gIGZpeGVkUG9zaXRpb24oZml4ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zb2xlLndhcm4oJ2ZpeGVkUG9zaXRpb24oKSBpcyBkZXByZWNhdGVkLCB1c2UgaXNGaXhlZCgpIGluc3RlYWQnKVxuICAgIGlmICh0aGlzLmZpeGVkKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWZpeGVkJyk7IH1cbiAgfVxuXG4gIGRpc3BsYXlCcmVha3BvaW50KGRpc3BsYXk6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc3BsYXkgIT09IGZhbHNlICkge1xuICAgICAgbGV0IGNzc0NsYXNzO1xuICAgICAgdGhpcy5kaXNwbGF5ID8gY3NzQ2xhc3MgPSBgc2lkZWJhci0ke3RoaXMuZGlzcGxheX0tc2hvd2AgOiBjc3NDbGFzcyA9IHNpZGViYXJDc3NDbGFzc2VzWzBdO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIH1cbiAgfVxufVxuIl19