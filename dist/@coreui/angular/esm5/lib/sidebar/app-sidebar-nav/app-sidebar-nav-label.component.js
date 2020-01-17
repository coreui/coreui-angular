import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
var AppSidebarNavLabelComponent = /** @class */ (function () {
    function AppSidebarNavLabelComponent(helper) {
        this.helper = helper;
        this.classes = {
            'nav-label': true,
            active: true
        };
        this.iconClasses = {};
    }
    AppSidebarNavLabelComponent.prototype.ngOnInit = function () {
        this.iconClasses = this.helper.getIconClass(this.item);
    };
    AppSidebarNavLabelComponent.prototype.getItemClass = function () {
        var itemClass = this.item.class;
        this.classes[itemClass] = !!itemClass;
        return this.classes;
    };
    AppSidebarNavLabelComponent.prototype.getLabelIconClass = function () {
        var variant = "text-" + this.item.label.variant;
        this.iconClasses[variant] = !!this.item.label.variant;
        var labelClass = this.item.label.class;
        this.iconClasses[labelClass] = !!labelClass;
        return this.iconClasses;
    };
    AppSidebarNavLabelComponent.ctorParameters = function () { return [
        { type: SidebarNavHelper }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AppSidebarNavLabelComponent.prototype, "item", void 0);
    AppSidebarNavLabelComponent = __decorate([
        Component({
            selector: 'app-sidebar-nav-label, cui-sidebar-nav-label',
            template: "<a [ngClass]=\"getItemClass()\"\r\n   href=\"{{item.url}}\"\r\n   [appHtmlAttr]=\"item.attributes\">\r\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\r\n  <ng-container>{{item.name}}</ng-container>\r\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\r\n</a>\r\n"
        }),
        __metadata("design:paramtypes", [SidebarNavHelper])
    ], AppSidebarNavLabelComponent);
    return AppSidebarNavLabelComponent;
}());
export { AppSidebarNavLabelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQU01RDtJQVNFLHFDQUNTLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBUHpCLFlBQU8sR0FBRztZQUNoQixXQUFXLEVBQUUsSUFBSTtZQUNqQixNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUM7UUFDTSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQUlyQixDQUFDO0lBRUwsOENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxrREFBWSxHQUFaO1FBQ0UsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsdURBQWlCLEdBQWpCO1FBQ0UsSUFBTSxPQUFPLEdBQUcsVUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFTLENBQUM7UUFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3RELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7O2dCQWxCZ0IsZ0JBQWdCOztJQVR4QjtRQUFSLEtBQUssRUFBRTs7NkRBQVc7SUFEUiwyQkFBMkI7UUFKdkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDhDQUE4QztZQUN4RCwwV0FBcUQ7U0FDdEQsQ0FBQzt5Q0FXaUIsZ0JBQWdCO09BVnRCLDJCQUEyQixDQTZCdkM7SUFBRCxrQ0FBQztDQUFBLEFBN0JELElBNkJDO1NBN0JZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtTaWRlYmFyTmF2SGVscGVyfSBmcm9tICcuLi9hcHAtc2lkZWJhci1uYXYuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1sYWJlbCwgY3VpLXNpZGViYXItbmF2LWxhYmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLXNpZGViYXItbmF2LWxhYmVsLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkxhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpdGVtOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgY2xhc3NlcyA9IHtcclxuICAgICduYXYtbGFiZWwnOiB0cnVlLFxyXG4gICAgYWN0aXZlOiB0cnVlXHJcbiAgfTtcclxuICBwcml2YXRlIGljb25DbGFzc2VzID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlclxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pY29uQ2xhc3NlcyA9IHRoaXMuaGVscGVyLmdldEljb25DbGFzcyh0aGlzLml0ZW0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbUNsYXNzKCkge1xyXG4gICAgY29uc3QgaXRlbUNsYXNzID0gdGhpcy5pdGVtLmNsYXNzO1xyXG4gICAgdGhpcy5jbGFzc2VzW2l0ZW1DbGFzc10gPSAhIWl0ZW1DbGFzcztcclxuICAgIHJldHVybiB0aGlzLmNsYXNzZXM7XHJcbiAgfVxyXG4gIGdldExhYmVsSWNvbkNsYXNzKCkge1xyXG4gICAgY29uc3QgdmFyaWFudCA9IGB0ZXh0LSR7dGhpcy5pdGVtLmxhYmVsLnZhcmlhbnR9YDtcclxuICAgIHRoaXMuaWNvbkNsYXNzZXNbdmFyaWFudF0gPSAhIXRoaXMuaXRlbS5sYWJlbC52YXJpYW50O1xyXG4gICAgY29uc3QgbGFiZWxDbGFzcyA9IHRoaXMuaXRlbS5sYWJlbC5jbGFzcztcclxuICAgIHRoaXMuaWNvbkNsYXNzZXNbbGFiZWxDbGFzc10gPSAhIWxhYmVsQ2xhc3M7XHJcbiAgICByZXR1cm4gdGhpcy5pY29uQ2xhc3NlcztcclxuICB9XHJcbn1cclxuIl19