/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, HostBinding, Inject, Input, Output, Renderer2 } from '@angular/core';
import { sidebarCssClasses } from '../shared';
import { AppSidebarService } from './app-sidebar.service';
var AppSidebarComponent = /** @class */ (function () {
    function AppSidebarComponent(document, renderer, sidebarService) {
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
    Object.defineProperty(AppSidebarComponent.prototype, "minimized", {
        get: /**
         * @return {?}
         */
        function () {
            return this._minimized;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // only update / emit events when the value changes
            if (this._minimized !== value) {
                this._minimized = value;
                this._updateMinimized(value);
                this.minimizedChange.emit(value);
                this.sidebarService.toggle({ minimize: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AppSidebarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.displayBreakpoint(this.display);
        this.isCompact(this.compact);
        this.isFixed(this.fixed);
        this.isOffCanvas(this.offCanvas);
        this.sidebarService.toggle({ minimize: this.minimized });
        this.subscriptionEvents = this.sidebarService.events$.subscribe((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            if (action.minimize !== undefined) {
                action.minimize === 'toggle' ? _this.toggleMinimized() : _this.minimized = !!action.minimize;
            }
        }));
    };
    /**
     * @return {?}
     */
    AppSidebarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptionEvents.unsubscribe();
        this.minimizedChange.complete();
        this.renderer.removeClass(this.document.body, 'sidebar-fixed');
        this._updateMinimized(false);
    };
    /**
     * @param {?=} compact
     * @return {?}
     */
    AppSidebarComponent.prototype.isCompact = /**
     * @param {?=} compact
     * @return {?}
     */
    function (compact) {
        if (compact === void 0) { compact = this.compact; }
        if (compact) {
            this.renderer.addClass(this.document.body, 'sidebar-compact');
        }
    };
    /**
     * @param {?=} fixed
     * @return {?}
     */
    AppSidebarComponent.prototype.isFixed = /**
     * @param {?=} fixed
     * @return {?}
     */
    function (fixed) {
        if (fixed === void 0) { fixed = this.fixed; }
        if (fixed) {
            this.renderer.addClass(this.document.body, 'sidebar-fixed');
        }
    };
    /**
     * @return {?}
     */
    AppSidebarComponent.prototype.toggleMinimized = /**
     * @return {?}
     */
    function () {
        this.minimized = !this._minimized;
    };
    /**
     * @param {?=} offCanvas
     * @return {?}
     */
    AppSidebarComponent.prototype.isOffCanvas = /**
     * @param {?=} offCanvas
     * @return {?}
     */
    function (offCanvas) {
        if (offCanvas === void 0) { offCanvas = this.offCanvas; }
        if (offCanvas) {
            this.renderer.addClass(this.document.body, 'sidebar-off-canvas');
        }
    };
    /**
     * @param {?=} display
     * @return {?}
     */
    AppSidebarComponent.prototype.displayBreakpoint = /**
     * @param {?=} display
     * @return {?}
     */
    function (display) {
        if (display === void 0) { display = this.display; }
        if (display !== false) {
            /** @type {?} */
            var cssClass = display ? "sidebar-" + display + "-show" : sidebarCssClasses[0];
            this.renderer.addClass(this.document.body, cssClass);
        }
    };
    /**
     * @private
     * @param {?} minimized
     * @return {?}
     */
    AppSidebarComponent.prototype._updateMinimized = /**
     * @private
     * @param {?} minimized
     * @return {?}
     */
    function (minimized) {
        /** @type {?} */
        var body = this.document.body;
        if (minimized) {
            this.renderer.addClass(body, 'sidebar-minimized');
            this.renderer.addClass(body, 'brand-minimized');
        }
        else {
            this.renderer.removeClass(body, 'sidebar-minimized');
            this.renderer.removeClass(body, 'brand-minimized');
        }
    };
    AppSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar, cui-sidebar',
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    AppSidebarComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: AppSidebarService }
    ]; };
    AppSidebarComponent.propDecorators = {
        compact: [{ type: Input }],
        display: [{ type: Input }],
        fixed: [{ type: Input }],
        offCanvas: [{ type: Input }],
        minimized: [{ type: Input }],
        minimizedChange: [{ type: Output }],
        _sidebar: [{ type: HostBinding, args: ['class.sidebar',] }]
    };
    return AppSidebarComponent;
}());
export { AppSidebarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFEO0lBb0NFLDZCQUM0QixRQUFhLEVBQy9CLFFBQW1CLEVBQ25CLGNBQWlDO1FBRmYsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQWhDbkMsZUFBVSxHQUFHLEtBQUssQ0FBQzs7Ozs7UUF5QmpCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUUxQixhQUFRLEdBQUcsSUFBSSxDQUFDO0lBTTFDLENBQUM7SUExQkwsc0JBQ0ksMENBQVM7Ozs7UUFEYjtZQUVFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7OztRQUNELFVBQWMsS0FBYztZQUMxQixtREFBbUQ7WUFDbkQsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHNpZGViYXJDc3NDbGFzc2VzIH0gZnJvbSAnLi4vc2hhcmVkJztcbmltcG9ydCB7IEFwcFNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9hcHAtc2lkZWJhci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXIsIGN1aS1zaWRlYmFyJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uRXZlbnRzOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX21pbmltaXplZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGNvbXBhY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc3BsYXk6IGFueTtcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG9mZkNhbnZhczogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBnZXQgbWluaW1pemVkKCkge1xuICAgIHJldHVybiB0aGlzLl9taW5pbWl6ZWQ7XG4gIH1cbiAgc2V0IG1pbmltaXplZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIC8vIG9ubHkgdXBkYXRlIC8gZW1pdCBldmVudHMgd2hlbiB0aGUgdmFsdWUgY2hhbmdlc1xuICAgIGlmICh0aGlzLl9taW5pbWl6ZWQgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9taW5pbWl6ZWQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX3VwZGF0ZU1pbmltaXplZCh2YWx1ZSk7XG4gICAgICB0aGlzLm1pbmltaXplZENoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UudG9nZ2xlKHsgbWluaW1pemU6IHZhbHVlIH0gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdHMgd2hlbmV2ZXIgdGhlIG1pbmltaXplZCBzdGF0ZSBvZiB0aGUgc2lkZWJhciBjaGFuZ2VzLlxuICAgKiBQcmltYXJpbHkgdXNlZCB0byBmYWNpbGl0YXRlIHR3by13YXkgYmluZGluZy5cbiAgICovXG4gIEBPdXRwdXQoKSBtaW5pbWl6ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaWRlYmFyJykgX3NpZGViYXIgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBzaWRlYmFyU2VydmljZTogQXBwU2lkZWJhclNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpc3BsYXlCcmVha3BvaW50KHRoaXMuZGlzcGxheSk7XG4gICAgdGhpcy5pc0NvbXBhY3QodGhpcy5jb21wYWN0KTtcbiAgICB0aGlzLmlzRml4ZWQodGhpcy5maXhlZCk7XG4gICAgdGhpcy5pc09mZkNhbnZhcyh0aGlzLm9mZkNhbnZhcyk7XG4gICAgdGhpcy5zaWRlYmFyU2VydmljZS50b2dnbGUoeyBtaW5pbWl6ZTogdGhpcy5taW5pbWl6ZWQgfSApO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uRXZlbnRzID0gdGhpcy5zaWRlYmFyU2VydmljZS5ldmVudHMkLnN1YnNjcmliZShhY3Rpb24gPT4ge1xuICAgICAgaWYgKGFjdGlvbi5taW5pbWl6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFjdGlvbi5taW5pbWl6ZSA9PT0gJ3RvZ2dsZScgPyB0aGlzLnRvZ2dsZU1pbmltaXplZCgpIDogdGhpcy5taW5pbWl6ZWQgPSAhIWFjdGlvbi5taW5pbWl6ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uRXZlbnRzLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5taW5pbWl6ZWRDaGFuZ2UuY29tcGxldGUoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItZml4ZWQnKTtcbiAgICB0aGlzLl91cGRhdGVNaW5pbWl6ZWQoZmFsc2UpO1xuICB9XG5cbiAgaXNDb21wYWN0KGNvbXBhY3Q6IGJvb2xlYW4gPSB0aGlzLmNvbXBhY3QpOiB2b2lkIHtcbiAgICBpZiAoY29tcGFjdCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdzaWRlYmFyLWNvbXBhY3QnKTtcbiAgICB9XG4gIH1cblxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuID0gdGhpcy5maXhlZCk6IHZvaWQge1xuICAgIGlmIChmaXhlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdzaWRlYmFyLWZpeGVkJyk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlTWluaW1pemVkKCk6IHZvaWQge1xuICAgIHRoaXMubWluaW1pemVkID0gIXRoaXMuX21pbmltaXplZDtcbiAgfVxuXG4gIGlzT2ZmQ2FudmFzKG9mZkNhbnZhczogYm9vbGVhbiA9IHRoaXMub2ZmQ2FudmFzKTogdm9pZCB7XG4gICAgaWYgKG9mZkNhbnZhcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdzaWRlYmFyLW9mZi1jYW52YXMnKTtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5QnJlYWtwb2ludChkaXNwbGF5OiBhbnkgPSB0aGlzLmRpc3BsYXkpOiB2b2lkIHtcbiAgICBpZiAoZGlzcGxheSAhPT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IGNzc0NsYXNzID0gZGlzcGxheSA/IGBzaWRlYmFyLSR7ZGlzcGxheX0tc2hvd2AgOiBzaWRlYmFyQ3NzQ2xhc3Nlc1swXTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCBjc3NDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlTWluaW1pemVkKG1pbmltaXplZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmRvY3VtZW50LmJvZHk7XG5cbiAgICBpZiAobWluaW1pemVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGJvZHksICdzaWRlYmFyLW1pbmltaXplZCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhib2R5LCAnYnJhbmQtbWluaW1pemVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoYm9keSwgJ3NpZGViYXItbWluaW1pemVkJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGJvZHksICdicmFuZC1taW5pbWl6ZWQnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==