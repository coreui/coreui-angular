/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
var AppSidebarNavLinkComponent = /** @class */ (function () {
    function AppSidebarNavLinkComponent(document, renderer, helper) {
        this.document = document;
        this.renderer = renderer;
        this.helper = helper;
    }
    /**
     * @return {?}
     */
    AppSidebarNavLinkComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.linkType = this.getLinkType();
        this.href = this.isDisabled() ? '' : this.item.url;
        this.checkRouterLinkActiveOptions();
    };
    /**
     * @return {?}
     */
    AppSidebarNavLinkComponent.prototype.getLinkClass = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var disabled = this.isDisabled();
        /** @type {?} */
        var classes = {
            'nav-link': true,
            'disabled': disabled,
            'btn-link': disabled
        };
        if (this.hasVariant()) {
            /** @type {?} */
            var variant = "nav-link-" + this.item.variant;
            classes[variant] = true;
        }
        return classes;
    };
    /**
     * @return {?}
     */
    AppSidebarNavLinkComponent.prototype.getLinkType = /**
     * @return {?}
     */
    function () {
        return this.isExternalLink() ? 'external' : 'link';
    };
    /**
     * @return {?}
     */
    AppSidebarNavLinkComponent.prototype.hasVariant = /**
     * @return {?}
     */
    function () {
        return !!this.item.variant;
    };
    /**
     * @return {?}
     */
    AppSidebarNavLinkComponent.prototype.isDisabled = /**
     * @return {?}
     */
    function () {
        return (this.item.attributes && this.item.attributes.disabled) ? true : null;
    };
    /**
     * @return {?}
     */
    AppSidebarNavLinkComponent.prototype.isExternalLink = /**
     * @return {?}
     */
    function () {
        return this.item.url.substring(0, 4) === 'http';
    };
    /**
     * @return {?}
     */
    AppSidebarNavLinkComponent.prototype.hideMobile = /**
     * @return {?}
     */
    function () {
        if (this.document.body.classList.contains('sidebar-show')) {
            this.renderer.removeClass(this.document.body, 'sidebar-show');
        }
    };
    /**
     * @return {?}
     */
    AppSidebarNavLinkComponent.prototype.checkRouterLinkActiveOptions = /**
     * @return {?}
     */
    function () {
        if (!this.item.routerLinkActiveOptions) {
            this.item.routerLinkActiveOptions = {
                exact: false
            };
        }
    };
    AppSidebarNavLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-nav-link',
                    template: "<ng-container [ngSwitch]=\"linkType\">\r\n  <a *ngSwitchCase=\"'external'\"\r\n    [ngClass]=\"getLinkClass()\"\r\n    href=\"{{item.url}}\"\r\n    [appHtmlAttr]=\"item.attributes\">\r\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"helper.getIconClass(item)\"></i>\r\n    <ng-container>{{item.name}}</ng-container>\r\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\r\n  </a>\r\n  <a *ngSwitchDefault\r\n     [ngClass]=\"getLinkClass()\"\r\n     [appHtmlAttr]=\"item.attributes\"\r\n     [attr.disabled]=\"isDisabled()\"\r\n     routerLinkActive=\"active\"\r\n     [routerLink]=\"[item.url]\"\r\n     [routerLinkActiveOptions]=\"item.routerLinkActiveOptions\"\r\n     (click)=\"hideMobile()\">\r\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"helper.getIconClass(item)\"></i>\r\n    <ng-container>{{item.name}}</ng-container>\r\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\r\n  </a>\r\n</ng-container>\r\n",
                    providers: [SidebarNavHelper]
                }] }
    ];
    /** @nocollapse */
    AppSidebarNavLinkComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: SidebarNavHelper }
    ]; };
    AppSidebarNavLinkComponent.propDecorators = {
        item: [{ type: Input }]
    };
    return AppSidebarNavLinkComponent;
}());
export { AppSidebarNavLinkComponent };
if (false) {
    /** @type {?} */
    AppSidebarNavLinkComponent.prototype.item;
    /** @type {?} */
    AppSidebarNavLinkComponent.prototype.linkType;
    /** @type {?} */
    AppSidebarNavLinkComponent.prototype.href;
    /**
     * @type {?}
     * @private
     */
    AppSidebarNavLinkComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    AppSidebarNavLinkComponent.prototype.renderer;
    /** @type {?} */
    AppSidebarNavLinkComponent.prototype.helper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFNUQ7SUFVRSxvQ0FDNEIsUUFBYSxFQUMvQixRQUFtQixFQUNwQixNQUF3QjtRQUZMLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM3QixDQUFDOzs7O0lBRUwsNkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbkQsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVNLGlEQUFZOzs7SUFBbkI7O1lBQ1EsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7O1lBQzVCLE9BQU8sR0FBRztZQUNkLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFVBQVUsRUFBRSxRQUFRO1NBQ3JCO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUU7O2dCQUNmLE9BQU8sR0FBRyxjQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBUztZQUMvQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7OztJQUVNLGdEQUFXOzs7SUFBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDckQsQ0FBQzs7OztJQUVNLCtDQUFVOzs7SUFBakI7UUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUM3QixDQUFDOzs7O0lBRU0sK0NBQVU7OztJQUFqQjtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0UsQ0FBQzs7OztJQUVNLG1EQUFjOzs7SUFBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFTSwrQ0FBVTs7O0lBQWpCO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQy9EO0lBQ0gsQ0FBQzs7OztJQUVNLGlFQUE0Qjs7O0lBQW5DO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsR0FBRztnQkFDbEMsS0FBSyxFQUFFLEtBQUs7YUFDYixDQUFDO1NBQ0g7SUFDSCxDQUFDOztnQkFoRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLGlpQ0FBb0Q7b0JBQ3BELFNBQVMsRUFBRSxDQUFFLGdCQUFnQixDQUFFO2lCQUNoQzs7OztnREFPSSxNQUFNLFNBQUMsUUFBUTtnQkFmc0IsU0FBUztnQkFFM0MsZ0JBQWdCOzs7dUJBUXJCLEtBQUs7O0lBMkRSLGlDQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0E1RFksMEJBQTBCOzs7SUFDckMsMENBQW1COztJQUNuQiw4Q0FBd0I7O0lBQ3hCLDBDQUFvQjs7Ozs7SUFHbEIsOENBQXVDOzs7OztJQUN2Qyw4Q0FBMkI7O0lBQzNCLDRDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7U2lkZWJhck5hdkhlbHBlcn0gZnJvbSAnLi4vYXBwLXNpZGViYXItbmF2LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtbGluaycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC1zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFsgU2lkZWJhck5hdkhlbHBlciBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaXRlbTogYW55O1xyXG4gIHB1YmxpYyBsaW5rVHlwZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBocmVmOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlclxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5saW5rVHlwZSA9IHRoaXMuZ2V0TGlua1R5cGUoKTtcclxuICAgIHRoaXMuaHJlZiA9IHRoaXMuaXNEaXNhYmxlZCgpID8gJycgOiB0aGlzLml0ZW0udXJsO1xyXG4gICAgdGhpcy5jaGVja1JvdXRlckxpbmtBY3RpdmVPcHRpb25zKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGlua0NsYXNzKCkge1xyXG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgICAgICduYXYtbGluayc6IHRydWUsXHJcbiAgICAgICdkaXNhYmxlZCc6IGRpc2FibGVkLFxyXG4gICAgICAnYnRuLWxpbmsnOiBkaXNhYmxlZFxyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLmhhc1ZhcmlhbnQoKSkge1xyXG4gICAgICBjb25zdCB2YXJpYW50ID0gYG5hdi1saW5rLSR7dGhpcy5pdGVtLnZhcmlhbnR9YDtcclxuICAgICAgY2xhc3Nlc1t2YXJpYW50XSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhc3NlcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRMaW5rVHlwZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmlzRXh0ZXJuYWxMaW5rKCkgPyAnZXh0ZXJuYWwnIDogJ2xpbmsnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhc1ZhcmlhbnQoKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLml0ZW0udmFyaWFudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0Rpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuICh0aGlzLml0ZW0uYXR0cmlidXRlcyAmJiB0aGlzLml0ZW0uYXR0cmlidXRlcy5kaXNhYmxlZCkgPyB0cnVlIDogbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0V4dGVybmFsTGluaygpIHtcclxuICAgIHJldHVybiB0aGlzLml0ZW0udXJsLnN1YnN0cmluZygwLCA0KSA9PT0gJ2h0dHAnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGVNb2JpbGUoKSB7XHJcbiAgICBpZiAodGhpcy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1zaG93JykpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdzaWRlYmFyLXNob3cnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGVja1JvdXRlckxpbmtBY3RpdmVPcHRpb25zKCkge1xyXG4gICAgaWYgKCF0aGlzLml0ZW0ucm91dGVyTGlua0FjdGl2ZU9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5pdGVtLnJvdXRlckxpbmtBY3RpdmVPcHRpb25zID0ge1xyXG4gICAgICAgIGV4YWN0OiBmYWxzZVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=