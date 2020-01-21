import { __decorate, __param, __metadata } from 'tslib';
import { Inject, Renderer2, Injectable, Input, HostListener, Directive, ElementRef, NgModule, HostBinding, Component, ɵɵdefineInjectable, ɵɵinject, EventEmitter, Output, Pipe } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { NavigationEnd, Router, ActivatedRoute, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

const sidebarCssClasses = [
    'sidebar-show',
    'sidebar-sm-show',
    'sidebar-md-show',
    'sidebar-lg-show',
    'sidebar-xl-show'
];
const asideMenuCssClasses = [
    'aside-menu-show',
    'aside-menu-sm-show',
    'aside-menu-md-show',
    'aside-menu-lg-show',
    'aside-menu-xl-show'
];

const RemoveClasses = (NewClassNames) => {
    const MatchClasses = NewClassNames.map((Class) => document.body.classList.contains(Class));
    return MatchClasses.indexOf(true) !== -1;
};
const ɵ0 = RemoveClasses;
const ToggleClasses = (Toggle, ClassNames) => {
    const Level = ClassNames.indexOf(Toggle);
    const NewClassNames = ClassNames.slice(0, Level + 1);
    if (RemoveClasses(NewClassNames)) {
        NewClassNames.map((Class) => document.body.classList.remove(Class));
    }
    else {
        document.body.classList.add(Toggle);
    }
};
let ClassToggler = class ClassToggler {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    removeClasses(NewClassNames) {
        const MatchClasses = NewClassNames.map((Class) => this.document.body.classList.contains(Class));
        return MatchClasses.indexOf(true) !== -1;
    }
    toggleClasses(Toggle, ClassNames) {
        const Level = ClassNames.indexOf(Toggle);
        const NewClassNames = ClassNames.slice(0, Level + 1);
        if (this.removeClasses(NewClassNames)) {
            NewClassNames.map((Class) => this.renderer.removeClass(this.document.body, Class));
        }
        else {
            this.renderer.addClass(this.document.body, Toggle);
        }
    }
};
ClassToggler.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
ClassToggler = __decorate([
    Injectable(),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2])
], ClassToggler);

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
SidebarToggleDirective.ctorParameters = () => [
    { type: ClassToggler }
];
__decorate([
    Input('appSidebarToggler'),
    __metadata("design:type", String)
], SidebarToggleDirective.prototype, "breakpoint", void 0);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarToggleDirective.prototype, "toggleOpen", null);
SidebarToggleDirective = __decorate([
    Directive({
        selector: '[appSidebarToggler]',
        providers: [ClassToggler]
    }),
    __metadata("design:paramtypes", [ClassToggler])
], SidebarToggleDirective);
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
SidebarMinimizeDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarMinimizeDirective.prototype, "toggleOpen", null);
SidebarMinimizeDirective = __decorate([
    Directive({
        selector: '[appSidebarMinimizer]'
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2])
], SidebarMinimizeDirective);
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
MobileSidebarToggleDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
MobileSidebarToggleDirective = __decorate([
    Directive({
        selector: '[appMobileSidebarToggler]'
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2])
], MobileSidebarToggleDirective);
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
SidebarOffCanvasCloseDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
SidebarOffCanvasCloseDirective = __decorate([
    Directive({
        selector: '[appSidebarClose]'
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2])
], SidebarOffCanvasCloseDirective);
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
BrandMinimizeDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BrandMinimizeDirective.prototype, "toggleOpen", null);
BrandMinimizeDirective = __decorate([
    Directive({
        selector: '[appBrandMinimizer]'
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2])
], BrandMinimizeDirective);
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
AsideToggleDirective.ctorParameters = () => [
    { type: ClassToggler }
];
__decorate([
    Input('appAsideMenuToggler'),
    __metadata("design:type", String)
], AsideToggleDirective.prototype, "breakpoint", void 0);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AsideToggleDirective.prototype, "toggleOpen", null);
AsideToggleDirective = __decorate([
    Directive({
        selector: '[appAsideMenuToggler]',
        providers: [ClassToggler]
    }),
    __metadata("design:paramtypes", [ClassToggler])
], AsideToggleDirective);
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
        value !== null ?
            this.renderer.setAttribute(this.el.nativeElement, key, value) :
            this.renderer.removeAttribute(this.el.nativeElement, key);
    }
};
HtmlAttributesDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], HtmlAttributesDirective.prototype, "appHtmlAttr", void 0);
HtmlAttributesDirective = __decorate([
    Directive({
        selector: '[appHtmlAttr]'
    }),
    __metadata("design:paramtypes", [Renderer2,
        ElementRef])
], HtmlAttributesDirective);

let LayoutModule = class LayoutModule {
};
LayoutModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        exports: [
            AsideToggleDirective,
            BrandMinimizeDirective,
            MobileSidebarToggleDirective,
            SidebarToggleDirective,
            SidebarMinimizeDirective,
            SidebarOffCanvasCloseDirective,
            HtmlAttributesDirective
        ],
        declarations: [
            AsideToggleDirective,
            BrandMinimizeDirective,
            MobileSidebarToggleDirective,
            SidebarToggleDirective,
            SidebarMinimizeDirective,
            SidebarOffCanvasCloseDirective,
            HtmlAttributesDirective
        ],
        providers: [
            ClassToggler
        ]
    })
], LayoutModule);

function Replace(el) {
    const nativeElement = el.nativeElement;
    const parentElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
        parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
}

let AppAsideComponent = class AppAsideComponent {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
        this.fixedClass = 'aside-menu-fixed';
        this.asideMenuClass = true;
    }
    ngOnInit() {
        this.isFixed(this.fixed);
        this.isOffCanvas(this.offCanvas);
        this.displayBreakpoint(this.display);
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
    isOffCanvas(offCanvas = this.offCanvas) {
        if (offCanvas) {
            this.renderer.addClass(this.document.body, 'aside-menu-off-canvas');
        }
    }
    displayBreakpoint(display = this.display) {
        if (display !== false) {
            const cssClass = this.display ? `aside-menu-${this.display}-show` : asideMenuCssClasses[0];
            this.renderer.addClass(this.document.body, cssClass);
        }
    }
};
AppAsideComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppAsideComponent.prototype, "display", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AppAsideComponent.prototype, "fixed", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AppAsideComponent.prototype, "offCanvas", void 0);
__decorate([
    HostBinding('class.aside-menu'),
    __metadata("design:type", Object)
], AppAsideComponent.prototype, "asideMenuClass", void 0);
AppAsideComponent = __decorate([
    Component({
        selector: 'app-aside, cui-aside',
        template: `<ng-content></ng-content>`
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2])
], AppAsideComponent);

let AppAsideModule = class AppAsideModule {
};
AppAsideModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            LayoutModule
        ],
        exports: [
            AppAsideComponent,
            LayoutModule
        ],
        declarations: [
            AppAsideComponent
        ]
    })
], AppAsideModule);

let AppBreadcrumbService = class AppBreadcrumbService {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.breadcrumbSubject = new BehaviorSubject(new Array());
        this.breadcrumbs = this.breadcrumbSubject.asObservable();
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
            const breadcrumbs = [];
            let currentRoute = this.route.root;
            let url = '';
            do {
                const childrenRoutes = currentRoute.children;
                currentRoute = null;
                // tslint:disable-next-line:no-shadowed-variable
                childrenRoutes.forEach(route => {
                    if (route.outlet === 'primary') {
                        const routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
                        breadcrumbs.push({
                            label: route.snapshot.data,
                            url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
            this.breadcrumbSubject.next(Object.assign([], breadcrumbs));
            return breadcrumbs;
        });
    }
};
AppBreadcrumbService.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute }
];
AppBreadcrumbService.ɵprov = ɵɵdefineInjectable({ factory: function AppBreadcrumbService_Factory() { return new AppBreadcrumbService(ɵɵinject(Router), ɵɵinject(ActivatedRoute)); }, token: AppBreadcrumbService, providedIn: "root" });
AppBreadcrumbService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [Router, ActivatedRoute])
], AppBreadcrumbService);

let AppBreadcrumbComponent = class AppBreadcrumbComponent {
    constructor(document, renderer, service, el) {
        this.document = document;
        this.renderer = renderer;
        this.service = service;
        this.el = el;
        this.fixedClass = 'breadcrumb-fixed';
    }
    ngOnInit() {
        Replace(this.el);
        this.isFixed(this.fixed);
        this.breadcrumbs = this.service.breadcrumbs;
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
};
AppBreadcrumbComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: AppBreadcrumbService },
    { type: ElementRef }
];
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AppBreadcrumbComponent.prototype, "fixed", void 0);
AppBreadcrumbComponent = __decorate([
    Component({
        selector: 'app-breadcrumb',
        template: `
    <ng-template ngFor let-breadcrumb [ngForOf]="breadcrumbs | async" let-last = last>
      <li class="breadcrumb-item"
          *ngIf="breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)"
          [ngClass]="{active: last}">
        <a *ngIf="!last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</a>
        <span *ngIf="last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</span>
      </li>
    </ng-template>
  `
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2,
        AppBreadcrumbService,
        ElementRef])
], AppBreadcrumbComponent);

let CuiBreadcrumbComponent = class CuiBreadcrumbComponent {
    constructor(document, renderer, service) {
        this.document = document;
        this.renderer = renderer;
        this.service = service;
        this.fixedClass = 'breadcrumb-fixed';
    }
    ngOnInit() {
        this.isFixed(this.fixed);
        this.breadcrumbs = this.service.breadcrumbs;
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
};
CuiBreadcrumbComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: AppBreadcrumbService }
];
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CuiBreadcrumbComponent.prototype, "fixed", void 0);
CuiBreadcrumbComponent = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'cui-breadcrumb',
        template: "<ol class=\"breadcrumb\">\r\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last = last>\r\n    <li class=\"breadcrumb-item\"\r\n        *ngIf=\"breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)\"\r\n        [ngClass]=\"{active: last}\">\r\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\r\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\r\n    </li>\r\n  </ng-template>\r\n  <ng-content></ng-content>\r\n</ol>\r\n"
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2,
        AppBreadcrumbService])
], CuiBreadcrumbComponent);

var AppBreadcrumbModule_1;
// @dynamic
let AppBreadcrumbModule = AppBreadcrumbModule_1 = class AppBreadcrumbModule {
    static forRoot(config) {
        return {
            ngModule: AppBreadcrumbModule_1,
            providers: [
                AppBreadcrumbService
            ]
        };
    }
};
AppBreadcrumbModule = AppBreadcrumbModule_1 = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule],
        exports: [AppBreadcrumbComponent, CuiBreadcrumbComponent],
        declarations: [AppBreadcrumbComponent, CuiBreadcrumbComponent]
    })
], AppBreadcrumbModule);

let AppFooterComponent = class AppFooterComponent {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
        this.fixedClass = 'footer-fixed';
        this.appFooterClass = true;
    }
    ngOnInit() {
        this.isFixed(this.fixed);
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
};
AppFooterComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AppFooterComponent.prototype, "fixed", void 0);
__decorate([
    HostBinding('class.app-footer'),
    __metadata("design:type", Object)
], AppFooterComponent.prototype, "appFooterClass", void 0);
AppFooterComponent = __decorate([
    Component({
        selector: 'app-footer, cui-footer',
        template: `<ng-content></ng-content>`
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2])
], AppFooterComponent);

let AppFooterModule = class AppFooterModule {
};
AppFooterModule = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [AppFooterComponent],
        declarations: [AppFooterComponent]
    })
], AppFooterModule);

let AppHeaderComponent = class AppHeaderComponent {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
        this.navbarBrandText = { icon: '🅲', text: '🅲 CoreUI' };
        this.navbarBrandRouterLink = '';
        this.fixedClass = 'header-fixed';
        this.appHeaderClass = true;
        this.navbarClass = true;
        this.breakpoints = ['xl', 'lg', 'md', 'sm', 'xs'];
        this.sidebarTogglerClass = 'd-none d-md-block';
        this.sidebarTogglerMobileClass = 'd-lg-none';
        this.asideTogglerClass = 'd-none d-md-block';
        this.asideTogglerMobileClass = 'd-lg-none';
    }
    ngOnInit() {
        this.isFixed(this.fixed);
        this.navbarBrandImg = Boolean(this.navbarBrand || this.navbarBrandFull || this.navbarBrandMinimized);
        this.navbarBrandRouterLink = this.navbarBrandRouterLink[0] ? this.navbarBrandRouterLink : this.navbarBrandHref;
        this.sidebarTogglerClass = this.setToggerBreakpointClass(this.sidebarToggler);
        this.sidebarTogglerMobileClass = this.setToggerMobileBreakpointClass(this.sidebarToggler);
        this.asideTogglerClass = this.setToggerBreakpointClass(this.asideMenuToggler);
        this.asideTogglerMobileClass = this.setToggerMobileBreakpointClass(this.asideMenuToggler);
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
    setToggerBreakpointClass(breakpoint = 'md') {
        let togglerClass = 'd-none d-md-block';
        if (this.breakpoints.includes(breakpoint)) {
            const breakpointIndex = this.breakpoints.indexOf(breakpoint);
            togglerClass = `d-none d-${breakpoint}-block`;
        }
        return togglerClass;
    }
    setToggerMobileBreakpointClass(breakpoint = 'lg') {
        let togglerClass = 'd-lg-none';
        if (this.breakpoints.includes(breakpoint)) {
            togglerClass = `d-${breakpoint}-none`;
        }
        return togglerClass;
    }
};
AppHeaderComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AppHeaderComponent.prototype, "fixed", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "navbarBrand", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "navbarBrandFull", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "navbarBrandMinimized", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "navbarBrandText", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AppHeaderComponent.prototype, "navbarBrandHref", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "navbarBrandRouterLink", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "sidebarToggler", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AppHeaderComponent.prototype, "mobileSidebarToggler", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "asideMenuToggler", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AppHeaderComponent.prototype, "mobileAsideMenuToggler", void 0);
__decorate([
    HostBinding('class.app-header'),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "appHeaderClass", void 0);
__decorate([
    HostBinding('class.navbar'),
    __metadata("design:type", Object)
], AppHeaderComponent.prototype, "navbarClass", void 0);
AppHeaderComponent = __decorate([
    Component({
        selector: 'app-header, cui-header',
        template: "<ng-template [ngIf]=\"mobileSidebarToggler != false\">\r\n  <button class=\"navbar-toggler {{sidebarTogglerMobileClass}}\" type=\"button\" appSidebarToggler>\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<a class=\"navbar-brand\" [routerLink]=\"navbarBrandRouterLink\">\r\n  <ng-template [ngIf]=\"navbarBrandImg\">\r\n    <img *ngIf=\"navbarBrand\"\r\n         [appHtmlAttr]=\"navbarBrand\"\r\n         [ngClass]=\"'navbar-brand'\">\r\n    <img *ngIf=\"navbarBrandFull\"\r\n         [appHtmlAttr]=\"navbarBrandFull\"\r\n         [ngClass]=\"'navbar-brand-full'\">\r\n    <img *ngIf=\"navbarBrandMinimized\"\r\n         [appHtmlAttr]=\"navbarBrandMinimized\"\r\n         [ngClass]=\"'navbar-brand-minimized'\">\r\n  </ng-template>\r\n  <ng-template [ngIf]=\"!navbarBrandImg\">\r\n    <div class=\"navbar-brand-full\" [innerHTML]=\"navbarBrandText.text\"></div>\r\n    <div class=\"navbar-brand-minimized\" [innerHTML]=\"navbarBrandText.icon\"></div>\r\n  </ng-template>\r\n</a>\r\n<ng-template [ngIf]=\"sidebarToggler != false\">\r\n  <button class=\"navbar-toggler {{sidebarTogglerClass}}\" type=\"button\" [appSidebarToggler]=\"sidebarToggler\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<ng-content></ng-content>\r\n<ng-template [ngIf]=\"asideMenuToggler != false\">\r\n  <button class=\"navbar-toggler {{asideTogglerClass}}\" type=\"button\" [appAsideMenuToggler]=\"asideMenuToggler\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<ng-template [ngIf]=\"mobileAsideMenuToggler != false\">\r\n  <button class=\"navbar-toggler {{asideTogglerMobileClass}}\" type=\"button\" appAsideMenuToggler>\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n"
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2])
], AppHeaderComponent);

let AppHeaderModule = class AppHeaderModule {
};
AppHeaderModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            LayoutModule
        ],
        exports: [
            AppHeaderComponent,
            LayoutModule
        ],
        declarations: [
            AppHeaderComponent
        ]
    })
], AppHeaderModule);

let AppSidebarService = class AppSidebarService {
    constructor() {
        this.events = new BehaviorSubject({});
        this.events$ = this.events.asObservable();
    }
    toggle(action) {
        this.events.next(action);
    }
};
AppSidebarService.ɵprov = ɵɵdefineInjectable({ factory: function AppSidebarService_Factory() { return new AppSidebarService(); }, token: AppSidebarService, providedIn: "root" });
AppSidebarService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], AppSidebarService);

let AppSidebarComponent = class AppSidebarComponent {
    constructor(document, renderer, sidebarService) {
        this.document = document;
        this.renderer = renderer;
        this.sidebarService = sidebarService;
        this._minimized = false;
        /**
         * Emits whenever the minimized state of the sidebar changes.
         * Primarily used to facilitate two-way binding.
         */
        this.minimizedChange = new EventEmitter();
        this.sidebarClass = true;
    }
    get minimized() {
        return this._minimized;
    }
    set minimized(value) {
        // only update / emit events when the value changes
        if (this._minimized !== value) {
            this._minimized = value;
            this._updateMinimized(value);
            this.minimizedChange.emit(value);
            this.sidebarService.toggle({ minimize: value });
        }
    }
    ngOnInit() {
        this.displayBreakpoint(this.display);
        this.isCompact(this.compact);
        this.isFixed(this.fixed);
        this.isOffCanvas(this.offCanvas);
        this.sidebarService.toggle({ minimize: this.minimized });
        this.subscriptionEvents = this.sidebarService.events$.subscribe(action => {
            if (action.minimize !== undefined) {
                action.minimize === 'toggle' ? this.toggleMinimized() : this.minimized = !!action.minimize;
            }
        });
    }
    ngOnDestroy() {
        this.subscriptionEvents.unsubscribe();
        this.minimizedChange.complete();
        this.renderer.removeClass(this.document.body, 'sidebar-fixed');
        this._updateMinimized(false);
    }
    isCompact(compact = this.compact) {
        if (compact) {
            this.renderer.addClass(this.document.body, 'sidebar-compact');
        }
    }
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, 'sidebar-fixed');
        }
    }
    toggleMinimized() {
        this.minimized = !this._minimized;
    }
    isOffCanvas(offCanvas = this.offCanvas) {
        if (offCanvas) {
            this.renderer.addClass(this.document.body, 'sidebar-off-canvas');
        }
    }
    displayBreakpoint(display = this.display) {
        if (display !== false) {
            const cssClass = display ? `sidebar-${display}-show` : sidebarCssClasses[0];
            this.renderer.addClass(this.document.body, cssClass);
        }
    }
    _updateMinimized(minimized) {
        const body = this.document.body;
        if (minimized) {
            this.renderer.addClass(body, 'sidebar-minimized');
            this.renderer.addClass(body, 'brand-minimized');
        }
        else {
            this.renderer.removeClass(body, 'sidebar-minimized');
            this.renderer.removeClass(body, 'brand-minimized');
        }
    }
};
AppSidebarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: AppSidebarService }
];
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AppSidebarComponent.prototype, "compact", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppSidebarComponent.prototype, "display", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AppSidebarComponent.prototype, "fixed", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AppSidebarComponent.prototype, "offCanvas", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], AppSidebarComponent.prototype, "minimized", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], AppSidebarComponent.prototype, "minimizedChange", void 0);
__decorate([
    HostBinding('class.sidebar'),
    __metadata("design:type", Object)
], AppSidebarComponent.prototype, "sidebarClass", void 0);
AppSidebarComponent = __decorate([
    Component({
        selector: 'app-sidebar, cui-sidebar',
        template: `<ng-content></ng-content>`
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2,
        AppSidebarService])
], AppSidebarComponent);

let SidebarNavService = class SidebarNavService {
};
SidebarNavService = __decorate([
    Injectable()
], SidebarNavService);
let SidebarNavHelper = class SidebarNavHelper {
    constructor() {
        this.hasBadge = (item) => Boolean(item.badge);
        this.hasIcon = (item) => Boolean(item.icon);
    }
    itemType(item) {
        if (item.divider) {
            return 'divider';
        }
        else if (item.title) {
            return 'title';
        }
        else if (item.children) {
            return 'dropdown';
        }
        else if (item.label) {
            return 'label';
        }
        else if (!Object.keys(item).length) {
            return 'empty';
        }
        else {
            return 'link';
        }
    }
    isActive(router, item) {
        return router.isActive(item.url, false);
    }
    getIconClass(item) {
        const classes = {
            'nav-icon': true
        };
        const icon = item.icon;
        classes[icon] = this.hasIcon(item);
        return classes;
    }
};
SidebarNavHelper = __decorate([
    Injectable()
], SidebarNavHelper);

let AppSidebarFooterComponent = class AppSidebarFooterComponent {
    constructor() {
        this.sidebarFooterClass = true;
    }
};
__decorate([
    HostBinding('class.sidebar-footer'),
    __metadata("design:type", Object)
], AppSidebarFooterComponent.prototype, "sidebarFooterClass", void 0);
AppSidebarFooterComponent = __decorate([
    Component({
        selector: 'app-sidebar-footer, cui-sidebar-footer',
        template: `<ng-content></ng-content>`
    }),
    __metadata("design:paramtypes", [])
], AppSidebarFooterComponent);

let AppSidebarFormComponent = class AppSidebarFormComponent {
    constructor() {
        this.sidebarFormClass = true;
    }
};
__decorate([
    HostBinding('class.sidebar-form'),
    __metadata("design:type", Object)
], AppSidebarFormComponent.prototype, "sidebarFormClass", void 0);
AppSidebarFormComponent = __decorate([
    Component({
        selector: 'app-sidebar-form, cui-sidebar-form',
        template: `<ng-content></ng-content>`
    }),
    __metadata("design:paramtypes", [])
], AppSidebarFormComponent);

let AppSidebarHeaderComponent = class AppSidebarHeaderComponent {
    constructor() {
        this.sidebarHeaderClass = true;
    }
};
__decorate([
    HostBinding('class.sidebar-header'),
    __metadata("design:type", Object)
], AppSidebarHeaderComponent.prototype, "sidebarHeaderClass", void 0);
AppSidebarHeaderComponent = __decorate([
    Component({
        selector: 'app-sidebar-header, cui-sidebar-header',
        template: `<ng-content></ng-content>`
    }),
    __metadata("design:paramtypes", [])
], AppSidebarHeaderComponent);

let AppSidebarMinimizerComponent = class AppSidebarMinimizerComponent {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.role = 'button';
        this.sidebarMinimizerClass = true;
    }
    toggleOpen($event) {
        $event.preventDefault();
        this.sidebarService.toggle({ minimize: 'toggle' });
    }
};
AppSidebarMinimizerComponent.ctorParameters = () => [
    { type: AppSidebarService }
];
__decorate([
    HostBinding('attr.role'), Input(),
    __metadata("design:type", Object)
], AppSidebarMinimizerComponent.prototype, "role", void 0);
__decorate([
    HostBinding('class.sidebar-minimizer'),
    __metadata("design:type", Object)
], AppSidebarMinimizerComponent.prototype, "sidebarMinimizerClass", void 0);
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppSidebarMinimizerComponent.prototype, "toggleOpen", null);
AppSidebarMinimizerComponent = __decorate([
    Component({
        selector: 'app-sidebar-minimizer, cui-sidebar-minimizer',
        template: ``
    }),
    __metadata("design:paramtypes", [AppSidebarService])
], AppSidebarMinimizerComponent);

let NavDropdownDirective = class NavDropdownDirective {
    constructor(el) {
        this.el = el;
    }
    toggle() {
        this.el.nativeElement.classList.toggle('open');
    }
};
NavDropdownDirective.ctorParameters = () => [
    { type: ElementRef }
];
NavDropdownDirective = __decorate([
    Directive({
        selector: '[appNavDropdown]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], NavDropdownDirective);
/**
 * Allows the dropdown to be toggled via click.
 */
let NavDropdownToggleDirective = class NavDropdownToggleDirective {
    constructor(dropdown) {
        this.dropdown = dropdown;
    }
    toggleOpen($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    }
};
NavDropdownToggleDirective.ctorParameters = () => [
    { type: NavDropdownDirective }
];
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NavDropdownToggleDirective.prototype, "toggleOpen", null);
NavDropdownToggleDirective = __decorate([
    Directive({
        selector: '[appNavDropdownToggle]'
    }),
    __metadata("design:paramtypes", [NavDropdownDirective])
], NavDropdownToggleDirective);

let AppSidebarNavComponent = class AppSidebarNavComponent {
    constructor(router) {
        this.router = router;
        this.navItems = [];
        this.sidebarNavClass = true;
        this.role = 'nav';
        this.navItemsArray = [];
    }
    ngOnChanges(changes) {
        this.navItemsArray = Array.isArray(this.navItems) ? this.navItems.slice() : [];
    }
};
AppSidebarNavComponent.ctorParameters = () => [
    { type: Router }
];
__decorate([
    Input(),
    __metadata("design:type", Array)
], AppSidebarNavComponent.prototype, "navItems", void 0);
__decorate([
    HostBinding('class.sidebar-nav'),
    __metadata("design:type", Object)
], AppSidebarNavComponent.prototype, "sidebarNavClass", void 0);
__decorate([
    HostBinding('attr.role'), Input(),
    __metadata("design:type", Object)
], AppSidebarNavComponent.prototype, "role", void 0);
AppSidebarNavComponent = __decorate([
    Component({
        selector: 'app-sidebar-nav, cui-sidebar-nav',
        template: "<app-sidebar-nav-items\n  class=\"nav\"\n  [items]=\"navItemsArray\">\n</app-sidebar-nav-items>\n"
    }),
    __metadata("design:paramtypes", [Router])
], AppSidebarNavComponent);

let AppSidebarNavDividerComponent = class AppSidebarNavDividerComponent {
    constructor() { }
    ngOnInit() { }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppSidebarNavDividerComponent.prototype, "item", void 0);
AppSidebarNavDividerComponent = __decorate([
    Component({
        selector: 'app-sidebar-nav-divider, cui-sidebar-nav-divider',
        template: ``
    }),
    __metadata("design:paramtypes", [])
], AppSidebarNavDividerComponent);

let AppSidebarNavDropdownComponent = class AppSidebarNavDropdownComponent {
    constructor(helper) {
        this.helper = helper;
    }
};
AppSidebarNavDropdownComponent.ctorParameters = () => [
    { type: SidebarNavHelper }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppSidebarNavDropdownComponent.prototype, "item", void 0);
AppSidebarNavDropdownComponent = __decorate([
    Component({
        selector: 'app-sidebar-nav-dropdown, cui-sidebar-nav-dropdown',
        template: `
    <a class="nav-link nav-dropdown-toggle"
       appNavDropdownToggle
       [appHtmlAttr]="item.attributes">
      <i *ngIf="helper.hasIcon(item)" [ngClass]="item | appSidebarNavIcon"></i>
      <ng-container>{{item.name}}</ng-container>
      <span *ngIf="helper.hasBadge(item)" [ngClass]="item | appSidebarNavBadge">{{ item.badge.text }}</span>
    </a>
    <app-sidebar-nav-items
      class="nav-dropdown-items"
      [items]="item.children">
    </app-sidebar-nav-items>
  `,
        providers: [SidebarNavHelper],
        styles: ['.nav-dropdown-toggle { cursor: pointer; }',
            '.nav-dropdown-items { display: block; }']
    }),
    __metadata("design:paramtypes", [SidebarNavHelper])
], AppSidebarNavDropdownComponent);

let AppSidebarNavItemsComponent = class AppSidebarNavItemsComponent {
    constructor(document, renderer, router, helper) {
        this.document = document;
        this.renderer = renderer;
        this.router = router;
        this.helper = helper;
    }
    set items(items) {
        this._items = [...items];
    }
    get items() {
        return this._items;
    }
    hideMobile() {
        if (this.document.body.classList.contains('sidebar-show')) {
            this.renderer.removeClass(this.document.body, 'sidebar-show');
        }
    }
};
AppSidebarNavItemsComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: Router },
    { type: SidebarNavHelper }
];
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], AppSidebarNavItemsComponent.prototype, "items", null);
AppSidebarNavItemsComponent = __decorate([
    Component({
        selector: 'app-sidebar-nav-items, cui-sidebar-nav-items',
        template: `
    <ng-container *ngFor="let item of items">
      <ng-container [ngSwitch]="helper.itemType(item)">
        <app-sidebar-nav-dropdown
          *ngSwitchCase="'dropdown'"
          [item]="item"
          [class.open]="helper.isActive(router, item)"
          [ngClass]="item | appSidebarNavItemClass"
          appNavDropdown
          routerLinkActive="open">
        </app-sidebar-nav-dropdown>
        <app-sidebar-nav-divider
          *ngSwitchCase="'divider'"
          [item]="item"
          [ngClass]="item | appSidebarNavItemClass"
          [appHtmlAttr]="item.attributes">
        </app-sidebar-nav-divider>
        <app-sidebar-nav-title
          *ngSwitchCase="'title'"
          [item]="item"
          [ngClass]="item | appSidebarNavItemClass"
          [appHtmlAttr]="item.attributes">
        </app-sidebar-nav-title>
        <app-sidebar-nav-label
          *ngSwitchCase="'label'"
          [item]="item"
          class="nav-item"
          [ngClass]="item | appSidebarNavItemClass">
        </app-sidebar-nav-label>
        <ng-container
          *ngSwitchCase="'empty'">
        </ng-container>
        <app-sidebar-nav-link
          *ngSwitchDefault
          [item]="item"
          class="nav-item"
          [ngClass]="item | appSidebarNavItemClass"
          (linkClick)="hideMobile()"
        >
        </app-sidebar-nav-link>
      </ng-container>
    </ng-container>
  `
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2,
        Router,
        SidebarNavHelper])
], AppSidebarNavItemsComponent);

let AppSidebarNavLinkContentComponent = class AppSidebarNavLinkContentComponent {
    constructor(helper) {
        this.helper = helper;
    }
    ngOnInit() { }
    ngOnDestroy() { }
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
let AppSidebarNavLinkComponent = class AppSidebarNavLinkComponent {
    constructor(router) {
        this.router = router;
        this.linkClick = new EventEmitter();
        this.navigationEndObservable = router.events.pipe(filter(event => {
            return event instanceof NavigationEnd;
        }));
    }
    set item(item) {
        this._Item = JSON.parse(JSON.stringify(item));
    }
    get item() {
        return this._Item;
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

let AppSidebarNavTitleComponent = class AppSidebarNavTitleComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        const nativeElement = this.el.nativeElement;
        const name = this.renderer.createText(this.item.name);
        if (this.item.class) {
            const classes = this.item.class;
            this.renderer.addClass(nativeElement, classes);
        }
        if (this.item.wrapper) {
            const wrapper = this.renderer.createElement(this.item.wrapper.element);
            this.addAttribs(this.item.wrapper.attributes, wrapper);
            this.renderer.appendChild(wrapper, name);
            this.renderer.appendChild(nativeElement, wrapper);
        }
        else {
            this.renderer.appendChild(nativeElement, name);
        }
    }
    addAttribs(attribs, element) {
        if (attribs) {
            for (const attr in attribs) {
                if (attr === 'style' && typeof (attribs[attr]) === 'object') {
                    this.setStyle(attribs[attr], element);
                }
                else if (attr === 'class') {
                    this.addClass(attribs[attr], element);
                }
                else {
                    this.setAttrib(attr, attribs[attr], element);
                }
            }
        }
    }
    setStyle(styles, el) {
        for (const style in styles) {
            this.renderer.setStyle(el, style, styles[style]);
        }
    }
    addClass(classes, el) {
        const classArray = (Array.isArray(classes) ? classes : classes.split(' '));
        classArray.filter((element) => element.length > 0).forEach(element => {
            this.renderer.addClass(el, element);
        });
    }
    setAttrib(key, value, el) {
        this.renderer.setAttribute(el, key, value);
    }
};
AppSidebarNavTitleComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppSidebarNavTitleComponent.prototype, "item", void 0);
AppSidebarNavTitleComponent = __decorate([
    Component({
        selector: 'app-sidebar-nav-title, cui-sidebar-nav-title',
        template: ''
    }),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2])
], AppSidebarNavTitleComponent);

let AppSidebarNavLabelComponent = class AppSidebarNavLabelComponent {
    constructor(helper) {
        this.helper = helper;
        this.classes = {
            'nav-label': true,
            active: true
        };
        this.iconClasses = {};
    }
    ngOnInit() {
        this.iconClasses = this.helper.getIconClass(this.item);
    }
    getItemClass() {
        const itemClass = this.item.class;
        this.classes[itemClass] = !!itemClass;
        return this.classes;
    }
    getLabelIconClass() {
        const variant = `text-${this.item.label.variant}`;
        this.iconClasses[variant] = !!this.item.label.variant;
        const labelClass = this.item.label.class;
        this.iconClasses[labelClass] = !!labelClass;
        return this.iconClasses;
    }
};
AppSidebarNavLabelComponent.ctorParameters = () => [
    { type: SidebarNavHelper }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], AppSidebarNavLabelComponent.prototype, "item", void 0);
AppSidebarNavLabelComponent = __decorate([
    Component({
        selector: 'app-sidebar-nav-label, cui-sidebar-nav-label',
        template: "<a [ngClass]=\"getItemClass()\"\r\n   href=\"{{item.url}}\"\r\n   [appHtmlAttr]=\"item.attributes\">\r\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\r\n  <ng-container>{{item.name}}</ng-container>\r\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\r\n</a>\r\n"
    }),
    __metadata("design:paramtypes", [SidebarNavHelper])
], AppSidebarNavLabelComponent);

let AppSidebarNavIconPipe = class AppSidebarNavIconPipe {
    transform(item, args) {
        const classes = {
            'nav-icon': true
        };
        const icon = item.icon;
        classes[icon] = !!item.icon;
        return classes;
    }
};
AppSidebarNavIconPipe = __decorate([
    Pipe({
        name: 'appSidebarNavIcon'
    })
], AppSidebarNavIconPipe);

let AppSidebarNavBadgePipe = class AppSidebarNavBadgePipe {
    transform(item, args) {
        const classes = {
            badge: true
        };
        const variant = `badge-${item.badge.variant}`;
        classes[variant] = !!item.badge.variant;
        classes[item.badge.class] = !!item.badge.class;
        return classes;
    }
};
AppSidebarNavBadgePipe = __decorate([
    Pipe({
        name: 'appSidebarNavBadge'
    })
], AppSidebarNavBadgePipe);

let AppSidebarNavLinkPipe = class AppSidebarNavLinkPipe {
    transform(item) {
        const classes = { 'nav-link': true };
        const disabled = item.attributes && item.attributes.disabled;
        classes['disabled'] = disabled;
        classes['btn-link'] = disabled;
        classes[`nav-link-${item.variant}`] = !!item.variant;
        return classes;
    }
};
AppSidebarNavLinkPipe = __decorate([
    Pipe({
        name: 'appSidebarNavLink'
    })
], AppSidebarNavLinkPipe);

let AppSidebarNavItemClassPipe = class AppSidebarNavItemClassPipe {
    constructor(helper) {
        this.helper = helper;
    }
    transform(item, ...args) {
        const itemType = this.helper.itemType(item);
        let itemClass;
        if (['divider', 'title'].includes(itemType)) {
            itemClass = `nav-${itemType}`;
        }
        else if (itemType === 'dropdown') {
            itemClass = 'nav-item nav-dropdown';
        }
        else {
            itemClass = 'nav-item';
        }
        return item.class ? `${itemClass} ${item.class}` : itemClass;
    }
};
AppSidebarNavItemClassPipe.ctorParameters = () => [
    { type: SidebarNavHelper }
];
AppSidebarNavItemClassPipe = __decorate([
    Pipe({
        name: 'appSidebarNavItemClass'
    }),
    __metadata("design:paramtypes", [SidebarNavHelper])
], AppSidebarNavItemClassPipe);

let AppSidebarModule = class AppSidebarModule {
};
AppSidebarModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            LayoutModule
        ],
        exports: [
            AppSidebarFooterComponent,
            AppSidebarFormComponent,
            AppSidebarHeaderComponent,
            AppSidebarMinimizerComponent,
            AppSidebarComponent,
            AppSidebarNavItemsComponent,
            AppSidebarNavComponent,
            AppSidebarNavDividerComponent,
            AppSidebarNavDropdownComponent,
            AppSidebarNavLabelComponent,
            AppSidebarNavLinkComponent,
            AppSidebarNavLinkContentComponent,
            AppSidebarNavTitleComponent,
            NavDropdownDirective,
            NavDropdownToggleDirective,
            LayoutModule
        ],
        declarations: [
            AppSidebarFooterComponent,
            AppSidebarFormComponent,
            AppSidebarHeaderComponent,
            AppSidebarMinimizerComponent,
            AppSidebarMinimizerComponent,
            AppSidebarComponent,
            AppSidebarNavItemsComponent,
            AppSidebarNavComponent,
            AppSidebarNavDividerComponent,
            AppSidebarNavDropdownComponent,
            AppSidebarNavLinkComponent,
            AppSidebarNavLinkContentComponent,
            AppSidebarNavTitleComponent,
            NavDropdownDirective,
            NavDropdownToggleDirective,
            AppSidebarNavLabelComponent,
            AppSidebarNavIconPipe,
            AppSidebarNavBadgePipe,
            AppSidebarNavLinkPipe,
            AppSidebarNavItemClassPipe
        ],
        providers: [
            SidebarNavHelper,
            AppSidebarService
        ]
    })
], AppSidebarModule);

/*
 * Public API Surface of @coreui/angular
 */
// export * from './lib/shared/index';
// export * from './lib/coreui.module';

/**
 * Generated bundle index. Do not edit.
 */

export { AppAsideComponent, AppAsideModule, AppBreadcrumbComponent, AppBreadcrumbModule, AppFooterComponent, AppFooterModule, AppHeaderComponent, AppHeaderModule, AppSidebarComponent, AppSidebarModule, CuiBreadcrumbComponent, SidebarNavHelper, LayoutModule as ɵa, SidebarToggleDirective as ɵb, AppSidebarNavBadgePipe as ɵba, AppSidebarNavLinkPipe as ɵbb, AppSidebarNavItemClassPipe as ɵbc, SidebarMinimizeDirective as ɵc, MobileSidebarToggleDirective as ɵd, SidebarOffCanvasCloseDirective as ɵe, BrandMinimizeDirective as ɵf, AsideToggleDirective as ɵg, HtmlAttributesDirective as ɵh, ClassToggler as ɵi, AppBreadcrumbService as ɵj, AppSidebarService as ɵk, AppSidebarFooterComponent as ɵl, AppSidebarFormComponent as ɵm, AppSidebarHeaderComponent as ɵn, AppSidebarMinimizerComponent as ɵo, AppSidebarNavItemsComponent as ɵp, AppSidebarNavComponent as ɵq, AppSidebarNavDividerComponent as ɵr, AppSidebarNavDropdownComponent as ɵs, AppSidebarNavLabelComponent as ɵt, AppSidebarNavLinkContentComponent as ɵu, AppSidebarNavLinkComponent as ɵv, AppSidebarNavTitleComponent as ɵw, NavDropdownDirective as ɵx, NavDropdownToggleDirective as ɵy, AppSidebarNavIconPipe as ɵz };
//# sourceMappingURL=coreui-angular.js.map
