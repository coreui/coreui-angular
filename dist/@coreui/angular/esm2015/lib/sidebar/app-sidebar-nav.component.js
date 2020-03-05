import { __decorate, __metadata } from "tslib";
import { Component, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
let AppSidebarNavComponent = class AppSidebarNavComponent {
    constructor(router) {
        this.router = router;
        this.navItems = [];
        this.sidebarNavClass = true;
        this.role = 'nav';
        this.navItemsArray = [];
    }
    ngOnChanges(changes) {
        this.navItemsArray = Array.isArray(this.navItems) ? this.navItems.slice() : [];
    }
};
AppSidebarNavComponent.ctorParameters = () => [
    { type: Router }
];
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
export { AppSidebarNavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXpDLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBUWpDLFlBQ1MsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFSZCxhQUFRLEdBQWUsRUFBRSxDQUFDO1FBRUQsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdEIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUV6QyxrQkFBYSxHQUFlLEVBQUUsQ0FBQztJQUlsQyxDQUFDO0lBRUUsV0FBVyxDQUFDLE9BQXNCO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqRixDQUFDO0NBQ0YsQ0FBQTs7WUFOa0IsTUFBTTs7QUFSZDtJQUFSLEtBQUssRUFBRTs7d0RBQTJCO0FBRUQ7SUFBakMsV0FBVyxDQUFDLG1CQUFtQixDQUFDOzsrREFBd0I7QUFDdEI7SUFBbEMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRTs7b0RBQWM7QUFKckMsc0JBQXNCO0lBSmxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQ0FBa0M7UUFDNUMsNkdBQStDO0tBQ2hELENBQUM7cUNBVWlCLE1BQU07R0FUWixzQkFBc0IsQ0FlbEM7U0FmWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBJTmF2RGF0YSB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LCBjdWktc2lkZWJhci1uYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtc2lkZWJhci1uYXYuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBuYXZJdGVtczogSU5hdkRhdGFbXSA9IFtdO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpZGViYXItbmF2Jykgc2lkZWJhck5hdkNsYXNzID0gdHJ1ZTtcclxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIEBJbnB1dCgpIHJvbGUgPSAnbmF2JztcclxuXHJcbiAgcHVibGljIG5hdkl0ZW1zQXJyYXk6IElOYXZEYXRhW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgKSB7IH1cclxuXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMubmF2SXRlbXNBcnJheSA9IEFycmF5LmlzQXJyYXkodGhpcy5uYXZJdGVtcykgPyB0aGlzLm5hdkl0ZW1zLnNsaWNlKCkgOiBbXTtcclxuICB9XHJcbn1cclxuIl19