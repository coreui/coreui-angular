(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@coreui/angular', ['exports', '@angular/core', '@angular/common', '@angular/router', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.coreui = global.coreui || {}, global.coreui.angular = {}), global.ng.core, global.ng.common, global.ng.router, global.rxjs, global.rxjs.operators));
}(this, function (exports, core, common, router, rxjs, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
        function AppAsideComponent(document, renderer) {
            this.document = document;
            this.renderer = renderer;
            this.fixedClass = 'aside-menu-fixed';
            this._aside = true;
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
            { type: core.Renderer2 }
        ]; };
        AppAsideComponent.propDecorators = {
            display: [{ type: core.Input }],
            fixed: [{ type: core.Input }],
            offCanvas: [{ type: core.Input }],
            _aside: [{ type: core.HostBinding, args: ['class.aside-menu',] }]
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
        /** @type {?} */
        AppAsideComponent.prototype._aside;
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AppBreadcrumbService.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute }
        ]; };
        /** @nocollapse */ AppBreadcrumbService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AppBreadcrumbService_Factory() { return new AppBreadcrumbService(core.ɵɵinject(router.Router), core.ɵɵinject(router.ActivatedRoute)); }, token: AppBreadcrumbService, providedIn: "root" });
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
        function AppFooterComponent(document, renderer) {
            this.document = document;
            this.renderer = renderer;
            this.fixedClass = 'footer-fixed';
            this._footer = true;
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
            { type: core.Renderer2 }
        ]; };
        AppFooterComponent.propDecorators = {
            fixed: [{ type: core.Input }],
            _footer: [{ type: core.HostBinding, args: ['class.app-footer',] }]
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
        /** @type {?} */
        AppFooterComponent.prototype._footer;
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
        function AppHeaderComponent(document, renderer) {
            this.document = document;
            this.renderer = renderer;
            this.navbarBrandText = { icon: '🅲', text: '🅲 CoreUI' };
            // deprecated, use navbarBrandRouterLink instead
            this.navbarBrandRouterLink = '';
            this.fixedClass = 'header-fixed';
            this._header = true;
            this._navbar = true;
            this.breakpoints = ['xl', 'lg', 'md', 'sm', 'xs'];
            this.sidebarTogglerClass = 'd-none d-md-block';
            this.sidebarTogglerMobileClass = 'd-lg-none';
            this.asideTogglerClass = 'd-none d-md-block';
            this.asideTogglerMobileClass = 'd-lg-none';
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
            { type: core.Renderer2 }
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
            mobileAsideMenuToggler: [{ type: core.Input }],
            _header: [{ type: core.HostBinding, args: ['class.app-header',] }],
            _navbar: [{ type: core.HostBinding, args: ['class.navbar',] }]
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
        AppHeaderComponent.prototype._header;
        /** @type {?} */
        AppHeaderComponent.prototype._navbar;
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
    /**
     * @record
     */
    function ISidebarAction() { }
    if (false) {
        /** @type {?|undefined} */
        ISidebarAction.prototype.minimize;
    }
    var AppSidebarService = /** @class */ (function () {
        function AppSidebarService() {
            this.events = new rxjs.BehaviorSubject({});
            this.events$ = this.events.asObservable();
        }
        /**
         * @param {?} action
         * @return {?}
         */
        AppSidebarService.prototype.toggle = /**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            this.events.next(action);
        };
        AppSidebarService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AppSidebarService.ctorParameters = function () { return []; };
        /** @nocollapse */ AppSidebarService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AppSidebarService_Factory() { return new AppSidebarService(); }, token: AppSidebarService, providedIn: "root" });
        return AppSidebarService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AppSidebarService.prototype.events;
        /** @type {?} */
        AppSidebarService.prototype.events$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            this.minimizedChange = new core.EventEmitter();
            this._sidebar = true;
        }
        Object.defineProperty(AppSidebarComponent.prototype, "minimized", {
            get: /**
             * @return {?}
             */
            function () {
                return this._minimized;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
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
        /**
         * @return {?}
         */
        AppSidebarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.displayBreakpoint(this.display);
            this.isCompact(this.compact);
            this.isFixed(this.fixed);
            this.isOffCanvas(this.offCanvas);
            this.sidebarService.toggle({ minimize: this.minimized });
            this.subscriptionEvents = this.sidebarService.events$.subscribe((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                if (action.minimize !== undefined) {
                    action.minimize === 'toggle' ? _this.toggleMinimized() : _this.minimized = !!action.minimize;
                }
            }));
        };
        /**
         * @return {?}
         */
        AppSidebarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.subscriptionEvents.unsubscribe();
            this.minimizedChange.complete();
            this.renderer.removeClass(this.document.body, 'sidebar-fixed');
            this._updateMinimized(false);
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
         * @return {?}
         */
        AppSidebarComponent.prototype.toggleMinimized = /**
         * @return {?}
         */
        function () {
            this.minimized = !this._minimized;
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
        /**
         * @private
         * @param {?} minimized
         * @return {?}
         */
        AppSidebarComponent.prototype._updateMinimized = /**
         * @private
         * @param {?} minimized
         * @return {?}
         */
        function (minimized) {
            /** @type {?} */
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
        AppSidebarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-sidebar, cui-sidebar',
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        AppSidebarComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: AppSidebarService }
        ]; };
        AppSidebarComponent.propDecorators = {
            compact: [{ type: core.Input }],
            display: [{ type: core.Input }],
            fixed: [{ type: core.Input }],
            offCanvas: [{ type: core.Input }],
            minimized: [{ type: core.Input }],
            minimizedChange: [{ type: core.Output }],
            _sidebar: [{ type: core.HostBinding, args: ['class.sidebar',] }]
        };
        return AppSidebarComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AppSidebarComponent.prototype.subscriptionEvents;
        /**
         * @type {?}
         * @private
         */
        AppSidebarComponent.prototype._minimized;
        /** @type {?} */
        AppSidebarComponent.prototype.compact;
        /** @type {?} */
        AppSidebarComponent.prototype.display;
        /** @type {?} */
        AppSidebarComponent.prototype.fixed;
        /** @type {?} */
        AppSidebarComponent.prototype.offCanvas;
        /**
         * Emits whenever the minimized state of the sidebar changes.
         * Primarily used to facilitate two-way binding.
         * @type {?}
         */
        AppSidebarComponent.prototype.minimizedChange;
        /** @type {?} */
        AppSidebarComponent.prototype._sidebar;
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
        AppSidebarComponent.prototype.sidebarService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppSidebarFooterComponent = /** @class */ (function () {
        function AppSidebarFooterComponent() {
            this._sidebarFooter = true;
        }
        AppSidebarFooterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-sidebar-footer, cui-sidebar-footer',
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        AppSidebarFooterComponent.ctorParameters = function () { return []; };
        AppSidebarFooterComponent.propDecorators = {
            _sidebarFooter: [{ type: core.HostBinding, args: ['class.sidebar-footer',] }]
        };
        return AppSidebarFooterComponent;
    }());
    if (false) {
        /** @type {?} */
        AppSidebarFooterComponent.prototype._sidebarFooter;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppSidebarFormComponent = /** @class */ (function () {
        function AppSidebarFormComponent() {
            this._sidebarForm = true;
        }
        AppSidebarFormComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-sidebar-form, cui-sidebar-form',
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        AppSidebarFormComponent.ctorParameters = function () { return []; };
        AppSidebarFormComponent.propDecorators = {
            _sidebarForm: [{ type: core.HostBinding, args: ['class.sidebar-form',] }]
        };
        return AppSidebarFormComponent;
    }());
    if (false) {
        /** @type {?} */
        AppSidebarFormComponent.prototype._sidebarForm;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppSidebarHeaderComponent = /** @class */ (function () {
        function AppSidebarHeaderComponent() {
            this._sidebarHeader = true;
        }
        AppSidebarHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-sidebar-header, cui-sidebar-header',
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        AppSidebarHeaderComponent.ctorParameters = function () { return []; };
        AppSidebarHeaderComponent.propDecorators = {
            _sidebarHeader: [{ type: core.HostBinding, args: ['class.sidebar-header',] }]
        };
        return AppSidebarHeaderComponent;
    }());
    if (false) {
        /** @type {?} */
        AppSidebarHeaderComponent.prototype._sidebarHeader;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppSidebarMinimizerComponent = /** @class */ (function () {
        function AppSidebarMinimizerComponent(sidebarService) {
            this.sidebarService = sidebarService;
            this.role = 'button';
            this._minimizer = true;
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
            this.sidebarService.toggle({ minimize: 'toggle' });
        };
        AppSidebarMinimizerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-sidebar-minimizer, cui-sidebar-minimizer',
                        template: ""
                    }] }
        ];
        /** @nocollapse */
        AppSidebarMinimizerComponent.ctorParameters = function () { return [
            { type: AppSidebarService }
        ]; };
        AppSidebarMinimizerComponent.propDecorators = {
            role: [{ type: core.HostBinding, args: ['attr.role',] }, { type: core.Input }],
            _minimizer: [{ type: core.HostBinding, args: ['class.sidebar-minimizer',] }],
            toggleOpen: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return AppSidebarMinimizerComponent;
    }());
    if (false) {
        /** @type {?} */
        AppSidebarMinimizerComponent.prototype.role;
        /** @type {?} */
        AppSidebarMinimizerComponent.prototype._minimizer;
        /**
         * @type {?}
         * @private
         */
        AppSidebarMinimizerComponent.prototype.sidebarService;
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
        function AppSidebarNavComponent(router) {
            this.router = router;
            this.navItems = [];
            this._sidebarBav = true;
            this.role = 'nav';
            this.navItemsArray = [];
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
                        selector: 'app-sidebar-nav, cui-sidebar-nav',
                        template: "<app-sidebar-nav-items\n  class=\"nav\"\n  [items]=\"navItemsArray\">\n</app-sidebar-nav-items>\n"
                    }] }
        ];
        /** @nocollapse */
        AppSidebarNavComponent.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        AppSidebarNavComponent.propDecorators = {
            navItems: [{ type: core.Input }],
            _sidebarBav: [{ type: core.HostBinding, args: ['class.sidebar-nav',] }],
            role: [{ type: core.HostBinding, args: ['attr.role',] }, { type: core.Input }]
        };
        return AppSidebarNavComponent;
    }());
    if (false) {
        /** @type {?} */
        AppSidebarNavComponent.prototype.navItems;
        /** @type {?} */
        AppSidebarNavComponent.prototype._sidebarBav;
        /** @type {?} */
        AppSidebarNavComponent.prototype.role;
        /** @type {?} */
        AppSidebarNavComponent.prototype.navItemsArray;
        /** @type {?} */
        AppSidebarNavComponent.prototype.router;
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
                        selector: 'app-sidebar-nav-divider, cui-sidebar-nav-divider',
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
                        selector: 'app-sidebar-nav-dropdown, cui-sidebar-nav-dropdown',
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
        function AppSidebarNavItemsComponent(document, renderer, router, helper) {
            this.document = document;
            this.renderer = renderer;
            this.router = router;
            this.helper = helper;
        }
        Object.defineProperty(AppSidebarNavItemsComponent.prototype, "items", {
            get: /**
             * @return {?}
             */
            function () {
                return this._items;
            },
            set: /**
             * @param {?} items
             * @return {?}
             */
            function (items) {
                this._items = __spread(items);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AppSidebarNavItemsComponent.prototype.hideMobile = /**
         * @return {?}
         */
        function () {
            if (this.document.body.classList.contains('sidebar-show')) {
                this.renderer.removeClass(this.document.body, 'sidebar-show');
            }
        };
        AppSidebarNavItemsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-sidebar-nav-items, cui-sidebar-nav-items',
                        template: "\n    <ng-container *ngFor=\"let item of items\">\n      <ng-container [ngSwitch]=\"helper.itemType(item)\">\n        <app-sidebar-nav-dropdown\n          *ngSwitchCase=\"'dropdown'\"\n          [item]=\"item\"\n          [class.open]=\"helper.isActive(router, item)\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          appNavDropdown\n          routerLinkActive=\"open\">\n        </app-sidebar-nav-dropdown>\n        <app-sidebar-nav-divider\n          *ngSwitchCase=\"'divider'\"\n          [item]=\"item\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          [appHtmlAttr]=\"item.attributes\">\n        </app-sidebar-nav-divider>\n        <app-sidebar-nav-title\n          *ngSwitchCase=\"'title'\"\n          [item]=\"item\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          [appHtmlAttr]=\"item.attributes\">\n        </app-sidebar-nav-title>\n        <app-sidebar-nav-label\n          *ngSwitchCase=\"'label'\"\n          [item]=\"item\"\n          class=\"nav-item\"\n          [ngClass]=\"item | appSidebarNavItemClass\">\n        </app-sidebar-nav-label>\n        <ng-container\n          *ngSwitchCase=\"'empty'\">\n        </ng-container>\n        <app-sidebar-nav-link\n          *ngSwitchDefault\n          [item]=\"item\"\n          class=\"nav-item\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          (linkClick)=\"hideMobile()\"\n        >\n        </app-sidebar-nav-link>\n      </ng-container>\n    </ng-container>\n  "
                    }] }
        ];
        /** @nocollapse */
        AppSidebarNavItemsComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.Renderer2 },
            { type: router.Router },
            { type: SidebarNavHelper }
        ]; };
        AppSidebarNavItemsComponent.propDecorators = {
            items: [{ type: core.Input }]
        };
        return AppSidebarNavItemsComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        AppSidebarNavItemsComponent.prototype._items;
        /**
         * @type {?}
         * @private
         */
        AppSidebarNavItemsComponent.prototype.document;
        /**
         * @type {?}
         * @private
         */
        AppSidebarNavItemsComponent.prototype.renderer;
        /** @type {?} */
        AppSidebarNavItemsComponent.prototype.router;
        /** @type {?} */
        AppSidebarNavItemsComponent.prototype.helper;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppSidebarNavLinkContentComponent = /** @class */ (function () {
        function AppSidebarNavLinkContentComponent(helper) {
            this.helper = helper;
        }
        AppSidebarNavLinkContentComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-sidebar-nav-link-content, cui-sidebar-nav-link-content',
                        template: "\n    <ng-container *ngIf=\"true\">\n      <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"item | appSidebarNavIcon\"></i>\n      <ng-container>{{item.name}}</ng-container>\n      <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\n    </ng-container>\n  ",
                        providers: [SidebarNavHelper]
                    }] }
        ];
        /** @nocollapse */
        AppSidebarNavLinkContentComponent.ctorParameters = function () { return [
            { type: SidebarNavHelper }
        ]; };
        AppSidebarNavLinkContentComponent.propDecorators = {
            item: [{ type: core.Input }]
        };
        return AppSidebarNavLinkContentComponent;
    }());
    if (false) {
        /** @type {?} */
        AppSidebarNavLinkContentComponent.prototype.item;
        /** @type {?} */
        AppSidebarNavLinkContentComponent.prototype.helper;
    }
    var AppSidebarNavLinkComponent = /** @class */ (function () {
        function AppSidebarNavLinkComponent(router$1) {
            this.router = router$1;
            this.linkClick = new core.EventEmitter();
            this.navigationEndObservable = (/** @type {?} */ (router$1.events.pipe(operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                return event instanceof router.NavigationEnd;
            })))));
        }
        Object.defineProperty(AppSidebarNavLinkComponent.prototype, "item", {
            get: /**
             * @return {?}
             */
            function () {
                return this._item;
            },
            set: /**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                this._item = JSON.parse(JSON.stringify(item));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        AppSidebarNavLinkComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.url = typeof this.item.url === 'string' ? this.item.url : this.router.serializeUrl(this.router.createUrlTree(this.item.url));
            this.linkType = this.getLinkType();
            this.href = this.isDisabled() ? '' : (this.item.href || this.url);
            this.linkActive = this.router.url.split(/[?#(;]/)[0] === this.href.split(/[?#(;]/)[0];
            this.navSubscription = this.navigationEndObservable.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var itemUrlArray = _this.href.split(/[?#(;]/)[0].split('/');
                /** @type {?} */
                var urlArray = event.urlAfterRedirects.split(/[?#(;]/)[0].split('/');
                _this.linkActive = itemUrlArray.every((/**
                 * @param {?} value
                 * @param {?} index
                 * @return {?}
                 */
                function (value, index) { return value === urlArray[index]; }));
            }));
        };
        /**
         * @return {?}
         */
        AppSidebarNavLinkComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.navSubscription.unsubscribe();
        };
        /**
         * @return {?}
         */
        AppSidebarNavLinkComponent.prototype.getLinkType = /**
         * @return {?}
         */
        function () {
            return this.isDisabled() ? 'disabled' : this.isExternalLink() ? 'external' : 'link';
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
            return !!this.item.href || this.url.substring(0, 4) === 'http';
        };
        /**
         * @return {?}
         */
        AppSidebarNavLinkComponent.prototype.linkClicked = /**
         * @return {?}
         */
        function () {
            this.linkClick.emit();
        };
        AppSidebarNavLinkComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-sidebar-nav-link, cui-sidebar-nav-link',
                        template: "<ng-container [ngSwitch]=\"linkType\">\r\n  <a *ngSwitchCase=\"'disabled'\"\r\n     [ngClass]=\"item | appSidebarNavLink\"\r\n     [appHtmlAttr]=\"item.attributes\"\r\n  >\r\n    <app-sidebar-nav-link-content [item]=\"item\"></app-sidebar-nav-link-content>\r\n  </a>\r\n  <a *ngSwitchCase=\"'external'\"\r\n     [ngClass]=\"item | appSidebarNavLink\"\r\n     [href]=\"href\"\r\n     [appHtmlAttr]=\"item.attributes\"\r\n     (click)=\"linkClicked()\"\r\n  >\r\n    <app-sidebar-nav-link-content [item]=\"item\"></app-sidebar-nav-link-content>\r\n  </a>\r\n  <a *ngSwitchDefault\r\n     [ngClass]=\"item | appSidebarNavLink\"\r\n     [appHtmlAttr]=\"item.attributes\"\r\n     [target]=\"item.attributes?.target\"\r\n     [queryParams]=\"item.linkProps?.queryParams\"\r\n     [fragment]=\"item.linkProps?.fragment\"\r\n     [queryParamsHandling]=\"item.linkProps?.queryParamsHandling\"\r\n     [preserveFragment]=\"item.linkProps?.preserveFragment\"\r\n     [skipLocationChange]=\"item.linkProps?.skipLocationChange\"\r\n     [replaceUrl]=\"item.linkProps?.replaceUrl\"\r\n     [state]=\"item.linkProps?.state\"\r\n     [routerLink]=\"item.url\"\r\n     [class.active]=\"linkActive\"\r\n     (click)=\"linkClicked()\"\r\n  >\r\n    <app-sidebar-nav-link-content [item]=\"item\"></app-sidebar-nav-link-content>\r\n  </a>\r\n</ng-container>\r\n",
                        providers: [SidebarNavHelper]
                    }] }
        ];
        /** @nocollapse */
        AppSidebarNavLinkComponent.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        AppSidebarNavLinkComponent.propDecorators = {
            item: [{ type: core.Input }],
            linkClick: [{ type: core.Output }]
        };
        return AppSidebarNavLinkComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        AppSidebarNavLinkComponent.prototype._item;
        /** @type {?} */
        AppSidebarNavLinkComponent.prototype.linkClick;
        /** @type {?} */
        AppSidebarNavLinkComponent.prototype.linkType;
        /** @type {?} */
        AppSidebarNavLinkComponent.prototype.href;
        /** @type {?} */
        AppSidebarNavLinkComponent.prototype.linkActive;
        /**
         * @type {?}
         * @private
         */
        AppSidebarNavLinkComponent.prototype.url;
        /**
         * @type {?}
         * @private
         */
        AppSidebarNavLinkComponent.prototype.navigationEndObservable;
        /**
         * @type {?}
         * @private
         */
        AppSidebarNavLinkComponent.prototype.navSubscription;
        /** @type {?} */
        AppSidebarNavLinkComponent.prototype.router;
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
                        selector: 'app-sidebar-nav-title, cui-sidebar-nav-title',
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
                        selector: 'app-sidebar-nav-label, cui-sidebar-nav-label',
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
            classes[item.badge.class] = !!item.badge.class;
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
    var AppSidebarNavLinkPipe = /** @class */ (function () {
        function AppSidebarNavLinkPipe() {
        }
        /**
         * @param {?} item
         * @return {?}
         */
        AppSidebarNavLinkPipe.prototype.transform = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var classes = { 'nav-link': true };
            /** @type {?} */
            var disabled = item.attributes && item.attributes.disabled;
            classes['disabled'] = disabled;
            classes['btn-link'] = disabled;
            classes["nav-link-" + item.variant] = !!item.variant;
            return classes;
        };
        AppSidebarNavLinkPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'appSidebarNavLink'
                    },] }
        ];
        return AppSidebarNavLinkPipe;
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
                    },] }
        ];
        return AppSidebarModule;
    }());

    exports.AppAsideComponent = AppAsideComponent;
    exports.AppAsideModule = AppAsideModule;
    exports.AppBreadcrumbComponent = AppBreadcrumbComponent;
    exports.AppBreadcrumbModule = AppBreadcrumbModule;
    exports.AppFooterComponent = AppFooterComponent;
    exports.AppFooterModule = AppFooterModule;
    exports.AppHeaderComponent = AppHeaderComponent;
    exports.AppHeaderModule = AppHeaderModule;
    exports.AppSidebarComponent = AppSidebarComponent;
    exports.AppSidebarModule = AppSidebarModule;
    exports.CuiBreadcrumbComponent = CuiBreadcrumbComponent;
    exports.ɵa = LayoutModule;
    exports.ɵb = SidebarToggleDirective;
    exports.ɵba = AppSidebarNavIconPipe;
    exports.ɵbb = AppSidebarNavBadgePipe;
    exports.ɵbc = AppSidebarNavLinkPipe;
    exports.ɵbd = AppSidebarNavItemClassPipe;
    exports.ɵc = SidebarMinimizeDirective;
    exports.ɵd = MobileSidebarToggleDirective;
    exports.ɵe = SidebarOffCanvasCloseDirective;
    exports.ɵf = BrandMinimizeDirective;
    exports.ɵg = AsideToggleDirective;
    exports.ɵh = HtmlAttributesDirective;
    exports.ɵi = ClassToggler;
    exports.ɵj = AppBreadcrumbService;
    exports.ɵk = AppSidebarService;
    exports.ɵl = AppSidebarFooterComponent;
    exports.ɵm = AppSidebarFormComponent;
    exports.ɵn = AppSidebarHeaderComponent;
    exports.ɵo = AppSidebarMinimizerComponent;
    exports.ɵp = AppSidebarNavItemsComponent;
    exports.ɵq = SidebarNavHelper;
    exports.ɵr = AppSidebarNavComponent;
    exports.ɵs = AppSidebarNavDividerComponent;
    exports.ɵt = AppSidebarNavDropdownComponent;
    exports.ɵu = AppSidebarNavLinkContentComponent;
    exports.ɵv = AppSidebarNavLinkComponent;
    exports.ɵw = AppSidebarNavTitleComponent;
    exports.ɵx = NavDropdownDirective;
    exports.ɵy = NavDropdownToggleDirective;
    exports.ɵz = AppSidebarNavLabelComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=coreui-angular.umd.js.map
