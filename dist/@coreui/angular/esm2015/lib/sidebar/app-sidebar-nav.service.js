/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
     * @param {?} item
     * @return {?}
     */
    getClass(item) {
        /** @type {?} */
        const itemType = this.itemType(item);
        /** @type {?} */
        let itemClass;
        if (['divider', 'title'].includes(itemType)) {
            itemClass = `nav-${itemType}`;
        }
        else if (itemType === 'dropdown') {
            itemClass = 'nav-item nav-dropdown';
        }
        else {
            itemClass = 'nav-item';
        }
        return item.class ? `${itemClass} ${item.class}` : itemClass;
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
        classes[icon] = !!item.icon;
        return classes;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getBadgeClass(item) {
        /** @type {?} */
        const classes = {
            'badge': true
        };
        /** @type {?} */
        const variant = `badge-${item.badge.variant}`;
        classes[variant] = !!item.badge.variant;
        return classes;
    }
}
if (false) {
    /** @type {?} */
    SidebarNavHelper.prototype.hasBadge;
    /** @type {?} */
    SidebarNavHelper.prototype.hasIcon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLGdCQUFnQjtJQUE3QjtRQW1DUyxhQUFROzs7O1FBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUM7UUFDekMsWUFBTzs7OztRQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDO0lBbUJoRCxDQUFDOzs7OztJQXJEQyxRQUFRLENBQUMsSUFBSTtRQUNYLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLFNBQVMsQ0FBQztTQUNsQjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN4QixPQUFPLFVBQVUsQ0FBQztTQUNuQjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNwQyxPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQUk7O2NBQ0wsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDOztZQUNoQyxTQUFTO1FBQ2IsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0MsU0FBUyxHQUFHLE9BQU8sUUFBUSxFQUFFLENBQUM7U0FDL0I7YUFBTSxJQUFJLFFBQVEsS0FBSyxVQUFVLEVBQUU7WUFDbEMsU0FBUyxHQUFHLHVCQUF1QixDQUFFO1NBQ3RDO2FBQU07WUFDTCxTQUFTLEdBQUcsVUFBVSxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMvRCxDQUFDOzs7Ozs7SUFFTSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUk7UUFDMUIsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFLTSxZQUFZLENBQUMsSUFBSTs7Y0FDaEIsT0FBTyxHQUFHO1lBQ2QsVUFBVSxFQUFFLElBQUk7U0FDakI7O2NBQ0ssSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7OztJQUVNLGFBQWEsQ0FBQyxJQUFJOztjQUNqQixPQUFPLEdBQUc7WUFDZCxPQUFPLEVBQUUsSUFBSTtTQUNkOztjQUNLLE9BQU8sR0FBRyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1FBQzdDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDeEMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGOzs7SUFwQkMsb0NBQWdEOztJQUNoRCxtQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU2lkZWJhck5hdkhlbHBlciB7XHJcblxyXG4gIGl0ZW1UeXBlKGl0ZW0pIHtcclxuICAgIGlmIChpdGVtLmRpdmlkZXIpIHtcclxuICAgICAgcmV0dXJuICdkaXZpZGVyJztcclxuICAgIH0gZWxzZSBpZiAoaXRlbS50aXRsZSkge1xyXG4gICAgICByZXR1cm4gJ3RpdGxlJztcclxuICAgIH0gZWxzZSBpZiAoaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICByZXR1cm4gJ2Ryb3Bkb3duJztcclxuICAgIH0gZWxzZSBpZiAoaXRlbS5sYWJlbCkge1xyXG4gICAgICByZXR1cm4gJ2xhYmVsJztcclxuICAgIH0gZWxzZSBpZiAoIU9iamVjdC5rZXlzKGl0ZW0pLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gJ2VtcHR5JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnbGluayc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzcyhpdGVtKSB7XHJcbiAgICBjb25zdCBpdGVtVHlwZSA9IHRoaXMuaXRlbVR5cGUoaXRlbSk7XHJcbiAgICBsZXQgaXRlbUNsYXNzO1xyXG4gICAgaWYgKFsnZGl2aWRlcicsICd0aXRsZSddLmluY2x1ZGVzKGl0ZW1UeXBlKSkge1xyXG4gICAgICBpdGVtQ2xhc3MgPSBgbmF2LSR7aXRlbVR5cGV9YDtcclxuICAgIH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09ICdkcm9wZG93bicpIHtcclxuICAgICAgaXRlbUNsYXNzID0gJ25hdi1pdGVtIG5hdi1kcm9wZG93bicgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbUNsYXNzID0gJ25hdi1pdGVtJztcclxuICAgIH1cclxuICAgIHJldHVybiBpdGVtLmNsYXNzID8gYCR7aXRlbUNsYXNzfSAke2l0ZW0uY2xhc3N9YCA6IGl0ZW1DbGFzcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0FjdGl2ZShyb3V0ZXIsIGl0ZW0pIHtcclxuICAgIHJldHVybiByb3V0ZXIuaXNBY3RpdmUoaXRlbS51cmwsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXNCYWRnZSA9IChpdGVtKSA9PiBCb29sZWFuKGl0ZW0uYmFkZ2UpO1xyXG4gIHB1YmxpYyBoYXNJY29uID0gKGl0ZW0pID0+IEJvb2xlYW4oaXRlbS5pY29uKTtcclxuXHJcbiAgcHVibGljIGdldEljb25DbGFzcyhpdGVtKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0ge1xyXG4gICAgICAnbmF2LWljb24nOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgY29uc3QgaWNvbiA9IGl0ZW0uaWNvbjtcclxuICAgIGNsYXNzZXNbaWNvbl0gPSAhIWl0ZW0uaWNvbjtcclxuICAgIHJldHVybiBjbGFzc2VzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEJhZGdlQ2xhc3MoaXRlbSkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHtcclxuICAgICAgJ2JhZGdlJzogdHJ1ZVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHZhcmlhbnQgPSBgYmFkZ2UtJHtpdGVtLmJhZGdlLnZhcmlhbnR9YDtcclxuICAgIGNsYXNzZXNbdmFyaWFudF0gPSAhIWl0ZW0uYmFkZ2UudmFyaWFudDtcclxuICAgIHJldHVybiBjbGFzc2VzO1xyXG4gIH1cclxufVxyXG4iXX0=