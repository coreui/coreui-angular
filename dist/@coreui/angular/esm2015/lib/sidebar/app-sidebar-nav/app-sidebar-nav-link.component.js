/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
export class AppSidebarNavLinkComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} helper
     */
    constructor(document, renderer, helper) {
        this.document = document;
        this.renderer = renderer;
        this.helper = helper;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.linkType = this.getLinkType();
        this.href = this.isDisabled() ? '' : this.item.url;
        this.checkRouterLinkActiveOptions();
    }
    /**
     * @return {?}
     */
    getLinkClass() {
        /** @type {?} */
        const disabled = this.isDisabled();
        /** @type {?} */
        const classes = {
            'nav-link': true,
            'disabled': disabled,
            'btn-link': disabled
        };
        if (this.hasVariant()) {
            /** @type {?} */
            const variant = `nav-link-${this.item.variant}`;
            classes[variant] = true;
        }
        return classes;
    }
    /**
     * @return {?}
     */
    getLinkType() {
        return this.isExternalLink() ? 'external' : 'link';
    }
    /**
     * @return {?}
     */
    hasVariant() {
        return !!this.item.variant;
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
        return this.item.url.substring(0, 4) === 'http';
    }
    /**
     * @return {?}
     */
    hideMobile() {
        if (this.document.body.classList.contains('sidebar-show')) {
            this.renderer.removeClass(this.document.body, 'sidebar-show');
        }
    }
    /**
     * @return {?}
     */
    checkRouterLinkActiveOptions() {
        if (!this.item.routerLinkActiveOptions) {
            this.item.routerLinkActiveOptions = {
                exact: false
            };
        }
    }
}
AppSidebarNavLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar-nav-link',
                template: "<ng-container [ngSwitch]=\"linkType\">\r\n  <a *ngSwitchCase=\"'external'\"\r\n    [ngClass]=\"getLinkClass()\"\r\n    href=\"{{item.url}}\"\r\n    [appHtmlAttr]=\"item.attributes\">\r\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"helper.getIconClass(item)\"></i>\r\n    <ng-container>{{item.name}}</ng-container>\r\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\r\n  </a>\r\n  <a *ngSwitchDefault\r\n     [ngClass]=\"getLinkClass()\"\r\n     [appHtmlAttr]=\"item.attributes\"\r\n     [attr.disabled]=\"isDisabled()\"\r\n     routerLinkActive=\"active\"\r\n     [routerLink]=\"[item.url]\"\r\n     [routerLinkActiveOptions]=\"item.routerLinkActiveOptions\"\r\n     (click)=\"hideMobile()\">\r\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"helper.getIconClass(item)\"></i>\r\n    <ng-container>{{item.name}}</ng-container>\r\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\r\n  </a>\r\n</ng-container>\r\n",
                providers: [SidebarNavHelper]
            }] }
];
/** @nocollapse */
AppSidebarNavLinkComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: SidebarNavHelper }
];
AppSidebarNavLinkComponent.propDecorators = {
    item: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFPNUQsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBS3JDLFlBQzRCLFFBQWEsRUFDL0IsUUFBbUIsRUFDcEIsTUFBd0I7UUFGTCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFDN0IsQ0FBQzs7OztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNuRCxJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRU0sWUFBWTs7Y0FDWCxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTs7Y0FDNUIsT0FBTyxHQUFHO1lBQ2QsVUFBVSxFQUFFLElBQUk7WUFDaEIsVUFBVSxFQUFFLFFBQVE7WUFDcEIsVUFBVSxFQUFFLFFBQVE7U0FDckI7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTs7a0JBQ2YsT0FBTyxHQUFHLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDL0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN6QjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNyRCxDQUFDOzs7O0lBRU0sVUFBVTtRQUNmLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMvRSxDQUFDOzs7O0lBRU0sY0FBYztRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQy9EO0lBQ0gsQ0FBQzs7OztJQUVNLDRCQUE0QjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixHQUFHO2dCQUNsQyxLQUFLLEVBQUUsS0FBSzthQUNiLENBQUM7U0FDSDtJQUNILENBQUM7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsaWlDQUFvRDtnQkFDcEQsU0FBUyxFQUFFLENBQUUsZ0JBQWdCLENBQUU7YUFDaEM7Ozs7NENBT0ksTUFBTSxTQUFDLFFBQVE7WUFmc0IsU0FBUztZQUUzQyxnQkFBZ0I7OzttQkFRckIsS0FBSzs7OztJQUFOLDBDQUFtQjs7SUFDbkIsOENBQXdCOztJQUN4QiwwQ0FBb0I7Ozs7O0lBR2xCLDhDQUF1Qzs7Ozs7SUFDdkMsOENBQTJCOztJQUMzQiw0Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWxpbmsnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAtc2lkZWJhci1uYXYtbGluay5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbIFNpZGViYXJOYXZIZWxwZXIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcclxuICBwdWJsaWMgbGlua1R5cGU6IHN0cmluZztcclxuICBwdWJsaWMgaHJlZjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHB1YmxpYyBoZWxwZXI6IFNpZGViYXJOYXZIZWxwZXJcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubGlua1R5cGUgPSB0aGlzLmdldExpbmtUeXBlKCk7XHJcbiAgICB0aGlzLmhyZWYgPSB0aGlzLmlzRGlzYWJsZWQoKSA/ICcnIDogdGhpcy5pdGVtLnVybDtcclxuICAgIHRoaXMuY2hlY2tSb3V0ZXJMaW5rQWN0aXZlT3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExpbmtDbGFzcygpIHtcclxuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0ge1xyXG4gICAgICAnbmF2LWxpbmsnOiB0cnVlLFxyXG4gICAgICAnZGlzYWJsZWQnOiBkaXNhYmxlZCxcclxuICAgICAgJ2J0bi1saW5rJzogZGlzYWJsZWRcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5oYXNWYXJpYW50KCkpIHtcclxuICAgICAgY29uc3QgdmFyaWFudCA9IGBuYXYtbGluay0ke3RoaXMuaXRlbS52YXJpYW50fWA7XHJcbiAgICAgIGNsYXNzZXNbdmFyaWFudF0gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsYXNzZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGlua1R5cGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0V4dGVybmFsTGluaygpID8gJ2V4dGVybmFsJyA6ICdsaW5rJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXNWYXJpYW50KCkge1xyXG4gICAgcmV0dXJuICEhdGhpcy5pdGVtLnZhcmlhbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNEaXNhYmxlZCgpIHtcclxuICAgIHJldHVybiAodGhpcy5pdGVtLmF0dHJpYnV0ZXMgJiYgdGhpcy5pdGVtLmF0dHJpYnV0ZXMuZGlzYWJsZWQpID8gdHJ1ZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNFeHRlcm5hbExpbmsoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtLnVybC5zdWJzdHJpbmcoMCwgNCkgPT09ICdodHRwJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaWRlTW9iaWxlKCkge1xyXG4gICAgaWYgKHRoaXMuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItc2hvdycpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnc2lkZWJhci1zaG93Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hlY2tSb3V0ZXJMaW5rQWN0aXZlT3B0aW9ucygpIHtcclxuICAgIGlmICghdGhpcy5pdGVtLnJvdXRlckxpbmtBY3RpdmVPcHRpb25zKSB7XHJcbiAgICAgIHRoaXMuaXRlbS5yb3V0ZXJMaW5rQWN0aXZlT3B0aW9ucyA9IHtcclxuICAgICAgICBleGFjdDogZmFsc2VcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19