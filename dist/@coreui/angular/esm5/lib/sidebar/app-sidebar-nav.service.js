/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
     * @param {?} item
     * @return {?}
     */
    SidebarNavHelper.prototype.getClass = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var itemType = this.itemType(item);
        /** @type {?} */
        var itemClass;
        if (['divider', 'title'].includes(itemType)) {
            itemClass = "nav-" + itemType;
        }
        else if (itemType === 'dropdown') {
            itemClass = 'nav-item nav-dropdown';
        }
        else {
            itemClass = 'nav-item';
        }
        return item.class ? itemClass + " " + item.class : itemClass;
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
        classes[icon] = !!item.icon;
        return classes;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SidebarNavHelper.prototype.getBadgeClass = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var classes = {
            'badge': true
        };
        /** @type {?} */
        var variant = "badge-" + item.badge.variant;
        classes[variant] = !!item.badge.variant;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFBQTtRQW1DUyxhQUFROzs7O1FBQUcsVUFBQyxJQUFJLElBQUssT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFuQixDQUFtQixFQUFDO1FBQ3pDLFlBQU87Ozs7UUFBRyxVQUFDLElBQUksSUFBSyxPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQWxCLENBQWtCLEVBQUM7SUFtQmhELENBQUM7Ozs7O0lBckRDLG1DQUFROzs7O0lBQVIsVUFBUyxJQUFJO1FBQ1gsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3JCLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3hCLE9BQU8sVUFBVSxDQUFDO1NBQ25CO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3JCLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ3BDLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO2FBQU07WUFDTCxPQUFPLE1BQU0sQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxtQ0FBUTs7OztJQUFSLFVBQVMsSUFBSTs7WUFDTCxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7O1lBQ2hDLFNBQVM7UUFDYixJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMzQyxTQUFTLEdBQUcsU0FBTyxRQUFVLENBQUM7U0FDL0I7YUFBTSxJQUFJLFFBQVEsS0FBSyxVQUFVLEVBQUU7WUFDbEMsU0FBUyxHQUFHLHVCQUF1QixDQUFFO1NBQ3RDO2FBQU07WUFDTCxTQUFTLEdBQUcsVUFBVSxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBSSxTQUFTLFNBQUksSUFBSSxDQUFDLEtBQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQy9ELENBQUM7Ozs7OztJQUVNLG1DQUFROzs7OztJQUFmLFVBQWdCLE1BQU0sRUFBRSxJQUFJO1FBQzFCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBS00sdUNBQVk7Ozs7SUFBbkIsVUFBb0IsSUFBSTs7WUFDaEIsT0FBTyxHQUFHO1lBQ2QsVUFBVSxFQUFFLElBQUk7U0FDakI7O1lBQ0ssSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7OztJQUVNLHdDQUFhOzs7O0lBQXBCLFVBQXFCLElBQUk7O1lBQ2pCLE9BQU8sR0FBRztZQUNkLE9BQU8sRUFBRSxJQUFJO1NBQ2Q7O1lBQ0ssT0FBTyxHQUFHLFdBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFTO1FBQzdDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDeEMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQzs7OztJQXBCQyxvQ0FBZ0Q7O0lBQ2hELG1DQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTaWRlYmFyTmF2SGVscGVyIHtcblxuICBpdGVtVHlwZShpdGVtKSB7XG4gICAgaWYgKGl0ZW0uZGl2aWRlcikge1xuICAgICAgcmV0dXJuICdkaXZpZGVyJztcbiAgICB9IGVsc2UgaWYgKGl0ZW0udGl0bGUpIHtcbiAgICAgIHJldHVybiAndGl0bGUnO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgcmV0dXJuICdkcm9wZG93bic7XG4gICAgfSBlbHNlIGlmIChpdGVtLmxhYmVsKSB7XG4gICAgICByZXR1cm4gJ2xhYmVsJztcbiAgICB9IGVsc2UgaWYgKCFPYmplY3Qua2V5cyhpdGVtKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAnZW1wdHknO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2xpbmsnO1xuICAgIH1cbiAgfVxuXG4gIGdldENsYXNzKGl0ZW0pIHtcbiAgICBjb25zdCBpdGVtVHlwZSA9IHRoaXMuaXRlbVR5cGUoaXRlbSk7XG4gICAgbGV0IGl0ZW1DbGFzcztcbiAgICBpZiAoWydkaXZpZGVyJywgJ3RpdGxlJ10uaW5jbHVkZXMoaXRlbVR5cGUpKSB7XG4gICAgICBpdGVtQ2xhc3MgPSBgbmF2LSR7aXRlbVR5cGV9YDtcbiAgICB9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSAnZHJvcGRvd24nKSB7XG4gICAgICBpdGVtQ2xhc3MgPSAnbmF2LWl0ZW0gbmF2LWRyb3Bkb3duJyA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW1DbGFzcyA9ICduYXYtaXRlbSc7XG4gICAgfVxuICAgIHJldHVybiBpdGVtLmNsYXNzID8gYCR7aXRlbUNsYXNzfSAke2l0ZW0uY2xhc3N9YCA6IGl0ZW1DbGFzcztcbiAgfVxuXG4gIHB1YmxpYyBpc0FjdGl2ZShyb3V0ZXIsIGl0ZW0pIHtcbiAgICByZXR1cm4gcm91dGVyLmlzQWN0aXZlKGl0ZW0udXJsLCBmYWxzZSk7XG4gIH1cblxuICBwdWJsaWMgaGFzQmFkZ2UgPSAoaXRlbSkgPT4gQm9vbGVhbihpdGVtLmJhZGdlKTtcbiAgcHVibGljIGhhc0ljb24gPSAoaXRlbSkgPT4gQm9vbGVhbihpdGVtLmljb24pO1xuXG4gIHB1YmxpYyBnZXRJY29uQ2xhc3MoaXRlbSkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICAnbmF2LWljb24nOiB0cnVlXG4gICAgfTtcbiAgICBjb25zdCBpY29uID0gaXRlbS5pY29uO1xuICAgIGNsYXNzZXNbaWNvbl0gPSAhIWl0ZW0uaWNvbjtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRCYWRnZUNsYXNzKGl0ZW0pIHtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgJ2JhZGdlJzogdHJ1ZVxuICAgIH07XG4gICAgY29uc3QgdmFyaWFudCA9IGBiYWRnZS0ke2l0ZW0uYmFkZ2UudmFyaWFudH1gO1xuICAgIGNsYXNzZXNbdmFyaWFudF0gPSAhIWl0ZW0uYmFkZ2UudmFyaWFudDtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxufVxuIl19