/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var AppSidebarNavBadgePipe = /** @class */ (function () {
    function AppSidebarNavBadgePipe() {
    }
    /**
     * @param {?} item
     * @param {?=} args
     * @return {?}
     */
    AppSidebarNavBadgePipe.prototype.transform = /**
     * @param {?} item
     * @param {?=} args
     * @return {?}
     */
    function (item, args) {
        /** @type {?} */
        var classes = {
            'badge': true
        };
        /** @type {?} */
        var variant = "badge-" + item.badge.variant;
        classes[variant] = !!item.badge.variant;
        classes[item.badge.class] = !!item.badge.class;
        return classes;
    };
    AppSidebarNavBadgePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'appSidebarNavBadge'
                },] }
    ];
    return AppSidebarNavBadgePipe;
}());
export { AppSidebarNavBadgePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWJhZGdlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWJhZGdlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFlQSxDQUFDOzs7Ozs7SUFWQywwQ0FBUzs7Ozs7SUFBVCxVQUFVLElBQVMsRUFBRSxJQUFVOztZQUN2QixPQUFPLEdBQUc7WUFDZCxPQUFPLEVBQUUsSUFBSTtTQUNkOztZQUNLLE9BQU8sR0FBRyxXQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBUztRQUM3QyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMvQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztnQkFiRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLG9CQUFvQjtpQkFDM0I7O0lBYUQsNkJBQUM7Q0FBQSxBQWZELElBZUM7U0FaWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2FwcFNpZGViYXJOYXZCYWRnZSdcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkJhZGdlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShpdGVtOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICAnYmFkZ2UnOiB0cnVlXG4gICAgfTtcbiAgICBjb25zdCB2YXJpYW50ID0gYGJhZGdlLSR7aXRlbS5iYWRnZS52YXJpYW50fWA7XG4gICAgY2xhc3Nlc1t2YXJpYW50XSA9ICEhaXRlbS5iYWRnZS52YXJpYW50O1xuICAgIGNsYXNzZXNbaXRlbS5iYWRnZS5jbGFzc10gPSAhIWl0ZW0uYmFkZ2UuY2xhc3M7XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxufVxuIl19