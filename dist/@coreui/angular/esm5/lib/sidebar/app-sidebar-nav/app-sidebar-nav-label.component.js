/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
var AppSidebarNavLabelComponent = /** @class */ (function () {
    function AppSidebarNavLabelComponent(helper) {
        this.helper = helper;
        this.classes = {
            'nav-label': true,
            'active': true
        };
        this.iconClasses = {};
    }
    /**
     * @return {?}
     */
    AppSidebarNavLabelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.iconClasses = this.helper.getIconClass(this.item);
    };
    /**
     * @return {?}
     */
    AppSidebarNavLabelComponent.prototype.getItemClass = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var itemClass = this.item.class;
        this.classes[itemClass] = !!itemClass;
        return this.classes;
    };
    /**
     * @return {?}
     */
    AppSidebarNavLabelComponent.prototype.getLabelIconClass = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var variant = "text-" + this.item.label.variant;
        this.iconClasses[variant] = !!this.item.label.variant;
        /** @type {?} */
        var labelClass = this.item.label.class;
        this.iconClasses[labelClass] = !!labelClass;
        return this.iconClasses;
    };
    AppSidebarNavLabelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-nav-label, cui-sidebar-nav-label',
                    template: "<a [ngClass]=\"getItemClass()\"\r\n   href=\"{{item.url}}\"\r\n   [appHtmlAttr]=\"item.attributes\">\r\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\r\n  <ng-container>{{item.name}}</ng-container>\r\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\r\n</a>\r\n"
                }] }
    ];
    /** @nocollapse */
    AppSidebarNavLabelComponent.ctorParameters = function () { return [
        { type: SidebarNavHelper }
    ]; };
    AppSidebarNavLabelComponent.propDecorators = {
        item: [{ type: Input }]
    };
    return AppSidebarNavLabelComponent;
}());
export { AppSidebarNavLabelComponent };
if (false) {
    /** @type {?} */
    AppSidebarNavLabelComponent.prototype.item;
    /**
     * @type {?}
     * @private
     */
    AppSidebarNavLabelComponent.prototype.classes;
    /**
     * @type {?}
     * @private
     */
    AppSidebarNavLabelComponent.prototype.iconClasses;
    /** @type {?} */
    AppSidebarNavLabelComponent.prototype.helper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RDtJQWFFLHFDQUNTLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBUHpCLFlBQU8sR0FBRztZQUNoQixXQUFXLEVBQUUsSUFBSTtZQUNqQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUM7UUFDTSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQUlyQixDQUFDOzs7O0lBRUwsOENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELGtEQUFZOzs7SUFBWjs7WUFDUSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN0QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUNELHVEQUFpQjs7O0lBQWpCOztZQUNRLE9BQU8sR0FBRyxVQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQVM7UUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDOztZQUNoRCxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztRQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7O2dCQWhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDhDQUE4QztvQkFDeEQsMFdBQXFEO2lCQUN0RDs7OztnQkFMTyxnQkFBZ0I7Ozt1QkFPckIsS0FBSzs7SUE0QlIsa0NBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTdCWSwyQkFBMkI7OztJQUN0QywyQ0FBbUI7Ozs7O0lBRW5CLDhDQUdFOzs7OztJQUNGLGtEQUF5Qjs7SUFHdkIsNkNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWxhYmVsLCBjdWktc2lkZWJhci1uYXYtbGFiZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2TGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBjbGFzc2VzID0ge1xyXG4gICAgJ25hdi1sYWJlbCc6IHRydWUsXHJcbiAgICAnYWN0aXZlJzogdHJ1ZVxyXG4gIH07XHJcbiAgcHJpdmF0ZSBpY29uQ2xhc3NlcyA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBoZWxwZXI6IFNpZGViYXJOYXZIZWxwZXJcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaWNvbkNsYXNzZXMgPSB0aGlzLmhlbHBlci5nZXRJY29uQ2xhc3ModGhpcy5pdGVtKTtcclxuICB9XHJcblxyXG4gIGdldEl0ZW1DbGFzcygpIHtcclxuICAgIGNvbnN0IGl0ZW1DbGFzcyA9IHRoaXMuaXRlbS5jbGFzcztcclxuICAgIHRoaXMuY2xhc3Nlc1tpdGVtQ2xhc3NdID0gISFpdGVtQ2xhc3M7XHJcbiAgICByZXR1cm4gdGhpcy5jbGFzc2VzO1xyXG4gIH1cclxuICBnZXRMYWJlbEljb25DbGFzcygpIHtcclxuICAgIGNvbnN0IHZhcmlhbnQgPSBgdGV4dC0ke3RoaXMuaXRlbS5sYWJlbC52YXJpYW50fWA7XHJcbiAgICB0aGlzLmljb25DbGFzc2VzW3ZhcmlhbnRdID0gISF0aGlzLml0ZW0ubGFiZWwudmFyaWFudDtcclxuICAgIGNvbnN0IGxhYmVsQ2xhc3MgPSB0aGlzLml0ZW0ubGFiZWwuY2xhc3M7XHJcbiAgICB0aGlzLmljb25DbGFzc2VzW2xhYmVsQ2xhc3NdID0gISFsYWJlbENsYXNzO1xyXG4gICAgcmV0dXJuIHRoaXMuaWNvbkNsYXNzZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==