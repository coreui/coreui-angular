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
                    template: "<ng-container [ngSwitch]=\"linkType\">\n  <a *ngSwitchCase=\"'external'\"\n    [ngClass]=\"getLinkClass()\"\n    href=\"{{item.url}}\"\n    [appHtmlAttr]=\"item.attributes\">\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"item | appSidebarNavIcon\"></i>\n    <ng-container>{{item.name}}</ng-container>\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\n  </a>\n  <a *ngSwitchDefault\n     [ngClass]=\"getLinkClass()\"\n     [appHtmlAttr]=\"item.attributes\"\n     [attr.disabled]=\"isDisabled()\"\n     routerLinkActive=\"active\"\n     [routerLink]=\"[item.url]\"\n     (click)=\"hideMobile()\">\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"item | appSidebarNavIcon\"></i>\n    <ng-container>{{item.name}}</ng-container>\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\n  </a>\n</ng-container>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFNUQ7SUFZRSxvQ0FDNEIsUUFBYSxFQUMvQixRQUFtQixFQUNwQixNQUF3QjtRQUZMLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUx6QixZQUFPLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFNbkMsQ0FBQzs7OztJQUVMLDZDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFTSxpREFBWTs7O0lBQW5COztZQUNRLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFOztnQkFDZixPQUFPLEdBQUcsY0FBWSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQVM7WUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDOUI7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVNLGdEQUFXOzs7SUFBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDckQsQ0FBQzs7OztJQUVNLCtDQUFVOzs7SUFBakI7UUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUM3QixDQUFDOzs7O0lBRU0sK0NBQVU7OztJQUFqQjtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0UsQ0FBQzs7OztJQUVNLG1EQUFjOzs7SUFBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFTSwrQ0FBVTs7O0lBQWpCO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQy9EO0lBQ0gsQ0FBQzs7Z0JBdERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxnN0JBQW9EO29CQUNwRCxTQUFTLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTtpQkFDaEM7Ozs7Z0RBU0ksTUFBTSxTQUFDLFFBQVE7Z0JBakJzQixTQUFTO2dCQUUzQyxnQkFBZ0I7Ozt1QkFRckIsS0FBSzs7SUFpRFIsaUNBQUM7Q0FBQSxBQXZERCxJQXVEQztTQWxEWSwwQkFBMEI7OztJQUNyQywwQ0FBbUI7O0lBQ25CLDhDQUF3Qjs7SUFDeEIsMENBQW9COzs7OztJQUVwQiw2Q0FBdUM7Ozs7O0lBR3JDLDhDQUF1Qzs7Ozs7SUFDdkMsOENBQTJCOztJQUMzQiw0Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7U2lkZWJhck5hdkhlbHBlcn0gZnJvbSAnLi4vYXBwLXNpZGViYXItbmF2LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtc2lkZWJhci1uYXYtbGluay5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogWyBTaWRlYmFyTmF2SGVscGVyIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpdGVtOiBhbnk7XG4gIHB1YmxpYyBsaW5rVHlwZTogc3RyaW5nO1xuICBwdWJsaWMgaHJlZjogc3RyaW5nO1xuXG4gIHByaXZhdGUgY2xhc3NlcyA9IHsgJ25hdi1saW5rJzogdHJ1ZSB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlclxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGlua1R5cGUgPSB0aGlzLmdldExpbmtUeXBlKCk7XG4gICAgdGhpcy5ocmVmID0gdGhpcy5pc0Rpc2FibGVkKCkgPyAnJyA6IHRoaXMuaXRlbS51cmw7XG4gIH1cblxuICBwdWJsaWMgZ2V0TGlua0NsYXNzKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG4gICAgdGhpcy5jbGFzc2VzWydkaXNhYmxlZCddID0gZGlzYWJsZWQ7XG4gICAgdGhpcy5jbGFzc2VzWydidG4tbGluayddID0gZGlzYWJsZWQ7XG4gICAgaWYgKHRoaXMuaGFzVmFyaWFudCgpKSB7XG4gICAgICBjb25zdCB2YXJpYW50ID0gYG5hdi1saW5rLSR7dGhpcy5pdGVtLnZhcmlhbnR9YDtcbiAgICAgIHRoaXMuY2xhc3Nlc1t2YXJpYW50XSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNsYXNzZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0TGlua1R5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNFeHRlcm5hbExpbmsoKSA/ICdleHRlcm5hbCcgOiAnbGluayc7XG4gIH1cblxuICBwdWJsaWMgaGFzVmFyaWFudCgpIHtcbiAgICByZXR1cm4gISF0aGlzLml0ZW0udmFyaWFudDtcbiAgfVxuXG4gIHB1YmxpYyBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiAodGhpcy5pdGVtLmF0dHJpYnV0ZXMgJiYgdGhpcy5pdGVtLmF0dHJpYnV0ZXMuZGlzYWJsZWQpID8gdHJ1ZSA6IG51bGw7XG4gIH1cblxuICBwdWJsaWMgaXNFeHRlcm5hbExpbmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbS51cmwuc3Vic3RyaW5nKDAsIDQpID09PSAnaHR0cCc7XG4gIH1cblxuICBwdWJsaWMgaGlkZU1vYmlsZSgpIHtcbiAgICBpZiAodGhpcy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1zaG93JykpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnc2lkZWJhci1zaG93Jyk7XG4gICAgfVxuICB9XG59XG4iXX0=