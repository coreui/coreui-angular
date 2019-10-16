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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxpbmsucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGluay5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRDtJQUFBO0lBZUEsQ0FBQzs7Ozs7SUFWQyx5Q0FBUzs7OztJQUFULFVBQVUsSUFBUzs7WUFFWCxPQUFPLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFOztZQUU5QixRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVE7UUFDNUQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUMvQixPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxjQUFZLElBQUksQ0FBQyxPQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztnQkFkRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLG1CQUFtQjtpQkFDMUI7O0lBYUQsNEJBQUM7Q0FBQSxBQWZELElBZUM7U0FaWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2FwcFNpZGViYXJOYXZMaW5rJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2TGlua1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0oaXRlbTogYW55KTogYW55IHtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB7ICduYXYtbGluayc6IHRydWUgfTtcblxuICAgIGNvbnN0IGRpc2FibGVkID0gaXRlbS5hdHRyaWJ1dGVzICYmIGl0ZW0uYXR0cmlidXRlcy5kaXNhYmxlZDtcbiAgICBjbGFzc2VzWydkaXNhYmxlZCddID0gZGlzYWJsZWQ7XG4gICAgY2xhc3Nlc1snYnRuLWxpbmsnXSA9IGRpc2FibGVkO1xuICAgIGNsYXNzZXNbYG5hdi1saW5rLSR7aXRlbS52YXJpYW50fWBdID0gISFpdGVtLnZhcmlhbnQ7XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cbn1cbiJdfQ==