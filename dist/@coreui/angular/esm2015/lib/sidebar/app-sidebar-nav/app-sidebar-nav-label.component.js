import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
let AppSidebarNavLabelComponent = class AppSidebarNavLabelComponent {
    constructor(helper) {
        this.helper = helper;
        this.classes = {
            'nav-label': true,
            'active': true
        };
        this.iconClasses = {};
    }
    ngOnInit() {
        this.iconClasses = this.helper.getIconClass(this.item);
    }
    getItemClass() {
        const itemClass = this.item.class;
        this.classes[itemClass] = !!itemClass;
        return this.classes;
    }
    getLabelIconClass() {
        const variant = `text-${this.item.label.variant}`;
        this.iconClasses[variant] = !!this.item.label.variant;
        const labelClass = this.item.label.class;
        this.iconClasses[labelClass] = !!labelClass;
        return this.iconClasses;
    }
};
AppSidebarNavLabelComponent.ctorParameters = () => [
    { type: SidebarNavHelper }
];
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
export { AppSidebarNavLabelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQU01RCxJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtJQVN0QyxZQUNTLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBUHpCLFlBQU8sR0FBRztZQUNoQixXQUFXLEVBQUUsSUFBSTtZQUNqQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUM7UUFDTSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQUlyQixDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxZQUFZO1FBQ1YsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsaUJBQWlCO1FBQ2YsTUFBTSxPQUFPLEdBQUcsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDdEQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUM1QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztDQUNGLENBQUE7O1lBbkJrQixnQkFBZ0I7O0FBVHhCO0lBQVIsS0FBSyxFQUFFOzt5REFBVztBQURSLDJCQUEyQjtJQUp2QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsOENBQThDO1FBQ3hELDBXQUFxRDtLQUN0RCxDQUFDO3FDQVdpQixnQkFBZ0I7R0FWdEIsMkJBQTJCLENBNkJ2QztTQTdCWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7U2lkZWJhck5hdkhlbHBlcn0gZnJvbSAnLi4vYXBwLXNpZGViYXItbmF2LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtbGFiZWwsIGN1aS1zaWRlYmFyLW5hdi1sYWJlbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC1zaWRlYmFyLW5hdi1sYWJlbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZMYWJlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaXRlbTogYW55O1xyXG5cclxuICBwcml2YXRlIGNsYXNzZXMgPSB7XHJcbiAgICAnbmF2LWxhYmVsJzogdHJ1ZSxcclxuICAgICdhY3RpdmUnOiB0cnVlXHJcbiAgfTtcclxuICBwcml2YXRlIGljb25DbGFzc2VzID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlclxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pY29uQ2xhc3NlcyA9IHRoaXMuaGVscGVyLmdldEljb25DbGFzcyh0aGlzLml0ZW0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbUNsYXNzKCkge1xyXG4gICAgY29uc3QgaXRlbUNsYXNzID0gdGhpcy5pdGVtLmNsYXNzO1xyXG4gICAgdGhpcy5jbGFzc2VzW2l0ZW1DbGFzc10gPSAhIWl0ZW1DbGFzcztcclxuICAgIHJldHVybiB0aGlzLmNsYXNzZXM7XHJcbiAgfVxyXG4gIGdldExhYmVsSWNvbkNsYXNzKCkge1xyXG4gICAgY29uc3QgdmFyaWFudCA9IGB0ZXh0LSR7dGhpcy5pdGVtLmxhYmVsLnZhcmlhbnR9YDtcclxuICAgIHRoaXMuaWNvbkNsYXNzZXNbdmFyaWFudF0gPSAhIXRoaXMuaXRlbS5sYWJlbC52YXJpYW50O1xyXG4gICAgY29uc3QgbGFiZWxDbGFzcyA9IHRoaXMuaXRlbS5sYWJlbC5jbGFzcztcclxuICAgIHRoaXMuaWNvbkNsYXNzZXNbbGFiZWxDbGFzc10gPSAhIWxhYmVsQ2xhc3M7XHJcbiAgICByZXR1cm4gdGhpcy5pY29uQ2xhc3NlcztcclxuICB9XHJcbn1cclxuIl19