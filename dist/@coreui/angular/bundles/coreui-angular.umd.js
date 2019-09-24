(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@coreui/angular', ['exports', '@angular/core', '@angular/common', '@angular/router', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.coreui = global.coreui || {}, global.coreui.angular = {}), global.ng.core, global.ng.common, global.ng.router, global.rxjs, global.rxjs.operators));
}(this, function (exports, core, common, router, rxjs, operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var RemoveClasses = (/**
     * @param {?} NewClassNames
     * @return {?}
     */
    function (NewClassNames) {
        /** @type {?} */
        var MatchClasses = NewClassNames.map((/**
         * @param {?} Class
         * @return {?}
         */
        function (Class) { return document.body.classList.contains(Class); }));
        return MatchClasses.indexOf(true) !== -1;
    });
    var ɵ0 = RemoveClasses;
    /** @type {?} */
    var ToggleClasses = (/**
     * @param {?} Toggle
     * @param {?} ClassNames
     * @return {?}
     */
    function (Toggle, ClassNames) {
        /** @type {?} */
        var Level = ClassNames.indexOf(Toggle);
        /** @type {?} */
        var NewClassNames = ClassNames.slice(0, Level + 1);
        if (RemoveClasses(NewClassNames)) {
            NewClassNames.map((/**
             * @param {?} Class
             * @return {?}
             */
            function (Class) { return document.body.classList.remove(Class); }));
        }
        else {
            document.body.classList.add(Toggle);
        }
    });
    var ClassToggler = /** @class */ (function () {
        function ClassToggler(document, renderer) {
            this.document = document;
            this.renderer = renderer;
        }
        /**
         * @param {?} NewClassNames
         * @return {?}
         */
        ClassToggler.prototype.removeClasses = /**
         * @param {?} NewClassNames
         * @return {?}
         */
        function (NewClassNames) {
            var _this = this;
            /** @type {?} */
            var MatchClasses = NewClassNames.map((/**
             * @param {?} Class
             * @return {?}
             */
            function (Class) { return _this.document.body.classList.contains(Class); }));
            return MatchClasses.indexOf(true) !== -1;
        };
        /**
         * @param {?} Toggle
         * @param {?} ClassNames
         * @return {?}
         */
        ClassToggler.prototype.toggleClasses = /**
         * @param {?} Toggle
         * @param {?} ClassNames
         * @return {?}
         */
        function (Toggle, ClassNames) {
            var _this = this;
            /** @type {?} */
            var Level = ClassNames.indexOf(Toggle);
            /** @type {?} */
            var NewClassNames = ClassNames.slice(0, Level + 1);
            if (this.removeClasses(NewClassNames)) {
                NewClassNames.map((/**
                 * @param {?} Class
                 * @return {?}
                 */
                function (Class) { return _this.renderer.removeClass(_this.document.body, Class); }));
            }
            else {
                this.renderer.addClass(this.document.body, Toggle);
            }
        };
        ClassToggler.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ClassToggler.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 }
        ]; };
        return ClassToggler;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ClassToggler.prototype.document;
        /**
         * @type {?}
         * @private
         */
        ClassToggler.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Allows the sidebar to be toggled via click.
     */
    var SidebarToggleDirective = /** @class */ (function () {
        function SidebarToggleDirective(classToggler) {
            this.classToggler = classToggler;
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
            var cssClass = this.bp ? "sidebar-" + this.bp + "-show" : sidebarCssClasses[0];
            this.classToggler.toggleClasses(cssClass, sidebarCssClasses);
        };
        SidebarToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[appSidebarToggler]',
                        providers: [ClassToggler]
                    },] }
        ];
        /** @nocollapse */
        SidebarToggleDirective.ctorParameters = function () { return [
            { type: ClassToggler }
        ]; };
        SidebarToggleDirective.propDecorators = {
            breakpoint: [{ type: core.Input, args: ['appSidebarToggler',] }],
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return SidebarToggleDirective;
    }());
    if (false) {
        /** @type {?} */
        SidebarToggleDirective.prototype.breakpoint;
        /** @type {?} */
        SidebarToggleDirective.prototype.bp;
        /**
         * @type {?}
         * @private
         */
        SidebarToggleDirective.prototype.classToggler;
    }
    var SidebarMinimizeDirective = /** @class */ (function () {
        function SidebarMinimizeDirective(document, renderer) {
            this.document = document;
            this.renderer = renderer;
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
            /** @type {?} */
            var body = this.document.body;
            body.classList.contains('sidebar-minimized') ?
                this.renderer.removeClass(body, 'sidebar-minimized') :
                this.renderer.addClass(body, 'sidebar-minimized');
        };
        SidebarMinimizeDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[appSidebarMinimizer]'
                    },] }
        ];
        /** @nocollapse */
        SidebarMinimizeDirective.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 }
        ]; };
        SidebarMinimizeDirective.propDecorators = {
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return SidebarMinimizeDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SidebarMinimizeDirective.prototype.document;
        /**
         * @type {?}
         * @private
         */
        SidebarMinimizeDirective.prototype.renderer;
    }
    var MobileSidebarToggleDirective = /** @class */ (function () {
        function MobileSidebarToggleDirective(document, renderer) {
            this.document = document;
            this.renderer = renderer;
        }
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
            /** @type {?} */
            var body = this.document.body;
            body.classList.contains('sidebar-show') ?
                this.renderer.removeClass(body, 'sidebar-show') :
                this.renderer.addClass(body, 'sidebar-show');
        };
        MobileSidebarToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[appMobileSidebarToggler]'
                    },] }
        ];
        /** @nocollapse */
        MobileSidebarToggleDirective.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 }
        ]; };
        MobileSidebarToggleDirective.propDecorators = {
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return MobileSidebarToggleDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        MobileSidebarToggleDirective.prototype.document;
        /**
         * @type {?}
         * @private
         */
        MobileSidebarToggleDirective.prototype.renderer;
    }
    /**
     * Allows the off-canvas sidebar to be closed via click.
     */
    var SidebarOffCanvasCloseDirective = /** @class */ (function () {
        function SidebarOffCanvasCloseDirective(document, renderer) {
            this.document = document;
            this.renderer = renderer;
        }
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
            /** @type {?} */
            var body = this.document.body;
            if (body.classList.contains('sidebar-off-canvas')) {
                body.classList.contains('sidebar-show') ?
                    this.renderer.removeClass(body, 'sidebar-show') :
                    this.renderer.addClass(body, 'sidebar-show');
            }
        };
        SidebarOffCanvasCloseDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[appSidebarClose]'
                    },] }
        ];
        /** @nocollapse */
        SidebarOffCanvasCloseDirective.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 }
        ]; };
        SidebarOffCanvasCloseDirective.propDecorators = {
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return SidebarOffCanvasCloseDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SidebarOffCanvasCloseDirective.prototype.document;
        /**
         * @type {?}
         * @private
         */
        SidebarOffCanvasCloseDirective.prototype.renderer;
    }
    var BrandMinimizeDirective = /** @class */ (function () {
        function BrandMinimizeDirective(document, renderer) {
            this.document = document;
            this.renderer = renderer;
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
            /** @type {?} */
            var body = this.document.body;
            body.classList.contains('brand-minimized') ?
                this.renderer.removeClass(body, 'brand-minimized') :
                this.renderer.addClass(body, 'brand-minimized');
        };
        BrandMinimizeDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[appBrandMinimizer]'
                    },] }
        ];
        /** @nocollapse */
        BrandMinimizeDirective.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 }
        ]; };
        BrandMinimizeDirective.propDecorators = {
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return BrandMinimizeDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        BrandMinimizeDirective.prototype.document;
        /**
         * @type {?}
         * @private
         */
        BrandMinimizeDirective.prototype.renderer;
    }
    /**
     * Allows the aside to be toggled via click.
     */
    var AsideToggleDirective = /** @class */ (function () {
        function AsideToggleDirective(classToggler) {
            this.classToggler = classToggler;
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
            var cssClass = this.bp ? "aside-menu-" + this.bp + "-show" : asideMenuCssClasses[0];
            this.classToggler.toggleClasses(cssClass, asideMenuCssClasses);
        };
        AsideToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[appAsideMenuToggler]',
                        providers: [ClassToggler]
                    },] }
        ];
        /** @nocollapse */
        AsideToggleDirective.ctorParameters = function () { return [
            { type: ClassToggler }
        ]; };
        AsideToggleDirective.propDecorators = {
            breakpoint: [{ type: core.Input, args: ['appAsideMenuToggler',] }],
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return AsideToggleDirective;
    }());
    if (false) {
        /** @type {?} */
        AsideToggleDirective.prototype.breakpoint;
        /** @type {?} */
        AsideToggleDirective.prototype.bp;
        /**
         * @type {?}
         * @private
         */
        AsideToggleDirective.prototype.classToggler;
    }
    var HtmlAttributesDirective = /** @class */ (function () {
        function HtmlAttributesDirective(renderer, el) {
            this.renderer = renderer;
            this.el = el;
        }
        /**
         * @return {?}
         */
        HtmlAttributesDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
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
        /**
         * @private
         * @param {?} styles
         * @return {?}
         */
        HtmlAttributesDirective.prototype.setStyle = /**
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
        HtmlAttributesDirective.prototype.addClass = /**
         * @private
         * @param {?} classes
         * @return {?}
         */
        function (classes) {
            var _this = this;
            /** @type {?} */
            var classArray = (Array.isArray(classes) ? classes : classes.split(' '));
            classArray.filter((/**
             * @param {?} element
             * @return {?}
             */
            function (element) { return element.length > 0; })).forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                _this.renderer.addClass(_this.el.nativeElement, element);
            }));
        };
        /**
         * @private
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        HtmlAttributesDirective.prototype.setAttrib = /**
         * @private
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        function (key, value) {
            value !== null ?
                this.renderer.setAttribute(this.el.nativeElement, key, value) :
                this.renderer.removeAttribute(this.el.nativeElement, key);
        };
        HtmlAttributesDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[appHtmlAttr]'
                    },] }
        ];
        /** @nocollapse */
        HtmlAttributesDirective.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        HtmlAttributesDirective.propDecorators = {
            appHtmlAttr: [{ type: core.Input }]
        };
        return HtmlAttributesDirective;
    }());
    if (false) {
        /** @type {?} */
        HtmlAttributesDirective.prototype.appHtmlAttr;
        /**
         * @type {?}
         * @private
         */
        HtmlAttributesDirective.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        HtmlAttributesDirective.prototype.el;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LayoutModule = /** @class */ (function () {
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
                    },] }
        ];
        return LayoutModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppAsideComponent = /** @class */ (function () {
        function AppAsideComponent(document, renderer, hostElement) {
            this.document = document;
            this.renderer = renderer;
            this.hostElement = hostElement;
            this.fixedClass = 'aside-menu-fixed';
            renderer.addClass(hostElement.nativeElement, 'aside-menu');
        }
        /**
         * @return {?}
         */
        AppAsideComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
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
            this.renderer.removeClass(this.document.body, this.fixedClass);
        };
        /**
         * @param {?=} fixed
         * @return {?}
         */
        AppAsideComponent.prototype.isFixed = /**
         * @param {?=} fixed
         * @return {?}
         */
        function (fixed) {
            if (fixed === void 0) { fixed = this.fixed; }
            if (fixed) {
                this.renderer.addClass(this.document.body, this.fixedClass);
            }
        };
        /**
         * @param {?=} offCanvas
         * @return {?}
         */
        AppAsideComponent.prototype.isOffCanvas = /**
         * @param {?=} offCanvas
         * @return {?}
         */
        function (offCanvas) {
            if (offCanvas === void 0) { offCanvas = this.offCanvas; }
            if (offCanvas) {
                this.renderer.addClass(this.document.body, 'aside-menu-off-canvas');
            }
        };
        /**
         * @param {?=} display
         * @return {?}
         */
        AppAsideComponent.prototype.displayBreakpoint = /**
         * @param {?=} display
         * @return {?}
         */
        function (display) {
            if (display === void 0) { display = this.display; }
            if (display !== false) {
                /** @type {?} */
                var cssClass = this.display ? "aside-menu-" + this.display + "-show" : asideMenuCssClasses[0];
                this.renderer.addClass(this.document.body, cssClass);
            }
        };
        AppAsideComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-aside, cui-aside',
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        AppAsideComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        AppAsideComponent.propDecorators = {
            display: [{ type: core.Input }],
            fixed: [{ type: core.Input }],
            offCanvas: [{ type: core.Input }]
        };
        return AppAsideComponent;
    }());
    if (false) {
        /** @type {?} */
        AppAsideComponent.prototype.display;
        /** @type {?} */
        AppAsideComponent.prototype.fixed;
        /** @type {?} */
        AppAsideComponent.prototype.offCanvas;
        /**
         * @type {?}
         * @private
         */
        AppAsideComponent.prototype.fixedClass;
        /**
         * @type {?}
         * @private
         */
        AppAsideComponent.prototype.document;
        /**
         * @type {?}
         * @private
         */
        AppAsideComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        AppAsideComponent.prototype.hostElement;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppAsideModule = /** @class */ (function () {
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
                    },] }
        ];
        return AppAsideModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppBreadcrumbService = /** @class */ (function () {
        function AppBreadcrumbService(router$1, route) {
            var _this = this;
            this.router = router$1;
            this.route = route;
            this._breadcrumbs = new rxjs.BehaviorSubject(new Array());
            this.breadcrumbs = this._breadcrumbs.asObservable();
            this.router.events.pipe(operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event instanceof router.NavigationEnd; }))).subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
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
                    childrenRoutes.forEach((/**
                     * @param {?} route
                     * @return {?}
                     */
                    function (route) {
                        if (route.outlet === 'primary') {
                            /** @type {?} */
                            var routeSnapshot = route.snapshot;
                            url += '/' + routeSnapshot.url.map((/**
                             * @param {?} segment
                             * @return {?}
                             */
                            function (segment) { return segment.path; })).join('/');
                            breadcrumbs.push({
                                label: route.snapshot.data,
                                url: url
                            });
                            currentRoute = route;
                        }
                    }));
                } while (currentRoute);
                _this._breadcrumbs.next(Object.assign([], breadcrumbs));
                return breadcrumbs;
            }));
        }
        AppBreadcrumbService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AppBreadcrumbService.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute }
        ]; };
        return AppBreadcrumbService;
    }());
    if (false) {
        /** @type {?} */
        AppBreadcrumbService.prototype.breadcrumbs;
        /**
         * @type {?}
         * @private
         */
        AppBreadcrumbService.prototype._breadcrumbs;
        /**
         * @type {?}
         * @private
         */
        AppBreadcrumbService.prototype.router;
        /**
         * @type {?}
         * @private
         */
        AppBreadcrumbService.prototype.route;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppBreadcrumbComponent = /** @class */ (function () {
        function AppBreadcrumbComponent(document, renderer, service, el) {
            this.document = document;
            this.renderer = renderer;
            this.service = service;
            this.el = el;
            this.fixedClass = 'breadcrumb-fixed';
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
            this.renderer.removeClass(this.document.body, this.fixedClass);
        };
        /**
         * @param {?=} fixed
         * @return {?}
         */
        AppBreadcrumbComponent.prototype.isFixed = /**
         * @param {?=} fixed
         * @return {?}
         */
        function (fixed) {
            if (fixed === void 0) { fixed = this.fixed; }
            if (fixed) {
                this.renderer.addClass(this.document.body, this.fixedClass);
            }
        };
        AppBreadcrumbComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-breadcrumb',
                        template: "\n    <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last = last>\n      <li class=\"breadcrumb-item\"\n          *ngIf=\"breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)\"\n          [ngClass]=\"{active: last}\">\n        <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n        <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n      </li>\n    </ng-template>\n  "
                    }] }
        ];
        /** @nocollapse */
        AppBreadcrumbComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: AppBreadcrumbService },
            { type: core.ElementRef }
        ]; };
        AppBreadcrumbComponent.propDecorators = {
            fixed: [{ type: core.Input }]
        };
        return AppBreadcrumbComponent;
    }());
    if (false) {
        /** @type {?} */
        AppBreadcrumbComponent.prototype.fixed;
        /** @type {?} */
        AppBreadcrumbComponent.prototype.breadcrumbs;
        /**
         * @type {?}
         * @private
         */
        AppBreadcrumbComponent.prototype.fixedClass;
        /**
         * @type {?}
         * @private
         */
        AppBreadcrumbComponent.prototype.document;
        /**
         * @type {?}
         * @private
         */
        AppBreadcrumbComponent.prototype.renderer;
        /** @type {?} */
        AppBreadcrumbComponent.prototype.service;
        /** @type {?} */
        AppBreadcrumbComponent.prototype.el;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CuiBreadcrumbComponent = /** @class */ (function () {
        function CuiBreadcrumbComponent(document, renderer, service) {
            this.document = document;
            this.renderer = renderer;
            this.service = service;
            this.fixedClass = 'breadcrumb-fixed';
        }
        /**
         * @return {?}
         */
        CuiBreadcrumbComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.isFixed(this.fixed);
            this.breadcrumbs = this.service.breadcrumbs;
        };
        /**
         * @return {?}
         */
        CuiBreadcrumbComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.renderer.removeClass(this.document.body, this.fixedClass);
        };
        /**
         * @param {?=} fixed
         * @return {?}
         */
        CuiBreadcrumbComponent.prototype.isFixed = /**
         * @param {?=} fixed
         * @return {?}
         */
        function (fixed) {
            if (fixed === void 0) { fixed = this.fixed; }
            if (fixed) {
                this.renderer.addClass(this.document.body, this.fixedClass);
            }
        };
        CuiBreadcrumbComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'cui-breadcrumb',
                        template: "<ol class=\"breadcrumb\">\r\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last = last>\r\n    <li class=\"breadcrumb-item\"\r\n        *ngIf=\"breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)\"\r\n        [ngClass]=\"{active: last}\">\r\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\r\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\r\n    </li>\r\n  </ng-template>\r\n  <ng-content></ng-content>\r\n</ol>\r\n"
                    }] }
        ];
        /** @nocollapse */
        CuiBreadcrumbComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: AppBreadcrumbService }
        ]; };
        CuiBreadcrumbComponent.propDecorators = {
            fixed: [{ type: core.Input }]
        };
        return CuiBreadcrumbComponent;
    }());
    if (false) {
        /** @type {?} */
        CuiBreadcrumbComponent.prototype.fixed;
        /** @type {?} */
        CuiBreadcrumbComponent.prototype.breadcrumbs;
        /**
         * @type {?}
         * @private
         */
        CuiBreadcrumbComponent.prototype.fixedClass;
        /**
         * @type {?}
         * @private
         */
        CuiBreadcrumbComponent.prototype.document;
        /**
         * @type {?}
         * @private
         */
        CuiBreadcrumbComponent.prototype.renderer;
        /** @type {?} */
        CuiBreadcrumbComponent.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, router.RouterModule],
                        exports: [AppBreadcrumbComponent, CuiBreadcrumbComponent],
                        declarations: [AppBreadcrumbComponent, CuiBreadcrumbComponent]
                    },] }
        ];
        return AppBreadcrumbModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppFooterComponent = /** @class */ (function () {
        function AppFooterComponent(document, renderer, hostElement) {
            this.document = document;
            this.renderer = renderer;
            this.hostElement = hostElement;
            this.fixedClass = 'footer-fixed';
            renderer.addClass(hostElement.nativeElement, 'app-footer');
        }
        /**
         * @return {?}
         */
        AppFooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.isFixed(this.fixed);
        };
        /**
         * @return {?}
         */
        AppFooterComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.renderer.removeClass(this.document.body, this.fixedClass);
        };
        /**
         * @param {?=} fixed
         * @return {?}
         */
        AppFooterComponent.prototype.isFixed = /**
         * @param {?=} fixed
         * @return {?}
         */
        function (fixed) {
            if (fixed === void 0) { fixed = this.fixed; }
            if (fixed) {
                this.renderer.addClass(this.document.body, this.fixedClass);
            }
        };
        AppFooterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-footer, cui-footer',
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        AppFooterComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        AppFooterComponent.propDecorators = {
            fixed: [{ type: core.Input }]
        };
        return AppFooterComponent;
    }());
    if (false) {
        /** @type {?} */
        AppFooterComponent.prototype.fixed;
        /**
         * @type {?}
         * @private
         */
        AppFooterComponent.prototype.fixedClass;
        /**
         * @type {?}
         * @private
         */
        AppFooterComponent.prototype.document;
        /**
         * @type {?}
         * @private
         */
        AppFooterComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        AppFooterComponent.prototype.hostElement;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppFooterModule = /** @class */ (function () {
        function AppFooterModule() {
        }
        AppFooterModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        exports: [AppFooterComponent],
                        declarations: [AppFooterComponent]
                    },] }
        ];
        return AppFooterModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppHeaderComponent = /** @class */ (function () {
        function AppHeaderComponent(document, renderer, hostElement) {
            this.document = document;
            this.renderer = renderer;
            this.hostElement = hostElement;
            this.navbarBrandText = { icon: '🅲', text: '🅲 CoreUI' };
            // deprecated, use navbarBrandRouterLink instead
            this.navbarBrandRouterLink = '';
            this.fixedClass = 'header-fixed';
            this.breakpoints = ['xl', 'lg', 'md', 'sm', 'xs'];
            this.sidebarTogglerClass = 'd-none d-md-block';
            this.sidebarTogglerMobileClass = 'd-lg-none';
            this.asideTogglerClass = 'd-none d-md-block';
            this.asideTogglerMobileClass = 'd-lg-none';
            renderer.addClass(hostElement.nativeElement, 'app-header');
            renderer.addClass(hostElement.nativeElement, 'navbar');
        }
        /**
         * @return {?}
         */
        AppHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.isFixed(this.fixed);
            this.navbarBrandImg = Boolean(this.navbarBrand || this.navbarBrandFull || this.navbarBrandMinimized);
            this.navbarBrandRouterLink = this.navbarBrandRouterLink[0] ? this.navbarBrandRouterLink : this.navbarBrandHref;
            this.sidebarTogglerClass = this.setToggerBreakpointClass((/** @type {?} */ (this.sidebarToggler)));
            this.sidebarTogglerMobileClass = this.setToggerMobileBreakpointClass((/** @type {?} */ (this.sidebarToggler)));
            this.asideTogglerClass = this.setToggerBreakpointClass((/** @type {?} */ (this.asideMenuToggler)));
            this.asideTogglerMobileClass = this.setToggerMobileBreakpointClass((/** @type {?} */ (this.asideMenuToggler)));
        };
        /**
         * @return {?}
         */
        AppHeaderComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.renderer.removeClass(this.document.body, this.fixedClass);
        };
        /**
         * @param {?=} fixed
         * @return {?}
         */
        AppHeaderComponent.prototype.isFixed = /**
         * @param {?=} fixed
         * @return {?}
         */
        function (fixed) {
            if (fixed === void 0) { fixed = this.fixed; }
            if (fixed) {
                this.renderer.addClass(this.document.body, this.fixedClass);
            }
        };
        /**
         * @param {?=} breakpoint
         * @return {?}
         */
        AppHeaderComponent.prototype.setToggerBreakpointClass = /**
         * @param {?=} breakpoint
         * @return {?}
         */
        function (breakpoint) {
            if (breakpoint === void 0) { breakpoint = 'md'; }
            /** @type {?} */
            var togglerClass = 'd-none d-md-block';
            if (this.breakpoints.includes(breakpoint)) {
                /** @type {?} */
                var breakpointIndex = this.breakpoints.indexOf(breakpoint);
                togglerClass = "d-none d-" + breakpoint + "-block";
            }
            return togglerClass;
        };
        /**
         * @param {?=} breakpoint
         * @return {?}
         */
        AppHeaderComponent.prototype.setToggerMobileBreakpointClass = /**
         * @param {?=} breakpoint
         * @return {?}
         */
        function (breakpoint) {
            if (breakpoint === void 0) { breakpoint = 'lg'; }
            /** @type {?} */
            var togglerClass = 'd-lg-none';
            if (this.breakpoints.includes(breakpoint)) {
                togglerClass = "d-" + breakpoint + "-none";
            }
            return togglerClass;
        };
        AppHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-header, cui-header',
                        template: "<ng-template [ngIf]=\"mobileSidebarToggler != false\">\r\n  <button class=\"navbar-toggler {{sidebarTogglerMobileClass}}\" type=\"button\" appSidebarToggler>\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<a class=\"navbar-brand\" [routerLink]=\"navbarBrandRouterLink\">\r\n  <ng-template [ngIf]=\"navbarBrandImg\">\r\n    <img *ngIf=\"navbarBrand\"\r\n         [appHtmlAttr]=\"navbarBrand\"\r\n         [ngClass]=\"'navbar-brand'\">\r\n    <img *ngIf=\"navbarBrandFull\"\r\n         [appHtmlAttr]=\"navbarBrandFull\"\r\n         [ngClass]=\"'navbar-brand-full'\">\r\n    <img *ngIf=\"navbarBrandMinimized\"\r\n         [appHtmlAttr]=\"navbarBrandMinimized\"\r\n         [ngClass]=\"'navbar-brand-minimized'\">\r\n  </ng-template>\r\n  <ng-template [ngIf]=\"!navbarBrandImg\">\r\n    <div class=\"navbar-brand-full\" [innerHTML]=\"navbarBrandText.text\"></div>\r\n    <div class=\"navbar-brand-minimized\" [innerHTML]=\"navbarBrandText.icon\"></div>\r\n  </ng-template>\r\n</a>\r\n<ng-template [ngIf]=\"sidebarToggler != false\">\r\n  <button class=\"navbar-toggler {{sidebarTogglerClass}}\" type=\"button\" [appSidebarToggler]=\"sidebarToggler\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<ng-content></ng-content>\r\n<ng-template [ngIf]=\"asideMenuToggler != false\">\r\n  <button class=\"navbar-toggler {{asideTogglerClass}}\" type=\"button\" [appAsideMenuToggler]=\"asideMenuToggler\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n<ng-template [ngIf]=\"mobileAsideMenuToggler != false\">\r\n  <button class=\"navbar-toggler {{asideTogglerMobileClass}}\" type=\"button\" appAsideMenuToggler>\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n</ng-template>\r\n"
                    }] }
        ];
        /** @nocollapse */
        AppHeaderComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        AppHeaderComponent.propDecorators = {
            fixed: [{ type: core.Input }],
            navbarBrand: [{ type: core.Input }],
            navbarBrandFull: [{ type: core.Input }],
            navbarBrandMinimized: [{ type: core.Input }],
            navbarBrandText: [{ type: core.Input }],
            navbarBrandHref: [{ type: core.Input }],
            navbarBrandRouterLink: [{ type: core.Input }],
            sidebarToggler: [{ type: core.Input }],
            mobileSidebarToggler: [{ type: core.Input }],
            asideMenuToggler: [{ type: core.Input }],
            mobileAsideMenuToggler: [{ type: core.Input }]
        };
        return AppHeaderComponent;
    }());
    if (false) {
        /** @type {?} */
        AppHeaderComponent.prototype.fixed;
        /** @type {?} */
        AppHeaderComponent.prototype.navbarBrand;
        /** @type {?} */
        AppHeaderComponent.prototype.navbarBrandFull;
        /** @type {?} */
        AppHeaderComponent.prototype.navbarBrandMinimized;
        /** @type {?} */
        AppHeaderComponent.prototype.navbarBrandText;
        /** @type {?} */
        AppHeaderComponent.prototype.navbarBrandHref;
        /** @type {?} */
        AppHeaderComponent.prototype.navbarBrandRouterLink;
        /** @type {?} */
        AppHeaderComponent.prototype.sidebarToggler;
        /** @type {?} */
        AppHeaderComponent.prototype.mobileSidebarToggler;
        /** @type {?} */
        AppHeaderComponent.prototype.asideMenuToggler;
        /** @type {?} */
        AppHeaderComponent.prototype.mobileAsideMenuToggler;
        /**
         * @type {?}
         * @private
         */
        AppHeaderComponent.prototype.fixedClass;
        /** @type {?} */
        AppHeaderComponent.prototype.navbarBrandImg;
        /**
         * @type {?}
         * @private
         */
        AppHeaderComponent.prototype.breakpoints;
        /** @type {?} */
        AppHeaderComponent.prototype.sidebarTogglerClass;
        /** @type {?} */
        AppHeaderComponent.prototype.sidebarTogglerMobileClass;
        /** @type {?} */
        AppHeaderComponent.prototype.asideTogglerClass;
        /** @type {?} */
        AppHeaderComponent.prototype.asideTogglerMobileClass;
        /**
         * @type {?}
         * @private
         */
        AppHeaderComponent.prototype.document;
        /**
         * @type {?}
         * @private
         */
        AppHeaderComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        AppHeaderComponent.prototype.hostElement;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppHeaderModule = /** @class */ (function () {
        function AppHeaderModule() {
        }
        AppHeaderModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
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
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppSidebarComponent = /** @class */ (function () {
        function AppSidebarComponent(document, renderer, hostElement) {
            this.document = document;
            this.renderer = renderer;
            this.hostElement = hostElement;
            renderer.addClass(hostElement.nativeElement, 'sidebar');
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
            this.renderer.removeClass(this.document.body, 'sidebar-fixed');
        };
        /**
         * @param {?=} compact
         * @return {?}
         */
        AppSidebarComponent.prototype.isCompact = /**
         * @param {?=} compact
         * @return {?}
         */
        function (compact) {
            if (compact === void 0) { compact = this.compact; }
            if (compact) {
                this.renderer.addClass(this.document.body, 'sidebar-compact');
            }
        };
        /**
         * @param {?=} fixed
         * @return {?}
         */
        AppSidebarComponent.prototype.isFixed = /**
         * @param {?=} fixed
         * @return {?}
         */
        function (fixed) {
            if (fixed === void 0) { fixed = this.fixed; }
            if (fixed) {
                this.renderer.addClass(this.document.body, 'sidebar-fixed');
            }
        };
        /**
         * @param {?=} minimized
         * @return {?}
         */
        AppSidebarComponent.prototype.isMinimized = /**
         * @param {?=} minimized
         * @return {?}
         */
        function (minimized) {
            if (minimized === void 0) { minimized = this.minimized; }
            if (minimized) {
                this.renderer.addClass(this.document.body, 'sidebar-minimized');
            }
        };
        /**
         * @param {?=} offCanvas
         * @return {?}
         */
        AppSidebarComponent.prototype.isOffCanvas = /**
         * @param {?=} offCanvas
         * @return {?}
         */
        function (offCanvas) {
            if (offCanvas === void 0) { offCanvas = this.offCanvas; }
            if (offCanvas) {
                this.renderer.addClass(this.document.body, 'sidebar-off-canvas');
            }
        };
        /**
         * @param {?=} display
         * @return {?}
         */
        AppSidebarComponent.prototype.displayBreakpoint = /**
         * @param {?=} display
         * @return {?}
         */
        function (display) {
            if (display === void 0) { display = this.display; }
            if (display !== false) {
                /** @type {?} */
                var cssClass = display ? "sidebar-" + display + "-show" : sidebarCssClasses[0];
                this.renderer.addClass(this.document.body, cssClass);
            }
        };
        AppSidebarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-sidebar',
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        AppSidebarComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        AppSidebarComponent.propDecorators = {
            compact: [{ type: core.Input }],
            display: [{ type: core.Input }],
            fixed: [{ type: core.Input }],
            minimized: [{ type: core.Input }],
            offCanvas: [{ type: core.Input }]
        };
        return AppSidebarComponent;
    }());
    if (false) {
        /** @type {?} */
        AppSidebarComponent.prototype.compact;
        /** @type {?} */
        AppSidebarComponent.prototype.display;
        /** @type {?} */
        AppSidebarComponent.prototype.fixed;
        /** @type {?} */
        AppSidebarComponent.prototype.minimized;
        /** @type {?} */
        AppSidebarComponent.prototype.offCanvas;
        /**
         * @type {?}
         * @private
         */
        AppSidebarComponent.prototype.document;
        /**
         * @type {?}
         * @private
         */
        AppSidebarComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        AppSidebarComponent.prototype.hostElement;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppSidebarFooterComponent = /** @class */ (function () {
        function AppSidebarFooterComponent(renderer, hostElement) {
            this.renderer = renderer;
            this.hostElement = hostElement;
            renderer.addClass(hostElement.nativeElement, 'app-sidebar-footer');
        }
        /**
         * @return {?}
         */
        AppSidebarFooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        AppSidebarFooterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-sidebar-footer',
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        AppSidebarFooterComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        return AppSidebarFooterComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AppSidebarFooterComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        AppSidebarFooterComponent.prototype.hostElement;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppSidebarFormComponent = /** @class */ (function () {
        function AppSidebarFormComponent(renderer, hostElement) {
            this.renderer = renderer;
            this.hostElement = hostElement;
            renderer.addClass(hostElement.nativeElement, 'sidebar-form');
        }
        /**
         * @return {?}
         */
        AppSidebarFormComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        AppSidebarFormComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-sidebar-form',
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        AppSidebarFormComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        return AppSidebarFormComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AppSidebarFormComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        AppSidebarFormComponent.prototype.hostElement;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppSidebarHeaderComponent = /** @class */ (function () {
        function AppSidebarHeaderComponent(renderer, hostElement) {
            this.renderer = renderer;
            this.hostElement = hostElement;
            renderer.addClass(hostElement.nativeElement, 'sidebar-header');
        }
        /**
         * @return {?}
         */
        AppSidebarHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        AppSidebarHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-sidebar-header',
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        AppSidebarHeaderComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        return AppSidebarHeaderComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AppSidebarHeaderComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        AppSidebarHeaderComponent.prototype.hostElement;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppSidebarMinimizerComponent = /** @class */ (function () {
        function AppSidebarMinimizerComponent(document, renderer, hostElement) {
            this.document = document;
            this.renderer = renderer;
            this.hostElement = hostElement;
            this.role = 'button';
            renderer.addClass(hostElement.nativeElement, 'sidebar-minimizer');
        }
        /**
         * @param {?} $event
         * @return {?}
         */
        AppSidebarMinimizerComponent.prototype.toggleOpen = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            $event.preventDefault();
            /** @type {?} */
            var body = this.document.body;
            body.classList.contains('sidebar-minimized') ?
                this.renderer.removeClass(body, 'sidebar-minimized') :
                this.renderer.addClass(body, 'sidebar-minimized');
            body.classList.contains('brand-minimized') ?
                this.renderer.removeClass(body, 'brand-minimized') :
                this.renderer.addClass(body, 'brand-minimized');
        };
        /**
         * @return {?}
         */
        AppSidebarMinimizerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        AppSidebarMinimizerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-sidebar-minimizer',
                        template: ""
                    }] }
        ];
        /** @nocollapse */
        AppSidebarMinimizerComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        AppSidebarMinimizerComponent.propDecorators = {
            role: [{ type: core.HostBinding, args: ['attr.role',] }],
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return AppSidebarMinimizerComponent;
    }());
    if (false) {
        /** @type {?} */
        AppSidebarMinimizerComponent.prototype.role;
        /**
         * @type {?}
         * @private
         */
        AppSidebarMinimizerComponent.prototype.document;
        /**
         * @type {?}
         * @private
         */
        AppSidebarMinimizerComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        AppSidebarMinimizerComponent.prototype.hostElement;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: core.Directive, args: [{
                        selector: '[appNavDropdown]'
                    },] }
        ];
        /** @nocollapse */
        NavDropdownDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        return NavDropdownDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NavDropdownDirective.prototype.el;
    }
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
            { type: core.Directive, args: [{
                        selector: '[appNavDropdownToggle]'
                    },] }
        ];
        /** @nocollapse */
        NavDropdownToggleDirective.ctorParameters = function () { return [
            { type: NavDropdownDirective }
        ]; };
        NavDropdownToggleDirective.propDecorators = {
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return NavDropdownToggleDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NavDropdownToggleDirective.prototype.dropdown;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppSidebarNavComponent = /** @class */ (function () {
        function AppSidebarNavComponent(router, renderer, hostElement) {
            this.router = router;
            this.renderer = renderer;
            this.hostElement = hostElement;
            this.navItems = [];
            this.role = 'nav';
            this.navItemsArray = [];
            renderer.addClass(hostElement.nativeElement, 'sidebar-nav');
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        AppSidebarNavComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            this.navItemsArray = Array.isArray(this.navItems) ? this.navItems.slice() : [];
        };
        AppSidebarNavComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-sidebar-nav',
                        template: "<app-sidebar-nav-items\r\n  class=\"nav\"\r\n  [items]=\"navItemsArray\">\r\n</app-sidebar-nav-items>\r\n"
                    }] }
        ];
        /** @nocollapse */
        AppSidebarNavComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: core.Renderer2 },
            { type: core.ElementRef }
        ]; };
        AppSidebarNavComponent.propDecorators = {
            navItems: [{ type: core.Input }],
            role: [{ type: core.HostBinding, args: ['attr.role',] }]
        };
        return AppSidebarNavComponent;
    }());
    if (false) {
        /** @type {?} */
        AppSidebarNavComponent.prototype.navItems;
        /** @type {?} */
        AppSidebarNavComponent.prototype.role;
        /** @type {?} */
        AppSidebarNavComponent.prototype.navItemsArray;
        /** @type {?} */
        AppSidebarNavComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        AppSidebarNavComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        AppSidebarNavComponent.prototype.hostElement;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppSidebarNavDividerComponent = /** @class */ (function () {
        function AppSidebarNavDividerComponent() {
        }
        /**
         * @return {?}
         */
        AppSidebarNavDividerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        AppSidebarNavDividerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-sidebar-nav-divider',
                        template: ""
                    }] }
        ];
        /** @nocollapse */
        AppSidebarNavDividerComponent.ctorParameters = function () { return []; };
        AppSidebarNavDividerComponent.propDecorators = {
            item: [{ type: core.Input }]
        };
        return AppSidebarNavDividerComponent;
    }());
    if (false) {
        /** @type {?} */
        AppSidebarNavDividerComponent.prototype.item;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var SidebarNavService = /** @class */ (function () {
        function SidebarNavService() {
        }
        SidebarNavService.decorators = [
            { type: core.Injectable }
        ];
        return SidebarNavService;
    }());
    if (false) {
        /**
         * Returns a sidebar-nav items config NavData
         * @abstract
         * @return {?}
         */
        SidebarNavService.prototype.getSidebarNavItemsConfig = function () { };
    }
    var SidebarNavHelper = /** @class */ (function () {
        function SidebarNavHelper() {
            this.hasBadge = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return Boolean(item.badge); });
            this.hasIcon = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return Boolean(item.icon); });
        }
        /**
         * @param {?} item
         * @return {?}
         */
        SidebarNavHelper.prototype.itemType = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
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
        /**
         * @param {?} router
         * @param {?} item
         * @return {?}
         */
        SidebarNavHelper.prototype.isActive = /**
         * @param {?} router
         * @param {?} item
         * @return {?}
         */
        function (router, item) {
            return router.isActive(item.url, false);
        };
        /**
         * @param {?} item
         * @return {?}
         */
        SidebarNavHelper.prototype.getIconClass = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var classes = {
                'nav-icon': true
            };
            /** @type {?} */
            var icon = item.icon;
            classes[icon] = this.hasIcon(item);
            return classes;
        };
        return SidebarNavHelper;
    }());
    if (false) {
        /** @type {?} */
        SidebarNavHelper.prototype.hasBadge;
        /** @type {?} */
        SidebarNavHelper.prototype.hasIcon;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppSidebarNavDropdownComponent = /** @class */ (function () {
        function AppSidebarNavDropdownComponent(helper) {
            this.helper = helper;
        }
        AppSidebarNavDropdownComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-sidebar-nav-dropdown',
                        template: "\n    <a class=\"nav-link nav-dropdown-toggle\"\n       appNavDropdownToggle\n       [appHtmlAttr]=\"item.attributes\">\n      <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"item | appSidebarNavIcon\"></i>\n      <ng-container>{{item.name}}</ng-container>\n      <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\n    </a>\n    <app-sidebar-nav-items\n      class=\"nav-dropdown-items\"\n      [items]=\"item.children\">\n    </app-sidebar-nav-items>\n  ",
                        providers: [SidebarNavHelper],
                        styles: ['.nav-dropdown-toggle { cursor: pointer; }',
                            '.nav-dropdown-items { display: block; }']
                    }] }
        ];
        /** @nocollapse */
        AppSidebarNavDropdownComponent.ctorParameters = function () { return [
            { type: SidebarNavHelper }
        ]; };
        AppSidebarNavDropdownComponent.propDecorators = {
            item: [{ type: core.Input }]
        };
        return AppSidebarNavDropdownComponent;
    }());
    if (false) {
        /** @type {?} */
        AppSidebarNavDropdownComponent.prototype.item;
        /** @type {?} */
        AppSidebarNavDropdownComponent.prototype.helper;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppSidebarNavItemsComponent = /** @class */ (function () {
        function AppSidebarNavItemsComponent(router, helper) {
            this.router = router;
            this.helper = helper;
        }
        AppSidebarNavItemsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-sidebar-nav-items',
                        template: "\n    <ng-container *ngFor=\"let item of items\">\n      <ng-container [ngSwitch]=\"helper.itemType(item)\">\n        <app-sidebar-nav-dropdown\n          *ngSwitchCase=\"'dropdown'\"\n          [item]=\"item\"\n          [class.open]=\"helper.isActive(router, item)\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          appNavDropdown\n          routerLinkActive=\"open\">\n        </app-sidebar-nav-dropdown>\n        <app-sidebar-nav-divider\n          *ngSwitchCase=\"'divider'\"\n          [item]=\"item\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          [appHtmlAttr]=\"item.attributes\">\n        </app-sidebar-nav-divider>\n        <app-sidebar-nav-title\n          *ngSwitchCase=\"'title'\"\n          [item]=\"item\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          [appHtmlAttr]=\"item.attributes\">\n        </app-sidebar-nav-title>\n        <app-sidebar-nav-label\n          *ngSwitchCase=\"'label'\"\n          [item]=\"item\"\n          class=\"nav-item\"\n          [ngClass]=\"item | appSidebarNavItemClass\">\n        </app-sidebar-nav-label>\n        <ng-container\n          *ngSwitchCase=\"'empty'\">\n        </ng-container>\n        <app-sidebar-nav-link\n          *ngSwitchDefault\n          [item]=\"item\"\n          class=\"nav-item\"\n          [ngClass]=\"item | appSidebarNavItemClass\">\n        </app-sidebar-nav-link>\n      </ng-container>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        AppSidebarNavItemsComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: SidebarNavHelper }
        ]; };
        AppSidebarNavItemsComponent.propDecorators = {
            items: [{ type: core.Input }]
        };
        return AppSidebarNavItemsComponent;
    }());
    if (false) {
        /** @type {?} */
        AppSidebarNavItemsComponent.prototype.items;
        /** @type {?} */
        AppSidebarNavItemsComponent.prototype.router;
        /** @type {?} */
        AppSidebarNavItemsComponent.prototype.helper;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppSidebarNavLinkComponent = /** @class */ (function () {
        function AppSidebarNavLinkComponent(document, renderer, helper) {
            this.document = document;
            this.renderer = renderer;
            this.helper = helper;
            this.classes = { 'nav-link': true };
        }
        /**
         * @return {?}
         */
        AppSidebarNavLinkComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.linkType = this.getLinkType();
            this.href = this.isDisabled() ? '' : this.item.url;
        };
        /**
         * @return {?}
         */
        AppSidebarNavLinkComponent.prototype.getLinkClass = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var disabled = this.isDisabled();
            this.classes['disabled'] = disabled;
            this.classes['btn-link'] = disabled;
            if (this.hasVariant()) {
                /** @type {?} */
                var variant = "nav-link-" + this.item.variant;
                this.classes[variant] = true;
            }
            return this.classes;
        };
        /**
         * @return {?}
         */
        AppSidebarNavLinkComponent.prototype.getLinkType = /**
         * @return {?}
         */
        function () {
            return this.isExternalLink() ? 'external' : 'link';
        };
        /**
         * @return {?}
         */
        AppSidebarNavLinkComponent.prototype.hasVariant = /**
         * @return {?}
         */
        function () {
            return !!this.item.variant;
        };
        /**
         * @return {?}
         */
        AppSidebarNavLinkComponent.prototype.isDisabled = /**
         * @return {?}
         */
        function () {
            return (this.item.attributes && this.item.attributes.disabled) ? true : null;
        };
        /**
         * @return {?}
         */
        AppSidebarNavLinkComponent.prototype.isExternalLink = /**
         * @return {?}
         */
        function () {
            return this.item.url.substring(0, 4) === 'http';
        };
        /**
         * @return {?}
         */
        AppSidebarNavLinkComponent.prototype.hideMobile = /**
         * @return {?}
         */
        function () {
            if (this.document.body.classList.contains('sidebar-show')) {
                this.renderer.removeClass(this.document.body, 'sidebar-show');
            }
        };
        AppSidebarNavLinkComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-sidebar-nav-link',
                        template: "<ng-container [ngSwitch]=\"linkType\">\r\n  <a *ngSwitchCase=\"'external'\"\r\n    [ngClass]=\"getLinkClass()\"\r\n    href=\"{{item.url}}\"\r\n    [appHtmlAttr]=\"item.attributes\">\r\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"item | appSidebarNavIcon\"></i>\r\n    <ng-container>{{item.name}}</ng-container>\r\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\r\n  </a>\r\n  <a *ngSwitchDefault\r\n     [ngClass]=\"getLinkClass()\"\r\n     [appHtmlAttr]=\"item.attributes\"\r\n     [attr.disabled]=\"isDisabled()\"\r\n     routerLinkActive=\"active\"\r\n     [routerLink]=\"[item.url]\"\r\n     (click)=\"hideMobile()\">\r\n    <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"item | appSidebarNavIcon\"></i>\r\n    <ng-container>{{item.name}}</ng-container>\r\n    <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\r\n  </a>\r\n</ng-container>\r\n",
                        providers: [SidebarNavHelper]
                    }] }
        ];
        /** @nocollapse */
        AppSidebarNavLinkComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: SidebarNavHelper }
        ]; };
        AppSidebarNavLinkComponent.propDecorators = {
            item: [{ type: core.Input }]
        };
        return AppSidebarNavLinkComponent;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            var name = this.renderer.createText(this.item.name);
            if (this.item.class) {
                /** @type {?} */
                var classes = this.item.class;
                this.renderer.addClass(nativeElement, classes);
            }
            if (this.item.wrapper) {
                /** @type {?} */
                var wrapper = this.renderer.createElement(this.item.wrapper.element);
                this.addAttribs(this.item.wrapper.attributes, wrapper);
                this.renderer.appendChild(wrapper, name);
                this.renderer.appendChild(nativeElement, wrapper);
            }
            else {
                this.renderer.appendChild(nativeElement, name);
            }
        };
        /**
         * @private
         * @param {?} attribs
         * @param {?} element
         * @return {?}
         */
        AppSidebarNavTitleComponent.prototype.addAttribs = /**
         * @private
         * @param {?} attribs
         * @param {?} element
         * @return {?}
         */
        function (attribs, element) {
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
        /**
         * @private
         * @param {?} styles
         * @param {?} el
         * @return {?}
         */
        AppSidebarNavTitleComponent.prototype.setStyle = /**
         * @private
         * @param {?} styles
         * @param {?} el
         * @return {?}
         */
        function (styles, el) {
            for (var style in styles) {
                this.renderer.setStyle(el, style, styles[style]);
            }
        };
        /**
         * @private
         * @param {?} classes
         * @param {?} el
         * @return {?}
         */
        AppSidebarNavTitleComponent.prototype.addClass = /**
         * @private
         * @param {?} classes
         * @param {?} el
         * @return {?}
         */
        function (classes, el) {
            var _this = this;
            /** @type {?} */
            var classArray = (Array.isArray(classes) ? classes : classes.split(' '));
            classArray.filter((/**
             * @param {?} element
             * @return {?}
             */
            function (element) { return element.length > 0; })).forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                _this.renderer.addClass(el, element);
            }));
        };
        /**
         * @private
         * @param {?} key
         * @param {?} value
         * @param {?} el
         * @return {?}
         */
        AppSidebarNavTitleComponent.prototype.setAttrib = /**
         * @private
         * @param {?} key
         * @param {?} value
         * @param {?} el
         * @return {?}
         */
        function (key, value, el) {
            this.renderer.setAttribute(el, key, value);
        };
        AppSidebarNavTitleComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-sidebar-nav-title',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        AppSidebarNavTitleComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        AppSidebarNavTitleComponent.propDecorators = {
            item: [{ type: core.Input }]
        };
        return AppSidebarNavTitleComponent;
    }());
    if (false) {
        /** @type {?} */
        AppSidebarNavTitleComponent.prototype.item;
        /**
         * @type {?}
         * @private
         */
        AppSidebarNavTitleComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        AppSidebarNavTitleComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppSidebarNavLabelComponent = /** @class */ (function () {
        function AppSidebarNavLabelComponent(helper) {
            this.helper = helper;
            this.classes = {
                'nav-label': true,
                'active': true
            };
            this.iconClasses = {};
        }
        /**
         * @return {?}
         */
        AppSidebarNavLabelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.iconClasses = this.helper.getIconClass(this.item);
        };
        /**
         * @return {?}
         */
        AppSidebarNavLabelComponent.prototype.getItemClass = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var itemClass = this.item.class;
            this.classes[itemClass] = !!itemClass;
            return this.classes;
        };
        /**
         * @return {?}
         */
        AppSidebarNavLabelComponent.prototype.getLabelIconClass = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var variant = "text-" + this.item.label.variant;
            this.iconClasses[variant] = !!this.item.label.variant;
            /** @type {?} */
            var labelClass = this.item.label.class;
            this.iconClasses[labelClass] = !!labelClass;
            return this.iconClasses;
        };
        AppSidebarNavLabelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-sidebar-nav-label',
                        template: "<a [ngClass]=\"getItemClass()\"\r\n   href=\"{{item.url}}\"\r\n   [appHtmlAttr]=\"item.attributes\">\r\n  <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"getLabelIconClass()\"></i>\r\n  <ng-container>{{item.name}}</ng-container>\r\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\r\n</a>\r\n"
                    }] }
        ];
        /** @nocollapse */
        AppSidebarNavLabelComponent.ctorParameters = function () { return [
            { type: SidebarNavHelper }
        ]; };
        AppSidebarNavLabelComponent.propDecorators = {
            item: [{ type: core.Input }]
        };
        return AppSidebarNavLabelComponent;
    }());
    if (false) {
        /** @type {?} */
        AppSidebarNavLabelComponent.prototype.item;
        /**
         * @type {?}
         * @private
         */
        AppSidebarNavLabelComponent.prototype.classes;
        /**
         * @type {?}
         * @private
         */
        AppSidebarNavLabelComponent.prototype.iconClasses;
        /** @type {?} */
        AppSidebarNavLabelComponent.prototype.helper;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppSidebarNavIconPipe = /** @class */ (function () {
        function AppSidebarNavIconPipe() {
        }
        /**
         * @param {?} item
         * @param {?=} args
         * @return {?}
         */
        AppSidebarNavIconPipe.prototype.transform = /**
         * @param {?} item
         * @param {?=} args
         * @return {?}
         */
        function (item, args) {
            /** @type {?} */
            var classes = {
                'nav-icon': true
            };
            /** @type {?} */
            var icon = item.icon;
            classes[icon] = !!item.icon;
            return classes;
        };
        AppSidebarNavIconPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'appSidebarNavIcon'
                    },] }
        ];
        return AppSidebarNavIconPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppSidebarNavBadgePipe = /** @class */ (function () {
        function AppSidebarNavBadgePipe() {
        }
        /**
         * @param {?} item
         * @param {?=} args
         * @return {?}
         */
        AppSidebarNavBadgePipe.prototype.transform = /**
         * @param {?} item
         * @param {?=} args
         * @return {?}
         */
        function (item, args) {
            /** @type {?} */
            var classes = {
                'badge': true
            };
            /** @type {?} */
            var variant = "badge-" + item.badge.variant;
            classes[variant] = !!item.badge.variant;
            return classes;
        };
        AppSidebarNavBadgePipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'appSidebarNavBadge'
                    },] }
        ];
        return AppSidebarNavBadgePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppSidebarNavItemClassPipe = /** @class */ (function () {
        function AppSidebarNavItemClassPipe(helper) {
            this.helper = helper;
        }
        /**
         * @param {?} item
         * @param {...?} args
         * @return {?}
         */
        AppSidebarNavItemClassPipe.prototype.transform = /**
         * @param {?} item
         * @param {...?} args
         * @return {?}
         */
        function (item) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            /** @type {?} */
            var itemType = this.helper.itemType(item);
            /** @type {?} */
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
        AppSidebarNavItemClassPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'appSidebarNavItemClass'
                    },] }
        ];
        /** @nocollapse */
        AppSidebarNavItemClassPipe.ctorParameters = function () { return [
            { type: SidebarNavHelper }
        ]; };
        return AppSidebarNavItemClassPipe;
    }());
    if (false) {
        /** @type {?} */
        AppSidebarNavItemClassPipe.prototype.helper;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppSidebarModule = /** @class */ (function () {
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
                            AppSidebarNavItemsComponent,
                            AppSidebarNavComponent,
                            AppSidebarNavDividerComponent,
                            AppSidebarNavDropdownComponent,
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
                            AppSidebarNavItemsComponent,
                            AppSidebarNavComponent,
                            AppSidebarNavDividerComponent,
                            AppSidebarNavDropdownComponent,
                            AppSidebarNavLinkComponent,
                            AppSidebarNavTitleComponent,
                            NavDropdownDirective,
                            NavDropdownToggleDirective,
                            AppSidebarNavLabelComponent,
                            AppSidebarNavIconPipe,
                            AppSidebarNavBadgePipe,
                            AppSidebarNavItemClassPipe
                        ],
                        providers: [
                            SidebarNavHelper
                        ]
                    },] }
        ];
        return AppSidebarModule;
    }());

    exports.AppAsideComponent = AppAsideComponent;
    exports.AppAsideModule = AppAsideModule;
    exports.AppBreadcrumbComponent = AppBreadcrumbComponent;
    exports.AppBreadcrumbModule = AppBreadcrumbModule;
    exports.AppBreadcrumbService = AppBreadcrumbService;
    exports.AppFooterComponent = AppFooterComponent;
    exports.AppFooterModule = AppFooterModule;
    exports.AppHeaderComponent = AppHeaderComponent;
    exports.AppHeaderModule = AppHeaderModule;
    exports.AppSidebarComponent = AppSidebarComponent;
    exports.AppSidebarModule = AppSidebarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=coreui-angular.umd.js.map
