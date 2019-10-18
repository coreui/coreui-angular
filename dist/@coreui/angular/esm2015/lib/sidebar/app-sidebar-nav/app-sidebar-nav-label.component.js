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
                selector: 'app-sidebar-nav-label, cui-sidebar-nav-label',
                template: "<a [ngClass]=\"getItemClass()\"\r\n   href=\"{{item.url}}\"\r\n   [appHtmlAttr]=\"item.attributes\">\r\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\r\n  <ng-container>{{item.name}}</ng-container>\r\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\r\n</a>\r\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQU01RCxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBU3RDLFlBQ1MsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFQekIsWUFBTyxHQUFHO1lBQ2hCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQztRQUNNLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBSXJCLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELFlBQVk7O2NBQ0osU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFDRCxpQkFBaUI7O2NBQ1QsT0FBTyxHQUFHLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1FBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7Y0FDaEQsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4Q0FBOEM7Z0JBQ3hELDBXQUFxRDthQUN0RDs7OztZQUxPLGdCQUFnQjs7O21CQU9yQixLQUFLOzs7O0lBQU4sMkNBQW1COzs7OztJQUVuQiw4Q0FHRTs7Ozs7SUFDRixrREFBeUI7O0lBR3ZCLDZDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtTaWRlYmFyTmF2SGVscGVyfSBmcm9tICcuLi9hcHAtc2lkZWJhci1uYXYuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1sYWJlbCwgY3VpLXNpZGViYXItbmF2LWxhYmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLXNpZGViYXItbmF2LWxhYmVsLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkxhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpdGVtOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgY2xhc3NlcyA9IHtcclxuICAgICduYXYtbGFiZWwnOiB0cnVlLFxyXG4gICAgJ2FjdGl2ZSc6IHRydWVcclxuICB9O1xyXG4gIHByaXZhdGUgaWNvbkNsYXNzZXMgPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmljb25DbGFzc2VzID0gdGhpcy5oZWxwZXIuZ2V0SWNvbkNsYXNzKHRoaXMuaXRlbSk7XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtQ2xhc3MoKSB7XHJcbiAgICBjb25zdCBpdGVtQ2xhc3MgPSB0aGlzLml0ZW0uY2xhc3M7XHJcbiAgICB0aGlzLmNsYXNzZXNbaXRlbUNsYXNzXSA9ICEhaXRlbUNsYXNzO1xyXG4gICAgcmV0dXJuIHRoaXMuY2xhc3NlcztcclxuICB9XHJcbiAgZ2V0TGFiZWxJY29uQ2xhc3MoKSB7XHJcbiAgICBjb25zdCB2YXJpYW50ID0gYHRleHQtJHt0aGlzLml0ZW0ubGFiZWwudmFyaWFudH1gO1xyXG4gICAgdGhpcy5pY29uQ2xhc3Nlc1t2YXJpYW50XSA9ICEhdGhpcy5pdGVtLmxhYmVsLnZhcmlhbnQ7XHJcbiAgICBjb25zdCBsYWJlbENsYXNzID0gdGhpcy5pdGVtLmxhYmVsLmNsYXNzO1xyXG4gICAgdGhpcy5pY29uQ2xhc3Nlc1tsYWJlbENsYXNzXSA9ICEhbGFiZWxDbGFzcztcclxuICAgIHJldHVybiB0aGlzLmljb25DbGFzc2VzO1xyXG4gIH1cclxufVxyXG4iXX0=