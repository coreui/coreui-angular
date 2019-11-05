import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
var AppSidebarNavItemClassPipe = /** @class */ (function () {
    function AppSidebarNavItemClassPipe(helper) {
        this.helper = helper;
    }
    AppSidebarNavItemClassPipe.prototype.transform = function (item) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var itemType = this.helper.itemType(item);
        var itemClass;
        if (['divider', 'title'].includes(itemType)) {
            itemClass = "nav-" + itemType;
        }
        else if (itemType === 'dropdown') {
            itemClass = 'nav-item nav-dropdown';
        }
        else {
            itemClass = 'nav-item';
        }
        return item.class ? itemClass + " " + item.class : itemClass;
    };
    AppSidebarNavItemClassPipe.ctorParameters = function () { return [
        { type: SidebarNavHelper }
    ]; };
    AppSidebarNavItemClassPipe = __decorate([
        Pipe({
            name: 'appSidebarNavItemClass'
        }),
        __metadata("design:paramtypes", [SidebarNavHelper])
    ], AppSidebarNavItemClassPipe);
    return AppSidebarNavItemClassPipe;
}());
export { AppSidebarNavItemClassPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWl0ZW0tY2xhc3MucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaXRlbS1jbGFzcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUs1RDtJQUVFLG9DQUNTLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzlCLENBQUM7SUFFSiw4Q0FBUyxHQUFULFVBQVUsSUFBUztRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7O1FBQy9CLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0MsU0FBUyxHQUFHLFNBQU8sUUFBVSxDQUFDO1NBQy9CO2FBQU0sSUFBSSxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQ2xDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBRTtTQUN0QzthQUFNO1lBQ0wsU0FBUyxHQUFHLFVBQVUsQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUksU0FBUyxTQUFJLElBQUksQ0FBQyxLQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMvRCxDQUFDOztnQkFkYyxnQkFBZ0I7O0lBSHRCLDBCQUEwQjtRQUh0QyxJQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsd0JBQXdCO1NBQy9CLENBQUM7eUNBSWlCLGdCQUFnQjtPQUh0QiwwQkFBMEIsQ0FrQnRDO0lBQUQsaUNBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWxCWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnYXBwU2lkZWJhck5hdkl0ZW1DbGFzcydcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZJdGVtQ2xhc3NQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlclxyXG4gICkge31cclxuXHJcbiAgdHJhbnNmb3JtKGl0ZW06IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICBjb25zdCBpdGVtVHlwZSA9IHRoaXMuaGVscGVyLml0ZW1UeXBlKGl0ZW0pO1xyXG4gICAgICBsZXQgaXRlbUNsYXNzO1xyXG4gICAgICBpZiAoWydkaXZpZGVyJywgJ3RpdGxlJ10uaW5jbHVkZXMoaXRlbVR5cGUpKSB7XHJcbiAgICAgICAgaXRlbUNsYXNzID0gYG5hdi0ke2l0ZW1UeXBlfWA7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09ICdkcm9wZG93bicpIHtcclxuICAgICAgICBpdGVtQ2xhc3MgPSAnbmF2LWl0ZW0gbmF2LWRyb3Bkb3duJyA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbUNsYXNzID0gJ25hdi1pdGVtJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaXRlbS5jbGFzcyA/IGAke2l0ZW1DbGFzc30gJHtpdGVtLmNsYXNzfWAgOiBpdGVtQ2xhc3M7XHJcbiAgICB9XHJcbn1cclxuIl19