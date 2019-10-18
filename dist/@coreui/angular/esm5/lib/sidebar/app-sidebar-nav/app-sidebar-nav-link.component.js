/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
var AppSidebarNavLinkContentComponent = /** @class */ (function () {
    function AppSidebarNavLinkContentComponent(helper) {
        this.helper = helper;
    }
    AppSidebarNavLinkContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-nav-link-content, cui-sidebar-nav-link-content',
                    template: "\n    <ng-container *ngIf=\"true\">\n      <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"item | appSidebarNavIcon\"></i>\n      <ng-container>{{item.name}}</ng-container>\n      <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\n    </ng-container>\n  ",
                    providers: [SidebarNavHelper]
                }] }
    ];
    /** @nocollapse */
    AppSidebarNavLinkContentComponent.ctorParameters = function () { return [
        { type: SidebarNavHelper }
    ]; };
    AppSidebarNavLinkContentComponent.propDecorators = {
        item: [{ type: Input }]
    };
    return AppSidebarNavLinkContentComponent;
}());
export { AppSidebarNavLinkContentComponent };
if (false) {
    /** @type {?} */
    AppSidebarNavLinkContentComponent.prototype.item;
    /** @type {?} */
    AppSidebarNavLinkContentComponent.prototype.helper;
}
var AppSidebarNavLinkComponent = /** @class */ (function () {
    function AppSidebarNavLinkComponent(router) {
        this.router = router;
        this.linkClick = new EventEmitter();
        this.navigationEndObservable = (/** @type {?} */ (router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event instanceof NavigationEnd;
        })))));
    }
    Object.defineProperty(AppSidebarNavLinkComponent.prototype, "item", {
        get: /**
         * @return {?}
         */
        function () {
            return this._item;
        },
        set: /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this._item = JSON.parse(JSON.stringify(item));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AppSidebarNavLinkComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.url = typeof this.item.url === 'string' ? this.item.url : this.router.serializeUrl(this.router.createUrlTree(this.item.url));
        this.linkType = this.getLinkType();
        this.href = this.isDisabled() ? '' : (this.item.href || this.url);
        this.linkActive = this.router.url.split(/[?#(;]/)[0] === this.href.split(/[?#(;]/)[0];
        this.navSubscription = this.navigationEndObservable.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var itemUrlArray = _this.href.split(/[?#(;]/)[0].split('/');
            /** @type {?} */
            var urlArray = event.urlAfterRedirects.split(/[?#(;]/)[0].split('/');
            _this.linkActive = itemUrlArray.every((/**
             * @param {?} value
             * @param {?} index
             * @return {?}
             */
            function (value, index) { return value === urlArray[index]; }));
        }));
    };
    /**
     * @return {?}
     */
    AppSidebarNavLinkComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.navSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    AppSidebarNavLinkComponent.prototype.getLinkType = /**
     * @return {?}
     */
    function () {
        return this.isDisabled() ? 'disabled' : this.isExternalLink() ? 'external' : 'link';
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
        return !!this.item.href || this.url.substring(0, 4) === 'http';
    };
    /**
     * @return {?}
     */
    AppSidebarNavLinkComponent.prototype.linkClicked = /**
     * @return {?}
     */
    function () {
        this.linkClick.emit();
    };
    AppSidebarNavLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-nav-link, cui-sidebar-nav-link',
                    template: "<ng-container [ngSwitch]=\"linkType\">\r\n  <a *ngSwitchCase=\"'disabled'\"\r\n     [ngClass]=\"item | appSidebarNavLink\"\r\n     [appHtmlAttr]=\"item.attributes\"\r\n  >\r\n    <app-sidebar-nav-link-content [item]=\"item\"></app-sidebar-nav-link-content>\r\n  </a>\r\n  <a *ngSwitchCase=\"'external'\"\r\n     [ngClass]=\"item | appSidebarNavLink\"\r\n     [href]=\"href\"\r\n     [appHtmlAttr]=\"item.attributes\"\r\n     (click)=\"linkClicked()\"\r\n  >\r\n    <app-sidebar-nav-link-content [item]=\"item\"></app-sidebar-nav-link-content>\r\n  </a>\r\n  <a *ngSwitchDefault\r\n     [ngClass]=\"item | appSidebarNavLink\"\r\n     [appHtmlAttr]=\"item.attributes\"\r\n     [target]=\"item.attributes?.target\"\r\n     [queryParams]=\"item.linkProps?.queryParams\"\r\n     [fragment]=\"item.linkProps?.fragment\"\r\n     [queryParamsHandling]=\"item.linkProps?.queryParamsHandling\"\r\n     [preserveFragment]=\"item.linkProps?.preserveFragment\"\r\n     [skipLocationChange]=\"item.linkProps?.skipLocationChange\"\r\n     [replaceUrl]=\"item.linkProps?.replaceUrl\"\r\n     [state]=\"item.linkProps?.state\"\r\n     [routerLink]=\"item.url\"\r\n     [class.active]=\"linkActive\"\r\n     (click)=\"linkClicked()\"\r\n  >\r\n    <app-sidebar-nav-link-content [item]=\"item\"></app-sidebar-nav-link-content>\r\n  </a>\r\n</ng-container>\r\n",
                    providers: [SidebarNavHelper]
                }] }
    ];
    /** @nocollapse */
    AppSidebarNavLinkComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    AppSidebarNavLinkComponent.propDecorators = {
        item: [{ type: Input }],
        linkClick: [{ type: Output }]
    };
    return AppSidebarNavLinkComponent;
}());
export { AppSidebarNavLinkComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AppSidebarNavLinkComponent.prototype._item;
    /** @type {?} */
    AppSidebarNavLinkComponent.prototype.linkClick;
    /** @type {?} */
    AppSidebarNavLinkComponent.prototype.linkType;
    /** @type {?} */
    AppSidebarNavLinkComponent.prototype.href;
    /** @type {?} */
    AppSidebarNavLinkComponent.prototype.linkActive;
    /**
     * @type {?}
     * @private
     */
    AppSidebarNavLinkComponent.prototype.url;
    /**
     * @type {?}
     * @private
     */
    AppSidebarNavLinkComponent.prototype.navigationEndObservable;
    /**
     * @type {?}
     * @private
     */
    AppSidebarNavLinkComponent.prototype.navSubscription;
    /** @type {?} */
    AppSidebarNavLinkComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFHNUQ7SUFjRSwyQ0FDUyxNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM3QixDQUFDOztnQkFoQk4sU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0REFBNEQ7b0JBQ3RFLFFBQVEsRUFBRSx1VEFNVDtvQkFDRCxTQUFTLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTtpQkFDaEM7Ozs7Z0JBYk8sZ0JBQWdCOzs7dUJBZXJCLEtBQUs7O0lBS1Isd0NBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQU5ZLGlDQUFpQzs7O0lBQzVDLGlEQUFtQjs7SUFHakIsbURBQStCOztBQUluQztJQTJCRSxvQ0FDUyxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVhiLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBYXZDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxtQkFBQSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDL0MsTUFBTTs7OztRQUFDLFVBQUEsS0FBSztZQUNWLE9BQU8sS0FBSyxZQUFZLGFBQWEsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FDSCxFQUE2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Ozs7SUFBWDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Z0JBbkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNENBQTRDO29CQUN0RCx3MENBQW9EO29CQUNwRCxTQUFTLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTtpQkFDaEM7Ozs7Z0JBOUJzQixNQUFNOzs7dUJBbUMxQixLQUFLOzRCQVFMLE1BQU07O0lBbURULGlDQUFDO0NBQUEsQUFwRUQsSUFvRUM7U0EvRFksMEJBQTBCOzs7Ozs7SUFFckMsMkNBQTBCOztJQVUxQiwrQ0FBeUM7O0lBRXpDLDhDQUF3Qjs7SUFDeEIsMENBQW9COztJQUNwQixnREFBMkI7Ozs7O0lBQzNCLHlDQUFvQjs7Ozs7SUFFcEIsNkRBQTJEOzs7OztJQUMzRCxxREFBc0M7O0lBR3BDLDRDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmF2aWdhdGlvbkVuZCwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtmaWx0ZXJ9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtTaWRlYmFyTmF2SGVscGVyfSBmcm9tICcuLi9hcHAtc2lkZWJhci1uYXYuc2VydmljZSc7XG5pbXBvcnQge0lOYXZEYXRhfSBmcm9tICcuLi9hcHAtc2lkZWJhci1uYXYnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtbGluay1jb250ZW50LCBjdWktc2lkZWJhci1uYXYtbGluay1jb250ZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHJ1ZVwiPlxuICAgICAgPGkgKm5nSWY9XCJoZWxwZXIuaGFzSWNvbihpdGVtKVwiIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2SWNvblwiPjwvaT5cbiAgICAgIDxuZy1jb250YWluZXI+e3tpdGVtLm5hbWV9fTwvbmctY29udGFpbmVyPlxuICAgICAgPHNwYW4gKm5nSWY9XCJoZWxwZXIuaGFzQmFkZ2UoaXRlbSlcIiBbbmdDbGFzc109XCJpdGVtIHwgYXBwU2lkZWJhck5hdkJhZGdlXCI+e3sgaXRlbS5iYWRnZS50ZXh0IH19PC9zcGFuPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBwcm92aWRlcnM6IFsgU2lkZWJhck5hdkhlbHBlciBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZMaW5rQ29udGVudENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyXG4gICkgeyB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1saW5rLCBjdWktc2lkZWJhci1uYXYtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtc2lkZWJhci1uYXYtbGluay5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogWyBTaWRlYmFyTmF2SGVscGVyIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJvdGVjdGVkIF9pdGVtOiBJTmF2RGF0YTtcblxuICBASW5wdXQoKVxuICBzZXQgaXRlbShpdGVtOiBJTmF2RGF0YSkge1xuICAgIHRoaXMuX2l0ZW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcbiAgfVxuICBnZXQgaXRlbSgpOiBJTmF2RGF0YSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW07XG4gIH1cblxuICBAT3V0cHV0KCkgbGlua0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBsaW5rVHlwZTogc3RyaW5nO1xuICBwdWJsaWMgaHJlZjogc3RyaW5nO1xuICBwdWJsaWMgbGlua0FjdGl2ZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSB1cmw6IHN0cmluZztcblxuICBwcml2YXRlIG5hdmlnYXRpb25FbmRPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPE5hdmlnYXRpb25FbmQ+O1xuICBwcml2YXRlIG5hdlN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yIChcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICkge1xuICAgIHRoaXMubmF2aWdhdGlvbkVuZE9ic2VydmFibGUgPSByb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgICBmaWx0ZXIoZXZlbnQgPT4ge1xuICAgICAgICByZXR1cm4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kO1xuICAgICAgfSlcbiAgICApIGFzIE9ic2VydmFibGU8TmF2aWdhdGlvbkVuZD47XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVybCA9IHR5cGVvZiB0aGlzLml0ZW0udXJsID09PSAnc3RyaW5nJyA/IHRoaXMuaXRlbS51cmwgOiB0aGlzLnJvdXRlci5zZXJpYWxpemVVcmwodGhpcy5yb3V0ZXIuY3JlYXRlVXJsVHJlZSh0aGlzLml0ZW0udXJsKSkgO1xuICAgIHRoaXMubGlua1R5cGUgPSB0aGlzLmdldExpbmtUeXBlKCk7XG4gICAgdGhpcy5ocmVmID0gdGhpcy5pc0Rpc2FibGVkKCkgPyAnJyA6ICh0aGlzLml0ZW0uaHJlZiB8fCB0aGlzLnVybCk7XG4gICAgdGhpcy5saW5rQWN0aXZlID0gdGhpcy5yb3V0ZXIudXJsLnNwbGl0KC9bPyMoO10vKVswXSA9PT0gdGhpcy5ocmVmLnNwbGl0KC9bPyMoO10vKVswXTtcbiAgICB0aGlzLm5hdlN1YnNjcmlwdGlvbiA9IHRoaXMubmF2aWdhdGlvbkVuZE9ic2VydmFibGUuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1VcmxBcnJheSA9IHRoaXMuaHJlZi5zcGxpdCgvWz8jKDtdLylbMF0uc3BsaXQoJy8nKTtcbiAgICAgIGNvbnN0IHVybEFycmF5ID0gZXZlbnQudXJsQWZ0ZXJSZWRpcmVjdHMuc3BsaXQoL1s/Iyg7XS8pWzBdLnNwbGl0KCcvJyk7XG4gICAgICB0aGlzLmxpbmtBY3RpdmUgPSBpdGVtVXJsQXJyYXkuZXZlcnkoKHZhbHVlLCBpbmRleCkgPT4gdmFsdWUgPT09IHVybEFycmF5W2luZGV4XSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm5hdlN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIGdldExpbmtUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmlzRGlzYWJsZWQoKSA/ICdkaXNhYmxlZCcgOiB0aGlzLmlzRXh0ZXJuYWxMaW5rKCkgPyAnZXh0ZXJuYWwnIDogJ2xpbmsnO1xuICB9XG5cbiAgcHVibGljIGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLml0ZW0uYXR0cmlidXRlcyAmJiB0aGlzLml0ZW0uYXR0cmlidXRlcy5kaXNhYmxlZCkgPyB0cnVlIDogbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBpc0V4dGVybmFsTGluaygpIHtcbiAgICByZXR1cm4gISF0aGlzLml0ZW0uaHJlZiB8fCB0aGlzLnVybC5zdWJzdHJpbmcoMCwgNCkgPT09ICdodHRwJztcbiAgfVxuXG4gIGxpbmtDbGlja2VkKCkge1xuICAgIHRoaXMubGlua0NsaWNrLmVtaXQoKTtcbiAgfVxufVxuIl19