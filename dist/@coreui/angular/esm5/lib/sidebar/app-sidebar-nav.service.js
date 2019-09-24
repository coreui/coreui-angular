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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUkzQztJQUFBO0lBTUEsQ0FBQzs7Z0JBTkEsVUFBVTs7SUFNWCx3QkFBQztDQUFBLEFBTkQsSUFNQztTQUxxQixpQkFBaUI7Ozs7Ozs7SUFJckMsdUVBQWdEOztBQUdsRDtJQUFBO1FBc0JTLGFBQVE7Ozs7UUFBRyxVQUFDLElBQUksSUFBSyxPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQW5CLENBQW1CLEVBQUM7UUFDekMsWUFBTzs7OztRQUFHLFVBQUMsSUFBSSxJQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBbEIsQ0FBa0IsRUFBQztJQVVoRCxDQUFDOzs7OztJQS9CQyxtQ0FBUTs7OztJQUFSLFVBQVMsSUFBSTtRQUNYLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLFNBQVMsQ0FBQztTQUNsQjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN4QixPQUFPLFVBQVUsQ0FBQztTQUNuQjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNwQyxPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7OztJQUVNLG1DQUFROzs7OztJQUFmLFVBQWdCLE1BQU0sRUFBRSxJQUFJO1FBQzFCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBS00sdUNBQVk7Ozs7SUFBbkIsVUFBb0IsSUFBSTs7WUFDaEIsT0FBTyxHQUFHO1lBQ2QsVUFBVSxFQUFFLElBQUk7U0FDakI7O1lBQ0ssSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7Ozs7SUFYQyxvQ0FBZ0Q7O0lBQ2hELG1DQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElOYXZEYXRhIH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2lkZWJhck5hdlNlcnZpY2Uge1xyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBzaWRlYmFyLW5hdiBpdGVtcyBjb25maWcgTmF2RGF0YVxyXG4gICAqL1xyXG4gIGFic3RyYWN0IGdldFNpZGViYXJOYXZJdGVtc0NvbmZpZygpOiBJTmF2RGF0YVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZWJhck5hdkhlbHBlciB7XHJcblxyXG4gIGl0ZW1UeXBlKGl0ZW0pIHtcclxuICAgIGlmIChpdGVtLmRpdmlkZXIpIHtcclxuICAgICAgcmV0dXJuICdkaXZpZGVyJztcclxuICAgIH0gZWxzZSBpZiAoaXRlbS50aXRsZSkge1xyXG4gICAgICByZXR1cm4gJ3RpdGxlJztcclxuICAgIH0gZWxzZSBpZiAoaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICByZXR1cm4gJ2Ryb3Bkb3duJztcclxuICAgIH0gZWxzZSBpZiAoaXRlbS5sYWJlbCkge1xyXG4gICAgICByZXR1cm4gJ2xhYmVsJztcclxuICAgIH0gZWxzZSBpZiAoIU9iamVjdC5rZXlzKGl0ZW0pLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gJ2VtcHR5JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnbGluayc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNBY3RpdmUocm91dGVyLCBpdGVtKSB7XHJcbiAgICByZXR1cm4gcm91dGVyLmlzQWN0aXZlKGl0ZW0udXJsLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFzQmFkZ2UgPSAoaXRlbSkgPT4gQm9vbGVhbihpdGVtLmJhZGdlKTtcclxuICBwdWJsaWMgaGFzSWNvbiA9IChpdGVtKSA9PiBCb29sZWFuKGl0ZW0uaWNvbik7XHJcblxyXG4gIHB1YmxpYyBnZXRJY29uQ2xhc3MoaXRlbSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHtcclxuICAgICAgJ25hdi1pY29uJzogdHJ1ZVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGljb24gPSBpdGVtLmljb247XHJcbiAgICBjbGFzc2VzW2ljb25dID0gdGhpcy5oYXNJY29uKGl0ZW0pO1xyXG4gICAgcmV0dXJuIGNsYXNzZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==