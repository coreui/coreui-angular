import { Directive, HostListener, Input, NgModule, Component, ElementRef, Injectable, HostBinding, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs/index';
import { filter } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ sidebarCssClasses = [
    'sidebar-show',
    'sidebar-sm-show',
    'sidebar-md-show',
    'sidebar-lg-show',
    'sidebar-xl-show'
];
const /** @type {?} */ asideMenuCssClasses = [
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
const /** @type {?} */ RemoveClasses = (NewClassNames) => {
    const /** @type {?} */ MatchClasses = NewClassNames.map((Class) => document.querySelector('body').classList.contains(Class));
    return MatchClasses.indexOf(true) !== -1;
};
const /** @type {?} */ ToggleClasses = (Toggle, ClassNames) => {
    const /** @type {?} */ Level = ClassNames.indexOf(Toggle);
    const /** @type {?} */ NewClassNames = ClassNames.slice(0, Level + 1);
    if (RemoveClasses(NewClassNames)) {
        NewClassNames.map((Class) => document.querySelector('body').classList.remove(Class));
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
        let /** @type {?} */ cssClass;
        this.bp ? cssClass = `sidebar-${this.bp}-show` : cssClass = sidebarCssClasses[0];
        ToggleClasses(cssClass, sidebarCssClasses);
    }
}
SidebarToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appSidebarToggler]'
            },] },
];
/** @nocollapse */
SidebarToggleDirective.ctorParameters = () => [];
SidebarToggleDirective.propDecorators = {
    "breakpoint": [{ type: Input, args: ['appSidebarToggler',] },],
    "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
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
            },] },
];
/** @nocollapse */
SidebarMinimizeDirective.ctorParameters = () => [];
SidebarMinimizeDirective.propDecorators = {
    "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
};
class MobileSidebarToggleDirective {
    constructor() { }
    /**
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
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    }
}
MobileSidebarToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appMobileSidebarToggler]'
            },] },
];
/** @nocollapse */
MobileSidebarToggleDirective.ctorParameters = () => [];
MobileSidebarToggleDirective.propDecorators = {
    "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
};
/**
 * Allows the off-canvas sidebar to be closed via click.
 */
class SidebarOffCanvasCloseDirective {
    constructor() { }
    /**
     * @param {?} target
     * @param {?} elementClassName
     * @return {?}
     */
    hasClass(target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    }
    /**
     * @param {?} elem
     * @param {?} elementClassName
     * @return {?}
     */
    toggleClass(elem, elementClassName) {
        let /** @type {?} */ newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
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
            },] },
];
/** @nocollapse */
SidebarOffCanvasCloseDirective.ctorParameters = () => [];
SidebarOffCanvasCloseDirective.propDecorators = {
    "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
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
            },] },
];
/** @nocollapse */
BrandMinimizeDirective.ctorParameters = () => [];
BrandMinimizeDirective.propDecorators = {
    "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
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
        let /** @type {?} */ cssClass;
        this.bp ? cssClass = `aside-menu-${this.bp}-show` : cssClass = asideMenuCssClasses[0];
        ToggleClasses(cssClass, asideMenuCssClasses);
    }
}
AsideToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appAsideMenuToggler]',
            },] },
];
/** @nocollapse */
AsideToggleDirective.ctorParameters = () => [];
AsideToggleDirective.propDecorators = {
    "breakpoint": [{ type: Input, args: ['appAsideMenuToggler',] },],
    "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            },] },
];

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
    const /** @type {?} */ nativeElement = el.nativeElement;
    const /** @type {?} */ parentElement = nativeElement.parentElement;
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
        this.displayBreakpoint(this.display);
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
            let /** @type {?} */ cssClass;
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
            },] },
];
/** @nocollapse */
AppAsideComponent.ctorParameters = () => [
    { type: ElementRef, },
];
AppAsideComponent.propDecorators = {
    "display": [{ type: Input },],
    "fixed": [{ type: Input },],
    "offCanvas": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            const /** @type {?} */ breadcrumbs = [];
            let /** @type {?} */ currentRoute = this.route.root, /** @type {?} */
            url = '';
            do {
                const /** @type {?} */ childrenRoutes = currentRoute.children;
                currentRoute = null;
                // tslint:disable-next-line:no-shadowed-variable
                childrenRoutes.forEach(route => {
                    if (route.outlet === 'primary') {
                        const /** @type {?} */ routeSnapshot = route.snapshot;
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
    { type: Injectable },
];
/** @nocollapse */
AppBreadcrumbService.ctorParameters = () => [
    { type: Router, },
    { type: ActivatedRoute, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            },] },
];
/** @nocollapse */
AppBreadcrumbComponent.ctorParameters = () => [
    { type: AppBreadcrumbService, },
    { type: ElementRef, },
];
AppBreadcrumbComponent.propDecorators = {
    "fixed": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            },] },
];
/** @nocollapse */
AppFooterComponent.ctorParameters = () => [
    { type: ElementRef, },
];
AppFooterComponent.propDecorators = {
    "fixed": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AppFooterModule {
}
AppFooterModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [AppFooterComponent],
                declarations: [AppFooterComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            },] },
];
/** @nocollapse */
AppHeaderComponent.ctorParameters = () => [
    { type: ElementRef, },
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            },] },
];
/** @nocollapse */
AppSidebarFooterComponent.ctorParameters = () => [
    { type: ElementRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            },] },
];
/** @nocollapse */
AppSidebarFormComponent.ctorParameters = () => [
    { type: ElementRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            },] },
];
/** @nocollapse */
AppSidebarHeaderComponent.ctorParameters = () => [
    { type: ElementRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            },] },
];
/** @nocollapse */
AppSidebarMinimizerComponent.ctorParameters = () => [
    { type: ElementRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            let /** @type {?} */ cssClass;
            this.display ? cssClass = `sidebar-${this.display}-show` : cssClass = sidebarCssClasses[0];
            document.querySelector('body').classList.add(cssClass);
        }
    }
}
AppSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar',
                template: `<ng-content></ng-content>`
            },] },
];
/** @nocollapse */
AppSidebarComponent.ctorParameters = () => [];
AppSidebarComponent.propDecorators = {
    "compact": [{ type: Input },],
    "display": [{ type: Input },],
    "fixed": [{ type: Input },],
    "minimized": [{ type: Input },],
    "offCanvas": [{ type: Input },],
    "true": [{ type: HostBinding, args: ['class.sidebar',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            },] },
];
/** @nocollapse */
NavDropdownDirective.ctorParameters = () => [
    { type: ElementRef, },
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
            },] },
];
/** @nocollapse */
NavDropdownToggleDirective.ctorParameters = () => [
    { type: NavDropdownDirective, },
];
NavDropdownToggleDirective.propDecorators = {
    "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
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
            },] },
];
/** @nocollapse */
AppSidebarNavComponent.ctorParameters = () => [];
AppSidebarNavComponent.propDecorators = {
    "navItems": [{ type: Input },],
    "true": [{ type: HostBinding, args: ['class.sidebar-nav',] },],
    "role": [{ type: HostBinding, args: ['attr.role',] },],
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
            },] },
];
/** @nocollapse */
AppSidebarNavItemComponent.ctorParameters = () => [
    { type: Router, },
    { type: ElementRef, },
];
AppSidebarNavItemComponent.propDecorators = {
    "item": [{ type: Input },],
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
        if (document.body.classList.contains('sidebar-mobile-show')) {
            document.body.classList.toggle('sidebar-mobile-show');
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
    <a *ngIf="!isExternalLink(); else external"
      [ngClass]="hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'"
      routerLinkActive="active"
      [routerLink]="[link.url]"
      (click)="hideMobile()">
      <i *ngIf="isIcon()" class="nav-icon {{ link.icon }}"></i>
      {{ link.name }}
      <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
    </a>
    <ng-template #external>
      <a [ngClass]="hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'" href="{{link.url}}">
        <i *ngIf="isIcon()" class="nav-icon {{ link.icon }}"></i>
        {{ link.name }}
        <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
      </a>
    </ng-template>
  `
            },] },
];
/** @nocollapse */
AppSidebarNavLinkComponent.ctorParameters = () => [
    { type: Router, },
    { type: ElementRef, },
];
AppSidebarNavLinkComponent.propDecorators = {
    "link": [{ type: Input },],
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
            },] },
];
/** @nocollapse */
AppSidebarNavDropdownComponent.ctorParameters = () => [
    { type: Router, },
    { type: ElementRef, },
];
AppSidebarNavDropdownComponent.propDecorators = {
    "link": [{ type: Input },],
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
        const /** @type {?} */ nativeElement = this.el.nativeElement;
        const /** @type {?} */ li = this.renderer.createElement('li');
        const /** @type {?} */ name = this.renderer.createText(this.title.name);
        this.renderer.addClass(li, 'nav-title');
        if (this.title.class) {
            const /** @type {?} */ classes = this.title.class;
            this.renderer.addClass(li, classes);
        }
        if (this.title.wrapper) {
            const /** @type {?} */ wrapper = this.renderer.createElement(this.title.wrapper.element);
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
            },] },
];
/** @nocollapse */
AppSidebarNavTitleComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
AppSidebarNavTitleComponent.propDecorators = {
    "title": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            },] },
];

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZXVpLWFuZ3VsYXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvc2hhcmVkL2NsYXNzZXMudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvc2hhcmVkL3RvZ2dsZS1jbGFzc2VzLnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL3NoYXJlZC9sYXlvdXQvbGF5b3V0LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9zaGFyZWQvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvc2hhcmVkL3JlcGxhY2UudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvYXNpZGUvYXBwLWFzaWRlLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9hc2lkZS9hcHAtYXNpZGUubW9kdWxlLnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL2JyZWFkY3J1bWIvYXBwLWJyZWFkY3J1bWIuc2VydmljZS50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9icmVhZGNydW1iL2FwcC1icmVhZGNydW1iLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9icmVhZGNydW1iL2FwcC1icmVhZGNydW1iLm1vZHVsZS50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9mb290ZXIvYXBwLWZvb3Rlci5jb21wb25lbnQudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvZm9vdGVyL2FwcC1mb290ZXIubW9kdWxlLnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL2hlYWRlci9hcHAtaGVhZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9oZWFkZXIvYXBwLWhlYWRlci5tb2R1bGUudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvc2lkZWJhci9hcHAtc2lkZWJhci1mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL3NpZGViYXIvYXBwLXNpZGViYXItZm9ybS5jb21wb25lbnQudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvc2lkZWJhci9hcHAtc2lkZWJhci1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY29yZXVpL2FuZ3VsYXIvbGliL3NpZGViYXIvYXBwLXNpZGViYXItbWluaW1pemVyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvcmV1aS9hbmd1bGFyL2xpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi5jb21wb25lbnQudHMiLCJuZzovL0Bjb3JldWkvYW5ndWxhci9saWIvc2lkZWJhci9hcHAtc2lkZWJhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNpZGViYXJDc3NDbGFzc2VzOiBBcnJheTxzdHJpbmc+ID0gW1xuICAnc2lkZWJhci1zaG93JyxcbiAgJ3NpZGViYXItc20tc2hvdycsXG4gICdzaWRlYmFyLW1kLXNob3cnLFxuICAnc2lkZWJhci1sZy1zaG93JyxcbiAgJ3NpZGViYXIteGwtc2hvdydcbl07XG5cbmV4cG9ydCBjb25zdCBhc2lkZU1lbnVDc3NDbGFzc2VzOiBBcnJheTxzdHJpbmc+ID0gW1xuICAnYXNpZGUtbWVudS1zaG93JyxcbiAgJ2FzaWRlLW1lbnUtc20tc2hvdycsXG4gICdhc2lkZS1tZW51LW1kLXNob3cnLFxuICAnYXNpZGUtbWVudS1sZy1zaG93JyxcbiAgJ2FzaWRlLW1lbnUteGwtc2hvdydcbl07XG4iLCJjb25zdCBSZW1vdmVDbGFzc2VzID0gKE5ld0NsYXNzTmFtZXMpID0+IHtcbiAgY29uc3QgTWF0Y2hDbGFzc2VzID0gTmV3Q2xhc3NOYW1lcy5tYXAoKENsYXNzKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzKSk7XG4gIHJldHVybiBNYXRjaENsYXNzZXMuaW5kZXhPZih0cnVlKSAhPT0gLTE7XG59O1xuXG5leHBvcnQgY29uc3QgVG9nZ2xlQ2xhc3NlcyA9IChUb2dnbGUsIENsYXNzTmFtZXMpID0+IHtcbiAgY29uc3QgTGV2ZWwgPSBDbGFzc05hbWVzLmluZGV4T2YoVG9nZ2xlKTtcbiAgY29uc3QgTmV3Q2xhc3NOYW1lcyA9IENsYXNzTmFtZXMuc2xpY2UoMCwgTGV2ZWwgKyAxKTtcblxuICBpZiAoUmVtb3ZlQ2xhc3NlcyhOZXdDbGFzc05hbWVzKSkge1xuICAgIE5ld0NsYXNzTmFtZXMubWFwKChDbGFzcykgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3MpKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZChUb2dnbGUpO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNpZGViYXJDc3NDbGFzc2VzLCBhc2lkZU1lbnVDc3NDbGFzc2VzIH0gZnJvbSAnLi8uLi9jbGFzc2VzJztcbmltcG9ydCB7IFRvZ2dsZUNsYXNzZXMgfSBmcm9tICcuLy4uL3RvZ2dsZS1jbGFzc2VzJztcblxuLyoqXG4qIEFsbG93cyB0aGUgc2lkZWJhciB0byBiZSB0b2dnbGVkIHZpYSBjbGljay5cbiovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwU2lkZWJhclRvZ2dsZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdhcHBTaWRlYmFyVG9nZ2xlcicpIGJyZWFrcG9pbnQ6IHN0cmluZztcbiAgcHVibGljIGJwO1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYnAgPSB0aGlzLmJyZWFrcG9pbnQ7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGNzc0NsYXNzO1xuICAgIHRoaXMuYnAgPyBjc3NDbGFzcyA9IGBzaWRlYmFyLSR7dGhpcy5icH0tc2hvd2AgOiBjc3NDbGFzcyA9IHNpZGViYXJDc3NDbGFzc2VzWzBdO1xuICAgIFRvZ2dsZUNsYXNzZXMoY3NzQ2xhc3MsIHNpZGViYXJDc3NDbGFzc2VzKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwU2lkZWJhck1pbmltaXplcl0nXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJNaW5pbWl6ZURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ3NpZGViYXItbWluaW1pemVkJyk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcE1vYmlsZVNpZGViYXJUb2dnbGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgTW9iaWxlU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLy8gQ2hlY2sgaWYgZWxlbWVudCBoYXMgY2xhc3NcbiAgcHJpdmF0ZSBoYXNDbGFzcyh0YXJnZXQ6IGFueSwgZWxlbWVudENsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJyhcXFxcc3xeKScgKyBlbGVtZW50Q2xhc3NOYW1lICsgJyhcXFxcc3wkKScpLnRlc3QodGFyZ2V0LmNsYXNzTmFtZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnc2lkZWJhci1tb2JpbGUtc2hvdycpO1xuICB9XG59XG5cbi8qKlxuKiBBbGxvd3MgdGhlIG9mZi1jYW52YXMgc2lkZWJhciB0byBiZSBjbG9zZWQgdmlhIGNsaWNrLlxuKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBTaWRlYmFyQ2xvc2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyT2ZmQ2FudmFzQ2xvc2VEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8vIENoZWNrIGlmIGVsZW1lbnQgaGFzIGNsYXNzXG4gIHByaXZhdGUgaGFzQ2xhc3ModGFyZ2V0OiBhbnksIGVsZW1lbnRDbGFzc05hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKCcoXFxcXHN8XiknICsgZWxlbWVudENsYXNzTmFtZSArICcoXFxcXHN8JCknKS50ZXN0KHRhcmdldC5jbGFzc05hbWUpO1xuICB9XG5cbiAgLy8gVG9nZ2xlIGVsZW1lbnQgY2xhc3NcbiAgcHJpdmF0ZSB0b2dnbGVDbGFzcyhlbGVtOiBhbnksIGVsZW1lbnRDbGFzc05hbWU6IHN0cmluZykge1xuICAgIGxldCBuZXdDbGFzcyA9ICcgJyArIGVsZW0uY2xhc3NOYW1lLnJlcGxhY2UoIC9bXFx0XFxyXFxuXS9nLCAnICcgKSArICcgJztcbiAgICBpZiAodGhpcy5oYXNDbGFzcyhlbGVtLCBlbGVtZW50Q2xhc3NOYW1lKSkge1xuICAgICAgd2hpbGUgKG5ld0NsYXNzLmluZGV4T2YoJyAnICsgZWxlbWVudENsYXNzTmFtZSArICcgJykgPj0gMCApIHtcbiAgICAgICAgbmV3Q2xhc3MgPSBuZXdDbGFzcy5yZXBsYWNlKCAnICcgKyBlbGVtZW50Q2xhc3NOYW1lICsgJyAnICwgJyAnICk7XG4gICAgICB9XG4gICAgICBlbGVtLmNsYXNzTmFtZSA9IG5ld0NsYXNzLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5jbGFzc05hbWUgKz0gJyAnICsgZWxlbWVudENsYXNzTmFtZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICh0aGlzLmhhc0NsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJ3NpZGViYXItb2ZmLWNhbnZhcycpKSB7XG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJ3NpZGViYXItb3BlbmVkJyk7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBCcmFuZE1pbmltaXplcl0nXG59KVxuZXhwb3J0IGNsYXNzIEJyYW5kTWluaW1pemVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdicmFuZC1taW5pbWl6ZWQnKTtcbiAgfVxufVxuXG5cbi8qKlxuKiBBbGxvd3MgdGhlIGFzaWRlIHRvIGJlIHRvZ2dsZWQgdmlhIGNsaWNrLlxuKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBBc2lkZU1lbnVUb2dnbGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIEFzaWRlVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdhcHBBc2lkZU1lbnVUb2dnbGVyJykgYnJlYWtwb2ludDogc3RyaW5nO1xuICBwdWJsaWMgYnA7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5icCA9IHRoaXMuYnJlYWtwb2ludDtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgY3NzQ2xhc3M7XG4gICAgdGhpcy5icCA/IGNzc0NsYXNzID0gYGFzaWRlLW1lbnUtJHt0aGlzLmJwfS1zaG93YCA6IGNzc0NsYXNzID0gYXNpZGVNZW51Q3NzQ2xhc3Nlc1swXTtcbiAgICBUb2dnbGVDbGFzc2VzKGNzc0NsYXNzLCBhc2lkZU1lbnVDc3NDbGFzc2VzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFzaWRlVG9nZ2xlRGlyZWN0aXZlLFxuICBCcmFuZE1pbmltaXplRGlyZWN0aXZlLFxuICBNb2JpbGVTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlLFxuICBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlLFxuICBTaWRlYmFyTWluaW1pemVEaXJlY3RpdmUsXG4gIFNpZGViYXJPZmZDYW52YXNDbG9zZURpcmVjdGl2ZVxufSBmcm9tICcuL2xheW91dC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBc2lkZVRvZ2dsZURpcmVjdGl2ZSxcbiAgICBCcmFuZE1pbmltaXplRGlyZWN0aXZlLFxuICAgIE1vYmlsZVNpZGViYXJUb2dnbGVEaXJlY3RpdmUsXG4gICAgU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSxcbiAgICBTaWRlYmFyTWluaW1pemVEaXJlY3RpdmUsXG4gICAgU2lkZWJhck9mZkNhbnZhc0Nsb3NlRGlyZWN0aXZlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFzaWRlVG9nZ2xlRGlyZWN0aXZlLFxuICAgIEJyYW5kTWluaW1pemVEaXJlY3RpdmUsXG4gICAgTW9iaWxlU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSxcbiAgICBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlLFxuICAgIFNpZGViYXJNaW5pbWl6ZURpcmVjdGl2ZSxcbiAgICBTaWRlYmFyT2ZmQ2FudmFzQ2xvc2VEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUgeyB9XG4iLCJleHBvcnQgZnVuY3Rpb24gUmVwbGFjZShlbDogYW55KTogYW55IHtcbiAgY29uc3QgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQgPSBlbC5uYXRpdmVFbGVtZW50O1xuICBjb25zdCBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCA9IG5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgLy8gbW92ZSBhbGwgY2hpbGRyZW4gb3V0IG9mIHRoZSBlbGVtZW50XG4gIHdoaWxlIChuYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShuYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQsIG5hdGl2ZUVsZW1lbnQpO1xuICB9XG4gIC8vIHJlbW92ZSB0aGUgZW1wdHkgZWxlbWVudCh0aGUgaG9zdClcbiAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChuYXRpdmVFbGVtZW50KTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYXNpZGVNZW51Q3NzQ2xhc3NlcywgUmVwbGFjZSB9IGZyb20gJy4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWFzaWRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YXNpZGUgY2xhc3M9XCJhc2lkZS1tZW51XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9hc2lkZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBBc2lkZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRpc3BsYXk6IGFueTtcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG9mZkNhbnZhczogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gICAgdGhpcy5pc0ZpeGVkKHRoaXMuZml4ZWQpO1xuICAgIHRoaXMuZGlzcGxheUJyZWFrcG9pbnQodGhpcy5kaXNwbGF5KTtcbiAgfVxuXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maXhlZCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnYXNpZGUtbWVudS1maXhlZCcpOyB9XG4gIH1cblxuICBpc09mZkNhbnZhcyhvZmZDYW52YXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vZmZDYW52YXMpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2FzaWRlLW1lbnUtb2ZmLWNhbnZhcycpOyB9XG4gIH1cblxuICBkaXNwbGF5QnJlYWtwb2ludChkaXNwbGF5OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNwbGF5ICE9PSBmYWxzZSApIHtcbiAgICAgIGxldCBjc3NDbGFzcztcbiAgICAgIHRoaXMuZGlzcGxheSA/IGNzc0NsYXNzID0gYGFzaWRlLW1lbnUtJHt0aGlzLmRpc3BsYXl9LXNob3dgIDogY3NzQ2xhc3MgPSBhc2lkZU1lbnVDc3NDbGFzc2VzWzBdO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4vLi4vc2hhcmVkJztcblxuaW1wb3J0IHsgQXBwQXNpZGVDb21wb25lbnQgfSBmcm9tICcuL2FwcC1hc2lkZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIExheW91dE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQXBwQXNpZGVDb21wb25lbnQsXG4gICAgTGF5b3V0TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcEFzaWRlQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQXNpZGVNb2R1bGUge31cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzL2luZGV4JztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXBwQnJlYWRjcnVtYlNlcnZpY2Uge1xyXG5cclxuICBicmVhZGNydW1iczogT2JzZXJ2YWJsZTxBcnJheTxPYmplY3Q+PjtcclxuXHJcbiAgcHJpdmF0ZSBfYnJlYWRjcnVtYnM6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxPYmplY3Q+PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuXHJcbiAgICB0aGlzLl9icmVhZGNydW1icyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8T2JqZWN0W10+KG5ldyBBcnJheTxPYmplY3Q+KCkpO1xyXG5cclxuICAgIHRoaXMuYnJlYWRjcnVtYnMgPSB0aGlzLl9icmVhZGNydW1icy5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSkuc3Vic2NyaWJlKChldmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBicmVhZGNydW1icyA9IFtdO1xyXG4gICAgICBsZXQgY3VycmVudFJvdXRlID0gdGhpcy5yb3V0ZS5yb290LFxyXG4gICAgICB1cmwgPSAnJztcclxuICAgICAgZG8ge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuUm91dGVzID0gY3VycmVudFJvdXRlLmNoaWxkcmVuO1xyXG4gICAgICAgIGN1cnJlbnRSb3V0ZSA9IG51bGw7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICAgICAgY2hpbGRyZW5Sb3V0ZXMuZm9yRWFjaChyb3V0ZSA9PiB7XHJcbiAgICAgICAgICBpZiAocm91dGUub3V0bGV0ID09PSAncHJpbWFyeScpIHtcclxuICAgICAgICAgICAgY29uc3Qgcm91dGVTbmFwc2hvdCA9IHJvdXRlLnNuYXBzaG90O1xyXG4gICAgICAgICAgICB1cmwgKz0gJy8nICsgcm91dGVTbmFwc2hvdC51cmwubWFwKHNlZ21lbnQgPT4gc2VnbWVudC5wYXRoKS5qb2luKCcvJyk7XHJcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzLnB1c2goe1xyXG4gICAgICAgICAgICAgIGxhYmVsOiByb3V0ZS5zbmFwc2hvdC5kYXRhLFxyXG4gICAgICAgICAgICAgIHVybDogICB1cmxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRSb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IHdoaWxlIChjdXJyZW50Um91dGUpO1xyXG5cclxuICAgICAgdGhpcy5fYnJlYWRjcnVtYnMubmV4dChPYmplY3QuYXNzaWduKFtdLCBicmVhZGNydW1icykpO1xyXG5cclxuICAgICAgcmV0dXJuIGJyZWFkY3J1bWJzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGxhY2UgfSBmcm9tICcuLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBBcHBCcmVhZGNydW1iU2VydmljZSB9IGZyb20gJy4vYXBwLWJyZWFkY3J1bWIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1icmVhZGNydW1iJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LWJyZWFkY3J1bWIgW25nRm9yT2ZdPVwiYnJlYWRjcnVtYnMgfCBhc3luY1wiIGxldC1sYXN0ID0gbGFzdD5cbiAgICAgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbVwiXG4gICAgICAgICAgKm5nSWY9XCJicmVhZGNydW1iLmxhYmVsLnRpdGxlICYmIChicmVhZGNydW1iLnVybC5zbGljZSgtMSkgPT0gJy8nIHx8IGxhc3QpXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ7YWN0aXZlOiBsYXN0fVwiPlxuICAgICAgICA8YSAqbmdJZj1cIiFsYXN0XCIgW3JvdXRlckxpbmtdPVwiYnJlYWRjcnVtYi51cmxcIj57e2JyZWFkY3J1bWIubGFiZWwudGl0bGV9fTwvYT5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJsYXN0XCIgW3JvdXRlckxpbmtdPVwiYnJlYWRjcnVtYi51cmxcIj57e2JyZWFkY3J1bWIubGFiZWwudGl0bGV9fTwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG4gIHB1YmxpYyBicmVhZGNydW1icztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogQXBwQnJlYWRjcnVtYlNlcnZpY2UsIHB1YmxpYyBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gICAgdGhpcy5pc0ZpeGVkKHRoaXMuZml4ZWQpO1xuICAgIHRoaXMuYnJlYWRjcnVtYnMgPSB0aGlzLnNlcnZpY2UuYnJlYWRjcnVtYnM7XG4gIH1cblxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZml4ZWQpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2JyZWFkY3J1bWItZml4ZWQnKTsgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBBcHAgQnJlYWRjcnVtYiBDb21wb25lbnRcbmltcG9ydCB7IEFwcEJyZWFkY3J1bWJTZXJ2aWNlIH0gZnJvbSAnLi9hcHAtYnJlYWRjcnVtYi5zZXJ2aWNlJztcbmltcG9ydCB7IEFwcEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1icmVhZGNydW1iLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUgXSxcbiAgZXhwb3J0czogWyBBcHBCcmVhZGNydW1iQ29tcG9uZW50IF0sXG4gIGRlY2xhcmF0aW9uczogWyBBcHBCcmVhZGNydW1iQ29tcG9uZW50IF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQnJlYWRjcnVtYk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQXBwQnJlYWRjcnVtYk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBBcHBCcmVhZGNydW1iU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGxhY2UgfSBmcm9tICcuLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1mb290ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxmb290ZXIgY2xhc3M9XCJhcHAtZm9vdGVyXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9mb290ZXI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcbiAgfVxuXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maXhlZCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWZpeGVkJyk7IH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtZm9vdGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlIF0sXG4gIGV4cG9ydHM6IFsgQXBwRm9vdGVyQ29tcG9uZW50IF0sXG4gIGRlY2xhcmF0aW9uczogWyBBcHBGb290ZXJDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBGb290ZXJNb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGFjZSB9IGZyb20gJy4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGhlYWRlciBjbGFzcz1cImFwcC1oZWFkZXIgbmF2YmFyXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwibW9iaWxlU2lkZWJhclRvZ2dsZXIgIT0gZmFsc2VcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGQtbGctbm9uZVwiIHR5cGU9XCJidXR0b25cIiBhcHBTaWRlYmFyVG9nZ2xlcj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJuYXZiYXJCcmFuZCB8fCBuYXZiYXJCcmFuZEZ1bGwgfHwgbmF2YmFyQnJhbmRNaW5pbWl6ZWRcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlxuICAgICAgICAgIDxpbWcgKm5nSWY9XCJuYXZiYXJCcmFuZFwiXG4gICAgICAgICAgICAgICBbc3JjXT1cImltZ1NyYyhuYXZiYXJCcmFuZClcIlxuICAgICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwiaW1nV2lkdGgobmF2YmFyQnJhbmQpXCJcbiAgICAgICAgICAgICAgIFthdHRyLmhlaWdodF09XCJpbWdIZWlnaHQobmF2YmFyQnJhbmQpXCJcbiAgICAgICAgICAgICAgIFthdHRyLmFsdF09XCJpbWdBbHQobmF2YmFyQnJhbmQpXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwibmF2YmFyLWJyYW5kXCI+XG4gICAgICAgICAgPGltZyAqbmdJZj1cIm5hdmJhckJyYW5kRnVsbFwiXG4gICAgICAgICAgICAgICBbc3JjXT1cImltZ1NyYyhuYXZiYXJCcmFuZEZ1bGwpXCJcbiAgICAgICAgICAgICAgIFthdHRyLndpZHRoXT1cImltZ1dpZHRoKG5hdmJhckJyYW5kRnVsbClcIlxuICAgICAgICAgICAgICAgW2F0dHIuaGVpZ2h0XT1cImltZ0hlaWdodChuYXZiYXJCcmFuZEZ1bGwpXCJcbiAgICAgICAgICAgICAgIFthdHRyLmFsdF09XCJpbWdBbHQobmF2YmFyQnJhbmRGdWxsKVwiXG4gICAgICAgICAgICAgICBjbGFzcz1cIm5hdmJhci1icmFuZC1mdWxsXCI+XG4gICAgICAgICAgPGltZyAqbmdJZj1cIm5hdmJhckJyYW5kTWluaW1pemVkXCJcbiAgICAgICAgICAgICAgIFtzcmNdPVwiaW1nU3JjKG5hdmJhckJyYW5kTWluaW1pemVkKVwiXG4gICAgICAgICAgICAgICBbYXR0ci53aWR0aF09XCJpbWdXaWR0aChuYXZiYXJCcmFuZE1pbmltaXplZClcIlxuICAgICAgICAgICAgICAgW2F0dHIuaGVpZ2h0XT1cImltZ0hlaWdodChuYXZiYXJCcmFuZE1pbmltaXplZClcIlxuICAgICAgICAgICAgICAgW2F0dHIuYWx0XT1cImltZ0FsdChuYXZiYXJCcmFuZE1pbmltaXplZClcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJuYXZiYXItYnJhbmQtbWluaW1pemVkXCI+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwic2lkZWJhclRvZ2dsZXIgIT0gZmFsc2VcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGQtbWQtZG93bi1ub25lXCIgdHlwZT1cImJ1dHRvblwiIFthcHBTaWRlYmFyVG9nZ2xlcl09XCJzaWRlYmFyVG9nZ2xlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImFzaWRlTWVudVRvZ2dsZXIgIT0gZmFsc2VcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGQtbWQtZG93bi1ub25lXCIgdHlwZT1cImJ1dHRvblwiIFthcHBBc2lkZU1lbnVUb2dnbGVyXT1cImFzaWRlTWVudVRvZ2dsZXJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJtb2JpbGVBc2lkZU1lbnVUb2dnbGVyICE9IGZhbHNlXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlciBkLWxnLW5vbmVcIiB0eXBlPVwiYnV0dG9uXCIgYXBwQXNpZGVNZW51VG9nZ2xlcj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2hlYWRlcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kOiBhbnk7XG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kRnVsbDogYW55O1xuICBASW5wdXQoKSBuYXZiYXJCcmFuZE1pbmltaXplZDogYW55O1xuXG4gIEBJbnB1dCgpIHNpZGViYXJUb2dnbGVyOiBhbnk7XG4gIEBJbnB1dCgpIG1vYmlsZVNpZGViYXJUb2dnbGVyOiBhbnk7XG5cbiAgQElucHV0KCkgYXNpZGVNZW51VG9nZ2xlcjogYW55O1xuICBASW5wdXQoKSBtb2JpbGVBc2lkZU1lbnVUb2dnbGVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcbiAgfVxuXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maXhlZCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWZpeGVkJyk7IH1cbiAgfVxuXG4gIGltZ1NyYyhicmFuZDogYW55KTogdm9pZCB7XG4gICAgcmV0dXJuIGJyYW5kLnNyYyA/IGJyYW5kLnNyYyA6ICcnO1xuICB9XG5cbiAgaW1nV2lkdGgoYnJhbmQ6IGFueSk6IHZvaWQge1xuICAgIHJldHVybiBicmFuZC53aWR0aCA/IGJyYW5kLndpZHRoIDogJ2F1dG8nO1xuICB9XG5cbiAgaW1nSGVpZ2h0KGJyYW5kOiBhbnkpOiB2b2lkIHtcbiAgICByZXR1cm4gYnJhbmQuaGVpZ2h0ID8gYnJhbmQuaGVpZ2h0IDogJ2F1dG8nO1xuICB9XG5cbiAgaW1nQWx0KGJyYW5kOiBhbnkpOiB2b2lkIHtcbiAgICByZXR1cm4gYnJhbmQuYWx0ID8gYnJhbmQuYWx0IDogJyc7XG4gIH1cblxuICBicmVha3BvaW50KGJyZWFrcG9pbnQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGJyZWFrcG9pbnQpO1xuICAgIHJldHVybiBicmVha3BvaW50ID8gYnJlYWtwb2ludCA6ICcnO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xuXG5pbXBvcnQgeyBBcHBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1oZWFkZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBMYXlvdXRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFwcEhlYWRlckNvbXBvbmVudCxcbiAgICBMYXlvdXRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwSGVhZGVyQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwSGVhZGVyTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGxhY2UgfSBmcm9tICcuLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLWZvb3RlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInNpZGViYXItZm9vdGVyXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGxhY2UgfSBmcm9tICcuLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLWZvcm0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxmb3JtIGNsYXNzPVwic2lkZWJhci1mb3JtXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9mb3JtPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGxhY2UgfSBmcm9tICcuLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInNpZGViYXItaGVhZGVyXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhckhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1taW5pbWl6ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gY2xhc3M9XCJzaWRlYmFyLW1pbmltaXplclwiIHR5cGU9XCJidXR0b25cIiBhcHBTaWRlYmFyTWluaW1pemVyIGFwcEJyYW5kTWluaW1pemVyPjwvYnV0dG9uPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNpZGViYXJDc3NDbGFzc2VzIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhcicsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbXBhY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc3BsYXk6IGFueTtcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1pbmltaXplZDogYm9vbGVhbjtcbiAgQElucHV0KCkgb2ZmQ2FudmFzOiBib29sZWFuO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2lkZWJhcicpIHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGlzcGxheUJyZWFrcG9pbnQodGhpcy5kaXNwbGF5KTtcbiAgICB0aGlzLmlzQ29tcGFjdCh0aGlzLmNvbXBhY3QpO1xuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcbiAgICB0aGlzLmlzTWluaW1pemVkKHRoaXMubWluaW1pemVkKTtcbiAgICB0aGlzLmlzT2ZmQ2FudmFzKHRoaXMub2ZmQ2FudmFzKTtcbiAgfVxuXG4gIGlzQ29tcGFjdChjb21wYWN0OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29tcGFjdCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1jb21wYWN0Jyk7IH1cbiAgfVxuXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maXhlZCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1maXhlZCcpOyB9XG4gIH1cblxuICBpc01pbmltaXplZChtaW5pbWl6ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5taW5pbWl6ZWQpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItbWluaW1pemVkJyk7IH1cbiAgfVxuXG4gIGlzT2ZmQ2FudmFzKG9mZkNhbnZhczogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLm9mZkNhbnZhcykgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1vZmYtY2FudmFzJyk7IH1cbiAgfVxuXG4gIGZpeGVkUG9zaXRpb24oZml4ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maXhlZCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1maXhlZCcpOyB9XG4gIH1cblxuICBkaXNwbGF5QnJlYWtwb2ludChkaXNwbGF5OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNwbGF5ICE9PSBmYWxzZSApIHtcbiAgICAgIGxldCBjc3NDbGFzcztcbiAgICAgIHRoaXMuZGlzcGxheSA/IGNzc0NsYXNzID0gYHNpZGViYXItJHt0aGlzLmRpc3BsYXl9LXNob3dgIDogY3NzQ2xhc3MgPSBzaWRlYmFyQ3NzQ2xhc3Nlc1swXTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwTmF2RHJvcGRvd25dJ1xufSlcbmV4cG9ydCBjbGFzcyBOYXZEcm9wZG93bkRpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gIH1cbn1cblxuLyoqXG4qIEFsbG93cyB0aGUgZHJvcGRvd24gdG8gYmUgdG9nZ2xlZCB2aWEgY2xpY2suXG4qL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcE5hdkRyb3Bkb3duVG9nZ2xlXSdcbn0pXG5leHBvcnQgY2xhc3MgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRyb3Bkb3duOiBOYXZEcm9wZG93bkRpcmVjdGl2ZSkge31cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmRyb3Bkb3duLnRvZ2dsZSgpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHVsIGNsYXNzPVwibmF2XCI+XG4gICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LW5hdml0ZW0gW25nRm9yT2ZdPVwibmF2SXRlbXNcIj5cbiAgICAgICAgPGxpICpuZ0lmPVwiaXNEaXZpZGVyKG5hdml0ZW0pXCIgY2xhc3M9XCJuYXYtZGl2aWRlclwiPjwvbGk+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJpc1RpdGxlKG5hdml0ZW0pXCI+XG4gICAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi10aXRsZSBbdGl0bGVdPSduYXZpdGVtJz48L2FwcC1zaWRlYmFyLW5hdi10aXRsZT5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIiFpc0RpdmlkZXIobmF2aXRlbSkmJiFpc1RpdGxlKG5hdml0ZW0pXCI+XG4gICAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1pdGVtIFtpdGVtXT0nbmF2aXRlbSc+PC9hcHAtc2lkZWJhci1uYXYtaXRlbT5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC91bD5gXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZDb21wb25lbnQge1xuICBASW5wdXQoKSBuYXZJdGVtczogYW55O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2lkZWJhci1uYXYnKSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJvbGUgPSAnbmF2JztcblxuICBwdWJsaWMgaXNEaXZpZGVyKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5kaXZpZGVyID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzVGl0bGUoaXRlbSkge1xuICAgIHJldHVybiBpdGVtLnRpdGxlID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWl0ZW0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxsaSAqbmdJZj1cIiFpc0Ryb3Bkb3duKCk7IGVsc2UgZHJvcGRvd25cIiBbbmdDbGFzc109XCJoYXNDbGFzcygpID8gJ25hdi1pdGVtICcgKyBpdGVtLmNsYXNzIDogJ25hdi1pdGVtJ1wiPlxuICAgICAgPGFwcC1zaWRlYmFyLW5hdi1saW5rIFtsaW5rXT0naXRlbSc+PC9hcHAtc2lkZWJhci1uYXYtbGluaz5cbiAgICA8L2xpPlxuICAgIDxuZy10ZW1wbGF0ZSAjZHJvcGRvd24+XG4gICAgICA8bGkgW25nQ2xhc3NdPVwiaGFzQ2xhc3MoKSA/ICduYXYtaXRlbSBuYXYtZHJvcGRvd24gJyArIGl0ZW0uY2xhc3MgOiAnbmF2LWl0ZW0gbmF2LWRyb3Bkb3duJ1wiXG4gICAgICAgICAgW2NsYXNzLm9wZW5dPVwiaXNBY3RpdmUoKVwiXG4gICAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cIm9wZW5cIlxuICAgICAgICAgIGFwcE5hdkRyb3Bkb3duPlxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWRyb3Bkb3duIFtsaW5rXT0naXRlbSc+PC9hcHAtc2lkZWJhci1uYXYtZHJvcGRvd24+XG4gICAgICA8L2xpPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcblxuICBwdWJsaWMgaGFzQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbS5jbGFzcyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0Ryb3Bkb3duKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW0uY2hpbGRyZW4gPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdGhpc1VybCgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtLnVybDtcbiAgfVxuXG4gIHB1YmxpYyBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXIuaXNBY3RpdmUodGhpcy50aGlzVXJsKCksIGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgfVxuXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1saW5rJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YSAqbmdJZj1cIiFpc0V4dGVybmFsTGluaygpOyBlbHNlIGV4dGVybmFsXCJcbiAgICAgIFtuZ0NsYXNzXT1cImhhc1ZhcmlhbnQoKSA/ICduYXYtbGluayBuYXYtbGluay0nICsgbGluay52YXJpYW50IDogJ25hdi1saW5rJ1wiXG4gICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCJcbiAgICAgIFtyb3V0ZXJMaW5rXT1cIltsaW5rLnVybF1cIlxuICAgICAgKGNsaWNrKT1cImhpZGVNb2JpbGUoKVwiPlxuICAgICAgPGkgKm5nSWY9XCJpc0ljb24oKVwiIGNsYXNzPVwibmF2LWljb24ge3sgbGluay5pY29uIH19XCI+PC9pPlxuICAgICAge3sgbGluay5uYW1lIH19XG4gICAgICA8c3BhbiAqbmdJZj1cImlzQmFkZ2UoKVwiIFtuZ0NsYXNzXT1cIidiYWRnZSBiYWRnZS0nICsgbGluay5iYWRnZS52YXJpYW50XCI+e3sgbGluay5iYWRnZS50ZXh0IH19PC9zcGFuPlxuICAgIDwvYT5cbiAgICA8bmctdGVtcGxhdGUgI2V4dGVybmFsPlxuICAgICAgPGEgW25nQ2xhc3NdPVwiaGFzVmFyaWFudCgpID8gJ25hdi1saW5rIG5hdi1saW5rLScgKyBsaW5rLnZhcmlhbnQgOiAnbmF2LWxpbmsnXCIgaHJlZj1cInt7bGluay51cmx9fVwiPlxuICAgICAgICA8aSAqbmdJZj1cImlzSWNvbigpXCIgY2xhc3M9XCJuYXYtaWNvbiB7eyBsaW5rLmljb24gfX1cIj48L2k+XG4gICAgICAgIHt7IGxpbmsubmFtZSB9fVxuICAgICAgICA8c3BhbiAqbmdJZj1cImlzQmFkZ2UoKVwiIFtuZ0NsYXNzXT1cIidiYWRnZSBiYWRnZS0nICsgbGluay5iYWRnZS52YXJpYW50XCI+e3sgbGluay5iYWRnZS50ZXh0IH19PC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsaW5rOiBhbnk7XG5cbiAgcHVibGljIGhhc1ZhcmlhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluay52YXJpYW50ID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzQmFkZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluay5iYWRnZSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0V4dGVybmFsTGluaygpIHtcbiAgICByZXR1cm4gdGhpcy5saW5rLnVybC5zdWJzdHJpbmcoMCwgNCkgPT09ICdodHRwJyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0ljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGluay5pY29uID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGhpZGVNb2JpbGUoKSB7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLW1vYmlsZS1zaG93JykpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2lkZWJhci1tb2JpbGUtc2hvdycpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtZHJvcGRvd24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgbmF2LWRyb3Bkb3duLXRvZ2dsZVwiIGFwcE5hdkRyb3Bkb3duVG9nZ2xlPlxuICAgICAgPGkgKm5nSWY9XCJpc0ljb24oKVwiIGNsYXNzPVwibmF2LWljb24ge3sgbGluay5pY29uIH19XCI+PC9pPlxuICAgICAge3sgbGluay5uYW1lIH19XG4gICAgICA8c3BhbiAqbmdJZj1cImlzQmFkZ2UoKVwiIFtuZ0NsYXNzXT1cIidiYWRnZSBiYWRnZS0nICsgbGluay5iYWRnZS52YXJpYW50XCI+e3sgbGluay5iYWRnZS50ZXh0IH19PC9zcGFuPlxuICAgIDwvYT5cbiAgICA8dWwgY2xhc3M9XCJuYXYtZHJvcGRvd24taXRlbXNcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtY2hpbGQgW25nRm9yT2ZdPVwibGluay5jaGlsZHJlblwiPlxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWl0ZW0gW2l0ZW1dPSdjaGlsZCc+PC9hcHAtc2lkZWJhci1uYXYtaXRlbT5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC91bD5cbiAgYCxcbiAgc3R5bGVzOiBbJy5uYXYtZHJvcGRvd24tdG9nZ2xlIHsgY3Vyc29yOiBwb2ludGVyOyB9J11cbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGluazogYW55O1xuXG4gIHB1YmxpYyBpc0JhZGdlKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmsuYmFkZ2UgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaXNJY29uKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmsuaWNvbiA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtdGl0bGUnLFxuICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGl0bGU6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGxpID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQodGhpcy50aXRsZS5uYW1lKTtcblxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MobGksICduYXYtdGl0bGUnKTtcblxuICAgIGlmICggdGhpcy50aXRsZS5jbGFzcyApIHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLnRpdGxlLmNsYXNzO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhsaSwgY2xhc3Nlcyk7XG4gICAgfVxuXG4gICAgaWYgKCB0aGlzLnRpdGxlLndyYXBwZXIgKSB7XG4gICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KHRoaXMudGl0bGUud3JhcHBlci5lbGVtZW50KTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh3cmFwcGVyLCBuYW1lKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQobGksIHdyYXBwZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGxpLCBuYW1lKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChuYXRpdmVFbGVtZW50LCBsaSk7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xuXG4vLyBBcHAgU2lkZWJhciBDb21wb25lbnRcbmltcG9ydCB7IEFwcFNpZGViYXJGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhckZvcm1Db21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFNpZGViYXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItbWluaW1pemVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgQXBwU2lkZWJhck5hdkNvbXBvbmVudCxcbiAgQXBwU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50LFxuICBBcHBTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCxcbiAgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXG4gIEFwcFNpZGViYXJOYXZUaXRsZUNvbXBvbmVudCxcbiAgTmF2RHJvcGRvd25EaXJlY3RpdmUsXG4gIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlXG59IGZyb20gJy4vYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIExheW91dE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQXBwU2lkZWJhckZvb3RlckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyRm9ybUNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFySGVhZGVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2Q29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQsXG4gICAgTmF2RHJvcGRvd25EaXJlY3RpdmUsXG4gICAgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsXG4gICAgTGF5b3V0TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcFNpZGViYXJGb290ZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhckZvcm1Db21wb25lbnQsXG4gICAgQXBwU2lkZWJhckhlYWRlckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2Q29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQsXG4gICAgTmF2RHJvcGRvd25EaXJlY3RpdmUsXG4gICAgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLHVCQUFNLGlCQUFpQixHQUFrQjtJQUM5QyxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ2xCLENBQUM7QUFFRixBQUFPLHVCQUFNLG1CQUFtQixHQUFrQjtJQUNoRCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0NBQ3JCLENBQUM7Ozs7OztBQ2RGLHVCQUFNLGFBQWEsR0FBRyxDQUFDLGFBQWE7SUFDbEMsdUJBQU0sWUFBWSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDNUcsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0NBQzFDLENBQUM7QUFFSyx1QkFBTSxhQUFhLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVTtJQUM5Qyx1QkFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6Qyx1QkFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXJELElBQUksYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQ2hDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDdEY7U0FBTTtRQUNMLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN0RDtDQUNGLENBQUM7Ozs7OztBQ2RGOzs7QUFVQTtJQUdFLGlCQUFnQjs7OztJQUNoQixRQUFRO1FBQ04sSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQzNCOzs7OztJQUVELFVBQVUsQ0FBQyxNQUFXO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixxQkFBSSxRQUFRLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRSxHQUFHLFFBQVEsR0FBRyxXQUFXLElBQUksQ0FBQyxFQUFFLE9BQU8sR0FBRyxRQUFRLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakYsYUFBYSxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDOzs7O1lBZjlDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2FBQ2hDOzs7OzsyQkFFRSxLQUFLLFNBQUMsbUJBQW1COzJCQU16QixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7SUFhakMsaUJBQWlCOzs7OztJQUdqQixVQUFVLENBQUMsTUFBVztRQUNwQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7Ozs7WUFUeEUsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7YUFDbEM7Ozs7OzJCQUlFLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7OztJQVdqQyxpQkFBaUI7Ozs7OztJQUdULFFBQVEsQ0FBQyxNQUFXLEVBQUUsZ0JBQXdCO1FBQ3BELE9BQU8sSUFBSSxNQUFNLENBQUMsU0FBUyxHQUFHLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7OztJQUlyRixVQUFVLENBQUMsTUFBVztRQUNwQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7Ozs7WUFkMUUsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7Ozs7OzJCQVNFLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7O0FBYW5DO0lBQ0UsaUJBQWlCOzs7Ozs7SUFHVCxRQUFRLENBQUMsTUFBVyxFQUFFLGdCQUF3QjtRQUNwRCxPQUFPLElBQUksTUFBTSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7Ozs7O0lBSTdFLFdBQVcsQ0FBQyxJQUFTLEVBQUUsZ0JBQXdCO1FBQ3JELHFCQUFJLFFBQVEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUUsV0FBVyxFQUFFLEdBQUcsQ0FBRSxHQUFHLEdBQUcsQ0FBQztRQUN0RSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLEVBQUU7WUFDekMsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUc7Z0JBQzNELFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFFLEdBQUcsR0FBRyxnQkFBZ0IsR0FBRyxHQUFHLEVBQUcsR0FBRyxDQUFFLENBQUM7YUFDbkU7WUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3JEO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQztTQUMxQzs7Ozs7O0lBSUgsVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLG9CQUFvQixDQUFDLEVBQUU7WUFDdkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDcEU7Ozs7WUE5QkosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7Ozs7OzJCQXNCRSxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7SUFjakMsaUJBQWlCOzs7OztJQUdqQixVQUFVLENBQUMsTUFBVztRQUNwQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Ozs7WUFUdEUsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7YUFDaEM7Ozs7OzJCQUlFLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7O0FBY25DO0lBR0UsaUJBQWdCOzs7O0lBQ2hCLFFBQVE7UUFDTixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDM0I7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLHFCQUFJLFFBQVEsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxHQUFHLGNBQWMsSUFBSSxDQUFDLEVBQUUsT0FBTyxHQUFHLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RixhQUFhLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDLENBQUM7Ozs7WUFmaEQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7YUFDbEM7Ozs7OzJCQUVFLEtBQUssU0FBQyxxQkFBcUI7MkJBTTNCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7QUN6SG5DOzs7WUFXQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG9CQUFvQjtvQkFDcEIsc0JBQXNCO29CQUN0Qiw0QkFBNEI7b0JBQzVCLHNCQUFzQjtvQkFDdEIsd0JBQXdCO29CQUN4Qiw4QkFBOEI7aUJBQy9CO2dCQUNELFlBQVksRUFBRTtvQkFDWixvQkFBb0I7b0JBQ3BCLHNCQUFzQjtvQkFDdEIsNEJBQTRCO29CQUM1QixzQkFBc0I7b0JBQ3RCLHdCQUF3QjtvQkFDeEIsOEJBQThCO2lCQUMvQjthQUNGOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JELGlCQUF3QixFQUFPO0lBQzdCLHVCQUFNLGFBQWEsR0FBZ0IsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUNwRCx1QkFBTSxhQUFhLEdBQWdCLGFBQWEsQ0FBQyxhQUFhLENBQUM7O0lBRS9ELE9BQU8sYUFBYSxDQUFDLFVBQVUsRUFBRTtRQUMvQixhQUFhLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7S0FDckU7O0lBRUQsYUFBYSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztDQUMxQzs7Ozs7Ozs7Ozs7QUNURDs7OztJQWdCRSxZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtLQUFJOzs7O0lBRXRDLFFBQVE7UUFDTixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDdEM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQWM7UUFDcEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FBRTtLQUN0Rjs7Ozs7SUFFRCxXQUFXLENBQUMsU0FBa0I7UUFDNUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FBRTtLQUMvRjs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxPQUFZO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFNLEVBQUU7WUFDM0IscUJBQUksUUFBUSxDQUFDO1lBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLEdBQUcsY0FBYyxJQUFJLENBQUMsT0FBTyxPQUFPLEdBQUcsUUFBUSxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN4RDtLQUNGOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7R0FJVDthQUNGOzs7O1lBVm1CLFVBQVU7Ozt3QkFZM0IsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7Ozs7Ozs7QUNkUjs7O1lBTUMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGlCQUFpQjtvQkFDakIsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osaUJBQWlCO2lCQUNsQjthQUNGOzs7Ozs7Ozs7Ozs7QUNsQkQ7Ozs7O0lBWUUsWUFBb0IsTUFBYyxFQUFVLEtBQXFCO1FBQTdDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUUvRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksZUFBZSxDQUFXLElBQUksS0FBSyxFQUFVLENBQUMsQ0FBQztRQUV2RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxZQUFZLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSztZQUN2Rix1QkFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLHFCQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDbEMsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNULEdBQUc7Z0JBQ0QsdUJBQU0sY0FBYyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQzdDLFlBQVksR0FBRyxJQUFJLENBQUM7O2dCQUVwQixjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUs7b0JBQzFCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7d0JBQzlCLHVCQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO3dCQUNyQyxHQUFHLElBQUksR0FBRyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN0RSxXQUFXLENBQUMsSUFBSSxDQUFDOzRCQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUk7NEJBQzFCLEdBQUcsRUFBSSxHQUFHO3lCQUNYLENBQUMsQ0FBQzt3QkFDSCxZQUFZLEdBQUcsS0FBSyxDQUFDO3FCQUN0QjtpQkFDRixDQUFDLENBQUM7YUFDSixRQUFRLFlBQVksRUFBRTtZQUV2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBRXZELE9BQU8sV0FBVyxDQUFDO1NBQ3BCLENBQUMsQ0FBQztLQUNKOzs7WUF0Q0YsVUFBVTs7OztZQUpGLE1BQU07WUFBRSxjQUFjOzs7Ozs7O0FDRC9COzs7OztJQXFCRSxZQUFtQixPQUE2QixFQUFTLEVBQWM7UUFBcEQsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7UUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFZO0tBQUs7Ozs7SUFFckUsUUFBUTtRQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7Ozs7O0lBRzlDLE9BQU8sQ0FBQyxLQUFjO1FBQ3BCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQUU7S0FDdEY7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7R0FTVDthQUNGOzs7O1lBZFEsb0JBQW9CO1lBRlQsVUFBVTs7O3NCQWtCM0IsS0FBSzs7Ozs7OztBQ2xCUjs7Ozs7SUFjRSxPQUFPLE9BQU8sQ0FBQyxNQUFZO1FBQ3pCLE9BQU87WUFDTCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFNBQVMsRUFBRTtnQkFDVCxvQkFBb0I7YUFDckI7U0FDRixDQUFDO0tBQ0g7OztZQWJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBRSxZQUFZLEVBQUUsWUFBWSxDQUFFO2dCQUN2QyxPQUFPLEVBQUUsQ0FBRSxzQkFBc0IsQ0FBRTtnQkFDbkMsWUFBWSxFQUFFLENBQUUsc0JBQXNCLENBQUU7YUFDekM7Ozs7Ozs7Ozs7OztBQ1pEOzs7O0lBY0UsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7S0FBSTs7OztJQUV0QyxRQUFRO1FBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxQjs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBYztRQUNwQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7U0FBRTtLQUNsRjs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7O0dBSVQ7YUFDRjs7OztZQVZtQixVQUFVOzs7c0JBWTNCLEtBQUs7Ozs7Ozs7QUNaUjs7O1lBS0MsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFFLFlBQVksQ0FBRTtnQkFDekIsT0FBTyxFQUFFLENBQUUsa0JBQWtCLENBQUU7Z0JBQy9CLFlBQVksRUFBRSxDQUFFLGtCQUFrQixDQUFFO2FBQ3JDOzs7Ozs7Ozs7Ozs7QUNURDs7OztJQW1FRSxZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtLQUFJOzs7O0lBRXRDLFFBQVE7UUFDTixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFCOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFjO1FBQ3BCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUFFO0tBQ2xGOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFVO1FBQ2YsT0FBTyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0tBQ25DOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFVO1FBQ2pCLE9BQU8sS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztLQUMzQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBVTtRQUNsQixPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7S0FDN0M7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQVU7UUFDZixPQUFPLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7S0FDbkM7Ozs7O0lBRUQsVUFBVSxDQUFDLFVBQWU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixPQUFPLFVBQVUsR0FBRyxVQUFVLEdBQUcsRUFBRSxDQUFDO0tBQ3JDOzs7WUE5RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Q1Q7YUFDRjs7OztZQXBEbUIsVUFBVTs7O3NCQXVEM0IsS0FBSzs0QkFFTCxLQUFLO2dDQUNMLEtBQUs7cUNBQ0wsS0FBSzsrQkFFTCxLQUFLO3FDQUNMLEtBQUs7aUNBRUwsS0FBSzt1Q0FDTCxLQUFLOzs7Ozs7O0FDakVSOzs7WUFNQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCO29CQUNsQixZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixrQkFBa0I7aUJBQ25CO2FBQ0Y7Ozs7Ozs7Ozs7OztBQ2xCRDs7OztJQVlFLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0tBQUs7Ozs7SUFFdkMsUUFBUTtRQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbEI7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7OztXQUdEO2FBQ1Y7Ozs7WUFUbUIsVUFBVTs7Ozs7OztBQ0E5Qjs7OztJQWFFLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0tBQUs7Ozs7SUFFdkMsUUFBUTtRQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbEI7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7R0FJVDthQUNGOzs7O1lBVm1CLFVBQVU7Ozs7Ozs7QUNBOUI7Ozs7SUFhRSxZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtLQUFLOzs7O0lBRXZDLFFBQVE7UUFDTixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2xCOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7O0dBSVQ7YUFDRjs7OztZQVZtQixVQUFVOzs7Ozs7O0FDQTlCOzs7O0lBV0UsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7S0FBSzs7OztJQUV2QyxRQUFRO1FBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNsQjs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7R0FFVDthQUNGOzs7O1lBUm1CLFVBQVU7Ozs7Ozs7QUNBOUI7SUFnQkUsaUJBQWdCOzs7O0lBRWhCLFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ2xDOzs7OztJQUVELFNBQVMsQ0FBQyxPQUFnQjtRQUN4QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUFFO0tBQ3ZGOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFjO1FBQ3BCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUFFO0tBQ25GOzs7OztJQUVELFdBQVcsQ0FBQyxTQUFrQjtRQUM1QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUFFO0tBQzNGOzs7OztJQUVELFdBQVcsQ0FBQyxTQUFrQjtRQUM1QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUFFO0tBQzVGOzs7OztJQUVELGFBQWEsQ0FBQyxLQUFjO1FBQzFCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUFFO0tBQ25GOzs7OztJQUVELGlCQUFpQixDQUFDLE9BQVk7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQU0sRUFBRTtZQUMzQixxQkFBSSxRQUFRLENBQUM7WUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsR0FBRyxXQUFXLElBQUksQ0FBQyxPQUFPLE9BQU8sR0FBRyxRQUFRLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0YsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hEO0tBQ0Y7OztZQWpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7Ozs7O3dCQUVFLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSztxQkFFTCxXQUFXLFNBQUMsZUFBZTs7Ozs7OztBQ2Q5Qjs7OztJQVFFLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0tBQUs7Ozs7SUFFdkMsTUFBTTtRQUNKLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDaEQ7OztZQVRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7O1lBTDhCLFVBQVU7Ozs7O0FBcUJ6Qzs7OztJQUNFLFlBQW9CLFFBQThCO1FBQTlCLGFBQVEsR0FBUixRQUFRLENBQXNCO0tBQUk7Ozs7O0lBR3RELFVBQVUsQ0FBQyxNQUFXO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDOzs7O1lBVDFCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2FBQ25DOzs7O1lBZFksb0JBQW9COzs7MkJBa0I5QixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7SUFvQ2pDO29CQVZpQyxLQUFLO0tBVXJCOzs7OztJQVJWLFNBQVMsQ0FBQyxJQUFJO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDOzs7Ozs7SUFHOUIsT0FBTyxDQUFDLElBQUk7UUFDakIsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7Ozs7WUExQnBDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7O1VBV0Y7YUFDVDs7Ozs7eUJBRUUsS0FBSztxQkFFTCxXQUFXLFNBQUMsbUJBQW1CO3FCQUMvQixXQUFXLFNBQUMsV0FBVzs7Ozs7OztJQWtEeEIsWUFBcUIsTUFBYyxFQUFVLEVBQWM7UUFBdEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7S0FBTTs7OztJQWhCMUQsUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQzs7Ozs7SUFHakMsVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQzs7Ozs7SUFHcEMsT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Ozs7O0lBR2hCLFFBQVE7UUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQzs7Ozs7SUFLckQsUUFBUTtRQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbEI7OztZQXZDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7S0FZUDthQUNKOzs7O1lBakJRLE1BQU07WUEvRGdCLFVBQVU7OztxQkFrRnRDLEtBQUs7Ozs7Ozs7SUF3RU4sWUFBcUIsTUFBYyxFQUFVLEVBQWM7UUFBdEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7S0FBTTs7OztJQXRCMUQsVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQzs7Ozs7SUFHbkMsT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQzs7Ozs7SUFHakMsY0FBYztRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssTUFBTSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7Ozs7O0lBRzFELE1BQU07UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7Ozs7O0lBR2hDLFVBQVU7UUFDZixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQzNELFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3ZEOzs7OztJQUtILFFBQVE7UUFDTixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2xCOzs7WUFsREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQlQ7YUFDRjs7OztZQWpFUSxNQUFNO1lBL0RnQixVQUFVOzs7cUJBa0l0QyxLQUFLOzs7Ozs7O0lBMEROLFlBQXFCLE1BQWMsRUFBVSxFQUFjO1FBQXRDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO0tBQU07Ozs7SUFSMUQsT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQzs7Ozs7SUFHakMsTUFBTTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQzs7Ozs7SUFLdkMsUUFBUTtRQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbEI7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFOzs7Ozs7Ozs7OztHQVdUO2dCQUNELE1BQU0sRUFBRSxDQUFDLDJDQUEyQyxDQUFDO2FBQ3REOzs7O1lBakhRLE1BQU07WUEvRGdCLFVBQVU7OztxQkFrTHRDLEtBQUs7Ozs7Ozs7SUF3Qk4sWUFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO0tBQUs7Ozs7SUFFcEUsUUFBUTtRQUNOLHVCQUFNLGFBQWEsR0FBZ0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDekQsdUJBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLHVCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUV4QyxJQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBTSxFQUFFO1lBQ3RCLHVCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDckM7UUFFRCxJQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBUSxFQUFFO1lBQ3hCLHVCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV4RSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDckM7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0MsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNsQjs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUUsRUFBRTthQUNiOzs7O1lBdE04QixVQUFVO1lBQTRDLFNBQVM7OztzQkF3TTNGLEtBQUs7Ozs7Ozs7QUN4TVI7OztZQXNCQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx5QkFBeUI7b0JBQ3pCLHVCQUF1QjtvQkFDdkIseUJBQXlCO29CQUN6Qiw0QkFBNEI7b0JBQzVCLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0Qiw4QkFBOEI7b0JBQzlCLDBCQUEwQjtvQkFDMUIsMEJBQTBCO29CQUMxQiwyQkFBMkI7b0JBQzNCLG9CQUFvQjtvQkFDcEIsMEJBQTBCO29CQUMxQixZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWix5QkFBeUI7b0JBQ3pCLHVCQUF1QjtvQkFDdkIseUJBQXlCO29CQUN6Qiw0QkFBNEI7b0JBQzVCLDRCQUE0QjtvQkFDNUIsbUJBQW1CO29CQUNuQixzQkFBc0I7b0JBQ3RCLDhCQUE4QjtvQkFDOUIsMEJBQTBCO29CQUMxQiwwQkFBMEI7b0JBQzFCLDJCQUEyQjtvQkFDM0Isb0JBQW9CO29CQUNwQiwwQkFBMEI7aUJBQzNCO2FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9