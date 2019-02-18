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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFBQTtRQW1DUyxhQUFROzs7O1FBQUcsVUFBQyxJQUFJLElBQUssT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFuQixDQUFtQixFQUFDO1FBQ3pDLFlBQU87Ozs7UUFBRyxVQUFDLElBQUksSUFBSyxPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQWxCLENBQWtCLEVBQUM7SUFtQmhELENBQUM7Ozs7O0lBckRDLG1DQUFROzs7O0lBQVIsVUFBUyxJQUFJO1FBQ1gsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3JCLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3hCLE9BQU8sVUFBVSxDQUFDO1NBQ25CO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3JCLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ3BDLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO2FBQU07WUFDTCxPQUFPLE1BQU0sQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxtQ0FBUTs7OztJQUFSLFVBQVMsSUFBSTs7WUFDTCxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7O1lBQ2hDLFNBQVM7UUFDYixJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMzQyxTQUFTLEdBQUcsU0FBTyxRQUFVLENBQUM7U0FDL0I7YUFBTSxJQUFJLFFBQVEsS0FBSyxVQUFVLEVBQUU7WUFDbEMsU0FBUyxHQUFHLHVCQUF1QixDQUFFO1NBQ3RDO2FBQU07WUFDTCxTQUFTLEdBQUcsVUFBVSxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBSSxTQUFTLFNBQUksSUFBSSxDQUFDLEtBQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQy9ELENBQUM7Ozs7OztJQUVNLG1DQUFROzs7OztJQUFmLFVBQWdCLE1BQU0sRUFBRSxJQUFJO1FBQzFCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBS00sdUNBQVk7Ozs7SUFBbkIsVUFBb0IsSUFBSTs7WUFDaEIsT0FBTyxHQUFHO1lBQ2QsVUFBVSxFQUFFLElBQUk7U0FDakI7O1lBQ0ssSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7OztJQUVNLHdDQUFhOzs7O0lBQXBCLFVBQXFCLElBQUk7O1lBQ2pCLE9BQU8sR0FBRztZQUNkLE9BQU8sRUFBRSxJQUFJO1NBQ2Q7O1lBQ0ssT0FBTyxHQUFHLFdBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFTO1FBQzdDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDeEMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQzs7OztJQXBCQyxvQ0FBZ0Q7O0lBQ2hELG1DQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTaWRlYmFyTmF2SGVscGVyIHtcclxuXHJcbiAgaXRlbVR5cGUoaXRlbSkge1xyXG4gICAgaWYgKGl0ZW0uZGl2aWRlcikge1xyXG4gICAgICByZXR1cm4gJ2RpdmlkZXInO1xyXG4gICAgfSBlbHNlIGlmIChpdGVtLnRpdGxlKSB7XHJcbiAgICAgIHJldHVybiAndGl0bGUnO1xyXG4gICAgfSBlbHNlIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgIHJldHVybiAnZHJvcGRvd24nO1xyXG4gICAgfSBlbHNlIGlmIChpdGVtLmxhYmVsKSB7XHJcbiAgICAgIHJldHVybiAnbGFiZWwnO1xyXG4gICAgfSBlbHNlIGlmICghT2JqZWN0LmtleXMoaXRlbSkubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiAnZW1wdHknO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdsaW5rJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENsYXNzKGl0ZW0pIHtcclxuICAgIGNvbnN0IGl0ZW1UeXBlID0gdGhpcy5pdGVtVHlwZShpdGVtKTtcclxuICAgIGxldCBpdGVtQ2xhc3M7XHJcbiAgICBpZiAoWydkaXZpZGVyJywgJ3RpdGxlJ10uaW5jbHVkZXMoaXRlbVR5cGUpKSB7XHJcbiAgICAgIGl0ZW1DbGFzcyA9IGBuYXYtJHtpdGVtVHlwZX1gO1xyXG4gICAgfSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gJ2Ryb3Bkb3duJykge1xyXG4gICAgICBpdGVtQ2xhc3MgPSAnbmF2LWl0ZW0gbmF2LWRyb3Bkb3duJyA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtQ2xhc3MgPSAnbmF2LWl0ZW0nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGl0ZW0uY2xhc3MgPyBgJHtpdGVtQ2xhc3N9ICR7aXRlbS5jbGFzc31gIDogaXRlbUNsYXNzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzQWN0aXZlKHJvdXRlciwgaXRlbSkge1xyXG4gICAgcmV0dXJuIHJvdXRlci5pc0FjdGl2ZShpdGVtLnVybCwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhc0JhZGdlID0gKGl0ZW0pID0+IEJvb2xlYW4oaXRlbS5iYWRnZSk7XHJcbiAgcHVibGljIGhhc0ljb24gPSAoaXRlbSkgPT4gQm9vbGVhbihpdGVtLmljb24pO1xyXG5cclxuICBwdWJsaWMgZ2V0SWNvbkNsYXNzKGl0ZW0pIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgICAgICduYXYtaWNvbic6IHRydWVcclxuICAgIH07XHJcbiAgICBjb25zdCBpY29uID0gaXRlbS5pY29uO1xyXG4gICAgY2xhc3Nlc1tpY29uXSA9ICEhaXRlbS5pY29uO1xyXG4gICAgcmV0dXJuIGNsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0QmFkZ2VDbGFzcyhpdGVtKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0ge1xyXG4gICAgICAnYmFkZ2UnOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdmFyaWFudCA9IGBiYWRnZS0ke2l0ZW0uYmFkZ2UudmFyaWFudH1gO1xyXG4gICAgY2xhc3Nlc1t2YXJpYW50XSA9ICEhaXRlbS5iYWRnZS52YXJpYW50O1xyXG4gICAgcmV0dXJuIGNsYXNzZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==