/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { Replace } from '../shared';
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
export { NavDropdownDirective };
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
export { NavDropdownToggleDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NavDropdownToggleDirective.prototype.dropdown;
}
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
export { LinkAttributesDirective };
if (false) {
    /** @type {?} */
    LinkAttributesDirective.prototype.appLinkAttributes;
    /**
     * @type {?}
     * @private
     */
    LinkAttributesDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    LinkAttributesDirective.prototype.el;
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
    /**
     * @param {?} changes
     * @return {?}
     */
    AppSidebarNavComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.navItemsArray = JSON.parse(JSON.stringify(this.navItems));
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
export { AppSidebarNavComponent };
if (false) {
    /** @type {?} */
    AppSidebarNavComponent.prototype.navItems;
    /** @type {?} */
    AppSidebarNavComponent.prototype.true;
    /** @type {?} */
    AppSidebarNavComponent.prototype.role;
    /** @type {?} */
    AppSidebarNavComponent.prototype.navItemsArray;
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
export { AppSidebarNavItemComponent };
if (false) {
    /** @type {?} */
    AppSidebarNavItemComponent.prototype.item;
    /**
     * @type {?}
     * @private
     */
    AppSidebarNavItemComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
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
export { AppSidebarNavLinkComponent };
if (false) {
    /** @type {?} */
    AppSidebarNavLinkComponent.prototype.link;
    /**
     * @type {?}
     * @private
     */
    AppSidebarNavLinkComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
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
export { AppSidebarNavDropdownComponent };
if (false) {
    /** @type {?} */
    AppSidebarNavDropdownComponent.prototype.link;
    /**
     * @type {?}
     * @private
     */
    AppSidebarNavDropdownComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
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
export { AppSidebarNavTitleComponent };
if (false) {
    /** @type {?} */
    AppSidebarNavTitleComponent.prototype.title;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFHTCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVwQztJQUtFLDhCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFJLENBQUM7Ozs7SUFFdkMscUNBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDOztnQkFURixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0I7Ozs7Z0JBYkMsVUFBVTs7SUFxQlosMkJBQUM7Q0FBQSxBQVZELElBVUM7U0FQWSxvQkFBb0I7Ozs7OztJQUVuQixrQ0FBc0I7Ozs7O0FBVXBDO0lBSUUsb0NBQW9CLFFBQThCO1FBQTlCLGFBQVEsR0FBUixRQUFRLENBQXNCO0lBQUcsQ0FBQzs7Ozs7SUFHdEQsK0NBQVU7Ozs7SUFEVixVQUNXLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0JBVkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7aUJBQ25DOzs7O2dCQUUrQixvQkFBb0I7Ozs2QkFFakQsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFLbkMsaUNBQUM7Q0FBQSxB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QztTQTVCWSwyQkFBMkI7OztJQUN0Qyw0Q0FBb0I7Ozs7O0lBRVIseUNBQXNCOzs7OztJQUFFLCtDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGxhY2UgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwTmF2RHJvcGRvd25dJ1xufSlcbmV4cG9ydCBjbGFzcyBOYXZEcm9wZG93bkRpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gIH1cbn1cblxuLyoqXG4qIEFsbG93cyB0aGUgZHJvcGRvd24gdG8gYmUgdG9nZ2xlZCB2aWEgY2xpY2suXG4qL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcE5hdkRyb3Bkb3duVG9nZ2xlXSdcbn0pXG5leHBvcnQgY2xhc3MgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRyb3Bkb3duOiBOYXZEcm9wZG93bkRpcmVjdGl2ZSkge31cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmRyb3Bkb3duLnRvZ2dsZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBMaW5rQXR0cmlidXRlc10nXG59KVxuZXhwb3J0IGNsYXNzIExpbmtBdHRyaWJ1dGVzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgYXBwTGlua0F0dHJpYnV0ZXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGF0dHJpYnMgPSB0aGlzLmFwcExpbmtBdHRyaWJ1dGVzO1xuICAgIGZvciAoY29uc3QgYXR0ciBpbiBhdHRyaWJzKSB7XG4gICAgICBpZiAoYXR0ciA9PT0gJ3N0eWxlJyAmJiB0eXBlb2YoYXR0cmlic1thdHRyXSkgPT09ICdvYmplY3QnICkge1xuICAgICAgICB0aGlzLnNldFN0eWxlKGF0dHJpYnNbYXR0cl0pO1xuICAgICAgfSBlbHNlIGlmIChhdHRyID09PSAnY2xhc3MnKSB7XG4gICAgICAgIHRoaXMuYWRkQ2xhc3MoYXR0cmlic1thdHRyXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEF0dHJpYihhdHRyLCBhdHRyaWJzW2F0dHJdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFN0eWxlKHN0eWxlcykge1xuICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gc3R5bGVzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgc3R5bGUsIHN0eWxlc1tzdHlsZV0gKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZENsYXNzKGNsYXNzZXMpIHtcbiAgICBjb25zdCBjbGFzc0FycmF5ID0gQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgY2xhc3NBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGVsZW1lbnQgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0QXR0cmliKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBuZXdBdHRyID0gZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKGtleSk7XG4gICAgbmV3QXR0ci52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwga2V5LCB2YWx1ZSApO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHVsIGNsYXNzPVwibmF2XCI+XG4gICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LW5hdml0ZW0gW25nRm9yT2ZdPVwibmF2SXRlbXNcIj5cbiAgICAgICAgPGxpICpuZ0lmPVwiaXNEaXZpZGVyKG5hdml0ZW0pXCIgY2xhc3M9XCJuYXYtZGl2aWRlclwiPjwvbGk+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJpc1RpdGxlKG5hdml0ZW0pXCI+XG4gICAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi10aXRsZSBbdGl0bGVdPSduYXZpdGVtJz48L2FwcC1zaWRlYmFyLW5hdi10aXRsZT5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIiFpc0RpdmlkZXIobmF2aXRlbSkmJiFpc1RpdGxlKG5hdml0ZW0pXCI+XG4gICAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1pdGVtIFtpdGVtXT0nbmF2aXRlbSc+PC9hcHAtc2lkZWJhci1uYXYtaXRlbT5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC91bD5gXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBuYXZJdGVtczogQXJyYXk8YW55PjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpZGViYXItbmF2JykgdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSByb2xlID0gJ25hdic7XG5cbiAgcHVibGljIG5hdkl0ZW1zQXJyYXk6IEFycmF5PGFueT47XG5cbiAgcHVibGljIGlzRGl2aWRlcihpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0uZGl2aWRlciA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc1RpdGxlKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS50aXRsZSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5uYXZJdGVtc0FycmF5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLm5hdkl0ZW1zKSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtaXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGxpICpuZ0lmPVwiIWlzRHJvcGRvd24oKTsgZWxzZSBkcm9wZG93blwiIFtuZ0NsYXNzXT1cImhhc0NsYXNzKCkgPyAnbmF2LWl0ZW0gJyArIGl0ZW0uY2xhc3MgOiAnbmF2LWl0ZW0nXCI+XG4gICAgICA8YXBwLXNpZGViYXItbmF2LWxpbmsgW2xpbmtdPSdpdGVtJz48L2FwcC1zaWRlYmFyLW5hdi1saW5rPlxuICAgIDwvbGk+XG4gICAgPG5nLXRlbXBsYXRlICNkcm9wZG93bj5cbiAgICAgIDxsaSBbbmdDbGFzc109XCJoYXNDbGFzcygpID8gJ25hdi1pdGVtIG5hdi1kcm9wZG93biAnICsgaXRlbS5jbGFzcyA6ICduYXYtaXRlbSBuYXYtZHJvcGRvd24nXCJcbiAgICAgICAgICBbY2xhc3Mub3Blbl09XCJpc0FjdGl2ZSgpXCJcbiAgICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwib3BlblwiXG4gICAgICAgICAgYXBwTmF2RHJvcGRvd24+XG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtZHJvcGRvd24gW2xpbmtdPSdpdGVtJz48L2FwcC1zaWRlYmFyLW5hdi1kcm9wZG93bj5cbiAgICAgIDwvbGk+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXRlbTogYW55O1xuXG4gIHB1YmxpYyBoYXNDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtLmNsYXNzID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzRHJvcGRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbS5jaGlsZHJlbiA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyB0aGlzVXJsKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW0udXJsO1xuICB9XG5cbiAgcHVibGljIGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5pc0FjdGl2ZSh0aGlzLnRoaXNVcmwoKSwgZmFsc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1saW5rJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJnZXRMaW5rVHlwZSgpXCI+XG4gICAgICA8YSAqbmdTd2l0Y2hDYXNlPVwiJ2Rpc2FibGVkJ1wiXG4gICAgICBbYXR0ci5kaXNhYmxlZF09XCJ0cnVlXCJcbiAgICAgIFthcHBMaW5rQXR0cmlidXRlc109XCJsaW5rLmF0dHJpYnV0ZXNcIlxuICAgICAgaHJlZj1cIlwiXG4gICAgICBbbmdDbGFzc109XCJnZXRDbGFzc2VzKClcIj5cbiAgICAgICAgPGkgKm5nSWY9XCJpc0ljb24oKVwiIGNsYXNzPVwibmF2LWljb24ge3sgbGluay5pY29uIH19XCI+PC9pPlxuICAgICAgICB7eyBsaW5rLm5hbWUgfX1cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJpc0JhZGdlKClcIiBbbmdDbGFzc109XCInYmFkZ2UgYmFkZ2UtJyArIGxpbmsuYmFkZ2UudmFyaWFudFwiPnt7IGxpbmsuYmFkZ2UudGV4dCB9fTwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICAgIDxhICpuZ1N3aXRjaENhc2U9XCInZXh0ZXJuYWwnXCIgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NlcygpXCIgaHJlZj1cInt7bGluay51cmx9fVwiIFthcHBMaW5rQXR0cmlidXRlc109XCJsaW5rLmF0dHJpYnV0ZXNcIj5cbiAgICAgICAgPGkgKm5nSWY9XCJpc0ljb24oKVwiIGNsYXNzPVwibmF2LWljb24ge3sgbGluay5pY29uIH19XCI+PC9pPlxuICAgICAgICB7eyBsaW5rLm5hbWUgfX1cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJpc0JhZGdlKClcIiBbbmdDbGFzc109XCInYmFkZ2UgYmFkZ2UtJyArIGxpbmsuYmFkZ2UudmFyaWFudFwiPnt7IGxpbmsuYmFkZ2UudGV4dCB9fTwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICAgIDxhICpuZ1N3aXRjaERlZmF1bHRcbiAgICAgICAgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NlcygpXCJcbiAgICAgICAgW2FwcExpbmtBdHRyaWJ1dGVzXT1cImxpbmsuYXR0cmlidXRlc1wiXG4gICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIlxuICAgICAgICBbcm91dGVyTGlua109XCJbbGluay51cmxdXCJcbiAgICAgICAgKGNsaWNrKT1cImhpZGVNb2JpbGUoKVwiPlxuICAgICAgICA8aSAqbmdJZj1cImlzSWNvbigpXCIgY2xhc3M9XCJuYXYtaWNvbiB7eyBsaW5rLmljb24gfX1cIj48L2k+XG4gICAgICAgIHt7IGxpbmsubmFtZSB9fVxuICAgICAgICA8c3BhbiAqbmdJZj1cImlzQmFkZ2UoKVwiIFtuZ0NsYXNzXT1cIidiYWRnZSBiYWRnZS0nICsgbGluay5iYWRnZS52YXJpYW50XCI+e3sgbGluay5iYWRnZS50ZXh0IH19PC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZMaW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGluazogYW55O1xuXG4gIHB1YmxpYyBnZXRDbGFzc2VzKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICduYXYtbGluayc6IHRydWUsXG4gICAgICAnZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICdidG4tbGluayc6IGRpc2FibGVkXG4gICAgfTtcbiAgICBpZiAodGhpcy5oYXNWYXJpYW50KCkpIHtcbiAgICAgIGNvbnN0IHZhcmlhbnQgPSBgbmF2LWxpbmstJHt0aGlzLmxpbmsudmFyaWFudH1gO1xuICAgICAgY2xhc3Nlc1t2YXJpYW50XSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgcHVibGljIGdldExpbmtUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmlzRGlzYWJsZWQoKSA/ICdkaXNhYmxlZCcgOiB0aGlzLmlzRXh0ZXJuYWxMaW5rKCkgPyAnZXh0ZXJuYWwnIDogJyc7XG4gIH1cblxuICBwdWJsaWMgaGFzVmFyaWFudCgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5rLnZhcmlhbnQgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaXNCYWRnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5rLmJhZGdlID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluay5hdHRyaWJ1dGVzICYmIHRoaXMubGluay5hdHRyaWJ1dGVzLmRpc2FibGVkID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzRXh0ZXJuYWxMaW5rKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmsudXJsLnN1YnN0cmluZygwLCA0KSA9PT0gJ2h0dHAnID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzSWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5saW5rLmljb24gPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaGlkZU1vYmlsZSgpIHtcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItc2hvdycpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3NpZGViYXItc2hvdycpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtZHJvcGRvd24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgbmF2LWRyb3Bkb3duLXRvZ2dsZVwiIGFwcE5hdkRyb3Bkb3duVG9nZ2xlPlxuICAgICAgPGkgKm5nSWY9XCJpc0ljb24oKVwiIGNsYXNzPVwibmF2LWljb24ge3sgbGluay5pY29uIH19XCI+PC9pPlxuICAgICAge3sgbGluay5uYW1lIH19XG4gICAgICA8c3BhbiAqbmdJZj1cImlzQmFkZ2UoKVwiIFtuZ0NsYXNzXT1cIidiYWRnZSBiYWRnZS0nICsgbGluay5iYWRnZS52YXJpYW50XCI+e3sgbGluay5iYWRnZS50ZXh0IH19PC9zcGFuPlxuICAgIDwvYT5cbiAgICA8dWwgY2xhc3M9XCJuYXYtZHJvcGRvd24taXRlbXNcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtY2hpbGQgW25nRm9yT2ZdPVwibGluay5jaGlsZHJlblwiPlxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWl0ZW0gW2l0ZW1dPSdjaGlsZCc+PC9hcHAtc2lkZWJhci1uYXYtaXRlbT5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC91bD5cbiAgYCxcbiAgc3R5bGVzOiBbJy5uYXYtZHJvcGRvd24tdG9nZ2xlIHsgY3Vyc29yOiBwb2ludGVyOyB9J11cbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGluazogYW55O1xuXG4gIHB1YmxpYyBpc0JhZGdlKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmsuYmFkZ2UgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaXNJY29uKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmsuaWNvbiA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtdGl0bGUnLFxuICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGl0bGU6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGxpID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQodGhpcy50aXRsZS5uYW1lKTtcblxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MobGksICduYXYtdGl0bGUnKTtcblxuICAgIGlmICggdGhpcy50aXRsZS5jbGFzcyApIHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLnRpdGxlLmNsYXNzO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhsaSwgY2xhc3Nlcyk7XG4gICAgfVxuXG4gICAgaWYgKCB0aGlzLnRpdGxlLndyYXBwZXIgKSB7XG4gICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KHRoaXMudGl0bGUud3JhcHBlci5lbGVtZW50KTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh3cmFwcGVyLCBuYW1lKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQobGksIHdyYXBwZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGxpLCBuYW1lKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChuYXRpdmVFbGVtZW50LCBsaSk7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgfVxufVxuIl19