/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { Replace } from './../shared';
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
export { NavDropdownDirective };
function NavDropdownDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NavDropdownDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NavDropdownDirective.ctorParameters;
    /** @type {?} */
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
export { NavDropdownToggleDirective };
function NavDropdownToggleDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NavDropdownToggleDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NavDropdownToggleDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    NavDropdownToggleDirective.propDecorators;
    /** @type {?} */
    NavDropdownToggleDirective.prototype.dropdown;
}
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
export { AppSidebarNavComponent };
function AppSidebarNavComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppSidebarNavComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppSidebarNavComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AppSidebarNavComponent.propDecorators;
    /** @type {?} */
    AppSidebarNavComponent.prototype.navItems;
    /** @type {?} */
    AppSidebarNavComponent.prototype.true;
    /** @type {?} */
    AppSidebarNavComponent.prototype.role;
}
import { Router } from '@angular/router';
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
export { AppSidebarNavItemComponent };
function AppSidebarNavItemComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppSidebarNavItemComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppSidebarNavItemComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AppSidebarNavItemComponent.propDecorators;
    /** @type {?} */
    AppSidebarNavItemComponent.prototype.item;
    /** @type {?} */
    AppSidebarNavItemComponent.prototype.router;
    /** @type {?} */
    AppSidebarNavItemComponent.prototype.el;
}
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
export { AppSidebarNavLinkComponent };
function AppSidebarNavLinkComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppSidebarNavLinkComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppSidebarNavLinkComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AppSidebarNavLinkComponent.propDecorators;
    /** @type {?} */
    AppSidebarNavLinkComponent.prototype.link;
    /** @type {?} */
    AppSidebarNavLinkComponent.prototype.router;
    /** @type {?} */
    AppSidebarNavLinkComponent.prototype.el;
}
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
export { AppSidebarNavDropdownComponent };
function AppSidebarNavDropdownComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppSidebarNavDropdownComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppSidebarNavDropdownComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AppSidebarNavDropdownComponent.propDecorators;
    /** @type {?} */
    AppSidebarNavDropdownComponent.prototype.link;
    /** @type {?} */
    AppSidebarNavDropdownComponent.prototype.router;
    /** @type {?} */
    AppSidebarNavDropdownComponent.prototype.el;
}
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
export { AppSidebarNavTitleComponent };
function AppSidebarNavTitleComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppSidebarNavTitleComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppSidebarNavTitleComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AppSidebarNavTitleComponent.propDecorators;
    /** @type {?} */
    AppSidebarNavTitleComponent.prototype.title;
    /** @type {?} */
    AppSidebarNavTitleComponent.prototype.el;
    /** @type {?} */
    AppSidebarNavTitleComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3pJLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBT3BDLDhCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtLQUFLOzs7O0lBRXZDLHFDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDaEQ7O2dCQVRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7OztnQkFMOEIsVUFBVTs7K0JBQXpDOztTQU1hLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7OztJQWdCL0Isb0NBQW9CLFFBQThCO1FBQTlCLGFBQVEsR0FBUixRQUFRLENBQXNCO0tBQUk7Ozs7O0lBR3RELCtDQUFVOzs7O2NBQUMsTUFBVztRQUNwQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7O2dCQVQxQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtpQkFDbkM7Ozs7Z0JBZFksb0JBQW9COzs7K0JBa0I5QixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztxQ0F4Qm5DOztTQXFCYSwwQkFBMEI7Ozs7Ozs7Ozs7Ozs7OztJQXVDckM7b0JBVmlDLEtBQUs7S0FVckI7Ozs7O0lBUlYsMENBQVM7Ozs7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QUFFLENBQUMsQ0FBQztLQUNsQjs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsRUFBRTtpQkFDYjs7OztnQkF0TThCLFVBQVU7Z0JBQTRDLFNBQVM7OzswQkF3TTNGLEtBQUs7O3NDQXhNUjs7U0F1TWEsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGxhY2UgfSBmcm9tICcuLy4uL3NoYXJlZCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBOYXZEcm9wZG93bl0nXG59KVxuZXhwb3J0IGNsYXNzIE5hdkRyb3Bkb3duRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgfVxufVxuXG4vKipcbiogQWxsb3dzIHRoZSBkcm9wZG93biB0byBiZSB0b2dnbGVkIHZpYSBjbGljay5cbiovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwTmF2RHJvcGRvd25Ub2dnbGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBOYXZEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZHJvcGRvd246IE5hdkRyb3Bkb3duRGlyZWN0aXZlKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZHJvcGRvd24udG9nZ2xlKCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dWwgY2xhc3M9XCJuYXZcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtbmF2aXRlbSBbbmdGb3JPZl09XCJuYXZJdGVtc1wiPlxuICAgICAgICA8bGkgKm5nSWY9XCJpc0RpdmlkZXIobmF2aXRlbSlcIiBjbGFzcz1cIm5hdi1kaXZpZGVyXCI+PC9saT5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImlzVGl0bGUobmF2aXRlbSlcIj5cbiAgICAgICAgICA8YXBwLXNpZGViYXItbmF2LXRpdGxlIFt0aXRsZV09J25hdml0ZW0nPjwvYXBwLXNpZGViYXItbmF2LXRpdGxlPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiIWlzRGl2aWRlcihuYXZpdGVtKSYmIWlzVGl0bGUobmF2aXRlbSlcIj5cbiAgICAgICAgICA8YXBwLXNpZGViYXItbmF2LWl0ZW0gW2l0ZW1dPSduYXZpdGVtJz48L2FwcC1zaWRlYmFyLW5hdi1pdGVtPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L3VsPmBcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG5hdkl0ZW1zOiBhbnk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaWRlYmFyLW5hdicpIHRydWU7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZSA9ICduYXYnO1xuXG4gIHB1YmxpYyBpc0RpdmlkZXIoaXRlbSkge1xuICAgIHJldHVybiBpdGVtLmRpdmlkZXIgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaXNUaXRsZShpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0udGl0bGUgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtaXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGxpICpuZ0lmPVwiIWlzRHJvcGRvd24oKTsgZWxzZSBkcm9wZG93blwiIFtuZ0NsYXNzXT1cImhhc0NsYXNzKCkgPyAnbmF2LWl0ZW0gJyArIGl0ZW0uY2xhc3MgOiAnbmF2LWl0ZW0nXCI+XG4gICAgICA8YXBwLXNpZGViYXItbmF2LWxpbmsgW2xpbmtdPSdpdGVtJz48L2FwcC1zaWRlYmFyLW5hdi1saW5rPlxuICAgIDwvbGk+XG4gICAgPG5nLXRlbXBsYXRlICNkcm9wZG93bj5cbiAgICAgIDxsaSBbbmdDbGFzc109XCJoYXNDbGFzcygpID8gJ25hdi1pdGVtIG5hdi1kcm9wZG93biAnICsgaXRlbS5jbGFzcyA6ICduYXYtaXRlbSBuYXYtZHJvcGRvd24nXCJcbiAgICAgICAgICBbY2xhc3Mub3Blbl09XCJpc0FjdGl2ZSgpXCJcbiAgICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwib3BlblwiXG4gICAgICAgICAgYXBwTmF2RHJvcGRvd24+XG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtZHJvcGRvd24gW2xpbmtdPSdpdGVtJz48L2FwcC1zaWRlYmFyLW5hdi1kcm9wZG93bj5cbiAgICAgIDwvbGk+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXRlbTogYW55O1xuXG4gIHB1YmxpYyBoYXNDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtLmNsYXNzID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzRHJvcGRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbS5jaGlsZHJlbiA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyB0aGlzVXJsKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW0udXJsO1xuICB9XG5cbiAgcHVibGljIGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5pc0FjdGl2ZSh0aGlzLnRoaXNVcmwoKSwgZmFsc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xuICB9XG5cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWxpbmsnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhICpuZ0lmPVwiIWlzRXh0ZXJuYWxMaW5rKCk7IGVsc2UgZXh0ZXJuYWxcIlxuICAgICAgW25nQ2xhc3NdPVwiaGFzVmFyaWFudCgpID8gJ25hdi1saW5rIG5hdi1saW5rLScgKyBsaW5rLnZhcmlhbnQgOiAnbmF2LWxpbmsnXCJcbiAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIlxuICAgICAgW3JvdXRlckxpbmtdPVwiW2xpbmsudXJsXVwiXG4gICAgICAoY2xpY2spPVwiaGlkZU1vYmlsZSgpXCI+XG4gICAgICA8aSAqbmdJZj1cImlzSWNvbigpXCIgY2xhc3M9XCJuYXYtaWNvbiB7eyBsaW5rLmljb24gfX1cIj48L2k+XG4gICAgICB7eyBsaW5rLm5hbWUgfX1cbiAgICAgIDxzcGFuICpuZ0lmPVwiaXNCYWRnZSgpXCIgW25nQ2xhc3NdPVwiJ2JhZGdlIGJhZGdlLScgKyBsaW5rLmJhZGdlLnZhcmlhbnRcIj57eyBsaW5rLmJhZGdlLnRleHQgfX08L3NwYW4+XG4gICAgPC9hPlxuICAgIDxuZy10ZW1wbGF0ZSAjZXh0ZXJuYWw+XG4gICAgICA8YSBbbmdDbGFzc109XCJoYXNWYXJpYW50KCkgPyAnbmF2LWxpbmsgbmF2LWxpbmstJyArIGxpbmsudmFyaWFudCA6ICduYXYtbGluaydcIiBocmVmPVwie3tsaW5rLnVybH19XCI+XG4gICAgICAgIDxpICpuZ0lmPVwiaXNJY29uKClcIiBjbGFzcz1cIm5hdi1pY29uIHt7IGxpbmsuaWNvbiB9fVwiPjwvaT5cbiAgICAgICAge3sgbGluay5uYW1lIH19XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiaXNCYWRnZSgpXCIgW25nQ2xhc3NdPVwiJ2JhZGdlIGJhZGdlLScgKyBsaW5rLmJhZGdlLnZhcmlhbnRcIj57eyBsaW5rLmJhZGdlLnRleHQgfX08L3NwYW4+XG4gICAgICA8L2E+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxpbms6IGFueTtcblxuICBwdWJsaWMgaGFzVmFyaWFudCgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5rLnZhcmlhbnQgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaXNCYWRnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5rLmJhZGdlID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzRXh0ZXJuYWxMaW5rKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmsudXJsLnN1YnN0cmluZygwLCA0KSA9PT0gJ2h0dHAnID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzSWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5saW5rLmljb24gPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaGlkZU1vYmlsZSgpIHtcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItbW9iaWxlLXNob3cnKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdzaWRlYmFyLW1vYmlsZS1zaG93Jyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1kcm9wZG93bicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGEgY2xhc3M9XCJuYXYtbGluayBuYXYtZHJvcGRvd24tdG9nZ2xlXCIgYXBwTmF2RHJvcGRvd25Ub2dnbGU+XG4gICAgICA8aSAqbmdJZj1cImlzSWNvbigpXCIgY2xhc3M9XCJuYXYtaWNvbiB7eyBsaW5rLmljb24gfX1cIj48L2k+XG4gICAgICB7eyBsaW5rLm5hbWUgfX1cbiAgICAgIDxzcGFuICpuZ0lmPVwiaXNCYWRnZSgpXCIgW25nQ2xhc3NdPVwiJ2JhZGdlIGJhZGdlLScgKyBsaW5rLmJhZGdlLnZhcmlhbnRcIj57eyBsaW5rLmJhZGdlLnRleHQgfX08L3NwYW4+XG4gICAgPC9hPlxuICAgIDx1bCBjbGFzcz1cIm5hdi1kcm9wZG93bi1pdGVtc1wiPlxuICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1jaGlsZCBbbmdGb3JPZl09XCJsaW5rLmNoaWxkcmVuXCI+XG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtaXRlbSBbaXRlbV09J2NoaWxkJz48L2FwcC1zaWRlYmFyLW5hdi1pdGVtPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L3VsPlxuICBgLFxuICBzdHlsZXM6IFsnLm5hdi1kcm9wZG93bi10b2dnbGUgeyBjdXJzb3I6IHBvaW50ZXI7IH0nXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsaW5rOiBhbnk7XG5cbiAgcHVibGljIGlzQmFkZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluay5iYWRnZSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0ljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGluay5pY29uID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi10aXRsZScsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aXRsZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgbGkgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dCh0aGlzLnRpdGxlLm5hbWUpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhsaSwgJ25hdi10aXRsZScpO1xuXG4gICAgaWYgKCB0aGlzLnRpdGxlLmNsYXNzICkge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IHRoaXMudGl0bGUuY2xhc3M7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGxpLCBjbGFzc2VzKTtcbiAgICB9XG5cbiAgICBpZiAoIHRoaXMudGl0bGUud3JhcHBlciApIHtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQodGhpcy50aXRsZS53cmFwcGVyLmVsZW1lbnQpO1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHdyYXBwZXIsIG5hbWUpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChsaSwgd3JhcHBlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQobGksIG5hbWUpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKG5hdGl2ZUVsZW1lbnQsIGxpKTtcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xuICB9XG59XG4iXX0=