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
        return !!(this.item.attributes && this.item.attributes.disabled);
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
                template: "<ng-container [ngSwitch]=\"linkType\">\n  <a *ngSwitchCase=\"'external'\"\n    [ngClass]=\"getLinkClass()\"\n    href=\"{{item.url}}\"\n    [appHtmlAttr]=\"item.attributes\">\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"helper.getIconClass(item)\"></i>\n    <ng-container>{{item.name}}</ng-container>\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n  </a>\n  <a *ngSwitchDefault\n     [ngClass]=\"getLinkClass()\"\n     [appHtmlAttr]=\"item.attributes\"\n     [attr.disabled]=\"isDisabled()\"\n     routerLinkActive=\"active\"\n     [routerLink]=\"[item.url]\"\n     (click)=\"hideMobile()\">\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"helper.getIconClass(item)\"></i>\n    <ng-container>{{item.name}}</ng-container>\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n  </a>\n</ng-container>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFPNUQsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBS3JDLFlBQzRCLFFBQWEsRUFDL0IsUUFBbUIsRUFDcEIsTUFBd0I7UUFGTCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFDN0IsQ0FBQzs7OztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRU0sWUFBWTs7Y0FDWCxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTs7Y0FDNUIsT0FBTyxHQUFHO1lBQ2QsVUFBVSxFQUFFLElBQUk7WUFDaEIsVUFBVSxFQUFFLFFBQVE7WUFDcEIsVUFBVSxFQUFFLFFBQVE7U0FDckI7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRTs7a0JBQ2YsT0FBTyxHQUFHLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDL0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN6QjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNyRCxDQUFDOzs7O0lBRU0sVUFBVTtRQUNmLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7O0lBRU0sY0FBYztRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQy9EO0lBQ0gsQ0FBQzs7O1lBdkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxvN0JBQW9EO2dCQUNwRCxTQUFTLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTthQUNoQzs7Ozs0Q0FPSSxNQUFNLFNBQUMsUUFBUTtZQWZzQixTQUFTO1lBRTNDLGdCQUFnQjs7O21CQVFyQixLQUFLOzs7O0lBQU4sMENBQW1COztJQUNuQiw4Q0FBd0I7O0lBQ3hCLDBDQUFvQjs7Ozs7SUFHbEIsOENBQXVDOzs7OztJQUN2Qyw4Q0FBMkI7O0lBQzNCLDRDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtTaWRlYmFyTmF2SGVscGVyfSBmcm9tICcuLi9hcHAtc2lkZWJhci1uYXYuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC1zaWRlYmFyLW5hdi1saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbIFNpZGViYXJOYXZIZWxwZXIgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcbiAgcHVibGljIGxpbmtUeXBlOiBzdHJpbmc7XG4gIHB1YmxpYyBocmVmOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5saW5rVHlwZSA9IHRoaXMuZ2V0TGlua1R5cGUoKTtcbiAgICB0aGlzLmhyZWYgPSB0aGlzLmlzRGlzYWJsZWQoKSA/ICcnIDogdGhpcy5pdGVtLnVybDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRMaW5rQ2xhc3MoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgJ25hdi1saW5rJzogdHJ1ZSxcbiAgICAgICdkaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgJ2J0bi1saW5rJzogZGlzYWJsZWRcbiAgICB9O1xuICAgIGlmICh0aGlzLmhhc1ZhcmlhbnQoKSkge1xuICAgICAgY29uc3QgdmFyaWFudCA9IGBuYXYtbGluay0ke3RoaXMuaXRlbS52YXJpYW50fWA7XG4gICAgICBjbGFzc2VzW3ZhcmlhbnRdID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0TGlua1R5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNFeHRlcm5hbExpbmsoKSA/ICdleHRlcm5hbCcgOiAnbGluayc7XG4gIH1cblxuICBwdWJsaWMgaGFzVmFyaWFudCgpIHtcbiAgICByZXR1cm4gISF0aGlzLml0ZW0udmFyaWFudDtcbiAgfVxuXG4gIHB1YmxpYyBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiAhISh0aGlzLml0ZW0uYXR0cmlidXRlcyAmJiB0aGlzLml0ZW0uYXR0cmlidXRlcy5kaXNhYmxlZCk7XG4gIH1cblxuICBwdWJsaWMgaXNFeHRlcm5hbExpbmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbS51cmwuc3Vic3RyaW5nKDAsIDQpID09PSAnaHR0cCc7XG4gIH1cblxuICBwdWJsaWMgaGlkZU1vYmlsZSgpIHtcbiAgICBpZiAodGhpcy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1zaG93JykpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnc2lkZWJhci1zaG93Jyk7XG4gICAgfVxuICB9XG59XG4iXX0=