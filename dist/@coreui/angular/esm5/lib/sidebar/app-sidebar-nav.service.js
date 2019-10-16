/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @abstract
 */
var SidebarNavService = /** @class */ (function () {
    function SidebarNavService() {
    }
    SidebarNavService.decorators = [
        { type: Injectable }
    ];
    return SidebarNavService;
}());
export { SidebarNavService };
if (false) {
    /**
     * Returns a sidebar-nav items config NavData
     * @abstract
     * @return {?}
     */
    SidebarNavService.prototype.getSidebarNavItemsConfig = function () { };
}
var SidebarNavHelper = /** @class */ (function () {
    function SidebarNavHelper() {
        this.hasBadge = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return Boolean(item.badge); });
        this.hasIcon = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return Boolean(item.icon); });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    SidebarNavHelper.prototype.itemType = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item.divider) {
            return 'divider';
        }
        else if (item.title) {
            return 'title';
        }
        else if (item.children) {
            return 'dropdown';
        }
        else if (item.label) {
            return 'label';
        }
        else if (!Object.keys(item).length) {
            return 'empty';
        }
        else {
            return 'link';
        }
    };
    /**
     * @param {?} router
     * @param {?} item
     * @return {?}
     */
    SidebarNavHelper.prototype.isActive = /**
     * @param {?} router
     * @param {?} item
     * @return {?}
     */
    function (router, item) {
        return router.isActive(item.url, false);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SidebarNavHelper.prototype.getIconClass = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var classes = {
            'nav-icon': true
        };
        /** @type {?} */
        var icon = item.icon;
        classes[icon] = this.hasIcon(item);
        return classes;
    };
    return SidebarNavHelper;
}());
export { SidebarNavHelper };
if (false) {
    /** @type {?} */
    SidebarNavHelper.prototype.hasBadge;
    /** @type {?} */
    SidebarNavHelper.prototype.hasIcon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUkzQztJQUFBO0lBTUEsQ0FBQzs7Z0JBTkEsVUFBVTs7SUFNWCx3QkFBQztDQUFBLEFBTkQsSUFNQztTQUxxQixpQkFBaUI7Ozs7Ozs7SUFJckMsdUVBQWdEOztBQUdsRDtJQUFBO1FBc0JTLGFBQVE7Ozs7UUFBRyxVQUFDLElBQUksSUFBSyxPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQW5CLENBQW1CLEVBQUM7UUFDekMsWUFBTzs7OztRQUFHLFVBQUMsSUFBSSxJQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBbEIsQ0FBa0IsRUFBQztJQVVoRCxDQUFDOzs7OztJQS9CQyxtQ0FBUTs7OztJQUFSLFVBQVMsSUFBSTtRQUNYLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLFNBQVMsQ0FBQztTQUNsQjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN4QixPQUFPLFVBQVUsQ0FBQztTQUNuQjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNwQyxPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7OztJQUVNLG1DQUFROzs7OztJQUFmLFVBQWdCLE1BQU0sRUFBRSxJQUFJO1FBQzFCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBS00sdUNBQVk7Ozs7SUFBbkIsVUFBb0IsSUFBSTs7WUFDaEIsT0FBTyxHQUFHO1lBQ2QsVUFBVSxFQUFFLElBQUk7U0FDakI7O1lBQ0ssSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7Ozs7SUFYQyxvQ0FBZ0Q7O0lBQ2hELG1DQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSU5hdkRhdGEgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTaWRlYmFyTmF2U2VydmljZSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc2lkZWJhci1uYXYgaXRlbXMgY29uZmlnIE5hdkRhdGFcbiAgICovXG4gIGFic3RyYWN0IGdldFNpZGViYXJOYXZJdGVtc0NvbmZpZygpOiBJTmF2RGF0YVtdO1xufVxuXG5leHBvcnQgY2xhc3MgU2lkZWJhck5hdkhlbHBlciB7XG5cbiAgaXRlbVR5cGUoaXRlbSkge1xuICAgIGlmIChpdGVtLmRpdmlkZXIpIHtcbiAgICAgIHJldHVybiAnZGl2aWRlcic7XG4gICAgfSBlbHNlIGlmIChpdGVtLnRpdGxlKSB7XG4gICAgICByZXR1cm4gJ3RpdGxlJztcbiAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiAnZHJvcGRvd24nO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5sYWJlbCkge1xuICAgICAgcmV0dXJuICdsYWJlbCc7XG4gICAgfSBlbHNlIGlmICghT2JqZWN0LmtleXMoaXRlbSkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gJ2VtcHR5JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdsaW5rJztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNBY3RpdmUocm91dGVyLCBpdGVtKSB7XG4gICAgcmV0dXJuIHJvdXRlci5pc0FjdGl2ZShpdGVtLnVybCwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIGhhc0JhZGdlID0gKGl0ZW0pID0+IEJvb2xlYW4oaXRlbS5iYWRnZSk7XG4gIHB1YmxpYyBoYXNJY29uID0gKGl0ZW0pID0+IEJvb2xlYW4oaXRlbS5pY29uKTtcblxuICBwdWJsaWMgZ2V0SWNvbkNsYXNzKGl0ZW0pIHtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgJ25hdi1pY29uJzogdHJ1ZVxuICAgIH07XG4gICAgY29uc3QgaWNvbiA9IGl0ZW0uaWNvbjtcbiAgICBjbGFzc2VzW2ljb25dID0gdGhpcy5oYXNJY29uKGl0ZW0pO1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG59XG4iXX0=