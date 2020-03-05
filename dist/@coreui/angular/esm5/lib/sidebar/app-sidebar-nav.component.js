import { __decorate, __metadata } from "tslib";
import { Component, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
var AppSidebarNavComponent = /** @class */ (function () {
    function AppSidebarNavComponent(router) {
        this.router = router;
        this.navItems = [];
        this.sidebarNavClass = true;
        this.role = 'nav';
        this.navItemsArray = [];
    }
    AppSidebarNavComponent.prototype.ngOnChanges = function (changes) {
        this.navItemsArray = Array.isArray(this.navItems) ? this.navItems.slice() : [];
    };
    AppSidebarNavComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], AppSidebarNavComponent.prototype, "navItems", void 0);
    __decorate([
        HostBinding('class.sidebar-nav'),
        __metadata("design:type", Object)
    ], AppSidebarNavComponent.prototype, "sidebarNavClass", void 0);
    __decorate([
        HostBinding('attr.role'), Input(),
        __metadata("design:type", Object)
    ], AppSidebarNavComponent.prototype, "role", void 0);
    AppSidebarNavComponent = __decorate([
        Component({
            selector: 'app-sidebar-nav, cui-sidebar-nav',
            template: "<app-sidebar-nav-items\n  class=\"nav\"\n  [items]=\"navItemsArray\">\n</app-sidebar-nav-items>\n"
        }),
        __metadata("design:paramtypes", [Router])
    ], AppSidebarNavComponent);
    return AppSidebarNavComponent;
}());
export { AppSidebarNavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXpDO0lBUUUsZ0NBQ1MsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFSZCxhQUFRLEdBQWUsRUFBRSxDQUFDO1FBRUQsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdEIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUV6QyxrQkFBYSxHQUFlLEVBQUUsQ0FBQztJQUlsQyxDQUFDO0lBRUUsNENBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pGLENBQUM7O2dCQUxnQixNQUFNOztJQVJkO1FBQVIsS0FBSyxFQUFFOzs0REFBMkI7SUFFRDtRQUFqQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7O21FQUF3QjtJQUN0QjtRQUFsQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFOzt3REFBYztJQUpyQyxzQkFBc0I7UUFKbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtDQUFrQztZQUM1Qyw2R0FBK0M7U0FDaEQsQ0FBQzt5Q0FVaUIsTUFBTTtPQVRaLHNCQUFzQixDQWVsQztJQUFELDZCQUFDO0NBQUEsQUFmRCxJQWVDO1NBZlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgSU5hdkRhdGEgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdiwgY3VpLXNpZGViYXItbmF2JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbmF2SXRlbXM6IElOYXZEYXRhW10gPSBbXTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaWRlYmFyLW5hdicpIHNpZGViYXJOYXZDbGFzcyA9IHRydWU7XHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSBASW5wdXQoKSByb2xlID0gJ25hdic7XHJcblxyXG4gIHB1YmxpYyBuYXZJdGVtc0FycmF5OiBJTmF2RGF0YVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxyXG4gICkgeyB9XHJcblxyXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLm5hdkl0ZW1zQXJyYXkgPSBBcnJheS5pc0FycmF5KHRoaXMubmF2SXRlbXMpID8gdGhpcy5uYXZJdGVtcy5zbGljZSgpIDogW107XHJcbiAgfVxyXG59XHJcbiJdfQ==