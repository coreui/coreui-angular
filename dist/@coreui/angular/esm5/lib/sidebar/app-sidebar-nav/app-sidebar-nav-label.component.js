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
                    template: "<a [ngClass]=\"getItemClass()\"\r\n   href=\"{{item.url}}\"\r\n   [appHtmlAttr]=\"item.attributes\">\r\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\r\n  <ng-container>{{item.name}}</ng-container>\r\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\r\n</a>\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RDtJQU9FLHFDQUNTLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzdCLENBQUM7Ozs7SUFFTCw4Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsa0RBQVk7OztJQUFaOztZQUNRLFVBQVUsR0FBRztZQUNqQixXQUFXLEVBQUUsSUFBSTtZQUNqQixRQUFRLEVBQUUsSUFBSTtTQUNmOztZQUNLLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7UUFDakMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEMsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7OztJQUNELHVEQUFpQjs7O0lBQWpCOztZQUNRLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOztZQUM3QyxPQUFPLEdBQUcsVUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFTO1FBQ2pELE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDOztZQUN2QixVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztRQUN4QyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLDJXQUFxRDtpQkFDdEQ7Ozs7Z0JBTE8sZ0JBQWdCOzs7dUJBT3JCLEtBQUs7O0lBMEJSLGtDQUFDO0NBQUEsQUEvQkQsSUErQkM7U0EzQlksMkJBQTJCOzs7SUFDdEMsMkNBQW1COztJQUdqQiw2Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7U2lkZWJhck5hdkhlbHBlcn0gZnJvbSAnLi4vYXBwLXNpZGViYXItbmF2LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtbGFiZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2TGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtQ2xhc3MoKSB7XHJcbiAgICBjb25zdCBsYWJlbENsYXNzID0ge1xyXG4gICAgICAnbmF2LWxhYmVsJzogdHJ1ZSxcclxuICAgICAgJ2FjdGl2ZSc6IHRydWVcclxuICAgIH07XHJcbiAgICBjb25zdCBpdGVtQ2xhc3MgPSB0aGlzLml0ZW0uY2xhc3M7XHJcbiAgICBsYWJlbENsYXNzW2l0ZW1DbGFzc10gPSAhIWl0ZW1DbGFzcztcclxuICAgIHJldHVybiBsYWJlbENsYXNzO1xyXG4gIH1cclxuICBnZXRMYWJlbEljb25DbGFzcygpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLmhlbHBlci5nZXRJY29uQ2xhc3ModGhpcy5pdGVtKTtcclxuICAgIGNvbnN0IHZhcmlhbnQgPSBgdGV4dC0ke3RoaXMuaXRlbS5sYWJlbC52YXJpYW50fWA7XHJcbiAgICBjbGFzc2VzW3ZhcmlhbnRdID0gISF2YXJpYW50O1xyXG4gICAgY29uc3QgbGFiZWxDbGFzcyA9IHRoaXMuaXRlbS5sYWJlbC5jbGFzcztcclxuICAgIGNsYXNzZXNbbGFiZWxDbGFzc10gPSAhIWxhYmVsQ2xhc3M7XHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxuICB9XHJcbn1cclxuIl19