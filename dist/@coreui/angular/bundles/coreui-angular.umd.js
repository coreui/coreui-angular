(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('rxjs/index'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@coreui/angular', ['exports', '@angular/core', '@angular/common', '@angular/router', 'rxjs/index', 'rxjs/operators'], factory) :
    (factory((global.coreui = global.coreui || {}, global.coreui.angular = {}),global.ng.core,global.ng.common,global.ng.router,global.Rx,global.Rx.Observable.prototype));
}(this, (function (exports,core,common,router,index,operators) { 'use strict';

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
    var SidebarToggleDirective = (function () {
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
            { type: core.Directive, args: [{
                        selector: '[appSidebarToggler]'
                    },] },
        ];
        /** @nocollapse */
        SidebarToggleDirective.ctorParameters = function () { return []; };
        SidebarToggleDirective.propDecorators = {
            "breakpoint": [{ type: core.Input, args: ['appSidebarToggler',] },],
            "toggleOpen": [{ type: core.HostListener, args: ['click', ['$event'],] },],
        };
        return SidebarToggleDirective;
    }());
    var SidebarMinimizeDirective = (function () {
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
            { type: core.Directive, args: [{
                        selector: '[appSidebarMinimizer]'
                    },] },
        ];
        /** @nocollapse */
        SidebarMinimizeDirective.ctorParameters = function () { return []; };
        SidebarMinimizeDirective.propDecorators = {
            "toggleOpen": [{ type: core.HostListener, args: ['click', ['$event'],] },],
        };
        return SidebarMinimizeDirective;
    }());
    var MobileSidebarToggleDirective = (function () {
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
            { type: core.Directive, args: [{
                        selector: '[appMobileSidebarToggler]'
                    },] },
        ];
        /** @nocollapse */
        MobileSidebarToggleDirective.ctorParameters = function () { return []; };
        MobileSidebarToggleDirective.propDecorators = {
            "toggleOpen": [{ type: core.HostListener, args: ['click', ['$event'],] },],
        };
        return MobileSidebarToggleDirective;
    }());
    /**
     * Allows the off-canvas sidebar to be closed via click.
     */
    var SidebarOffCanvasCloseDirective = (function () {
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
            { type: core.Directive, args: [{
                        selector: '[appSidebarClose]'
                    },] },
        ];
        /** @nocollapse */
        SidebarOffCanvasCloseDirective.ctorParameters = function () { return []; };
        SidebarOffCanvasCloseDirective.propDecorators = {
            "toggleOpen": [{ type: core.HostListener, args: ['click', ['$event'],] },],
        };
        return SidebarOffCanvasCloseDirective;
    }());
    var BrandMinimizeDirective = (function () {
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
            { type: core.Directive, args: [{
                        selector: '[appBrandMinimizer]'
                    },] },
        ];
        /** @nocollapse */
        BrandMinimizeDirective.ctorParameters = function () { return []; };
        BrandMinimizeDirective.propDecorators = {
            "toggleOpen": [{ type: core.HostListener, args: ['click', ['$event'],] },],
        };
        return BrandMinimizeDirective;
    }());
    /**
     * Allows the aside to be toggled via click.
     */
    var AsideToggleDirective = (function () {
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
            { type: core.Directive, args: [{
                        selector: '[appAsideMenuToggler]',
                    },] },
        ];
        /** @nocollapse */
        AsideToggleDirective.ctorParameters = function () { return []; };
        AsideToggleDirective.propDecorators = {
            "breakpoint": [{ type: core.Input, args: ['appAsideMenuToggler',] },],
            "toggleOpen": [{ type: core.HostListener, args: ['click', ['$event'],] },],
        };
        return AsideToggleDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LayoutModule = (function () {
        function LayoutModule() {
        }
        LayoutModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
    var AppAsideComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'app-aside',
                        template: "\n    <aside class=\"aside-menu\">\n      <ng-content></ng-content>\n    </aside>\n  "
                    },] },
        ];
        /** @nocollapse */
        AppAsideComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
            ];
        };
        AppAsideComponent.propDecorators = {
            "display": [{ type: core.Input },],
            "fixed": [{ type: core.Input },],
            "offCanvas": [{ type: core.Input },],
        };
        return AppAsideComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AppAsideModule = (function () {
        function AppAsideModule() {
        }
        AppAsideModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
    var AppBreadcrumbService = (function () {
        function AppBreadcrumbService(router$$1, route) {
            var _this = this;
            this.router = router$$1;
            this.route = route;
            this._breadcrumbs = new index.BehaviorSubject(new Array());
            this.breadcrumbs = this._breadcrumbs.asObservable();
            this.router.events.pipe(operators.filter(function (event) { return event instanceof router.NavigationEnd; })).subscribe(function (event) {
                var /** @type {?} */ breadcrumbs = [];
                var /** @type {?} */ currentRoute = _this.route.root, /** @type {?} */ url = '';
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
            { type: core.Injectable },
        ];
        /** @nocollapse */
        AppBreadcrumbService.ctorParameters = function () {
            return [
                { type: router.Router, },
                { type: router.ActivatedRoute, },
            ];
        };
        return AppBreadcrumbService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AppBreadcrumbComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'app-breadcrumb',
                        template: "\n    <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last = last>\n      <li class=\"breadcrumb-item\"\n          *ngIf=\"breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)\"\n          [ngClass]=\"{active: last}\">\n        <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n        <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n      </li>\n    </ng-template>\n  "
                    },] },
        ];
        /** @nocollapse */
        AppBreadcrumbComponent.ctorParameters = function () {
            return [
                { type: AppBreadcrumbService, },
                { type: core.ElementRef, },
            ];
        };
        AppBreadcrumbComponent.propDecorators = {
            "fixed": [{ type: core.Input },],
        };
        return AppBreadcrumbComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AppBreadcrumbModule = (function () {
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, router.RouterModule],
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
    var AppFooterComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'app-footer',
                        template: "\n    <footer class=\"app-footer\">\n      <ng-content></ng-content>\n    </footer>\n  "
                    },] },
        ];
        /** @nocollapse */
        AppFooterComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
            ];
        };
        AppFooterComponent.propDecorators = {
            "fixed": [{ type: core.Input },],
        };
        return AppFooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AppFooterModule = (function () {
        function AppFooterModule() {
        }
        AppFooterModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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
    var AppHeaderComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'app-header',
                        template: "\n    <header class=\"app-header navbar\">\n      <ng-template [ngIf]=\"mobileSidebarToggler != false\">\n        <button class=\"navbar-toggler d-lg-none\" type=\"button\" appSidebarToggler>\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </ng-template>\n      <ng-template [ngIf]=\"navbarBrand || navbarBrandFull || navbarBrandMinimized\">\n        <a class=\"navbar-brand\" href=\"#\">\n          <img *ngIf=\"navbarBrand\"\n               [src]=\"imgSrc(navbarBrand)\"\n               [attr.width]=\"imgWidth(navbarBrand)\"\n               [attr.height]=\"imgHeight(navbarBrand)\"\n               [attr.alt]=\"imgAlt(navbarBrand)\"\n               class=\"navbar-brand\">\n          <img *ngIf=\"navbarBrandFull\"\n               [src]=\"imgSrc(navbarBrandFull)\"\n               [attr.width]=\"imgWidth(navbarBrandFull)\"\n               [attr.height]=\"imgHeight(navbarBrandFull)\"\n               [attr.alt]=\"imgAlt(navbarBrandFull)\"\n               class=\"navbar-brand-full\">\n          <img *ngIf=\"navbarBrandMinimized\"\n               [src]=\"imgSrc(navbarBrandMinimized)\"\n               [attr.width]=\"imgWidth(navbarBrandMinimized)\"\n               [attr.height]=\"imgHeight(navbarBrandMinimized)\"\n               [attr.alt]=\"imgAlt(navbarBrandMinimized)\"\n               class=\"navbar-brand-minimized\">\n        </a>\n      </ng-template>\n      <ng-template [ngIf]=\"sidebarToggler != false\">\n        <button class=\"navbar-toggler d-md-down-none\" type=\"button\" [appSidebarToggler]=\"sidebarToggler\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </ng-template>\n      <ng-content></ng-content>\n      <ng-template [ngIf]=\"asideMenuToggler != false\">\n        <button class=\"navbar-toggler d-md-down-none\" type=\"button\" [appAsideMenuToggler]=\"asideMenuToggler\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </ng-template>\n      <ng-template [ngIf]=\"mobileAsideMenuToggler != false\">\n        <button class=\"navbar-toggler d-lg-none\" type=\"button\" appAsideMenuToggler>\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </ng-template>\n    </header>\n  "
                    },] },
        ];
        /** @nocollapse */
        AppHeaderComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
            ];
        };
        AppHeaderComponent.propDecorators = {
            "fixed": [{ type: core.Input },],
            "navbarBrand": [{ type: core.Input },],
            "navbarBrandFull": [{ type: core.Input },],
            "navbarBrandMinimized": [{ type: core.Input },],
            "sidebarToggler": [{ type: core.Input },],
            "mobileSidebarToggler": [{ type: core.Input },],
            "asideMenuToggler": [{ type: core.Input },],
            "mobileAsideMenuToggler": [{ type: core.Input },],
        };
        return AppHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AppHeaderModule = (function () {
        function AppHeaderModule() {
        }
        AppHeaderModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
    var AppSidebarFooterComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'app-sidebar-footer',
                        template: "\n    <div class=\"sidebar-footer\">\n      <ng-content></ng-content>\n    </div>"
                    },] },
        ];
        /** @nocollapse */
        AppSidebarFooterComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
            ];
        };
        return AppSidebarFooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AppSidebarFormComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'app-sidebar-form',
                        template: "\n    <form class=\"sidebar-form\">\n      <ng-content></ng-content>\n    </form>\n  "
                    },] },
        ];
        /** @nocollapse */
        AppSidebarFormComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
            ];
        };
        return AppSidebarFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AppSidebarHeaderComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'app-sidebar-header',
                        template: "\n    <div class=\"sidebar-header\">\n      <ng-content></ng-content>\n    </div>\n  "
                    },] },
        ];
        /** @nocollapse */
        AppSidebarHeaderComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
            ];
        };
        return AppSidebarHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AppSidebarMinimizerComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'app-sidebar-minimizer',
                        template: "\n    <button class=\"sidebar-minimizer\" type=\"button\" appSidebarMinimizer appBrandMinimizer></button>\n  "
                    },] },
        ];
        /** @nocollapse */
        AppSidebarMinimizerComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
            ];
        };
        return AppSidebarMinimizerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AppSidebarComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'app-sidebar',
                        template: "<ng-content></ng-content>"
                    },] },
        ];
        /** @nocollapse */
        AppSidebarComponent.ctorParameters = function () { return []; };
        AppSidebarComponent.propDecorators = {
            "compact": [{ type: core.Input },],
            "display": [{ type: core.Input },],
            "fixed": [{ type: core.Input },],
            "minimized": [{ type: core.Input },],
            "offCanvas": [{ type: core.Input },],
            "true": [{ type: core.HostBinding, args: ['class.sidebar',] },],
        };
        return AppSidebarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NavDropdownDirective = (function () {
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
            { type: core.Directive, args: [{
                        selector: '[appNavDropdown]'
                    },] },
        ];
        /** @nocollapse */
        NavDropdownDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
            ];
        };
        return NavDropdownDirective;
    }());
    /**
     * Allows the dropdown to be toggled via click.
     */
    var NavDropdownToggleDirective = (function () {
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
            { type: core.Directive, args: [{
                        selector: '[appNavDropdownToggle]'
                    },] },
        ];
        /** @nocollapse */
        NavDropdownToggleDirective.ctorParameters = function () {
            return [
                { type: NavDropdownDirective, },
            ];
        };
        NavDropdownToggleDirective.propDecorators = {
            "toggleOpen": [{ type: core.HostListener, args: ['click', ['$event'],] },],
        };
        return NavDropdownToggleDirective;
    }());
    var AppSidebarNavComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'app-sidebar-nav',
                        template: "\n    <ul class=\"nav\">\n      <ng-template ngFor let-navitem [ngForOf]=\"navItems\">\n        <li *ngIf=\"isDivider(navitem)\" class=\"nav-divider\"></li>\n        <ng-template [ngIf]=\"isTitle(navitem)\">\n          <app-sidebar-nav-title [title]='navitem'></app-sidebar-nav-title>\n        </ng-template>\n        <ng-template [ngIf]=\"!isDivider(navitem)&&!isTitle(navitem)\">\n          <app-sidebar-nav-item [item]='navitem'></app-sidebar-nav-item>\n        </ng-template>\n      </ng-template>\n    </ul>"
                    },] },
        ];
        /** @nocollapse */
        AppSidebarNavComponent.ctorParameters = function () { return []; };
        AppSidebarNavComponent.propDecorators = {
            "navItems": [{ type: core.Input },],
            "true": [{ type: core.HostBinding, args: ['class.sidebar-nav',] },],
            "role": [{ type: core.HostBinding, args: ['attr.role',] },],
        };
        return AppSidebarNavComponent;
    }());
    var AppSidebarNavItemComponent = (function () {
        function AppSidebarNavItemComponent(router$$1, el) {
            this.router = router$$1;
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
            { type: core.Component, args: [{
                        selector: 'app-sidebar-nav-item',
                        template: "\n    <li *ngIf=\"!isDropdown(); else dropdown\" [ngClass]=\"hasClass() ? 'nav-item ' + item.class : 'nav-item'\">\n      <app-sidebar-nav-link [link]='item'></app-sidebar-nav-link>\n    </li>\n    <ng-template #dropdown>\n      <li [ngClass]=\"hasClass() ? 'nav-item nav-dropdown ' + item.class : 'nav-item nav-dropdown'\"\n          [class.open]=\"isActive()\"\n          routerLinkActive=\"open\"\n          appNavDropdown>\n        <app-sidebar-nav-dropdown [link]='item'></app-sidebar-nav-dropdown>\n      </li>\n    </ng-template>\n    "
                    },] },
        ];
        /** @nocollapse */
        AppSidebarNavItemComponent.ctorParameters = function () {
            return [
                { type: router.Router, },
                { type: core.ElementRef, },
            ];
        };
        AppSidebarNavItemComponent.propDecorators = {
            "item": [{ type: core.Input },],
        };
        return AppSidebarNavItemComponent;
    }());
    var AppSidebarNavLinkComponent = (function () {
        function AppSidebarNavLinkComponent(router$$1, el) {
            this.router = router$$1;
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
            { type: core.Component, args: [{
                        selector: 'app-sidebar-nav-link',
                        template: "\n    <a *ngIf=\"!isExternalLink(); else external\"\n      [ngClass]=\"hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'\"\n      routerLinkActive=\"active\"\n      [routerLink]=\"[link.url]\"\n      (click)=\"hideMobile()\">\n      <i *ngIf=\"isIcon()\" class=\"nav-icon {{ link.icon }}\"></i>\n      {{ link.name }}\n      <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n    </a>\n    <ng-template #external>\n      <a [ngClass]=\"hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'\" href=\"{{link.url}}\">\n        <i *ngIf=\"isIcon()\" class=\"nav-icon {{ link.icon }}\"></i>\n        {{ link.name }}\n        <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n      </a>\n    </ng-template>\n  "
                    },] },
        ];
        /** @nocollapse */
        AppSidebarNavLinkComponent.ctorParameters = function () {
            return [
                { type: router.Router, },
                { type: core.ElementRef, },
            ];
        };
        AppSidebarNavLinkComponent.propDecorators = {
            "link": [{ type: core.Input },],
        };
        return AppSidebarNavLinkComponent;
    }());
    var AppSidebarNavDropdownComponent = (function () {
        function AppSidebarNavDropdownComponent(router$$1, el) {
            this.router = router$$1;
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
            { type: core.Component, args: [{
                        selector: 'app-sidebar-nav-dropdown',
                        template: "\n    <a class=\"nav-link nav-dropdown-toggle\" appNavDropdownToggle>\n      <i *ngIf=\"isIcon()\" class=\"nav-icon {{ link.icon }}\"></i>\n      {{ link.name }}\n      <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n    </a>\n    <ul class=\"nav-dropdown-items\">\n      <ng-template ngFor let-child [ngForOf]=\"link.children\">\n        <app-sidebar-nav-item [item]='child'></app-sidebar-nav-item>\n      </ng-template>\n    </ul>\n  ",
                        styles: ['.nav-dropdown-toggle { cursor: pointer; }']
                    },] },
        ];
        /** @nocollapse */
        AppSidebarNavDropdownComponent.ctorParameters = function () {
            return [
                { type: router.Router, },
                { type: core.ElementRef, },
            ];
        };
        AppSidebarNavDropdownComponent.propDecorators = {
            "link": [{ type: core.Input },],
        };
        return AppSidebarNavDropdownComponent;
    }());
    var AppSidebarNavTitleComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'app-sidebar-nav-title',
                        template: ''
                    },] },
        ];
        /** @nocollapse */
        AppSidebarNavTitleComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
        AppSidebarNavTitleComponent.propDecorators = {
            "title": [{ type: core.Input },],
        };
        return AppSidebarNavTitleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AppSidebarModule = (function () {
        function AppSidebarModule() {
        }
        AppSidebarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
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

    exports.AppAsideModule = AppAsideModule;
    exports.AppBreadcrumbModule = AppBreadcrumbModule;
    exports.AppFooterModule = AppFooterModule;
    exports.AppHeaderModule = AppHeaderModule;
    exports.AppSidebarModule = AppSidebarModule;
    exports.LayoutModule = LayoutModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZXVpLWFuZ3VsYXIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL3NoYXJlZC9jbGFzc2VzLnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL3NoYXJlZC90b2dnbGUtY2xhc3Nlcy50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9zaGFyZWQvbGF5b3V0L2xheW91dC5kaXJlY3RpdmUudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvc2hhcmVkL2xheW91dC9sYXlvdXQubW9kdWxlLnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL3NoYXJlZC9yZXBsYWNlLnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL2FzaWRlL2FwcC1hc2lkZS5jb21wb25lbnQudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvYXNpZGUvYXBwLWFzaWRlLm1vZHVsZS50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9icmVhZGNydW1iL2FwcC1icmVhZGNydW1iLnNlcnZpY2UudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvYnJlYWRjcnVtYi9hcHAtYnJlYWRjcnVtYi5jb21wb25lbnQudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvYnJlYWRjcnVtYi9hcHAtYnJlYWRjcnVtYi5tb2R1bGUudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvZm9vdGVyL2FwcC1mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL2Zvb3Rlci9hcHAtZm9vdGVyLm1vZHVsZS50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9oZWFkZXIvYXBwLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvaGVhZGVyL2FwcC1oZWFkZXIubW9kdWxlLnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL3NpZGViYXIvYXBwLXNpZGViYXItZm9vdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLWZvcm0uY29tcG9uZW50LnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL3NpZGViYXIvYXBwLXNpZGViYXItaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW1pbmltaXplci5jb21wb25lbnQudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvc2lkZWJhci9hcHAtc2lkZWJhci5jb21wb25lbnQudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYuY29tcG9uZW50LnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL3NpZGViYXIvYXBwLXNpZGViYXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzaWRlYmFyQ3NzQ2xhc3NlczogQXJyYXk8c3RyaW5nPiA9IFtcbiAgJ3NpZGViYXItc2hvdycsXG4gICdzaWRlYmFyLXNtLXNob3cnLFxuICAnc2lkZWJhci1tZC1zaG93JyxcbiAgJ3NpZGViYXItbGctc2hvdycsXG4gICdzaWRlYmFyLXhsLXNob3cnXG5dO1xuXG5leHBvcnQgY29uc3QgYXNpZGVNZW51Q3NzQ2xhc3NlczogQXJyYXk8c3RyaW5nPiA9IFtcbiAgJ2FzaWRlLW1lbnUtc2hvdycsXG4gICdhc2lkZS1tZW51LXNtLXNob3cnLFxuICAnYXNpZGUtbWVudS1tZC1zaG93JyxcbiAgJ2FzaWRlLW1lbnUtbGctc2hvdycsXG4gICdhc2lkZS1tZW51LXhsLXNob3cnXG5dO1xuIiwiY29uc3QgUmVtb3ZlQ2xhc3NlcyA9IChOZXdDbGFzc05hbWVzKSA9PiB7XG4gIGNvbnN0IE1hdGNoQ2xhc3NlcyA9IE5ld0NsYXNzTmFtZXMubWFwKChDbGFzcykgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5jb250YWlucyhDbGFzcykpO1xuICByZXR1cm4gTWF0Y2hDbGFzc2VzLmluZGV4T2YodHJ1ZSkgIT09IC0xO1xufTtcblxuZXhwb3J0IGNvbnN0IFRvZ2dsZUNsYXNzZXMgPSAoVG9nZ2xlLCBDbGFzc05hbWVzKSA9PiB7XG4gIGNvbnN0IExldmVsID0gQ2xhc3NOYW1lcy5pbmRleE9mKFRvZ2dsZSk7XG4gIGNvbnN0IE5ld0NsYXNzTmFtZXMgPSBDbGFzc05hbWVzLnNsaWNlKDAsIExldmVsICsgMSk7XG5cbiAgaWYgKFJlbW92ZUNsYXNzZXMoTmV3Q2xhc3NOYW1lcykpIHtcbiAgICBOZXdDbGFzc05hbWVzLm1hcCgoQ2xhc3MpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKENsYXNzKSk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoVG9nZ2xlKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzaWRlYmFyQ3NzQ2xhc3NlcywgYXNpZGVNZW51Q3NzQ2xhc3NlcyB9IGZyb20gJy4vLi4vY2xhc3Nlcyc7XG5pbXBvcnQgeyBUb2dnbGVDbGFzc2VzIH0gZnJvbSAnLi8uLi90b2dnbGUtY2xhc3Nlcyc7XG5cbi8qKlxuKiBBbGxvd3MgdGhlIHNpZGViYXIgdG8gYmUgdG9nZ2xlZCB2aWEgY2xpY2suXG4qL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcFNpZGViYXJUb2dnbGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnYXBwU2lkZWJhclRvZ2dsZXInKSBicmVha3BvaW50OiBzdHJpbmc7XG4gIHB1YmxpYyBicDtcbiAgY29uc3RydWN0b3IoKSB7fVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmJwID0gdGhpcy5icmVha3BvaW50O1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBjc3NDbGFzcztcbiAgICB0aGlzLmJwID8gY3NzQ2xhc3MgPSBgc2lkZWJhci0ke3RoaXMuYnB9LXNob3dgIDogY3NzQ2xhc3MgPSBzaWRlYmFyQ3NzQ2xhc3Nlc1swXTtcbiAgICBUb2dnbGVDbGFzc2VzKGNzc0NsYXNzLCBzaWRlYmFyQ3NzQ2xhc3Nlcyk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcFNpZGViYXJNaW5pbWl6ZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTWluaW1pemVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdzaWRlYmFyLW1pbmltaXplZCcpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBNb2JpbGVTaWRlYmFyVG9nZ2xlcl0nXG59KVxuZXhwb3J0IGNsYXNzIE1vYmlsZVNpZGViYXJUb2dnbGVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8vIENoZWNrIGlmIGVsZW1lbnQgaGFzIGNsYXNzXG4gIHByaXZhdGUgaGFzQ2xhc3ModGFyZ2V0OiBhbnksIGVsZW1lbnRDbGFzc05hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKCcoXFxcXHN8XiknICsgZWxlbWVudENsYXNzTmFtZSArICcoXFxcXHN8JCknKS50ZXN0KHRhcmdldC5jbGFzc05hbWUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ3NpZGViYXItbW9iaWxlLXNob3cnKTtcbiAgfVxufVxuXG4vKipcbiogQWxsb3dzIHRoZSBvZmYtY2FudmFzIHNpZGViYXIgdG8gYmUgY2xvc2VkIHZpYSBjbGljay5cbiovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwU2lkZWJhckNsb3NlXSdcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck9mZkNhbnZhc0Nsb3NlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvLyBDaGVjayBpZiBlbGVtZW50IGhhcyBjbGFzc1xuICBwcml2YXRlIGhhc0NsYXNzKHRhcmdldDogYW55LCBlbGVtZW50Q2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKFxcXFxzfF4pJyArIGVsZW1lbnRDbGFzc05hbWUgKyAnKFxcXFxzfCQpJykudGVzdCh0YXJnZXQuY2xhc3NOYW1lKTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBlbGVtZW50IGNsYXNzXG4gIHByaXZhdGUgdG9nZ2xlQ2xhc3MoZWxlbTogYW55LCBlbGVtZW50Q2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgbmV3Q2xhc3MgPSAnICcgKyBlbGVtLmNsYXNzTmFtZS5yZXBsYWNlKCAvW1xcdFxcclxcbl0vZywgJyAnICkgKyAnICc7XG4gICAgaWYgKHRoaXMuaGFzQ2xhc3MoZWxlbSwgZWxlbWVudENsYXNzTmFtZSkpIHtcbiAgICAgIHdoaWxlIChuZXdDbGFzcy5pbmRleE9mKCcgJyArIGVsZW1lbnRDbGFzc05hbWUgKyAnICcpID49IDAgKSB7XG4gICAgICAgIG5ld0NsYXNzID0gbmV3Q2xhc3MucmVwbGFjZSggJyAnICsgZWxlbWVudENsYXNzTmFtZSArICcgJyAsICcgJyApO1xuICAgICAgfVxuICAgICAgZWxlbS5jbGFzc05hbWUgPSBuZXdDbGFzcy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uY2xhc3NOYW1lICs9ICcgJyArIGVsZW1lbnRDbGFzc05hbWU7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5oYXNDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksICdzaWRlYmFyLW9mZi1jYW52YXMnKSkge1xuICAgICAgdGhpcy50b2dnbGVDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksICdzaWRlYmFyLW9wZW5lZCcpO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwQnJhbmRNaW5pbWl6ZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBCcmFuZE1pbmltaXplRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnYnJhbmQtbWluaW1pemVkJyk7XG4gIH1cbn1cblxuXG4vKipcbiogQWxsb3dzIHRoZSBhc2lkZSB0byBiZSB0b2dnbGVkIHZpYSBjbGljay5cbiovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwQXNpZGVNZW51VG9nZ2xlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBBc2lkZVRvZ2dsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnYXBwQXNpZGVNZW51VG9nZ2xlcicpIGJyZWFrcG9pbnQ6IHN0cmluZztcbiAgcHVibGljIGJwO1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYnAgPSB0aGlzLmJyZWFrcG9pbnQ7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGNzc0NsYXNzO1xuICAgIHRoaXMuYnAgPyBjc3NDbGFzcyA9IGBhc2lkZS1tZW51LSR7dGhpcy5icH0tc2hvd2AgOiBjc3NDbGFzcyA9IGFzaWRlTWVudUNzc0NsYXNzZXNbMF07XG4gICAgVG9nZ2xlQ2xhc3Nlcyhjc3NDbGFzcywgYXNpZGVNZW51Q3NzQ2xhc3Nlcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBc2lkZVRvZ2dsZURpcmVjdGl2ZSxcbiAgQnJhbmRNaW5pbWl6ZURpcmVjdGl2ZSxcbiAgTW9iaWxlU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSxcbiAgU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSxcbiAgU2lkZWJhck1pbmltaXplRGlyZWN0aXZlLFxuICBTaWRlYmFyT2ZmQ2FudmFzQ2xvc2VEaXJlY3RpdmVcbn0gZnJvbSAnLi9sYXlvdXQuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQXNpZGVUb2dnbGVEaXJlY3RpdmUsXG4gICAgQnJhbmRNaW5pbWl6ZURpcmVjdGl2ZSxcbiAgICBNb2JpbGVTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlLFxuICAgIFNpZGViYXJUb2dnbGVEaXJlY3RpdmUsXG4gICAgU2lkZWJhck1pbmltaXplRGlyZWN0aXZlLFxuICAgIFNpZGViYXJPZmZDYW52YXNDbG9zZURpcmVjdGl2ZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBc2lkZVRvZ2dsZURpcmVjdGl2ZSxcbiAgICBCcmFuZE1pbmltaXplRGlyZWN0aXZlLFxuICAgIE1vYmlsZVNpZGViYXJUb2dnbGVEaXJlY3RpdmUsXG4gICAgU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSxcbiAgICBTaWRlYmFyTWluaW1pemVEaXJlY3RpdmUsXG4gICAgU2lkZWJhck9mZkNhbnZhc0Nsb3NlRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHsgfVxuIiwiZXhwb3J0IGZ1bmN0aW9uIFJlcGxhY2UoZWw6IGFueSk6IGFueSB7XG4gIGNvbnN0IG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZWwubmF0aXZlRWxlbWVudDtcbiAgY29uc3QgcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQgPSBuYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gIC8vIG1vdmUgYWxsIGNoaWxkcmVuIG91dCBvZiB0aGUgZWxlbWVudFxuICB3aGlsZSAobmF0aXZlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUobmF0aXZlRWxlbWVudC5maXJzdENoaWxkLCBuYXRpdmVFbGVtZW50KTtcbiAgfVxuICAvLyByZW1vdmUgdGhlIGVtcHR5IGVsZW1lbnQodGhlIGhvc3QpXG4gIHBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobmF0aXZlRWxlbWVudCk7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFzaWRlTWVudUNzc0NsYXNzZXMsIFJlcGxhY2UgfSBmcm9tICcuLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1hc2lkZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGFzaWRlIGNsYXNzPVwiYXNpZGUtbWVudVwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvYXNpZGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQXNpZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkaXNwbGF5OiBhbnk7XG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBvZmZDYW52YXM6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcbiAgICB0aGlzLmRpc3BsYXlCcmVha3BvaW50KHRoaXMuZGlzcGxheSk7XG4gIH1cblxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZml4ZWQpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2FzaWRlLW1lbnUtZml4ZWQnKTsgfVxuICB9XG5cbiAgaXNPZmZDYW52YXMob2ZmQ2FudmFzOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub2ZmQ2FudmFzKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdhc2lkZS1tZW51LW9mZi1jYW52YXMnKTsgfVxuICB9XG5cbiAgZGlzcGxheUJyZWFrcG9pbnQoZGlzcGxheTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzcGxheSAhPT0gZmFsc2UgKSB7XG4gICAgICBsZXQgY3NzQ2xhc3M7XG4gICAgICB0aGlzLmRpc3BsYXkgPyBjc3NDbGFzcyA9IGBhc2lkZS1tZW51LSR7dGhpcy5kaXNwbGF5fS1zaG93YCA6IGNzc0NsYXNzID0gYXNpZGVNZW51Q3NzQ2xhc3Nlc1swXTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICcuLy4uL3NoYXJlZCc7XG5cbmltcG9ydCB7IEFwcEFzaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtYXNpZGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBMYXlvdXRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFwcEFzaWRlQ29tcG9uZW50LFxuICAgIExheW91dE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBBc2lkZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcEFzaWRlTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9pbmRleCc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwcEJyZWFkY3J1bWJTZXJ2aWNlIHtcclxuXHJcbiAgYnJlYWRjcnVtYnM6IE9ic2VydmFibGU8QXJyYXk8T2JqZWN0Pj47XHJcblxyXG4gIHByaXZhdGUgX2JyZWFkY3J1bWJzOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8T2JqZWN0Pj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcblxyXG4gICAgdGhpcy5fYnJlYWRjcnVtYnMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE9iamVjdFtdPihuZXcgQXJyYXk8T2JqZWN0PigpKTtcclxuXHJcbiAgICB0aGlzLmJyZWFkY3J1bWJzID0gdGhpcy5fYnJlYWRjcnVtYnMuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSBbXTtcclxuICAgICAgbGV0IGN1cnJlbnRSb3V0ZSA9IHRoaXMucm91dGUucm9vdCxcclxuICAgICAgdXJsID0gJyc7XHJcbiAgICAgIGRvIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlblJvdXRlcyA9IGN1cnJlbnRSb3V0ZS5jaGlsZHJlbjtcclxuICAgICAgICBjdXJyZW50Um91dGUgPSBudWxsO1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICAgIGNoaWxkcmVuUm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xyXG4gICAgICAgICAgaWYgKHJvdXRlLm91dGxldCA9PT0gJ3ByaW1hcnknKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlU25hcHNob3QgPSByb3V0ZS5zbmFwc2hvdDtcclxuICAgICAgICAgICAgdXJsICs9ICcvJyArIHJvdXRlU25hcHNob3QudXJsLm1hcChzZWdtZW50ID0+IHNlZ21lbnQucGF0aCkuam9pbignLycpO1xyXG4gICAgICAgICAgICBicmVhZGNydW1icy5wdXNoKHtcclxuICAgICAgICAgICAgICBsYWJlbDogcm91dGUuc25hcHNob3QuZGF0YSxcclxuICAgICAgICAgICAgICB1cmw6ICAgdXJsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjdXJyZW50Um91dGUgPSByb3V0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSB3aGlsZSAoY3VycmVudFJvdXRlKTtcclxuXHJcbiAgICAgIHRoaXMuX2JyZWFkY3J1bWJzLm5leHQoT2JqZWN0LmFzc2lnbihbXSwgYnJlYWRjcnVtYnMpKTtcclxuXHJcbiAgICAgIHJldHVybiBicmVhZGNydW1icztcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgQXBwQnJlYWRjcnVtYlNlcnZpY2UgfSBmcm9tICcuL2FwcC1icmVhZGNydW1iLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYnJlYWRjcnVtYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1icmVhZGNydW1iIFtuZ0Zvck9mXT1cImJyZWFkY3J1bWJzIHwgYXN5bmNcIiBsZXQtbGFzdCA9IGxhc3Q+XG4gICAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW1cIlxuICAgICAgICAgICpuZ0lmPVwiYnJlYWRjcnVtYi5sYWJlbC50aXRsZSAmJiAoYnJlYWRjcnVtYi51cmwuc2xpY2UoLTEpID09ICcvJyB8fCBsYXN0KVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwie2FjdGl2ZTogbGFzdH1cIj5cbiAgICAgICAgPGEgKm5nSWY9XCIhbGFzdFwiIFtyb3V0ZXJMaW5rXT1cImJyZWFkY3J1bWIudXJsXCI+e3ticmVhZGNydW1iLmxhYmVsLnRpdGxlfX08L2E+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwibGFzdFwiIFtyb3V0ZXJMaW5rXT1cImJyZWFkY3J1bWIudXJsXCI+e3ticmVhZGNydW1iLmxhYmVsLnRpdGxlfX08L3NwYW4+XG4gICAgICA8L2xpPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xuICBwdWJsaWMgYnJlYWRjcnVtYnM7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IEFwcEJyZWFkY3J1bWJTZXJ2aWNlLCBwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcbiAgICB0aGlzLmJyZWFkY3J1bWJzID0gdGhpcy5zZXJ2aWNlLmJyZWFkY3J1bWJzO1xuICB9XG5cbiAgaXNGaXhlZChmaXhlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpeGVkKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdicmVhZGNydW1iLWZpeGVkJyk7IH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLy8gQXBwIEJyZWFkY3J1bWIgQ29tcG9uZW50XG5pbXBvcnQgeyBBcHBCcmVhZGNydW1iU2VydmljZSB9IGZyb20gJy4vYXBwLWJyZWFkY3J1bWIuc2VydmljZSc7XG5pbXBvcnQgeyBBcHBCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtYnJlYWRjcnVtYi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlIF0sXG4gIGV4cG9ydHM6IFsgQXBwQnJlYWRjcnVtYkNvbXBvbmVudCBdLFxuICBkZWNsYXJhdGlvbnM6IFsgQXBwQnJlYWRjcnVtYkNvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcEJyZWFkY3J1bWJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFwcEJyZWFkY3J1bWJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQXBwQnJlYWRjcnVtYlNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZm9vdGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Zm9vdGVyIGNsYXNzPVwiYXBwLWZvb3RlclwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZm9vdGVyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcEZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgICB0aGlzLmlzRml4ZWQodGhpcy5maXhlZCk7XG4gIH1cblxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZml4ZWQpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1maXhlZCcpOyB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwcEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLWZvb3Rlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSBdLFxuICBleHBvcnRzOiBbIEFwcEZvb3RlckNvbXBvbmVudCBdLFxuICBkZWNsYXJhdGlvbnM6IFsgQXBwRm9vdGVyQ29tcG9uZW50IF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwRm9vdGVyTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGxhY2UgfSBmcm9tICcuLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoZWFkZXIgY2xhc3M9XCJhcHAtaGVhZGVyIG5hdmJhclwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIm1vYmlsZVNpZGViYXJUb2dnbGVyICE9IGZhbHNlXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlciBkLWxnLW5vbmVcIiB0eXBlPVwiYnV0dG9uXCIgYXBwU2lkZWJhclRvZ2dsZXI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwibmF2YmFyQnJhbmQgfHwgbmF2YmFyQnJhbmRGdWxsIHx8IG5hdmJhckJyYW5kTWluaW1pemVkXCI+XG4gICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICA8aW1nICpuZ0lmPVwibmF2YmFyQnJhbmRcIlxuICAgICAgICAgICAgICAgW3NyY109XCJpbWdTcmMobmF2YmFyQnJhbmQpXCJcbiAgICAgICAgICAgICAgIFthdHRyLndpZHRoXT1cImltZ1dpZHRoKG5hdmJhckJyYW5kKVwiXG4gICAgICAgICAgICAgICBbYXR0ci5oZWlnaHRdPVwiaW1nSGVpZ2h0KG5hdmJhckJyYW5kKVwiXG4gICAgICAgICAgICAgICBbYXR0ci5hbHRdPVwiaW1nQWx0KG5hdmJhckJyYW5kKVwiXG4gICAgICAgICAgICAgICBjbGFzcz1cIm5hdmJhci1icmFuZFwiPlxuICAgICAgICAgIDxpbWcgKm5nSWY9XCJuYXZiYXJCcmFuZEZ1bGxcIlxuICAgICAgICAgICAgICAgW3NyY109XCJpbWdTcmMobmF2YmFyQnJhbmRGdWxsKVwiXG4gICAgICAgICAgICAgICBbYXR0ci53aWR0aF09XCJpbWdXaWR0aChuYXZiYXJCcmFuZEZ1bGwpXCJcbiAgICAgICAgICAgICAgIFthdHRyLmhlaWdodF09XCJpbWdIZWlnaHQobmF2YmFyQnJhbmRGdWxsKVwiXG4gICAgICAgICAgICAgICBbYXR0ci5hbHRdPVwiaW1nQWx0KG5hdmJhckJyYW5kRnVsbClcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJuYXZiYXItYnJhbmQtZnVsbFwiPlxuICAgICAgICAgIDxpbWcgKm5nSWY9XCJuYXZiYXJCcmFuZE1pbmltaXplZFwiXG4gICAgICAgICAgICAgICBbc3JjXT1cImltZ1NyYyhuYXZiYXJCcmFuZE1pbmltaXplZClcIlxuICAgICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwiaW1nV2lkdGgobmF2YmFyQnJhbmRNaW5pbWl6ZWQpXCJcbiAgICAgICAgICAgICAgIFthdHRyLmhlaWdodF09XCJpbWdIZWlnaHQobmF2YmFyQnJhbmRNaW5pbWl6ZWQpXCJcbiAgICAgICAgICAgICAgIFthdHRyLmFsdF09XCJpbWdBbHQobmF2YmFyQnJhbmRNaW5pbWl6ZWQpXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwibmF2YmFyLWJyYW5kLW1pbmltaXplZFwiPlxuICAgICAgICA8L2E+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cInNpZGViYXJUb2dnbGVyICE9IGZhbHNlXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlciBkLW1kLWRvd24tbm9uZVwiIHR5cGU9XCJidXR0b25cIiBbYXBwU2lkZWJhclRvZ2dsZXJdPVwic2lkZWJhclRvZ2dsZXJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJhc2lkZU1lbnVUb2dnbGVyICE9IGZhbHNlXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlciBkLW1kLWRvd24tbm9uZVwiIHR5cGU9XCJidXR0b25cIiBbYXBwQXNpZGVNZW51VG9nZ2xlcl09XCJhc2lkZU1lbnVUb2dnbGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwibW9iaWxlQXNpZGVNZW51VG9nZ2xlciAhPSBmYWxzZVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXIgZC1sZy1ub25lXCIgdHlwZT1cImJ1dHRvblwiIGFwcEFzaWRlTWVudVRvZ2dsZXI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9oZWFkZXI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBmaXhlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBuYXZiYXJCcmFuZDogYW55O1xuICBASW5wdXQoKSBuYXZiYXJCcmFuZEZ1bGw6IGFueTtcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRNaW5pbWl6ZWQ6IGFueTtcblxuICBASW5wdXQoKSBzaWRlYmFyVG9nZ2xlcjogYW55O1xuICBASW5wdXQoKSBtb2JpbGVTaWRlYmFyVG9nZ2xlcjogYW55O1xuXG4gIEBJbnB1dCgpIGFzaWRlTWVudVRvZ2dsZXI6IGFueTtcbiAgQElucHV0KCkgbW9iaWxlQXNpZGVNZW51VG9nZ2xlcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgICB0aGlzLmlzRml4ZWQodGhpcy5maXhlZCk7XG4gIH1cblxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZml4ZWQpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1maXhlZCcpOyB9XG4gIH1cblxuICBpbWdTcmMoYnJhbmQ6IGFueSk6IHZvaWQge1xuICAgIHJldHVybiBicmFuZC5zcmMgPyBicmFuZC5zcmMgOiAnJztcbiAgfVxuXG4gIGltZ1dpZHRoKGJyYW5kOiBhbnkpOiB2b2lkIHtcbiAgICByZXR1cm4gYnJhbmQud2lkdGggPyBicmFuZC53aWR0aCA6ICdhdXRvJztcbiAgfVxuXG4gIGltZ0hlaWdodChicmFuZDogYW55KTogdm9pZCB7XG4gICAgcmV0dXJuIGJyYW5kLmhlaWdodCA/IGJyYW5kLmhlaWdodCA6ICdhdXRvJztcbiAgfVxuXG4gIGltZ0FsdChicmFuZDogYW55KTogdm9pZCB7XG4gICAgcmV0dXJuIGJyYW5kLmFsdCA/IGJyYW5kLmFsdCA6ICcnO1xuICB9XG5cbiAgYnJlYWtwb2ludChicmVha3BvaW50OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhicmVha3BvaW50KTtcbiAgICByZXR1cm4gYnJlYWtwb2ludCA/IGJyZWFrcG9pbnQgOiAnJztcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4vLi4vc2hhcmVkJztcblxuaW1wb3J0IHsgQXBwSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtaGVhZGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTGF5b3V0TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBcHBIZWFkZXJDb21wb25lbnQsXG4gICAgTGF5b3V0TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcEhlYWRlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcEhlYWRlck1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1mb290ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWZvb3RlclwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhckZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1mb3JtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Zm9ybSBjbGFzcz1cInNpZGViYXItZm9ybVwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZm9ybT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWhlYWRlclwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0ICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGFjZSB9IGZyb20gJy4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbWluaW1pemVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uIGNsYXNzPVwic2lkZWJhci1taW5pbWl6ZXJcIiB0eXBlPVwiYnV0dG9uXCIgYXBwU2lkZWJhck1pbmltaXplciBhcHBCcmFuZE1pbmltaXplcj48L2J1dHRvbj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzaWRlYmFyQ3NzQ2xhc3NlcyB9IGZyb20gJy4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXInLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb21wYWN0OiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNwbGF5OiBhbnk7XG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBtaW5pbWl6ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG9mZkNhbnZhczogYm9vbGVhbjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpZGViYXInKSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRpc3BsYXlCcmVha3BvaW50KHRoaXMuZGlzcGxheSk7XG4gICAgdGhpcy5pc0NvbXBhY3QodGhpcy5jb21wYWN0KTtcbiAgICB0aGlzLmlzRml4ZWQodGhpcy5maXhlZCk7XG4gICAgdGhpcy5pc01pbmltaXplZCh0aGlzLm1pbmltaXplZCk7XG4gICAgdGhpcy5pc09mZkNhbnZhcyh0aGlzLm9mZkNhbnZhcyk7XG4gIH1cblxuICBpc0NvbXBhY3QoY29tcGFjdDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbXBhY3QpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItY29tcGFjdCcpOyB9XG4gIH1cblxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZml4ZWQpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItZml4ZWQnKTsgfVxuICB9XG5cbiAgaXNNaW5pbWl6ZWQobWluaW1pemVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWluaW1pemVkKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLW1pbmltaXplZCcpOyB9XG4gIH1cblxuICBpc09mZkNhbnZhcyhvZmZDYW52YXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vZmZDYW52YXMpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItb2ZmLWNhbnZhcycpOyB9XG4gIH1cblxuICBmaXhlZFBvc2l0aW9uKGZpeGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZml4ZWQpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItZml4ZWQnKTsgfVxuICB9XG5cbiAgZGlzcGxheUJyZWFrcG9pbnQoZGlzcGxheTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzcGxheSAhPT0gZmFsc2UgKSB7XG4gICAgICBsZXQgY3NzQ2xhc3M7XG4gICAgICB0aGlzLmRpc3BsYXkgPyBjc3NDbGFzcyA9IGBzaWRlYmFyLSR7dGhpcy5kaXNwbGF5fS1zaG93YCA6IGNzc0NsYXNzID0gc2lkZWJhckNzc0NsYXNzZXNbMF07XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGFjZSB9IGZyb20gJy4vLi4vc2hhcmVkJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcE5hdkRyb3Bkb3duXSdcbn0pXG5leHBvcnQgY2xhc3MgTmF2RHJvcGRvd25EaXJlY3RpdmUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICB9XG59XG5cbi8qKlxuKiBBbGxvd3MgdGhlIGRyb3Bkb3duIHRvIGJlIHRvZ2dsZWQgdmlhIGNsaWNrLlxuKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBOYXZEcm9wZG93blRvZ2dsZV0nXG59KVxuZXhwb3J0IGNsYXNzIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkcm9wZG93bjogTmF2RHJvcGRvd25EaXJlY3RpdmUpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5kcm9wZG93bi50b2dnbGUoKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDx1bCBjbGFzcz1cIm5hdlwiPlxuICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1uYXZpdGVtIFtuZ0Zvck9mXT1cIm5hdkl0ZW1zXCI+XG4gICAgICAgIDxsaSAqbmdJZj1cImlzRGl2aWRlcihuYXZpdGVtKVwiIGNsYXNzPVwibmF2LWRpdmlkZXJcIj48L2xpPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiaXNUaXRsZShuYXZpdGVtKVwiPlxuICAgICAgICAgIDxhcHAtc2lkZWJhci1uYXYtdGl0bGUgW3RpdGxlXT0nbmF2aXRlbSc+PC9hcHAtc2lkZWJhci1uYXYtdGl0bGU+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCIhaXNEaXZpZGVyKG5hdml0ZW0pJiYhaXNUaXRsZShuYXZpdGVtKVwiPlxuICAgICAgICAgIDxhcHAtc2lkZWJhci1uYXYtaXRlbSBbaXRlbV09J25hdml0ZW0nPjwvYXBwLXNpZGViYXItbmF2LWl0ZW0+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvdWw+YFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2Q29tcG9uZW50IHtcbiAgQElucHV0KCkgbmF2SXRlbXM6IGFueTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpZGViYXItbmF2JykgdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSByb2xlID0gJ25hdic7XG5cbiAgcHVibGljIGlzRGl2aWRlcihpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0uZGl2aWRlciA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc1RpdGxlKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS50aXRsZSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5cbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1pdGVtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGkgKm5nSWY9XCIhaXNEcm9wZG93bigpOyBlbHNlIGRyb3Bkb3duXCIgW25nQ2xhc3NdPVwiaGFzQ2xhc3MoKSA/ICduYXYtaXRlbSAnICsgaXRlbS5jbGFzcyA6ICduYXYtaXRlbSdcIj5cbiAgICAgIDxhcHAtc2lkZWJhci1uYXYtbGluayBbbGlua109J2l0ZW0nPjwvYXBwLXNpZGViYXItbmF2LWxpbms+XG4gICAgPC9saT5cbiAgICA8bmctdGVtcGxhdGUgI2Ryb3Bkb3duPlxuICAgICAgPGxpIFtuZ0NsYXNzXT1cImhhc0NsYXNzKCkgPyAnbmF2LWl0ZW0gbmF2LWRyb3Bkb3duICcgKyBpdGVtLmNsYXNzIDogJ25hdi1pdGVtIG5hdi1kcm9wZG93bidcIlxuICAgICAgICAgIFtjbGFzcy5vcGVuXT1cImlzQWN0aXZlKClcIlxuICAgICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJvcGVuXCJcbiAgICAgICAgICBhcHBOYXZEcm9wZG93bj5cbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1kcm9wZG93biBbbGlua109J2l0ZW0nPjwvYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duPlxuICAgICAgPC9saT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpdGVtOiBhbnk7XG5cbiAgcHVibGljIGhhc0NsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW0uY2xhc3MgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaXNEcm9wZG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtLmNoaWxkcmVuID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHRoaXNVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbS51cmw7XG4gIH1cblxuICBwdWJsaWMgaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLmlzQWN0aXZlKHRoaXMudGhpc1VybCgpLCBmYWxzZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZiApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gIH1cblxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtbGluaycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGEgKm5nSWY9XCIhaXNFeHRlcm5hbExpbmsoKTsgZWxzZSBleHRlcm5hbFwiXG4gICAgICBbbmdDbGFzc109XCJoYXNWYXJpYW50KCkgPyAnbmF2LWxpbmsgbmF2LWxpbmstJyArIGxpbmsudmFyaWFudCA6ICduYXYtbGluaydcIlxuICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiXG4gICAgICBbcm91dGVyTGlua109XCJbbGluay51cmxdXCJcbiAgICAgIChjbGljayk9XCJoaWRlTW9iaWxlKClcIj5cbiAgICAgIDxpICpuZ0lmPVwiaXNJY29uKClcIiBjbGFzcz1cIm5hdi1pY29uIHt7IGxpbmsuaWNvbiB9fVwiPjwvaT5cbiAgICAgIHt7IGxpbmsubmFtZSB9fVxuICAgICAgPHNwYW4gKm5nSWY9XCJpc0JhZGdlKClcIiBbbmdDbGFzc109XCInYmFkZ2UgYmFkZ2UtJyArIGxpbmsuYmFkZ2UudmFyaWFudFwiPnt7IGxpbmsuYmFkZ2UudGV4dCB9fTwvc3Bhbj5cbiAgICA8L2E+XG4gICAgPG5nLXRlbXBsYXRlICNleHRlcm5hbD5cbiAgICAgIDxhIFtuZ0NsYXNzXT1cImhhc1ZhcmlhbnQoKSA/ICduYXYtbGluayBuYXYtbGluay0nICsgbGluay52YXJpYW50IDogJ25hdi1saW5rJ1wiIGhyZWY9XCJ7e2xpbmsudXJsfX1cIj5cbiAgICAgICAgPGkgKm5nSWY9XCJpc0ljb24oKVwiIGNsYXNzPVwibmF2LWljb24ge3sgbGluay5pY29uIH19XCI+PC9pPlxuICAgICAgICB7eyBsaW5rLm5hbWUgfX1cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJpc0JhZGdlKClcIiBbbmdDbGFzc109XCInYmFkZ2UgYmFkZ2UtJyArIGxpbmsuYmFkZ2UudmFyaWFudFwiPnt7IGxpbmsuYmFkZ2UudGV4dCB9fTwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZMaW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGluazogYW55O1xuXG4gIHB1YmxpYyBoYXNWYXJpYW50KCkge1xuICAgIHJldHVybiB0aGlzLmxpbmsudmFyaWFudCA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0JhZGdlKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmsuYmFkZ2UgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaXNFeHRlcm5hbExpbmsoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluay51cmwuc3Vic3RyaW5nKDAsIDQpID09PSAnaHR0cCcgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaXNJY29uKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmsuaWNvbiA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBoaWRlTW9iaWxlKCkge1xuICAgIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1tb2JpbGUtc2hvdycpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3NpZGViYXItbW9iaWxlLXNob3cnKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZiApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YSBjbGFzcz1cIm5hdi1saW5rIG5hdi1kcm9wZG93bi10b2dnbGVcIiBhcHBOYXZEcm9wZG93blRvZ2dsZT5cbiAgICAgIDxpICpuZ0lmPVwiaXNJY29uKClcIiBjbGFzcz1cIm5hdi1pY29uIHt7IGxpbmsuaWNvbiB9fVwiPjwvaT5cbiAgICAgIHt7IGxpbmsubmFtZSB9fVxuICAgICAgPHNwYW4gKm5nSWY9XCJpc0JhZGdlKClcIiBbbmdDbGFzc109XCInYmFkZ2UgYmFkZ2UtJyArIGxpbmsuYmFkZ2UudmFyaWFudFwiPnt7IGxpbmsuYmFkZ2UudGV4dCB9fTwvc3Bhbj5cbiAgICA8L2E+XG4gICAgPHVsIGNsYXNzPVwibmF2LWRyb3Bkb3duLWl0ZW1zXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LWNoaWxkIFtuZ0Zvck9mXT1cImxpbmsuY2hpbGRyZW5cIj5cbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1pdGVtIFtpdGVtXT0nY2hpbGQnPjwvYXBwLXNpZGViYXItbmF2LWl0ZW0+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvdWw+XG4gIGAsXG4gIHN0eWxlczogWycubmF2LWRyb3Bkb3duLXRvZ2dsZSB7IGN1cnNvcjogcG9pbnRlcjsgfSddXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxpbms6IGFueTtcblxuICBwdWJsaWMgaXNCYWRnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5rLmJhZGdlID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzSWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5saW5rLmljb24gPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZiApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LXRpdGxlJyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBsaSA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KHRoaXMudGl0bGUubmFtZSk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGxpLCAnbmF2LXRpdGxlJyk7XG5cbiAgICBpZiAoIHRoaXMudGl0bGUuY2xhc3MgKSB7XG4gICAgICBjb25zdCBjbGFzc2VzID0gdGhpcy50aXRsZS5jbGFzcztcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MobGksIGNsYXNzZXMpO1xuICAgIH1cblxuICAgIGlmICggdGhpcy50aXRsZS53cmFwcGVyICkge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCh0aGlzLnRpdGxlLndyYXBwZXIuZWxlbWVudCk7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQod3JhcHBlciwgbmFtZSk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGxpLCB3cmFwcGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChsaSwgbmFtZSk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQobmF0aXZlRWxlbWVudCwgbGkpO1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4vLi4vc2hhcmVkJztcblxuLy8gQXBwIFNpZGViYXIgQ29tcG9uZW50XG5pbXBvcnQgeyBBcHBTaWRlYmFyRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFNpZGViYXJGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW1pbmltaXplci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIEFwcFNpZGViYXJOYXZDb21wb25lbnQsXG4gIEFwcFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCxcbiAgQXBwU2lkZWJhck5hdkl0ZW1Db21wb25lbnQsXG4gIEFwcFNpZGViYXJOYXZMaW5rQ29tcG9uZW50LFxuICBBcHBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQsXG4gIE5hdkRyb3Bkb3duRGlyZWN0aXZlLFxuICBOYXZEcm9wZG93blRvZ2dsZURpcmVjdGl2ZVxufSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBMYXlvdXRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFwcFNpZGViYXJGb290ZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhckZvcm1Db21wb25lbnQsXG4gICAgQXBwU2lkZWJhckhlYWRlckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkl0ZW1Db21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50LFxuICAgIE5hdkRyb3Bkb3duRGlyZWN0aXZlLFxuICAgIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLFxuICAgIExheW91dE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBTaWRlYmFyRm9vdGVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJGb3JtQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJIZWFkZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkl0ZW1Db21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50LFxuICAgIE5hdkRyb3Bkb3duRGlyZWN0aXZlLFxuICAgIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJEaXJlY3RpdmUiLCJJbnB1dCIsIkhvc3RMaXN0ZW5lciIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiQ29tcG9uZW50IiwiRWxlbWVudFJlZiIsInJvdXRlciIsIkJlaGF2aW9yU3ViamVjdCIsImZpbHRlciIsIk5hdmlnYXRpb25FbmQiLCJJbmplY3RhYmxlIiwiUm91dGVyIiwiQWN0aXZhdGVkUm91dGUiLCJSb3V0ZXJNb2R1bGUiLCJIb3N0QmluZGluZyIsIlJlbmRlcmVyMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQU8scUJBQU0saUJBQWlCLEdBQWtCO1FBQzlDLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixpQkFBaUI7S0FDbEIsQ0FBQztBQUVGLElBQU8scUJBQU0sbUJBQW1CLEdBQWtCO1FBQ2hELGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixvQkFBb0I7S0FDckIsQ0FBQzs7Ozs7O0lDZEYscUJBQU0sYUFBYSxHQUFHLFVBQUMsYUFBYTtRQUNsQyxxQkFBTSxZQUFZLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBQSxDQUFDLENBQUM7UUFDNUcsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzFDLENBQUM7SUFFSyxxQkFBTSxhQUFhLEdBQUcsVUFBQyxNQUFNLEVBQUUsVUFBVTtRQUM5QyxxQkFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxxQkFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXJELElBQUksYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ2hDLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUEsQ0FBQyxDQUFDO1NBQ3RGO2FBQU07WUFDTCxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEQ7S0FDRixDQUFDOzs7Ozs7QUNkRjs7OztRQWFFO1NBQWdCOzs7O1FBQ2hCLHlDQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDM0I7Ozs7O1FBRUQsMkNBQVU7Ozs7c0JBQUMsTUFBVztnQkFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN4QixxQkFBSSxRQUFRLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLEVBQUUsR0FBRyxRQUFRLEdBQUcsYUFBVyxJQUFJLENBQUMsRUFBRSxVQUFPLEdBQUcsUUFBUSxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRixhQUFhLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDLENBQUM7OztvQkFmOUNBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUscUJBQXFCO3FCQUNoQzs7Ozs7bUNBRUVDLFVBQUssU0FBQyxtQkFBbUI7bUNBTXpCQyxpQkFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7cUNBakJuQzs7O1FBOEJFO1NBQWlCOzs7OztRQUdqQiw2Q0FBVTs7OztzQkFBQyxNQUFXO2dCQUNwQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3hCLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOzs7b0JBVHhFRixjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtxQkFDbEM7Ozs7O21DQUlFRSxpQkFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7dUNBaENuQzs7O1FBMkNFO1NBQWlCOzs7Ozs7UUFHVCwrQ0FBUTs7Ozs7c0JBQUMsTUFBVyxFQUFFLGdCQUF3QjtnQkFDcEQsT0FBTyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Ozs7O1FBSXJGLGlEQUFVOzs7O3NCQUFDLE1BQVc7Z0JBQ3BCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDeEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7OztvQkFkMUVGLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsMkJBQTJCO3FCQUN0Qzs7Ozs7bUNBU0VFLGlCQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzsyQ0FsRG5DOzs7Ozs7UUFnRUU7U0FBaUI7Ozs7OztRQUdULGlEQUFROzs7OztzQkFBQyxNQUFXLEVBQUUsZ0JBQXdCO2dCQUNwRCxPQUFPLElBQUksTUFBTSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7Ozs7O1FBSTdFLG9EQUFXOzs7OztzQkFBQyxJQUFTLEVBQUUsZ0JBQXdCO2dCQUNyRCxxQkFBSSxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFFLFdBQVcsRUFBRSxHQUFHLENBQUUsR0FBRyxHQUFHLENBQUM7Z0JBQ3RFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsRUFBRTtvQkFDekMsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUc7d0JBQzNELFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFFLEdBQUcsR0FBRyxnQkFBZ0IsR0FBRyxHQUFHLEVBQUcsR0FBRyxDQUFFLENBQUM7cUJBQ25FO29CQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7aUJBQ3JEO3FCQUFNO29CQUNMLElBQUksQ0FBQyxTQUFTLElBQUksR0FBRyxHQUFHLGdCQUFnQixDQUFDO2lCQUMxQzs7Ozs7O1FBSUgsbURBQVU7Ozs7c0JBQUMsTUFBVztnQkFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUV4QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxFQUFFO29CQUN2RSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztpQkFDcEU7OztvQkE5QkpGLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsbUJBQW1CO3FCQUM5Qjs7Ozs7bUNBc0JFRSxpQkFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7NkNBcEZuQzs7O1FBa0dFO1NBQWlCOzs7OztRQUdqQiwyQ0FBVTs7OztzQkFBQyxNQUFXO2dCQUNwQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3hCLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOzs7b0JBVHRFRixjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtxQkFDaEM7Ozs7O21DQUlFRSxpQkFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7cUNBcEduQzs7Ozs7O1FBcUhFO1NBQWdCOzs7O1FBQ2hCLHVDQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDM0I7Ozs7O1FBRUQseUNBQVU7Ozs7c0JBQUMsTUFBVztnQkFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN4QixxQkFBSSxRQUFRLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLEVBQUUsR0FBRyxRQUFRLEdBQUcsZ0JBQWMsSUFBSSxDQUFDLEVBQUUsVUFBTyxHQUFHLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEYsYUFBYSxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDOzs7b0JBZmhERixjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtxQkFDbEM7Ozs7O21DQUVFQyxVQUFLLFNBQUMscUJBQXFCO21DQU0zQkMsaUJBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O21DQXpIbkM7Ozs7Ozs7QUNBQTs7OztvQkFXQ0MsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7eUJBQ2I7d0JBQ0QsT0FBTyxFQUFFOzRCQUNQLG9CQUFvQjs0QkFDcEIsc0JBQXNCOzRCQUN0Qiw0QkFBNEI7NEJBQzVCLHNCQUFzQjs0QkFDdEIsd0JBQXdCOzRCQUN4Qiw4QkFBOEI7eUJBQy9CO3dCQUNELFlBQVksRUFBRTs0QkFDWixvQkFBb0I7NEJBQ3BCLHNCQUFzQjs0QkFDdEIsNEJBQTRCOzRCQUM1QixzQkFBc0I7NEJBQ3RCLHdCQUF3Qjs0QkFDeEIsOEJBQThCO3lCQUMvQjtxQkFDRjs7MkJBL0JEOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEscUJBQXdCLEVBQU87UUFDN0IscUJBQU0sYUFBYSxHQUFnQixFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ3BELHFCQUFNLGFBQWEsR0FBZ0IsYUFBYSxDQUFDLGFBQWEsQ0FBQzs7UUFFL0QsT0FBTyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQy9CLGFBQWEsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUNyRTs7UUFFRCxhQUFhLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQzFDOzs7Ozs7Ozs7OztBQ1REO1FBZ0JFLDJCQUFvQixFQUFjO1lBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtTQUFJOzs7O1FBRXRDLG9DQUFROzs7WUFBUjtnQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0Qzs7Ozs7UUFFRCxtQ0FBTzs7OztZQUFQLFVBQVEsS0FBYztnQkFDcEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2lCQUFFO2FBQ3RGOzs7OztRQUVELHVDQUFXOzs7O1lBQVgsVUFBWSxTQUFrQjtnQkFDNUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2lCQUFFO2FBQy9GOzs7OztRQUVELDZDQUFpQjs7OztZQUFqQixVQUFrQixPQUFZO2dCQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBTSxFQUFFO29CQUMzQixxQkFBSSxRQUFRLFNBQUEsQ0FBQztvQkFDYixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsR0FBRyxnQkFBYyxJQUFJLENBQUMsT0FBTyxVQUFPLEdBQUcsUUFBUSxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3hEO2FBQ0Y7O29CQW5DRkMsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsdUZBSVQ7cUJBQ0Y7Ozs7O3dCQVZtQkMsZUFBVTs7OztnQ0FZM0JMLFVBQUs7OEJBQ0xBLFVBQUs7a0NBQ0xBLFVBQUs7O2dDQWRSOzs7Ozs7O0FDQUE7Ozs7b0JBTUNFLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLG1CQUFZOzRCQUNaLFlBQVk7eUJBQ2I7d0JBQ0QsT0FBTyxFQUFFOzRCQUNQLGlCQUFpQjs0QkFDakIsWUFBWTt5QkFDYjt3QkFDRCxZQUFZLEVBQUU7NEJBQ1osaUJBQWlCO3lCQUNsQjtxQkFDRjs7NkJBbEJEOzs7Ozs7Ozs7Ozs7QUNBQTtRQVlFLDhCQUFvQkcsU0FBYyxFQUFVLEtBQXFCO1lBQWpFLGlCQStCQztZQS9CbUIsV0FBTSxHQUFOQSxTQUFNLENBQVE7WUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtZQUUvRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUlDLHFCQUFlLENBQVcsSUFBSSxLQUFLLEVBQVUsQ0FBQyxDQUFDO1lBRXZFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUVwRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUNDLGdCQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLFlBQVlDLG9CQUFhLEdBQUEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBSztnQkFDdkYscUJBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDdkIscUJBQUksWUFBWSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxtQkFDbEMsR0FBRyxHQUFHLEVBQUUsQ0FBQztnQkFDVCxHQUFHO29CQUNELHFCQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO29CQUM3QyxZQUFZLEdBQUcsSUFBSSxDQUFDOztvQkFFcEIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7d0JBQzFCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7NEJBQzlCLHFCQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDOzRCQUNyQyxHQUFHLElBQUksR0FBRyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLElBQUksR0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUN0RSxXQUFXLENBQUMsSUFBSSxDQUFDO2dDQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUk7Z0NBQzFCLEdBQUcsRUFBSSxHQUFHOzZCQUNYLENBQUMsQ0FBQzs0QkFDSCxZQUFZLEdBQUcsS0FBSyxDQUFDO3lCQUN0QjtxQkFDRixDQUFDLENBQUM7aUJBQ0osUUFBUSxZQUFZLEVBQUU7Z0JBRXZCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBRXZELE9BQU8sV0FBVyxDQUFDO2FBQ3BCLENBQUMsQ0FBQztTQUNKOztvQkF0Q0ZDLGVBQVU7Ozs7O3dCQUpGQyxhQUFNO3dCQUFFQyxxQkFBYzs7O21DQUQvQjs7Ozs7OztBQ0FBO1FBcUJFLGdDQUFtQixPQUE2QixFQUFTLEVBQWM7WUFBcEQsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7WUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFZO1NBQUs7Ozs7UUFFckUseUNBQVE7Ozs7Z0JBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7Ozs7OztRQUc5Qyx3Q0FBTzs7OztZQUFQLFVBQVEsS0FBYztnQkFDcEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2lCQUFFO2FBQ3RGOztvQkEzQkZSLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsbWVBU1Q7cUJBQ0Y7Ozs7O3dCQWRRLG9CQUFvQjt3QkFGVEMsZUFBVTs7Ozs4QkFrQjNCTCxVQUFLOztxQ0FsQlI7Ozs7Ozs7QUNBQTs7Ozs7OztRQWNTLDJCQUFPOzs7O1lBQWQsVUFBZSxNQUFZO2dCQUN6QixPQUFPO29CQUNMLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFNBQVMsRUFBRTt3QkFDVCxvQkFBb0I7cUJBQ3JCO2lCQUNGLENBQUM7YUFDSDs7b0JBYkZFLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsQ0FBRUMsbUJBQVksRUFBRVUsbUJBQVksQ0FBRTt3QkFDdkMsT0FBTyxFQUFFLENBQUUsc0JBQXNCLENBQUU7d0JBQ25DLFlBQVksRUFBRSxDQUFFLHNCQUFzQixDQUFFO3FCQUN6Qzs7a0NBWkQ7Ozs7Ozs7Ozs7OztBQ0FBO1FBY0UsNEJBQW9CLEVBQWM7WUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1NBQUk7Ozs7UUFFdEMscUNBQVE7OztZQUFSO2dCQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFCOzs7OztRQUVELG9DQUFPOzs7O1lBQVAsVUFBUSxLQUFjO2dCQUNwQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2lCQUFFO2FBQ2xGOztvQkFwQkZULGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLHlGQUlUO3FCQUNGOzs7Ozt3QkFWbUJDLGVBQVU7Ozs7OEJBWTNCTCxVQUFLOztpQ0FaUjs7Ozs7OztBQ0FBOzs7O29CQUtDRSxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLENBQUVDLG1CQUFZLENBQUU7d0JBQ3pCLE9BQU8sRUFBRSxDQUFFLGtCQUFrQixDQUFFO3dCQUMvQixZQUFZLEVBQUUsQ0FBRSxrQkFBa0IsQ0FBRTtxQkFDckM7OzhCQVREOzs7Ozs7Ozs7Ozs7QUNBQTtRQW1FRSw0QkFBb0IsRUFBYztZQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7U0FBSTs7OztRQUV0QyxxQ0FBUTs7O1lBQVI7Z0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDMUI7Ozs7O1FBRUQsb0NBQU87Ozs7WUFBUCxVQUFRLEtBQWM7Z0JBQ3BCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7aUJBQUU7YUFDbEY7Ozs7O1FBRUQsbUNBQU07Ozs7WUFBTixVQUFPLEtBQVU7Z0JBQ2YsT0FBTyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO2FBQ25DOzs7OztRQUVELHFDQUFROzs7O1lBQVIsVUFBUyxLQUFVO2dCQUNqQixPQUFPLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7YUFDM0M7Ozs7O1FBRUQsc0NBQVM7Ozs7WUFBVCxVQUFVLEtBQVU7Z0JBQ2xCLE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzthQUM3Qzs7Ozs7UUFFRCxtQ0FBTTs7OztZQUFOLFVBQU8sS0FBVTtnQkFDZixPQUFPLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7YUFDbkM7Ozs7O1FBRUQsdUNBQVU7Ozs7WUFBVixVQUFXLFVBQWU7Z0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3hCLE9BQU8sVUFBVSxHQUFHLFVBQVUsR0FBRyxFQUFFLENBQUM7YUFDckM7O29CQTlGRkMsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsNnJFQThDVDtxQkFDRjs7Ozs7d0JBcERtQkMsZUFBVTs7Ozs4QkF1RDNCTCxVQUFLO29DQUVMQSxVQUFLO3dDQUNMQSxVQUFLOzZDQUNMQSxVQUFLO3VDQUVMQSxVQUFLOzZDQUNMQSxVQUFLO3lDQUVMQSxVQUFLOytDQUNMQSxVQUFLOztpQ0FqRVI7Ozs7Ozs7QUNBQTs7OztvQkFNQ0UsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7NEJBQ1osWUFBWTt5QkFDYjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1Asa0JBQWtCOzRCQUNsQixZQUFZO3lCQUNiO3dCQUNELFlBQVksRUFBRTs0QkFDWixrQkFBa0I7eUJBQ25CO3FCQUNGOzs4QkFsQkQ7Ozs7Ozs7Ozs7OztBQ0FBO1FBWUUsbUNBQW9CLEVBQWM7WUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1NBQUs7Ozs7UUFFdkMsNENBQVE7OztZQUFSO2dCQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDbEI7O29CQWJGQyxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjt3QkFDOUIsUUFBUSxFQUFFLG1GQUdEO3FCQUNWOzs7Ozt3QkFUbUJDLGVBQVU7Ozt3Q0FBOUI7Ozs7Ozs7QUNBQTtRQWFFLGlDQUFvQixFQUFjO1lBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtTQUFLOzs7O1FBRXZDLDBDQUFROzs7WUFBUjtnQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2xCOztvQkFkRkQsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFFBQVEsRUFBRSx1RkFJVDtxQkFDRjs7Ozs7d0JBVm1CQyxlQUFVOzs7c0NBQTlCOzs7Ozs7O0FDQUE7UUFhRSxtQ0FBb0IsRUFBYztZQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7U0FBSzs7OztRQUV2Qyw0Q0FBUTs7O1lBQVI7Z0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNsQjs7b0JBZEZELGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixRQUFRLEVBQUUsdUZBSVQ7cUJBQ0Y7Ozs7O3dCQVZtQkMsZUFBVTs7O3dDQUE5Qjs7Ozs7OztBQ0FBO1FBV0Usc0NBQW9CLEVBQWM7WUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1NBQUs7Ozs7UUFFdkMsK0NBQVE7OztZQUFSO2dCQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDbEI7O29CQVpGRCxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsUUFBUSxFQUFFLCtHQUVUO3FCQUNGOzs7Ozt3QkFSbUJDLGVBQVU7OzsyQ0FBOUI7Ozs7Ozs7QUNBQTtRQWdCRTtTQUFnQjs7OztRQUVoQixzQ0FBUTs7O1lBQVI7Z0JBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbEM7Ozs7O1FBRUQsdUNBQVM7Ozs7WUFBVCxVQUFVLE9BQWdCO2dCQUN4QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7aUJBQUU7YUFDdkY7Ozs7O1FBRUQscUNBQU87Ozs7WUFBUCxVQUFRLEtBQWM7Z0JBQ3BCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7aUJBQUU7YUFDbkY7Ozs7O1FBRUQseUNBQVc7Ozs7WUFBWCxVQUFZLFNBQWtCO2dCQUM1QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7aUJBQUU7YUFDM0Y7Ozs7O1FBRUQseUNBQVc7Ozs7WUFBWCxVQUFZLFNBQWtCO2dCQUM1QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7aUJBQUU7YUFDNUY7Ozs7O1FBRUQsMkNBQWE7Ozs7WUFBYixVQUFjLEtBQWM7Z0JBQzFCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7aUJBQUU7YUFDbkY7Ozs7O1FBRUQsK0NBQWlCOzs7O1lBQWpCLFVBQWtCLE9BQVk7Z0JBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFNLEVBQUU7b0JBQzNCLHFCQUFJLFFBQVEsU0FBQSxDQUFDO29CQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxHQUFHLGFBQVcsSUFBSSxDQUFDLE9BQU8sVUFBTyxHQUFHLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0YsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN4RDthQUNGOztvQkFqREZELGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLDJCQUEyQjtxQkFDdEM7Ozs7O2dDQUVFSixVQUFLO2dDQUNMQSxVQUFLOzhCQUNMQSxVQUFLO2tDQUNMQSxVQUFLO2tDQUNMQSxVQUFLOzZCQUVMYyxnQkFBVyxTQUFDLGVBQWU7O2tDQWQ5Qjs7Ozs7OztBQ0FBO1FBUUUsOEJBQW9CLEVBQWM7WUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1NBQUs7Ozs7UUFFdkMscUNBQU07OztZQUFOO2dCQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDaEQ7O29CQVRGZixjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtxQkFDN0I7Ozs7O3dCQUw4Qk0sZUFBVTs7O21DQUF6Qzs7Ozs7O1FBc0JFLG9DQUFvQixRQUE4QjtZQUE5QixhQUFRLEdBQVIsUUFBUSxDQUFzQjtTQUFJOzs7OztRQUd0RCwrQ0FBVTs7OztzQkFBQyxNQUFXO2dCQUNwQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7OztvQkFUMUJOLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsd0JBQXdCO3FCQUNuQzs7Ozs7d0JBZFksb0JBQW9COzs7O21DQWtCOUJFLGlCQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzt5Q0F4Qm5DOzs7UUE0REU7d0JBVmlDLEtBQUs7U0FVckI7Ozs7O1FBUlYsMENBQVM7Ozs7c0JBQUMsSUFBSTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7Ozs7OztRQUc5Qix3Q0FBTzs7OztzQkFBQyxJQUFJO2dCQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQzs7O29CQTFCcENHLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixRQUFRLEVBQUUsa2dCQVdGO3FCQUNUOzs7OztpQ0FFRUosVUFBSzs2QkFFTGMsZ0JBQVcsU0FBQyxtQkFBbUI7NkJBQy9CQSxnQkFBVyxTQUFDLFdBQVc7O3FDQWxEMUI7OztRQW9HRSxvQ0FBcUJSLFNBQWMsRUFBVSxFQUFjO1lBQXRDLFdBQU0sR0FBTkEsU0FBTSxDQUFRO1lBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtTQUFNOzs7O1FBaEIxRCw2Q0FBUTs7OztnQkFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7Ozs7O1FBR2pDLCtDQUFVOzs7O2dCQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQzs7Ozs7UUFHcEMsNENBQU87Ozs7Z0JBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7Ozs7UUFHaEIsNkNBQVE7Ozs7Z0JBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7Ozs7O1FBS3JELDZDQUFROzs7WUFBUjtnQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2xCOztvQkF2Q0ZGLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsc0JBQXNCO3dCQUNoQyxRQUFRLEVBQUUsZ2lCQVlQO3FCQUNKOzs7Ozt3QkFqQlFPLGFBQU07d0JBL0RnQk4sZUFBVTs7Ozs2QkFrRnRDTCxVQUFLOzt5Q0FsRlI7OztRQTBKRSxvQ0FBcUJNLFNBQWMsRUFBVSxFQUFjO1lBQXRDLFdBQU0sR0FBTkEsU0FBTSxDQUFRO1lBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtTQUFNOzs7O1FBdEIxRCwrQ0FBVTs7OztnQkFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7Ozs7O1FBR25DLDRDQUFPOzs7O2dCQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQzs7Ozs7UUFHakMsbURBQWM7Ozs7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQzs7Ozs7UUFHMUQsMkNBQU07Ozs7Z0JBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDOzs7OztRQUdoQywrQ0FBVTs7OztnQkFDZixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO29CQUMzRCxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztpQkFDdkQ7Ozs7O1FBS0gsNkNBQVE7OztZQUFSO2dCQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDbEI7O29CQWxERkYsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxzQkFBc0I7d0JBQ2hDLFFBQVEsRUFBRSx5MEJBaUJUO3FCQUNGOzs7Ozt3QkFqRVFPLGFBQU07d0JBL0RnQk4sZUFBVTs7Ozs2QkFrSXRDTCxVQUFLOzt5Q0FsSVI7OztRQTRMRSx3Q0FBcUJNLFNBQWMsRUFBVSxFQUFjO1lBQXRDLFdBQU0sR0FBTkEsU0FBTSxDQUFRO1lBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtTQUFNOzs7O1FBUjFELGdEQUFPOzs7O2dCQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQzs7Ozs7UUFHakMsK0NBQU07Ozs7Z0JBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDOzs7OztRQUt2QyxpREFBUTs7O1lBQVI7Z0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNsQjs7b0JBL0JGRixjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjt3QkFDcEMsUUFBUSxFQUFFLGdmQVdUO3dCQUNELE1BQU0sRUFBRSxDQUFDLDJDQUEyQyxDQUFDO3FCQUN0RDs7Ozs7d0JBakhRTyxhQUFNO3dCQS9EZ0JOLGVBQVU7Ozs7NkJBa0x0Q0wsVUFBSzs7NkNBbExSOzs7UUEwTUUscUNBQW9CLEVBQWMsRUFBVSxRQUFtQjtZQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1lBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztTQUFLOzs7O1FBRXBFLDhDQUFROzs7WUFBUjtnQkFDRSxxQkFBTSxhQUFhLEdBQWdCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUN6RCxxQkFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdDLHFCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUV2RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBRXhDLElBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFNLEVBQUU7b0JBQ3RCLHFCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztvQkFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUNyQztnQkFFRCxJQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBUSxFQUFFO29CQUN4QixxQkFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRXhFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUN4QztxQkFBTTtvQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ3JDO2dCQUNELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDN0MsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNsQjs7b0JBL0JGSSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsUUFBUSxFQUFFLEVBQUU7cUJBQ2I7Ozs7O3dCQXRNOEJDLGVBQVU7d0JBQTRDVSxjQUFTOzs7OzhCQXdNM0ZmLFVBQUs7OzBDQXhNUjs7Ozs7OztBQ0FBOzs7O29CQXNCQ0UsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7NEJBQ1pVLG1CQUFZOzRCQUNaLFlBQVk7eUJBQ2I7d0JBQ0QsT0FBTyxFQUFFOzRCQUNQLHlCQUF5Qjs0QkFDekIsdUJBQXVCOzRCQUN2Qix5QkFBeUI7NEJBQ3pCLDRCQUE0Qjs0QkFDNUIsbUJBQW1COzRCQUNuQixzQkFBc0I7NEJBQ3RCLDhCQUE4Qjs0QkFDOUIsMEJBQTBCOzRCQUMxQiwwQkFBMEI7NEJBQzFCLDJCQUEyQjs0QkFDM0Isb0JBQW9COzRCQUNwQiwwQkFBMEI7NEJBQzFCLFlBQVk7eUJBQ2I7d0JBQ0QsWUFBWSxFQUFFOzRCQUNaLHlCQUF5Qjs0QkFDekIsdUJBQXVCOzRCQUN2Qix5QkFBeUI7NEJBQ3pCLDRCQUE0Qjs0QkFDNUIsNEJBQTRCOzRCQUM1QixtQkFBbUI7NEJBQ25CLHNCQUFzQjs0QkFDdEIsOEJBQThCOzRCQUM5QiwwQkFBMEI7NEJBQzFCLDBCQUEwQjs0QkFDMUIsMkJBQTJCOzRCQUMzQixvQkFBb0I7NEJBQ3BCLDBCQUEwQjt5QkFDM0I7cUJBQ0Y7OytCQTFERDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9