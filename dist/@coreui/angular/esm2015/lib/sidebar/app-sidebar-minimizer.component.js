import { __decorate, __metadata } from "tslib";
import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { AppSidebarService } from './app-sidebar.service';
let AppSidebarMinimizerComponent = class AppSidebarMinimizerComponent {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.role = 'button';
        this._minimizer = true;
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
        template: ``
    }),
    __metadata("design:paramtypes", [AppSidebarService])
], AppSidebarMinimizerComponent);
export { AppSidebarMinimizerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbWluaW1pemVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW1pbmltaXplci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFNMUQsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7SUFXdkMsWUFDVSxjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFWUixTQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ1gsZUFBVSxHQUFHLElBQUksQ0FBQztJQVV0RCxDQUFDO0lBUEwsVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUtGLENBQUE7O1lBRjJCLGlCQUFpQjs7QUFWUjtJQUFsQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFOzswREFBaUI7QUFDWDtJQUF2QyxXQUFXLENBQUMseUJBQXlCLENBQUM7O2dFQUFtQjtBQUcxRDtJQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs4REFJakM7QUFUVSw0QkFBNEI7SUFKeEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDhDQUE4QztRQUN4RCxRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUM7cUNBYTBCLGlCQUFpQjtHQVpoQyw0QkFBNEIsQ0FjeEM7U0FkWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQXBwU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuL2FwcC1zaWRlYmFyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1taW5pbWl6ZXIsIGN1aS1zaWRlYmFyLW1pbmltaXplcicsXHJcbiAgdGVtcGxhdGU6IGBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50IHtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSBASW5wdXQoKSByb2xlID0gJ2J1dHRvbic7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaWRlYmFyLW1pbmltaXplcicpIF9taW5pbWl6ZXIgPSB0cnVlO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh7bWluaW1pemU6ICd0b2dnbGUnfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc2lkZWJhclNlcnZpY2U6IEFwcFNpZGViYXJTZXJ2aWNlXHJcbiAgKSB7IH1cclxufVxyXG4iXX0=