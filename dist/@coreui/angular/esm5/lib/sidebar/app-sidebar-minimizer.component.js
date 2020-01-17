import { __decorate, __metadata } from "tslib";
import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { AppSidebarService } from './app-sidebar.service';
var AppSidebarMinimizerComponent = /** @class */ (function () {
    function AppSidebarMinimizerComponent(sidebarService) {
        this.sidebarService = sidebarService;
        this.role = 'button';
        this.sidebarMinimizerClass = true;
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
            template: ""
        }),
        __metadata("design:paramtypes", [AppSidebarService])
    ], AppSidebarMinimizerComponent);
    return AppSidebarMinimizerComponent;
}());
export { AppSidebarMinimizerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbWluaW1pemVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW1pbmltaXplci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFNMUQ7SUFXRSxzQ0FDVSxjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFWUixTQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ1gsMEJBQXFCLEdBQUcsSUFBSSxDQUFDO0lBVWpFLENBQUM7SUFQTCxpREFBVSxHQUFWLFVBQVcsTUFBVztRQUNwQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDOztnQkFHeUIsaUJBQWlCOztJQVZSO1FBQWxDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUU7OzhEQUFpQjtJQUNYO1FBQXZDLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQzs7K0VBQThCO0lBR3JFO1FBREMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O2tFQUlqQztJQVRVLDRCQUE0QjtRQUp4QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsOENBQThDO1lBQ3hELFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQzt5Q0FhMEIsaUJBQWlCO09BWmhDLDRCQUE0QixDQWN4QztJQUFELG1DQUFDO0NBQUEsQUFkRCxJQWNDO1NBZFksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEFwcFNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9hcHAtc2lkZWJhci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbWluaW1pemVyLCBjdWktc2lkZWJhci1taW5pbWl6ZXInLFxyXG4gIHRlbXBsYXRlOiBgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCB7XHJcblxyXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgQElucHV0KCkgcm9sZSA9ICdidXR0b24nO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2lkZWJhci1taW5pbWl6ZXInKSBzaWRlYmFyTWluaW1pemVyQ2xhc3MgPSB0cnVlO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh7bWluaW1pemU6ICd0b2dnbGUnfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc2lkZWJhclNlcnZpY2U6IEFwcFNpZGViYXJTZXJ2aWNlXHJcbiAgKSB7IH1cclxufVxyXG4iXX0=