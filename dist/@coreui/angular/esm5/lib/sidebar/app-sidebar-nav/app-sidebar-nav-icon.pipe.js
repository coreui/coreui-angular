/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var AppSidebarNavIconPipe = /** @class */ (function () {
    function AppSidebarNavIconPipe() {
    }
    /**
     * @param {?} item
     * @param {?=} args
     * @return {?}
     */
    AppSidebarNavIconPipe.prototype.transform = /**
     * @param {?} item
     * @param {?=} args
     * @return {?}
     */
    function (item, args) {
        /** @type {?} */
        var classes = {
            'nav-icon': true
        };
        /** @type {?} */
        var icon = item.icon;
        classes[icon] = !!item.icon;
        return classes;
    };
    AppSidebarNavIconPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'appSidebarNavIcon'
                },] }
    ];
    return AppSidebarNavIconPipe;
}());
export { AppSidebarNavIconPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWljb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaWNvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRDtJQUFBO0lBYUEsQ0FBQzs7Ozs7O0lBUkMseUNBQVM7Ozs7O0lBQVQsVUFBVSxJQUFTLEVBQUUsSUFBVTs7WUFDdkIsT0FBTyxHQUFHO1lBQ2QsVUFBVSxFQUFFLElBQUk7U0FDakI7O1lBQ0ssSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztnQkFaRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLG1CQUFtQjtpQkFDMUI7O0lBV0QsNEJBQUM7Q0FBQSxBQWJELElBYUM7U0FWWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2FwcFNpZGViYXJOYXZJY29uJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkljb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybShpdGVtOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHtcclxuICAgICAgJ25hdi1pY29uJzogdHJ1ZVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGljb24gPSBpdGVtLmljb247XHJcbiAgICBjbGFzc2VzW2ljb25dID0gISFpdGVtLmljb247XHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxuICB9XHJcbn1cclxuIl19