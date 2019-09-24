/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
var AppSidebarNavLinkComponent = /** @class */ (function () {
    function AppSidebarNavLinkComponent(document, renderer, helper) {
        this.document = document;
        this.renderer = renderer;
        this.helper = helper;
        this.classes = { 'nav-link': true };
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
        this.classes['disabled'] = disabled;
        this.classes['btn-link'] = disabled;
        if (this.hasVariant()) {
            /** @type {?} */
            var variant = "nav-link-" + this.item.variant;
            this.classes[variant] = true;
        }
        return this.classes;
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
    AppSidebarNavLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-nav-link',
                    template: "<ng-container [ngSwitch]=\"linkType\">\r\n  <a *ngSwitchCase=\"'external'\"\r\n    [ngClass]=\"getLinkClass()\"\r\n    href=\"{{item.url}}\"\r\n    [appHtmlAttr]=\"item.attributes\">\r\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"item | appSidebarNavIcon\"></i>\r\n    <ng-container>{{item.name}}</ng-container>\r\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\r\n  </a>\r\n  <a *ngSwitchDefault\r\n     [ngClass]=\"getLinkClass()\"\r\n     [appHtmlAttr]=\"item.attributes\"\r\n     [attr.disabled]=\"isDisabled()\"\r\n     routerLinkActive=\"active\"\r\n     [routerLink]=\"[item.url]\"\r\n     (click)=\"hideMobile()\">\r\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"item | appSidebarNavIcon\"></i>\r\n    <ng-container>{{item.name}}</ng-container>\r\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\r\n  </a>\r\n</ng-container>\r\n",
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
    AppSidebarNavLinkComponent.prototype.classes;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFNUQ7SUFZRSxvQ0FDNEIsUUFBYSxFQUMvQixRQUFtQixFQUNwQixNQUF3QjtRQUZMLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUx6QixZQUFPLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFNbkMsQ0FBQzs7OztJQUVMLDZDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFTSxpREFBWTs7O0lBQW5COztZQUNRLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFOztnQkFDZixPQUFPLEdBQUcsY0FBWSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQVM7WUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDOUI7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVNLGdEQUFXOzs7SUFBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDckQsQ0FBQzs7OztJQUVNLCtDQUFVOzs7SUFBakI7UUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUM3QixDQUFDOzs7O0lBRU0sK0NBQVU7OztJQUFqQjtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0UsQ0FBQzs7OztJQUVNLG1EQUFjOzs7SUFBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFTSwrQ0FBVTs7O0lBQWpCO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQy9EO0lBQ0gsQ0FBQzs7Z0JBdERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQywwOUJBQW9EO29CQUNwRCxTQUFTLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTtpQkFDaEM7Ozs7Z0RBU0ksTUFBTSxTQUFDLFFBQVE7Z0JBakJzQixTQUFTO2dCQUUzQyxnQkFBZ0I7Ozt1QkFRckIsS0FBSzs7SUFpRFIsaUNBQUM7Q0FBQSxBQXZERCxJQXVEQztTQWxEWSwwQkFBMEI7OztJQUNyQywwQ0FBbUI7O0lBQ25CLDhDQUF3Qjs7SUFDeEIsMENBQW9COzs7OztJQUVwQiw2Q0FBdUM7Ozs7O0lBR3JDLDhDQUF1Qzs7Ozs7SUFDdkMsOENBQTJCOztJQUMzQiw0Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWxpbmsnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtc2lkZWJhci1uYXYtbGluay5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbIFNpZGViYXJOYXZIZWxwZXIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcclxuICBwdWJsaWMgbGlua1R5cGU6IHN0cmluZztcclxuICBwdWJsaWMgaHJlZjogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGNsYXNzZXMgPSB7ICduYXYtbGluayc6IHRydWUgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmxpbmtUeXBlID0gdGhpcy5nZXRMaW5rVHlwZSgpO1xyXG4gICAgdGhpcy5ocmVmID0gdGhpcy5pc0Rpc2FibGVkKCkgPyAnJyA6IHRoaXMuaXRlbS51cmw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGlua0NsYXNzKCkge1xyXG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcclxuICAgIHRoaXMuY2xhc3Nlc1snZGlzYWJsZWQnXSA9IGRpc2FibGVkO1xyXG4gICAgdGhpcy5jbGFzc2VzWydidG4tbGluayddID0gZGlzYWJsZWQ7XHJcbiAgICBpZiAodGhpcy5oYXNWYXJpYW50KCkpIHtcclxuICAgICAgY29uc3QgdmFyaWFudCA9IGBuYXYtbGluay0ke3RoaXMuaXRlbS52YXJpYW50fWA7XHJcbiAgICAgIHRoaXMuY2xhc3Nlc1t2YXJpYW50XSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jbGFzc2VzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExpbmtUeXBlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNFeHRlcm5hbExpbmsoKSA/ICdleHRlcm5hbCcgOiAnbGluayc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFzVmFyaWFudCgpIHtcclxuICAgIHJldHVybiAhIXRoaXMuaXRlbS52YXJpYW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzRGlzYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuaXRlbS5hdHRyaWJ1dGVzICYmIHRoaXMuaXRlbS5hdHRyaWJ1dGVzLmRpc2FibGVkKSA/IHRydWUgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzRXh0ZXJuYWxMaW5rKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbS51cmwuc3Vic3RyaW5nKDAsIDQpID09PSAnaHR0cCc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGlkZU1vYmlsZSgpIHtcclxuICAgIGlmICh0aGlzLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLXNob3cnKSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItc2hvdycpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=