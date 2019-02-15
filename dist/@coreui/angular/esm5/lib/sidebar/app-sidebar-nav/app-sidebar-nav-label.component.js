/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
var AppSidebarNavLabelComponent = /** @class */ (function () {
    function AppSidebarNavLabelComponent(helper) {
        this.helper = helper;
    }
    /**
     * @return {?}
     */
    AppSidebarNavLabelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    AppSidebarNavLabelComponent.prototype.getItemClass = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var labelClass = {
            'nav-label': true,
            'active': true
        };
        /** @type {?} */
        var itemClass = this.item.class;
        labelClass[itemClass] = !!itemClass;
        return labelClass;
    };
    /**
     * @return {?}
     */
    AppSidebarNavLabelComponent.prototype.getLabelIconClass = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var classes = this.helper.getIconClass(this.item);
        /** @type {?} */
        var variant = "text-" + this.item.label.variant;
        classes[variant] = !!variant;
        /** @type {?} */
        var labelClass = this.item.label.class;
        classes[labelClass] = !!labelClass;
        return classes;
    };
    AppSidebarNavLabelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-nav-label',
                    template: "<a [ngClass]=\"getItemClass()\"\n   href=\"{{item.url}}\"\n   [appHtmlAttr]=\"item.attributes\">\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\n  <ng-container>{{item.name}}</ng-container>\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n</a>\n"
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
    /** @type {?} */
    AppSidebarNavLabelComponent.prototype.helper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RDtJQU9FLHFDQUNTLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzdCLENBQUM7Ozs7SUFFTCw4Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsa0RBQVk7OztJQUFaOztZQUNRLFVBQVUsR0FBRztZQUNqQixXQUFXLEVBQUUsSUFBSTtZQUNqQixRQUFRLEVBQUUsSUFBSTtTQUNmOztZQUNLLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7UUFDakMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEMsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7OztJQUNELHVEQUFpQjs7O0lBQWpCOztZQUNRLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOztZQUM3QyxPQUFPLEdBQUcsVUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFTO1FBQ2pELE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDOztZQUN2QixVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztRQUN4QyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLDZWQUFxRDtpQkFDdEQ7Ozs7Z0JBTE8sZ0JBQWdCOzs7dUJBT3JCLEtBQUs7O0lBMEJSLGtDQUFDO0NBQUEsQUEvQkQsSUErQkM7U0EzQlksMkJBQTJCOzs7SUFDdEMsMkNBQW1COztJQUdqQiw2Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWxhYmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC1zaWRlYmFyLW5hdi1sYWJlbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkxhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXRlbTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBoZWxwZXI6IFNpZGViYXJOYXZIZWxwZXJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGdldEl0ZW1DbGFzcygpIHtcbiAgICBjb25zdCBsYWJlbENsYXNzID0ge1xuICAgICAgJ25hdi1sYWJlbCc6IHRydWUsXG4gICAgICAnYWN0aXZlJzogdHJ1ZVxuICAgIH07XG4gICAgY29uc3QgaXRlbUNsYXNzID0gdGhpcy5pdGVtLmNsYXNzO1xuICAgIGxhYmVsQ2xhc3NbaXRlbUNsYXNzXSA9ICEhaXRlbUNsYXNzO1xuICAgIHJldHVybiBsYWJlbENsYXNzO1xuICB9XG4gIGdldExhYmVsSWNvbkNsYXNzKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLmhlbHBlci5nZXRJY29uQ2xhc3ModGhpcy5pdGVtKTtcbiAgICBjb25zdCB2YXJpYW50ID0gYHRleHQtJHt0aGlzLml0ZW0ubGFiZWwudmFyaWFudH1gO1xuICAgIGNsYXNzZXNbdmFyaWFudF0gPSAhIXZhcmlhbnQ7XG4gICAgY29uc3QgbGFiZWxDbGFzcyA9IHRoaXMuaXRlbS5sYWJlbC5jbGFzcztcbiAgICBjbGFzc2VzW2xhYmVsQ2xhc3NdID0gISFsYWJlbENsYXNzO1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG59XG4iXX0=