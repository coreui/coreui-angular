import { __decorate, __metadata, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, HostBinding, Inject, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { sidebarCssClasses } from '../shared';
import { AppSidebarService } from './app-sidebar.service';
let AppSidebarComponent = class AppSidebarComponent {
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
    get minimized() {
        return this._minimized;
    }
    set minimized(value) {
        // only update / emit events when the value changes
        if (this._minimized !== value) {
            this._minimized = value;
            this._updateMinimized(value);
            this.minimizedChange.emit(value);
            this.sidebarService.toggle({ minimize: value });
        }
    }
    ngOnInit() {
        this.displayBreakpoint(this.display);
        this.isCompact(this.compact);
        this.isFixed(this.fixed);
        this.isOffCanvas(this.offCanvas);
        this.sidebarService.toggle({ minimize: this.minimized });
        this.subscriptionEvents = this.sidebarService.events$.subscribe(action => {
            if (action.minimize !== undefined) {
                action.minimize === 'toggle' ? this.toggleMinimized() : this.minimized = !!action.minimize;
            }
        });
    }
    ngOnDestroy() {
        this.subscriptionEvents.unsubscribe();
        this.minimizedChange.complete();
        this.renderer.removeClass(this.document.body, 'sidebar-fixed');
        this._updateMinimized(false);
    }
    isCompact(compact = this.compact) {
        if (compact) {
            this.renderer.addClass(this.document.body, 'sidebar-compact');
        }
    }
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, 'sidebar-fixed');
        }
    }
    toggleMinimized() {
        this.minimized = !this._minimized;
    }
    isOffCanvas(offCanvas = this.offCanvas) {
        if (offCanvas) {
            this.renderer.addClass(this.document.body, 'sidebar-off-canvas');
        }
    }
    displayBreakpoint(display = this.display) {
        if (display !== false) {
            const cssClass = display ? `sidebar-${display}-show` : sidebarCssClasses[0];
            this.renderer.addClass(this.document.body, cssClass);
        }
    }
    _updateMinimized(minimized) {
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
};
AppSidebarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: AppSidebarService }
];
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
        template: `<ng-content></ng-content>`
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2,
        AppSidebarService])
], AppSidebarComponent);
export { AppSidebarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU0xRCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQWdDOUIsWUFDNEIsUUFBYSxFQUMvQixRQUFtQixFQUNuQixjQUFpQztRQUZmLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFoQ25DLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFxQjNCOzs7V0FHRztRQUNPLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUUxQixhQUFRLEdBQUcsSUFBSSxDQUFDO0lBTTFDLENBQUM7SUF6QkwsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxLQUFjO1FBQzFCLG1EQUFtRDtRQUNuRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxFQUFFO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3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QyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBRWhDLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztDQUNGLENBQUE7OzRDQWpFSSxNQUFNLFNBQUMsUUFBUTtZQUNFLFNBQVM7WUFDSCxpQkFBaUI7O0FBOUJsQztJQUFSLEtBQUssRUFBRTs7b0RBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFOztvREFBYztBQUNiO0lBQVIsS0FBSyxFQUFFOztrREFBZ0I7QUFDZjtJQUFSLEtBQUssRUFBRTs7c0RBQW9CO0FBRzVCO0lBREMsS0FBSyxFQUFFOzs7b0RBR1A7QUFlUztJQUFULE1BQU0sRUFBRTs7NERBQStDO0FBRTFCO0lBQTdCLFdBQVcsQ0FBQyxlQUFlLENBQUM7O3FEQUFpQjtBQTlCbkMsbUJBQW1CO0lBSi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSwwQkFBMEI7UUFDcEMsUUFBUSxFQUFFLDJCQUEyQjtLQUN0QyxDQUFDO0lBa0NHLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBOzZDQUNDLFNBQVM7UUFDSCxpQkFBaUI7R0FuQ2hDLG1CQUFtQixDQWtHL0I7U0FsR1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IHNpZGViYXJDc3NDbGFzc2VzIH0gZnJvbSAnLi4vc2hhcmVkJztcclxuaW1wb3J0IHsgQXBwU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuL2FwcC1zaWRlYmFyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhciwgY3VpLXNpZGViYXInLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uRXZlbnRzOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBfbWluaW1pemVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIGNvbXBhY3Q6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZGlzcGxheTogYW55O1xyXG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG9mZkNhbnZhczogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgbWluaW1pemVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pbmltaXplZDtcclxuICB9XHJcbiAgc2V0IG1pbmltaXplZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgLy8gb25seSB1cGRhdGUgLyBlbWl0IGV2ZW50cyB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzXHJcbiAgICBpZiAodGhpcy5fbWluaW1pemVkICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9taW5pbWl6ZWQgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5fdXBkYXRlTWluaW1pemVkKHZhbHVlKTtcclxuICAgICAgdGhpcy5taW5pbWl6ZWRDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UudG9nZ2xlKHsgbWluaW1pemU6IHZhbHVlIH0gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRzIHdoZW5ldmVyIHRoZSBtaW5pbWl6ZWQgc3RhdGUgb2YgdGhlIHNpZGViYXIgY2hhbmdlcy5cclxuICAgKiBQcmltYXJpbHkgdXNlZCB0byBmYWNpbGl0YXRlIHR3by13YXkgYmluZGluZy5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgbWluaW1pemVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpZGViYXInKSBfc2lkZWJhciA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBzaWRlYmFyU2VydmljZTogQXBwU2lkZWJhclNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzcGxheUJyZWFrcG9pbnQodGhpcy5kaXNwbGF5KTtcclxuICAgIHRoaXMuaXNDb21wYWN0KHRoaXMuY29tcGFjdCk7XHJcbiAgICB0aGlzLmlzRml4ZWQodGhpcy5maXhlZCk7XHJcbiAgICB0aGlzLmlzT2ZmQ2FudmFzKHRoaXMub2ZmQ2FudmFzKTtcclxuICAgIHRoaXMuc2lkZWJhclNlcnZpY2UudG9nZ2xlKHsgbWluaW1pemU6IHRoaXMubWluaW1pemVkIH0gKTtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uRXZlbnRzID0gdGhpcy5zaWRlYmFyU2VydmljZS5ldmVudHMkLnN1YnNjcmliZShhY3Rpb24gPT4ge1xyXG4gICAgICBpZiAoYWN0aW9uLm1pbmltaXplICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBhY3Rpb24ubWluaW1pemUgPT09ICd0b2dnbGUnID8gdGhpcy50b2dnbGVNaW5pbWl6ZWQoKSA6IHRoaXMubWluaW1pemVkID0gISFhY3Rpb24ubWluaW1pemU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvbkV2ZW50cy51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5taW5pbWl6ZWRDaGFuZ2UuY29tcGxldGUoKTtcclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnc2lkZWJhci1maXhlZCcpO1xyXG4gICAgdGhpcy5fdXBkYXRlTWluaW1pemVkKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGlzQ29tcGFjdChjb21wYWN0OiBib29sZWFuID0gdGhpcy5jb21wYWN0KTogdm9pZCB7XHJcbiAgICBpZiAoY29tcGFjdCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItY29tcGFjdCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNGaXhlZChmaXhlZDogYm9vbGVhbiA9IHRoaXMuZml4ZWQpOiB2b2lkIHtcclxuICAgIGlmIChmaXhlZCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItZml4ZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZU1pbmltaXplZCgpOiB2b2lkIHtcclxuICAgIHRoaXMubWluaW1pemVkID0gIXRoaXMuX21pbmltaXplZDtcclxuICB9XHJcblxyXG4gIGlzT2ZmQ2FudmFzKG9mZkNhbnZhczogYm9vbGVhbiA9IHRoaXMub2ZmQ2FudmFzKTogdm9pZCB7XHJcbiAgICBpZiAob2ZmQ2FudmFzKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnc2lkZWJhci1vZmYtY2FudmFzJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5QnJlYWtwb2ludChkaXNwbGF5OiBhbnkgPSB0aGlzLmRpc3BsYXkpOiB2b2lkIHtcclxuICAgIGlmIChkaXNwbGF5ICE9PSBmYWxzZSkge1xyXG4gICAgICBjb25zdCBjc3NDbGFzcyA9IGRpc3BsYXkgPyBgc2lkZWJhci0ke2Rpc3BsYXl9LXNob3dgIDogc2lkZWJhckNzc0NsYXNzZXNbMF07XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCBjc3NDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91cGRhdGVNaW5pbWl6ZWQobWluaW1pemVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBjb25zdCBib2R5ID0gdGhpcy5kb2N1bWVudC5ib2R5O1xyXG5cclxuICAgIGlmIChtaW5pbWl6ZWQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhib2R5LCAnc2lkZWJhci1taW5pbWl6ZWQnKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhib2R5LCAnYnJhbmQtbWluaW1pemVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGJvZHksICdzaWRlYmFyLW1pbmltaXplZCcpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGJvZHksICdicmFuZC1taW5pbWl6ZWQnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19