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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWJhZGdlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWJhZGdlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFlQSxDQUFDOzs7Ozs7SUFWQywwQ0FBUzs7Ozs7SUFBVCxVQUFVLElBQVMsRUFBRSxJQUFVOztZQUN2QixPQUFPLEdBQUc7WUFDZCxPQUFPLEVBQUUsSUFBSTtTQUNkOztZQUNLLE9BQU8sR0FBRyxXQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBUztRQUM3QyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMvQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztnQkFiRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLG9CQUFvQjtpQkFDM0I7O0lBYUQsNkJBQUM7Q0FBQSxBQWZELElBZUM7U0FaWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2FwcFNpZGViYXJOYXZCYWRnZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZCYWRnZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKGl0ZW06IGFueSwgYXJncz86IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0ge1xyXG4gICAgICAnYmFkZ2UnOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdmFyaWFudCA9IGBiYWRnZS0ke2l0ZW0uYmFkZ2UudmFyaWFudH1gO1xyXG4gICAgY2xhc3Nlc1t2YXJpYW50XSA9ICEhaXRlbS5iYWRnZS52YXJpYW50O1xyXG4gICAgY2xhc3Nlc1tpdGVtLmJhZGdlLmNsYXNzXSA9ICEhaXRlbS5iYWRnZS5jbGFzcztcclxuICAgIHJldHVybiBjbGFzc2VzO1xyXG4gIH1cclxuXHJcbn1cclxuIl19