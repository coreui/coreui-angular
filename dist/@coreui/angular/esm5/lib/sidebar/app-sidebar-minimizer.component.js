import { __decorate, __metadata } from "tslib";
import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { AppSidebarService } from './app-sidebar.service';
var AppSidebarMinimizerComponent = /** @class */ (function () {
    function AppSidebarMinimizerComponent(sidebarService) {
        this.sidebarService = sidebarService;
        this.role = 'button';
        this._minimizer = true;
    }
    AppSidebarMinimizerComponent.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.sidebarService.toggle({ minimize: 'toggle' });
    };
    AppSidebarMinimizerComponent.ctorParameters = function () { return [
        { type: AppSidebarService }
    ]; };
    __decorate([
        HostBinding('attr.role'), Input(),
        __metadata("design:type", Object)
    ], AppSidebarMinimizerComponent.prototype, "role", void 0);
    __decorate([
        HostBinding('class.sidebar-minimizer'),
        __metadata("design:type", Object)
    ], AppSidebarMinimizerComponent.prototype, "_minimizer", void 0);
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppSidebarMinimizerComponent.prototype, "toggleOpen", null);
    AppSidebarMinimizerComponent = __decorate([
        Component({
            selector: 'app-sidebar-minimizer, cui-sidebar-minimizer',
            template: ""
        }),
        __metadata("design:paramtypes", [AppSidebarService])
    ], AppSidebarMinimizerComponent);
    return AppSidebarMinimizerComponent;
}());
export { AppSidebarMinimizerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbWluaW1pemVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW1pbmltaXplci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFNMUQ7SUFXRSxzQ0FDVSxjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFWUixTQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ1gsZUFBVSxHQUFHLElBQUksQ0FBQztJQVV0RCxDQUFDO0lBUEwsaURBQVUsR0FBVixVQUFXLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Z0JBR3lCLGlCQUFpQjs7SUFWUjtRQUFsQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFOzs4REFBaUI7SUFDWDtRQUF2QyxXQUFXLENBQUMseUJBQXlCLENBQUM7O29FQUFtQjtJQUcxRDtRQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OztrRUFJakM7SUFUVSw0QkFBNEI7UUFKeEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDhDQUE4QztZQUN4RCxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7eUNBYTBCLGlCQUFpQjtPQVpoQyw0QkFBNEIsQ0FjeEM7SUFBRCxtQ0FBQztDQUFBLEFBZEQsSUFjQztTQWRZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBTaWRlYmFyU2VydmljZSB9IGZyb20gJy4vYXBwLXNpZGViYXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW1pbmltaXplciwgY3VpLXNpZGViYXItbWluaW1pemVyJyxcclxuICB0ZW1wbGF0ZTogYGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQge1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIEBJbnB1dCgpIHJvbGUgPSAnYnV0dG9uJztcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpZGViYXItbWluaW1pemVyJykgX21pbmltaXplciA9IHRydWU7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2lkZWJhclNlcnZpY2UudG9nZ2xlKHttaW5pbWl6ZTogJ3RvZ2dsZSd9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzaWRlYmFyU2VydmljZTogQXBwU2lkZWJhclNlcnZpY2VcclxuICApIHsgfVxyXG59XHJcbiJdfQ==