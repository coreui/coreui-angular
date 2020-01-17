import { __decorate, __metadata } from "tslib";
import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { AppSidebarService } from './app-sidebar.service';
let AppSidebarMinimizerComponent = class AppSidebarMinimizerComponent {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.role = 'button';
        this.sidebarMinimizerClass = true;
    }
    toggleOpen($event) {
        $event.preventDefault();
        this.sidebarService.toggle({ minimize: 'toggle' });
    }
};
AppSidebarMinimizerComponent.ctorParameters = () => [
    { type: AppSidebarService }
];
__decorate([
    HostBinding('attr.role'), Input(),
    __metadata("design:type", Object)
], AppSidebarMinimizerComponent.prototype, "role", void 0);
__decorate([
    HostBinding('class.sidebar-minimizer'),
    __metadata("design:type", Object)
], AppSidebarMinimizerComponent.prototype, "sidebarMinimizerClass", void 0);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppSidebarMinimizerComponent.prototype, "toggleOpen", null);
AppSidebarMinimizerComponent = __decorate([
    Component({
        selector: 'app-sidebar-minimizer, cui-sidebar-minimizer',
        template: ``
    }),
    __metadata("design:paramtypes", [AppSidebarService])
], AppSidebarMinimizerComponent);
export { AppSidebarMinimizerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbWluaW1pemVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW1pbmltaXplci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFNMUQsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7SUFXdkMsWUFDVSxjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFWUixTQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ1gsMEJBQXFCLEdBQUcsSUFBSSxDQUFDO0lBVWpFLENBQUM7SUFQTCxVQUFVLENBQUMsTUFBVztRQUNwQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBS0YsQ0FBQTs7WUFGMkIsaUJBQWlCOztBQVZSO0lBQWxDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUU7OzBEQUFpQjtBQUNYO0lBQXZDLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQzs7MkVBQThCO0FBR3JFO0lBREMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OzhEQUlqQztBQVRVLDRCQUE0QjtJQUp4QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsOENBQThDO1FBQ3hELFFBQVEsRUFBRSxFQUFFO0tBQ2IsQ0FBQztxQ0FhMEIsaUJBQWlCO0dBWmhDLDRCQUE0QixDQWN4QztTQWRZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBTaWRlYmFyU2VydmljZSB9IGZyb20gJy4vYXBwLXNpZGViYXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW1pbmltaXplciwgY3VpLXNpZGViYXItbWluaW1pemVyJyxcclxuICB0ZW1wbGF0ZTogYGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQge1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIEBJbnB1dCgpIHJvbGUgPSAnYnV0dG9uJztcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpZGViYXItbWluaW1pemVyJykgc2lkZWJhck1pbmltaXplckNsYXNzID0gdHJ1ZTtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zaWRlYmFyU2VydmljZS50b2dnbGUoe21pbmltaXplOiAndG9nZ2xlJ30pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHNpZGViYXJTZXJ2aWNlOiBBcHBTaWRlYmFyU2VydmljZVxyXG4gICkgeyB9XHJcbn1cclxuIl19