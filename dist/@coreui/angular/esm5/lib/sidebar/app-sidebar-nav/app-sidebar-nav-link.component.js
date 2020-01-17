import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
var AppSidebarNavLinkContentComponent = /** @class */ (function () {
    function AppSidebarNavLinkContentComponent(helper) {
        this.helper = helper;
    }
    AppSidebarNavLinkContentComponent.prototype.ngOnInit = function () { };
    AppSidebarNavLinkContentComponent.prototype.ngOnDestroy = function () { };
    AppSidebarNavLinkContentComponent.ctorParameters = function () { return [
        { type: SidebarNavHelper }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AppSidebarNavLinkContentComponent.prototype, "item", void 0);
    AppSidebarNavLinkContentComponent = __decorate([
        Component({
            selector: 'app-sidebar-nav-link-content, cui-sidebar-nav-link-content',
            template: "\n    <ng-container *ngIf=\"true\">\n      <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"item | appSidebarNavIcon\"></i>\n      <ng-container>{{item.name}}</ng-container>\n      <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\n    </ng-container>\n  ",
            providers: [SidebarNavHelper]
        }),
        __metadata("design:paramtypes", [SidebarNavHelper])
    ], AppSidebarNavLinkContentComponent);
    return AppSidebarNavLinkContentComponent;
}());
export { AppSidebarNavLinkContentComponent };
var AppSidebarNavLinkComponent = /** @class */ (function () {
    function AppSidebarNavLinkComponent(router) {
        this.router = router;
        this.linkClick = new EventEmitter();
        this.navigationEndObservable = router.events.pipe(filter(function (event) {
            return event instanceof NavigationEnd;
        }));
    }
    Object.defineProperty(AppSidebarNavLinkComponent.prototype, "item", {
        get: function () {
            return this._Item;
        },
        set: function (item) {
            this._Item = JSON.parse(JSON.stringify(item));
        },
        enumerable: true,
        configurable: true
    });
    AppSidebarNavLinkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.url = typeof this.item.url === 'string' ? this.item.url : this.router.serializeUrl(this.router.createUrlTree(this.item.url));
        this.linkType = this.getLinkType();
        this.href = this.isDisabled() ? '' : (this.item.href || this.url);
        this.linkActive = this.router.url.split(/[?#(;]/)[0] === this.href.split(/[?#(;]/)[0];
        this.navSubscription = this.navigationEndObservable.subscribe(function (event) {
            var itemUrlArray = _this.href.split(/[?#(;]/)[0].split('/');
            var urlArray = event.urlAfterRedirects.split(/[?#(;]/)[0].split('/');
            _this.linkActive = itemUrlArray.every(function (value, index) { return value === urlArray[index]; });
        });
    };
    AppSidebarNavLinkComponent.prototype.ngOnDestroy = function () {
        this.navSubscription.unsubscribe();
    };
    AppSidebarNavLinkComponent.prototype.getLinkType = function () {
        return this.isDisabled() ? 'disabled' : this.isExternalLink() ? 'external' : 'link';
    };
    AppSidebarNavLinkComponent.prototype.isDisabled = function () {
        return (this.item.attributes && this.item.attributes.disabled) ? true : null;
    };
    AppSidebarNavLinkComponent.prototype.isExternalLink = function () {
        return !!this.item.href || this.url.substring(0, 4) === 'http';
    };
    AppSidebarNavLinkComponent.prototype.linkClicked = function () {
        this.linkClick.emit();
    };
    AppSidebarNavLinkComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AppSidebarNavLinkComponent.prototype, "item", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], AppSidebarNavLinkComponent.prototype, "linkClick", void 0);
    AppSidebarNavLinkComponent = __decorate([
        Component({
            selector: 'app-sidebar-nav-link, cui-sidebar-nav-link',
            template: "<ng-container [ngSwitch]=\"linkType\">\r\n  <a *ngSwitchCase=\"'disabled'\"\r\n     [ngClass]=\"item | appSidebarNavLink\"\r\n     [appHtmlAttr]=\"item.attributes\"\r\n  >\r\n    <app-sidebar-nav-link-content [item]=\"item\"></app-sidebar-nav-link-content>\r\n  </a>\r\n  <a *ngSwitchCase=\"'external'\"\r\n     [ngClass]=\"item | appSidebarNavLink\"\r\n     [href]=\"href\"\r\n     [appHtmlAttr]=\"item.attributes\"\r\n     (click)=\"linkClicked()\"\r\n  >\r\n    <app-sidebar-nav-link-content [item]=\"item\"></app-sidebar-nav-link-content>\r\n  </a>\r\n  <a *ngSwitchDefault\r\n     [ngClass]=\"item | appSidebarNavLink\"\r\n     [appHtmlAttr]=\"item.attributes\"\r\n     [target]=\"item.attributes?.target\"\r\n     [queryParams]=\"item.linkProps?.queryParams\"\r\n     [fragment]=\"item.linkProps?.fragment\"\r\n     [queryParamsHandling]=\"item.linkProps?.queryParamsHandling\"\r\n     [preserveFragment]=\"item.linkProps?.preserveFragment\"\r\n     [skipLocationChange]=\"item.linkProps?.skipLocationChange\"\r\n     [replaceUrl]=\"item.linkProps?.replaceUrl\"\r\n     [state]=\"item.linkProps?.state\"\r\n     [routerLink]=\"item.url\"\r\n     [class.active]=\"linkActive\"\r\n     (click)=\"linkClicked()\"\r\n  >\r\n    <app-sidebar-nav-link-content [item]=\"item\"></app-sidebar-nav-link-content>\r\n  </a>\r\n</ng-container>\r\n",
            providers: [SidebarNavHelper]
        }),
        __metadata("design:paramtypes", [Router])
    ], AppSidebarNavLinkComponent);
    return AppSidebarNavLinkComponent;
}());
export { AppSidebarNavLinkComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFjNUQ7SUFHRSwyQ0FDUyxNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM3QixDQUFDO0lBRUwsb0RBQVEsR0FBUixjQUFZLENBQUM7SUFDYix1REFBVyxHQUFYLGNBQWUsQ0FBQzs7Z0JBSkMsZ0JBQWdCOztJQUh4QjtRQUFSLEtBQUssRUFBRTs7bUVBQVc7SUFEUixpQ0FBaUM7UUFYN0MsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDREQUE0RDtZQUN0RSxRQUFRLEVBQUUsdVRBTVQ7WUFDRCxTQUFTLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTtTQUNoQyxDQUFDO3lDQUtpQixnQkFBZ0I7T0FKdEIsaUNBQWlDLENBUzdDO0lBQUQsd0NBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSxpQ0FBaUM7QUFnQjlDO0lBc0JFLG9DQUNTLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBWGIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFhdkMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUMvQyxNQUFNLENBQUMs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QUssTUFBTSxDQUFDO0lBQ2pFLENBQUM7SUFFRCxnREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOztnQkF2Q2dCLE1BQU07O0lBbEJ2QjtRQURDLEtBQUssRUFBRTs7OzBEQUdQO0lBS1M7UUFBVCxNQUFNLEVBQUU7O2lFQUFnQztJQVo5QiwwQkFBMEI7UUFMdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDRDQUE0QztZQUN0RCx3MENBQW9EO1lBQ3BELFNBQVMsRUFBRSxDQUFFLGdCQUFnQixDQUFFO1NBQ2hDLENBQUM7eUNBd0JpQixNQUFNO09BdkJaLDBCQUEwQixDQStEdEM7SUFBRCxpQ0FBQztDQUFBLEFBL0RELElBK0RDO1NBL0RZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOYXZpZ2F0aW9uRW5kLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtmaWx0ZXJ9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7U2lkZWJhck5hdkhlbHBlcn0gZnJvbSAnLi4vYXBwLXNpZGViYXItbmF2LnNlcnZpY2UnO1xyXG5pbXBvcnQge0lOYXZEYXRhfSBmcm9tICcuLi9hcHAtc2lkZWJhci1uYXYnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtbGluay1jb250ZW50LCBjdWktc2lkZWJhci1uYXYtbGluay1jb250ZW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRydWVcIj5cclxuICAgICAgPGkgKm5nSWY9XCJoZWxwZXIuaGFzSWNvbihpdGVtKVwiIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2SWNvblwiPjwvaT5cclxuICAgICAgPG5nLWNvbnRhaW5lcj57e2l0ZW0ubmFtZX19PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwiaGVscGVyLmhhc0JhZGdlKGl0ZW0pXCIgW25nQ2xhc3NdPVwiaXRlbSB8IGFwcFNpZGViYXJOYXZCYWRnZVwiPnt7IGl0ZW0uYmFkZ2UudGV4dCB9fTwvc3Bhbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcbiAgcHJvdmlkZXJzOiBbIFNpZGViYXJOYXZIZWxwZXIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkxpbmtDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG4gIG5nT25EZXN0cm95KCkge31cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtbGluaywgY3VpLXNpZGViYXItbmF2LWxpbmsnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtc2lkZWJhci1uYXYtbGluay5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbIFNpZGViYXJOYXZIZWxwZXIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIHByb3RlY3RlZCBfSXRlbTogSU5hdkRhdGE7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGl0ZW0oaXRlbTogSU5hdkRhdGEpIHtcclxuICAgIHRoaXMuX0l0ZW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcclxuICB9XHJcbiAgZ2V0IGl0ZW0oKTogSU5hdkRhdGEge1xyXG4gICAgcmV0dXJuIHRoaXMuX0l0ZW07XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgbGlua0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgbGlua1R5cGU6IHN0cmluZztcclxuICBwdWJsaWMgaHJlZjogc3RyaW5nO1xyXG4gIHB1YmxpYyBsaW5rQWN0aXZlOiBib29sZWFuO1xyXG4gIHByaXZhdGUgdXJsOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgbmF2aWdhdGlvbkVuZE9ic2VydmFibGU6IE9ic2VydmFibGU8TmF2aWdhdGlvbkVuZD47XHJcbiAgcHJpdmF0ZSBuYXZTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgKSB7XHJcbiAgICB0aGlzLm5hdmlnYXRpb25FbmRPYnNlcnZhYmxlID0gcm91dGVyLmV2ZW50cy5waXBlKFxyXG4gICAgICBmaWx0ZXIoZXZlbnQgPT4ge1xyXG4gICAgICAgIHJldHVybiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQ7XHJcbiAgICAgIH0pXHJcbiAgICApIGFzIE9ic2VydmFibGU8TmF2aWdhdGlvbkVuZD47XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudXJsID0gdHlwZW9mIHRoaXMuaXRlbS51cmwgPT09ICdzdHJpbmcnID8gdGhpcy5pdGVtLnVybCA6IHRoaXMucm91dGVyLnNlcmlhbGl6ZVVybCh0aGlzLnJvdXRlci5jcmVhdGVVcmxUcmVlKHRoaXMuaXRlbS51cmwpKSA7XHJcbiAgICB0aGlzLmxpbmtUeXBlID0gdGhpcy5nZXRMaW5rVHlwZSgpO1xyXG4gICAgdGhpcy5ocmVmID0gdGhpcy5pc0Rpc2FibGVkKCkgPyAnJyA6ICh0aGlzLml0ZW0uaHJlZiB8fCB0aGlzLnVybCk7XHJcbiAgICB0aGlzLmxpbmtBY3RpdmUgPSB0aGlzLnJvdXRlci51cmwuc3BsaXQoL1s/Iyg7XS8pWzBdID09PSB0aGlzLmhyZWYuc3BsaXQoL1s/Iyg7XS8pWzBdO1xyXG4gICAgdGhpcy5uYXZTdWJzY3JpcHRpb24gPSB0aGlzLm5hdmlnYXRpb25FbmRPYnNlcnZhYmxlLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1VcmxBcnJheSA9IHRoaXMuaHJlZi5zcGxpdCgvWz8jKDtdLylbMF0uc3BsaXQoJy8nKTtcclxuICAgICAgY29uc3QgdXJsQXJyYXkgPSBldmVudC51cmxBZnRlclJlZGlyZWN0cy5zcGxpdCgvWz8jKDtdLylbMF0uc3BsaXQoJy8nKTtcclxuICAgICAgdGhpcy5saW5rQWN0aXZlID0gaXRlbVVybEFycmF5LmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID09PSB1cmxBcnJheVtpbmRleF0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMubmF2U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGlua1R5cGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkKCkgPyAnZGlzYWJsZWQnIDogdGhpcy5pc0V4dGVybmFsTGluaygpID8gJ2V4dGVybmFsJyA6ICdsaW5rJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0Rpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuICh0aGlzLml0ZW0uYXR0cmlidXRlcyAmJiB0aGlzLml0ZW0uYXR0cmlidXRlcy5kaXNhYmxlZCkgPyB0cnVlIDogbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0V4dGVybmFsTGluaygpIHtcclxuICAgIHJldHVybiAhIXRoaXMuaXRlbS5ocmVmIHx8IHRoaXMudXJsLnN1YnN0cmluZygwLCA0KSA9PT0gJ2h0dHAnO1xyXG4gIH1cclxuXHJcbiAgbGlua0NsaWNrZWQoKSB7XHJcbiAgICB0aGlzLmxpbmtDbGljay5lbWl0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==