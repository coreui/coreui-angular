/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, HostBinding, Inject, Input, Output, Renderer2 } from '@angular/core';
import { sidebarCssClasses } from '../shared';
import { AppSidebarService } from './app-sidebar.service';
export class AppSidebarComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} sidebarService
     */
    constructor(document, renderer, sidebarService) {
        this.document = document;
        this.renderer = renderer;
        this.sidebarService = sidebarService;
        this._minimized = false;
        /**
         * Emits whenever the minimized state of the sidebar changes.
         * Primarily used to facilitate two-way binding.
         */
        this.minimizedChange = new EventEmitter();
        this._sidebar = true;
    }
    /**
     * @return {?}
     */
    get minimized() {
        return this._minimized;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set minimized(value) {
        // only update / emit events when the value changes
        if (this._minimized !== value) {
            this._minimized = value;
            this._updateMinimized(value);
            this.minimizedChange.emit(value);
            this.sidebarService.toggle({ minimize: value });
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.displayBreakpoint(this.display);
        this.isCompact(this.compact);
        this.isFixed(this.fixed);
        this.isOffCanvas(this.offCanvas);
        this.sidebarService.toggle({ minimize: this.minimized });
        this.subscriptionEvents = this.sidebarService.events$.subscribe((/**
         * @param {?} action
         * @return {?}
         */
        action => {
            if (action.minimize !== undefined) {
                action.minimize === 'toggle' ? this.toggleMinimized() : this.minimized = !!action.minimize;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptionEvents.unsubscribe();
        this.minimizedChange.complete();
        this.renderer.removeClass(this.document.body, 'sidebar-fixed');
        this._updateMinimized(false);
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
     * @return {?}
     */
    toggleMinimized() {
        this.minimized = !this._minimized;
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
    /**
     * @private
     * @param {?} minimized
     * @return {?}
     */
    _updateMinimized(minimized) {
        /** @type {?} */
        const body = this.document.body;
        if (minimized) {
            this.renderer.addClass(body, 'sidebar-minimized');
            this.renderer.addClass(body, 'brand-minimized');
        }
        else {
            this.renderer.removeClass(body, 'sidebar-minimized');
            this.renderer.removeClass(body, 'brand-minimized');
        }
    }
}
AppSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar, cui-sidebar',
                template: `<ng-content></ng-content>`
            }] }
];
/** @nocollapse */
AppSidebarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: AppSidebarService }
];
AppSidebarComponent.propDecorators = {
    compact: [{ type: Input }],
    display: [{ type: Input }],
    fixed: [{ type: Input }],
    offCanvas: [{ type: Input }],
    minimized: [{ type: Input }],
    minimizedChange: [{ type: Output }],
    _sidebar: [{ type: HostBinding, args: ['class.sidebar',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    AppSidebarComponent.prototype.subscriptionEvents;
    /**
     * @type {?}
     * @private
     */
    AppSidebarComponent.prototype._minimized;
    /** @type {?} */
    AppSidebarComponent.prototype.compact;
    /** @type {?} */
    AppSidebarComponent.prototype.display;
    /** @type {?} */
    AppSidebarComponent.prototype.fixed;
    /** @type {?} */
    AppSidebarComponent.prototype.offCanvas;
    /**
     * Emits whenever the minimized state of the sidebar changes.
     * Primarily used to facilitate two-way binding.
     * @type {?}
     */
    AppSidebarComponent.prototype.minimizedChange;
    /** @type {?} */
    AppSidebarComponent.prototype._sidebar;
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
    AppSidebarComponent.prototype.sidebarService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBTTFELE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQWdDOUIsWUFDNEIsUUFBYSxFQUMvQixRQUFtQixFQUNuQixjQUFpQztRQUZmLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFoQ25DLGVBQVUsR0FBRyxLQUFLLENBQUM7Ozs7O1FBeUJqQixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFMUIsYUFBUSxHQUFHLElBQUksQ0FBQztJQU0xQyxDQUFDOzs7O0lBMUJMLElBQ0ksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUNELElBQUksU0FBUyxDQUFDLEtBQWM7UUFDMUIsbURBQW1EO1FBQ25ELElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFB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USxDQUFDLElBQUk7UUFFL0IsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDOzs7WUFyR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7Ozs7NENBa0NJLE1BQU0sU0FBQyxRQUFRO1lBM0NxRSxTQUFTO1lBSXpGLGlCQUFpQjs7O3NCQVd2QixLQUFLO3NCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUVMLEtBQUs7OEJBa0JMLE1BQU07dUJBRU4sV0FBVyxTQUFDLGVBQWU7Ozs7Ozs7SUE1QjVCLGlEQUF5Qzs7Ozs7SUFDekMseUNBQTJCOztJQUUzQixzQ0FBMEI7O0lBQzFCLHNDQUFzQjs7SUFDdEIsb0NBQXdCOztJQUN4Qix3Q0FBNEI7Ozs7OztJQW9CNUIsOENBQXdEOztJQUV4RCx1Q0FBOEM7Ozs7O0lBRzVDLHVDQUF1Qzs7Ozs7SUFDdkMsdUNBQTJCOzs7OztJQUMzQiw2Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHNpZGViYXJDc3NDbGFzc2VzIH0gZnJvbSAnLi4vc2hhcmVkJztcbmltcG9ydCB7IEFwcFNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9hcHAtc2lkZWJhci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXIsIGN1aS1zaWRlYmFyJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uRXZlbnRzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX21pbmltaXplZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGNvbXBhY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc3BsYXk6IGFueTtcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG9mZkNhbnZhczogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBnZXQgbWluaW1pemVkKCkge1xuICAgIHJldHVybiB0aGlzLl9taW5pbWl6ZWQ7XG4gIH1cbiAgc2V0IG1pbmltaXplZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIC8vIG9ubHkgdXBkYXRlIC8gZW1pdCBldmVudHMgd2hlbiB0aGUgdmFsdWUgY2hhbmdlc1xuICAgIGlmICh0aGlzLl9taW5pbWl6ZWQgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9taW5pbWl6ZWQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX3VwZGF0ZU1pbmltaXplZCh2YWx1ZSk7XG4gICAgICB0aGlzLm1pbmltaXplZENoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UudG9nZ2xlKHsgbWluaW1pemU6IHZhbHVlIH0gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgd2hlbmV2ZXIgdGhlIG1pbmltaXplZCBzdGF0ZSBvZiB0aGUgc2lkZWJhciBjaGFuZ2VzLlxuICAgKiBQcmltYXJpbHkgdXNlZCB0byBmYWNpbGl0YXRlIHR3by13YXkgYmluZGluZy5cbiAgICovXG4gIEBPdXRwdXQoKSBtaW5pbWl6ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaWRlYmFyJykgX3NpZGViYXIgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBzaWRlYmFyU2VydmljZTogQXBwU2lkZWJhclNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpc3BsYXlCcmVha3BvaW50KHRoaXMuZGlzcGxheSk7XG4gICAgdGhpcy5pc0NvbXBhY3QodGhpcy5jb21wYWN0KTtcbiAgICB0aGlzLmlzRml4ZWQodGhpcy5maXhlZCk7XG4gICAgdGhpcy5pc09mZkNhbnZhcyh0aGlzLm9mZkNhbnZhcyk7XG4gICAgdGhpcy5zaWRlYmFyU2VydmljZS50b2dnbGUoeyBtaW5pbWl6ZTogdGhpcy5taW5pbWl6ZWQgfSApO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uRXZlbnRzID0gdGhpcy5zaWRlYmFyU2VydmljZS5ldmVudHMkLnN1YnNjcmliZShhY3Rpb24gPT4ge1xuICAgICAgaWYgKGFjdGlvbi5taW5pbWl6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFjdGlvbi5taW5pbWl6ZSA9PT0gJ3RvZ2dsZScgPyB0aGlzLnRvZ2dsZU1pbmltaXplZCgpIDogdGhpcy5taW5pbWl6ZWQgPSAhIWFjdGlvbi5taW5pbWl6ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uRXZlbnRzLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5taW5pbWl6ZWRDaGFuZ2UuY29tcGxldGUoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItZml4ZWQnKTtcbiAgICB0aGlzLl91cGRhdGVNaW5pbWl6ZWQoZmFsc2UpO1xuICB9XG5cbiAgaXNDb21wYWN0KGNvbXBhY3Q6IGJvb2xlYW4gPSB0aGlzLmNvbXBhY3QpOiB2b2lkIHtcbiAgICBpZiAoY29tcGFjdCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdzaWRlYmFyLWNvbXBhY3QnKTtcbiAgICB9XG4gIH1cblxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuID0gdGhpcy5maXhlZCk6IHZvaWQge1xuICAgIGlmIChmaXhlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdzaWRlYmFyLWZpeGVkJyk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlTWluaW1pemVkKCk6IHZvaWQge1xuICAgIHRoaXMubWluaW1pemVkID0gIXRoaXMuX21pbmltaXplZDtcbiAgfVxuXG4gIGlzT2ZmQ2FudmFzKG9mZkNhbnZhczogYm9vbGVhbiA9IHRoaXMub2ZmQ2FudmFzKTogdm9pZCB7XG4gICAgaWYgKG9mZkNhbnZhcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdzaWRlYmFyLW9mZi1jYW52YXMnKTtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5QnJlYWtwb2ludChkaXNwbGF5OiBhbnkgPSB0aGlzLmRpc3BsYXkpOiB2b2lkIHtcbiAgICBpZiAoZGlzcGxheSAhPT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IGNzc0NsYXNzID0gZGlzcGxheSA/IGBzaWRlYmFyLSR7ZGlzcGxheX0tc2hvd2AgOiBzaWRlYmFyQ3NzQ2xhc3Nlc1swXTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCBjc3NDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlTWluaW1pemVkKG1pbmltaXplZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmRvY3VtZW50LmJvZHk7XG5cbiAgICBpZiAobWluaW1pemVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGJvZHksICdzaWRlYmFyLW1pbmltaXplZCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhib2R5LCAnYnJhbmQtbWluaW1pemVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoYm9keSwgJ3NpZGViYXItbWluaW1pemVkJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGJvZHksICdicmFuZC1taW5pbWl6ZWQnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==