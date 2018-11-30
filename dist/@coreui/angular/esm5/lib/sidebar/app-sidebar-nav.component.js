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
                },] },
    ];
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
                },] },
    ];
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
                },] },
    ];
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
    AppSidebarNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-nav',
                    template: "\n    <ul class=\"nav\">\n      <ng-template ngFor let-navitem [ngForOf]=\"navItems\">\n        <li *ngIf=\"isDivider(navitem)\" class=\"nav-divider\"></li>\n        <ng-template [ngIf]=\"isTitle(navitem)\">\n          <app-sidebar-nav-title [title]='navitem'></app-sidebar-nav-title>\n        </ng-template>\n        <ng-template [ngIf]=\"!isDivider(navitem)&&!isTitle(navitem)\">\n          <app-sidebar-nav-item [item]='navitem'></app-sidebar-nav-item>\n        </ng-template>\n      </ng-template>\n    </ul>"
                },] },
    ];
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
                    template: "\n    <ng-container [ngSwitch]=\"getLinkType()\">\n      <a *ngSwitchCase=\"'disabled'\"\n      [attr.disabled]=\"true\"\n      [appLinkAttributes]=\"link.attributes\"\n      href=\"\"\n      [ngClass]=\"getClasses()\"\n      >\n        <i *ngIf=\"isIcon()\" class=\"nav-icon {{ link.icon }}\"></i>\n          {{ link.name }}\n          <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n        </a>\n      <a *ngSwitchCase=\"'external'\" [ngClass]=\"getClasses()\" href=\"{{link.url}}\" [appLinkAttributes]=\"link.attributes\">\n        <i *ngIf=\"isIcon()\" class=\"nav-icon {{ link.icon }}\"></i>\n        {{ link.name }}\n        <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n      </a>\n      <a *ngSwitchDefault\n        [ngClass]=\"getClasses()\"\n        [appLinkAttributes]=\"link.attributes\"\n        routerLinkActive=\"active\"\n        [routerLink]=\"[link.url]\"\n        (click)=\"hideMobile()\">\n        <i *ngIf=\"isIcon()\" class=\"nav-icon {{ link.icon }}\"></i>\n        {{ link.name }}\n        <span *ngIf=\"isBadge()\" [ngClass]=\"'badge badge-' + link.badge.variant\">{{ link.badge.text }}</span>\n      </a>\n    </ng-container>\n  "
                },] },
    ];
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
                },] },
    ];
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
                },] },
    ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEgsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVwQztJQUtFLDhCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFJLENBQUM7Ozs7SUFFdkMscUNBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDOztnQkFURixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0I7OztnQkFMOEIsVUFBVTs7SUFhekMsMkJBQUM7Q0FBQSxBQVZELElBVUM7U0FQWSxvQkFBb0I7Ozs7OztJQUVuQixrQ0FBc0I7Ozs7O0FBVXBDO0lBSUUsb0NBQW9CLFFBQThCO1FBQTlCLGFBQVEsR0FBUixRQUFRLENBQXNCO0lBQUcsQ0FBQzs7Ozs7SUFHdEQsK0NBQVU7Ozs7SUFEVixVQUNXLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0JBVkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7aUJBQ25DOzs7Z0JBRStCLG9CQUFvQjs7OzZCQUVqRCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQUtuQyxpQ0FBQztDQUFBLEFB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QUFRLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXhDLElBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUc7O2dCQUNoQixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNyQztRQUVELElBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUc7O2dCQUNsQixPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBRXZFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNyQztRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25CLENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7OztnQkE5UThCLFVBQVU7Z0JBQTRDLFNBQVM7Ozt3QkFnUjNGLEtBQUs7O0lBMkJSLGtDQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0E1QlksMkJBQTJCOzs7SUFDdEMsNENBQW9COzs7OztJQUVSLHlDQUFzQjs7Ozs7SUFBRSwrQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYWNlIH0gZnJvbSAnLi4vc2hhcmVkJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcE5hdkRyb3Bkb3duXSdcbn0pXG5leHBvcnQgY2xhc3MgTmF2RHJvcGRvd25EaXJlY3RpdmUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICB9XG59XG5cbi8qKlxuKiBBbGxvd3MgdGhlIGRyb3Bkb3duIHRvIGJlIHRvZ2dsZWQgdmlhIGNsaWNrLlxuKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBOYXZEcm9wZG93blRvZ2dsZV0nXG59KVxuZXhwb3J0IGNsYXNzIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkcm9wZG93bjogTmF2RHJvcGRvd25EaXJlY3RpdmUpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5kcm9wZG93bi50b2dnbGUoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwTGlua0F0dHJpYnV0ZXNdJ1xufSlcbmV4cG9ydCBjbGFzcyBMaW5rQXR0cmlidXRlc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGFwcExpbmtBdHRyaWJ1dGVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBhdHRyaWJzID0gdGhpcy5hcHBMaW5rQXR0cmlidXRlcztcbiAgICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cmlicykge1xuICAgICAgaWYgKGF0dHIgPT09ICdzdHlsZScgJiYgdHlwZW9mKGF0dHJpYnNbYXR0cl0pID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgdGhpcy5zZXRTdHlsZShhdHRyaWJzW2F0dHJdKTtcbiAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ2NsYXNzJykge1xuICAgICAgICB0aGlzLmFkZENsYXNzKGF0dHJpYnNbYXR0cl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWIoYXR0ciwgYXR0cmlic1thdHRyXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdHlsZShzdHlsZXMpIHtcbiAgICBmb3IgKGNvbnN0IHN0eWxlIGluIHN0eWxlcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHN0eWxlLCBzdHlsZXNbc3R5bGVdICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRDbGFzcyhjbGFzc2VzKSB7XG4gICAgY29uc3QgY2xhc3NBcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgIGNsYXNzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBlbGVtZW50ICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldEF0dHJpYihrZXksIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3QXR0ciA9IGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShrZXkpO1xuICAgIG5ld0F0dHIudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGtleSwgdmFsdWUgKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDx1bCBjbGFzcz1cIm5hdlwiPlxuICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1uYXZpdGVtIFtuZ0Zvck9mXT1cIm5hdkl0ZW1zXCI+XG4gICAgICAgIDxsaSAqbmdJZj1cImlzRGl2aWRlcihuYXZpdGVtKVwiIGNsYXNzPVwibmF2LWRpdmlkZXJcIj48L2xpPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiaXNUaXRsZShuYXZpdGVtKVwiPlxuICAgICAgICAgIDxhcHAtc2lkZWJhci1uYXYtdGl0bGUgW3RpdGxlXT0nbmF2aXRlbSc+PC9hcHAtc2lkZWJhci1uYXYtdGl0bGU+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCIhaXNEaXZpZGVyKG5hdml0ZW0pJiYhaXNUaXRsZShuYXZpdGVtKVwiPlxuICAgICAgICAgIDxhcHAtc2lkZWJhci1uYXYtaXRlbSBbaXRlbV09J25hdml0ZW0nPjwvYXBwLXNpZGViYXItbmF2LWl0ZW0+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvdWw+YFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2Q29tcG9uZW50IHtcbiAgQElucHV0KCkgbmF2SXRlbXM6IGFueTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpZGViYXItbmF2JykgdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSByb2xlID0gJ25hdic7XG5cbiAgcHVibGljIGlzRGl2aWRlcihpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0uZGl2aWRlciA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc1RpdGxlKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS50aXRsZSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG5cbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1pdGVtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGkgKm5nSWY9XCIhaXNEcm9wZG93bigpOyBlbHNlIGRyb3Bkb3duXCIgW25nQ2xhc3NdPVwiaGFzQ2xhc3MoKSA/ICduYXYtaXRlbSAnICsgaXRlbS5jbGFzcyA6ICduYXYtaXRlbSdcIj5cbiAgICAgIDxhcHAtc2lkZWJhci1uYXYtbGluayBbbGlua109J2l0ZW0nPjwvYXBwLXNpZGViYXItbmF2LWxpbms+XG4gICAgPC9saT5cbiAgICA8bmctdGVtcGxhdGUgI2Ryb3Bkb3duPlxuICAgICAgPGxpIFtuZ0NsYXNzXT1cImhhc0NsYXNzKCkgPyAnbmF2LWl0ZW0gbmF2LWRyb3Bkb3duICcgKyBpdGVtLmNsYXNzIDogJ25hdi1pdGVtIG5hdi1kcm9wZG93bidcIlxuICAgICAgICAgIFtjbGFzcy5vcGVuXT1cImlzQWN0aXZlKClcIlxuICAgICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJvcGVuXCJcbiAgICAgICAgICBhcHBOYXZEcm9wZG93bj5cbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1kcm9wZG93biBbbGlua109J2l0ZW0nPjwvYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duPlxuICAgICAgPC9saT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpdGVtOiBhbnk7XG5cbiAgcHVibGljIGhhc0NsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW0uY2xhc3MgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaXNEcm9wZG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtLmNoaWxkcmVuID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHRoaXNVcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbS51cmw7XG4gIH1cblxuICBwdWJsaWMgaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLmlzQWN0aXZlKHRoaXMudGhpc1VybCgpLCBmYWxzZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZiApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWxpbmsnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImdldExpbmtUeXBlKClcIj5cbiAgICAgIDxhICpuZ1N3aXRjaENhc2U9XCInZGlzYWJsZWQnXCJcbiAgICAgIFthdHRyLmRpc2FibGVkXT1cInRydWVcIlxuICAgICAgW2FwcExpbmtBdHRyaWJ1dGVzXT1cImxpbmsuYXR0cmlidXRlc1wiXG4gICAgICBocmVmPVwiXCJcbiAgICAgIFtuZ0NsYXNzXT1cImdldENsYXNzZXMoKVwiXG4gICAgICA+XG4gICAgICAgIDxpICpuZ0lmPVwiaXNJY29uKClcIiBjbGFzcz1cIm5hdi1pY29uIHt7IGxpbmsuaWNvbiB9fVwiPjwvaT5cbiAgICAgICAgICB7eyBsaW5rLm5hbWUgfX1cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzQmFkZ2UoKVwiIFtuZ0NsYXNzXT1cIidiYWRnZSBiYWRnZS0nICsgbGluay5iYWRnZS52YXJpYW50XCI+e3sgbGluay5iYWRnZS50ZXh0IH19PC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8YSAqbmdTd2l0Y2hDYXNlPVwiJ2V4dGVybmFsJ1wiIFtuZ0NsYXNzXT1cImdldENsYXNzZXMoKVwiIGhyZWY9XCJ7e2xpbmsudXJsfX1cIiBbYXBwTGlua0F0dHJpYnV0ZXNdPVwibGluay5hdHRyaWJ1dGVzXCI+XG4gICAgICAgIDxpICpuZ0lmPVwiaXNJY29uKClcIiBjbGFzcz1cIm5hdi1pY29uIHt7IGxpbmsuaWNvbiB9fVwiPjwvaT5cbiAgICAgICAge3sgbGluay5uYW1lIH19XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiaXNCYWRnZSgpXCIgW25nQ2xhc3NdPVwiJ2JhZGdlIGJhZGdlLScgKyBsaW5rLmJhZGdlLnZhcmlhbnRcIj57eyBsaW5rLmJhZGdlLnRleHQgfX08L3NwYW4+XG4gICAgICA8L2E+XG4gICAgICA8YSAqbmdTd2l0Y2hEZWZhdWx0XG4gICAgICAgIFtuZ0NsYXNzXT1cImdldENsYXNzZXMoKVwiXG4gICAgICAgIFthcHBMaW5rQXR0cmlidXRlc109XCJsaW5rLmF0dHJpYnV0ZXNcIlxuICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCJcbiAgICAgICAgW3JvdXRlckxpbmtdPVwiW2xpbmsudXJsXVwiXG4gICAgICAgIChjbGljayk9XCJoaWRlTW9iaWxlKClcIj5cbiAgICAgICAgPGkgKm5nSWY9XCJpc0ljb24oKVwiIGNsYXNzPVwibmF2LWljb24ge3sgbGluay5pY29uIH19XCI+PC9pPlxuICAgICAgICB7eyBsaW5rLm5hbWUgfX1cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJpc0JhZGdlKClcIiBbbmdDbGFzc109XCInYmFkZ2UgYmFkZ2UtJyArIGxpbmsuYmFkZ2UudmFyaWFudFwiPnt7IGxpbmsuYmFkZ2UudGV4dCB9fTwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxpbms6IGFueTtcblxuICBwdWJsaWMgZ2V0Q2xhc3NlcygpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICAnbmF2LWxpbmsnOiB0cnVlLFxuICAgICAgJ2Rpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgICAnYnRuLWxpbmsnOiBkaXNhYmxlZFxuICAgIH07XG4gICAgaWYgKHRoaXMuaGFzVmFyaWFudCgpKSB7XG4gICAgICBjb25zdCB2YXJpYW50ID0gYG5hdi1saW5rLSR7dGhpcy5saW5rLnZhcmlhbnR9YDtcbiAgICAgIGNsYXNzZXNbdmFyaWFudF0gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRMaW5rVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkKCkgPyAnZGlzYWJsZWQnIDogdGhpcy5pc0V4dGVybmFsTGluaygpID8gJ2V4dGVybmFsJyA6ICcnO1xuICB9XG5cbiAgcHVibGljIGhhc1ZhcmlhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluay52YXJpYW50ID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzQmFkZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluay5iYWRnZSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmsuYXR0cmlidXRlcyAmJiB0aGlzLmxpbmsuYXR0cmlidXRlcy5kaXNhYmxlZCA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0V4dGVybmFsTGluaygpIHtcbiAgICByZXR1cm4gdGhpcy5saW5rLnVybC5zdWJzdHJpbmcoMCwgNCkgPT09ICdodHRwJyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0ljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGluay5pY29uID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGhpZGVNb2JpbGUoKSB7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLXNob3cnKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdzaWRlYmFyLXNob3cnKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZiApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YSBjbGFzcz1cIm5hdi1saW5rIG5hdi1kcm9wZG93bi10b2dnbGVcIiBhcHBOYXZEcm9wZG93blRvZ2dsZT5cbiAgICAgIDxpICpuZ0lmPVwiaXNJY29uKClcIiBjbGFzcz1cIm5hdi1pY29uIHt7IGxpbmsuaWNvbiB9fVwiPjwvaT5cbiAgICAgIHt7IGxpbmsubmFtZSB9fVxuICAgICAgPHNwYW4gKm5nSWY9XCJpc0JhZGdlKClcIiBbbmdDbGFzc109XCInYmFkZ2UgYmFkZ2UtJyArIGxpbmsuYmFkZ2UudmFyaWFudFwiPnt7IGxpbmsuYmFkZ2UudGV4dCB9fTwvc3Bhbj5cbiAgICA8L2E+XG4gICAgPHVsIGNsYXNzPVwibmF2LWRyb3Bkb3duLWl0ZW1zXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LWNoaWxkIFtuZ0Zvck9mXT1cImxpbmsuY2hpbGRyZW5cIj5cbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1pdGVtIFtpdGVtXT0nY2hpbGQnPjwvYXBwLXNpZGViYXItbmF2LWl0ZW0+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvdWw+XG4gIGAsXG4gIHN0eWxlczogWycubmF2LWRyb3Bkb3duLXRvZ2dsZSB7IGN1cnNvcjogcG9pbnRlcjsgfSddXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxpbms6IGFueTtcblxuICBwdWJsaWMgaXNCYWRnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5rLmJhZGdlID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzSWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5saW5rLmljb24gPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZiApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LXRpdGxlJyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBsaSA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KHRoaXMudGl0bGUubmFtZSk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGxpLCAnbmF2LXRpdGxlJyk7XG5cbiAgICBpZiAoIHRoaXMudGl0bGUuY2xhc3MgKSB7XG4gICAgICBjb25zdCBjbGFzc2VzID0gdGhpcy50aXRsZS5jbGFzcztcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MobGksIGNsYXNzZXMpO1xuICAgIH1cblxuICAgIGlmICggdGhpcy50aXRsZS53cmFwcGVyICkge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCh0aGlzLnRpdGxlLndyYXBwZXIuZWxlbWVudCk7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQod3JhcHBlciwgbmFtZSk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGxpLCB3cmFwcGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChsaSwgbmFtZSk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQobmF0aXZlRWxlbWVudCwgbGkpO1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gIH1cbn1cbiJdfQ==