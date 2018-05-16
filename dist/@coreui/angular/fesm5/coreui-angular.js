import { Directive, HostListener, Input, NgModule, Component, ElementRef, Injectable, HostBinding, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs/index';
import { filter } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ sidebarCssClasses = [
    'sidebar-show',
    'sidebar-sm-show',
    'sidebar-md-show',
    'sidebar-lg-show',
    'sidebar-xl-show'
];
var /** @type {?} */ asideMenuCssClasses = [
    'aside-menu-show',
    'aside-menu-sm-show',
    'aside-menu-md-show',
    'aside-menu-lg-show',
    'aside-menu-xl-show'
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ RemoveClasses = function (NewClassNames) {
    var /** @type {?} */ MatchClasses = NewClassNames.map(function (Class) { return document.querySelector('body').classList.contains(Class); });
    return MatchClasses.indexOf(true) !== -1;
};
var /** @type {?} */ ToggleClasses = function (Toggle, ClassNames) {
    var /** @type {?} */ Level = ClassNames.indexOf(Toggle);
    var /** @type {?} */ NewClassNames = ClassNames.slice(0, Level + 1);
    if (RemoveClasses(NewClassNames)) {
        NewClassNames.map(function (Class) { return document.querySelector('body').classList.remove(Class); });
    }
    else {
        document.querySelector('body').classList.add(Toggle);
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Allows the sidebar to be toggled via click.
 */
var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective() {
    }
    /**
     * @return {?}
     */
    SidebarToggleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.bp = this.breakpoint;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SidebarToggleDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        var /** @type {?} */ cssClass;
        this.bp ? cssClass = "sidebar-" + this.bp + "-show" : cssClass = sidebarCssClasses[0];
        ToggleClasses(cssClass, sidebarCssClasses);
    };
    SidebarToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appSidebarToggler]'
                },] },
    ];
    /** @nocollapse */
    SidebarToggleDirective.ctorParameters = function () { return []; };
    SidebarToggleDirective.propDecorators = {
        "breakpoint": [{ type: Input, args: ['appSidebarToggler',] },],
        "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return SidebarToggleDirective;
}());
var SidebarMinimizeDirective = /** @class */ (function () {
    function SidebarMinimizeDirective() {
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    SidebarMinimizeDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-minimized');
    };
    SidebarMinimizeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appSidebarMinimizer]'
                },] },
    ];
    /** @nocollapse */
    SidebarMinimizeDirective.ctorParameters = function () { return []; };
    SidebarMinimizeDirective.propDecorators = {
        "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return SidebarMinimizeDirective;
}());
var MobileSidebarToggleDirective = /** @class */ (function () {
    function MobileSidebarToggleDirective() {
    }
    /**
     * @param {?} target
     * @param {?} elementClassName
     * @return {?}
     */
    MobileSidebarToggleDirective.prototype.hasClass = /**
     * @param {?} target
     * @param {?} elementClassName
     * @return {?}
     */
    function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    MobileSidebarToggleDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    MobileSidebarToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appMobileSidebarToggler]'
                },] },
    ];
    /** @nocollapse */
    MobileSidebarToggleDirective.ctorParameters = function () { return []; };
    MobileSidebarToggleDirective.propDecorators = {
        "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return MobileSidebarToggleDirective;
}());
/**
 * Allows the off-canvas sidebar to be closed via click.
 */
var SidebarOffCanvasCloseDirective = /** @class */ (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    /**
     * @param {?} target
     * @param {?} elementClassName
     * @return {?}
     */
    SidebarOffCanvasCloseDirective.prototype.hasClass = /**
     * @param {?} target
     * @param {?} elementClassName
     * @return {?}
     */
    function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    /**
     * @param {?} elem
     * @param {?} elementClassName
     * @return {?}
     */
    SidebarOffCanvasCloseDirective.prototype.toggleClass = /**
     * @param {?} elem
     * @param {?} elementClassName
     * @return {?}
     */
    function (elem, elementClassName) {
        var /** @type {?} */ newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    SidebarOffCanvasCloseDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appSidebarClose]'
                },] },
    ];
    /** @nocollapse */
    SidebarOffCanvasCloseDirective.ctorParameters = function () { return []; };
    SidebarOffCanvasCloseDirective.propDecorators = {
        "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return SidebarOffCanvasCloseDirective;
}());
var BrandMinimizeDirective = /** @class */ (function () {
    function BrandMinimizeDirective() {
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    BrandMinimizeDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('brand-minimized');
    };
    BrandMinimizeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appBrandMinimizer]'
                },] },
    ];
    /** @nocollapse */
    BrandMinimizeDirective.ctorParameters = function () { return []; };
    BrandMinimizeDirective.propDecorators = {
        "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return BrandMinimizeDirective;
}());
/**
 * Allows the aside to be toggled via click.
 */
var AsideToggleDirective = /** @class */ (function () {
    function AsideToggleDirective() {
    }
    /**
     * @return {?}
     */
    AsideToggleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.bp = this.breakpoint;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AsideToggleDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        var /** @type {?} */ cssClass;
        this.bp ? cssClass = "aside-menu-" + this.bp + "-show" : cssClass = asideMenuCssClasses[0];
        ToggleClasses(cssClass, asideMenuCssClasses);
    };
    AsideToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appAsideMenuToggler]',
                },] },
    ];
    /** @nocollapse */
    AsideToggleDirective.ctorParameters = function () { return []; };
    AsideToggleDirective.propDecorators = {
        "breakpoint": [{ type: Input, args: ['appAsideMenuToggler',] },],
        "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return AsideToggleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        AsideToggleDirective,
                        BrandMinimizeDirective,
                        MobileSidebarToggleDirective,
                        SidebarToggleDirective,
                        SidebarMinimizeDirective,
                        SidebarOffCanvasCloseDirective
                    ],
                    declarations: [
                        AsideToggleDirective,
                        BrandMinimizeDirective,
                        MobileSidebarToggleDirective,
                        SidebarToggleDirective,
                        SidebarMinimizeDirective,
                        SidebarOffCanvasCloseDirective
                    ]
                },] },
    ];
    return LayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} el
 * @return {?}
 */
function Replace(el) {
    var /** @type {?} */ nativeElement = el.nativeElement;
    var /** @type {?} */ parentElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
        parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AppAsideComponent = /** @class */ (function () {
    function AppAsideComponent(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    AppAsideComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        Replace(this.el);
        this.isFixed(this.fixed);
        this.displayBreakpoint(this.display);
    };
    /**
     * @param {?} fixed
     * @return {?}
     */
    AppAsideComponent.prototype.isFixed = /**
     * @param {?} fixed
     * @return {?}
     */
    function (fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('aside-menu-fixed');
        }
    };
    /**
     * @param {?} offCanvas
     * @return {?}
     */
    AppAsideComponent.prototype.isOffCanvas = /**
     * @param {?} offCanvas
     * @return {?}
     */
    function (offCanvas) {
        if (this.offCanvas) {
            document.querySelector('body').classList.add('aside-menu-off-canvas');
        }
    };
    /**
     * @param {?} display
     * @return {?}
     */
    AppAsideComponent.prototype.displayBreakpoint = /**
     * @param {?} display
     * @return {?}
     */
    function (display) {
        if (this.display !== false) {
            var /** @type {?} */ cssClass = void 0;
            this.display ? cssClass = "aside-menu-" + this.display + "-show" : cssClass = asideMenuCssClasses[0];
            document.querySelector('body').classList.add(cssClass);
        }
    };
    AppAsideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-aside',
                    template: "\n    <aside class=\"aside-menu\">\n      <ng-content></ng-content>\n    </aside>\n  "
                },] },
    ];
    /** @nocollapse */
    AppAsideComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    AppAsideComponent.propDecorators = {
        "display": [{ type: Input },],
        "fixed": [{ type: Input },],
        "offCanvas": [{ type: Input },],
    };
    return AppAsideComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AppAsideModule = /** @class */ (function () {
    function AppAsideModule() {
    }
    AppAsideModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    return AppAsideModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AppBreadcrumbService = /** @class */ (function () {
    function AppBreadcrumbService(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._breadcrumbs = new BehaviorSubject(new Array());
        this.breadcrumbs = this._breadcrumbs.asObservable();
        this.router.events.pipe(filter(function (event) { return event instanceof NavigationEnd; })).subscribe(function (event) {
            var /** @type {?} */ breadcrumbs = [];
            var /** @type {?} */ currentRoute = _this.route.root, /** @type {?} */
            url = '';
            do {
                var /** @type {?} */ childrenRoutes = currentRoute.children;
                currentRoute = null;
                // tslint:disable-next-line:no-shadowed-variable
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var /** @type {?} */ routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
            _this._breadcrumbs.next(Object.assign([], breadcrumbs));
            return breadcrumbs;
        });
    }
    AppBreadcrumbService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AppBreadcrumbService.ctorParameters = function () { return [
        { type: Router, },
        { type: ActivatedRoute, },
    ]; };
    return AppBreadcrumbService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AppBreadcrumbComponent = /** @class */ (function () {
    function AppBreadcrumbComponent(service, el) {
        this.service = service;
        this.el = el;
    }
    /**
     * @return {?}
     */
    AppBreadcrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        Replace(this.el);
        this.isFixed(this.fixed);
        this.breadcrumbs = this.service.breadcrumbs;
    };
    /**
     * @param {?} fixed
     * @return {?}
     */
    AppBreadcrumbComponent.prototype.isFixed = /**
     * @param {?} fixed
     * @return {?}
     */
    function (fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('breadcrumb-fixed');
        }
    };
    AppBreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-breadcrumb',
                    template: "\n    <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last = last>\n      <li class=\"breadcrumb-item\"\n          *ngIf=\"breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)\"\n          [ngClass]=\"{active: last}\">\n        <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n        <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n      </li>\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    AppBreadcrumbComponent.ctorParameters = function () { return [
        { type: AppBreadcrumbService, },
        { type: ElementRef, },
    ]; };
    AppBreadcrumbComponent.propDecorators = {
        "fixed": [{ type: Input },],
    };
    return AppBreadcrumbComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AppBreadcrumbModule = /** @class */ (function () {
    function AppBreadcrumbModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    AppBreadcrumbModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: AppBreadcrumbModule,
            providers: [
                AppBreadcrumbService
            ]
        };
    };
    AppBreadcrumbModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule],
                    exports: [AppBreadcrumbComponent],
                    declarations: [AppBreadcrumbComponent]
                },] },
    ];
    return AppBreadcrumbModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    AppFooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        Replace(this.el);
        this.isFixed(this.fixed);
    };
    /**
     * @param {?} fixed
     * @return {?}
     */
    AppFooterComponent.prototype.isFixed = /**
     * @param {?} fixed
     * @return {?}
     */
    function (fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('footer-fixed');
        }
    };
    AppFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-footer',
                    template: "\n    <footer class=\"app-footer\">\n      <ng-content></ng-content>\n    </footer>\n  "
                },] },
    ];
    /** @nocollapse */
    AppFooterComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    AppFooterComponent.propDecorators = {
        "fixed": [{ type: Input },],
    };
    return AppFooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AppFooterModule = /** @class */ (function () {
    function AppFooterModule() {
    }
    AppFooterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [AppFooterComponent],
                    declarations: [AppFooterComponent]
                },] },
    ];
    return AppFooterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    AppHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        Replace(this.el);
        this.isFixed(this.fixed);
    };
    /**
     * @param {?} fixed
     * @return {?}
     */
    AppHeaderComponent.prototype.isFixed = /**
     * @param {?} fixed
     * @return {?}
     */
    function (fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('header-fixed');
        }
    };
    /**
     * @param {?} brand
     * @return {?}
     */
    AppHeaderComponent.prototype.imgSrc = /**
     * @param {?} brand
     * @return {?}
     */
    function (brand) {
        return brand.src ? brand.src : '';
    };
    /**
     * @param {?} brand
     * @return {?}
     */
    AppHeaderComponent.prototype.imgWidth = /**
     * @param {?} brand
     * @return {?}
     */
    function (brand) {
        return brand.width ? brand.width : 'auto';
    };
    /**
     * @param {?} brand
     * @return {?}
     */
    AppHeaderComponent.prototype.imgHeight = /**
     * @param {?} brand
     * @return {?}
     */
    function (brand) {
        return brand.height ? brand.height : 'auto';
    };
    /**
     * @param {?} brand
     * @return {?}
     */
    AppHeaderComponent.prototype.imgAlt = /**
     * @param {?} brand
     * @return {?}
     */
    function (brand) {
        return brand.alt ? brand.alt : '';
    };
    /**
     * @param {?} breakpoint
     * @return {?}
     */
    AppHeaderComponent.prototype.breakpoint = /**
     * @param {?} breakpoint
     * @return {?}
     */
    function (breakpoint) {
        console.log(breakpoint);
        return breakpoint ? breakpoint : '';
    };
    AppHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-header',
                    template: "\n    <header class=\"app-header navbar\">\n      <ng-template [ngIf]=\"mobileSidebarToggler != false\">\n        <button class=\"navbar-toggler d-lg-none\" type=\"button\" appSidebarToggler>\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </ng-template>\n      <ng-template [ngIf]=\"navbarBrand || navbarBrandFull || navbarBrandMinimized\">\n        <a class=\"navbar-brand\" href=\"#\">\n          <img *ngIf=\"navbarBrand\"\n               [src]=\"imgSrc(navbarBrand)\"\n               [attr.width]=\"imgWidth(navbarBrand)\"\n               [attr.height]=\"imgHeight(navbarBrand)\"\n               [attr.alt]=\"imgAlt(navbarBrand)\"\n               class=\"navbar-brand\">\n          <img *ngIf=\"navbarBrandFull\"\n               [src]=\"imgSrc(navbarBrandFull)\"\n               [attr.width]=\"imgWidth(navbarBrandFull)\"\n               [attr.height]=\"imgHeight(navbarBrandFull)\"\n               [attr.alt]=\"imgAlt(navbarBrandFull)\"\n               class=\"navbar-brand-full\">\n          <img *ngIf=\"navbarBrandMinimized\"\n               [src]=\"imgSrc(navbarBrandMinimized)\"\n               [attr.width]=\"imgWidth(navbarBrandMinimized)\"\n               [attr.height]=\"imgHeight(navbarBrandMinimized)\"\n               [attr.alt]=\"imgAlt(navbarBrandMinimized)\"\n               class=\"navbar-brand-minimized\">\n        </a>\n      </ng-template>\n      <ng-template [ngIf]=\"sidebarToggler != false\">\n        <button class=\"navbar-toggler d-md-down-none\" type=\"button\" [appSidebarToggler]=\"sidebarToggler\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </ng-template>\n      <ng-content></ng-content>\n      <ng-template [ngIf]=\"asideMenuToggler != false\">\n        <button class=\"navbar-toggler d-md-down-none\" type=\"button\" [appAsideMenuToggler]=\"asideMenuToggler\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </ng-template>\n      <ng-template [ngIf]=\"mobileAsideMenuToggler != false\">\n        <button class=\"navbar-toggler d-lg-none\" type=\"button\" appAsideMenuToggler>\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </ng-template>\n    </header>\n  "
                },] },
    ];
    /** @nocollapse */
    AppHeaderComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    AppHeaderComponent.propDecorators = {
        "fixed": [{ type: Input },],
        "navbarBrand": [{ type: Input },],
        "navbarBrandFull": [{ type: Input },],
        "navbarBrandMinimized": [{ type: Input },],
        "sidebarToggler": [{ type: Input },],
        "mobileSidebarToggler": [{ type: Input },],
        "asideMenuToggler": [{ type: Input },],
        "mobileAsideMenuToggler": [{ type: Input },],
    };
    return AppHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AppHeaderModule = /** @class */ (function () {
    function AppHeaderModule() {
    }
    AppHeaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        LayoutModule
                    ],
                    exports: [
                        AppHeaderComponent,
                        LayoutModule
                    ],
                    declarations: [
                        AppHeaderComponent
                    ]
                },] },
    ];
    return AppHeaderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AppSidebarFooterComponent = /** @class */ (function () {
    function AppSidebarFooterComponent(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    AppSidebarFooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        Replace(this.el);
    };
    AppSidebarFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-footer',
                    template: "\n    <div class=\"sidebar-footer\">\n      <ng-content></ng-content>\n    </div>"
                },] },
    ];
    /** @nocollapse */
    AppSidebarFooterComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return AppSidebarFooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AppSidebarFormComponent = /** @class */ (function () {
    function AppSidebarFormComponent(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    AppSidebarFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        Replace(this.el);
    };
    AppSidebarFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-form',
                    template: "\n    <form class=\"sidebar-form\">\n      <ng-content></ng-content>\n    </form>\n  "
                },] },
    ];
    /** @nocollapse */
    AppSidebarFormComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return AppSidebarFormComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AppSidebarHeaderComponent = /** @class */ (function () {
    function AppSidebarHeaderComponent(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    AppSidebarHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        Replace(this.el);
    };
    AppSidebarHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-header',
                    template: "\n    <div class=\"sidebar-header\">\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AppSidebarHeaderComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return AppSidebarHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AppSidebarMinimizerComponent = /** @class */ (function () {
    function AppSidebarMinimizerComponent(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    AppSidebarMinimizerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        Replace(this.el);
    };
    AppSidebarMinimizerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-minimizer',
                    template: "\n    <button class=\"sidebar-minimizer\" type=\"button\" appSidebarMinimizer appBrandMinimizer></button>\n  "
                },] },
    ];
    /** @nocollapse */
    AppSidebarMinimizerComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return AppSidebarMinimizerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AppSidebarComponent = /** @class */ (function () {
    function AppSidebarComponent() {
    }
    /**
     * @return {?}
     */
    AppSidebarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.displayBreakpoint(this.display);
        this.isCompact(this.compact);
        this.isFixed(this.fixed);
        this.isMinimized(this.minimized);
        this.isOffCanvas(this.offCanvas);
    };
    /**
     * @param {?} compact
     * @return {?}
     */
    AppSidebarComponent.prototype.isCompact = /**
     * @param {?} compact
     * @return {?}
     */
    function (compact) {
        if (this.compact) {
            document.querySelector('body').classList.add('sidebar-compact');
        }
    };
    /**
     * @param {?} fixed
     * @return {?}
     */
    AppSidebarComponent.prototype.isFixed = /**
     * @param {?} fixed
     * @return {?}
     */
    function (fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('sidebar-fixed');
        }
    };
    /**
     * @param {?} minimized
     * @return {?}
     */
    AppSidebarComponent.prototype.isMinimized = /**
     * @param {?} minimized
     * @return {?}
     */
    function (minimized) {
        if (this.minimized) {
            document.querySelector('body').classList.add('sidebar-minimized');
        }
    };
    /**
     * @param {?} offCanvas
     * @return {?}
     */
    AppSidebarComponent.prototype.isOffCanvas = /**
     * @param {?} offCanvas
     * @return {?}
     */
    function (offCanvas) {
        if (this.offCanvas) {
            document.querySelector('body').classList.add('sidebar-off-canvas');
        }
    };
    /**
     * @param {?} fixed
     * @return {?}
     */
    AppSidebarComponent.prototype.fixedPosition = /**
     * @param {?} fixed
     * @return {?}
     */
    function (fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('sidebar-fixed');
        }
    };
    /**
     * @param {?} display
     * @return {?}
     */
    AppSidebarComponent.prototype.displayBreakpoint = /**
     * @param {?} display
     * @return {?}
     */
    function (display) {
        if (this.display !== false) {
            var /** @type {?} */ cssClass = void 0;
            this.display ? cssClass = "sidebar-" + this.display + "-show" : cssClass = sidebarCssClasses[0];
            document.querySelector('body').classList.add(cssClass);
        }
    };
    AppSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    AppSidebarComponent.ctorParameters = function () { return []; };
    AppSidebarComponent.propDecorators = {
        "compact": [{ type: Input },],
        "display": [{ type: Input },],
        "fixed": [{ type: Input },],
        "minimized": [{ type: Input },],
        "offCanvas": [{ type: Input },],
        "true": [{ type: HostBinding, args: ['class.sidebar',] },],
    };
    return AppSidebarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NavDropdownDirective = /** @class */ (function () {
    function NavDropdownDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    NavDropdownDirective.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.classList.toggle('open');
    };
    NavDropdownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appNavDropdown]'
                },] },
    ];
    /** @nocollapse */
    NavDropdownDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return NavDropdownDirective;
}());
/**
 * Allows the dropdown to be toggled via click.
 */
var NavDropdownToggleDirective = /** @class */ (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    NavDropdownToggleDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    NavDropdownToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appNavDropdownToggle]'
                },] },
    ];
    /** @nocollapse */
    NavDropdownToggleDirective.ctorParameters = function () { return [
        { type: NavDropdownDirective, },
    ]; };
    NavDropdownToggleDirective.propDecorators = {
        "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return NavDropdownToggleDirective;
}());
var AppSidebarNavComponent = /** @class */ (function () {
    function AppSidebarNavComponent() {
        this.role = 'nav';
    }
    /**
     * @param {?} item
     * @return {?}
     */
    AppSidebarNavComponent.prototype.isDivider = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item.divider ? true : false;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    AppSidebarNavComponent.prototype.isTitle = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item.title ? true : false;
    };
    AppSidebarNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-nav',
                    template: "\n    <ul class=\"nav\">\n      <ng-template ngFor let-navitem [ngForOf]=\"navItems\">\n        <li *ngIf=\"isDivider(navitem)\" class=\"nav-divider\"></li>\n        <ng-template [ngIf]=\"isTitle(navitem)\">\n          <app-sidebar-nav-title [title]='navitem'></app-sidebar-nav-title>\n        </ng-template>\n        <ng-template [ngIf]=\"!isDivider(navitem)&&!isTitle(navitem)\">\n          <app-sidebar-nav-item [item]='navitem'></app-sidebar-nav-item>\n        </ng-template>\n      </ng-template>\n    </ul>"
                },] },
    ];
    /** @nocollapse */
    AppSidebarNavComponent.ctorParameters = function () { return []; };
    AppSidebarNavComponent.propDecorators = {
        "navItems": [{ type: Input },],
        "true": [{ type: HostBinding, args: ['class.sidebar-nav',] },],
        "role": [{ type: HostBinding, args: ['attr.role',] },],
    };
    return AppSidebarNavComponent;
}());
var AppSidebarNavItemComponent = /** @class */ (function () {
    function AppSidebarNavItemComponent(router, el) {
        this.router = router;
        this.el = el;
    }
    /**
     * @return {?}
     */
    AppSidebarNavItemComponent.prototype.hasClass = /**
     * @return {?}
     */
    function () {
        return this.item.class ? true : false;
    };
    /**
     * @return {?}
     */
    AppSidebarNavItemComponent.prototype.isDropdown = /**
     * @return {?}
     */
    function () {
        return this.item.children ? true : false;
    };
    /**
     * @return {?}
     */
    AppSidebarNavItemComponent.prototype.thisUrl = /**
     * @return {?}
     */
    function () {
        return this.item.url;
    };
    /**
     * @return {?}
     */
    AppSidebarNavItemComponent.prototype.isActive = /**
     * @return {?}
     */
    function () {
        return this.router.isActive(this.thisUrl(), false);
    };
    /**
     * @return {?}
     */
    AppSidebarNavItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        Replace(this.el);
    };
    AppSidebarNavItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-nav-item',
                    template: "\n    <li *ngIf=\"!isDropdown(); else dropdown\" [ngClass]=\"hasClass() ? 'nav-item ' + item.class : 'nav-item'\">\n      <app-sidebar-nav-link [link]='item'></app-sidebar-nav-link>\n    </li>\n    <ng-template #dropdown>\n      <li [ngClass]=\"hasClass() ? 'nav-item nav-dropdown ' + item.class : 'nav-item nav-dropdown'\"\n          [class.open]=\"isActive()\"\n          routerLinkActive=\"open\"\n          appNavDropdown>\n        <app-sidebar-nav-dropdown [link]='item'></app-sidebar-nav-dropdown>\n      </li>\n    </ng-template>\n    "
                },] },
    ];
    /** @nocollapse */
    AppSidebarNavItemComponent.ctorParameters = function () { return [
        { type: Router, },
        { type: ElementRef, },
    ]; };
    AppSidebarNavItemComponent.propDecorators = {
        "item": [{ type: Input },],
    };
    return AppSidebarNavItemComponent;
}());
var AppSidebarNavLinkComponent = /** @class */ (function () {
    function AppSidebarNavLinkComponent(router, el) {
        this.router = router;
        this.el = el;
    }
    /**
     * @return {?}
     */
    AppSidebarNavLinkComponent.prototype.hasVariant = /**
     * @return {?}
     */
    function () {
        return this.link.variant ? true : false;
    };
    /**
     * @return {?}
     */
    AppSidebarNavLinkComponent.prototype.isBadge = /**
     * @return {?}
     */
    function () {
        return this.link.badge ? true : false;
    };
    /**
     * @return {?}
     */
    AppSidebarNavLinkComponent.prototype.isExternalLink = /**
     * @return {?}
     */
    function () {
        return this.link.url.substring(0, 4) === 'http' ? true : false;
    };
    /**
     * @return {?}
     */
    AppSidebarNavLinkComponent.prototype.isIcon = /**
     * @return {?}
     */
    function () {
        return this.link.icon ? true : false;
    };
    /**
     * @return {?}
     */
    AppSidebarNavLinkComponent.prototype.hideMobile = /**
     * @return {?}
     */
    function () {
        if (document.body.classList.contains('sidebar-mobile-show')) {
            document.body.classList.toggle('sidebar-mobile-show');
        }
    };
    /**
     * @return {?}
     */
    AppSidebarNavLinkComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        Replace(this.el);
    };
    AppSidebarNavLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-nav-link',
                    template: "\n    <a *ngIf=\"!isExternalLink(); else external\"\n      [ngClass]=\"hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'\"\n      routerLinkActive=\"active\"\n      [routerLink]=\"[link.url]\"\n      (click)=\"hideMobile()\">\n      <i *ngIf=\"isIcon()\" class=\"nav-icon {{ link.icon }}\"></i>\n      {{ link.name }}\n      <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n    </a>\n    <ng-template #external>\n      <a [ngClass]=\"hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'\" href=\"{{link.url}}\">\n        <i *ngIf=\"isIcon()\" class=\"nav-icon {{ link.icon }}\"></i>\n        {{ link.name }}\n        <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n      </a>\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    AppSidebarNavLinkComponent.ctorParameters = function () { return [
        { type: Router, },
        { type: ElementRef, },
    ]; };
    AppSidebarNavLinkComponent.propDecorators = {
        "link": [{ type: Input },],
    };
    return AppSidebarNavLinkComponent;
}());
var AppSidebarNavDropdownComponent = /** @class */ (function () {
    function AppSidebarNavDropdownComponent(router, el) {
        this.router = router;
        this.el = el;
    }
    /**
     * @return {?}
     */
    AppSidebarNavDropdownComponent.prototype.isBadge = /**
     * @return {?}
     */
    function () {
        return this.link.badge ? true : false;
    };
    /**
     * @return {?}
     */
    AppSidebarNavDropdownComponent.prototype.isIcon = /**
     * @return {?}
     */
    function () {
        return this.link.icon ? true : false;
    };
    /**
     * @return {?}
     */
    AppSidebarNavDropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        Replace(this.el);
    };
    AppSidebarNavDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-nav-dropdown',
                    template: "\n    <a class=\"nav-link nav-dropdown-toggle\" appNavDropdownToggle>\n      <i *ngIf=\"isIcon()\" class=\"nav-icon {{ link.icon }}\"></i>\n      {{ link.name }}\n      <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n    </a>\n    <ul class=\"nav-dropdown-items\">\n      <ng-template ngFor let-child [ngForOf]=\"link.children\">\n        <app-sidebar-nav-item [item]='child'></app-sidebar-nav-item>\n      </ng-template>\n    </ul>\n  ",
                    styles: ['.nav-dropdown-toggle { cursor: pointer; }']
                },] },
    ];
    /** @nocollapse */
    AppSidebarNavDropdownComponent.ctorParameters = function () { return [
        { type: Router, },
        { type: ElementRef, },
    ]; };
    AppSidebarNavDropdownComponent.propDecorators = {
        "link": [{ type: Input },],
    };
    return AppSidebarNavDropdownComponent;
}());
var AppSidebarNavTitleComponent = /** @class */ (function () {
    function AppSidebarNavTitleComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    AppSidebarNavTitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ nativeElement = this.el.nativeElement;
        var /** @type {?} */ li = this.renderer.createElement('li');
        var /** @type {?} */ name = this.renderer.createText(this.title.name);
        this.renderer.addClass(li, 'nav-title');
        if (this.title.class) {
            var /** @type {?} */ classes = this.title.class;
            this.renderer.addClass(li, classes);
        }
        if (this.title.wrapper) {
            var /** @type {?} */ wrapper = this.renderer.createElement(this.title.wrapper.element);
            this.renderer.appendChild(wrapper, name);
            this.renderer.appendChild(li, wrapper);
        }
        else {
            this.renderer.appendChild(li, name);
        }
        this.renderer.appendChild(nativeElement, li);
        Replace(this.el);
    };
    AppSidebarNavTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-nav-title',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    AppSidebarNavTitleComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    AppSidebarNavTitleComponent.propDecorators = {
        "title": [{ type: Input },],
    };
    return AppSidebarNavTitleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AppSidebarModule = /** @class */ (function () {
    function AppSidebarModule() {
    }
    AppSidebarModule.decorators = [
        { type: NgModule, args: [{
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
                        AppSidebarNavComponent,
                        AppSidebarNavDropdownComponent,
                        AppSidebarNavItemComponent,
                        AppSidebarNavLinkComponent,
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
                        AppSidebarNavComponent,
                        AppSidebarNavDropdownComponent,
                        AppSidebarNavItemComponent,
                        AppSidebarNavLinkComponent,
                        AppSidebarNavTitleComponent,
                        NavDropdownDirective,
                        NavDropdownToggleDirective
                    ]
                },] },
    ];
    return AppSidebarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { AppAsideModule, AppBreadcrumbModule, AppFooterModule, AppHeaderModule, AppSidebarModule, LayoutModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZXVpLWFuZ3VsYXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvc2hhcmVkL2NsYXNzZXMudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvc2hhcmVkL3RvZ2dsZS1jbGFzc2VzLnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL3NoYXJlZC9sYXlvdXQvbGF5b3V0LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9zaGFyZWQvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvc2hhcmVkL3JlcGxhY2UudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvYXNpZGUvYXBwLWFzaWRlLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9hc2lkZS9hcHAtYXNpZGUubW9kdWxlLnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL2JyZWFkY3J1bWIvYXBwLWJyZWFkY3J1bWIuc2VydmljZS50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9icmVhZGNydW1iL2FwcC1icmVhZGNydW1iLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9icmVhZGNydW1iL2FwcC1icmVhZGNydW1iLm1vZHVsZS50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9mb290ZXIvYXBwLWZvb3Rlci5jb21wb25lbnQudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvZm9vdGVyL2FwcC1mb290ZXIubW9kdWxlLnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL2hlYWRlci9hcHAtaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9oZWFkZXIvYXBwLWhlYWRlci5tb2R1bGUudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvc2lkZWJhci9hcHAtc2lkZWJhci1mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL3NpZGViYXIvYXBwLXNpZGViYXItZm9ybS5jb21wb25lbnQudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvc2lkZWJhci9hcHAtc2lkZWJhci1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL3NpZGViYXIvYXBwLXNpZGViYXItbWluaW1pemVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi5jb21wb25lbnQudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvc2lkZWJhci9hcHAtc2lkZWJhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNpZGViYXJDc3NDbGFzc2VzOiBBcnJheTxzdHJpbmc+ID0gW1xuICAnc2lkZWJhci1zaG93JyxcbiAgJ3NpZGViYXItc20tc2hvdycsXG4gICdzaWRlYmFyLW1kLXNob3cnLFxuICAnc2lkZWJhci1sZy1zaG93JyxcbiAgJ3NpZGViYXIteGwtc2hvdydcbl07XG5cbmV4cG9ydCBjb25zdCBhc2lkZU1lbnVDc3NDbGFzc2VzOiBBcnJheTxzdHJpbmc+ID0gW1xuICAnYXNpZGUtbWVudS1zaG93JyxcbiAgJ2FzaWRlLW1lbnUtc20tc2hvdycsXG4gICdhc2lkZS1tZW51LW1kLXNob3cnLFxuICAnYXNpZGUtbWVudS1sZy1zaG93JyxcbiAgJ2FzaWRlLW1lbnUteGwtc2hvdydcbl07XG4iLCJjb25zdCBSZW1vdmVDbGFzc2VzID0gKE5ld0NsYXNzTmFtZXMpID0+IHtcbiAgY29uc3QgTWF0Y2hDbGFzc2VzID0gTmV3Q2xhc3NOYW1lcy5tYXAoKENsYXNzKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzKSk7XG4gIHJldHVybiBNYXRjaENsYXNzZXMuaW5kZXhPZih0cnVlKSAhPT0gLTE7XG59O1xuXG5leHBvcnQgY29uc3QgVG9nZ2xlQ2xhc3NlcyA9IChUb2dnbGUsIENsYXNzTmFtZXMpID0+IHtcbiAgY29uc3QgTGV2ZWwgPSBDbGFzc05hbWVzLmluZGV4T2YoVG9nZ2xlKTtcbiAgY29uc3QgTmV3Q2xhc3NOYW1lcyA9IENsYXNzTmFtZXMuc2xpY2UoMCwgTGV2ZWwgKyAxKTtcblxuICBpZiAoUmVtb3ZlQ2xhc3NlcyhOZXdDbGFzc05hbWVzKSkge1xuICAgIE5ld0NsYXNzTmFtZXMubWFwKChDbGFzcykgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3MpKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZChUb2dnbGUpO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNpZGViYXJDc3NDbGFzc2VzLCBhc2lkZU1lbnVDc3NDbGFzc2VzIH0gZnJvbSAnLi8uLi9jbGFzc2VzJztcbmltcG9ydCB7IFRvZ2dsZUNsYXNzZXMgfSBmcm9tICcuLy4uL3RvZ2dsZS1jbGFzc2VzJztcblxuLyoqXG4qIEFsbG93cyB0aGUgc2lkZWJhciB0byBiZSB0b2dnbGVkIHZpYSBjbGljay5cbiovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwU2lkZWJhclRvZ2dsZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdhcHBTaWRlYmFyVG9nZ2xlcicpIGJyZWFrcG9pbnQ6IHN0cmluZztcbiAgcHVibGljIGJwO1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYnAgPSB0aGlzLmJyZWFrcG9pbnQ7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGNzc0NsYXNzO1xuICAgIHRoaXMuYnAgPyBjc3NDbGFzcyA9IGBzaWRlYmFyLSR7dGhpcy5icH0tc2hvd2AgOiBjc3NDbGFzcyA9IHNpZGViYXJDc3NDbGFzc2VzWzBdO1xuICAgIFRvZ2dsZUNsYXNzZXMoY3NzQ2xhc3MsIHNpZGViYXJDc3NDbGFzc2VzKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwU2lkZWJhck1pbmltaXplcl0nXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJNaW5pbWl6ZURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ3NpZGViYXItbWluaW1pemVkJyk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcE1vYmlsZVNpZGViYXJUb2dnbGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgTW9iaWxlU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLy8gQ2hlY2sgaWYgZWxlbWVudCBoYXMgY2xhc3NcbiAgcHJpdmF0ZSBoYXNDbGFzcyh0YXJnZXQ6IGFueSwgZWxlbWVudENsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJyhcXFxcc3xeKScgKyBlbGVtZW50Q2xhc3NOYW1lICsgJyhcXFxcc3wkKScpLnRlc3QodGFyZ2V0LmNsYXNzTmFtZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnc2lkZWJhci1tb2JpbGUtc2hvdycpO1xuICB9XG59XG5cbi8qKlxuKiBBbGxvd3MgdGhlIG9mZi1jYW52YXMgc2lkZWJhciB0byBiZSBjbG9zZWQgdmlhIGNsaWNrLlxuKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBTaWRlYmFyQ2xvc2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyT2ZmQ2FudmFzQ2xvc2VEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8vIENoZWNrIGlmIGVsZW1lbnQgaGFzIGNsYXNzXG4gIHByaXZhdGUgaGFzQ2xhc3ModGFyZ2V0OiBhbnksIGVsZW1lbnRDbGFzc05hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKCcoXFxcXHN8XiknICsgZWxlbWVudENsYXNzTmFtZSArICcoXFxcXHN8JCknKS50ZXN0KHRhcmdldC5jbGFzc05hbWUpO1xuICB9XG5cbiAgLy8gVG9nZ2xlIGVsZW1lbnQgY2xhc3NcbiAgcHJpdmF0ZSB0b2dnbGVDbGFzcyhlbGVtOiBhbnksIGVsZW1lbnRDbGFzc05hbWU6IHN0cmluZykge1xuICAgIGxldCBuZXdDbGFzcyA9ICcgJyArIGVsZW0uY2xhc3NOYW1lLnJlcGxhY2UoIC9bXFx0XFxyXFxuXS9nLCAnICcgKSArICcgJztcbiAgICBpZiAodGhpcy5oYXNDbGFzcyhlbGVtLCBlbGVtZW50Q2xhc3NOYW1lKSkge1xuICAgICAgd2hpbGUgKG5ld0NsYXNzLmluZGV4T2YoJyAnICsgZWxlbWVudENsYXNzTmFtZSArICcgJykgPj0gMCApIHtcbiAgICAgICAgbmV3Q2xhc3MgPSBuZXdDbGFzcy5yZXBsYWNlKCAnICcgKyBlbGVtZW50Q2xhc3NOYW1lICsgJyAnICwgJyAnICk7XG4gICAgICB9XG4gICAgICBlbGVtLmNsYXNzTmFtZSA9IG5ld0NsYXNzLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5jbGFzc05hbWUgKz0gJyAnICsgZWxlbWVudENsYXNzTmFtZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICh0aGlzLmhhc0NsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJ3NpZGViYXItb2ZmLWNhbnZhcycpKSB7XG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJ3NpZGViYXItb3BlbmVkJyk7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBCcmFuZE1pbmltaXplcl0nXG59KVxuZXhwb3J0IGNsYXNzIEJyYW5kTWluaW1pemVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdicmFuZC1taW5pbWl6ZWQnKTtcbiAgfVxufVxuXG5cbi8qKlxuKiBBbGxvd3MgdGhlIGFzaWRlIHRvIGJlIHRvZ2dsZWQgdmlhIGNsaWNrLlxuKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBBc2lkZU1lbnVUb2dnbGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIEFzaWRlVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdhcHBBc2lkZU1lbnVUb2dnbGVyJykgYnJlYWtwb2ludDogc3RyaW5nO1xuICBwdWJsaWMgYnA7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5icCA9IHRoaXMuYnJlYWtwb2ludDtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgY3NzQ2xhc3M7XG4gICAgdGhpcy5icCA/IGNzc0NsYXNzID0gYGFzaWRlLW1lbnUtJHt0aGlzLmJwfS1zaG93YCA6IGNzc0NsYXNzID0gYXNpZGVNZW51Q3NzQ2xhc3Nlc1swXTtcbiAgICBUb2dnbGVDbGFzc2VzKGNzc0NsYXNzLCBhc2lkZU1lbnVDc3NDbGFzc2VzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFzaWRlVG9nZ2xlRGlyZWN0aXZlLFxuICBCcmFuZE1pbmltaXplRGlyZWN0aXZlLFxuICBNb2JpbGVTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlLFxuICBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlLFxuICBTaWRlYmFyTWluaW1pemVEaXJlY3RpdmUsXG4gIFNpZGViYXJPZmZDYW52YXNDbG9zZURpcmVjdGl2ZVxufSBmcm9tICcuL2xheW91dC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBc2lkZVRvZ2dsZURpcmVjdGl2ZSxcbiAgICBCcmFuZE1pbmltaXplRGlyZWN0aXZlLFxuICAgIE1vYmlsZVNpZGViYXJUb2dnbGVEaXJlY3RpdmUsXG4gICAgU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSxcbiAgICBTaWRlYmFyTWluaW1pemVEaXJlY3RpdmUsXG4gICAgU2lkZWJhck9mZkNhbnZhc0Nsb3NlRGlyZWN0aXZlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFzaWRlVG9nZ2xlRGlyZWN0aXZlLFxuICAgIEJyYW5kTWluaW1pemVEaXJlY3RpdmUsXG4gICAgTW9iaWxlU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSxcbiAgICBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlLFxuICAgIFNpZGViYXJNaW5pbWl6ZURpcmVjdGl2ZSxcbiAgICBTaWRlYmFyT2ZmQ2FudmFzQ2xvc2VEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUgeyB9XG4iLCJleHBvcnQgZnVuY3Rpb24gUmVwbGFjZShlbDogYW55KTogYW55IHtcbiAgY29uc3QgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQgPSBlbC5uYXRpdmVFbGVtZW50O1xuICBjb25zdCBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCA9IG5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgLy8gbW92ZSBhbGwgY2hpbGRyZW4gb3V0IG9mIHRoZSBlbGVtZW50XG4gIHdoaWxlIChuYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShuYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQsIG5hdGl2ZUVsZW1lbnQpO1xuICB9XG4gIC8vIHJlbW92ZSB0aGUgZW1wdHkgZWxlbWVudCh0aGUgaG9zdClcbiAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChuYXRpdmVFbGVtZW50KTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYXNpZGVNZW51Q3NzQ2xhc3NlcywgUmVwbGFjZSB9IGZyb20gJy4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWFzaWRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YXNpZGUgY2xhc3M9XCJhc2lkZS1tZW51XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9hc2lkZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBBc2lkZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRpc3BsYXk6IGFueTtcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG9mZkNhbnZhczogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gICAgdGhpcy5pc0ZpeGVkKHRoaXMuZml4ZWQpO1xuICAgIHRoaXMuZGlzcGxheUJyZWFrcG9pbnQodGhpcy5kaXNwbGF5KTtcbiAgfVxuXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maXhlZCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnYXNpZGUtbWVudS1maXhlZCcpOyB9XG4gIH1cblxuICBpc09mZkNhbnZhcyhvZmZDYW52YXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vZmZDYW52YXMpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2FzaWRlLW1lbnUtb2ZmLWNhbnZhcycpOyB9XG4gIH1cblxuICBkaXNwbGF5QnJlYWtwb2ludChkaXNwbGF5OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNwbGF5ICE9PSBmYWxzZSApIHtcbiAgICAgIGxldCBjc3NDbGFzcztcbiAgICAgIHRoaXMuZGlzcGxheSA/IGNzc0NsYXNzID0gYGFzaWRlLW1lbnUtJHt0aGlzLmRpc3BsYXl9LXNob3dgIDogY3NzQ2xhc3MgPSBhc2lkZU1lbnVDc3NDbGFzc2VzWzBdO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4vLi4vc2hhcmVkJztcblxuaW1wb3J0IHsgQXBwQXNpZGVDb21wb25lbnQgfSBmcm9tICcuL2FwcC1hc2lkZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIExheW91dE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQXBwQXNpZGVDb21wb25lbnQsXG4gICAgTGF5b3V0TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcEFzaWRlQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQXNpZGVNb2R1bGUge31cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzL2luZGV4JztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXBwQnJlYWRjcnVtYlNlcnZpY2Uge1xyXG5cclxuICBicmVhZGNydW1iczogT2JzZXJ2YWJsZTxBcnJheTxPYmplY3Q+PjtcclxuXHJcbiAgcHJpdmF0ZSBfYnJlYWRjcnVtYnM6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxPYmplY3Q+PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuXHJcbiAgICB0aGlzLl9icmVhZGNydW1icyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8T2JqZWN0W10+KG5ldyBBcnJheTxPYmplY3Q+KCkpO1xyXG5cclxuICAgIHRoaXMuYnJlYWRjcnVtYnMgPSB0aGlzLl9icmVhZGNydW1icy5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSkuc3Vic2NyaWJlKChldmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBicmVhZGNydW1icyA9IFtdO1xyXG4gICAgICBsZXQgY3VycmVudFJvdXRlID0gdGhpcy5yb3V0ZS5yb290LFxyXG4gICAgICB1cmwgPSAnJztcclxuICAgICAgZG8ge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuUm91dGVzID0gY3VycmVudFJvdXRlLmNoaWxkcmVuO1xyXG4gICAgICAgIGN1cnJlbnRSb3V0ZSA9IG51bGw7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgICAgY2hpbGRyZW5Sb3V0ZXMuZm9yRWFjaChyb3V0ZSA9PiB7XHJcbiAgICAgICAgICBpZiAocm91dGUub3V0bGV0ID09PSAncHJpbWFyeScpIHtcclxuICAgICAgICAgICAgY29uc3Qgcm91dGVTbmFwc2hvdCA9IHJvdXRlLnNuYXBzaG90O1xyXG4gICAgICAgICAgICB1cmwgKz0gJy8nICsgcm91dGVTbmFwc2hvdC51cmwubWFwKHNlZ21lbnQgPT4gc2VnbWVudC5wYXRoKS5qb2luKCcvJyk7XHJcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzLnB1c2goe1xyXG4gICAgICAgICAgICAgIGxhYmVsOiByb3V0ZS5zbmFwc2hvdC5kYXRhLFxyXG4gICAgICAgICAgICAgIHVybDogICB1cmxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRSb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IHdoaWxlIChjdXJyZW50Um91dGUpO1xyXG5cclxuICAgICAgdGhpcy5fYnJlYWRjcnVtYnMubmV4dChPYmplY3QuYXNzaWduKFtdLCBicmVhZGNydW1icykpO1xyXG5cclxuICAgICAgcmV0dXJuIGJyZWFkY3J1bWJzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGxhY2UgfSBmcm9tICcuLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBBcHBCcmVhZGNydW1iU2VydmljZSB9IGZyb20gJy4vYXBwLWJyZWFkY3J1bWIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1icmVhZGNydW1iJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LWJyZWFkY3J1bWIgW25nRm9yT2ZdPVwiYnJlYWRjcnVtYnMgfCBhc3luY1wiIGxldC1sYXN0ID0gbGFzdD5cbiAgICAgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbVwiXG4gICAgICAgICAgKm5nSWY9XCJicmVhZGNydW1iLmxhYmVsLnRpdGxlICYmIChicmVhZGNydW1iLnVybC5zbGljZSgtMSkgPT0gJy8nIHx8IGxhc3QpXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ7YWN0aXZlOiBsYXN0fVwiPlxuICAgICAgICA8YSAqbmdJZj1cIiFsYXN0XCIgW3JvdXRlckxpbmtdPVwiYnJlYWRjcnVtYi51cmxcIj57e2JyZWFkY3J1bWIubGFiZWwudGl0bGV9fTwvYT5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJsYXN0XCIgW3JvdXRlckxpbmtdPVwiYnJlYWRjcnVtYi51cmxcIj57e2JyZWFkY3J1bWIubGFiZWwudGl0bGV9fTwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG4gIHB1YmxpYyBicmVhZGNydW1icztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogQXBwQnJlYWRjcnVtYlNlcnZpY2UsIHB1YmxpYyBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gICAgdGhpcy5pc0ZpeGVkKHRoaXMuZml4ZWQpO1xuICAgIHRoaXMuYnJlYWRjcnVtYnMgPSB0aGlzLnNlcnZpY2UuYnJlYWRjcnVtYnM7XG4gIH1cblxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZml4ZWQpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2JyZWFkY3J1bWItZml4ZWQnKTsgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBBcHAgQnJlYWRjcnVtYiBDb21wb25lbnRcbmltcG9ydCB7IEFwcEJyZWFkY3J1bWJTZXJ2aWNlIH0gZnJvbSAnLi9hcHAtYnJlYWRjcnVtYi5zZXJ2aWNlJztcbmltcG9ydCB7IEFwcEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1icmVhZGNydW1iLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUgXSxcbiAgZXhwb3J0czogWyBBcHBCcmVhZGNydW1iQ29tcG9uZW50IF0sXG4gIGRlY2xhcmF0aW9uczogWyBBcHBCcmVhZGNydW1iQ29tcG9uZW50IF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQnJlYWRjcnVtYk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQXBwQnJlYWRjcnVtYk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBBcHBCcmVhZGNydW1iU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGxhY2UgfSBmcm9tICcuLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1mb290ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxmb290ZXIgY2xhc3M9XCJhcHAtZm9vdGVyXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9mb290ZXI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcbiAgfVxuXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maXhlZCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWZpeGVkJyk7IH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtZm9vdGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlIF0sXG4gIGV4cG9ydHM6IFsgQXBwRm9vdGVyQ29tcG9uZW50IF0sXG4gIGRlY2xhcmF0aW9uczogWyBBcHBGb290ZXJDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBGb290ZXJNb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGFjZSB9IGZyb20gJy4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGhlYWRlciBjbGFzcz1cImFwcC1oZWFkZXIgbmF2YmFyXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwibW9iaWxlU2lkZWJhclRvZ2dsZXIgIT0gZmFsc2VcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGQtbGctbm9uZVwiIHR5cGU9XCJidXR0b25cIiBhcHBTaWRlYmFyVG9nZ2xlcj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJuYXZiYXJCcmFuZCB8fCBuYXZiYXJCcmFuZEZ1bGwgfHwgbmF2YmFyQnJhbmRNaW5pbWl6ZWRcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlxuICAgICAgICAgIDxpbWcgKm5nSWY9XCJuYXZiYXJCcmFuZFwiXG4gICAgICAgICAgICAgICBbc3JjXT1cImltZ1NyYyhuYXZiYXJCcmFuZClcIlxuICAgICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwiaW1nV2lkdGgobmF2YmFyQnJhbmQpXCJcbiAgICAgICAgICAgICAgIFthdHRyLmhlaWdodF09XCJpbWdIZWlnaHQobmF2YmFyQnJhbmQpXCJcbiAgICAgICAgICAgICAgIFthdHRyLmFsdF09XCJpbWdBbHQobmF2YmFyQnJhbmQpXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwibmF2YmFyLWJyYW5kXCI+XG4gICAgICAgICAgPGltZyAqbmdJZj1cIm5hdmJhckJyYW5kRnVsbFwiXG4gICAgICAgICAgICAgICBbc3JjXT1cImltZ1NyYyhuYXZiYXJCcmFuZEZ1bGwpXCJcbiAgICAgICAgICAgICAgIFthdHRyLndpZHRoXT1cImltZ1dpZHRoKG5hdmJhckJyYW5kRnVsbClcIlxuICAgICAgICAgICAgICAgW2F0dHIuaGVpZ2h0XT1cImltZ0hlaWdodChuYXZiYXJCcmFuZEZ1bGwpXCJcbiAgICAgICAgICAgICAgIFthdHRyLmFsdF09XCJpbWdBbHQobmF2YmFyQnJhbmRGdWxsKVwiXG4gICAgICAgICAgICAgICBjbGFzcz1cIm5hdmJhci1icmFuZC1mdWxsXCI+XG4gICAgICAgICAgPGltZyAqbmdJZj1cIm5hdmJhckJyYW5kTWluaW1pemVkXCJcbiAgICAgICAgICAgICAgIFtzcmNdPVwiaW1nU3JjKG5hdmJhckJyYW5kTWluaW1pemVkKVwiXG4gICAgICAgICAgICAgICBbYXR0ci53aWR0aF09XCJpbWdXaWR0aChuYXZiYXJCcmFuZE1pbmltaXplZClcIlxuICAgICAgICAgICAgICAgW2F0dHIuaGVpZ2h0XT1cImltZ0hlaWdodChuYXZiYXJCcmFuZE1pbmltaXplZClcIlxuICAgICAgICAgICAgICAgW2F0dHIuYWx0XT1cImltZ0FsdChuYXZiYXJCcmFuZE1pbmltaXplZClcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJuYXZiYXItYnJhbmQtbWluaW1pemVkXCI+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwic2lkZWJhclRvZ2dsZXIgIT0gZmFsc2VcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGQtbWQtZG93bi1ub25lXCIgdHlwZT1cImJ1dHRvblwiIFthcHBTaWRlYmFyVG9nZ2xlcl09XCJzaWRlYmFyVG9nZ2xlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImFzaWRlTWVudVRvZ2dsZXIgIT0gZmFsc2VcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGQtbWQtZG93bi1ub25lXCIgdHlwZT1cImJ1dHRvblwiIFthcHBBc2lkZU1lbnVUb2dnbGVyXT1cImFzaWRlTWVudVRvZ2dsZXJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJtb2JpbGVBc2lkZU1lbnVUb2dnbGVyICE9IGZhbHNlXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlciBkLWxnLW5vbmVcIiB0eXBlPVwiYnV0dG9uXCIgYXBwQXNpZGVNZW51VG9nZ2xlcj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2hlYWRlcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kOiBhbnk7XG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kRnVsbDogYW55O1xuICBASW5wdXQoKSBuYXZiYXJCcmFuZE1pbmltaXplZDogYW55O1xuXG4gIEBJbnB1dCgpIHNpZGViYXJUb2dnbGVyOiBhbnk7XG4gIEBJbnB1dCgpIG1vYmlsZVNpZGViYXJUb2dnbGVyOiBhbnk7XG5cbiAgQElucHV0KCkgYXNpZGVNZW51VG9nZ2xlcjogYW55O1xuICBASW5wdXQoKSBtb2JpbGVBc2lkZU1lbnVUb2dnbGVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcbiAgfVxuXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maXhlZCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWZpeGVkJyk7IH1cbiAgfVxuXG4gIGltZ1NyYyhicmFuZDogYW55KTogdm9pZCB7XG4gICAgcmV0dXJuIGJyYW5kLnNyYyA/IGJyYW5kLnNyYyA6ICcnO1xuICB9XG5cbiAgaW1nV2lkdGgoYnJhbmQ6IGFueSk6IHZvaWQge1xuICAgIHJldHVybiBicmFuZC53aWR0aCA/IGJyYW5kLndpZHRoIDogJ2F1dG8nO1xuICB9XG5cbiAgaW1nSGVpZ2h0KGJyYW5kOiBhbnkpOiB2b2lkIHtcbiAgICByZXR1cm4gYnJhbmQuaGVpZ2h0ID8gYnJhbmQuaGVpZ2h0IDogJ2F1dG8nO1xuICB9XG5cbiAgaW1nQWx0KGJyYW5kOiBhbnkpOiB2b2lkIHtcbiAgICByZXR1cm4gYnJhbmQuYWx0ID8gYnJhbmQuYWx0IDogJyc7XG4gIH1cblxuICBicmVha3BvaW50KGJyZWFrcG9pbnQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGJyZWFrcG9pbnQpO1xuICAgIHJldHVybiBicmVha3BvaW50ID8gYnJlYWtwb2ludCA6ICcnO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xuXG5pbXBvcnQgeyBBcHBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1oZWFkZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBMYXlvdXRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFwcEhlYWRlckNvbXBvbmVudCxcbiAgICBMYXlvdXRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwSGVhZGVyQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwSGVhZGVyTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGxhY2UgfSBmcm9tICcuLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLWZvb3RlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInNpZGViYXItZm9vdGVyXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGxhY2UgfSBmcm9tICcuLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLWZvcm0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxmb3JtIGNsYXNzPVwic2lkZWJhci1mb3JtXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9mb3JtPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGxhY2UgfSBmcm9tICcuLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInNpZGViYXItaGVhZGVyXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhckhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1taW5pbWl6ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gY2xhc3M9XCJzaWRlYmFyLW1pbmltaXplclwiIHR5cGU9XCJidXR0b25cIiBhcHBTaWRlYmFyTWluaW1pemVyIGFwcEJyYW5kTWluaW1pemVyPjwvYnV0dG9uPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNpZGViYXJDc3NDbGFzc2VzIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhcicsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbXBhY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc3BsYXk6IGFueTtcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1pbmltaXplZDogYm9vbGVhbjtcbiAgQElucHV0KCkgb2ZmQ2FudmFzOiBib29sZWFuO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2lkZWJhcicpIHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGlzcGxheUJyZWFrcG9pbnQodGhpcy5kaXNwbGF5KTtcbiAgICB0aGlzLmlzQ29tcGFjdCh0aGlzLmNvbXBhY3QpO1xuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcbiAgICB0aGlzLmlzTWluaW1pemVkKHRoaXMubWluaW1pemVkKTtcbiAgICB0aGlzLmlzT2ZmQ2FudmFzKHRoaXMub2ZmQ2FudmFzKTtcbiAgfVxuXG4gIGlzQ29tcGFjdChjb21wYWN0OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29tcGFjdCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1jb21wYWN0Jyk7IH1cbiAgfVxuXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maXhlZCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1maXhlZCcpOyB9XG4gIH1cblxuICBpc01pbmltaXplZChtaW5pbWl6ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5taW5pbWl6ZWQpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItbWluaW1pemVkJyk7IH1cbiAgfVxuXG4gIGlzT2ZmQ2FudmFzKG9mZkNhbnZhczogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLm9mZkNhbnZhcykgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1vZmYtY2FudmFzJyk7IH1cbiAgfVxuXG4gIGZpeGVkUG9zaXRpb24oZml4ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maXhlZCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1maXhlZCcpOyB9XG4gIH1cblxuICBkaXNwbGF5QnJlYWtwb2ludChkaXNwbGF5OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNwbGF5ICE9PSBmYWxzZSApIHtcbiAgICAgIGxldCBjc3NDbGFzcztcbiAgICAgIHRoaXMuZGlzcGxheSA/IGNzc0NsYXNzID0gYHNpZGViYXItJHt0aGlzLmRpc3BsYXl9LXNob3dgIDogY3NzQ2xhc3MgPSBzaWRlYmFyQ3NzQ2xhc3Nlc1swXTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwTmF2RHJvcGRvd25dJ1xufSlcbmV4cG9ydCBjbGFzcyBOYXZEcm9wZG93bkRpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gIH1cbn1cblxuLyoqXG4qIEFsbG93cyB0aGUgZHJvcGRvd24gdG8gYmUgdG9nZ2xlZCB2aWEgY2xpY2suXG4qL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcE5hdkRyb3Bkb3duVG9nZ2xlXSdcbn0pXG5leHBvcnQgY2xhc3MgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRyb3Bkb3duOiBOYXZEcm9wZG93bkRpcmVjdGl2ZSkge31cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmRyb3Bkb3duLnRvZ2dsZSgpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHVsIGNsYXNzPVwibmF2XCI+XG4gICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LW5hdml0ZW0gW25nRm9yT2ZdPVwibmF2SXRlbXNcIj5cbiAgICAgICAgPGxpICpuZ0lmPVwiaXNEaXZpZGVyKG5hdml0ZW0pXCIgY2xhc3M9XCJuYXYtZGl2aWRlclwiPjwvbGk+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJpc1RpdGxlKG5hdml0ZW0pXCI+XG4gICAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi10aXRsZSBbdGl0bGVdPSduYXZpdGVtJz48L2FwcC1zaWRlYmFyLW5hdi10aXRsZT5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIiFpc0RpdmlkZXIobmF2aXRlbSkmJiFpc1RpdGxlKG5hdml0ZW0pXCI+XG4gICAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1pdGVtIFtpdGVtXT0nbmF2aXRlbSc+PC9hcHAtc2lkZWJhci1uYXYtaXRlbT5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC91bD5gXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZDb21wb25lbnQge1xuICBASW5wdXQoKSBuYXZJdGVtczogYW55O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2lkZWJhci1uYXYnKSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJvbGUgPSAnbmF2JztcblxuICBwdWJsaWMgaXNEaXZpZGVyKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5kaXZpZGVyID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzVGl0bGUoaXRlbSkge1xuICAgIHJldHVybiBpdGVtLnRpdGxlID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWl0ZW0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxsaSAqbmdJZj1cIiFpc0Ryb3Bkb3duKCk7IGVsc2UgZHJvcGRvd25cIiBbbmdDbGFzc109XCJoYXNDbGFzcygpID8gJ25hdi1pdGVtICcgKyBpdGVtLmNsYXNzIDogJ25hdi1pdGVtJ1wiPlxuICAgICAgPGFwcC1zaWRlYmFyLW5hdi1saW5rIFtsaW5rXT0naXRlbSc+PC9hcHAtc2lkZWJhci1uYXYtbGluaz5cbiAgICA8L2xpPlxuICAgIDxuZy10ZW1wbGF0ZSAjZHJvcGRvd24+XG4gICAgICA8bGkgW25nQ2xhc3NdPVwiaGFzQ2xhc3MoKSA/ICduYXYtaXRlbSBuYXYtZHJvcGRvd24gJyArIGl0ZW0uY2xhc3MgOiAnbmF2LWl0ZW0gbmF2LWRyb3Bkb3duJ1wiXG4gICAgICAgICAgW2NsYXNzLm9wZW5dPVwiaXNBY3RpdmUoKVwiXG4gICAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cIm9wZW5cIlxuICAgICAgICAgIGFwcE5hdkRyb3Bkb3duPlxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWRyb3Bkb3duIFtsaW5rXT0naXRlbSc+PC9hcHAtc2lkZWJhci1uYXYtZHJvcGRvd24+XG4gICAgICA8L2xpPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcblxuICBwdWJsaWMgaGFzQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbS5jbGFzcyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0Ryb3Bkb3duKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW0uY2hpbGRyZW4gPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdGhpc1VybCgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtLnVybDtcbiAgfVxuXG4gIHB1YmxpYyBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXIuaXNBY3RpdmUodGhpcy50aGlzVXJsKCksIGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgfVxuXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1saW5rJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YSAqbmdJZj1cIiFpc0V4dGVybmFsTGluaygpOyBlbHNlIGV4dGVybmFsXCJcbiAgICAgIFtuZ0NsYXNzXT1cImhhc1ZhcmlhbnQoKSA/ICduYXYtbGluayBuYXYtbGluay0nICsgbGluay52YXJpYW50IDogJ25hdi1saW5rJ1wiXG4gICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCJcbiAgICAgIFtyb3V0ZXJMaW5rXT1cIltsaW5rLnVybF1cIlxuICAgICAgKGNsaWNrKT1cImhpZGVNb2JpbGUoKVwiPlxuICAgICAgPGkgKm5nSWY9XCJpc0ljb24oKVwiIGNsYXNzPVwibmF2LWljb24ge3sgbGluay5pY29uIH19XCI+PC9pPlxuICAgICAge3sgbGluay5uYW1lIH19XG4gICAgICA8c3BhbiAqbmdJZj1cImlzQmFkZ2UoKVwiIFtuZ0NsYXNzXT1cIidiYWRnZSBiYWRnZS0nICsgbGluay5iYWRnZS52YXJpYW50XCI+e3sgbGluay5iYWRnZS50ZXh0IH19PC9zcGFuPlxuICAgIDwvYT5cbiAgICA8bmctdGVtcGxhdGUgI2V4dGVybmFsPlxuICAgICAgPGEgW25nQ2xhc3NdPVwiaGFzVmFyaWFudCgpID8gJ25hdi1saW5rIG5hdi1saW5rLScgKyBsaW5rLnZhcmlhbnQgOiAnbmF2LWxpbmsnXCIgaHJlZj1cInt7bGluay51cmx9fVwiPlxuICAgICAgICA8aSAqbmdJZj1cImlzSWNvbigpXCIgY2xhc3M9XCJuYXYtaWNvbiB7eyBsaW5rLmljb24gfX1cIj48L2k+XG4gICAgICAgIHt7IGxpbmsubmFtZSB9fVxuICAgICAgICA8c3BhbiAqbmdJZj1cImlzQmFkZ2UoKVwiIFtuZ0NsYXNzXT1cIidiYWRnZSBiYWRnZS0nICsgbGluay5iYWRnZS52YXJpYW50XCI+e3sgbGluay5iYWRnZS50ZXh0IH19PC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsaW5rOiBhbnk7XG5cbiAgcHVibGljIGhhc1ZhcmlhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluay52YXJpYW50ID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzQmFkZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluay5iYWRnZSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0V4dGVybmFsTGluaygpIHtcbiAgICByZXR1cm4gdGhpcy5saW5rLnVybC5zdWJzdHJpbmcoMCwgNCkgPT09ICdodHRwJyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0ljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGluay5pY29uID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGhpZGVNb2JpbGUoKSB7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLW1vYmlsZS1zaG93JykpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2lkZWJhci1tb2JpbGUtc2hvdycpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtZHJvcGRvd24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgbmF2LWRyb3Bkb3duLXRvZ2dsZVwiIGFwcE5hdkRyb3Bkb3duVG9nZ2xlPlxuICAgICAgPGkgKm5nSWY9XCJpc0ljb24oKVwiIGNsYXNzPVwibmF2LWljb24ge3sgbGluay5pY29uIH19XCI+PC9pPlxuICAgICAge3sgbGluay5uYW1lIH19XG4gICAgICA8c3BhbiAqbmdJZj1cImlzQmFkZ2UoKVwiIFtuZ0NsYXNzXT1cIidiYWRnZSBiYWRnZS0nICsgbGluay5iYWRnZS52YXJpYW50XCI+e3sgbGluay5iYWRnZS50ZXh0IH19PC9zcGFuPlxuICAgIDwvYT5cbiAgICA8dWwgY2xhc3M9XCJuYXYtZHJvcGRvd24taXRlbXNcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtY2hpbGQgW25nRm9yT2ZdPVwibGluay5jaGlsZHJlblwiPlxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWl0ZW0gW2l0ZW1dPSdjaGlsZCc+PC9hcHAtc2lkZWJhci1uYXYtaXRlbT5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC91bD5cbiAgYCxcbiAgc3R5bGVzOiBbJy5uYXYtZHJvcGRvd24tdG9nZ2xlIHsgY3Vyc29yOiBwb2ludGVyOyB9J11cbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGluazogYW55O1xuXG4gIHB1YmxpYyBpc0JhZGdlKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmsuYmFkZ2UgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaXNJY29uKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmsuaWNvbiA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtdGl0bGUnLFxuICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGl0bGU6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGxpID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQodGhpcy50aXRsZS5uYW1lKTtcblxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MobGksICduYXYtdGl0bGUnKTtcblxuICAgIGlmICggdGhpcy50aXRsZS5jbGFzcyApIHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLnRpdGxlLmNsYXNzO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhsaSwgY2xhc3Nlcyk7XG4gICAgfVxuXG4gICAgaWYgKCB0aGlzLnRpdGxlLndyYXBwZXIgKSB7XG4gICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KHRoaXMudGl0bGUud3JhcHBlci5lbGVtZW50KTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh3cmFwcGVyLCBuYW1lKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQobGksIHdyYXBwZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGxpLCBuYW1lKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChuYXRpdmVFbGVtZW50LCBsaSk7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xuXG4vLyBBcHAgU2lkZWJhciBDb21wb25lbnRcbmltcG9ydCB7IEFwcFNpZGViYXJGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhckZvcm1Db21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFNpZGViYXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItbWluaW1pemVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgQXBwU2lkZWJhck5hdkNvbXBvbmVudCxcbiAgQXBwU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50LFxuICBBcHBTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCxcbiAgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXG4gIEFwcFNpZGViYXJOYXZUaXRsZUNvbXBvbmVudCxcbiAgTmF2RHJvcGRvd25EaXJlY3RpdmUsXG4gIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlXG59IGZyb20gJy4vYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIExheW91dE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQXBwU2lkZWJhckZvb3RlckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyRm9ybUNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFySGVhZGVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2Q29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQsXG4gICAgTmF2RHJvcGRvd25EaXJlY3RpdmUsXG4gICAgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsXG4gICAgTGF5b3V0TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcFNpZGViYXJGb290ZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhckZvcm1Db21wb25lbnQsXG4gICAgQXBwU2lkZWJhckhlYWRlckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2Q29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQsXG4gICAgTmF2RHJvcGRvd25EaXJlY3RpdmUsXG4gICAgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLHFCQUFNLGlCQUFpQixHQUFrQjtJQUM5QyxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ2xCLENBQUM7QUFFRixBQUFPLHFCQUFNLG1CQUFtQixHQUFrQjtJQUNoRCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0NBQ3JCLENB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