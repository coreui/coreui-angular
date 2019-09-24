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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RDtJQWFFLHFDQUNTLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBUHpCLFlBQU8sR0FBRztZQUNoQixXQUFXLEVBQUUsSUFBSTtZQUNqQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUM7UUFDTSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQUlyQixDQUFDOzs7O0lBRUwsOENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELGtEQUFZOzs7SUFBWjs7WUFDUSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN0QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUNELHVEQUFpQjs7O0lBQWpCOztZQUNRLE9BQU8sR0FBRyxVQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQVM7UUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDOztZQUNoRCxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztRQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7O2dCQWhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsMFdBQXFEO2lCQUN0RDs7OztnQkFMTyxnQkFBZ0I7Ozt1QkFPckIsS0FBSzs7SUE0QlIsa0NBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTdCWSwyQkFBMkI7OztJQUN0QywyQ0FBbUI7Ozs7O0lBRW5CLDhDQUdFOzs7OztJQUNGLGtEQUF5Qjs7SUFHdkIsNkNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWxhYmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLXNpZGViYXItbmF2LWxhYmVsLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkxhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpdGVtOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgY2xhc3NlcyA9IHtcclxuICAgICduYXYtbGFiZWwnOiB0cnVlLFxyXG4gICAgJ2FjdGl2ZSc6IHRydWVcclxuICB9O1xyXG4gIHByaXZhdGUgaWNvbkNsYXNzZXMgPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmljb25DbGFzc2VzID0gdGhpcy5oZWxwZXIuZ2V0SWNvbkNsYXNzKHRoaXMuaXRlbSk7XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtQ2xhc3MoKSB7XHJcbiAgICBjb25zdCBpdGVtQ2xhc3MgPSB0aGlzLml0ZW0uY2xhc3M7XHJcbiAgICB0aGlzLmNsYXNzZXNbaXRlbUNsYXNzXSA9ICEhaXRlbUNsYXNzO1xyXG4gICAgcmV0dXJuIHRoaXMuY2xhc3NlcztcclxuICB9XHJcbiAgZ2V0TGFiZWxJY29uQ2xhc3MoKSB7XHJcbiAgICBjb25zdCB2YXJpYW50ID0gYHRleHQtJHt0aGlzLml0ZW0ubGFiZWwudmFyaWFudH1gO1xyXG4gICAgdGhpcy5pY29uQ2xhc3Nlc1t2YXJpYW50XSA9ICEhdGhpcy5pdGVtLmxhYmVsLnZhcmlhbnQ7XHJcbiAgICBjb25zdCBsYWJlbENsYXNzID0gdGhpcy5pdGVtLmxhYmVsLmNsYXNzO1xyXG4gICAgdGhpcy5pY29uQ2xhc3Nlc1tsYWJlbENsYXNzXSA9ICEhbGFiZWxDbGFzcztcclxuICAgIHJldHVybiB0aGlzLmljb25DbGFzc2VzO1xyXG4gIH1cclxufVxyXG4iXX0=