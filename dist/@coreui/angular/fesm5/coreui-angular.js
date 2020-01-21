import { __decorate, __param, __metadata, __spread } from 'tslib';
import { Inject, Renderer2, Injectable, Input, HostListener, Directive, ElementRef, NgModule, HostBinding, Component, ɵɵdefineInjectable, ɵɵinject, EventEmitter, Output, Pipe } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { NavigationEnd, Router, ActivatedRoute, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

var sidebarCssClasses = [
    'sidebar-show',
    'sidebar-sm-show',
    'sidebar-md-show',
    'sidebar-lg-show',
    'sidebar-xl-show'
];
var asideMenuCssClasses = [
    'aside-menu-show',
    'aside-menu-sm-show',
    'aside-menu-md-show',
    'aside-menu-lg-show',
    'aside-menu-xl-show'
];

var RemoveClasses = function (NewClassNames) {
    var MatchClasses = NewClassNames.map(function (Class) { return document.body.classList.contains(Class); });
    return MatchClasses.indexOf(true) !== -1;
};
var ɵ0 = RemoveClasses;
var ToggleClasses = function (Toggle, ClassNames) {
    var Level = ClassNames.indexOf(Toggle);
    var NewClassNames = ClassNames.slice(0, Level + 1);
    if (RemoveClasses(NewClassNames)) {
        NewClassNames.map(function (Class) { return document.body.classList.remove(Class); });
    }
    else {
        document.body.classList.add(Toggle);
    }
};
var ClassToggler = /** @class */ (function () {
    function ClassToggler(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    ClassToggler.prototype.removeClasses = function (NewClassNames) {
        var _this = this;
        var MatchClasses = NewClassNames.map(function (Class) { return _this.document.body.classList.contains(Class); });
        return MatchClasses.indexOf(true) !== -1;
    };
    ClassToggler.prototype.toggleClasses = function (Toggle, ClassNames) {
        var _this = this;
        var Level = ClassNames.indexOf(Toggle);
        var NewClassNames = ClassNames.slice(0, Level + 1);
        if (this.removeClasses(NewClassNames)) {
            NewClassNames.map(function (Class) { return _this.renderer.removeClass(_this.document.body, Class); });
        }
        else {
            this.renderer.addClass(this.document.body, Toggle);
        }
    };
    ClassToggler.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
    ClassToggler = __decorate([
        Injectable(),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object, Renderer2])
    ], ClassToggler);
    return ClassToggler;
}());

/**
 * Allows the sidebar to be toggled via click.
 */
var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective(classToggler) {
        this.classToggler = classToggler;
    }
    SidebarToggleDirective.prototype.ngOnInit = function () {
        this.bp = this.breakpoint;
    };
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        var cssClass = this.bp ? "sidebar-" + this.bp + "-show" : sidebarCssClasses[0];
        this.classToggler.toggleClasses(cssClass, sidebarCssClasses);
    };
    SidebarToggleDirective.ctorParameters = function () { return [
        { type: ClassToggler }
    ]; };
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
    return SidebarToggleDirective;
}());
var SidebarMinimizeDirective = /** @class */ (function () {
    function SidebarMinimizeDirective(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    SidebarMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        var body = this.document.body;
        body.classList.contains('sidebar-minimized') ?
            this.renderer.removeClass(body, 'sidebar-minimized') :
            this.renderer.addClass(body, 'sidebar-minimized');
    };
    SidebarMinimizeDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
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
    return SidebarMinimizeDirective;
}());
var MobileSidebarToggleDirective = /** @class */ (function () {
    function MobileSidebarToggleDirective(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        var body = this.document.body;
        body.classList.contains('sidebar-show') ?
            this.renderer.removeClass(body, 'sidebar-show') :
            this.renderer.addClass(body, 'sidebar-show');
    };
    MobileSidebarToggleDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
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
    return MobileSidebarToggleDirective;
}());
/**
 * Allows the off-canvas sidebar to be closed via click.
 */
var SidebarOffCanvasCloseDirective = /** @class */ (function () {
    function SidebarOffCanvasCloseDirective(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        var body = this.document.body;
        if (body.classList.contains('sidebar-off-canvas')) {
            body.classList.contains('sidebar-show') ?
                this.renderer.removeClass(body, 'sidebar-show') :
                this.renderer.addClass(body, 'sidebar-show');
        }
    };
    SidebarOffCanvasCloseDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
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
    return SidebarOffCanvasCloseDirective;
}());
var BrandMinimizeDirective = /** @class */ (function () {
    function BrandMinimizeDirective(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    BrandMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        var body = this.document.body;
        body.classList.contains('brand-minimized') ?
            this.renderer.removeClass(body, 'brand-minimized') :
            this.renderer.addClass(body, 'brand-minimized');
    };
    BrandMinimizeDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
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
    return BrandMinimizeDirective;
}());
/**
 * Allows the aside to be toggled via click.
 */
var AsideToggleDirective = /** @class */ (function () {
    function AsideToggleDirective(classToggler) {
        this.classToggler = classToggler;
    }
    AsideToggleDirective.prototype.ngOnInit = function () {
        this.bp = this.breakpoint;
    };
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        var cssClass = this.bp ? "aside-menu-" + this.bp + "-show" : asideMenuCssClasses[0];
        this.classToggler.toggleClasses(cssClass, asideMenuCssClasses);
    };
    AsideToggleDirective.ctorParameters = function () { return [
        { type: ClassToggler }
    ]; };
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
    return AsideToggleDirective;
}());
var HtmlAttributesDirective = /** @class */ (function () {
    function HtmlAttributesDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    HtmlAttributesDirective.prototype.ngOnInit = function () {
        var attribs = this.appHtmlAttr;
        for (var attr in attribs) {
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
    };
    HtmlAttributesDirective.prototype.setStyle = function (styles) {
        for (var style in styles) {
            this.renderer.setStyle(this.el.nativeElement, style, styles[style]);
        }
    };
    HtmlAttributesDirective.prototype.addClass = function (classes) {
        var _this = this;
        var classArray = (Array.isArray(classes) ? classes : classes.split(' '));
        classArray.filter(function (element) { return element.length > 0; }).forEach(function (element) {
            _this.renderer.addClass(_this.el.nativeElement, element);
        });
    };
    HtmlAttributesDirective.prototype.setAttrib = function (key, value) {
        value !== null ?
            this.renderer.setAttribute(this.el.nativeElement, key, value) :
            this.renderer.removeAttribute(this.el.nativeElement, key);
    };
    HtmlAttributesDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
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
    return HtmlAttributesDirective;
}());

var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
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
    return LayoutModule;
}());

function Replace(el) {
    var nativeElement = el.nativeElement;
    var parentElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
        parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
}

var AppAsideComponent = /** @class */ (function () {
    function AppAsideComponent(document, renderer) {
        this.document = document;
        this.renderer = renderer;
        this.fixedClass = 'aside-menu-fixed';
        this.asideMenuClass = true;
    }
    AppAsideComponent.prototype.ngOnInit = function () {
        this.isFixed(this.fixed);
        this.isOffCanvas(this.offCanvas);
        this.displayBreakpoint(this.display);
    };
    AppAsideComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    };
    AppAsideComponent.prototype.isFixed = function (fixed) {
        if (fixed === void 0) { fixed = this.fixed; }
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    };
    AppAsideComponent.prototype.isOffCanvas = function (offCanvas) {
        if (offCanvas === void 0) { offCanvas = this.offCanvas; }
        if (offCanvas) {
            this.renderer.addClass(this.document.body, 'aside-menu-off-canvas');
        }
    };
    AppAsideComponent.prototype.displayBreakpoint = function (display) {
        if (display === void 0) { display = this.display; }
        if (display !== false) {
            var cssClass = this.display ? "aside-menu-" + this.display + "-show" : asideMenuCssClasses[0];
            this.renderer.addClass(this.document.body, cssClass);
        }
    };
    AppAsideComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
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
            template: "<ng-content></ng-content>"
        }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object, Renderer2])
    ], AppAsideComponent);
    return AppAsideComponent;
}());

var AppAsideModule = /** @class */ (function () {
    function AppAsideModule() {
    }
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
    return AppAsideModule;
}());

var AppBreadcrumbService = /** @class */ (function () {
    function AppBreadcrumbService(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.breadcrumbSubject = new BehaviorSubject(new Array());
        this.breadcrumbs = this.breadcrumbSubject.asObservable();
        this.router.events.pipe(filter(function (event) { return event instanceof NavigationEnd; })).subscribe(function (event) {
            var breadcrumbs = [];
            var currentRoute = _this.route.root;
            var url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                // tslint:disable-next-line:no-shadowed-variable
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
            _this.breadcrumbSubject.next(Object.assign([], breadcrumbs));
            return breadcrumbs;
        });
    }
    AppBreadcrumbService.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute }
    ]; };
    AppBreadcrumbService.ɵprov = ɵɵdefineInjectable({ factory: function AppBreadcrumbService_Factory() { return new AppBreadcrumbService(ɵɵinject(Router), ɵɵinject(ActivatedRoute)); }, token: AppBreadcrumbService, providedIn: "root" });
    AppBreadcrumbService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute])
    ], AppBreadcrumbService);
    return AppBreadcrumbService;
}());

var AppBreadcrumbComponent = /** @class */ (function () {
    function AppBreadcrumbComponent(document, renderer, service, el) {
        this.document = document;
        this.renderer = renderer;
        this.service = service;
        this.el = el;
        this.fixedClass = 'breadcrumb-fixed';
    }
    AppBreadcrumbComponent.prototype.ngOnInit = function () {
        Replace(this.el);
        this.isFixed(this.fixed);
        this.breadcrumbs = this.service.breadcrumbs;
    };
    AppBreadcrumbComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    };
    AppBreadcrumbComponent.prototype.isFixed = function (fixed) {
        if (fixed === void 0) { fixed = this.fixed; }
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    };
    AppBreadcrumbComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: AppBreadcrumbService },
        { type: ElementRef }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AppBreadcrumbComponent.prototype, "fixed", void 0);
    AppBreadcrumbComponent = __decorate([
        Component({
            selector: 'app-breadcrumb',
            template: "\n    <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last = last>\n      <li class=\"breadcrumb-item\"\n          *ngIf=\"breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)\"\n          [ngClass]=\"{active: last}\">\n        <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n        <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n      </li>\n    </ng-template>\n  "
        }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object, Renderer2,
            AppBreadcrumbService,
            ElementRef])
    ], AppBreadcrumbComponent);
    return AppBreadcrumbComponent;
}());

var CuiBreadcrumbComponent = /** @class */ (function () {
    function CuiBreadcrumbComponent(document, renderer, service) {
        this.document = document;
        this.renderer = renderer;
        this.service = service;
        this.fixedClass = 'breadcrumb-fixed';
    }
    CuiBreadcrumbComponent.prototype.ngOnInit = function () {
        this.isFixed(this.fixed);
        this.breadcrumbs = this.service.breadcrumbs;
    };
    CuiBreadcrumbComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    };
    CuiBreadcrumbComponent.prototype.isFixed = function (fixed) {
        if (fixed === void 0) { fixed = this.fixed; }
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    };
    CuiBreadcrumbComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: AppBreadcrumbService }
    ]; };
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
    return CuiBreadcrumbComponent;
}());

// @dynamic
var AppBreadcrumbModule = /** @class */ (function () {
    function AppBreadcrumbModule() {
    }
    AppBreadcrumbModule_1 = AppBreadcrumbModule;
    AppBreadcrumbModule.forRoot = function (config) {
        return {
            ngModule: AppBreadcrumbModule_1,
            providers: [
                AppBreadcrumbService
            ]
        };
    };
    var AppBreadcrumbModule_1;
    AppBreadcrumbModule = AppBreadcrumbModule_1 = __decorate([
        NgModule({
            imports: [CommonModule, RouterModule],
            exports: [AppBreadcrumbComponent, CuiBreadcrumbComponent],
            declarations: [AppBreadcrumbComponent, CuiBreadcrumbComponent]
        })
    ], AppBreadcrumbModule);
    return AppBreadcrumbModule;
}());

var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent(document, renderer) {
        this.document = document;
        this.renderer = renderer;
        this.fixedClass = 'footer-fixed';
        this.appFooterClass = true;
    }
    AppFooterComponent.prototype.ngOnInit = function () {
        this.isFixed(this.fixed);
    };
    AppFooterComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    };
    AppFooterComponent.prototype.isFixed = function (fixed) {
        if (fixed === void 0) { fixed = this.fixed; }
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    };
    AppFooterComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
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
            template: "<ng-content></ng-content>"
        }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object, Renderer2])
    ], AppFooterComponent);
    return AppFooterComponent;
}());

var AppFooterModule = /** @class */ (function () {
    function AppFooterModule() {
    }
    AppFooterModule = __decorate([
        NgModule({
            imports: [CommonModule],
            exports: [AppFooterComponent],
            declarations: [AppFooterComponent]
        })
    ], AppFooterModule);
    return AppFooterModule;
}());

var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(document, renderer) {
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
    AppHeaderComponent.prototype.ngOnInit = function () {
        this.isFixed(this.fixed);
        this.navbarBrandImg = Boolean(this.navbarBrand || this.navbarBrandFull || this.navbarBrandMinimized);
        this.navbarBrandRouterLink = this.navbarBrandRouterLink[0] ? this.navbarBrandRouterLink : this.navbarBrandHref;
        this.sidebarTogglerClass = this.setToggerBreakpointClass(this.sidebarToggler);
        this.sidebarTogglerMobileClass = this.setToggerMobileBreakpointClass(this.sidebarToggler);
        this.asideTogglerClass = this.setToggerBreakpointClass(this.asideMenuToggler);
        this.asideTogglerMobileClass = this.setToggerMobileBreakpointClass(this.asideMenuToggler);
    };
    AppHeaderComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    };
    AppHeaderComponent.prototype.isFixed = function (fixed) {
        if (fixed === void 0) { fixed = this.fixed; }
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    };
    AppHeaderComponent.prototype.setToggerBreakpointClass = function (breakpoint) {
        if (breakpoint === void 0) { breakpoint = 'md'; }
        var togglerClass = 'd-none d-md-block';
        if (this.breakpoints.includes(breakpoint)) {
            var breakpointIndex = this.breakpoints.indexOf(breakpoint);
            togglerClass = "d-none d-" + breakpoint + "-block";
        }
        return togglerClass;
    };
    AppHeaderComponent.prototype.setToggerMobileBreakpointClass = function (breakpoint) {
        if (breakpoint === void 0) { breakpoint = 'lg'; }
        var togglerClass = 'd-lg-none';
        if (this.breakpoints.includes(breakpoint)) {
            togglerClass = "d-" + breakpoint + "-none";
        }
        return togglerClass;
    };
    AppHeaderComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
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
    return AppHeaderComponent;
}());

var AppHeaderModule = /** @class */ (function () {
    function AppHeaderModule() {
    }
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
    return AppHeaderModule;
}());

var AppSidebarService = /** @class */ (function () {
    function AppSidebarService() {
        this.events = new BehaviorSubject({});
        this.events$ = this.events.asObservable();
    }
    AppSidebarService.prototype.toggle = function (action) {
        this.events.next(action);
    };
    AppSidebarService.ɵprov = ɵɵdefineInjectable({ factory: function AppSidebarService_Factory() { return new AppSidebarService(); }, token: AppSidebarService, providedIn: "root" });
    AppSidebarService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AppSidebarService);
    return AppSidebarService;
}());

var AppSidebarComponent = /** @class */ (function () {
    function AppSidebarComponent(document, renderer, sidebarService) {
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
    Object.defineProperty(AppSidebarComponent.prototype, "minimized", {
        get: function () {
            return this._minimized;
        },
        set: function (value) {
            // only update / emit events when the value changes
            if (this._minimized !== value) {
                this._minimized = value;
                this._updateMinimized(value);
                this.minimizedChange.emit(value);
                this.sidebarService.toggle({ minimize: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    AppSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayBreakpoint(this.display);
        this.isCompact(this.compact);
        this.isFixed(this.fixed);
        this.isOffCanvas(this.offCanvas);
        this.sidebarService.toggle({ minimize: this.minimized });
        this.subscriptionEvents = this.sidebarService.events$.subscribe(function (action) {
            if (action.minimize !== undefined) {
                action.minimize === 'toggle' ? _this.toggleMinimized() : _this.minimized = !!action.minimize;
            }
        });
    };
    AppSidebarComponent.prototype.ngOnDestroy = function () {
        this.subscriptionEvents.unsubscribe();
        this.minimizedChange.complete();
        this.renderer.removeClass(this.document.body, 'sidebar-fixed');
        this._updateMinimized(false);
    };
    AppSidebarComponent.prototype.isCompact = function (compact) {
        if (compact === void 0) { compact = this.compact; }
        if (compact) {
            this.renderer.addClass(this.document.body, 'sidebar-compact');
        }
    };
    AppSidebarComponent.prototype.isFixed = function (fixed) {
        if (fixed === void 0) { fixed = this.fixed; }
        if (fixed) {
            this.renderer.addClass(this.document.body, 'sidebar-fixed');
        }
    };
    AppSidebarComponent.prototype.toggleMinimized = function () {
        this.minimized = !this._minimized;
    };
    AppSidebarComponent.prototype.isOffCanvas = function (offCanvas) {
        if (offCanvas === void 0) { offCanvas = this.offCanvas; }
        if (offCanvas) {
            this.renderer.addClass(this.document.body, 'sidebar-off-canvas');
        }
    };
    AppSidebarComponent.prototype.displayBreakpoint = function (display) {
        if (display === void 0) { display = this.display; }
        if (display !== false) {
            var cssClass = display ? "sidebar-" + display + "-show" : sidebarCssClasses[0];
            this.renderer.addClass(this.document.body, cssClass);
        }
    };
    AppSidebarComponent.prototype._updateMinimized = function (minimized) {
        var body = this.document.body;
        if (minimized) {
            this.renderer.addClass(body, 'sidebar-minimized');
            this.renderer.addClass(body, 'brand-minimized');
        }
        else {
            this.renderer.removeClass(body, 'sidebar-minimized');
            this.renderer.removeClass(body, 'brand-minimized');
        }
    };
    AppSidebarComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: AppSidebarService }
    ]; };
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
            template: "<ng-content></ng-content>"
        }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object, Renderer2,
            AppSidebarService])
    ], AppSidebarComponent);
    return AppSidebarComponent;
}());

var SidebarNavService = /** @class */ (function () {
    function SidebarNavService() {
    }
    SidebarNavService = __decorate([
        Injectable()
    ], SidebarNavService);
    return SidebarNavService;
}());
var SidebarNavHelper = /** @class */ (function () {
    function SidebarNavHelper() {
        this.hasBadge = function (item) { return Boolean(item.badge); };
        this.hasIcon = function (item) { return Boolean(item.icon); };
    }
    SidebarNavHelper.prototype.itemType = function (item) {
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
    };
    SidebarNavHelper.prototype.isActive = function (router, item) {
        return router.isActive(item.url, false);
    };
    SidebarNavHelper.prototype.getIconClass = function (item) {
        var classes = {
            'nav-icon': true
        };
        var icon = item.icon;
        classes[icon] = this.hasIcon(item);
        return classes;
    };
    SidebarNavHelper = __decorate([
        Injectable()
    ], SidebarNavHelper);
    return SidebarNavHelper;
}());

var AppSidebarFooterComponent = /** @class */ (function () {
    function AppSidebarFooterComponent() {
        this.sidebarFooterClass = true;
    }
    __decorate([
        HostBinding('class.sidebar-footer'),
        __metadata("design:type", Object)
    ], AppSidebarFooterComponent.prototype, "sidebarFooterClass", void 0);
    AppSidebarFooterComponent = __decorate([
        Component({
            selector: 'app-sidebar-footer, cui-sidebar-footer',
            template: "<ng-content></ng-content>"
        }),
        __metadata("design:paramtypes", [])
    ], AppSidebarFooterComponent);
    return AppSidebarFooterComponent;
}());

var AppSidebarFormComponent = /** @class */ (function () {
    function AppSidebarFormComponent() {
        this.sidebarFormClass = true;
    }
    __decorate([
        HostBinding('class.sidebar-form'),
        __metadata("design:type", Object)
    ], AppSidebarFormComponent.prototype, "sidebarFormClass", void 0);
    AppSidebarFormComponent = __decorate([
        Component({
            selector: 'app-sidebar-form, cui-sidebar-form',
            template: "<ng-content></ng-content>"
        }),
        __metadata("design:paramtypes", [])
    ], AppSidebarFormComponent);
    return AppSidebarFormComponent;
}());

var AppSidebarHeaderComponent = /** @class */ (function () {
    function AppSidebarHeaderComponent() {
        this.sidebarHeaderClass = true;
    }
    __decorate([
        HostBinding('class.sidebar-header'),
        __metadata("design:type", Object)
    ], AppSidebarHeaderComponent.prototype, "sidebarHeaderClass", void 0);
    AppSidebarHeaderComponent = __decorate([
        Component({
            selector: 'app-sidebar-header, cui-sidebar-header',
            template: "<ng-content></ng-content>"
        }),
        __metadata("design:paramtypes", [])
    ], AppSidebarHeaderComponent);
    return AppSidebarHeaderComponent;
}());

var AppSidebarMinimizerComponent = /** @class */ (function () {
    function AppSidebarMinimizerComponent(sidebarService) {
        this.sidebarService = sidebarService;
        this.role = 'button';
        this.sidebarMinimizerClass = true;
    }
    AppSidebarMinimizerComponent.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.sidebarService.toggle({ minimize: 'toggle' });
    };
    AppSidebarMinimizerComponent.ctorParameters = function () { return [
        { type: AppSidebarService }
    ]; };
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
            template: ""
        }),
        __metadata("design:paramtypes", [AppSidebarService])
    ], AppSidebarMinimizerComponent);
    return AppSidebarMinimizerComponent;
}());

var NavDropdownDirective = /** @class */ (function () {
    function NavDropdownDirective(el) {
        this.el = el;
    }
    NavDropdownDirective.prototype.toggle = function () {
        this.el.nativeElement.classList.toggle('open');
    };
    NavDropdownDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    NavDropdownDirective = __decorate([
        Directive({
            selector: '[appNavDropdown]'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], NavDropdownDirective);
    return NavDropdownDirective;
}());
/**
 * Allows the dropdown to be toggled via click.
 */
var NavDropdownToggleDirective = /** @class */ (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    NavDropdownToggleDirective.ctorParameters = function () { return [
        { type: NavDropdownDirective }
    ]; };
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
    return NavDropdownToggleDirective;
}());

var AppSidebarNavComponent = /** @class */ (function () {
    function AppSidebarNavComponent(router) {
        this.router = router;
        this.navItems = [];
        this.sidebarNavClass = true;
        this.role = 'nav';
        this.navItemsArray = [];
    }
    AppSidebarNavComponent.prototype.ngOnChanges = function (changes) {
        this.navItemsArray = Array.isArray(this.navItems) ? this.navItems.slice() : [];
    };
    AppSidebarNavComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
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
    return AppSidebarNavComponent;
}());

var AppSidebarNavDividerComponent = /** @class */ (function () {
    function AppSidebarNavDividerComponent() {
    }
    AppSidebarNavDividerComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AppSidebarNavDividerComponent.prototype, "item", void 0);
    AppSidebarNavDividerComponent = __decorate([
        Component({
            selector: 'app-sidebar-nav-divider, cui-sidebar-nav-divider',
            template: ""
        }),
        __metadata("design:paramtypes", [])
    ], AppSidebarNavDividerComponent);
    return AppSidebarNavDividerComponent;
}());

var AppSidebarNavDropdownComponent = /** @class */ (function () {
    function AppSidebarNavDropdownComponent(helper) {
        this.helper = helper;
    }
    AppSidebarNavDropdownComponent.ctorParameters = function () { return [
        { type: SidebarNavHelper }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AppSidebarNavDropdownComponent.prototype, "item", void 0);
    AppSidebarNavDropdownComponent = __decorate([
        Component({
            selector: 'app-sidebar-nav-dropdown, cui-sidebar-nav-dropdown',
            template: "\n    <a class=\"nav-link nav-dropdown-toggle\"\n       appNavDropdownToggle\n       [appHtmlAttr]=\"item.attributes\">\n      <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"item | appSidebarNavIcon\"></i>\n      <ng-container>{{item.name}}</ng-container>\n      <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\n    </a>\n    <app-sidebar-nav-items\n      class=\"nav-dropdown-items\"\n      [items]=\"item.children\">\n    </app-sidebar-nav-items>\n  ",
            providers: [SidebarNavHelper],
            styles: ['.nav-dropdown-toggle { cursor: pointer; }',
                '.nav-dropdown-items { display: block; }']
        }),
        __metadata("design:paramtypes", [SidebarNavHelper])
    ], AppSidebarNavDropdownComponent);
    return AppSidebarNavDropdownComponent;
}());

var AppSidebarNavItemsComponent = /** @class */ (function () {
    function AppSidebarNavItemsComponent(document, renderer, router, helper) {
        this.document = document;
        this.renderer = renderer;
        this.router = router;
        this.helper = helper;
    }
    Object.defineProperty(AppSidebarNavItemsComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = __spread(items);
        },
        enumerable: true,
        configurable: true
    });
    AppSidebarNavItemsComponent.prototype.hideMobile = function () {
        if (this.document.body.classList.contains('sidebar-show')) {
            this.renderer.removeClass(this.document.body, 'sidebar-show');
        }
    };
    AppSidebarNavItemsComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: Router },
        { type: SidebarNavHelper }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], AppSidebarNavItemsComponent.prototype, "items", null);
    AppSidebarNavItemsComponent = __decorate([
        Component({
            selector: 'app-sidebar-nav-items, cui-sidebar-nav-items',
            template: "\n    <ng-container *ngFor=\"let item of items\">\n      <ng-container [ngSwitch]=\"helper.itemType(item)\">\n        <app-sidebar-nav-dropdown\n          *ngSwitchCase=\"'dropdown'\"\n          [item]=\"item\"\n          [class.open]=\"helper.isActive(router, item)\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          appNavDropdown\n          routerLinkActive=\"open\">\n        </app-sidebar-nav-dropdown>\n        <app-sidebar-nav-divider\n          *ngSwitchCase=\"'divider'\"\n          [item]=\"item\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          [appHtmlAttr]=\"item.attributes\">\n        </app-sidebar-nav-divider>\n        <app-sidebar-nav-title\n          *ngSwitchCase=\"'title'\"\n          [item]=\"item\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          [appHtmlAttr]=\"item.attributes\">\n        </app-sidebar-nav-title>\n        <app-sidebar-nav-label\n          *ngSwitchCase=\"'label'\"\n          [item]=\"item\"\n          class=\"nav-item\"\n          [ngClass]=\"item | appSidebarNavItemClass\">\n        </app-sidebar-nav-label>\n        <ng-container\n          *ngSwitchCase=\"'empty'\">\n        </ng-container>\n        <app-sidebar-nav-link\n          *ngSwitchDefault\n          [item]=\"item\"\n          class=\"nav-item\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          (linkClick)=\"hideMobile()\"\n        >\n        </app-sidebar-nav-link>\n      </ng-container>\n    </ng-container>\n  "
        }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object, Renderer2,
            Router,
            SidebarNavHelper])
    ], AppSidebarNavItemsComponent);
    return AppSidebarNavItemsComponent;
}());

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

var AppSidebarNavTitleComponent = /** @class */ (function () {
    function AppSidebarNavTitleComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    AppSidebarNavTitleComponent.prototype.ngOnInit = function () {
        var nativeElement = this.el.nativeElement;
        var name = this.renderer.createText(this.item.name);
        if (this.item.class) {
            var classes = this.item.class;
            this.renderer.addClass(nativeElement, classes);
        }
        if (this.item.wrapper) {
            var wrapper = this.renderer.createElement(this.item.wrapper.element);
            this.addAttribs(this.item.wrapper.attributes, wrapper);
            this.renderer.appendChild(wrapper, name);
            this.renderer.appendChild(nativeElement, wrapper);
        }
        else {
            this.renderer.appendChild(nativeElement, name);
        }
    };
    AppSidebarNavTitleComponent.prototype.addAttribs = function (attribs, element) {
        if (attribs) {
            for (var attr in attribs) {
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
    };
    AppSidebarNavTitleComponent.prototype.setStyle = function (styles, el) {
        for (var style in styles) {
            this.renderer.setStyle(el, style, styles[style]);
        }
    };
    AppSidebarNavTitleComponent.prototype.addClass = function (classes, el) {
        var _this = this;
        var classArray = (Array.isArray(classes) ? classes : classes.split(' '));
        classArray.filter(function (element) { return element.length > 0; }).forEach(function (element) {
            _this.renderer.addClass(el, element);
        });
    };
    AppSidebarNavTitleComponent.prototype.setAttrib = function (key, value, el) {
        this.renderer.setAttribute(el, key, value);
    };
    AppSidebarNavTitleComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return AppSidebarNavTitleComponent;
}());

var AppSidebarNavLabelComponent = /** @class */ (function () {
    function AppSidebarNavLabelComponent(helper) {
        this.helper = helper;
        this.classes = {
            'nav-label': true,
            active: true
        };
        this.iconClasses = {};
    }
    AppSidebarNavLabelComponent.prototype.ngOnInit = function () {
        this.iconClasses = this.helper.getIconClass(this.item);
    };
    AppSidebarNavLabelComponent.prototype.getItemClass = function () {
        var itemClass = this.item.class;
        this.classes[itemClass] = !!itemClass;
        return this.classes;
    };
    AppSidebarNavLabelComponent.prototype.getLabelIconClass = function () {
        var variant = "text-" + this.item.label.variant;
        this.iconClasses[variant] = !!this.item.label.variant;
        var labelClass = this.item.label.class;
        this.iconClasses[labelClass] = !!labelClass;
        return this.iconClasses;
    };
    AppSidebarNavLabelComponent.ctorParameters = function () { return [
        { type: SidebarNavHelper }
    ]; };
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
    return AppSidebarNavLabelComponent;
}());

var AppSidebarNavIconPipe = /** @class */ (function () {
    function AppSidebarNavIconPipe() {
    }
    AppSidebarNavIconPipe.prototype.transform = function (item, args) {
        var classes = {
            'nav-icon': true
        };
        var icon = item.icon;
        classes[icon] = !!item.icon;
        return classes;
    };
    AppSidebarNavIconPipe = __decorate([
        Pipe({
            name: 'appSidebarNavIcon'
        })
    ], AppSidebarNavIconPipe);
    return AppSidebarNavIconPipe;
}());

var AppSidebarNavBadgePipe = /** @class */ (function () {
    function AppSidebarNavBadgePipe() {
    }
    AppSidebarNavBadgePipe.prototype.transform = function (item, args) {
        var classes = {
            badge: true
        };
        var variant = "badge-" + item.badge.variant;
        classes[variant] = !!item.badge.variant;
        classes[item.badge.class] = !!item.badge.class;
        return classes;
    };
    AppSidebarNavBadgePipe = __decorate([
        Pipe({
            name: 'appSidebarNavBadge'
        })
    ], AppSidebarNavBadgePipe);
    return AppSidebarNavBadgePipe;
}());

var AppSidebarNavLinkPipe = /** @class */ (function () {
    function AppSidebarNavLinkPipe() {
    }
    AppSidebarNavLinkPipe.prototype.transform = function (item) {
        var classes = { 'nav-link': true };
        var disabled = item.attributes && item.attributes.disabled;
        classes['disabled'] = disabled;
        classes['btn-link'] = disabled;
        classes["nav-link-" + item.variant] = !!item.variant;
        return classes;
    };
    AppSidebarNavLinkPipe = __decorate([
        Pipe({
            name: 'appSidebarNavLink'
        })
    ], AppSidebarNavLinkPipe);
    return AppSidebarNavLinkPipe;
}());

var AppSidebarNavItemClassPipe = /** @class */ (function () {
    function AppSidebarNavItemClassPipe(helper) {
        this.helper = helper;
    }
    AppSidebarNavItemClassPipe.prototype.transform = function (item) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var itemType = this.helper.itemType(item);
        var itemClass;
        if (['divider', 'title'].includes(itemType)) {
            itemClass = "nav-" + itemType;
        }
        else if (itemType === 'dropdown') {
            itemClass = 'nav-item nav-dropdown';
        }
        else {
            itemClass = 'nav-item';
        }
        return item.class ? itemClass + " " + item.class : itemClass;
    };
    AppSidebarNavItemClassPipe.ctorParameters = function () { return [
        { type: SidebarNavHelper }
    ]; };
    AppSidebarNavItemClassPipe = __decorate([
        Pipe({
            name: 'appSidebarNavItemClass'
        }),
        __metadata("design:paramtypes", [SidebarNavHelper])
    ], AppSidebarNavItemClassPipe);
    return AppSidebarNavItemClassPipe;
}());

var AppSidebarModule = /** @class */ (function () {
    function AppSidebarModule() {
    }
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
    return AppSidebarModule;
}());

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
