/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { Replace } from '../shared';
export class NavDropdownDirective {
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
export class NavDropdownToggleDirective {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    NavDropdownToggleDirective.prototype.dropdown;
}
export class LinkAttributesDirective {
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
export class AppSidebarNavComponent {
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
export class AppSidebarNavItemComponent {
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
export class AppSidebarNavLinkComponent {
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
export class AppSidebarNavDropdownComponent {
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
export class AppSidebarNavTitleComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFHTCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUtwQyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRS9CLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUksQ0FBQzs7OztJQUV2QyxNQUFNO1FBQ0osSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUFURixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7OztZQWJDLFVBQVU7Ozs7Ozs7SUFnQkUsa0NBQXNCOzs7OztBQWFwQyxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBQ3JDLFlBQW9CLFFBQThCO1FBQTlCLGFBQVEsR0FBUixRQUFRLENBQXNCO0lBQUcsQ0FBQzs7Ozs7SUFHdEQsVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7YUFDbkM7Ozs7WUFFK0Isb0JBQW9COzs7eUJBRWpELFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUFGckIsOENBQXNDOztBQVlwRCxNQUFNLE9BQU8sdUJB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SSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUc7O2tCQUNsQixPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBRXZFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNyQztRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25CLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFLEVBQUU7YUFDYjs7OztZQTNSQyxVQUFVO1lBTVYsU0FBUzs7O29CQXVSUixLQUFLOzs7O0lBQU4sNENBQW9COzs7OztJQUVSLHlDQUFzQjs7Ozs7SUFBRSwrQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYWNlIH0gZnJvbSAnLi4vc2hhcmVkJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcE5hdkRyb3Bkb3duXSdcbn0pXG5leHBvcnQgY2xhc3MgTmF2RHJvcGRvd25EaXJlY3RpdmUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICB9XG59XG5cbi8qKlxuKiBBbGxvd3MgdGhlIGRyb3Bkb3duIHRvIGJlIHRvZ2dsZWQgdmlhIGNsaWNrLlxuKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBOYXZEcm9wZG93blRvZ2dsZV0nXG59KVxuZXhwb3J0IGNsYXNzIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkcm9wZG93bjogTmF2RHJvcGRvd25EaXJlY3RpdmUpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5kcm9wZG93bi50b2dnbGUoKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwTGlua0F0dHJpYnV0ZXNdJ1xufSlcbmV4cG9ydCBjbGFzcyBMaW5rQXR0cmlidXRlc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGFwcExpbmtBdHRyaWJ1dGVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBhdHRyaWJzID0gdGhpcy5hcHBMaW5rQXR0cmlidXRlcztcbiAgICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cmlicykge1xuICAgICAgaWYgKGF0dHIgPT09ICdzdHlsZScgJiYgdHlwZW9mKGF0dHJpYnNbYXR0cl0pID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgdGhpcy5zZXRTdHlsZShhdHRyaWJzW2F0dHJdKTtcbiAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ2NsYXNzJykge1xuICAgICAgICB0aGlzLmFkZENsYXNzKGF0dHJpYnNbYXR0cl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWIoYXR0ciwgYXR0cmlic1thdHRyXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdHlsZShzdHlsZXMpIHtcbiAgICBmb3IgKGNvbnN0IHN0eWxlIGluIHN0eWxlcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHN0eWxlLCBzdHlsZXNbc3R5bGVdICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRDbGFzcyhjbGFzc2VzKSB7XG4gICAgY29uc3QgY2xhc3NBcnJheSA9IEFycmF5LmlzQXJyYXkoY2xhc3NlcykgPyBjbGFzc2VzIDogY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgIGNsYXNzQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBlbGVtZW50ICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldEF0dHJpYihrZXksIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3QXR0ciA9IGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShrZXkpO1xuICAgIG5ld0F0dHIudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGtleSwgdmFsdWUgKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDx1bCBjbGFzcz1cIm5hdlwiPlxuICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1uYXZpdGVtIFtuZ0Zvck9mXT1cIm5hdkl0ZW1zXCI+XG4gICAgICAgIDxsaSAqbmdJZj1cImlzRGl2aWRlcihuYXZpdGVtKVwiIGNsYXNzPVwibmF2LWRpdmlkZXJcIj48L2xpPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiaXNUaXRsZShuYXZpdGVtKVwiPlxuICAgICAgICAgIDxhcHAtc2lkZWJhci1uYXYtdGl0bGUgW3RpdGxlXT0nbmF2aXRlbSc+PC9hcHAtc2lkZWJhci1uYXYtdGl0bGU+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCIhaXNEaXZpZGVyKG5hdml0ZW0pJiYhaXNUaXRsZShuYXZpdGVtKVwiPlxuICAgICAgICAgIDxhcHAtc2lkZWJhci1uYXYtaXRlbSBbaXRlbV09J25hdml0ZW0nPjwvYXBwLXNpZGViYXItbmF2LWl0ZW0+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvdWw+YFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbmF2SXRlbXM6IEFycmF5PGFueT47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaWRlYmFyLW5hdicpIHRydWU7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZSA9ICduYXYnO1xuXG4gIHB1YmxpYyBuYXZJdGVtc0FycmF5OiBBcnJheTxhbnk+O1xuXG4gIHB1YmxpYyBpc0RpdmlkZXIoaXRlbSkge1xuICAgIHJldHVybiBpdGVtLmRpdmlkZXIgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaXNUaXRsZShpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0udGl0bGUgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMubmF2SXRlbXNBcnJheSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5uYXZJdGVtcykpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cblxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWl0ZW0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxsaSAqbmdJZj1cIiFpc0Ryb3Bkb3duKCk7IGVsc2UgZHJvcGRvd25cIiBbbmdDbGFzc109XCJoYXNDbGFzcygpID8gJ25hdi1pdGVtICcgKyBpdGVtLmNsYXNzIDogJ25hdi1pdGVtJ1wiPlxuICAgICAgPGFwcC1zaWRlYmFyLW5hdi1saW5rIFtsaW5rXT0naXRlbSc+PC9hcHAtc2lkZWJhci1uYXYtbGluaz5cbiAgICA8L2xpPlxuICAgIDxuZy10ZW1wbGF0ZSAjZHJvcGRvd24+XG4gICAgICA8bGkgW25nQ2xhc3NdPVwiaGFzQ2xhc3MoKSA/ICduYXYtaXRlbSBuYXYtZHJvcGRvd24gJyArIGl0ZW0uY2xhc3MgOiAnbmF2LWl0ZW0gbmF2LWRyb3Bkb3duJ1wiXG4gICAgICAgICAgW2NsYXNzLm9wZW5dPVwiaXNBY3RpdmUoKVwiXG4gICAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cIm9wZW5cIlxuICAgICAgICAgIGFwcE5hdkRyb3Bkb3duPlxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWRyb3Bkb3duIFtsaW5rXT0naXRlbSc+PC9hcHAtc2lkZWJhci1uYXYtZHJvcGRvd24+XG4gICAgICA8L2xpPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGl0ZW06IGFueTtcblxuICBwdWJsaWMgaGFzQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbS5jbGFzcyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0Ryb3Bkb3duKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW0uY2hpbGRyZW4gPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdGhpc1VybCgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtLnVybDtcbiAgfVxuXG4gIHB1YmxpYyBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXIuaXNBY3RpdmUodGhpcy50aGlzVXJsKCksIGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtbGluaycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZ2V0TGlua1R5cGUoKVwiPlxuICAgICAgPGEgKm5nU3dpdGNoQ2FzZT1cIidkaXNhYmxlZCdcIlxuICAgICAgW2F0dHIuZGlzYWJsZWRdPVwidHJ1ZVwiXG4gICAgICBbYXBwTGlua0F0dHJpYnV0ZXNdPVwibGluay5hdHRyaWJ1dGVzXCJcbiAgICAgIGhyZWY9XCJcIlxuICAgICAgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NlcygpXCI+XG4gICAgICAgIDxpICpuZ0lmPVwiaXNJY29uKClcIiBjbGFzcz1cIm5hdi1pY29uIHt7IGxpbmsuaWNvbiB9fVwiPjwvaT5cbiAgICAgICAge3sgbGluay5uYW1lIH19XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiaXNCYWRnZSgpXCIgW25nQ2xhc3NdPVwiJ2JhZGdlIGJhZGdlLScgKyBsaW5rLmJhZGdlLnZhcmlhbnRcIj57eyBsaW5rLmJhZGdlLnRleHQgfX08L3NwYW4+XG4gICAgICA8L2E+XG4gICAgICA8YSAqbmdTd2l0Y2hDYXNlPVwiJ2V4dGVybmFsJ1wiIFtuZ0NsYXNzXT1cImdldENsYXNzZXMoKVwiIGhyZWY9XCJ7e2xpbmsudXJsfX1cIiBbYXBwTGlua0F0dHJpYnV0ZXNdPVwibGluay5hdHRyaWJ1dGVzXCI+XG4gICAgICAgIDxpICpuZ0lmPVwiaXNJY29uKClcIiBjbGFzcz1cIm5hdi1pY29uIHt7IGxpbmsuaWNvbiB9fVwiPjwvaT5cbiAgICAgICAge3sgbGluay5uYW1lIH19XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiaXNCYWRnZSgpXCIgW25nQ2xhc3NdPVwiJ2JhZGdlIGJhZGdlLScgKyBsaW5rLmJhZGdlLnZhcmlhbnRcIj57eyBsaW5rLmJhZGdlLnRleHQgfX08L3NwYW4+XG4gICAgICA8L2E+XG4gICAgICA8YSAqbmdTd2l0Y2hEZWZhdWx0XG4gICAgICAgIFtuZ0NsYXNzXT1cImdldENsYXNzZXMoKVwiXG4gICAgICAgIFthcHBMaW5rQXR0cmlidXRlc109XCJsaW5rLmF0dHJpYnV0ZXNcIlxuICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCJcbiAgICAgICAgW3JvdXRlckxpbmtdPVwiW2xpbmsudXJsXVwiXG4gICAgICAgIChjbGljayk9XCJoaWRlTW9iaWxlKClcIj5cbiAgICAgICAgPGkgKm5nSWY9XCJpc0ljb24oKVwiIGNsYXNzPVwibmF2LWljb24ge3sgbGluay5pY29uIH19XCI+PC9pPlxuICAgICAgICB7eyBsaW5rLm5hbWUgfX1cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJpc0JhZGdlKClcIiBbbmdDbGFzc109XCInYmFkZ2UgYmFkZ2UtJyArIGxpbmsuYmFkZ2UudmFyaWFudFwiPnt7IGxpbmsuYmFkZ2UudGV4dCB9fTwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxpbms6IGFueTtcblxuICBwdWJsaWMgZ2V0Q2xhc3NlcygpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICAnbmF2LWxpbmsnOiB0cnVlLFxuICAgICAgJ2Rpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgICAnYnRuLWxpbmsnOiBkaXNhYmxlZFxuICAgIH07XG4gICAgaWYgKHRoaXMuaGFzVmFyaWFudCgpKSB7XG4gICAgICBjb25zdCB2YXJpYW50ID0gYG5hdi1saW5rLSR7dGhpcy5saW5rLnZhcmlhbnR9YDtcbiAgICAgIGNsYXNzZXNbdmFyaWFudF0gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRMaW5rVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkKCkgPyAnZGlzYWJsZWQnIDogdGhpcy5pc0V4dGVybmFsTGluaygpID8gJ2V4dGVybmFsJyA6ICcnO1xuICB9XG5cbiAgcHVibGljIGhhc1ZhcmlhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluay52YXJpYW50ID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzQmFkZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluay5iYWRnZSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmsuYXR0cmlidXRlcyAmJiB0aGlzLmxpbmsuYXR0cmlidXRlcy5kaXNhYmxlZCA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0V4dGVybmFsTGluaygpIHtcbiAgICByZXR1cm4gdGhpcy5saW5rLnVybC5zdWJzdHJpbmcoMCwgNCkgPT09ICdodHRwJyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0ljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGluay5pY29uID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGhpZGVNb2JpbGUoKSB7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLXNob3cnKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdzaWRlYmFyLXNob3cnKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZiApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YSBjbGFzcz1cIm5hdi1saW5rIG5hdi1kcm9wZG93bi10b2dnbGVcIiBhcHBOYXZEcm9wZG93blRvZ2dsZT5cbiAgICAgIDxpICpuZ0lmPVwiaXNJY29uKClcIiBjbGFzcz1cIm5hdi1pY29uIHt7IGxpbmsuaWNvbiB9fVwiPjwvaT5cbiAgICAgIHt7IGxpbmsubmFtZSB9fVxuICAgICAgPHNwYW4gKm5nSWY9XCJpc0JhZGdlKClcIiBbbmdDbGFzc109XCInYmFkZ2UgYmFkZ2UtJyArIGxpbmsuYmFkZ2UudmFyaWFudFwiPnt7IGxpbmsuYmFkZ2UudGV4dCB9fTwvc3Bhbj5cbiAgICA8L2E+XG4gICAgPHVsIGNsYXNzPVwibmF2LWRyb3Bkb3duLWl0ZW1zXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LWNoaWxkIFtuZ0Zvck9mXT1cImxpbmsuY2hpbGRyZW5cIj5cbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1pdGVtIFtpdGVtXT0nY2hpbGQnPjwvYXBwLXNpZGViYXItbmF2LWl0ZW0+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvdWw+XG4gIGAsXG4gIHN0eWxlczogWycubmF2LWRyb3Bkb3duLXRvZ2dsZSB7IGN1cnNvcjogcG9pbnRlcjsgfSddXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxpbms6IGFueTtcblxuICBwdWJsaWMgaXNCYWRnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5rLmJhZGdlID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzSWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5saW5rLmljb24gPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZiApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LXRpdGxlJyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBsaSA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KHRoaXMudGl0bGUubmFtZSk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGxpLCAnbmF2LXRpdGxlJyk7XG5cbiAgICBpZiAoIHRoaXMudGl0bGUuY2xhc3MgKSB7XG4gICAgICBjb25zdCBjbGFzc2VzID0gdGhpcy50aXRsZS5jbGFzcztcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MobGksIGNsYXNzZXMpO1xuICAgIH1cblxuICAgIGlmICggdGhpcy50aXRsZS53cmFwcGVyICkge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCh0aGlzLnRpdGxlLndyYXBwZXIuZWxlbWVudCk7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQod3JhcHBlciwgbmFtZSk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGxpLCB3cmFwcGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChsaSwgbmFtZSk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQobmF0aXZlRWxlbWVudCwgbGkpO1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gIH1cbn1cbiJdfQ==