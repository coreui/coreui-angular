import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var AppSidebarNavBadgePipe = /** @class */ (function () {
    function AppSidebarNavBadgePipe() {
    }
    AppSidebarNavBadgePipe.prototype.transform = function (item, args) {
        var classes = {
            'badge': true
        };
        var variant = "badge-" + item.badge.variant;
        classes[variant] = !!item.badge.variant;
        classes[item.badge.class] = !!item.badge.class;
        return classes;
    };
    AppSidebarNavBadgePipe = __decorate([
        Pipe({
            name: 'appSidebarNavBadge'
        })
    ], AppSidebarNavBadgePipe);
    return AppSidebarNavBadgePipe;
}());
export { AppSidebarNavBadgePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWJhZGdlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWJhZGdlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BEO0lBQUE7SUFZQSxDQUFDO0lBVkMsMENBQVMsR0FBVCxVQUFVLElBQVMsRUFBRSxJQUFVO1FBQzdCLElBQU0sT0FBTyxHQUFHO1lBQ2QsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO1FBQ0YsSUFBTSxPQUFPLEdBQUcsV0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQVMsQ0FBQztRQUM5QyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMvQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBVlUsc0JBQXNCO1FBSGxDLElBQUksQ0FBQztZQUNKLElBQUksRUFBRSxvQkFBb0I7U0FDM0IsQ0FBQztPQUNXLHNCQUFzQixDQVlsQztJQUFELDZCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdhcHBTaWRlYmFyTmF2QmFkZ2UnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2QmFkZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybShpdGVtOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHtcclxuICAgICAgJ2JhZGdlJzogdHJ1ZVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHZhcmlhbnQgPSBgYmFkZ2UtJHtpdGVtLmJhZGdlLnZhcmlhbnR9YDtcclxuICAgIGNsYXNzZXNbdmFyaWFudF0gPSAhIWl0ZW0uYmFkZ2UudmFyaWFudDtcclxuICAgIGNsYXNzZXNbaXRlbS5iYWRnZS5jbGFzc10gPSAhIWl0ZW0uYmFkZ2UuY2xhc3M7XHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxuICB9XHJcblxyXG59XHJcbiJdfQ==