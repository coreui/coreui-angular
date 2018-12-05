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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const RemoveClasses = (NewClassNames) => {
    /** @type {?} */
    const MatchClasses = NewClassNames.map((Class) => document.querySelector('body').classList.contains(Class));
    return MatchClasses.indexOf(true) !== -1;
};
/** @type {?} */
const ToggleClasses = (Toggle, ClassNames) => {
    /** @type {?} */
    const Level = ClassNames.indexOf(Toggle);
    /** @type {?} */
    const NewClassNames = ClassNames.slice(0, Level + 1);
    if (RemoveClasses(NewClassNames)) {
        NewClassNames.map((Class) => document.querySelector('body').classList.remove(Class));
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
class SidebarToggleDirective {
    constructor() { }
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
        let cssClass;
        this.bp ? cssClass = `sidebar-${this.bp}-show` : cssClass = sidebarCssClasses[0];
        ToggleClasses(cssClass, sidebarCssClasses);
    }
}
SidebarToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appSidebarToggler]'
            },] }
];
/** @nocollapse */
SidebarToggleDirective.ctorParameters = () => [];
SidebarToggleDirective.propDecorators = {
    breakpoint: [{ type: Input, args: ['appSidebarToggler',] }],
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
class SidebarMinimizeDirective {
    constructor() { }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleOpen($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-minimized');
    }
}
SidebarMinimizeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appSidebarMinimizer]'
            },] }
];
/** @nocollapse */
SidebarMinimizeDirective.ctorParameters = () => [];
SidebarMinimizeDirective.propDecorators = {
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
class MobileSidebarToggleDirective {
    constructor() { }
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
        document.querySelector('body').classList.toggle('sidebar-show');
    }
}
MobileSidebarToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appMobileSidebarToggler]'
            },] }
];
/** @nocollapse */
MobileSidebarToggleDirective.ctorParameters = () => [];
MobileSidebarToggleDirective.propDecorators = {
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
/**
 * Allows the off-canvas sidebar to be closed via click.
 */
class SidebarOffCanvasCloseDirective {
    constructor() { }
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
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    }
}
SidebarOffCanvasCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appSidebarClose]'
            },] }
];
/** @nocollapse */
SidebarOffCanvasCloseDirective.ctorParameters = () => [];
SidebarOffCanvasCloseDirective.propDecorators = {
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
class BrandMinimizeDirective {
    constructor() { }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleOpen($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('brand-minimized');
    }
}
BrandMinimizeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appBrandMinimizer]'
            },] }
];
/** @nocollapse */
BrandMinimizeDirective.ctorParameters = () => [];
BrandMinimizeDirective.propDecorators = {
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
/**
 * Allows the aside to be toggled via click.
 */
class AsideToggleDirective {
    constructor() { }
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
        let cssClass;
        this.bp ? cssClass = `aside-menu-${this.bp}-show` : cssClass = asideMenuCssClasses[0];
        ToggleClasses(cssClass, asideMenuCssClasses);
    }
}
AsideToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appAsideMenuToggler]',
            },] }
];
/** @nocollapse */
AsideToggleDirective.ctorParameters = () => [];
AsideToggleDirective.propDecorators = {
    breakpoint: [{ type: Input, args: ['appAsideMenuToggler',] }],
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppAsideComponent {
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
        this.isFixed(this.fixed);
        this.isOffCanvas(this.offCanvas);
        this.displayBreakpoint(this.display);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        document.body.classList.remove('aside-menu-fixed');
    }
    /**
     * @param {?} fixed
     * @return {?}
     */
    isFixed(fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('aside-menu-fixed');
        }
    }
    /**
     * @param {?} offCanvas
     * @return {?}
     */
    isOffCanvas(offCanvas) {
        if (this.offCanvas) {
            document.querySelector('body').classList.add('aside-menu-off-canvas');
        }
    }
    /**
     * @param {?} display
     * @return {?}
     */
    displayBreakpoint(display) {
        if (this.display !== false) {
            /** @type {?} */
            let cssClass;
            this.display ? cssClass = `aside-menu-${this.display}-show` : cssClass = asideMenuCssClasses[0];
            document.querySelector('body').classList.add(cssClass);
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
    { type: ElementRef }
];
AppAsideComponent.propDecorators = {
    display: [{ type: Input }],
    fixed: [{ type: Input }],
    offCanvas: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
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
                childrenRoutes.forEach(route => {
                    if (route.outlet === 'primary') {
                        /** @type {?} */
                        const routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
                        breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
            this._breadcrumbs.next(Object.assign([], breadcrumbs));
            return breadcrumbs;
        });
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppBreadcrumbComponent {
    /**
     * @param {?} service
     * @param {?} el
     */
    constructor(service, el) {
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
        document.body.classList.remove('breadcrumb-fixed');
    }
    /**
     * @param {?} fixed
     * @return {?}
     */
    isFixed(fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('breadcrumb-fixed');
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
    { type: AppBreadcrumbService },
    { type: ElementRef }
];
AppBreadcrumbComponent.propDecorators = {
    fixed: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppFooterComponent {
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
        this.isFixed(this.fixed);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        document.body.classList.remove('footer-fixed');
    }
    /**
     * @param {?} fixed
     * @return {?}
     */
    isFixed(fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('footer-fixed');
        }
    }
}
AppFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-footer',
                template: `
    <footer class="app-footer">
      <ng-content></ng-content>
    </footer>
  `
            }] }
];
/** @nocollapse */
AppFooterComponent.ctorParameters = () => [
    { type: ElementRef }
];
AppFooterComponent.propDecorators = {
    fixed: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppHeaderComponent {
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
        this.isFixed(this.fixed);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        document.body.classList.remove('header-fixed');
    }
    /**
     * @param {?} fixed
     * @return {?}
     */
    isFixed(fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('header-fixed');
        }
    }
    /**
     * @param {?} brand
     * @return {?}
     */
    imgSrc(brand) {
        return brand.src ? brand.src : '';
    }
    /**
     * @param {?} brand
     * @return {?}
     */
    imgWidth(brand) {
        return brand.width ? brand.width : 'auto';
    }
    /**
     * @param {?} brand
     * @return {?}
     */
    imgHeight(brand) {
        return brand.height ? brand.height : 'auto';
    }
    /**
     * @param {?} brand
     * @return {?}
     */
    imgAlt(brand) {
        return brand.alt ? brand.alt : '';
    }
    /**
     * @param {?} breakpoint
     * @return {?}
     */
    breakpoint(breakpoint) {
        console.log(breakpoint);
        return breakpoint ? breakpoint : '';
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
      <ng-template [ngIf]="navbarBrand || navbarBrandFull || navbarBrandMinimized">
        <a class="navbar-brand" href="#">
          <img *ngIf="navbarBrand"
               [src]="imgSrc(navbarBrand)"
               [attr.width]="imgWidth(navbarBrand)"
               [attr.height]="imgHeight(navbarBrand)"
               [attr.alt]="imgAlt(navbarBrand)"
               class="navbar-brand">
          <img *ngIf="navbarBrandFull"
               [src]="imgSrc(navbarBrandFull)"
               [attr.width]="imgWidth(navbarBrandFull)"
               [attr.height]="imgHeight(navbarBrandFull)"
               [attr.alt]="imgAlt(navbarBrandFull)"
               class="navbar-brand-full">
          <img *ngIf="navbarBrandMinimized"
               [src]="imgSrc(navbarBrandMinimized)"
               [attr.width]="imgWidth(navbarBrandMinimized)"
               [attr.height]="imgHeight(navbarBrandMinimized)"
               [attr.alt]="imgAlt(navbarBrandMinimized)"
               class="navbar-brand-minimized">
        </a>
      </ng-template>
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
    { type: ElementRef }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppSidebarComponent {
    constructor() { }
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
        document.body.classList.remove('sidebar-fixed');
    }
    /**
     * @param {?} compact
     * @return {?}
     */
    isCompact(compact) {
        if (this.compact) {
            document.querySelector('body').classList.add('sidebar-compact');
        }
    }
    /**
     * @param {?} fixed
     * @return {?}
     */
    isFixed(fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('sidebar-fixed');
        }
    }
    /**
     * @param {?} minimized
     * @return {?}
     */
    isMinimized(minimized) {
        if (this.minimized) {
            document.querySelector('body').classList.add('sidebar-minimized');
        }
    }
    /**
     * @param {?} offCanvas
     * @return {?}
     */
    isOffCanvas(offCanvas) {
        if (this.offCanvas) {
            document.querySelector('body').classList.add('sidebar-off-canvas');
        }
    }
    /**
     * @param {?} fixed
     * @return {?}
     */
    fixedPosition(fixed) {
        console.warn('fixedPosition() is deprecated, use isFixed() instead');
        if (this.fixed) {
            document.querySelector('body').classList.add('sidebar-fixed');
        }
    }
    /**
     * @param {?} display
     * @return {?}
     */
    displayBreakpoint(display) {
        if (this.display !== false) {
            /** @type {?} */
            let cssClass;
            this.display ? cssClass = `sidebar-${this.display}-show` : cssClass = sidebarCssClasses[0];
            document.querySelector('body').classList.add(cssClass);
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
AppSidebarComponent.ctorParameters = () => [];
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
class LinkAttributesDirective {
    /**
     * @param {?} renderer
     * @param {?} el
     */
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const attribs = this.appLinkAttributes;
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
        const classArray = Array.isArray(classes) ? classes : classes.split(' ');
        classArray.forEach(element => {
            this.renderer.addClass(this.el.nativeElement, element);
        });
    }
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setAttrib(key, value) {
        /** @type {?} */
        const newAttr = document.createAttribute(key);
        newAttr.value = value;
        this.renderer.setAttribute(this.el.nativeElement, key, value);
    }
}
LinkAttributesDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appLinkAttributes]'
            },] }
];
/** @nocollapse */
LinkAttributesDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
LinkAttributesDirective.propDecorators = {
    appLinkAttributes: [{ type: Input }]
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
    </ul>`
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
        if (document.body.classList.contains('sidebar-show')) {
            document.body.classList.toggle('sidebar-show');
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
      [appLinkAttributes]="link.attributes"
      href=""
      [ngClass]="getClasses()">
        <i *ngIf="isIcon()" class="nav-icon {{ link.icon }}"></i>
        {{ link.name }}
        <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
      </a>
      <a *ngSwitchCase="'external'" [ngClass]="getClasses()" href="{{link.url}}" [appLinkAttributes]="link.attributes">
        <i *ngIf="isIcon()" class="nav-icon {{ link.icon }}"></i>
        {{ link.name }}
        <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
      </a>
      <a *ngSwitchDefault
        [ngClass]="getClasses()"
        [appLinkAttributes]="link.attributes"
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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