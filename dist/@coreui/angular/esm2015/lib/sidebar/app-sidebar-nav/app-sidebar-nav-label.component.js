/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
export class AppSidebarNavLabelComponent {
    /**
     * @param {?} helper
     */
    constructor(helper) {
        this.helper = helper;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    getItemClass() {
        /** @type {?} */
        const labelClass = {
            'nav-label': true,
            'active': true
        };
        /** @type {?} */
        const itemClass = this.item.class;
        labelClass[itemClass] = !!itemClass;
        return labelClass;
    }
    /**
     * @return {?}
     */
    getLabelIconClass() {
        /** @type {?} */
        const classes = this.helper.getIconClass(this.item);
        /** @type {?} */
        const variant = `text-${this.item.label.variant}`;
        classes[variant] = !!variant;
        /** @type {?} */
        const labelClass = this.item.label.class;
        classes[labelClass] = !!labelClass;
        return classes;
    }
}
AppSidebarNavLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar-nav-label',
                template: "<a [ngClass]=\"getItemClass()\"\n   href=\"{{item.url}}\"\n   [appHtmlAttr]=\"item.attributes\">\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\n  <ng-container>{{item.name}}</ng-container>\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n</a>\n"
            }] }
];
/** @nocollapse */
AppSidebarNavLabelComponent.ctorParameters = () => [
    { type: SidebarNavHelper }
];
AppSidebarNavLabelComponent.propDecorators = {
    item: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AppSidebarNavLabelComponent.prototype.item;
    /** @type {?} */
    AppSidebarNavLabelComponent.prototype.helper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQU01RCxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBR3RDLFlBQ1MsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFDN0IsQ0FBQzs7OztJQUVMLFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsWUFBWTs7Y0FDSixVQUFVLEdBQUc7WUFDakIsV0FBVyxFQUFFLElBQUk7WUFDakIsUUFBUSxFQUFFLElBQUk7U0FDZjs7Y0FDSyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1FBQ2pDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3BDLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFDRCxpQkFBaUI7O2NBQ1QsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7O2NBQzdDLE9BQU8sR0FBRyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtRQUNqRCxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQzs7Y0FDdkIsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7UUFDeEMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDbkMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7O1lBOUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyw2VkFBcUQ7YUFDdEQ7Ozs7WUFMTyxnQkFBZ0I7OzttQkFPckIsS0FBSzs7OztJQUFOLDJDQUFtQjs7SUFHakIsNkNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTaWRlYmFyTmF2SGVscGVyfSBmcm9tICcuLi9hcHAtc2lkZWJhci1uYXYuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1sYWJlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZMYWJlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBnZXRJdGVtQ2xhc3MoKSB7XG4gICAgY29uc3QgbGFiZWxDbGFzcyA9IHtcbiAgICAgICduYXYtbGFiZWwnOiB0cnVlLFxuICAgICAgJ2FjdGl2ZSc6IHRydWVcbiAgICB9O1xuICAgIGNvbnN0IGl0ZW1DbGFzcyA9IHRoaXMuaXRlbS5jbGFzcztcbiAgICBsYWJlbENsYXNzW2l0ZW1DbGFzc10gPSAhIWl0ZW1DbGFzcztcbiAgICByZXR1cm4gbGFiZWxDbGFzcztcbiAgfVxuICBnZXRMYWJlbEljb25DbGFzcygpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5oZWxwZXIuZ2V0SWNvbkNsYXNzKHRoaXMuaXRlbSk7XG4gICAgY29uc3QgdmFyaWFudCA9IGB0ZXh0LSR7dGhpcy5pdGVtLmxhYmVsLnZhcmlhbnR9YDtcbiAgICBjbGFzc2VzW3ZhcmlhbnRdID0gISF2YXJpYW50O1xuICAgIGNvbnN0IGxhYmVsQ2xhc3MgPSB0aGlzLml0ZW0ubGFiZWwuY2xhc3M7XG4gICAgY2xhc3Nlc1tsYWJlbENsYXNzXSA9ICEhbGFiZWxDbGFzcztcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxufVxuIl19