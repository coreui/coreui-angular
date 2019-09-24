/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @abstract
 */
export class SidebarNavService {
}
SidebarNavService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * Returns a sidebar-nav items config NavData
     * @abstract
     * @return {?}
     */
    SidebarNavService.prototype.getSidebarNavItemsConfig = function () { };
}
export class SidebarNavHelper {
    constructor() {
        this.hasBadge = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => Boolean(item.badge));
        this.hasIcon = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => Boolean(item.icon));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    itemType(item) {
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
    }
    /**
     * @param {?} router
     * @param {?} item
     * @return {?}
     */
    isActive(router, item) {
        return router.isActive(item.url, false);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getIconClass(item) {
        /** @type {?} */
        const classes = {
            'nav-icon': true
        };
        /** @type {?} */
        const icon = item.icon;
        classes[icon] = this.hasIcon(item);
        return classes;
    }
}
if (false) {
    /** @type {?} */
    SidebarNavHelper.prototype.hasBadge;
    /** @type {?} */
    SidebarNavHelper.prototype.hasIcon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUszQyxNQUFNLE9BQWdCLGlCQUFpQjs7O1lBRHRDLFVBQVU7Ozs7Ozs7O0lBS1QsdUVBQWdEOztBQUdsRCxNQUFNLE9BQU8sZ0JBQWdCO0lBQTdCO1FBc0JTLGFBQVE7Ozs7UUFBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQztRQUN6QyxZQUFPOzs7O1FBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUM7SUFVaEQsQ0FBQzs7Ozs7SUEvQkMsUUFBUSxDQUFDLElBQUk7UUFDWCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTyxTQUFTLENBQUM7U0FDbEI7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDckIsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDeEIsT0FBTyxVQUFVLENBQUM7U0FDbkI7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDckIsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDcEMsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTTtZQUNMLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7Ozs7SUFFTSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUk7UUFDMUIsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFLTSxZQUFZLENBQUMsSUFBSTs7Y0FDaEIsT0FBTyxHQUFHO1lBQ2QsVUFBVSxFQUFFLElBQUk7U0FDakI7O2NBQ0ssSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRjs7O0lBWEMsb0NBQWdEOztJQUNoRCxtQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElOYXZEYXRhIH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2lkZWJhck5hdlNlcnZpY2Uge1xuICAvKipcbiAgICogUmV0dXJucyBhIHNpZGViYXItbmF2IGl0ZW1zIGNvbmZpZyBOYXZEYXRhXG4gICAqL1xuICBhYnN0cmFjdCBnZXRTaWRlYmFyTmF2SXRlbXNDb25maWcoKTogSU5hdkRhdGFbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFNpZGViYXJOYXZIZWxwZXIge1xuXG4gIGl0ZW1UeXBlKGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5kaXZpZGVyKSB7XG4gICAgICByZXR1cm4gJ2RpdmlkZXInO1xuICAgIH0gZWxzZSBpZiAoaXRlbS50aXRsZSkge1xuICAgICAgcmV0dXJuICd0aXRsZSc7XG4gICAgfSBlbHNlIGlmIChpdGVtLmNoaWxkcmVuKSB7XG4gICAgICByZXR1cm4gJ2Ryb3Bkb3duJztcbiAgICB9IGVsc2UgaWYgKGl0ZW0ubGFiZWwpIHtcbiAgICAgIHJldHVybiAnbGFiZWwnO1xuICAgIH0gZWxzZSBpZiAoIU9iamVjdC5rZXlzKGl0ZW0pLmxlbmd0aCkge1xuICAgICAgcmV0dXJuICdlbXB0eSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnbGluayc7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzQWN0aXZlKHJvdXRlciwgaXRlbSkge1xuICAgIHJldHVybiByb3V0ZXIuaXNBY3RpdmUoaXRlbS51cmwsIGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBoYXNCYWRnZSA9IChpdGVtKSA9PiBCb29sZWFuKGl0ZW0uYmFkZ2UpO1xuICBwdWJsaWMgaGFzSWNvbiA9IChpdGVtKSA9PiBCb29sZWFuKGl0ZW0uaWNvbik7XG5cbiAgcHVibGljIGdldEljb25DbGFzcyhpdGVtKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICduYXYtaWNvbic6IHRydWVcbiAgICB9O1xuICAgIGNvbnN0IGljb24gPSBpdGVtLmljb247XG4gICAgY2xhc3Nlc1tpY29uXSA9IHRoaXMuaGFzSWNvbihpdGVtKTtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxufVxuIl19