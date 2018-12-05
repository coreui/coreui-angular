import { BehaviorSubject } from 'rxjs/index';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { Directive, HostListener, Input, NgModule, Component, ElementRef, Injectable, HostBinding, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var sidebarCssClasses = [
    'sidebar-show',
    'sidebar-sm-show',
    'sidebar-md-show',
    'sidebar-lg-show',
    'sidebar-xl-show'
];
/** @type {?} */
var asideMenuCssClasses = [
    'aside-menu-show',
    'aside-menu-sm-show',
    'aside-menu-md-show',
    'aside-menu-lg-show',
    'aside-menu-xl-show'
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var RemoveClasses = function (NewClassNames) {
    /** @type {?} */
    var MatchClasses = NewClassNames.map(function (Class) { return document.querySelector('body').classList.contains(Class); });
    return MatchClasses.indexOf(true) !== -1;
};
/** @type {?} */
var ToggleClasses = function (Toggle, ClassNames) {
    /** @type {?} */
    var Level = ClassNames.indexOf(Toggle);
    /** @type {?} */
    var NewClassNames = ClassNames.slice(0, Level + 1);
    if (RemoveClasses(NewClassNames)) {
        NewClassNames.map(function (Class) { return document.querySelector('body').classList.remove(Class); });
    }
    else {
        document.querySelector('body').classList.add(Toggle);
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        /** @type {?} */
        var cssClass;
        this.bp ? cssClass = "sidebar-" + this.bp + "-show" : cssClass = sidebarCssClasses[0];
        ToggleClasses(cssClass, sidebarCssClasses);
    };
    SidebarToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appSidebarToggler]'
                },] }
    ];
    /** @nocollapse */
    SidebarToggleDirective.ctorParameters = function () { return []; };
    SidebarToggleDirective.propDecorators = {
        breakpoint: [{ type: Input, args: ['appSidebarToggler',] }],
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
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
                },] }
    ];
    /** @nocollapse */
    SidebarMinimizeDirective.ctorParameters = function () { return []; };
    SidebarMinimizeDirective.propDecorators = {
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return SidebarMinimizeDirective;
}());
var MobileSidebarToggleDirective = /** @class */ (function () {
    function MobileSidebarToggleDirective() {
    }
    // Check if element has class
    // Check if element has class
    /**
     * @private
     * @param {?} target
     * @param {?} elementClassName
     * @return {?}
     */
    MobileSidebarToggleDirective.prototype.hasClass = 
    // Check if element has class
    /**
     * @private
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
        document.querySelector('body').classList.toggle('sidebar-show');
    };
    MobileSidebarToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appMobileSidebarToggler]'
                },] }
    ];
    /** @nocollapse */
    MobileSidebarToggleDirective.ctorParameters = function () { return []; };
    MobileSidebarToggleDirective.propDecorators = {
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return MobileSidebarToggleDirective;
}());
/**
 * Allows the off-canvas sidebar to be closed via click.
 */
var SidebarOffCanvasCloseDirective = /** @class */ (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    // Check if element has class
    // Check if element has class
    /**
     * @private
     * @param {?} target
     * @param {?} elementClassName
     * @return {?}
     */
    SidebarOffCanvasCloseDirective.prototype.hasClass = 
    // Check if element has class
    /**
     * @private
     * @param {?} target
     * @param {?} elementClassName
     * @return {?}
     */
    function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    // Toggle element class
    /**
     * @private
     * @param {?} elem
     * @param {?} elementClassName
     * @return {?}
     */
    SidebarOffCanvasCloseDirective.prototype.toggleClass = 
    // Toggle element class
    /**
     * @private
     * @param {?} elem
     * @param {?} elementClassName
     * @return {?}
     */
    function (elem, elementClassName) {
        /** @type {?} */
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
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
                },] }
    ];
    /** @nocollapse */
    SidebarOffCanvasCloseDirective.ctorParameters = function () { return []; };
    SidebarOffCanvasCloseDirective.propDecorators = {
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
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
                },] }
    ];
    /** @nocollapse */
    BrandMinimizeDirective.ctorParameters = function () { return []; };
    BrandMinimizeDirective.propDecorators = {
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
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
        /** @type {?} */
        var cssClass;
        this.bp ? cssClass = "aside-menu-" + this.bp + "-show" : cssClass = asideMenuCssClasses[0];
        ToggleClasses(cssClass, asideMenuCssClasses);
    };
    AsideToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appAsideMenuToggler]',
                },] }
    ];
    /** @nocollapse */
    AsideToggleDirective.ctorParameters = function () { return []; };
    AsideToggleDirective.propDecorators = {
        breakpoint: [{ type: Input, args: ['appAsideMenuToggler',] }],
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return AsideToggleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                },] }
    ];
    return LayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} el
 * @return {?}
 */
function Replace(el) {
    /** @type {?} */
    var nativeElement = el.nativeElement;
    /** @type {?} */
    var parentElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
        parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.isOffCanvas(this.offCanvas);
        this.displayBreakpoint(this.display);
    };
    /**
     * @return {?}
     */
    AppAsideComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        document.body.classList.remove('aside-menu-fixed');
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
            /** @type {?} */
            var cssClass = void 0;
            this.display ? cssClass = "aside-menu-" + this.display + "-show" : cssClass = asideMenuCssClasses[0];
            document.querySelector('body').classList.add(cssClass);
        }
    };
    AppAsideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-aside',
                    template: "\n    <aside class=\"aside-menu\">\n      <ng-content></ng-content>\n    </aside>\n  "
                }] }
    ];
    /** @nocollapse */
    AppAsideComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    AppAsideComponent.propDecorators = {
        display: [{ type: Input }],
        fixed: [{ type: Input }],
        offCanvas: [{ type: Input }]
    };
    return AppAsideComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                },] }
    ];
    return AppAsideModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AppBreadcrumbService = /** @class */ (function () {
    function AppBreadcrumbService(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._breadcrumbs = new BehaviorSubject(new Array());
        this.breadcrumbs = this._breadcrumbs.asObservable();
        this.router.events.pipe(filter(function (event) { return event instanceof NavigationEnd; })).subscribe(function (event) {
            /** @type {?} */
            var breadcrumbs = [];
            /** @type {?} */
            var currentRoute = _this.route.root;
            /** @type {?} */
            var url = '';
            do {
                /** @type {?} */
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                // tslint:disable-next-line:no-shadowed-variable
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        /** @type {?} */
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
            _this._breadcrumbs.next(Object.assign([], breadcrumbs));
            return breadcrumbs;
        });
    }
    AppBreadcrumbService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AppBreadcrumbService.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute }
    ]; };
    return AppBreadcrumbService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @return {?}
     */
    AppBreadcrumbComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        document.body.classList.remove('breadcrumb-fixed');
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
                }] }
    ];
    /** @nocollapse */
    AppBreadcrumbComponent.ctorParameters = function () { return [
        { type: AppBreadcrumbService },
        { type: ElementRef }
    ]; };
    AppBreadcrumbComponent.propDecorators = {
        fixed: [{ type: Input }]
    };
    return AppBreadcrumbComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
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
                },] }
    ];
    return AppBreadcrumbModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @return {?}
     */
    AppFooterComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        document.body.classList.remove('footer-fixed');
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
                }] }
    ];
    /** @nocollapse */
    AppFooterComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    AppFooterComponent.propDecorators = {
        fixed: [{ type: Input }]
    };
    return AppFooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AppFooterModule = /** @class */ (function () {
    function AppFooterModule() {
    }
    AppFooterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [AppFooterComponent],
                    declarations: [AppFooterComponent]
                },] }
    ];
    return AppFooterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @return {?}
     */
    AppHeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        document.body.classList.remove('header-fixed');
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
                }] }
    ];
    /** @nocollapse */
    AppHeaderComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    AppHeaderComponent.propDecorators = {
        fixed: [{ type: Input }],
        navbarBrand: [{ type: Input }],
        navbarBrandFull: [{ type: Input }],
        navbarBrandMinimized: [{ type: Input }],
        sidebarToggler: [{ type: Input }],
        mobileSidebarToggler: [{ type: Input }],
        asideMenuToggler: [{ type: Input }],
        mobileAsideMenuToggler: [{ type: Input }]
    };
    return AppHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                },] }
    ];
    return AppHeaderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                }] }
    ];
    /** @nocollapse */
    AppSidebarFooterComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return AppSidebarFooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                }] }
    ];
    /** @nocollapse */
    AppSidebarFormComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return AppSidebarFormComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                }] }
    ];
    /** @nocollapse */
    AppSidebarHeaderComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return AppSidebarHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                }] }
    ];
    /** @nocollapse */
    AppSidebarMinimizerComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return AppSidebarMinimizerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @return {?}
     */
    AppSidebarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        document.body.classList.remove('sidebar-fixed');
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
        console.warn('fixedPosition() is deprecated, use isFixed() instead');
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
            /** @type {?} */
            var cssClass = void 0;
            this.display ? cssClass = "sidebar-" + this.display + "-show" : cssClass = sidebarCssClasses[0];
            document.querySelector('body').classList.add(cssClass);
        }
    };
    AppSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar',
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    AppSidebarComponent.ctorParameters = function () { return []; };
    AppSidebarComponent.propDecorators = {
        compact: [{ type: Input }],
        display: [{ type: Input }],
        fixed: [{ type: Input }],
        minimized: [{ type: Input }],
        offCanvas: [{ type: Input }],
        true: [{ type: HostBinding, args: ['class.sidebar',] }]
    };
    return AppSidebarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                },] }
    ];
    /** @nocollapse */
    NavDropdownDirective.ctorParameters = function () { return [
        { type: ElementRef }
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
                },] }
    ];
    /** @nocollapse */
    NavDropdownToggleDirective.ctorParameters = function () { return [
        { type: NavDropdownDirective }
    ]; };
    NavDropdownToggleDirective.propDecorators = {
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return NavDropdownToggleDirective;
}());
var LinkAttributesDirective = /** @class */ (function () {
    function LinkAttributesDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * @return {?}
     */
    LinkAttributesDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var attribs = this.appLinkAttributes;
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
    /**
     * @private
     * @param {?} styles
     * @return {?}
     */
    LinkAttributesDirective.prototype.setStyle = /**
     * @private
     * @param {?} styles
     * @return {?}
     */
    function (styles) {
        for (var style in styles) {
            this.renderer.setStyle(this.el.nativeElement, style, styles[style]);
        }
    };
    /**
     * @private
     * @param {?} classes
     * @return {?}
     */
    LinkAttributesDirective.prototype.addClass = /**
     * @private
     * @param {?} classes
     * @return {?}
     */
    function (classes) {
        var _this = this;
        /** @type {?} */
        var classArray = Array.isArray(classes) ? classes : classes.split(' ');
        classArray.forEach(function (element) {
            _this.renderer.addClass(_this.el.nativeElement, element);
        });
    };
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    LinkAttributesDirective.prototype.setAttrib = /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        /** @type {?} */
        var newAttr = document.createAttribute(key);
        newAttr.value = value;
        this.renderer.setAttribute(this.el.nativeElement, key, value);
    };
    LinkAttributesDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appLinkAttributes]'
                },] }
    ];
    /** @nocollapse */
    LinkAttributesDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    LinkAttributesDirective.propDecorators = {
        appLinkAttributes: [{ type: Input }]
    };
    return LinkAttributesDirective;
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
                }] }
    ];
    /** @nocollapse */
    AppSidebarNavComponent.ctorParameters = function () { return []; };
    AppSidebarNavComponent.propDecorators = {
        navItems: [{ type: Input }],
        true: [{ type: HostBinding, args: ['class.sidebar-nav',] }],
        role: [{ type: HostBinding, args: ['attr.role',] }]
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
                }] }
    ];
    /** @nocollapse */
    AppSidebarNavItemComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ElementRef }
    ]; };
    AppSidebarNavItemComponent.propDecorators = {
        item: [{ type: Input }]
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
    AppSidebarNavLinkComponent.prototype.getClasses = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var disabled = this.isDisabled();
        /** @type {?} */
        var classes = {
            'nav-link': true,
            'disabled': disabled,
            'btn-link': disabled
        };
        if (this.hasVariant()) {
            /** @type {?} */
            var variant = "nav-link-" + this.link.variant;
            classes[variant] = true;
        }
        return classes;
    };
    /**
     * @return {?}
     */
    AppSidebarNavLinkComponent.prototype.getLinkType = /**
     * @return {?}
     */
    function () {
        return this.isDisabled() ? 'disabled' : this.isExternalLink() ? 'external' : '';
    };
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
    AppSidebarNavLinkComponent.prototype.isDisabled = /**
     * @return {?}
     */
    function () {
        return this.link.attributes && this.link.attributes.disabled ? true : false;
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
        if (document.body.classList.contains('sidebar-show')) {
            document.body.classList.toggle('sidebar-show');
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
                    template: "\n    <ng-container [ngSwitch]=\"getLinkType()\">\n      <a *ngSwitchCase=\"'disabled'\"\n      [attr.disabled]=\"true\"\n      [appLinkAttributes]=\"link.attributes\"\n      href=\"\"\n      [ngClass]=\"getClasses()\">\n        <i *ngIf=\"isIcon()\" class=\"nav-icon {{ link.icon }}\"></i>\n        {{ link.name }}\n        <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n      </a>\n      <a *ngSwitchCase=\"'external'\" [ngClass]=\"getClasses()\" href=\"{{link.url}}\" [appLinkAttributes]=\"link.attributes\">\n        <i *ngIf=\"isIcon()\" class=\"nav-icon {{ link.icon }}\"></i>\n        {{ link.name }}\n        <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n      </a>\n      <a *ngSwitchDefault\n        [ngClass]=\"getClasses()\"\n        [appLinkAttributes]=\"link.attributes\"\n        routerLinkActive=\"active\"\n        [routerLink]=\"[link.url]\"\n        (click)=\"hideMobile()\">\n        <i *ngIf=\"isIcon()\" class=\"nav-icon {{ link.icon }}\"></i>\n        {{ link.name }}\n        <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n      </a>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    AppSidebarNavLinkComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ElementRef }
    ]; };
    AppSidebarNavLinkComponent.propDecorators = {
        link: [{ type: Input }]
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
                }] }
    ];
    /** @nocollapse */
    AppSidebarNavDropdownComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ElementRef }
    ]; };
    AppSidebarNavDropdownComponent.propDecorators = {
        link: [{ type: Input }]
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
        /** @type {?} */
        var nativeElement = this.el.nativeElement;
        /** @type {?} */
        var li = this.renderer.createElement('li');
        /** @type {?} */
        var name = this.renderer.createText(this.title.name);
        this.renderer.addClass(li, 'nav-title');
        if (this.title.class) {
            /** @type {?} */
            var classes = this.title.class;
            this.renderer.addClass(li, classes);
        }
        if (this.title.wrapper) {
            /** @type {?} */
            var wrapper = this.renderer.createElement(this.title.wrapper.element);
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
                }] }
    ];
    /** @nocollapse */
    AppSidebarNavTitleComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    AppSidebarNavTitleComponent.propDecorators = {
        title: [{ type: Input }]
    };
    return AppSidebarNavTitleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                        LinkAttributesDirective,
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
                        NavDropdownToggleDirective,
                        LinkAttributesDirective
                    ]
                },] }
    ];
    return AppSidebarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AppAsideModule, AppBreadcrumbModule, AppFooterModule, AppHeaderModule, AppSidebarModule, AppAsideComponent as ɵh, AppBreadcrumbComponent as ɵi, AppBreadcrumbService as ɵj, AppFooterComponent as ɵk, AppHeaderComponent as ɵl, AsideToggleDirective as ɵg, BrandMinimizeDirective as ɵf, MobileSidebarToggleDirective as ɵd, SidebarMinimizeDirective as ɵc, SidebarOffCanvasCloseDirective as ɵe, SidebarToggleDirective as ɵb, LayoutModule as ɵa, AppSidebarFooterComponent as ɵm, AppSidebarFormComponent as ɵn, AppSidebarHeaderComponent as ɵo, AppSidebarMinimizerComponent as ɵp, AppSidebarNavComponent as ɵu, AppSidebarNavDropdownComponent as ɵx, AppSidebarNavItemComponent as ɵv, AppSidebarNavLinkComponent as ɵw, AppSidebarNavTitleComponent as ɵy, LinkAttributesDirective as ɵt, NavDropdownDirective as ɵr, NavDropdownToggleDirective as ɵs, AppSidebarComponent as ɵq };

//# sourceMappingURL=coreui-angular.js.map