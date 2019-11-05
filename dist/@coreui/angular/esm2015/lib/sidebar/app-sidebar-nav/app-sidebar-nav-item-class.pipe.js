import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
let AppSidebarNavItemClassPipe = class AppSidebarNavItemClassPipe {
    constructor(helper) {
        this.helper = helper;
    }
    transform(item, ...args) {
        const itemType = this.helper.itemType(item);
        let itemClass;
        if (['divider', 'title'].includes(itemType)) {
            itemClass = `nav-${itemType}`;
        }
        else if (itemType === 'dropdown') {
            itemClass = 'nav-item nav-dropdown';
        }
        else {
            itemClass = 'nav-item';
        }
        return item.class ? `${itemClass} ${item.class}` : itemClass;
    }
};
AppSidebarNavItemClassPipe.ctorParameters = () => [
    { type: SidebarNavHelper }
];
AppSidebarNavItemClassPipe = __decorate([
    Pipe({
        name: 'appSidebarNavItemClass'
    }),
    __metadata("design:paramtypes", [SidebarNavHelper])
], AppSidebarNavItemClassPipe);
export { AppSidebarNavItemClassPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWl0ZW0tY2xhc3MucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaXRlbS1jbGFzcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUs1RCxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQUVyQyxZQUNTLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzlCLENBQUM7SUFFSixTQUFTLENBQUMsSUFBUyxFQUFFLEdBQUcsSUFBVztRQUMvQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzNDLFNBQVMsR0FBRyxPQUFPLFFBQVEsRUFBRSxDQUFDO1NBQy9CO2FBQU0sSUFBSSxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQ2xDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBRTtTQUN0QzthQUFNO1lBQ0wsU0FBUyxHQUFHLFVBQVUsQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDL0QsQ0FBQztDQUNKLENBQUE7O1lBZmtCLGdCQUFnQjs7QUFIdEIsMEJBQTBCO0lBSHRDLElBQUksQ0FBQztRQUNKLElBQUksRUFBRSx3QkFBd0I7S0FDL0IsQ0FBQztxQ0FJaUIsZ0JBQWdCO0dBSHRCLDBCQUEwQixDQWtCdEM7U0FsQlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtTaWRlYmFyTmF2SGVscGVyfSBmcm9tICcuLi9hcHAtc2lkZWJhci1uYXYuc2VydmljZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2FwcFNpZGViYXJOYXZJdGVtQ2xhc3MnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2SXRlbUNsYXNzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBoZWxwZXI6IFNpZGViYXJOYXZIZWxwZXJcclxuICApIHt9XHJcblxyXG4gIHRyYW5zZm9ybShpdGVtOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgY29uc3QgaXRlbVR5cGUgPSB0aGlzLmhlbHBlci5pdGVtVHlwZShpdGVtKTtcclxuICAgICAgbGV0IGl0ZW1DbGFzcztcclxuICAgICAgaWYgKFsnZGl2aWRlcicsICd0aXRsZSddLmluY2x1ZGVzKGl0ZW1UeXBlKSkge1xyXG4gICAgICAgIGl0ZW1DbGFzcyA9IGBuYXYtJHtpdGVtVHlwZX1gO1xyXG4gICAgICB9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSAnZHJvcGRvd24nKSB7XHJcbiAgICAgICAgaXRlbUNsYXNzID0gJ25hdi1pdGVtIG5hdi1kcm9wZG93bicgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGl0ZW1DbGFzcyA9ICduYXYtaXRlbSc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGl0ZW0uY2xhc3MgPyBgJHtpdGVtQ2xhc3N9ICR7aXRlbS5jbGFzc31gIDogaXRlbUNsYXNzO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==