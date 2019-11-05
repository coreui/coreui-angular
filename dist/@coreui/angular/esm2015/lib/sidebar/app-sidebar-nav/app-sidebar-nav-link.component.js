import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
let AppSidebarNavLinkContentComponent = class AppSidebarNavLinkContentComponent {
    constructor(helper) {
        this.helper = helper;
    }
};
AppSidebarNavLinkContentComponent.ctorParameters = () => [
    { type: SidebarNavHelper }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppSidebarNavLinkContentComponent.prototype, "item", void 0);
AppSidebarNavLinkContentComponent = __decorate([
    Component({
        selector: 'app-sidebar-nav-link-content, cui-sidebar-nav-link-content',
        template: `
    <ng-container *ngIf="true">
      <i *ngIf="helper.hasIcon(item)" [ngClass]="item | appSidebarNavIcon"></i>
      <ng-container>{{item.name}}</ng-container>
      <span *ngIf="helper.hasBadge(item)" [ngClass]="item | appSidebarNavBadge">{{ item.badge.text }}</span>
    </ng-container>
  `,
        providers: [SidebarNavHelper]
    }),
    __metadata("design:paramtypes", [SidebarNavHelper])
], AppSidebarNavLinkContentComponent);
export { AppSidebarNavLinkContentComponent };
let AppSidebarNavLinkComponent = class AppSidebarNavLinkComponent {
    constructor(router) {
        this.router = router;
        this.linkClick = new EventEmitter();
        this.navigationEndObservable = router.events.pipe(filter(event => {
            return event instanceof NavigationEnd;
        }));
    }
    set item(item) {
        this._item = JSON.parse(JSON.stringify(item));
    }
    get item() {
        return this._item;
    }
    ngOnInit() {
        this.url = typeof this.item.url === 'string' ? this.item.url : this.router.serializeUrl(this.router.createUrlTree(this.item.url));
        this.linkType = this.getLinkType();
        this.href = this.isDisabled() ? '' : (this.item.href || this.url);
        this.linkActive = this.router.url.split(/[?#(;]/)[0] === this.href.split(/[?#(;]/)[0];
        this.navSubscription = this.navigationEndObservable.subscribe(event => {
            const itemUrlArray = this.href.split(/[?#(;]/)[0].split('/');
            const urlArray = event.urlAfterRedirects.split(/[?#(;]/)[0].split('/');
            this.linkActive = itemUrlArray.every((value, index) => value === urlArray[index]);
        });
    }
    ngOnDestroy() {
        this.navSubscription.unsubscribe();
    }
    getLinkType() {
        return this.isDisabled() ? 'disabled' : this.isExternalLink() ? 'external' : 'link';
    }
    isDisabled() {
        return (this.item.attributes && this.item.attributes.disabled) ? true : null;
    }
    isExternalLink() {
        return !!this.item.href || this.url.substring(0, 4) === 'http';
    }
    linkClicked() {
        this.linkClick.emit();
    }
};
AppSidebarNavLinkComponent.ctorParameters = () => [
    { type: Router }
];
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
export { AppSidebarNavLinkComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFjNUQsSUFBYSxpQ0FBaUMsR0FBOUMsTUFBYSxpQ0FBaUM7SUFHNUMsWUFDUyxNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM3QixDQUFDO0NBQ04sQ0FBQTs7WUFGa0IsZ0JBQWdCOztBQUh4QjtJQUFSLEtBQUssRUFBRTs7K0RBQVc7QUFEUixpQ0FBaUM7SUFYN0MsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDREQUE0RDtRQUN0RSxRQUFRLEVBQUU7Ozs7OztHQU1UO1FBQ0QsU0FBUyxFQUFFLENBQUUsZ0JBQWdCLENBQUU7S0FDaEMsQ0FBQztxQ0FLaUIsZ0JBQWdCO0dBSnRCLGlDQUFpQyxDQU03QztTQU5ZLGlDQUFpQztBQWE5QyxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQXNCckMsWUFDUyxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVhiLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBYXZDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDL0MsTUFBTSxDQUFDLEtBQUss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LFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBQ0YsQ0FBQTs7WUF4Q2tCLE1BQU07O0FBbEJ2QjtJQURDLEtBQUssRUFBRTs7O3NEQUdQO0FBS1M7SUFBVCxNQUFNLEVBQUU7OzZEQUFnQztBQVo5QiwwQkFBMEI7SUFMdEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDRDQUE0QztRQUN0RCx3MENBQW9EO1FBQ3BELFNBQVMsRUFBRSxDQUFFLGdCQUFnQixDQUFFO0tBQ2hDLENBQUM7cUNBd0JpQixNQUFNO0dBdkJaLDBCQUEwQixDQStEdEM7U0EvRFksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge05hdmlnYXRpb25FbmQsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge2ZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtTaWRlYmFyTmF2SGVscGVyfSBmcm9tICcuLi9hcHAtc2lkZWJhci1uYXYuc2VydmljZSc7XHJcbmltcG9ydCB7SU5hdkRhdGF9IGZyb20gJy4uL2FwcC1zaWRlYmFyLW5hdic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1saW5rLWNvbnRlbnQsIGN1aS1zaWRlYmFyLW5hdi1saW5rLWNvbnRlbnQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHJ1ZVwiPlxyXG4gICAgICA8aSAqbmdJZj1cImhlbHBlci5oYXNJY29uKGl0ZW0pXCIgW25nQ2xhc3NdPVwiaXRlbSB8IGFwcFNpZGViYXJOYXZJY29uXCI+PC9pPlxyXG4gICAgICA8bmctY29udGFpbmVyPnt7aXRlbS5uYW1lfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJoZWxwZXIuaGFzQmFkZ2UoaXRlbSlcIiBbbmdDbGFzc109XCJpdGVtIHwgYXBwU2lkZWJhck5hdkJhZGdlXCI+e3sgaXRlbS5iYWRnZS50ZXh0IH19PC9zcGFuPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFsgU2lkZWJhck5hdkhlbHBlciBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2TGlua0NvbnRlbnRDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyXHJcbiAgKSB7IH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtbGluaywgY3VpLXNpZGViYXItbmF2LWxpbmsnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtc2lkZWJhci1uYXYtbGluay5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbIFNpZGViYXJOYXZIZWxwZXIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIHByb3RlY3RlZCBfaXRlbTogSU5hdkRhdGE7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGl0ZW0oaXRlbTogSU5hdkRhdGEpIHtcclxuICAgIHRoaXMuX2l0ZW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcclxuICB9XHJcbiAgZ2V0IGl0ZW0oKTogSU5hdkRhdGEge1xyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW07XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgbGlua0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgbGlua1R5cGU6IHN0cmluZztcclxuICBwdWJsaWMgaHJlZjogc3RyaW5nO1xyXG4gIHB1YmxpYyBsaW5rQWN0aXZlOiBib29sZWFuO1xyXG4gIHByaXZhdGUgdXJsOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgbmF2aWdhdGlvbkVuZE9ic2VydmFibGU6IE9ic2VydmFibGU8TmF2aWdhdGlvbkVuZD47XHJcbiAgcHJpdmF0ZSBuYXZTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IgKFxyXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxyXG4gICkge1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uRW5kT2JzZXJ2YWJsZSA9IHJvdXRlci5ldmVudHMucGlwZShcclxuICAgICAgZmlsdGVyKGV2ZW50ID0+IHtcclxuICAgICAgICByZXR1cm4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kO1xyXG4gICAgICB9KVxyXG4gICAgKSBhcyBPYnNlcnZhYmxlPE5hdmlnYXRpb25FbmQ+O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnVybCA9IHR5cGVvZiB0aGlzLml0ZW0udXJsID09PSAnc3RyaW5nJyA/IHRoaXMuaXRlbS51cmwgOiB0aGlzLnJvdXRlci5zZXJpYWxpemVVcmwodGhpcy5yb3V0ZXIuY3JlYXRlVXJsVHJlZSh0aGlzLml0ZW0udXJsKSkgO1xyXG4gICAgdGhpcy5saW5rVHlwZSA9IHRoaXMuZ2V0TGlua1R5cGUoKTtcclxuICAgIHRoaXMuaHJlZiA9IHRoaXMuaXNEaXNhYmxlZCgpID8gJycgOiAodGhpcy5pdGVtLmhyZWYgfHwgdGhpcy51cmwpO1xyXG4gICAgdGhpcy5saW5rQWN0aXZlID0gdGhpcy5yb3V0ZXIudXJsLnNwbGl0KC9bPyMoO10vKVswXSA9PT0gdGhpcy5ocmVmLnNwbGl0KC9bPyMoO10vKVswXTtcclxuICAgIHRoaXMubmF2U3Vic2NyaXB0aW9uID0gdGhpcy5uYXZpZ2F0aW9uRW5kT2JzZXJ2YWJsZS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICBjb25zdCBpdGVtVXJsQXJyYXkgPSB0aGlzLmhyZWYuc3BsaXQoL1s/Iyg7XS8pWzBdLnNwbGl0KCcvJyk7XHJcbiAgICAgIGNvbnN0IHVybEFycmF5ID0gZXZlbnQudXJsQWZ0ZXJSZWRpcmVjdHMuc3BsaXQoL1s/Iyg7XS8pWzBdLnNwbGl0KCcvJyk7XHJcbiAgICAgIHRoaXMubGlua0FjdGl2ZSA9IGl0ZW1VcmxBcnJheS5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiB2YWx1ZSA9PT0gdXJsQXJyYXlbaW5kZXhdKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLm5hdlN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExpbmtUeXBlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNEaXNhYmxlZCgpID8gJ2Rpc2FibGVkJyA6IHRoaXMuaXNFeHRlcm5hbExpbmsoKSA/ICdleHRlcm5hbCcgOiAnbGluayc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNEaXNhYmxlZCgpIHtcclxuICAgIHJldHVybiAodGhpcy5pdGVtLmF0dHJpYnV0ZXMgJiYgdGhpcy5pdGVtLmF0dHJpYnV0ZXMuZGlzYWJsZWQpID8gdHJ1ZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNFeHRlcm5hbExpbmsoKSB7XHJcbiAgICByZXR1cm4gISF0aGlzLml0ZW0uaHJlZiB8fCB0aGlzLnVybC5zdWJzdHJpbmcoMCwgNCkgPT09ICdodHRwJztcclxuICB9XHJcblxyXG4gIGxpbmtDbGlja2VkKCkge1xyXG4gICAgdGhpcy5saW5rQ2xpY2suZW1pdCgpO1xyXG4gIH1cclxufVxyXG4iXX0=