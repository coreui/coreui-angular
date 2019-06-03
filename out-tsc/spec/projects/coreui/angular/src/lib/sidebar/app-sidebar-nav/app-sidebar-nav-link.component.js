import * as tslib_1 from "tslib";
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
let AppSidebarNavLinkComponent = class AppSidebarNavLinkComponent {
    constructor(document, renderer, helper) {
        this.document = document;
        this.renderer = renderer;
        this.helper = helper;
    }
    ngOnInit() {
        this.linkType = this.getLinkType();
        this.href = this.isDisabled() ? '' : this.item.url;
    }
    getLinkClass() {
        const disabled = this.isDisabled();
        const classes = {
            'nav-link': true,
            'disabled': disabled,
            'btn-link': disabled
        };
        if (this.hasVariant()) {
            const variant = `nav-link-${this.item.variant}`;
            classes[variant] = true;
        }
        return classes;
    }
    getLinkType() {
        return this.isExternalLink() ? 'external' : 'link';
    }
    hasVariant() {
        return !!this.item.variant;
    }
    isDisabled() {
        return (this.item.attributes && this.item.attributes.disabled) ? true : null;
    }
    isExternalLink() {
        return this.item.url.substring(0, 4) === 'http';
    }
    hideMobile() {
        if (this.document.body.classList.contains('sidebar-show')) {
            this.renderer.removeClass(this.document.body, 'sidebar-show');
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AppSidebarNavLinkComponent.prototype, "item", void 0);
AppSidebarNavLinkComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sidebar-nav-link',
        templateUrl: './app-sidebar-nav-link.component.html',
        providers: [SidebarNavHelper]
    }),
    tslib_1.__param(0, Inject(DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [Object, Renderer2,
        SidebarNavHelper])
], AppSidebarNavLinkComponent);
export { AppSidebarNavLinkComponent };
//# sourceMappingURL=app-sidebar-nav-link.component.js.map