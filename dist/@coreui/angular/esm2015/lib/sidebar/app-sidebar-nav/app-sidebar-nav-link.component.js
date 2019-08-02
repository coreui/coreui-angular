/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.classes = { 'nav-link': true };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.linkType = this.getLinkType();
        this.href = this.isDisabled() ? '' : this.item.url;
    }
    /**
     * @return {?}
     */
    getLinkClass() {
        /** @type {?} */
        const disabled = this.isDisabled();
        this.classes['disabled'] = disabled;
        this.classes['btn-link'] = disabled;
        if (this.hasVariant()) {
            /** @type {?} */
            const variant = `nav-link-${this.item.variant}`;
            this.classes[variant] = true;
        }
        return this.classes;
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
}
AppSidebarNavLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar-nav-link',
                template: "<ng-container [ngSwitch]=\"linkType\">\n  <a *ngSwitchCase=\"'external'\"\n    [ngClass]=\"getLinkClass()\"\n    href=\"{{item.url}}\"\n    [appHtmlAttr]=\"item.attributes\">\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"item | appSidebarNavIcon\"></i>\n    <ng-container>{{item.name}}</ng-container>\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\n  </a>\n  <a *ngSwitchDefault\n     [ngClass]=\"getLinkClass()\"\n     [appHtmlAttr]=\"item.attributes\"\n     [attr.disabled]=\"isDisabled()\"\n     routerLinkActive=\"active\"\n     [routerLink]=\"[item.url]\"\n     (click)=\"hideMobile()\">\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"item | appSidebarNavIcon\"></i>\n    <ng-container>{{item.name}}</ng-container>\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\n  </a>\n</ng-container>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFPNUQsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBT3JDLFlBQzRCLFFBQWEsRUFDL0IsUUFBbUIsRUFDcEIsTUFBd0I7UUFGTCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFMekIsWUFBTyxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDO0lBTW5DLENBQUM7Ozs7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDckQsQ0FBQzs7OztJQUVNLFlBQVk7O2NBQ1gsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUU7O2tCQUNmLE9BQU8sR0FBRyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNyRCxDQUFDOzs7O0lBRU0sVUFBVTtRQUNmLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMvRSxDQUFDOzs7O0lBRU0sY0FBYztRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQy9EO0lBQ0gsQ0FBQzs7O1lBdERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxnN0JBQW9EO2dCQUNwRCxTQUFTLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTthQUNoQzs7Ozs0Q0FTSSxNQUFNLFNBQUMsUUFBUTtZQWpCc0IsU0FBUztZQUUzQyxnQkFBZ0I7OzttQkFRckIsS0FBSzs7OztJQUFOLDBDQUFtQjs7SUFDbkIsOENBQXdCOztJQUN4QiwwQ0FBb0I7Ozs7O0lBRXBCLDZDQUF1Qzs7Ozs7SUFHckMsOENBQXVDOzs7OztJQUN2Qyw4Q0FBMkI7O0lBQzNCLDRDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtTaWRlYmFyTmF2SGVscGVyfSBmcm9tICcuLi9hcHAtc2lkZWJhci1uYXYuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC1zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbIFNpZGViYXJOYXZIZWxwZXIgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcbiAgcHVibGljIGxpbmtUeXBlOiBzdHJpbmc7XG4gIHB1YmxpYyBocmVmOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBjbGFzc2VzID0geyAnbmF2LWxpbmsnOiB0cnVlIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5saW5rVHlwZSA9IHRoaXMuZ2V0TGlua1R5cGUoKTtcbiAgICB0aGlzLmhyZWYgPSB0aGlzLmlzRGlzYWJsZWQoKSA/ICcnIDogdGhpcy5pdGVtLnVybDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRMaW5rQ2xhc3MoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcbiAgICB0aGlzLmNsYXNzZXNbJ2Rpc2FibGVkJ10gPSBkaXNhYmxlZDtcbiAgICB0aGlzLmNsYXNzZXNbJ2J0bi1saW5rJ10gPSBkaXNhYmxlZDtcbiAgICBpZiAodGhpcy5oYXNWYXJpYW50KCkpIHtcbiAgICAgIGNvbnN0IHZhcmlhbnQgPSBgbmF2LWxpbmstJHt0aGlzLml0ZW0udmFyaWFudH1gO1xuICAgICAgdGhpcy5jbGFzc2VzW3ZhcmlhbnRdID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY2xhc3NlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRMaW5rVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0V4dGVybmFsTGluaygpID8gJ2V4dGVybmFsJyA6ICdsaW5rJztcbiAgfVxuXG4gIHB1YmxpYyBoYXNWYXJpYW50KCkge1xuICAgIHJldHVybiAhIXRoaXMuaXRlbS52YXJpYW50O1xuICB9XG5cbiAgcHVibGljIGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLml0ZW0uYXR0cmlidXRlcyAmJiB0aGlzLml0ZW0uYXR0cmlidXRlcy5kaXNhYmxlZCkgPyB0cnVlIDogbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBpc0V4dGVybmFsTGluaygpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtLnVybC5zdWJzdHJpbmcoMCwgNCkgPT09ICdodHRwJztcbiAgfVxuXG4gIHB1YmxpYyBoaWRlTW9iaWxlKCkge1xuICAgIGlmICh0aGlzLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLXNob3cnKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdzaWRlYmFyLXNob3cnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==