/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
export class AppSidebarNavLabelComponent {
    /**
     * @param {?} helper
     */
    constructor(helper) {
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
    ngOnInit() {
        this.iconClasses = this.helper.getIconClass(this.item);
    }
    /**
     * @return {?}
     */
    getItemClass() {
        /** @type {?} */
        const itemClass = this.item.class;
        this.classes[itemClass] = !!itemClass;
        return this.classes;
    }
    /**
     * @return {?}
     */
    getLabelIconClass() {
        /** @type {?} */
        const variant = `text-${this.item.label.variant}`;
        this.iconClasses[variant] = !!this.item.label.variant;
        /** @type {?} */
        const labelClass = this.item.label.class;
        this.iconClasses[labelClass] = !!labelClass;
        return this.iconClasses;
    }
}
AppSidebarNavLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar-nav-label',
                template: "<a [ngClass]=\"getItemClass()\"\n   href=\"{{item.url}}\"\n   [appHtmlAttr]=\"item.attributes\">\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\n  <ng-container>{{item.name}}</ng-container>\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\n</a>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQU01RCxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBU3RDLFlBQ1MsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFQekIsWUFBTyxHQUFHO1lBQ2hCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQztRQUNNLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBSXJCLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELFlBQVk7O2NBQ0osU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFDRCxpQkFBaUI7O2NBQ1QsT0FBTyxHQUFHLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1FBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7Y0FDaEQsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLDRWQUFxRDthQUN0RDs7OztZQUxPLGdCQUFnQjs7O21CQU9yQixLQUFLOzs7O0lBQU4sMkNBQW1COzs7OztJQUVuQiw4Q0FHRTs7Ozs7SUFDRixrREFBeUI7O0lBR3ZCLDZDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2lkZWJhck5hdkhlbHBlcn0gZnJvbSAnLi4vYXBwLXNpZGViYXItbmF2LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtbGFiZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLXNpZGViYXItbmF2LWxhYmVsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2TGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpdGVtOiBhbnk7XG5cbiAgcHJpdmF0ZSBjbGFzc2VzID0ge1xuICAgICduYXYtbGFiZWwnOiB0cnVlLFxuICAgICdhY3RpdmUnOiB0cnVlXG4gIH07XG4gIHByaXZhdGUgaWNvbkNsYXNzZXMgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pY29uQ2xhc3NlcyA9IHRoaXMuaGVscGVyLmdldEljb25DbGFzcyh0aGlzLml0ZW0pO1xuICB9XG5cbiAgZ2V0SXRlbUNsYXNzKCkge1xuICAgIGNvbnN0IGl0ZW1DbGFzcyA9IHRoaXMuaXRlbS5jbGFzcztcbiAgICB0aGlzLmNsYXNzZXNbaXRlbUNsYXNzXSA9ICEhaXRlbUNsYXNzO1xuICAgIHJldHVybiB0aGlzLmNsYXNzZXM7XG4gIH1cbiAgZ2V0TGFiZWxJY29uQ2xhc3MoKSB7XG4gICAgY29uc3QgdmFyaWFudCA9IGB0ZXh0LSR7dGhpcy5pdGVtLmxhYmVsLnZhcmlhbnR9YDtcbiAgICB0aGlzLmljb25DbGFzc2VzW3ZhcmlhbnRdID0gISF0aGlzLml0ZW0ubGFiZWwudmFyaWFudDtcbiAgICBjb25zdCBsYWJlbENsYXNzID0gdGhpcy5pdGVtLmxhYmVsLmNsYXNzO1xuICAgIHRoaXMuaWNvbkNsYXNzZXNbbGFiZWxDbGFzc10gPSAhIWxhYmVsQ2xhc3M7XG4gICAgcmV0dXJuIHRoaXMuaWNvbkNsYXNzZXM7XG4gIH1cbn1cbiJdfQ==