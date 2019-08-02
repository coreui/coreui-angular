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
                    selector: 'app-sidebar-nav-label',
                    template: "<a [ngClass]=\"getItemClass()\"\n   href=\"{{item.url}}\"\n   [appHtmlAttr]=\"item.attributes\">\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\n  <ng-container>{{item.name}}</ng-container>\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\n</a>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RDtJQWFFLHFDQUNTLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBUHpCLFlBQU8sR0FBRztZQUNoQixXQUFXLEVBQUUsSUFBSTtZQUNqQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUM7UUFDTSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQUlyQixDQUFDOzs7O0lBRUwsOENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELGtEQUFZOzs7SUFBWjs7WUFDUSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN0QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUNELHVEQUFpQjs7O0lBQWpCOztZQUNRLE9BQU8sR0FBRyxVQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQVM7UUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDOztZQUNoRCxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztRQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7O2dCQWhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsNFZBQXFEO2lCQUN0RDs7OztnQkFMTyxnQkFBZ0I7Ozt1QkFPckIsS0FBSzs7SUE0QlIsa0NBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTdCWSwyQkFBMkI7OztJQUN0QywyQ0FBbUI7Ozs7O0lBRW5CLDhDQUdFOzs7OztJQUNGLGtEQUF5Qjs7SUFHdkIsNkNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTaWRlYmFyTmF2SGVscGVyfSBmcm9tICcuLi9hcHAtc2lkZWJhci1uYXYuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1sYWJlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZMYWJlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcblxuICBwcml2YXRlIGNsYXNzZXMgPSB7XG4gICAgJ25hdi1sYWJlbCc6IHRydWUsXG4gICAgJ2FjdGl2ZSc6IHRydWVcbiAgfTtcbiAgcHJpdmF0ZSBpY29uQ2xhc3NlcyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBoZWxwZXI6IFNpZGViYXJOYXZIZWxwZXJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmljb25DbGFzc2VzID0gdGhpcy5oZWxwZXIuZ2V0SWNvbkNsYXNzKHRoaXMuaXRlbSk7XG4gIH1cblxuICBnZXRJdGVtQ2xhc3MoKSB7XG4gICAgY29uc3QgaXRlbUNsYXNzID0gdGhpcy5pdGVtLmNsYXNzO1xuICAgIHRoaXMuY2xhc3Nlc1tpdGVtQ2xhc3NdID0gISFpdGVtQ2xhc3M7XG4gICAgcmV0dXJuIHRoaXMuY2xhc3NlcztcbiAgfVxuICBnZXRMYWJlbEljb25DbGFzcygpIHtcbiAgICBjb25zdCB2YXJpYW50ID0gYHRleHQtJHt0aGlzLml0ZW0ubGFiZWwudmFyaWFudH1gO1xuICAgIHRoaXMuaWNvbkNsYXNzZXNbdmFyaWFudF0gPSAhIXRoaXMuaXRlbS5sYWJlbC52YXJpYW50O1xuICAgIGNvbnN0IGxhYmVsQ2xhc3MgPSB0aGlzLml0ZW0ubGFiZWwuY2xhc3M7XG4gICAgdGhpcy5pY29uQ2xhc3Nlc1tsYWJlbENsYXNzXSA9ICEhbGFiZWxDbGFzcztcbiAgICByZXR1cm4gdGhpcy5pY29uQ2xhc3NlcztcbiAgfVxufVxuIl19