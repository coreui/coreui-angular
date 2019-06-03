import * as tslib_1 from "tslib";
var _a, _b, _c, _d, _e, _f;
import { Directive, ElementRef, HostListener, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { asideMenuCssClasses, sidebarCssClasses } from '../classes';
import { ClassToggler } from '../toggle-classes';
/**
* Allows the sidebar to be toggled via click.
*/
let SidebarToggleDirective = class SidebarToggleDirective {
    constructor(classToggler) {
        this.classToggler = classToggler;
    }
    ngOnInit() {
        this.bp = this.breakpoint;
    }
    toggleOpen($event) {
        $event.preventDefault();
        const cssClass = this.bp ? `sidebar-${this.bp}-show` : sidebarCssClasses[0];
        this.classToggler.toggleClasses(cssClass, sidebarCssClasses);
    }
};
tslib_1.__decorate([
    Input('appSidebarToggler'),
    tslib_1.__metadata("design:type", String)
], SidebarToggleDirective.prototype, "breakpoint", void 0);
tslib_1.__decorate([
    HostListener('click', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SidebarToggleDirective.prototype, "toggleOpen", null);
SidebarToggleDirective = tslib_1.__decorate([
    Directive({
        selector: '[appSidebarToggler]',
        providers: [ClassToggler]
    }),
    tslib_1.__metadata("design:paramtypes", [ClassToggler])
], SidebarToggleDirective);
export { SidebarToggleDirective };
let SidebarMinimizeDirective = class SidebarMinimizeDirective {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    toggleOpen($event) {
        $event.preventDefault();
        const body = this.document.body;
        body.classList.contains('sidebar-minimized') ?
            this.renderer.removeClass(body, 'sidebar-minimized') :
            this.renderer.addClass(body, 'sidebar-minimized');
    }
};
tslib_1.__decorate([
    HostListener('click', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SidebarMinimizeDirective.prototype, "toggleOpen", null);
SidebarMinimizeDirective = tslib_1.__decorate([
    Directive({
        selector: '[appSidebarMinimizer]'
    }),
    tslib_1.__param(0, Inject(DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof Renderer2 !== "undefined" && Renderer2) === "function" ? _a : Object])
], SidebarMinimizeDirective);
export { SidebarMinimizeDirective };
let MobileSidebarToggleDirective = class MobileSidebarToggleDirective {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    toggleOpen($event) {
        $event.preventDefault();
        const body = this.document.body;
        body.classList.contains('sidebar-show') ?
            this.renderer.removeClass(body, 'sidebar-show') :
            this.renderer.addClass(body, 'sidebar-show');
    }
};
tslib_1.__decorate([
    HostListener('click', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
MobileSidebarToggleDirective = tslib_1.__decorate([
    Directive({
        selector: '[appMobileSidebarToggler]'
    }),
    tslib_1.__param(0, Inject(DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_b = typeof Renderer2 !== "undefined" && Renderer2) === "function" ? _b : Object])
], MobileSidebarToggleDirective);
export { MobileSidebarToggleDirective };
/**
* Allows the off-canvas sidebar to be closed via click.
*/
let SidebarOffCanvasCloseDirective = class SidebarOffCanvasCloseDirective {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    toggleOpen($event) {
        $event.preventDefault();
        const body = this.document.body;
        if (body.classList.contains('sidebar-off-canvas')) {
            body.classList.contains('sidebar-show') ?
                this.renderer.removeClass(body, 'sidebar-show') :
                this.renderer.addClass(body, 'sidebar-show');
        }
    }
};
tslib_1.__decorate([
    HostListener('click', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
SidebarOffCanvasCloseDirective = tslib_1.__decorate([
    Directive({
        selector: '[appSidebarClose]'
    }),
    tslib_1.__param(0, Inject(DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_c = typeof Renderer2 !== "undefined" && Renderer2) === "function" ? _c : Object])
], SidebarOffCanvasCloseDirective);
export { SidebarOffCanvasCloseDirective };
let BrandMinimizeDirective = class BrandMinimizeDirective {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    toggleOpen($event) {
        $event.preventDefault();
        const body = this.document.body;
        body.classList.contains('brand-minimized') ?
            this.renderer.removeClass(body, 'brand-minimized') :
            this.renderer.addClass(body, 'brand-minimized');
    }
};
tslib_1.__decorate([
    HostListener('click', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], BrandMinimizeDirective.prototype, "toggleOpen", null);
BrandMinimizeDirective = tslib_1.__decorate([
    Directive({
        selector: '[appBrandMinimizer]'
    }),
    tslib_1.__param(0, Inject(DOCUMENT)),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_d = typeof Renderer2 !== "undefined" && Renderer2) === "function" ? _d : Object])
], BrandMinimizeDirective);
export { BrandMinimizeDirective };
/**
* Allows the aside to be toggled via click.
*/
let AsideToggleDirective = class AsideToggleDirective {
    constructor(classToggler) {
        this.classToggler = classToggler;
    }
    ngOnInit() {
        this.bp = this.breakpoint;
    }
    toggleOpen($event) {
        $event.preventDefault();
        const cssClass = this.bp ? `aside-menu-${this.bp}-show` : asideMenuCssClasses[0];
        this.classToggler.toggleClasses(cssClass, asideMenuCssClasses);
    }
};
tslib_1.__decorate([
    Input('appAsideMenuToggler'),
    tslib_1.__metadata("design:type", String)
], AsideToggleDirective.prototype, "breakpoint", void 0);
tslib_1.__decorate([
    HostListener('click', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AsideToggleDirective.prototype, "toggleOpen", null);
AsideToggleDirective = tslib_1.__decorate([
    Directive({
        selector: '[appAsideMenuToggler]',
        providers: [ClassToggler]
    }),
    tslib_1.__metadata("design:paramtypes", [ClassToggler])
], AsideToggleDirective);
export { AsideToggleDirective };
let HtmlAttributesDirective = class HtmlAttributesDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        const attribs = this.appHtmlAttr;
        for (const attr in attribs) {
            if (attr === 'style' && typeof (attribs[attr]) === 'object') {
                this.setStyle(attribs[attr]);
            }
            else if (attr === 'class') {
                this.addClass(attribs[attr]);
            }
            else {
                this.setAttrib(attr, attribs[attr]);
            }
        }
    }
    setStyle(styles) {
        for (const style in styles) {
            this.renderer.setStyle(this.el.nativeElement, style, styles[style]);
        }
    }
    addClass(classes) {
        const classArray = (Array.isArray(classes) ? classes : classes.split(' '));
        classArray.filter((element) => element.length > 0).forEach(element => {
            this.renderer.addClass(this.el.nativeElement, element);
        });
    }
    setAttrib(key, value) {
        this.renderer.setAttribute(this.el.nativeElement, key, value);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], HtmlAttributesDirective.prototype, "appHtmlAttr", void 0);
HtmlAttributesDirective = tslib_1.__decorate([
    Directive({
        selector: '[appHtmlAttr]'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof Renderer2 !== "undefined" && Renderer2) === "function" ? _e : Object, typeof (_f = typeof ElementRef !== "undefined" && ElementRef) === "function" ? _f : Object])
], HtmlAttributesDirective);
export { HtmlAttributesDirective };
//# sourceMappingURL=layout.directive.js.map