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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUszQyxNQUFNLE9BQWdCLGlCQUFpQjs7O1lBRHRDLFVBQVU7Ozs7Ozs7O0lBS1QsdUVBQWdEOztBQUdsRCxNQUFNLE9BQU8sZ0JBQWdCO0lBQTdCO1FBc0JTLGFBQVE7Ozs7UUFBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQztRQUN6QyxZQUFPOzs7O1FBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUM7SUFVaEQsQ0FBQzs7Ozs7SUEvQkMsUUFBUSxDQUFDLElBQUk7UUFDWCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTyxTQUFTLENBQUM7U0FDbEI7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDckIsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDeEIsT0FBTyxVQUFVLENBQUM7U0FDbkI7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDckIsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDcEMsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTTtZQUNMLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7Ozs7SUFFTSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUk7UUFDMUIsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFLTSxZQUFZLENBQUMsSUFBSTs7Y0FDaEIsT0FBTyxHQUFHO1lBQ2QsVUFBVSxFQUFFLElBQUk7U0FDakI7O2NBQ0ssSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRjs7O0lBWEMsb0NBQWdEOztJQUNoRCxtQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJTmF2RGF0YSB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNpZGViYXJOYXZTZXJ2aWNlIHtcclxuICAvKipcclxuICAgKiBSZXR1cm5zIGEgc2lkZWJhci1uYXYgaXRlbXMgY29uZmlnIE5hdkRhdGFcclxuICAgKi9cclxuICBhYnN0cmFjdCBnZXRTaWRlYmFyTmF2SXRlbXNDb25maWcoKTogSU5hdkRhdGFbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGViYXJOYXZIZWxwZXIge1xyXG5cclxuICBpdGVtVHlwZShpdGVtKSB7XHJcbiAgICBpZiAoaXRlbS5kaXZpZGVyKSB7XHJcbiAgICAgIHJldHVybiAnZGl2aWRlcic7XHJcbiAgICB9IGVsc2UgaWYgKGl0ZW0udGl0bGUpIHtcclxuICAgICAgcmV0dXJuICd0aXRsZSc7XHJcbiAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgcmV0dXJuICdkcm9wZG93bic7XHJcbiAgICB9IGVsc2UgaWYgKGl0ZW0ubGFiZWwpIHtcclxuICAgICAgcmV0dXJuICdsYWJlbCc7XHJcbiAgICB9IGVsc2UgaWYgKCFPYmplY3Qua2V5cyhpdGVtKS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuICdlbXB0eSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ2xpbmsnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzQWN0aXZlKHJvdXRlciwgaXRlbSkge1xyXG4gICAgcmV0dXJuIHJvdXRlci5pc0FjdGl2ZShpdGVtLnVybCwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhc0JhZGdlID0gKGl0ZW0pID0+IEJvb2xlYW4oaXRlbS5iYWRnZSk7XHJcbiAgcHVibGljIGhhc0ljb24gPSAoaXRlbSkgPT4gQm9vbGVhbihpdGVtLmljb24pO1xyXG5cclxuICBwdWJsaWMgZ2V0SWNvbkNsYXNzKGl0ZW0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgICAgICduYXYtaWNvbic6IHRydWVcclxuICAgIH07XHJcbiAgICBjb25zdCBpY29uID0gaXRlbS5pY29uO1xyXG4gICAgY2xhc3Nlc1tpY29uXSA9IHRoaXMuaGFzSWNvbihpdGVtKTtcclxuICAgIHJldHVybiBjbGFzc2VzO1xyXG4gIH1cclxufVxyXG4iXX0=