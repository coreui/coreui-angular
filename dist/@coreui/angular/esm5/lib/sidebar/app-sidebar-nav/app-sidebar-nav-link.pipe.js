/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var AppSidebarNavLinkPipe = /** @class */ (function () {
    function AppSidebarNavLinkPipe() {
    }
    /**
     * @param {?} item
     * @return {?}
     */
    AppSidebarNavLinkPipe.prototype.transform = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var classes = { 'nav-link': true };
        /** @type {?} */
        var disabled = item.attributes && item.attributes.disabled;
        classes['disabled'] = disabled;
        classes['btn-link'] = disabled;
        classes["nav-link-" + item.variant] = !!item.variant;
        return classes;
    };
    AppSidebarNavLinkPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'appSidebarNavLink'
                },] }
    ];
    return AppSidebarNavLinkPipe;
}());
export { AppSidebarNavLinkPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxpbmsucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGluay5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRDtJQUFBO0lBZUEsQ0FBQzs7Ozs7SUFWQyx5Q0FBUzs7OztJQUFULFVBQVUsSUFBUzs7WUFFWCxPQUFPLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFOztZQUU5QixRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVE7UUFDNUQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUMvQixPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxjQUFZLElBQUksQ0FBQyxPQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztnQkFkRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLG1CQUFtQjtpQkFDMUI7O0lBYUQsNEJBQUM7Q0FBQSxBQWZELElBZUM7U0FaWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2FwcFNpZGViYXJOYXZMaW5rJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkxpbmtQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybShpdGVtOiBhbnkpOiBhbnkge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB7ICduYXYtbGluayc6IHRydWUgfTtcclxuXHJcbiAgICBjb25zdCBkaXNhYmxlZCA9IGl0ZW0uYXR0cmlidXRlcyAmJiBpdGVtLmF0dHJpYnV0ZXMuZGlzYWJsZWQ7XHJcbiAgICBjbGFzc2VzWydkaXNhYmxlZCddID0gZGlzYWJsZWQ7XHJcbiAgICBjbGFzc2VzWydidG4tbGluayddID0gZGlzYWJsZWQ7XHJcbiAgICBjbGFzc2VzW2BuYXYtbGluay0ke2l0ZW0udmFyaWFudH1gXSA9ICEhaXRlbS52YXJpYW50O1xyXG4gICAgcmV0dXJuIGNsYXNzZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==