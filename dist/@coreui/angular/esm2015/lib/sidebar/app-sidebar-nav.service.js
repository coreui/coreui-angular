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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLGdCQUFnQjtJQUE3QjtRQW1DUyxhQUFROzs7O1FBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUM7UUFDekMsWUFBTzs7OztRQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDO0lBbUJoRCxDQUFDOzs7OztJQXJEQyxRQUFRLENBQUMsSUFBSTtRQUNYLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLFNBQVMsQ0FBQztTQUNsQjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN4QixPQUFPLFVBQVUsQ0FBQztTQUNuQjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNwQyxPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQUk7O2NBQ0wsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDOztZQUNoQyxTQUFTO1FBQ2IsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0MsU0FBUyxHQUFHLE9BQU8sUUFBUSxFQUFFLENBQUM7U0FDL0I7YUFBTSxJQUFJLFFBQVEsS0FBSyxVQUFVLEVBQUU7WUFDbEMsU0FBUyxHQUFHLHVCQUF1QixDQUFFO1NBQ3RDO2FBQU07WUFDTCxTQUFTLEdBQUcsVUFBVSxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMvRCxDQUFDOzs7Ozs7SUFFTSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUk7UUFDMUIsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFLTSxZQUFZLENBQUMsSUFBSTs7Y0FDaEIsT0FBTyxHQUFHO1lBQ2QsVUFBVSxFQUFFLElBQUk7U0FDakI7O2NBQ0ssSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7OztJQUVNLGFBQWEsQ0FBQyxJQUFJOztjQUNqQixPQUFPLEdBQUc7WUFDZCxPQUFPLEVBQUUsSUFBSTtTQUNkOztjQUNLLE9BQU8sR0FBRyxTQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1FBQzdDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDeEMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGOzs7SUFwQkMsb0NBQWdEOztJQUNoRCxtQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU2lkZWJhck5hdkhlbHBlciB7XG5cbiAgaXRlbVR5cGUoaXRlbSkge1xuICAgIGlmIChpdGVtLmRpdmlkZXIpIHtcbiAgICAgIHJldHVybiAnZGl2aWRlcic7XG4gICAgfSBlbHNlIGlmIChpdGVtLnRpdGxlKSB7XG4gICAgICByZXR1cm4gJ3RpdGxlJztcbiAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiAnZHJvcGRvd24nO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5sYWJlbCkge1xuICAgICAgcmV0dXJuICdsYWJlbCc7XG4gICAgfSBlbHNlIGlmICghT2JqZWN0LmtleXMoaXRlbSkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gJ2VtcHR5JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdsaW5rJztcbiAgICB9XG4gIH1cblxuICBnZXRDbGFzcyhpdGVtKSB7XG4gICAgY29uc3QgaXRlbVR5cGUgPSB0aGlzLml0ZW1UeXBlKGl0ZW0pO1xuICAgIGxldCBpdGVtQ2xhc3M7XG4gICAgaWYgKFsnZGl2aWRlcicsICd0aXRsZSddLmluY2x1ZGVzKGl0ZW1UeXBlKSkge1xuICAgICAgaXRlbUNsYXNzID0gYG5hdi0ke2l0ZW1UeXBlfWA7XG4gICAgfSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gJ2Ryb3Bkb3duJykge1xuICAgICAgaXRlbUNsYXNzID0gJ25hdi1pdGVtIG5hdi1kcm9wZG93bicgO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtQ2xhc3MgPSAnbmF2LWl0ZW0nO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbS5jbGFzcyA/IGAke2l0ZW1DbGFzc30gJHtpdGVtLmNsYXNzfWAgOiBpdGVtQ2xhc3M7XG4gIH1cblxuICBwdWJsaWMgaXNBY3RpdmUocm91dGVyLCBpdGVtKSB7XG4gICAgcmV0dXJuIHJvdXRlci5pc0FjdGl2ZShpdGVtLnVybCwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIGhhc0JhZGdlID0gKGl0ZW0pID0+IEJvb2xlYW4oaXRlbS5iYWRnZSk7XG4gIHB1YmxpYyBoYXNJY29uID0gKGl0ZW0pID0+IEJvb2xlYW4oaXRlbS5pY29uKTtcblxuICBwdWJsaWMgZ2V0SWNvbkNsYXNzKGl0ZW0pIHtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgJ25hdi1pY29uJzogdHJ1ZVxuICAgIH07XG4gICAgY29uc3QgaWNvbiA9IGl0ZW0uaWNvbjtcbiAgICBjbGFzc2VzW2ljb25dID0gISFpdGVtLmljb247XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0QmFkZ2VDbGFzcyhpdGVtKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICdiYWRnZSc6IHRydWVcbiAgICB9O1xuICAgIGNvbnN0IHZhcmlhbnQgPSBgYmFkZ2UtJHtpdGVtLmJhZGdlLnZhcmlhbnR9YDtcbiAgICBjbGFzc2VzW3ZhcmlhbnRdID0gISFpdGVtLmJhZGdlLnZhcmlhbnQ7XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cbn1cbiJdfQ==