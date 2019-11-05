import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
var AppSidebarNavLinkContentComponent = /** @class */ (function () {
    function AppSidebarNavLinkContentComponent(helper) {
        this.helper = helper;
    }
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
            return this._item;
        },
        set: function (item) {
            this._item = JSON.parse(JSON.stringify(item));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFjNUQ7SUFHRSwyQ0FDUyxNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM3QixDQUFDOztnQkFEWSxnQkFBZ0I7O0lBSHhCO1FBQVIsS0FBSyxFQUFFOzttRUFBVztJQURSLGlDQUFpQztRQVg3QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsNERBQTREO1lBQ3RFLFFBQVEsRUFBRSx1VEFNVDtZQUNELFNBQVMsRUFBRSxDQUFFLGdCQUFnQixDQUFFO1NBQ2hDLENBQUM7eUNBS2lCLGdCQUFnQjtPQUp0QixpQ0FBaUMsQ0FNN0M7SUFBRCx3Q0FBQztDQUFBLEFBTkQsSUFNQztTQU5ZLGlDQUFpQztBQWE5QztJQXNCRSxvQ0FDUyxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVhiLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBYXZDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDL0MsTUFBTSxDQUFDLFVBQUEsS0FBSztZQUNWLE9BQU8sS0FBSyxZQUFZLGFBQWEsQ0FBQztRQUN4QyxDQUFDLENB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QyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Z0JBdkNnQixNQUFNOztJQWxCdkI7UUFEQyxLQUFLLEVBQUU7OzswREFHUDtJQUtTO1FBQVQsTUFBTSxFQUFFOztpRUFBZ0M7SUFaOUIsMEJBQTBCO1FBTHRDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw0Q0FBNEM7WUFDdEQsdzBDQUFvRDtZQUNwRCxTQUFTLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTtTQUNoQyxDQUFDO3lDQXdCaUIsTUFBTTtPQXZCWiwwQkFBMEIsQ0ErRHRDO0lBQUQsaUNBQUM7Q0FBQSxBQS9ERCxJQStEQztTQS9EWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TmF2aWdhdGlvbkVuZCwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7ZmlsdGVyfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcclxuaW1wb3J0IHtJTmF2RGF0YX0gZnJvbSAnLi4vYXBwLXNpZGViYXItbmF2JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWxpbmstY29udGVudCwgY3VpLXNpZGViYXItbmF2LWxpbmstY29udGVudCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0cnVlXCI+XHJcbiAgICAgIDxpICpuZ0lmPVwiaGVscGVyLmhhc0ljb24oaXRlbSlcIiBbbmdDbGFzc109XCJpdGVtIHwgYXBwU2lkZWJhck5hdkljb25cIj48L2k+XHJcbiAgICAgIDxuZy1jb250YWluZXI+e3tpdGVtLm5hbWV9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICA8c3BhbiAqbmdJZj1cImhlbHBlci5oYXNCYWRnZShpdGVtKVwiIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2QmFkZ2VcIj57eyBpdGVtLmJhZGdlLnRleHQgfX08L3NwYW4+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogWyBTaWRlYmFyTmF2SGVscGVyIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZMaW5rQ29udGVudENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaXRlbTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBoZWxwZXI6IFNpZGViYXJOYXZIZWxwZXJcclxuICApIHsgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1saW5rLCBjdWktc2lkZWJhci1uYXYtbGluaycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC1zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFsgU2lkZWJhck5hdkhlbHBlciBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgcHJvdGVjdGVkIF9pdGVtOiBJTmF2RGF0YTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgaXRlbShpdGVtOiBJTmF2RGF0YSkge1xyXG4gICAgdGhpcy5faXRlbSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xyXG4gIH1cclxuICBnZXQgaXRlbSgpOiBJTmF2RGF0YSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbTtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSBsaW5rQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHB1YmxpYyBsaW5rVHlwZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBocmVmOiBzdHJpbmc7XHJcbiAgcHVibGljIGxpbmtBY3RpdmU6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSB1cmw6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBuYXZpZ2F0aW9uRW5kT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uRW5kPjtcclxuICBwcml2YXRlIG5hdlN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvciAoXHJcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgKSB7XHJcbiAgICB0aGlzLm5hdmlnYXRpb25FbmRPYnNlcnZhYmxlID0gcm91dGVyLmV2ZW50cy5waXBlKFxyXG4gICAgICBmaWx0ZXIoZXZlbnQgPT4ge1xyXG4gICAgICAgIHJldHVybiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQ7XHJcbiAgICAgIH0pXHJcbiAgICApIGFzIE9ic2VydmFibGU8TmF2aWdhdGlvbkVuZD47XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudXJsID0gdHlwZW9mIHRoaXMuaXRlbS51cmwgPT09ICdzdHJpbmcnID8gdGhpcy5pdGVtLnVybCA6IHRoaXMucm91dGVyLnNlcmlhbGl6ZVVybCh0aGlzLnJvdXRlci5jcmVhdGVVcmxUcmVlKHRoaXMuaXRlbS51cmwpKSA7XHJcbiAgICB0aGlzLmxpbmtUeXBlID0gdGhpcy5nZXRMaW5rVHlwZSgpO1xyXG4gICAgdGhpcy5ocmVmID0gdGhpcy5pc0Rpc2FibGVkKCkgPyAnJyA6ICh0aGlzLml0ZW0uaHJlZiB8fCB0aGlzLnVybCk7XHJcbiAgICB0aGlzLmxpbmtBY3RpdmUgPSB0aGlzLnJvdXRlci51cmwuc3BsaXQoL1s/Iyg7XS8pWzBdID09PSB0aGlzLmhyZWYuc3BsaXQoL1s/Iyg7XS8pWzBdO1xyXG4gICAgdGhpcy5uYXZTdWJzY3JpcHRpb24gPSB0aGlzLm5hdmlnYXRpb25FbmRPYnNlcnZhYmxlLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1VcmxBcnJheSA9IHRoaXMuaHJlZi5zcGxpdCgvWz8jKDtdLylbMF0uc3BsaXQoJy8nKTtcclxuICAgICAgY29uc3QgdXJsQXJyYXkgPSBldmVudC51cmxBZnRlclJlZGlyZWN0cy5zcGxpdCgvWz8jKDtdLylbMF0uc3BsaXQoJy8nKTtcclxuICAgICAgdGhpcy5saW5rQWN0aXZlID0gaXRlbVVybEFycmF5LmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID09PSB1cmxBcnJheVtpbmRleF0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMubmF2U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGlua1R5cGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkKCkgPyAnZGlzYWJsZWQnIDogdGhpcy5pc0V4dGVybmFsTGluaygpID8gJ2V4dGVybmFsJyA6ICdsaW5rJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0Rpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuICh0aGlzLml0ZW0uYXR0cmlidXRlcyAmJiB0aGlzLml0ZW0uYXR0cmlidXRlcy5kaXNhYmxlZCkgPyB0cnVlIDogbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0V4dGVybmFsTGluaygpIHtcclxuICAgIHJldHVybiAhIXRoaXMuaXRlbS5ocmVmIHx8IHRoaXMudXJsLnN1YnN0cmluZygwLCA0KSA9PT0gJ2h0dHAnO1xyXG4gIH1cclxuXHJcbiAgbGlua0NsaWNrZWQoKSB7XHJcbiAgICB0aGlzLmxpbmtDbGljay5lbWl0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==