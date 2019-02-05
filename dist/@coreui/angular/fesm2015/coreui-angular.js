import { BehaviorSubject } from 'rxjs/index';
import { filter } from 'rxjs/operators';
import { Inject, Injectable, Renderer2, Directive, ElementRef, HostListener, Input, NgModule, Component, HostBinding } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd, RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const sidebarCssClasses = [
    'sidebar-show',
    'sidebar-sm-show',
    'sidebar-md-show',
    'sidebar-lg-show',
    'sidebar-xl-show'
];
/** @type {?} */
const asideMenuCssClasses = [
    'aside-menu-show',
    'aside-menu-sm-show',
    'aside-menu-md-show',
    'aside-menu-lg-show',
    'aside-menu-xl-show'
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClassToggler {
    /**
     * @param {?} document
     * @param {?} renderer
     */
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    /**
     * @param {?} NewClassNames
     * @return {?}
     */
    removeClasses(NewClassNames) {
        /** @type {?} */
        const MatchClasses = NewClassNames.map((/**
         * @param {?} Class
         * @return {?}
         */
        (Class) => this.document.body.classList.contains(Class)));
        return MatchClasses.indexOf(true) !== -1;
    }
    /**
     * @param {?} Toggle
     * @param {?} ClassNames
     * @return {?}
     */
    toggleClasses(Toggle, ClassNames) {
        /** @type {?} */
        const Level = ClassNames.indexOf(Toggle);
        /** @type {?} */
        const NewClassNames = ClassNames.slice(0, Level + 1);
        if (this.removeClasses(NewClassNames)) {
            NewClassNames.map((/**
             * @param {?} Class
             * @return {?}
             */
            (Class) => this.renderer.removeClass(this.document.body, Class)));
        }
        else {
            this.renderer.addClass(this.document.body, Toggle);
        }
    }
}
ClassToggler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClassToggler.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Allows the sidebar to be toggled via click.
 */
class SidebarToggleDirective {
    /**
     * @param {?} classToggler
     */
    constructor(classToggler) {
        this.classToggler = classToggler;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.bp = this.breakpoint;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleOpen($event) {
        $event.preventDefault();
        /** @type {?} */
        const cssClass = this.bp ? `sidebar-${this.bp}-show` : sidebarCssClasses[0];
        this.classToggler.toggleClasses(cssClass, sidebarCssClasses);
    }
}
SidebarToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appSidebarToggler]',
                providers: [ClassToggler]
            },] }
];
/** @nocollapse */
SidebarToggleDirective.ctorParameters = () => [
    { type: ClassToggler }
];
SidebarToggleDirective.propDecorators = {
    breakpoint: [{ type: Input, args: ['appSidebarToggler',] }],
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
class SidebarMinimizeDirective {
    /**
     * @param {?} document
     * @param {?} renderer
     */
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleOpen($event) {
        $event.preventDefault();
        /** @type {?} */
        const body = this.document.body;
        body.classList.contains('sidebar-minimized') ?
            this.renderer.removeClass(body, 'sidebar-minimized') :
            this.renderer.addClass(body, 'sidebar-minimized');
        // document.body.classList.toggle('sidebar-minimized');
    }
}
SidebarMinimizeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appSidebarMinimizer]'
            },] }
];
/** @nocollapse */
SidebarMinimizeDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
SidebarMinimizeDirective.propDecorators = {
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
class MobileSidebarToggleDirective {
    /**
     * @param {?} document
     * @param {?} renderer
     */
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    // Check if element has class
    /**
     * @private
     * @param {?} target
     * @param {?} elementClassName
     * @return {?}
     */
    hasClass(target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleOpen($event) {
        $event.preventDefault();
        /** @type {?} */
        const body = this.document.body;
        body.classList.contains('sidebar-show') ?
            this.renderer.removeClass(body, 'sidebar-show') :
            this.renderer.addClass(body, 'sidebar-show');
        // document.body.classList.toggle('sidebar-show');
    }
}
MobileSidebarToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appMobileSidebarToggler]'
            },] }
];
/** @nocollapse */
MobileSidebarToggleDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
MobileSidebarToggleDirective.propDecorators = {
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
/**
 * Allows the off-canvas sidebar to be closed via click.
 */
class SidebarOffCanvasCloseDirective {
    /**
     * @param {?} document
     * @param {?} renderer
     */
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    // Check if element has class
    /**
     * @private
     * @param {?} target
     * @param {?} elementClassName
     * @return {?}
     */
    hasClass(target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    }
    // Toggle element class
    /**
     * @private
     * @param {?} elem
     * @param {?} elementClassName
     * @return {?}
     */
    toggleClass(elem, elementClassName) {
        /** @type {?} */
        let newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleOpen($event) {
        $event.preventDefault();
        /** @type {?} */
        const body = this.document.body;
        if (this.hasClass(body, 'sidebar-off-canvas')) {
            body.classList.contains('sidebar-show') ?
                this.renderer.removeClass(body, 'sidebar-show') :
                this.renderer.addClass(body, 'sidebar-show');
            // this.toggleClass(document.body, 'sidebar-opened');
        }
    }
}
SidebarOffCanvasCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appSidebarClose]'
            },] }
];
/** @nocollapse */
SidebarOffCanvasCloseDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
SidebarOffCanvasCloseDirective.propDecorators = {
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
class BrandMinimizeDirective {
    /**
     * @param {?} document
     * @param {?} renderer
     */
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleOpen($event) {
        $event.preventDefault();
        /** @type {?} */
        const body = this.document.body;
        body.classList.contains('brand-minimized') ?
            this.renderer.removeClass(body, 'brand-minimized') :
            this.renderer.addClass(body, 'brand-minimized');
        // document.body.classList.toggle('brand-minimized');
    }
}
BrandMinimizeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appBrandMinimizer]'
            },] }
];
/** @nocollapse */
BrandMinimizeDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
BrandMinimizeDirective.propDecorators = {
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
/**
 * Allows the aside to be toggled via click.
 */
class AsideToggleDirective {
    /**
     * @param {?} classToggler
     */
    constructor(classToggler) {
        this.classToggler = classToggler;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.bp = this.breakpoint;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleOpen($event) {
        $event.preventDefault();
        /** @type {?} */
        const cssClass = this.bp ? `aside-menu-${this.bp}-show` : asideMenuCssClasses[0];
        this.classToggler.toggleClasses(cssClass, asideMenuCssClasses);
    }
}
AsideToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appAsideMenuToggler]',
                providers: [ClassToggler]
            },] }
];
/** @nocollapse */
AsideToggleDirective.ctorParameters = () => [
    { type: ClassToggler }
];
AsideToggleDirective.propDecorators = {
    breakpoint: [{ type: Input, args: ['appAsideMenuToggler',] }],
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
class HtmlAttributesDirective {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} el
     */
    constructor(document, renderer, el) {
        this.document = document;
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
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
    /**
     * @private
     * @param {?} styles
     * @return {?}
     */
    setStyle(styles) {
        for (const style in styles) {
            this.renderer.setStyle(this.el.nativeElement, style, styles[style]);
        }
    }
    /**
     * @private
     * @param {?} classes
     * @return {?}
     */
    addClass(classes) {
        /** @type {?} */
        const classArray = (Array.isArray(classes) ? classes : classes.split(' '));
        classArray.filter((/**
         * @param {?} element
         * @return {?}
         */
        (element) => element.length > 0)).forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            this.renderer.addClass(this.el.nativeElement, element);
        }));
    }
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setAttrib(key, value) {
        this.renderer.setAttribute(this.el.nativeElement, key, value);
    }
}
HtmlAttributesDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appHtmlAttr]'
            },] }
];
/** @nocollapse */
HtmlAttributesDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
HtmlAttributesDirective.propDecorators = {
    appHtmlAttr: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayoutModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} el
 * @return {?}
 */
function Replace(el) {
    /** @type {?} */
    const nativeElement = el.nativeElement;
    /** @type {?} */
    const parentElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
        parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppAsideComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} el
     */
    constructor(document, renderer, el) {
        this.document = document;
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        Replace(this.el);
        this.isFixed(this.fixed);
        this.isOffCanvas(this.offCanvas);
        this.displayBreakpoint(this.display);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, 'aside-menu-fixed');
    }
    /**
     * @param {?=} fixed
     * @return {?}
     */
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, 'aside-menu-fixed');
        }
    }
    /**
     * @param {?=} offCanvas
     * @return {?}
     */
    isOffCanvas(offCanvas = this.offCanvas) {
        if (offCanvas) {
            this.renderer.addClass(this.document.body, 'aside-menu-off-canvas');
        }
    }
    /**
     * @param {?=} display
     * @return {?}
     */
    displayBreakpoint(display = this.display) {
        if (display !== false) {
            /** @type {?} */
            const cssClass = this.display ? `aside-menu-${this.display}-show` : asideMenuCssClasses[0];
            this.renderer.addClass(this.document.body, cssClass);
        }
    }
}
AppAsideComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-aside',
                template: `
    <aside class="aside-menu">
      <ng-content></ng-content>
    </aside>
  `
            }] }
];
/** @nocollapse */
AppAsideComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
AppAsideComponent.propDecorators = {
    display: [{ type: Input }],
    fixed: [{ type: Input }],
    offCanvas: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppAsideModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppBreadcrumbService {
    /**
     * @param {?} router
     * @param {?} route
     */
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this._breadcrumbs = new BehaviorSubject(new Array());
        this.breadcrumbs = this._breadcrumbs.asObservable();
        this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof NavigationEnd))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const breadcrumbs = [];
            /** @type {?} */
            let currentRoute = this.route.root;
            /** @type {?} */
            let url = '';
            do {
                /** @type {?} */
                const childrenRoutes = currentRoute.children;
                currentRoute = null;
                // tslint:disable-next-line:no-shadowed-variable
                childrenRoutes.forEach((/**
                 * @param {?} route
                 * @return {?}
                 */
                route => {
                    if (route.outlet === 'primary') {
                        /** @type {?} */
                        const routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map((/**
                         * @param {?} segment
                         * @return {?}
                         */
                        segment => segment.path)).join('/');
                        breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                }));
            } while (currentRoute);
            this._breadcrumbs.next(Object.assign([], breadcrumbs));
            return breadcrumbs;
        }));
    }
}
AppBreadcrumbService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AppBreadcrumbService.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppBreadcrumbComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} service
     * @param {?} el
     */
    constructor(document, renderer, service, el) {
        this.document = document;
        this.renderer = renderer;
        this.service = service;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        Replace(this.el);
        this.isFixed(this.fixed);
        this.breadcrumbs = this.service.breadcrumbs;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, 'breadcrumb-fixed');
    }
    /**
     * @param {?=} fixed
     * @return {?}
     */
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, 'breadcrumb-fixed');
        }
    }
}
AppBreadcrumbComponent.decorators = [
    { type: Component, args: [{
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
            }] }
];
/** @nocollapse */
AppBreadcrumbComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: AppBreadcrumbService },
    { type: ElementRef }
];
AppBreadcrumbComponent.propDecorators = {
    fixed: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
class AppBreadcrumbModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: AppBreadcrumbModule,
            providers: [
                AppBreadcrumbService
            ]
        };
    }
}
AppBreadcrumbModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule],
                exports: [AppBreadcrumbComponent],
                declarations: [AppBreadcrumbComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppFooterComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     */
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
        this.fixedClass = 'footer-fixed';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isFixed(this.fixed);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    /**
     * @param {?=} fixed
     * @return {?}
     */
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
}
AppFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-footer, cui-footer',
                template: `<ng-content></ng-content>`
            }] }
];
/** @nocollapse */
AppFooterComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
AppFooterComponent.propDecorators = {
    fixed: [{ type: Input }],
    true: [{ type: HostBinding, args: ['class.app-footer',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppFooterModule {
}
AppFooterModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [AppFooterComponent],
                declarations: [AppFooterComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppHeaderComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} el
     */
    constructor(document, renderer, el) {
        this.document = document;
        this.renderer = renderer;
        this.el = el;
        this.navbarBrandText = { icon: '🅲', text: '🅲 CoreUI' };
        this.navbarBrandHref = '';
        this.fixedClass = 'header-fixed';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        Replace(this.el);
        this.isFixed(this.fixed);
        this.navbarBrandImg = Boolean(this.navbarBrand || this.navbarBrandFull || this.navbarBrandMinimized);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    /**
     * @param {?=} fixed
     * @return {?}
     */
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
}
AppHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-header',
                template: `
    <header class="app-header navbar">
      <ng-template [ngIf]="mobileSidebarToggler != false">
        <button class="navbar-toggler d-lg-none" type="button" appSidebarToggler>
          <span class="navbar-toggler-icon"></span>
        </button>
      </ng-template>
        <a class="navbar-brand" [href]="navbarBrandHref">
          <ng-template [ngIf]="navbarBrandImg">
          <img *ngIf="navbarBrand"
               [appHtmlAttr]="navbarBrand"
               [ngClass]="'navbar-brand'">
          <img *ngIf="navbarBrandFull"
               [appHtmlAttr]="navbarBrandFull"
               [ngClass]="'navbar-brand-full'">
          <img *ngIf="navbarBrandMinimized"
               [appHtmlAttr]="navbarBrandMinimized"
               [ngClass]="'navbar-brand-minimized'">
          </ng-template>
          <ng-template [ngIf]="!navbarBrandImg">
            <div class="navbar-brand-full" [innerHTML]="navbarBrandText.text"></div>
            <div class="navbar-brand-minimized" [innerHTML]="navbarBrandText.icon"></div>
          </ng-template>
        </a>
      <ng-template [ngIf]="sidebarToggler != false">
        <button class="navbar-toggler d-md-down-none" type="button" [appSidebarToggler]="sidebarToggler">
          <span class="navbar-toggler-icon"></span>
        </button>
      </ng-template>
      <ng-content></ng-content>
      <ng-template [ngIf]="asideMenuToggler != false">
        <button class="navbar-toggler d-md-down-none" type="button" [appAsideMenuToggler]="asideMenuToggler">
          <span class="navbar-toggler-icon"></span>
        </button>
      </ng-template>
      <ng-template [ngIf]="mobileAsideMenuToggler != false">
        <button class="navbar-toggler d-lg-none" type="button" appAsideMenuToggler>
          <span class="navbar-toggler-icon"></span>
        </button>
      </ng-template>
    </header>
  `
            }] }
];
/** @nocollapse */
AppHeaderComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: ElementRef }
];
AppHeaderComponent.propDecorators = {
    fixed: [{ type: Input }],
    navbarBrand: [{ type: Input }],
    navbarBrandFull: [{ type: Input }],
    navbarBrandMinimized: [{ type: Input }],
    navbarBrandText: [{ type: Input }],
    navbarBrandHref: [{ type: Input }],
    sidebarToggler: [{ type: Input }],
    mobileSidebarToggler: [{ type: Input }],
    asideMenuToggler: [{ type: Input }],
    mobileAsideMenuToggler: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppHeaderModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppSidebarFooterComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        Replace(this.el);
    }
}
AppSidebarFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar-footer',
                template: `
    <div class="sidebar-footer">
      <ng-content></ng-content>
    </div>`
            }] }
];
/** @nocollapse */
AppSidebarFooterComponent.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppSidebarFormComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        Replace(this.el);
    }
}
AppSidebarFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar-form',
                template: `
    <form class="sidebar-form">
      <ng-content></ng-content>
    </form>
  `
            }] }
];
/** @nocollapse */
AppSidebarFormComponent.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppSidebarHeaderComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        Replace(this.el);
    }
}
AppSidebarHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar-header',
                template: `
    <div class="sidebar-header">
      <ng-content></ng-content>
    </div>
  `
            }] }
];
/** @nocollapse */
AppSidebarHeaderComponent.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppSidebarMinimizerComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        Replace(this.el);
    }
}
AppSidebarMinimizerComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar-minimizer',
                template: `
    <button class="sidebar-minimizer" type="button" appSidebarMinimizer appBrandMinimizer></button>
  `
            }] }
];
/** @nocollapse */
AppSidebarMinimizerComponent.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppSidebarComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     */
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.displayBreakpoint(this.display);
        this.isCompact(this.compact);
        this.isFixed(this.fixed);
        this.isMinimized(this.minimized);
        this.isOffCanvas(this.offCanvas);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, 'sidebar-fixed');
    }
    /**
     * @param {?=} compact
     * @return {?}
     */
    isCompact(compact = this.compact) {
        if (compact) {
            this.renderer.addClass(this.document.body, 'sidebar-compact');
        }
    }
    /**
     * @param {?=} fixed
     * @return {?}
     */
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, 'sidebar-fixed');
        }
    }
    /**
     * @param {?=} minimized
     * @return {?}
     */
    isMinimized(minimized = this.minimized) {
        if (minimized) {
            this.renderer.addClass(this.document.body, 'sidebar-minimized');
        }
    }
    /**
     * @param {?=} offCanvas
     * @return {?}
     */
    isOffCanvas(offCanvas = this.offCanvas) {
        if (offCanvas) {
            this.renderer.addClass(this.document.body, 'sidebar-off-canvas');
        }
    }
    /**
     * @param {?=} fixed
     * @return {?}
     */
    fixedPosition(fixed = this.fixed) {
        console.warn('deprecated fixedPosition(), use isFixed() instead');
        if (fixed) {
            this.renderer.addClass(this.document.body, 'sidebar-fixed');
        }
    }
    /**
     * @param {?=} display
     * @return {?}
     */
    displayBreakpoint(display = this.display) {
        if (display !== false) {
            /** @type {?} */
            const cssClass = display ? `sidebar-${display}-show` : sidebarCssClasses[0];
            this.renderer.addClass(this.document.body, cssClass);
        }
    }
}
AppSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar',
                template: `<ng-content></ng-content>`
            }] }
];
/** @nocollapse */
AppSidebarComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
AppSidebarComponent.propDecorators = {
    compact: [{ type: Input }],
    display: [{ type: Input }],
    fixed: [{ type: Input }],
    minimized: [{ type: Input }],
    offCanvas: [{ type: Input }],
    true: [{ type: HostBinding, args: ['class.sidebar',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavDropdownDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    toggle() {
        this.el.nativeElement.classList.toggle('open');
    }
}
NavDropdownDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appNavDropdown]'
            },] }
];
/** @nocollapse */
NavDropdownDirective.ctorParameters = () => [
    { type: ElementRef }
];
/**
 * Allows the dropdown to be toggled via click.
 */
class NavDropdownToggleDirective {
    /**
     * @param {?} dropdown
     */
    constructor(dropdown) {
        this.dropdown = dropdown;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleOpen($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    }
}
NavDropdownToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appNavDropdownToggle]'
            },] }
];
/** @nocollapse */
NavDropdownToggleDirective.ctorParameters = () => [
    { type: NavDropdownDirective }
];
NavDropdownToggleDirective.propDecorators = {
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
class AppSidebarNavComponent {
    constructor() {
        this.role = 'nav';
    }
    /**
     * @param {?} item
     * @return {?}
     */
    isDivider(item) {
        return item.divider ? true : false;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    isTitle(item) {
        return item.title ? true : false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.navItemsArray = JSON.parse(JSON.stringify(this.navItems));
    }
}
AppSidebarNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar-nav',
                template: `
    <ul class="nav">
      <ng-template ngFor let-navitem [ngForOf]="navItems">
        <li *ngIf="isDivider(navitem)" class="nav-divider"></li>
        <ng-template [ngIf]="isTitle(navitem)">
          <app-sidebar-nav-title [title]='navitem'></app-sidebar-nav-title>
        </ng-template>
        <ng-template [ngIf]="!isDivider(navitem)&&!isTitle(navitem)">
          <app-sidebar-nav-item [item]='navitem'></app-sidebar-nav-item>
        </ng-template>
      </ng-template>
    </ul>
  `
            }] }
];
/** @nocollapse */
AppSidebarNavComponent.ctorParameters = () => [];
AppSidebarNavComponent.propDecorators = {
    navItems: [{ type: Input }],
    true: [{ type: HostBinding, args: ['class.sidebar-nav',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }]
};
class AppSidebarNavItemComponent {
    /**
     * @param {?} router
     * @param {?} el
     */
    constructor(router, el) {
        this.router = router;
        this.el = el;
    }
    /**
     * @return {?}
     */
    hasClass() {
        return this.item.class ? true : false;
    }
    /**
     * @return {?}
     */
    isDropdown() {
        return this.item.children ? true : false;
    }
    /**
     * @return {?}
     */
    thisUrl() {
        return this.item.url;
    }
    /**
     * @return {?}
     */
    isActive() {
        return this.router.isActive(this.thisUrl(), false);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        Replace(this.el);
    }
}
AppSidebarNavItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar-nav-item',
                template: `
    <li *ngIf="!isDropdown(); else dropdown" [ngClass]="hasClass() ? 'nav-item ' + item.class : 'nav-item'">
      <app-sidebar-nav-link [link]='item'></app-sidebar-nav-link>
    </li>
    <ng-template #dropdown>
      <li [ngClass]="hasClass() ? 'nav-item nav-dropdown ' + item.class : 'nav-item nav-dropdown'"
          [class.open]="isActive()"
          routerLinkActive="open"
          appNavDropdown>
        <app-sidebar-nav-dropdown [link]='item'></app-sidebar-nav-dropdown>
      </li>
    </ng-template>
    `
            }] }
];
/** @nocollapse */
AppSidebarNavItemComponent.ctorParameters = () => [
    { type: Router },
    { type: ElementRef }
];
AppSidebarNavItemComponent.propDecorators = {
    item: [{ type: Input }]
};
class AppSidebarNavLinkComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} router
     * @param {?} el
     */
    constructor(document, renderer, router, el) {
        this.document = document;
        this.renderer = renderer;
        this.router = router;
        this.el = el;
    }
    /**
     * @return {?}
     */
    getClasses() {
        /** @type {?} */
        const disabled = this.isDisabled();
        /** @type {?} */
        const classes = {
            'nav-link': true,
            'disabled': disabled,
            'btn-link': disabled
        };
        if (this.hasVariant()) {
            /** @type {?} */
            const variant = `nav-link-${this.link.variant}`;
            classes[variant] = true;
        }
        return classes;
    }
    /**
     * @return {?}
     */
    getLinkType() {
        return this.isDisabled() ? 'disabled' : this.isExternalLink() ? 'external' : '';
    }
    /**
     * @return {?}
     */
    hasVariant() {
        return this.link.variant ? true : false;
    }
    /**
     * @return {?}
     */
    isBadge() {
        return this.link.badge ? true : false;
    }
    /**
     * @return {?}
     */
    isDisabled() {
        return this.link.attributes && this.link.attributes.disabled ? true : false;
    }
    /**
     * @return {?}
     */
    isExternalLink() {
        return this.link.url.substring(0, 4) === 'http' ? true : false;
    }
    /**
     * @return {?}
     */
    isIcon() {
        return this.link.icon ? true : false;
    }
    /**
     * @return {?}
     */
    hideMobile() {
        if (this.document.body.classList.contains('sidebar-show')) {
            this.renderer.removeClass(this.document.body, 'sidebar-show');
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        Replace(this.el);
    }
}
AppSidebarNavLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar-nav-link',
                template: `
    <ng-container [ngSwitch]="getLinkType()">
      <a *ngSwitchCase="'disabled'"
      [attr.disabled]="true"
      [appHtmlAttr]="link.attributes"
      href=""
      [ngClass]="getClasses()">
        <i *ngIf="isIcon()" class="nav-icon {{ link.icon }}"></i>
        {{ link.name }}
        <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
      </a>
      <a *ngSwitchCase="'external'" [ngClass]="getClasses()" href="{{link.url}}" [appHtmlAttr]="link.attributes">
        <i *ngIf="isIcon()" class="nav-icon {{ link.icon }}"></i>
        {{ link.name }}
        <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
      </a>
      <a *ngSwitchDefault
        [ngClass]="getClasses()"
        [appHtmlAttr]="link.attributes"
        routerLinkActive="active"
        [routerLink]="[link.url]"
        (click)="hideMobile()">
        <i *ngIf="isIcon()" class="nav-icon {{ link.icon }}"></i>
        {{ link.name }}
        <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
      </a>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
AppSidebarNavLinkComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: Router },
    { type: ElementRef }
];
AppSidebarNavLinkComponent.propDecorators = {
    link: [{ type: Input }]
};
class AppSidebarNavDropdownComponent {
    /**
     * @param {?} router
     * @param {?} el
     */
    constructor(router, el) {
        this.router = router;
        this.el = el;
    }
    /**
     * @return {?}
     */
    isBadge() {
        return this.link.badge ? true : false;
    }
    /**
     * @return {?}
     */
    isIcon() {
        return this.link.icon ? true : false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        Replace(this.el);
    }
}
AppSidebarNavDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar-nav-dropdown',
                template: `
    <a class="nav-link nav-dropdown-toggle" appNavDropdownToggle>
      <i *ngIf="isIcon()" class="nav-icon {{ link.icon }}"></i>
      {{ link.name }}
      <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
    </a>
    <ul class="nav-dropdown-items">
      <ng-template ngFor let-child [ngForOf]="link.children">
        <app-sidebar-nav-item [item]='child'></app-sidebar-nav-item>
      </ng-template>
    </ul>
  `,
                styles: ['.nav-dropdown-toggle { cursor: pointer; }']
            }] }
];
/** @nocollapse */
AppSidebarNavDropdownComponent.ctorParameters = () => [
    { type: Router },
    { type: ElementRef }
];
AppSidebarNavDropdownComponent.propDecorators = {
    link: [{ type: Input }]
};
class AppSidebarNavTitleComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const nativeElement = this.el.nativeElement;
        /** @type {?} */
        const li = this.renderer.createElement('li');
        /** @type {?} */
        const name = this.renderer.createText(this.title.name);
        this.renderer.addClass(li, 'nav-title');
        if (this.title.class) {
            /** @type {?} */
            const classes = this.title.class;
            this.renderer.addClass(li, classes);
        }
        if (this.title.wrapper) {
            /** @type {?} */
            const wrapper = this.renderer.createElement(this.title.wrapper.element);
            this.renderer.appendChild(wrapper, name);
            this.renderer.appendChild(li, wrapper);
        }
        else {
            this.renderer.appendChild(li, name);
        }
        this.renderer.appendChild(nativeElement, li);
        Replace(this.el);
    }
}
AppSidebarNavTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar-nav-title',
                template: ''
            }] }
];
/** @nocollapse */
AppSidebarNavTitleComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
AppSidebarNavTitleComponent.propDecorators = {
    title: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppSidebarModule {
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AppAsideModule, AppBreadcrumbModule, AppFooterModule, AppHeaderModule, AppSidebarModule, AppAsideComponent as ɵj, AppBreadcrumbComponent as ɵk, AppBreadcrumbService as ɵl, AppFooterComponent as ɵm, AppHeaderComponent as ɵn, AsideToggleDirective as ɵg, BrandMinimizeDirective as ɵf, HtmlAttributesDirective as ɵh, MobileSidebarToggleDirective as ɵd, SidebarMinimizeDirective as ɵc, SidebarOffCanvasCloseDirective as ɵe, SidebarToggleDirective as ɵb, LayoutModule as ɵa, ClassToggler as ɵi, AppSidebarFooterComponent as ɵo, AppSidebarFormComponent as ɵp, AppSidebarHeaderComponent as ɵq, AppSidebarMinimizerComponent as ɵr, AppSidebarNavComponent as ɵv, AppSidebarNavDropdownComponent as ɵy, AppSidebarNavItemComponent as ɵw, AppSidebarNavLinkComponent as ɵx, AppSidebarNavTitleComponent as ɵz, NavDropdownDirective as ɵt, NavDropdownToggleDirective as ɵu, AppSidebarComponent as ɵs };

//# sourceMappingURL=coreui-angular.js.map