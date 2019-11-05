import { __decorate, __metadata, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, HostBinding, Inject, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
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
        get: function () {
            return this._minimized;
        },
        set: function (value) {
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
    AppSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayBreakpoint(this.display);
        this.isCompact(this.compact);
        this.isFixed(this.fixed);
        this.isOffCanvas(this.offCanvas);
        this.sidebarService.toggle({ minimize: this.minimized });
        this.subscriptionEvents = this.sidebarService.events$.subscribe(function (action) {
            if (action.minimize !== undefined) {
                action.minimize === 'toggle' ? _this.toggleMinimized() : _this.minimized = !!action.minimize;
            }
        });
    };
    AppSidebarComponent.prototype.ngOnDestroy = function () {
        this.subscriptionEvents.unsubscribe();
        this.minimizedChange.complete();
        this.renderer.removeClass(this.document.body, 'sidebar-fixed');
        this._updateMinimized(false);
    };
    AppSidebarComponent.prototype.isCompact = function (compact) {
        if (compact === void 0) { compact = this.compact; }
        if (compact) {
            this.renderer.addClass(this.document.body, 'sidebar-compact');
        }
    };
    AppSidebarComponent.prototype.isFixed = function (fixed) {
        if (fixed === void 0) { fixed = this.fixed; }
        if (fixed) {
            this.renderer.addClass(this.document.body, 'sidebar-fixed');
        }
    };
    AppSidebarComponent.prototype.toggleMinimized = function () {
        this.minimized = !this._minimized;
    };
    AppSidebarComponent.prototype.isOffCanvas = function (offCanvas) {
        if (offCanvas === void 0) { offCanvas = this.offCanvas; }
        if (offCanvas) {
            this.renderer.addClass(this.document.body, 'sidebar-off-canvas');
        }
    };
    AppSidebarComponent.prototype.displayBreakpoint = function (display) {
        if (display === void 0) { display = this.display; }
        if (display !== false) {
            var cssClass = display ? "sidebar-" + display + "-show" : sidebarCssClasses[0];
            this.renderer.addClass(this.document.body, cssClass);
        }
    };
    AppSidebarComponent.prototype._updateMinimized = function (minimized) {
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
    AppSidebarComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: AppSidebarService }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AppSidebarComponent.prototype, "compact", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AppSidebarComponent.prototype, "display", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AppSidebarComponent.prototype, "fixed", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AppSidebarComponent.prototype, "offCanvas", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AppSidebarComponent.prototype, "minimized", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], AppSidebarComponent.prototype, "minimizedChange", void 0);
    __decorate([
        HostBinding('class.sidebar'),
        __metadata("design:type", Object)
    ], AppSidebarComponent.prototype, "_sidebar", void 0);
    AppSidebarComponent = __decorate([
        Component({
            selector: 'app-sidebar, cui-sidebar',
            template: "<ng-content></ng-content>"
        }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object, Renderer2,
            AppSidebarService])
    ], AppSidebarComponent);
    return AppSidebarComponent;
}());
export { AppSidebarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU0xRDtJQWdDRSw2QkFDNEIsUUFBYSxFQUMvQixRQUFtQixFQUNuQixjQUFpQztRQUZmLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFoQ25DLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFxQjNCOzs7V0FHRztRQUNPLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUUxQixhQUFRLEdBQUcsSUFBSSxDQUFDO0lBTTFDLENBQUM7SUF6Qkwsc0JBQUksMENBQVM7YUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDO2FBQ0QsVUFBYyxLQUFjO1lBQzFCLG1EQUFtRDtZQUNuRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxFQUFFO2dCQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUUsQ0FBQzthQUNsRDtRQUNILENBQUM7OztPQVRBO0lBeUJELHNDQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDcEUsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtnQkFDakMsTUFBTSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUM1RjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHVDQUFTLEdBQVQsVUFBVSxPQUErQjtRQUEvQix3QkFBQSxFQUFBLFVBQW1CLElBQUksQ0FBQyxPQUFPO1FBQ3ZDLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztTQUMvRDtJQUNILENBQUM7SUFFRCxxQ0FBTyxHQUFQLFVBQVEsS0FBMkI7UUFBM0Isc0JBQUEsRUFBQSxRQUFpQixJQUFJLENBQUMsS0FBSztRQUNqQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQztJQUVELDZDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNwQyxDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLFNBQW1DO1FBQW5DLDBCQUFBLEVBQUEsWUFBcUIsSUFBSSxDQUFDLFNBQVM7UUFDN0MsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQztJQUVELCtDQUFpQixHQUFqQixVQUFrQixPQUEyQjtRQUEzQix3QkFBQSxFQUFBLFVBQWUsSUFBSSxDQUFDLE9BQU87UUFDM0MsSUFBSSxPQUFPLEtBQUssS0FBSyxFQUFFO1lBQ3JCLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBVyxPQUFPLFVBQU8sQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDO0lBRU8sOENBQWdCLEdBQXhCLFVBQXlCLFNBQWtCO1FBQ3pDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBRWhDLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQzs7Z0RBaEVFLE1BQU0sU0FBQyxRQUFRO2dCQUNFLFNBQVM7Z0JBQ0gsaUJBQWlCOztJQTlCbEM7UUFBUixLQUFLLEVBQUU7O3dEQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTs7d0RBQWM7SUFDYjtRQUFSLEtBQUssRUFBRTs7c0RBQWdCO0lBQ2Y7UUFBUixLQUFLLEVBQUU7OzBEQUFvQjtJQUc1QjtRQURDLEtBQUssRUFBRTs7O3dEQUdQO0lBZVM7UUFBVCxNQUFNLEVBQUU7O2dFQUErQztJQUUxQjtRQUE3QixXQUFXLENBQUMsZUFBZSxDQUFDOzt5REFBaUI7SUE5Qm5DLG1CQUFtQjtRQUovQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFFBQVEsRUFBRSwyQkFBMkI7U0FDdEMsQ0FBQztRQWtDRyxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtpREFDQyxTQUFTO1lBQ0gsaUJBQWlCO09BbkNoQyxtQkFBbUIsQ0FrRy9CO0lBQUQsMEJBQUM7Q0FBQSxBQWxHRCxJQWtHQztTQWxHWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgc2lkZWJhckNzc0NsYXNzZXMgfSBmcm9tICcuLi9zaGFyZWQnO1xyXG5pbXBvcnQgeyBBcHBTaWRlYmFyU2VydmljZSB9IGZyb20gJy4vYXBwLXNpZGViYXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLCBjdWktc2lkZWJhcicsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25FdmVudHM6IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIF9taW5pbWl6ZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgY29tcGFjdDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkaXNwbGF5OiBhbnk7XHJcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgb2ZmQ2FudmFzOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBtaW5pbWl6ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWluaW1pemVkO1xyXG4gIH1cclxuICBzZXQgbWluaW1pemVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAvLyBvbmx5IHVwZGF0ZSAvIGVtaXQgZXZlbnRzIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXNcclxuICAgIGlmICh0aGlzLl9taW5pbWl6ZWQgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX21pbmltaXplZCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLl91cGRhdGVNaW5pbWl6ZWQodmFsdWUpO1xyXG4gICAgICB0aGlzLm1pbmltaXplZENoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgdGhpcy5zaWRlYmFyU2VydmljZS50b2dnbGUoeyBtaW5pbWl6ZTogdmFsdWUgfSApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdHMgd2hlbmV2ZXIgdGhlIG1pbmltaXplZCBzdGF0ZSBvZiB0aGUgc2lkZWJhciBjaGFuZ2VzLlxyXG4gICAqIFByaW1hcmlseSB1c2VkIHRvIGZhY2lsaXRhdGUgdHdvLXdheSBiaW5kaW5nLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBtaW5pbWl6ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2lkZWJhcicpIF9zaWRlYmFyID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHNpZGViYXJTZXJ2aWNlOiBBcHBTaWRlYmFyU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNwbGF5QnJlYWtwb2ludCh0aGlzLmRpc3BsYXkpO1xyXG4gICAgdGhpcy5pc0NvbXBhY3QodGhpcy5jb21wYWN0KTtcclxuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcclxuICAgIHRoaXMuaXNPZmZDYW52YXModGhpcy5vZmZDYW52YXMpO1xyXG4gICAgdGhpcy5zaWRlYmFyU2VydmljZS50b2dnbGUoeyBtaW5pbWl6ZTogdGhpcy5taW5pbWl6ZWQgfSApO1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25FdmVudHMgPSB0aGlzLnNpZGViYXJTZXJ2aWNlLmV2ZW50cyQuc3Vic2NyaWJlKGFjdGlvbiA9PiB7XHJcbiAgICAgIGlmIChhY3Rpb24ubWluaW1pemUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGFjdGlvbi5taW5pbWl6ZSA9PT0gJ3RvZ2dsZScgPyB0aGlzLnRvZ2dsZU1pbmltaXplZCgpIDogdGhpcy5taW5pbWl6ZWQgPSAhIWFjdGlvbi5taW5pbWl6ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uRXZlbnRzLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLm1pbmltaXplZENoYW5nZS5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdzaWRlYmFyLWZpeGVkJyk7XHJcbiAgICB0aGlzLl91cGRhdGVNaW5pbWl6ZWQoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgaXNDb21wYWN0KGNvbXBhY3Q6IGJvb2xlYW4gPSB0aGlzLmNvbXBhY3QpOiB2b2lkIHtcclxuICAgIGlmIChjb21wYWN0KSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnc2lkZWJhci1jb21wYWN0Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuID0gdGhpcy5maXhlZCk6IHZvaWQge1xyXG4gICAgaWYgKGZpeGVkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnc2lkZWJhci1maXhlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlTWluaW1pemVkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5taW5pbWl6ZWQgPSAhdGhpcy5fbWluaW1pemVkO1xyXG4gIH1cclxuXHJcbiAgaXNPZmZDYW52YXMob2ZmQ2FudmFzOiBib29sZWFuID0gdGhpcy5vZmZDYW52YXMpOiB2b2lkIHtcclxuICAgIGlmIChvZmZDYW52YXMpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdzaWRlYmFyLW9mZi1jYW52YXMnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpc3BsYXlCcmVha3BvaW50KGRpc3BsYXk6IGFueSA9IHRoaXMuZGlzcGxheSk6IHZvaWQge1xyXG4gICAgaWYgKGRpc3BsYXkgIT09IGZhbHNlKSB7XHJcbiAgICAgIGNvbnN0IGNzc0NsYXNzID0gZGlzcGxheSA/IGBzaWRlYmFyLSR7ZGlzcGxheX0tc2hvd2AgOiBzaWRlYmFyQ3NzQ2xhc3Nlc1swXTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIGNzc0NsYXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3VwZGF0ZU1pbmltaXplZChtaW5pbWl6ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmRvY3VtZW50LmJvZHk7XHJcblxyXG4gICAgaWYgKG1pbmltaXplZCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGJvZHksICdzaWRlYmFyLW1pbmltaXplZCcpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGJvZHksICdicmFuZC1taW5pbWl6ZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoYm9keSwgJ3NpZGViYXItbWluaW1pemVkJyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoYm9keSwgJ2JyYW5kLW1pbmltaXplZCcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=