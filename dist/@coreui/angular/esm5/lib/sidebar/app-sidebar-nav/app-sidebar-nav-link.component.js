/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
var AppSidebarNavLinkContentComponent = /** @class */ (function () {
    function AppSidebarNavLinkContentComponent(helper) {
        this.helper = helper;
    }
    AppSidebarNavLinkContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-nav-link-content',
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
        this.linkType = this.getLinkType();
        this.href = this.isDisabled() ? '' : (this.item.href || this.item.url);
        this.linkActive = this.router.url.split(/[?#(]/)[0] === this.item.url.split(/[?#(]/)[0];
        this.navSubscription = this.navigationEndObservable.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var itemUrlArray = _this.item.url.split(/[?#(]/)[0].split('/');
            /** @type {?} */
            var urlArray = event.urlAfterRedirects.split(/[?#(]/)[0].split('/');
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
        /** @type {?} */
        var linkPath = Array.isArray(this.item.url) ? this.item.url[0] : this.item.url;
        return !!this.item.href || linkPath.substring(0, 4) === 'http';
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
                    selector: 'app-sidebar-nav-link',
                    template: "<ng-container [ngSwitch]=\"linkType\">\n  <a *ngSwitchCase=\"'disabled'\"\n     [ngClass]=\"item | appSidebarNavLink\"\n     [appHtmlAttr]=\"item.attributes\"\n  >\n    <app-sidebar-nav-link-content [item]=\"item\"></app-sidebar-nav-link-content>\n  </a>\n  <a *ngSwitchCase=\"'external'\"\n     [ngClass]=\"item | appSidebarNavLink\"\n     [href]=\"href\"\n     [appHtmlAttr]=\"item.attributes\"\n     (click)=\"linkClicked()\"\n  >\n    <app-sidebar-nav-link-content [item]=\"item\"></app-sidebar-nav-link-content>\n  </a>\n  <a *ngSwitchDefault\n     [ngClass]=\"item | appSidebarNavLink\"\n     [appHtmlAttr]=\"item.attributes\"\n     [target]=\"item.attributes?.target\"\n     [queryParams]=\"item.linkProps?.queryParams\"\n     [fragment]=\"item.linkProps?.fragment\"\n     [queryParamsHandling]=\"item.linkProps?.queryParamsHandling\"\n     [preserveFragment]=\"item.linkProps?.preserveFragment\"\n     [skipLocationChange]=\"item.linkProps?.skipLocationChange\"\n     [replaceUrl]=\"item.linkProps?.replaceUrl\"\n     [state]=\"item.linkProps?.state\"\n     [routerLink]=\"item.url\"\n     [class.active]=\"linkActive\"\n     (click)=\"linkClicked()\"\n  >\n    <app-sidebar-nav-link-content [item]=\"item\"></app-sidebar-nav-link-content>\n  </a>\n</ng-container>\n",
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
    AppSidebarNavLinkComponent.prototype.navigationEndObservable;
    /**
     * @type {?}
     * @private
     */
    AppSidebarNavLinkComponent.prototype.navSubscription;
    /** @type {?} */
    AppSidebarNavLinkComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEM7SUFjRSwyQ0FDUyxNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM3QixDQUFDOztnQkFoQk4sU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSx1VEFNVDtvQkFDRCxTQUFTLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTtpQkFDaEM7Ozs7Z0JBZk8sZ0JBQWdCOzs7dUJBaUJyQixLQUFLOztJQUtSLHdDQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FOWSxpQ0FBaUM7OztJQUM1QyxpREFBbUI7O0lBR2pCLG1EQUErQjs7QUFJbkM7SUEwQkUsb0NBQ1MsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFWYixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVl2QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsbUJBQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQy9DLE1BQU07Ozs7UUFBQyxVQUFBLEtBQUs7WUFDVixPQUFPLEtBQUssWUFBWSxhQUFhLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQ0gsRUFB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RUFBRSxDQUFDO0lBQ3hCLENBQUM7O2dCQWxFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsc3dDQUFvRDtvQkFDcEQsU0FBUyxFQUFFLENBQUUsZ0JBQWdCLENBQUU7aUJBQ2hDOzs7O2dCQTNCc0IsTUFBTTs7O3VCQWdDMUIsS0FBSzs0QkFRTCxNQUFNOztJQWtEVCxpQ0FBQztDQUFBLEFBbkVELElBbUVDO1NBOURZLDBCQUEwQjs7Ozs7O0lBRXJDLDJDQUFxQjs7SUFVckIsK0NBQXlDOztJQUV6Qyw4Q0FBd0I7O0lBQ3hCLDBDQUFvQjs7SUFDcEIsZ0RBQTJCOzs7OztJQUUzQiw2REFBMkQ7Ozs7O0lBQzNELHFEQUFzQzs7SUFHcEMsNENBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTaWRlYmFyTmF2SGVscGVyfSBmcm9tICcuLi9hcHAtc2lkZWJhci1uYXYuc2VydmljZSc7XG5pbXBvcnQge05hdmlnYXRpb25FbmQsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZmlsdGVyfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1saW5rLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0cnVlXCI+XG4gICAgICA8aSAqbmdJZj1cImhlbHBlci5oYXNJY29uKGl0ZW0pXCIgW25nQ2xhc3NdPVwiaXRlbSB8IGFwcFNpZGViYXJOYXZJY29uXCI+PC9pPlxuICAgICAgPG5nLWNvbnRhaW5lcj57e2l0ZW0ubmFtZX19PC9uZy1jb250YWluZXI+XG4gICAgICA8c3BhbiAqbmdJZj1cImhlbHBlci5oYXNCYWRnZShpdGVtKVwiIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2QmFkZ2VcIj57eyBpdGVtLmJhZGdlLnRleHQgfX08L3NwYW4+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIHByb3ZpZGVyczogWyBTaWRlYmFyTmF2SGVscGVyIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkxpbmtDb250ZW50Q29tcG9uZW50IHtcbiAgQElucHV0KCkgaXRlbTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBoZWxwZXI6IFNpZGViYXJOYXZIZWxwZXJcbiAgKSB7IH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWxpbmsnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLXNpZGViYXItbmF2LWxpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFsgU2lkZWJhck5hdkhlbHBlciBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZMaW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByb3RlY3RlZCBfaXRlbTogYW55O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBpdGVtKGl0ZW06IGFueSkge1xuICAgIHRoaXMuX2l0ZW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcbiAgfVxuICBnZXQgaXRlbSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9pdGVtO1xuICB9XG5cbiAgQE91dHB1dCgpIGxpbmtDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgbGlua1R5cGU6IHN0cmluZztcbiAgcHVibGljIGhyZWY6IHN0cmluZztcbiAgcHVibGljIGxpbmtBY3RpdmU6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBuYXZpZ2F0aW9uRW5kT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uRW5kPjtcbiAgcHJpdmF0ZSBuYXZTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvciAoXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICApIHtcbiAgICB0aGlzLm5hdmlnYXRpb25FbmRPYnNlcnZhYmxlID0gcm91dGVyLmV2ZW50cy5waXBlKFxuICAgICAgZmlsdGVyKGV2ZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZDtcbiAgICAgIH0pXG4gICAgKSBhcyBPYnNlcnZhYmxlPE5hdmlnYXRpb25FbmQ+O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5saW5rVHlwZSA9IHRoaXMuZ2V0TGlua1R5cGUoKTtcbiAgICB0aGlzLmhyZWYgPSB0aGlzLmlzRGlzYWJsZWQoKSA/ICcnIDogKHRoaXMuaXRlbS5ocmVmIHx8IHRoaXMuaXRlbS51cmwpO1xuICAgIHRoaXMubGlua0FjdGl2ZSA9IHRoaXMucm91dGVyLnVybC5zcGxpdCgvWz8jKF0vKVswXSA9PT0gdGhpcy5pdGVtLnVybC5zcGxpdCgvWz8jKF0vKVswXTtcbiAgICB0aGlzLm5hdlN1YnNjcmlwdGlvbiA9IHRoaXMubmF2aWdhdGlvbkVuZE9ic2VydmFibGUuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1VcmxBcnJheSA9IHRoaXMuaXRlbS51cmwuc3BsaXQoL1s/IyhdLylbMF0uc3BsaXQoJy8nKTtcbiAgICAgIGNvbnN0IHVybEFycmF5ID0gZXZlbnQudXJsQWZ0ZXJSZWRpcmVjdHMuc3BsaXQoL1s/IyhdLylbMF0uc3BsaXQoJy8nKTtcbiAgICAgIHRoaXMubGlua0FjdGl2ZSA9IGl0ZW1VcmxBcnJheS5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiB2YWx1ZSA9PT0gdXJsQXJyYXlbaW5kZXhdKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubmF2U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TGlua1R5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNEaXNhYmxlZCgpID8gJ2Rpc2FibGVkJyA6IHRoaXMuaXNFeHRlcm5hbExpbmsoKSA/ICdleHRlcm5hbCcgOiAnbGluayc7XG4gIH1cblxuICBwdWJsaWMgaXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuaXRlbS5hdHRyaWJ1dGVzICYmIHRoaXMuaXRlbS5hdHRyaWJ1dGVzLmRpc2FibGVkKSA/IHRydWUgOiBudWxsO1xuICB9XG5cbiAgcHVibGljIGlzRXh0ZXJuYWxMaW5rKCkge1xuICAgIGNvbnN0IGxpbmtQYXRoID0gQXJyYXkuaXNBcnJheSh0aGlzLml0ZW0udXJsKSA/IHRoaXMuaXRlbS51cmxbMF0gOiB0aGlzLml0ZW0udXJsO1xuICAgIHJldHVybiAhIXRoaXMuaXRlbS5ocmVmIHx8IGxpbmtQYXRoLnN1YnN0cmluZygwLCA0KSA9PT0gJ2h0dHAnO1xuICB9XG5cbiAgbGlua0NsaWNrZWQoKSB7XG4gICAgdGhpcy5saW5rQ2xpY2suZW1pdCgpO1xuICB9XG59XG4iXX0=