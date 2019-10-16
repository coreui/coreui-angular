/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
export class AppSidebarNavLinkContentComponent {
    /**
     * @param {?} helper
     */
    constructor(helper) {
        this.helper = helper;
    }
}
AppSidebarNavLinkContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar-nav-link-content',
                template: `
    <ng-container *ngIf="true">
      <i *ngIf="helper.hasIcon(item)" [ngClass]="item | appSidebarNavIcon"></i>
      <ng-container>{{item.name}}</ng-container>
      <span *ngIf="helper.hasBadge(item)" [ngClass]="item | appSidebarNavBadge">{{ item.badge.text }}</span>
    </ng-container>
  `,
                providers: [SidebarNavHelper]
            }] }
];
/** @nocollapse */
AppSidebarNavLinkContentComponent.ctorParameters = () => [
    { type: SidebarNavHelper }
];
AppSidebarNavLinkContentComponent.propDecorators = {
    item: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AppSidebarNavLinkContentComponent.prototype.item;
    /** @type {?} */
    AppSidebarNavLinkContentComponent.prototype.helper;
}
export class AppSidebarNavLinkComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.linkClick = new EventEmitter();
        this.navigationEndObservable = (/** @type {?} */ (router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            return event instanceof NavigationEnd;
        })))));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    set item(item) {
        this._item = JSON.parse(JSON.stringify(item));
    }
    /**
     * @return {?}
     */
    get item() {
        return this._item;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.linkType = this.getLinkType();
        this.href = this.isDisabled() ? '' : (this.item.href || this.item.url);
        this.linkActive = this.router.url.split(/[?#(]/)[0] === this.item.url.split(/[?#(]/)[0];
        this.navSubscription = this.navigationEndObservable.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            /** @type {?} */
            const itemUrlArray = this.item.url.split(/[?#(]/)[0].split('/');
            /** @type {?} */
            const urlArray = event.urlAfterRedirects.split(/[?#(]/)[0].split('/');
            this.linkActive = itemUrlArray.every((/**
             * @param {?} value
             * @param {?} index
             * @return {?}
             */
            (value, index) => value === urlArray[index]));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.navSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    getLinkType() {
        return this.isDisabled() ? 'disabled' : this.isExternalLink() ? 'external' : 'link';
    }
    /**
     * @return {?}
     */
    isDisabled() {
        return (this.item.attributes && this.item.attributes.disabled) ? true : null;
    }
    /**
     * @return {?}
     */
    isExternalLink() {
        /** @type {?} */
        const linkPath = Array.isArray(this.item.url) ? this.item.url[0] : this.item.url;
        return !!this.item.href || linkPath.substring(0, 4) === 'http';
    }
    /**
     * @return {?}
     */
    linkClicked() {
        this.linkClick.emit();
    }
}
AppSidebarNavLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar-nav-link',
                template: "<ng-container [ngSwitch]=\"linkType\">\n  <a *ngSwitchCase=\"'disabled'\"\n     [ngClass]=\"item | appSidebarNavLink\"\n     [appHtmlAttr]=\"item.attributes\"\n  >\n    <app-sidebar-nav-link-content [item]=\"item\"></app-sidebar-nav-link-content>\n  </a>\n  <a *ngSwitchCase=\"'external'\"\n     [ngClass]=\"item | appSidebarNavLink\"\n     [href]=\"href\"\n     [appHtmlAttr]=\"item.attributes\"\n     (click)=\"linkClicked()\"\n  >\n    <app-sidebar-nav-link-content [item]=\"item\"></app-sidebar-nav-link-content>\n  </a>\n  <a *ngSwitchDefault\n     [ngClass]=\"item | appSidebarNavLink\"\n     [appHtmlAttr]=\"item.attributes\"\n     [target]=\"item.attributes?.target\"\n     [queryParams]=\"item.linkProps?.queryParams\"\n     [fragment]=\"item.linkProps?.fragment\"\n     [queryParamsHandling]=\"item.linkProps?.queryParamsHandling\"\n     [preserveFragment]=\"item.linkProps?.preserveFragment\"\n     [skipLocationChange]=\"item.linkProps?.skipLocationChange\"\n     [replaceUrl]=\"item.linkProps?.replaceUrl\"\n     [state]=\"item.linkProps?.state\"\n     [routerLink]=\"item.url\"\n     [class.active]=\"linkActive\"\n     (click)=\"linkClicked()\"\n  >\n    <app-sidebar-nav-link-content [item]=\"item\"></app-sidebar-nav-link-content>\n  </a>\n</ng-container>\n",
                providers: [SidebarNavHelper]
            }] }
];
/** @nocollapse */
AppSidebarNavLinkComponent.ctorParameters = () => [
    { type: Router }
];
AppSidebarNavLinkComponent.propDecorators = {
    item: [{ type: Input }],
    linkClick: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFhdEMsTUFBTSxPQUFPLGlDQUFpQzs7OztJQUc1QyxZQUNTLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzdCLENBQUM7OztZQWhCTixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsUUFBUSxFQUFFOzs7Ozs7R0FNVDtnQkFDRCxTQUFTLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTthQUNoQzs7OztZQWZPLGdCQUFnQjs7O21CQWlCckIsS0FBSzs7OztJQUFOLGlEQUFtQjs7SUFHakIsbURBQStCOztBQVNuQyxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBcUJyQyxZQUNTLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVmIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFZdkMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLG1CQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUMvQyxNQUFNOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDYixPQUFPLEtBQUssWUFBWSxhQUFhLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENB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O2dCQUNoQyxzd0NBQW9EO2dCQUNwRCxTQUFTLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTthQUNoQzs7OztZQTNCc0IsTUFBTTs7O21CQWdDMUIsS0FBSzt3QkFRTCxNQUFNOzs7Ozs7O0lBVlAsMkNBQXFCOztJQVVyQiwrQ0FBeUM7O0lBRXpDLDhDQUF3Qjs7SUFDeEIsMENBQW9COztJQUNwQixnREFBMkI7Ozs7O0lBRTNCLDZEQUEyRDs7Ozs7SUFDM0QscURBQXNDOztJQUdwQyw0Q0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcbmltcG9ydCB7TmF2aWdhdGlvbkVuZCwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtmaWx0ZXJ9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWxpbmstY29udGVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRydWVcIj5cbiAgICAgIDxpICpuZ0lmPVwiaGVscGVyLmhhc0ljb24oaXRlbSlcIiBbbmdDbGFzc109XCJpdGVtIHwgYXBwU2lkZWJhck5hdkljb25cIj48L2k+XG4gICAgICA8bmctY29udGFpbmVyPnt7aXRlbS5uYW1lfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDxzcGFuICpuZ0lmPVwiaGVscGVyLmhhc0JhZGdlKGl0ZW0pXCIgW25nQ2xhc3NdPVwiaXRlbSB8IGFwcFNpZGViYXJOYXZCYWRnZVwiPnt7IGl0ZW0uYmFkZ2UudGV4dCB9fTwvc3Bhbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbIFNpZGViYXJOYXZIZWxwZXIgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2TGlua0NvbnRlbnRDb21wb25lbnQge1xuICBASW5wdXQoKSBpdGVtOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlclxuICApIHsgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtc2lkZWJhci1uYXYtbGluay5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogWyBTaWRlYmFyTmF2SGVscGVyIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJvdGVjdGVkIF9pdGVtOiBhbnk7XG5cbiAgQElucHV0KClcbiAgc2V0IGl0ZW0oaXRlbTogYW55KSB7XG4gICAgdGhpcy5faXRlbSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xuICB9XG4gIGdldCBpdGVtKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW07XG4gIH1cblxuICBAT3V0cHV0KCkgbGlua0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBsaW5rVHlwZTogc3RyaW5nO1xuICBwdWJsaWMgaHJlZjogc3RyaW5nO1xuICBwdWJsaWMgbGlua0FjdGl2ZTogYm9vbGVhbjtcblxuICBwcml2YXRlIG5hdmlnYXRpb25FbmRPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPE5hdmlnYXRpb25FbmQ+O1xuICBwcml2YXRlIG5hdlN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yIChcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICkge1xuICAgIHRoaXMubmF2aWdhdGlvbkVuZE9ic2VydmFibGUgPSByb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgICBmaWx0ZXIoZXZlbnQgPT4ge1xuICAgICAgICByZXR1cm4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kO1xuICAgICAgfSlcbiAgICApIGFzIE9ic2VydmFibGU8TmF2aWdhdGlvbkVuZD47XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxpbmtUeXBlID0gdGhpcy5nZXRMaW5rVHlwZSgpO1xuICAgIHRoaXMuaHJlZiA9IHRoaXMuaXNEaXNhYmxlZCgpID8gJycgOiAodGhpcy5pdGVtLmhyZWYgfHwgdGhpcy5pdGVtLnVybCk7XG4gICAgdGhpcy5saW5rQWN0aXZlID0gdGhpcy5yb3V0ZXIudXJsLnNwbGl0KC9bPyMoXS8pWzBdID09PSB0aGlzLml0ZW0udXJsLnNwbGl0KC9bPyMoXS8pWzBdO1xuICAgIHRoaXMubmF2U3Vic2NyaXB0aW9uID0gdGhpcy5uYXZpZ2F0aW9uRW5kT2JzZXJ2YWJsZS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgY29uc3QgaXRlbVVybEFycmF5ID0gdGhpcy5pdGVtLnVybC5zcGxpdCgvWz8jKF0vKVswXS5zcGxpdCgnLycpO1xuICAgICAgY29uc3QgdXJsQXJyYXkgPSBldmVudC51cmxBZnRlclJlZGlyZWN0cy5zcGxpdCgvWz8jKF0vKVswXS5zcGxpdCgnLycpO1xuICAgICAgdGhpcy5saW5rQWN0aXZlID0gaXRlbVVybEFycmF5LmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID09PSB1cmxBcnJheVtpbmRleF0pO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5uYXZTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRMaW5rVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkKCkgPyAnZGlzYWJsZWQnIDogdGhpcy5pc0V4dGVybmFsTGluaygpID8gJ2V4dGVybmFsJyA6ICdsaW5rJztcbiAgfVxuXG4gIHB1YmxpYyBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiAodGhpcy5pdGVtLmF0dHJpYnV0ZXMgJiYgdGhpcy5pdGVtLmF0dHJpYnV0ZXMuZGlzYWJsZWQpID8gdHJ1ZSA6IG51bGw7XG4gIH1cblxuICBwdWJsaWMgaXNFeHRlcm5hbExpbmsoKSB7XG4gICAgY29uc3QgbGlua1BhdGggPSBBcnJheS5pc0FycmF5KHRoaXMuaXRlbS51cmwpID8gdGhpcy5pdGVtLnVybFswXSA6IHRoaXMuaXRlbS51cmw7XG4gICAgcmV0dXJuICEhdGhpcy5pdGVtLmhyZWYgfHwgbGlua1BhdGguc3Vic3RyaW5nKDAsIDQpID09PSAnaHR0cCc7XG4gIH1cblxuICBsaW5rQ2xpY2tlZCgpIHtcbiAgICB0aGlzLmxpbmtDbGljay5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==