(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('rxjs/index'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@coreui/angular', ['exports', '@angular/core', '@angular/common', '@angular/router', 'rxjs/index', 'rxjs/operators'], factory) :
    (factory((global.coreui = global.coreui || {}, global.coreui.angular = {}),global.ng.core,global.ng.common,global.ng.router,global.rxjs.index,global.rxjs.operators));
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
            breakpoint: [{ type: core.Input, args: ['appSidebarToggler',] }],
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
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
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
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
                document.querySelector('body').classList.toggle('sidebar-show');
            };
        MobileSidebarToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[appMobileSidebarToggler]'
                    },] },
        ];
        /** @nocollapse */
        MobileSidebarToggleDirective.ctorParameters = function () { return []; };
        MobileSidebarToggleDirective.propDecorators = {
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
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
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
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
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
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
            breakpoint: [{ type: core.Input, args: ['appAsideMenuToggler',] }],
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
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
                { type: core.ElementRef }
            ];
        };
        AppAsideComponent.propDecorators = {
            display: [{ type: core.Input }],
            fixed: [{ type: core.Input }],
            offCanvas: [{ type: core.Input }]
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
                { type: router.Router },
                { type: router.ActivatedRoute }
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
                { type: AppBreadcrumbService },
                { type: core.ElementRef }
            ];
        };
        AppBreadcrumbComponent.propDecorators = {
            fixed: [{ type: core.Input }]
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
                { type: core.ElementRef }
            ];
        };
        AppFooterComponent.propDecorators = {
            fixed: [{ type: core.Input }]
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
                { type: core.ElementRef }
            ];
        };
        AppHeaderComponent.propDecorators = {
            fixed: [{ type: core.Input }],
            navbarBrand: [{ type: core.Input }],
            navbarBrandFull: [{ type: core.Input }],
            navbarBrandMinimized: [{ type: core.Input }],
            sidebarToggler: [{ type: core.Input }],
            mobileSidebarToggler: [{ type: core.Input }],
            asideMenuToggler: [{ type: core.Input }],
            mobileAsideMenuToggler: [{ type: core.Input }]
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
                { type: core.ElementRef }
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
                { type: core.ElementRef }
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
                { type: core.ElementRef }
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
                { type: core.ElementRef }
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
            compact: [{ type: core.Input }],
            display: [{ type: core.Input }],
            fixed: [{ type: core.Input }],
            minimized: [{ type: core.Input }],
            offCanvas: [{ type: core.Input }],
            true: [{ type: core.HostBinding, args: ['class.sidebar',] }]
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
                { type: core.ElementRef }
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
                { type: NavDropdownDirective }
            ];
        };
        NavDropdownToggleDirective.propDecorators = {
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
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
            navItems: [{ type: core.Input }],
            true: [{ type: core.HostBinding, args: ['class.sidebar-nav',] }],
            role: [{ type: core.HostBinding, args: ['attr.role',] }]
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
                { type: router.Router },
                { type: core.ElementRef }
            ];
        };
        AppSidebarNavItemComponent.propDecorators = {
            item: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'app-sidebar-nav-link',
                        template: "\n    <a *ngIf=\"!isExternalLink(); else external\"\n      [ngClass]=\"hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'\"\n      routerLinkActive=\"active\"\n      [routerLink]=\"[link.url]\"\n      (click)=\"hideMobile()\">\n      <i *ngIf=\"isIcon()\" class=\"nav-icon {{ link.icon }}\"></i>\n      {{ link.name }}\n      <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n    </a>\n    <ng-template #external>\n      <a [ngClass]=\"hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'\" href=\"{{link.url}}\">\n        <i *ngIf=\"isIcon()\" class=\"nav-icon {{ link.icon }}\"></i>\n        {{ link.name }}\n        <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n      </a>\n    </ng-template>\n  "
                    },] },
        ];
        /** @nocollapse */
        AppSidebarNavLinkComponent.ctorParameters = function () {
            return [
                { type: router.Router },
                { type: core.ElementRef }
            ];
        };
        AppSidebarNavLinkComponent.propDecorators = {
            link: [{ type: core.Input }]
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
                { type: router.Router },
                { type: core.ElementRef }
            ];
        };
        AppSidebarNavDropdownComponent.propDecorators = {
            link: [{ type: core.Input }]
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
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        AppSidebarNavTitleComponent.propDecorators = {
            title: [{ type: core.Input }]
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
    // export * from './lib/shared/index';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.AppAsideModule = AppAsideModule;
    exports.AppBreadcrumbModule = AppBreadcrumbModule;
    exports.AppFooterModule = AppFooterModule;
    exports.AppHeaderModule = AppHeaderModule;
    exports.AppSidebarModule = AppSidebarModule;
    exports.ɵh = AppAsideComponent;
    exports.ɵi = AppBreadcrumbComponent;
    exports.ɵj = AppBreadcrumbService;
    exports.ɵk = AppFooterComponent;
    exports.ɵl = AppHeaderComponent;
    exports.ɵg = AsideToggleDirective;
    exports.ɵf = BrandMinimizeDirective;
    exports.ɵd = MobileSidebarToggleDirective;
    exports.ɵc = SidebarMinimizeDirective;
    exports.ɵe = SidebarOffCanvasCloseDirective;
    exports.ɵb = SidebarToggleDirective;
    exports.ɵa = LayoutModule;
    exports.ɵm = AppSidebarFooterComponent;
    exports.ɵn = AppSidebarFormComponent;
    exports.ɵo = AppSidebarHeaderComponent;
    exports.ɵp = AppSidebarMinimizerComponent;
    exports.ɵt = AppSidebarNavComponent;
    exports.ɵw = AppSidebarNavDropdownComponent;
    exports.ɵu = AppSidebarNavItemComponent;
    exports.ɵv = AppSidebarNavLinkComponent;
    exports.ɵx = AppSidebarNavTitleComponent;
    exports.ɵr = NavDropdownDirective;
    exports.ɵs = NavDropdownToggleDirective;
    exports.ɵq = AppSidebarComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZXVpLWFuZ3VsYXIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL3NoYXJlZC9jbGFzc2VzLnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL3NoYXJlZC90b2dnbGUtY2xhc3Nlcy50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9zaGFyZWQvbGF5b3V0L2xheW91dC5kaXJlY3RpdmUudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvc2hhcmVkL2xheW91dC9sYXlvdXQubW9kdWxlLnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL3NoYXJlZC9yZXBsYWNlLnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL2FzaWRlL2FwcC1hc2lkZS5jb21wb25lbnQudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvYXNpZGUvYXBwLWFzaWRlLm1vZHVsZS50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9icmVhZGNydW1iL2FwcC1icmVhZGNydW1iLnNlcnZpY2UudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvYnJlYWRjcnVtYi9hcHAtYnJlYWRjcnVtYi5jb21wb25lbnQudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvYnJlYWRjcnVtYi9hcHAtYnJlYWRjcnVtYi5tb2R1bGUudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvZm9vdGVyL2FwcC1mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL2Zvb3Rlci9hcHAtZm9vdGVyLm1vZHVsZS50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9oZWFkZXIvYXBwLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvaGVhZGVyL2FwcC1oZWFkZXIubW9kdWxlLnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL3NpZGViYXIvYXBwLXNpZGViYXItZm9vdGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLWZvcm0uY29tcG9uZW50LnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL3NpZGViYXIvYXBwLXNpZGViYXItaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW1pbmltaXplci5jb21wb25lbnQudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvc2lkZWJhci9hcHAtc2lkZWJhci5jb21wb25lbnQudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYuY29tcG9uZW50LnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL3NpZGViYXIvYXBwLXNpZGViYXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzaWRlYmFyQ3NzQ2xhc3NlczogQXJyYXk8c3RyaW5nPiA9IFtcclxuICAnc2lkZWJhci1zaG93JyxcclxuICAnc2lkZWJhci1zbS1zaG93JyxcclxuICAnc2lkZWJhci1tZC1zaG93JyxcclxuICAnc2lkZWJhci1sZy1zaG93JyxcclxuICAnc2lkZWJhci14bC1zaG93J1xyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFzaWRlTWVudUNzc0NsYXNzZXM6IEFycmF5PHN0cmluZz4gPSBbXHJcbiAgJ2FzaWRlLW1lbnUtc2hvdycsXHJcbiAgJ2FzaWRlLW1lbnUtc20tc2hvdycsXHJcbiAgJ2FzaWRlLW1lbnUtbWQtc2hvdycsXHJcbiAgJ2FzaWRlLW1lbnUtbGctc2hvdycsXHJcbiAgJ2FzaWRlLW1lbnUteGwtc2hvdydcclxuXTtcclxuIiwiY29uc3QgUmVtb3ZlQ2xhc3NlcyA9IChOZXdDbGFzc05hbWVzKSA9PiB7XHJcbiAgY29uc3QgTWF0Y2hDbGFzc2VzID0gTmV3Q2xhc3NOYW1lcy5tYXAoKENsYXNzKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzKSk7XHJcbiAgcmV0dXJuIE1hdGNoQ2xhc3Nlcy5pbmRleE9mKHRydWUpICE9PSAtMTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUb2dnbGVDbGFzc2VzID0gKFRvZ2dsZSwgQ2xhc3NOYW1lcykgPT4ge1xyXG4gIGNvbnN0IExldmVsID0gQ2xhc3NOYW1lcy5pbmRleE9mKFRvZ2dsZSk7XHJcbiAgY29uc3QgTmV3Q2xhc3NOYW1lcyA9IENsYXNzTmFtZXMuc2xpY2UoMCwgTGV2ZWwgKyAxKTtcclxuXHJcbiAgaWYgKFJlbW92ZUNsYXNzZXMoTmV3Q2xhc3NOYW1lcykpIHtcclxuICAgIE5ld0NsYXNzTmFtZXMubWFwKChDbGFzcykgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3MpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoVG9nZ2xlKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHNpZGViYXJDc3NDbGFzc2VzLCBhc2lkZU1lbnVDc3NDbGFzc2VzIH0gZnJvbSAnLi8uLi9jbGFzc2VzJztcclxuaW1wb3J0IHsgVG9nZ2xlQ2xhc3NlcyB9IGZyb20gJy4vLi4vdG9nZ2xlLWNsYXNzZXMnO1xyXG5cclxuLyoqXHJcbiogQWxsb3dzIHRoZSBzaWRlYmFyIHRvIGJlIHRvZ2dsZWQgdmlhIGNsaWNrLlxyXG4qL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thcHBTaWRlYmFyVG9nZ2xlcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoJ2FwcFNpZGViYXJUb2dnbGVyJykgYnJlYWtwb2ludDogc3RyaW5nO1xyXG4gIHB1YmxpYyBicDtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJwID0gdGhpcy5icmVha3BvaW50O1xyXG4gIH1cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgY3NzQ2xhc3M7XHJcbiAgICB0aGlzLmJwID8gY3NzQ2xhc3MgPSBgc2lkZWJhci0ke3RoaXMuYnB9LXNob3dgIDogY3NzQ2xhc3MgPSBzaWRlYmFyQ3NzQ2xhc3Nlc1swXTtcclxuICAgIFRvZ2dsZUNsYXNzZXMoY3NzQ2xhc3MsIHNpZGViYXJDc3NDbGFzc2VzKTtcclxuICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwcFNpZGViYXJNaW5pbWl6ZXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZWJhck1pbmltaXplRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnc2lkZWJhci1taW5pbWl6ZWQnKTtcclxuICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwcE1vYmlsZVNpZGViYXJUb2dnbGVyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vYmlsZVNpZGViYXJUb2dnbGVEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8vIENoZWNrIGlmIGVsZW1lbnQgaGFzIGNsYXNzXHJcbiAgcHJpdmF0ZSBoYXNDbGFzcyh0YXJnZXQ6IGFueSwgZWxlbWVudENsYXNzTmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKFxcXFxzfF4pJyArIGVsZW1lbnRDbGFzc05hbWUgKyAnKFxcXFxzfCQpJykudGVzdCh0YXJnZXQuY2xhc3NOYW1lKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdzaWRlYmFyLXNob3cnKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4qIEFsbG93cyB0aGUgb2ZmLWNhbnZhcyBzaWRlYmFyIHRvIGJlIGNsb3NlZCB2aWEgY2xpY2suXHJcbiovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwcFNpZGViYXJDbG9zZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyT2ZmQ2FudmFzQ2xvc2VEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8vIENoZWNrIGlmIGVsZW1lbnQgaGFzIGNsYXNzXHJcbiAgcHJpdmF0ZSBoYXNDbGFzcyh0YXJnZXQ6IGFueSwgZWxlbWVudENsYXNzTmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKFxcXFxzfF4pJyArIGVsZW1lbnRDbGFzc05hbWUgKyAnKFxcXFxzfCQpJykudGVzdCh0YXJnZXQuY2xhc3NOYW1lKTtcclxuICB9XHJcblxyXG4gIC8vIFRvZ2dsZSBlbGVtZW50IGNsYXNzXHJcbiAgcHJpdmF0ZSB0b2dnbGVDbGFzcyhlbGVtOiBhbnksIGVsZW1lbnRDbGFzc05hbWU6IHN0cmluZykge1xyXG4gICAgbGV0IG5ld0NsYXNzID0gJyAnICsgZWxlbS5jbGFzc05hbWUucmVwbGFjZSggL1tcXHRcXHJcXG5dL2csICcgJyApICsgJyAnO1xyXG4gICAgaWYgKHRoaXMuaGFzQ2xhc3MoZWxlbSwgZWxlbWVudENsYXNzTmFtZSkpIHtcclxuICAgICAgd2hpbGUgKG5ld0NsYXNzLmluZGV4T2YoJyAnICsgZWxlbWVudENsYXNzTmFtZSArICcgJykgPj0gMCApIHtcclxuICAgICAgICBuZXdDbGFzcyA9IG5ld0NsYXNzLnJlcGxhY2UoICcgJyArIGVsZW1lbnRDbGFzc05hbWUgKyAnICcgLCAnICcgKTtcclxuICAgICAgfVxyXG4gICAgICBlbGVtLmNsYXNzTmFtZSA9IG5ld0NsYXNzLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsZW0uY2xhc3NOYW1lICs9ICcgJyArIGVsZW1lbnRDbGFzc05hbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHRoaXMuaGFzQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCAnc2lkZWJhci1vZmYtY2FudmFzJykpIHtcclxuICAgICAgdGhpcy50b2dnbGVDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksICdzaWRlYmFyLW9wZW5lZCcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwQnJhbmRNaW5pbWl6ZXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJhbmRNaW5pbWl6ZURpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ2JyYW5kLW1pbmltaXplZCcpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4qIEFsbG93cyB0aGUgYXNpZGUgdG8gYmUgdG9nZ2xlZCB2aWEgY2xpY2suXHJcbiovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwcEFzaWRlTWVudVRvZ2dsZXJdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFzaWRlVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoJ2FwcEFzaWRlTWVudVRvZ2dsZXInKSBicmVha3BvaW50OiBzdHJpbmc7XHJcbiAgcHVibGljIGJwO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYnAgPSB0aGlzLmJyZWFrcG9pbnQ7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBjc3NDbGFzcztcclxuICAgIHRoaXMuYnAgPyBjc3NDbGFzcyA9IGBhc2lkZS1tZW51LSR7dGhpcy5icH0tc2hvd2AgOiBjc3NDbGFzcyA9IGFzaWRlTWVudUNzc0NsYXNzZXNbMF07XHJcbiAgICBUb2dnbGVDbGFzc2VzKGNzc0NsYXNzLCBhc2lkZU1lbnVDc3NDbGFzc2VzKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFzaWRlVG9nZ2xlRGlyZWN0aXZlLFxyXG4gIEJyYW5kTWluaW1pemVEaXJlY3RpdmUsXHJcbiAgTW9iaWxlU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSxcclxuICBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlLFxyXG4gIFNpZGViYXJNaW5pbWl6ZURpcmVjdGl2ZSxcclxuICBTaWRlYmFyT2ZmQ2FudmFzQ2xvc2VEaXJlY3RpdmVcclxufSBmcm9tICcuL2xheW91dC5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEFzaWRlVG9nZ2xlRGlyZWN0aXZlLFxyXG4gICAgQnJhbmRNaW5pbWl6ZURpcmVjdGl2ZSxcclxuICAgIE1vYmlsZVNpZGViYXJUb2dnbGVEaXJlY3RpdmUsXHJcbiAgICBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlLFxyXG4gICAgU2lkZWJhck1pbmltaXplRGlyZWN0aXZlLFxyXG4gICAgU2lkZWJhck9mZkNhbnZhc0Nsb3NlRGlyZWN0aXZlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFzaWRlVG9nZ2xlRGlyZWN0aXZlLFxyXG4gICAgQnJhbmRNaW5pbWl6ZURpcmVjdGl2ZSxcclxuICAgIE1vYmlsZVNpZGViYXJUb2dnbGVEaXJlY3RpdmUsXHJcbiAgICBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlLFxyXG4gICAgU2lkZWJhck1pbmltaXplRGlyZWN0aXZlLFxyXG4gICAgU2lkZWJhck9mZkNhbnZhc0Nsb3NlRGlyZWN0aXZlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHsgfVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gUmVwbGFjZShlbDogYW55KTogYW55IHtcclxuICBjb25zdCBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgY29uc3QgcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQgPSBuYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgLy8gbW92ZSBhbGwgY2hpbGRyZW4gb3V0IG9mIHRoZSBlbGVtZW50XHJcbiAgd2hpbGUgKG5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgcGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUobmF0aXZlRWxlbWVudC5maXJzdENoaWxkLCBuYXRpdmVFbGVtZW50KTtcclxuICB9XHJcbiAgLy8gcmVtb3ZlIHRoZSBlbXB0eSBlbGVtZW50KHRoZSBob3N0KVxyXG4gIHBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobmF0aXZlRWxlbWVudCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGFzaWRlTWVudUNzc0NsYXNzZXMsIFJlcGxhY2UgfSBmcm9tICcuLy4uL3NoYXJlZC9pbmRleCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1hc2lkZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxhc2lkZSBjbGFzcz1cImFzaWRlLW1lbnVcIj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9hc2lkZT5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBBc2lkZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZGlzcGxheTogYW55O1xyXG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG9mZkNhbnZhczogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xyXG4gICAgdGhpcy5pc0ZpeGVkKHRoaXMuZml4ZWQpO1xyXG4gICAgdGhpcy5kaXNwbGF5QnJlYWtwb2ludCh0aGlzLmRpc3BsYXkpO1xyXG4gIH1cclxuXHJcbiAgaXNGaXhlZChmaXhlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZml4ZWQpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2FzaWRlLW1lbnUtZml4ZWQnKTsgfVxyXG4gIH1cclxuXHJcbiAgaXNPZmZDYW52YXMob2ZmQ2FudmFzOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vZmZDYW52YXMpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2FzaWRlLW1lbnUtb2ZmLWNhbnZhcycpOyB9XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5QnJlYWtwb2ludChkaXNwbGF5OiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc3BsYXkgIT09IGZhbHNlICkge1xyXG4gICAgICBsZXQgY3NzQ2xhc3M7XHJcbiAgICAgIHRoaXMuZGlzcGxheSA/IGNzc0NsYXNzID0gYGFzaWRlLW1lbnUtJHt0aGlzLmRpc3BsYXl9LXNob3dgIDogY3NzQ2xhc3MgPSBhc2lkZU1lbnVDc3NDbGFzc2VzWzBdO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi8uLi9zaGFyZWQvbGF5b3V0L2xheW91dC5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgQXBwQXNpZGVDb21wb25lbnQgfSBmcm9tICcuL2FwcC1hc2lkZS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBMYXlvdXRNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEFwcEFzaWRlQ29tcG9uZW50LFxyXG4gICAgTGF5b3V0TW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFwcEFzaWRlQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQXNpZGVNb2R1bGUge31cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvaW5kZXgnO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcHBCcmVhZGNydW1iU2VydmljZSB7XHJcblxyXG4gIGJyZWFkY3J1bWJzOiBPYnNlcnZhYmxlPEFycmF5PE9iamVjdD4+O1xyXG5cclxuICBwcml2YXRlIF9icmVhZGNydW1iczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PE9iamVjdD4+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG5cclxuICAgIHRoaXMuX2JyZWFkY3J1bWJzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxPYmplY3RbXT4obmV3IEFycmF5PE9iamVjdD4oKSk7XHJcblxyXG4gICAgdGhpcy5icmVhZGNydW1icyA9IHRoaXMuX2JyZWFkY3J1bWJzLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGJyZWFkY3J1bWJzID0gW107XHJcbiAgICAgIGxldCBjdXJyZW50Um91dGUgPSB0aGlzLnJvdXRlLnJvb3QsXHJcbiAgICAgIHVybCA9ICcnO1xyXG4gICAgICBkbyB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW5Sb3V0ZXMgPSBjdXJyZW50Um91dGUuY2hpbGRyZW47XHJcbiAgICAgICAgY3VycmVudFJvdXRlID0gbnVsbDtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgICBjaGlsZHJlblJvdXRlcy5mb3JFYWNoKHJvdXRlID0+IHtcclxuICAgICAgICAgIGlmIChyb3V0ZS5vdXRsZXQgPT09ICdwcmltYXJ5Jykge1xyXG4gICAgICAgICAgICBjb25zdCByb3V0ZVNuYXBzaG90ID0gcm91dGUuc25hcHNob3Q7XHJcbiAgICAgICAgICAgIHVybCArPSAnLycgKyByb3V0ZVNuYXBzaG90LnVybC5tYXAoc2VnbWVudCA9PiBzZWdtZW50LnBhdGgpLmpvaW4oJy8nKTtcclxuICAgICAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IHJvdXRlLnNuYXBzaG90LmRhdGEsXHJcbiAgICAgICAgICAgICAgdXJsOiAgIHVybFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY3VycmVudFJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gd2hpbGUgKGN1cnJlbnRSb3V0ZSk7XHJcblxyXG4gICAgICB0aGlzLl9icmVhZGNydW1icy5uZXh0KE9iamVjdC5hc3NpZ24oW10sIGJyZWFkY3J1bWJzKSk7XHJcblxyXG4gICAgICByZXR1cm4gYnJlYWRjcnVtYnM7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0ICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXBsYWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xyXG5pbXBvcnQgeyBBcHBCcmVhZGNydW1iU2VydmljZSB9IGZyb20gJy4vYXBwLWJyZWFkY3J1bWIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1icmVhZGNydW1iJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1icmVhZGNydW1iIFtuZ0Zvck9mXT1cImJyZWFkY3J1bWJzIHwgYXN5bmNcIiBsZXQtbGFzdCA9IGxhc3Q+XHJcbiAgICAgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbVwiXHJcbiAgICAgICAgICAqbmdJZj1cImJyZWFkY3J1bWIubGFiZWwudGl0bGUgJiYgKGJyZWFkY3J1bWIudXJsLnNsaWNlKC0xKSA9PSAnLycgfHwgbGFzdClcIlxyXG4gICAgICAgICAgW25nQ2xhc3NdPVwie2FjdGl2ZTogbGFzdH1cIj5cclxuICAgICAgICA8YSAqbmdJZj1cIiFsYXN0XCIgW3JvdXRlckxpbmtdPVwiYnJlYWRjcnVtYi51cmxcIj57e2JyZWFkY3J1bWIubGFiZWwudGl0bGV9fTwvYT5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImxhc3RcIiBbcm91dGVyTGlua109XCJicmVhZGNydW1iLnVybFwiPnt7YnJlYWRjcnVtYi5sYWJlbC50aXRsZX19PC9zcGFuPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBmaXhlZDogYm9vbGVhbjtcclxuICBwdWJsaWMgYnJlYWRjcnVtYnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBBcHBCcmVhZGNydW1iU2VydmljZSwgcHVibGljIGVsOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcclxuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcclxuICAgIHRoaXMuYnJlYWRjcnVtYnMgPSB0aGlzLnNlcnZpY2UuYnJlYWRjcnVtYnM7XHJcbiAgfVxyXG5cclxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5maXhlZCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnYnJlYWRjcnVtYi1maXhlZCcpOyB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuLy8gQXBwIEJyZWFkY3J1bWIgQ29tcG9uZW50XHJcbmltcG9ydCB7IEFwcEJyZWFkY3J1bWJTZXJ2aWNlIH0gZnJvbSAnLi9hcHAtYnJlYWRjcnVtYi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vYXBwLWJyZWFkY3J1bWIuY29tcG9uZW50JztcclxuXHJcbi8vIEBkeW5hbWljXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSBdLFxyXG4gIGV4cG9ydHM6IFsgQXBwQnJlYWRjcnVtYkNvbXBvbmVudCBdLFxyXG4gIGRlY2xhcmF0aW9uczogWyBBcHBCcmVhZGNydW1iQ29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcEJyZWFkY3J1bWJNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEFwcEJyZWFkY3J1bWJNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEFwcEJyZWFkY3J1bWJTZXJ2aWNlXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVwbGFjZSB9IGZyb20gJy4vLi4vc2hhcmVkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWZvb3RlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxmb290ZXIgY2xhc3M9XCJhcHAtZm9vdGVyXCI+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZm9vdGVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcEZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcclxuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcclxuICB9XHJcblxyXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmZpeGVkKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdmb290ZXItZml4ZWQnKTsgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1mb290ZXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUgXSxcclxuICBleHBvcnRzOiBbIEFwcEZvb3RlckNvbXBvbmVudCBdLFxyXG4gIGRlY2xhcmF0aW9uczogWyBBcHBGb290ZXJDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwRm9vdGVyTW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXBsYWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGhlYWRlciBjbGFzcz1cImFwcC1oZWFkZXIgbmF2YmFyXCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJtb2JpbGVTaWRlYmFyVG9nZ2xlciAhPSBmYWxzZVwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlciBkLWxnLW5vbmVcIiB0eXBlPVwiYnV0dG9uXCIgYXBwU2lkZWJhclRvZ2dsZXI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJuYXZiYXJCcmFuZCB8fCBuYXZiYXJCcmFuZEZ1bGwgfHwgbmF2YmFyQnJhbmRNaW5pbWl6ZWRcIj5cclxuICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICA8aW1nICpuZ0lmPVwibmF2YmFyQnJhbmRcIlxyXG4gICAgICAgICAgICAgICBbc3JjXT1cImltZ1NyYyhuYXZiYXJCcmFuZClcIlxyXG4gICAgICAgICAgICAgICBbYXR0ci53aWR0aF09XCJpbWdXaWR0aChuYXZiYXJCcmFuZClcIlxyXG4gICAgICAgICAgICAgICBbYXR0ci5oZWlnaHRdPVwiaW1nSGVpZ2h0KG5hdmJhckJyYW5kKVwiXHJcbiAgICAgICAgICAgICAgIFthdHRyLmFsdF09XCJpbWdBbHQobmF2YmFyQnJhbmQpXCJcclxuICAgICAgICAgICAgICAgY2xhc3M9XCJuYXZiYXItYnJhbmRcIj5cclxuICAgICAgICAgIDxpbWcgKm5nSWY9XCJuYXZiYXJCcmFuZEZ1bGxcIlxyXG4gICAgICAgICAgICAgICBbc3JjXT1cImltZ1NyYyhuYXZiYXJCcmFuZEZ1bGwpXCJcclxuICAgICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwiaW1nV2lkdGgobmF2YmFyQnJhbmRGdWxsKVwiXHJcbiAgICAgICAgICAgICAgIFthdHRyLmhlaWdodF09XCJpbWdIZWlnaHQobmF2YmFyQnJhbmRGdWxsKVwiXHJcbiAgICAgICAgICAgICAgIFthdHRyLmFsdF09XCJpbWdBbHQobmF2YmFyQnJhbmRGdWxsKVwiXHJcbiAgICAgICAgICAgICAgIGNsYXNzPVwibmF2YmFyLWJyYW5kLWZ1bGxcIj5cclxuICAgICAgICAgIDxpbWcgKm5nSWY9XCJuYXZiYXJCcmFuZE1pbmltaXplZFwiXHJcbiAgICAgICAgICAgICAgIFtzcmNdPVwiaW1nU3JjKG5hdmJhckJyYW5kTWluaW1pemVkKVwiXHJcbiAgICAgICAgICAgICAgIFthdHRyLndpZHRoXT1cImltZ1dpZHRoKG5hdmJhckJyYW5kTWluaW1pemVkKVwiXHJcbiAgICAgICAgICAgICAgIFthdHRyLmhlaWdodF09XCJpbWdIZWlnaHQobmF2YmFyQnJhbmRNaW5pbWl6ZWQpXCJcclxuICAgICAgICAgICAgICAgW2F0dHIuYWx0XT1cImltZ0FsdChuYXZiYXJCcmFuZE1pbmltaXplZClcIlxyXG4gICAgICAgICAgICAgICBjbGFzcz1cIm5hdmJhci1icmFuZC1taW5pbWl6ZWRcIj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJzaWRlYmFyVG9nZ2xlciAhPSBmYWxzZVwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlciBkLW1kLWRvd24tbm9uZVwiIHR5cGU9XCJidXR0b25cIiBbYXBwU2lkZWJhclRvZ2dsZXJdPVwic2lkZWJhclRvZ2dsZXJcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiYXNpZGVNZW51VG9nZ2xlciAhPSBmYWxzZVwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlciBkLW1kLWRvd24tbm9uZVwiIHR5cGU9XCJidXR0b25cIiBbYXBwQXNpZGVNZW51VG9nZ2xlcl09XCJhc2lkZU1lbnVUb2dnbGVyXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJtb2JpbGVBc2lkZU1lbnVUb2dnbGVyICE9IGZhbHNlXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGQtbGctbm9uZVwiIHR5cGU9XCJidXR0b25cIiBhcHBBc2lkZU1lbnVUb2dnbGVyPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kOiBhbnk7XHJcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRGdWxsOiBhbnk7XHJcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRNaW5pbWl6ZWQ6IGFueTtcclxuXHJcbiAgQElucHV0KCkgc2lkZWJhclRvZ2dsZXI6IGFueTtcclxuICBASW5wdXQoKSBtb2JpbGVTaWRlYmFyVG9nZ2xlcjogYW55O1xyXG5cclxuICBASW5wdXQoKSBhc2lkZU1lbnVUb2dnbGVyOiBhbnk7XHJcbiAgQElucHV0KCkgbW9iaWxlQXNpZGVNZW51VG9nZ2xlcjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIFJlcGxhY2UodGhpcy5lbCk7XHJcbiAgICB0aGlzLmlzRml4ZWQodGhpcy5maXhlZCk7XHJcbiAgfVxyXG5cclxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5maXhlZCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWZpeGVkJyk7IH1cclxuICB9XHJcblxyXG4gIGltZ1NyYyhicmFuZDogYW55KTogdm9pZCB7XHJcbiAgICByZXR1cm4gYnJhbmQuc3JjID8gYnJhbmQuc3JjIDogJyc7XHJcbiAgfVxyXG5cclxuICBpbWdXaWR0aChicmFuZDogYW55KTogdm9pZCB7XHJcbiAgICByZXR1cm4gYnJhbmQud2lkdGggPyBicmFuZC53aWR0aCA6ICdhdXRvJztcclxuICB9XHJcblxyXG4gIGltZ0hlaWdodChicmFuZDogYW55KTogdm9pZCB7XHJcbiAgICByZXR1cm4gYnJhbmQuaGVpZ2h0ID8gYnJhbmQuaGVpZ2h0IDogJ2F1dG8nO1xyXG4gIH1cclxuXHJcbiAgaW1nQWx0KGJyYW5kOiBhbnkpOiB2b2lkIHtcclxuICAgIHJldHVybiBicmFuZC5hbHQgPyBicmFuZC5hbHQgOiAnJztcclxuICB9XHJcblxyXG4gIGJyZWFrcG9pbnQoYnJlYWtwb2ludDogYW55KTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhicmVha3BvaW50KTtcclxuICAgIHJldHVybiBicmVha3BvaW50ID8gYnJlYWtwb2ludCA6ICcnO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4vLi4vc2hhcmVkL2xheW91dC9sYXlvdXQubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IEFwcEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLWhlYWRlci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBMYXlvdXRNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEFwcEhlYWRlckNvbXBvbmVudCxcclxuICAgIExheW91dE1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBIZWFkZXJDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBIZWFkZXJNb2R1bGUge31cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlcGxhY2UgfSBmcm9tICcuLy4uL3NoYXJlZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLWZvb3RlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWZvb3RlclwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlcGxhY2UgfSBmcm9tICcuLy4uL3NoYXJlZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLWZvcm0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8Zm9ybSBjbGFzcz1cInNpZGViYXItZm9ybVwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Zvcm0+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhckZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVwbGFjZSB9IGZyb20gJy4vLi4vc2hhcmVkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItaGVhZGVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInNpZGViYXItaGVhZGVyXCI+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVwbGFjZSB9IGZyb20gJy4vLi4vc2hhcmVkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbWluaW1pemVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInNpZGViYXItbWluaW1pemVyXCIgdHlwZT1cImJ1dHRvblwiIGFwcFNpZGViYXJNaW5pbWl6ZXIgYXBwQnJhbmRNaW5pbWl6ZXI+PC9idXR0b24+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIFJlcGxhY2UodGhpcy5lbCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgc2lkZWJhckNzc0NsYXNzZXMgfSBmcm9tICcuLy4uL3NoYXJlZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjb21wYWN0OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGRpc3BsYXk6IGFueTtcclxuICBASW5wdXQoKSBmaXhlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBtaW5pbWl6ZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgb2ZmQ2FudmFzOiBib29sZWFuO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpZGViYXInKSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5kaXNwbGF5QnJlYWtwb2ludCh0aGlzLmRpc3BsYXkpO1xyXG4gICAgdGhpcy5pc0NvbXBhY3QodGhpcy5jb21wYWN0KTtcclxuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcclxuICAgIHRoaXMuaXNNaW5pbWl6ZWQodGhpcy5taW5pbWl6ZWQpO1xyXG4gICAgdGhpcy5pc09mZkNhbnZhcyh0aGlzLm9mZkNhbnZhcyk7XHJcbiAgfVxyXG5cclxuICBpc0NvbXBhY3QoY29tcGFjdDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY29tcGFjdCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1jb21wYWN0Jyk7IH1cclxuICB9XHJcblxyXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmZpeGVkKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWZpeGVkJyk7IH1cclxuICB9XHJcblxyXG4gIGlzTWluaW1pemVkKG1pbmltaXplZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubWluaW1pemVkKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLW1pbmltaXplZCcpOyB9XHJcbiAgfVxyXG5cclxuICBpc09mZkNhbnZhcyhvZmZDYW52YXM6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9mZkNhbnZhcykgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1vZmYtY2FudmFzJyk7IH1cclxuICB9XHJcblxyXG4gIGZpeGVkUG9zaXRpb24oZml4ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmZpeGVkKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWZpeGVkJyk7IH1cclxuICB9XHJcblxyXG4gIGRpc3BsYXlCcmVha3BvaW50KGRpc3BsYXk6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzcGxheSAhPT0gZmFsc2UgKSB7XHJcbiAgICAgIGxldCBjc3NDbGFzcztcclxuICAgICAgdGhpcy5kaXNwbGF5ID8gY3NzQ2xhc3MgPSBgc2lkZWJhci0ke3RoaXMuZGlzcGxheX0tc2hvd2AgOiBjc3NDbGFzcyA9IHNpZGViYXJDc3NDbGFzc2VzWzBdO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlcGxhY2UgfSBmcm9tICcuLy4uL3NoYXJlZCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thcHBOYXZEcm9wZG93bl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZEcm9wZG93bkRpcmVjdGl2ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiogQWxsb3dzIHRoZSBkcm9wZG93biB0byBiZSB0b2dnbGVkIHZpYSBjbGljay5cclxuKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwTmF2RHJvcGRvd25Ub2dnbGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZHJvcGRvd246IE5hdkRyb3Bkb3duRGlyZWN0aXZlKSB7fVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmRyb3Bkb3duLnRvZ2dsZSgpO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8dWwgY2xhc3M9XCJuYXZcIj5cclxuICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1uYXZpdGVtIFtuZ0Zvck9mXT1cIm5hdkl0ZW1zXCI+XHJcbiAgICAgICAgPGxpICpuZ0lmPVwiaXNEaXZpZGVyKG5hdml0ZW0pXCIgY2xhc3M9XCJuYXYtZGl2aWRlclwiPjwvbGk+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImlzVGl0bGUobmF2aXRlbSlcIj5cclxuICAgICAgICAgIDxhcHAtc2lkZWJhci1uYXYtdGl0bGUgW3RpdGxlXT0nbmF2aXRlbSc+PC9hcHAtc2lkZWJhci1uYXYtdGl0bGU+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiIWlzRGl2aWRlcihuYXZpdGVtKSYmIWlzVGl0bGUobmF2aXRlbSlcIj5cclxuICAgICAgICAgIDxhcHAtc2lkZWJhci1uYXYtaXRlbSBbaXRlbV09J25hdml0ZW0nPjwvYXBwLXNpZGViYXItbmF2LWl0ZW0+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvdWw+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbmF2SXRlbXM6IGFueTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaWRlYmFyLW5hdicpIHRydWU7XHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSByb2xlID0gJ25hdic7XHJcblxyXG4gIHB1YmxpYyBpc0RpdmlkZXIoaXRlbSkge1xyXG4gICAgcmV0dXJuIGl0ZW0uZGl2aWRlciA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1RpdGxlKGl0ZW0pIHtcclxuICAgIHJldHVybiBpdGVtLnRpdGxlID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG5cclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWl0ZW0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bGkgKm5nSWY9XCIhaXNEcm9wZG93bigpOyBlbHNlIGRyb3Bkb3duXCIgW25nQ2xhc3NdPVwiaGFzQ2xhc3MoKSA/ICduYXYtaXRlbSAnICsgaXRlbS5jbGFzcyA6ICduYXYtaXRlbSdcIj5cclxuICAgICAgPGFwcC1zaWRlYmFyLW5hdi1saW5rIFtsaW5rXT0naXRlbSc+PC9hcHAtc2lkZWJhci1uYXYtbGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8bmctdGVtcGxhdGUgI2Ryb3Bkb3duPlxyXG4gICAgICA8bGkgW25nQ2xhc3NdPVwiaGFzQ2xhc3MoKSA/ICduYXYtaXRlbSBuYXYtZHJvcGRvd24gJyArIGl0ZW0uY2xhc3MgOiAnbmF2LWl0ZW0gbmF2LWRyb3Bkb3duJ1wiXHJcbiAgICAgICAgICBbY2xhc3Mub3Blbl09XCJpc0FjdGl2ZSgpXCJcclxuICAgICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJvcGVuXCJcclxuICAgICAgICAgIGFwcE5hdkRyb3Bkb3duPlxyXG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtZHJvcGRvd24gW2xpbmtdPSdpdGVtJz48L2FwcC1zaWRlYmFyLW5hdi1kcm9wZG93bj5cclxuICAgICAgPC9saT5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaXRlbTogYW55O1xyXG5cclxuICBwdWJsaWMgaGFzQ2xhc3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtLmNsYXNzID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzRHJvcGRvd24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtLmNoaWxkcmVuID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRoaXNVcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtLnVybDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0FjdGl2ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnJvdXRlci5pc0FjdGl2ZSh0aGlzLnRoaXNVcmwoKSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWxpbmsnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YSAqbmdJZj1cIiFpc0V4dGVybmFsTGluaygpOyBlbHNlIGV4dGVybmFsXCJcclxuICAgICAgW25nQ2xhc3NdPVwiaGFzVmFyaWFudCgpID8gJ25hdi1saW5rIG5hdi1saW5rLScgKyBsaW5rLnZhcmlhbnQgOiAnbmF2LWxpbmsnXCJcclxuICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiXHJcbiAgICAgIFtyb3V0ZXJMaW5rXT1cIltsaW5rLnVybF1cIlxyXG4gICAgICAoY2xpY2spPVwiaGlkZU1vYmlsZSgpXCI+XHJcbiAgICAgIDxpICpuZ0lmPVwiaXNJY29uKClcIiBjbGFzcz1cIm5hdi1pY29uIHt7IGxpbmsuaWNvbiB9fVwiPjwvaT5cclxuICAgICAge3sgbGluay5uYW1lIH19XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwiaXNCYWRnZSgpXCIgW25nQ2xhc3NdPVwiJ2JhZGdlIGJhZGdlLScgKyBsaW5rLmJhZGdlLnZhcmlhbnRcIj57eyBsaW5rLmJhZGdlLnRleHQgfX08L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICA8bmctdGVtcGxhdGUgI2V4dGVybmFsPlxyXG4gICAgICA8YSBbbmdDbGFzc109XCJoYXNWYXJpYW50KCkgPyAnbmF2LWxpbmsgbmF2LWxpbmstJyArIGxpbmsudmFyaWFudCA6ICduYXYtbGluaydcIiBocmVmPVwie3tsaW5rLnVybH19XCI+XHJcbiAgICAgICAgPGkgKm5nSWY9XCJpc0ljb24oKVwiIGNsYXNzPVwibmF2LWljb24ge3sgbGluay5pY29uIH19XCI+PC9pPlxyXG4gICAgICAgIHt7IGxpbmsubmFtZSB9fVxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwiaXNCYWRnZSgpXCIgW25nQ2xhc3NdPVwiJ2JhZGdlIGJhZGdlLScgKyBsaW5rLmJhZGdlLnZhcmlhbnRcIj57eyBsaW5rLmJhZGdlLnRleHQgfX08L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGxpbms6IGFueTtcclxuXHJcbiAgcHVibGljIGhhc1ZhcmlhbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5saW5rLnZhcmlhbnQgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNCYWRnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmxpbmsuYmFkZ2UgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNFeHRlcm5hbExpbmsoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5saW5rLnVybC5zdWJzdHJpbmcoMCwgNCkgPT09ICdodHRwJyA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0ljb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5saW5rLmljb24gPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGlkZU1vYmlsZSgpIHtcclxuICAgIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1zaG93JykpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdzaWRlYmFyLXNob3cnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGEgY2xhc3M9XCJuYXYtbGluayBuYXYtZHJvcGRvd24tdG9nZ2xlXCIgYXBwTmF2RHJvcGRvd25Ub2dnbGU+XHJcbiAgICAgIDxpICpuZ0lmPVwiaXNJY29uKClcIiBjbGFzcz1cIm5hdi1pY29uIHt7IGxpbmsuaWNvbiB9fVwiPjwvaT5cclxuICAgICAge3sgbGluay5uYW1lIH19XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwiaXNCYWRnZSgpXCIgW25nQ2xhc3NdPVwiJ2JhZGdlIGJhZGdlLScgKyBsaW5rLmJhZGdlLnZhcmlhbnRcIj57eyBsaW5rLmJhZGdlLnRleHQgfX08L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgICA8dWwgY2xhc3M9XCJuYXYtZHJvcGRvd24taXRlbXNcIj5cclxuICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1jaGlsZCBbbmdGb3JPZl09XCJsaW5rLmNoaWxkcmVuXCI+XHJcbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1pdGVtIFtpdGVtXT0nY2hpbGQnPjwvYXBwLXNpZGViYXItbmF2LWl0ZW0+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L3VsPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbJy5uYXYtZHJvcGRvd24tdG9nZ2xlIHsgY3Vyc29yOiBwb2ludGVyOyB9J11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgbGluazogYW55O1xyXG5cclxuICBwdWJsaWMgaXNCYWRnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmxpbmsuYmFkZ2UgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNJY29uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubGluay5pY29uID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtdGl0bGUnLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB0aXRsZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3QgbGkgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBuYW1lID0gdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KHRoaXMudGl0bGUubmFtZSk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhsaSwgJ25hdi10aXRsZScpO1xyXG5cclxuICAgIGlmICggdGhpcy50aXRsZS5jbGFzcyApIHtcclxuICAgICAgY29uc3QgY2xhc3NlcyA9IHRoaXMudGl0bGUuY2xhc3M7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MobGksIGNsYXNzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICggdGhpcy50aXRsZS53cmFwcGVyICkge1xyXG4gICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KHRoaXMudGl0bGUud3JhcHBlci5lbGVtZW50KTtcclxuXHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQod3JhcHBlciwgbmFtZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQobGksIHdyYXBwZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChsaSwgbmFtZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKG5hdGl2ZUVsZW1lbnQsIGxpKTtcclxuICAgIFJlcGxhY2UodGhpcy5lbCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi8uLi9zaGFyZWQvbGF5b3V0L2xheW91dC5tb2R1bGUnO1xyXG5cclxuLy8gQXBwIFNpZGViYXIgQ29tcG9uZW50XHJcbmltcG9ydCB7IEFwcFNpZGViYXJGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLWZvb3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBTaWRlYmFyRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBTaWRlYmFySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItbWluaW1pemVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcFNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7XHJcbiAgQXBwU2lkZWJhck5hdkNvbXBvbmVudCxcclxuICBBcHBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQsXHJcbiAgQXBwU2lkZWJhck5hdkl0ZW1Db21wb25lbnQsXHJcbiAgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXHJcbiAgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50LFxyXG4gIE5hdkRyb3Bkb3duRGlyZWN0aXZlLFxyXG4gIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlXHJcbn0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgTGF5b3V0TW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBBcHBTaWRlYmFyRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhckZvcm1Db21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFySGVhZGVyQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTmF2Q29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdkl0ZW1Db21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZUaXRsZUNvbXBvbmVudCxcclxuICAgIE5hdkRyb3Bkb3duRGlyZWN0aXZlLFxyXG4gICAgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsXHJcbiAgICBMYXlvdXRNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXBwU2lkZWJhckZvb3RlckNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJGb3JtQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhckhlYWRlckNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhckNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZMaW5rQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50LFxyXG4gICAgTmF2RHJvcGRvd25EaXJlY3RpdmUsXHJcbiAgICBOYXZEcm9wZG93blRvZ2dsZURpcmVjdGl2ZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJNb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6WyJEaXJlY3RpdmUiLCJJbnB1dCIsIkhvc3RMaXN0ZW5lciIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiQ29tcG9uZW50IiwiRWxlbWVudFJlZiIsInJvdXRlciIsIkJlaGF2aW9yU3ViamVjdCIsImZpbHRlciIsIk5hdmlnYXRpb25FbmQiLCJJbmplY3RhYmxlIiwiUm91dGVyIiwiQWN0aXZhdGVkUm91dGUiLCJSb3V0ZXJN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