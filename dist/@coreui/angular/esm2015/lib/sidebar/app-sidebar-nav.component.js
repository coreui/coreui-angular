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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEgsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUtwQyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRS9CLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUksQ0FBQzs7OztJQUV2QyxNQUFNO1FBQ0osSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUFURixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7OztZQUw4QixVQUFVOzs7Ozs7O0lBUTNCLGtDQUFzQjs7Ozs7QUFhcEMsTUFBTSxPQUFPLDBCQUEwQjs7OztJQUNyQyxZQUFvQixRQUE4QjtRQUE5QixhQUFRLEdBQVIsUUFBUSxDQUFzQjtJQUFHLENBQUM7Ozs7O0lBR3RELFVBQVUsQ0FBQyxNQUFXO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2FBQ25DOzs7O1lBRStCLG9CQUFvQjs7O3lCQUVqRCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0lBRnJCLDhDQUFzQzs7QUFZcEQsTUFBTSxPQUFPLHVC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LFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDckM7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0MsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuQixDQUFDOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRSxFQUFFO2FBQ2I7Ozs7WUE3UThCLFVBQVU7WUFBNEMsU0FBUzs7O29CQStRM0YsS0FBSzs7OztJQUFOLDRDQUFvQjs7Ozs7SUFFUix5Q0FBc0I7Ozs7O0lBQUUsK0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGFjZSB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBOYXZEcm9wZG93bl0nXG59KVxuZXhwb3J0IGNsYXNzIE5hdkRyb3Bkb3duRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgfVxufVxuXG4vKipcbiogQWxsb3dzIHRoZSBkcm9wZG93biB0byBiZSB0b2dnbGVkIHZpYSBjbGljay5cbiovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwTmF2RHJvcGRvd25Ub2dnbGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBOYXZEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZHJvcGRvd246IE5hdkRyb3Bkb3duRGlyZWN0aXZlKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZHJvcGRvd24udG9nZ2xlKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcExpbmtBdHRyaWJ1dGVzXSdcbn0pXG5leHBvcnQgY2xhc3MgTGlua0F0dHJpYnV0ZXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBhcHBMaW5rQXR0cmlidXRlczoge1trZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgYXR0cmlicyA9IHRoaXMuYXBwTGlua0F0dHJpYnV0ZXM7XG4gICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJpYnMpIHtcbiAgICAgIGlmIChhdHRyID09PSAnc3R5bGUnICYmIHR5cGVvZihhdHRyaWJzW2F0dHJdKSA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgIHRoaXMuc2V0U3R5bGUoYXR0cmlic1thdHRyXSk7XG4gICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdjbGFzcycpIHtcbiAgICAgICAgdGhpcy5hZGRDbGFzcyhhdHRyaWJzW2F0dHJdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmliKGF0dHIsIGF0dHJpYnNbYXR0cl0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0U3R5bGUoc3R5bGVzKSB7XG4gICAgZm9yIChjb25zdCBzdHlsZSBpbiBzdHlsZXMpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBzdHlsZSwgc3R5bGVzW3N0eWxlXSApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkQ2xhc3MoY2xhc3Nlcykge1xuICAgIGNvbnN0IGNsYXNzQXJyYXkgPSBBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICBjbGFzc0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgZWxlbWVudCApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBdHRyaWIoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld0F0dHIgPSBkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoa2V5KTtcbiAgICBuZXdBdHRyLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBrZXksIHZhbHVlICk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dWwgY2xhc3M9XCJuYXZcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtbmF2aXRlbSBbbmdGb3JPZl09XCJuYXZJdGVtc1wiPlxuICAgICAgICA8bGkgKm5nSWY9XCJpc0RpdmlkZXIobmF2aXRlbSlcIiBjbGFzcz1cIm5hdi1kaXZpZGVyXCI+PC9saT5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImlzVGl0bGUobmF2aXRlbSlcIj5cbiAgICAgICAgICA8YXBwLXNpZGViYXItbmF2LXRpdGxlIFt0aXRsZV09J25hdml0ZW0nPjwvYXBwLXNpZGViYXItbmF2LXRpdGxlPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiIWlzRGl2aWRlcihuYXZpdGVtKSYmIWlzVGl0bGUobmF2aXRlbSlcIj5cbiAgICAgICAgICA8YXBwLXNpZGViYXItbmF2LWl0ZW0gW2l0ZW1dPSduYXZpdGVtJz48L2FwcC1zaWRlYmFyLW5hdi1pdGVtPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L3VsPmBcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG5hdkl0ZW1zOiBhbnk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaWRlYmFyLW5hdicpIHRydWU7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZSA9ICduYXYnO1xuXG4gIHB1YmxpYyBpc0RpdmlkZXIoaXRlbSkge1xuICAgIHJldHVybiBpdGVtLmRpdmlkZXIgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaXNUaXRsZShpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0udGl0bGUgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtaXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGxpICpuZ0lmPVwiIWlzRHJvcGRvd24oKTsgZWxzZSBkcm9wZG93blwiIFtuZ0NsYXNzXT1cImhhc0NsYXNzKCkgPyAnbmF2LWl0ZW0gJyArIGl0ZW0uY2xhc3MgOiAnbmF2LWl0ZW0nXCI+XG4gICAgICA8YXBwLXNpZGViYXItbmF2LWxpbmsgW2xpbmtdPSdpdGVtJz48L2FwcC1zaWRlYmFyLW5hdi1saW5rPlxuICAgIDwvbGk+XG4gICAgPG5nLXRlbXBsYXRlICNkcm9wZG93bj5cbiAgICAgIDxsaSBbbmdDbGFzc109XCJoYXNDbGFzcygpID8gJ25hdi1pdGVtIG5hdi1kcm9wZG93biAnICsgaXRlbS5jbGFzcyA6ICduYXYtaXRlbSBuYXYtZHJvcGRvd24nXCJcbiAgICAgICAgICBbY2xhc3Mub3Blbl09XCJpc0FjdGl2ZSgpXCJcbiAgICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwib3BlblwiXG4gICAgICAgICAgYXBwTmF2RHJvcGRvd24+XG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtZHJvcGRvd24gW2xpbmtdPSdpdGVtJz48L2FwcC1zaWRlYmFyLW5hdi1kcm9wZG93bj5cbiAgICAgIDwvbGk+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXRlbTogYW55O1xuXG4gIHB1YmxpYyBoYXNDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtLmNsYXNzID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzRHJvcGRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbS5jaGlsZHJlbiA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyB0aGlzVXJsKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW0udXJsO1xuICB9XG5cbiAgcHVibGljIGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5pc0FjdGl2ZSh0aGlzLnRoaXNVcmwoKSwgZmFsc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1saW5rJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJnZXRMaW5rVHlwZSgpXCI+XG4gICAgICA8YSAqbmdTd2l0Y2hDYXNlPVwiJ2Rpc2FibGVkJ1wiXG4gICAgICBbYXR0ci5kaXNhYmxlZF09XCJ0cnVlXCJcbiAgICAgIFthcHBMaW5rQXR0cmlidXRlc109XCJsaW5rLmF0dHJpYnV0ZXNcIlxuICAgICAgaHJlZj1cIlwiXG4gICAgICBbbmdDbGFzc109XCJnZXRDbGFzc2VzKClcIj5cbiAgICAgICAgPGkgKm5nSWY9XCJpc0ljb24oKVwiIGNsYXNzPVwibmF2LWljb24ge3sgbGluay5pY29uIH19XCI+PC9pPlxuICAgICAgICB7eyBsaW5rLm5hbWUgfX1cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJpc0JhZGdlKClcIiBbbmdDbGFzc109XCInYmFkZ2UgYmFkZ2UtJyArIGxpbmsuYmFkZ2UudmFyaWFudFwiPnt7IGxpbmsuYmFkZ2UudGV4dCB9fTwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICAgIDxhICpuZ1N3aXRjaENhc2U9XCInZXh0ZXJuYWwnXCIgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NlcygpXCIgaHJlZj1cInt7bGluay51cmx9fVwiIFthcHBMaW5rQXR0cmlidXRlc109XCJsaW5rLmF0dHJpYnV0ZXNcIj5cbiAgICAgICAgPGkgKm5nSWY9XCJpc0ljb24oKVwiIGNsYXNzPVwibmF2LWljb24ge3sgbGluay5pY29uIH19XCI+PC9pPlxuICAgICAgICB7eyBsaW5rLm5hbWUgfX1cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJpc0JhZGdlKClcIiBbbmdDbGFzc109XCInYmFkZ2UgYmFkZ2UtJyArIGxpbmsuYmFkZ2UudmFyaWFudFwiPnt7IGxpbmsuYmFkZ2UudGV4dCB9fTwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICAgIDxhICpuZ1N3aXRjaERlZmF1bHRcbiAgICAgICAgW25nQ2xhc3NdPVwiZ2V0Q2xhc3NlcygpXCJcbiAgICAgICAgW2FwcExpbmtBdHRyaWJ1dGVzXT1cImxpbmsuYXR0cmlidXRlc1wiXG4gICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIlxuICAgICAgICBbcm91dGVyTGlua109XCJbbGluay51cmxdXCJcbiAgICAgICAgKGNsaWNrKT1cImhpZGVNb2JpbGUoKVwiPlxuICAgICAgICA8aSAqbmdJZj1cImlzSWNvbigpXCIgY2xhc3M9XCJuYXYtaWNvbiB7eyBsaW5rLmljb24gfX1cIj48L2k+XG4gICAgICAgIHt7IGxpbmsubmFtZSB9fVxuICAgICAgICA8c3BhbiAqbmdJZj1cImlzQmFkZ2UoKVwiIFtuZ0NsYXNzXT1cIidiYWRnZSBiYWRnZS0nICsgbGluay5iYWRnZS52YXJpYW50XCI+e3sgbGluay5iYWRnZS50ZXh0IH19PC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZMaW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGluazogYW55O1xuXG4gIHB1YmxpYyBnZXRDbGFzc2VzKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICduYXYtbGluayc6IHRydWUsXG4gICAgICAnZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICdidG4tbGluayc6IGRpc2FibGVkXG4gICAgfTtcbiAgICBpZiAodGhpcy5oYXNWYXJpYW50KCkpIHtcbiAgICAgIGNvbnN0IHZhcmlhbnQgPSBgbmF2LWxpbmstJHt0aGlzLmxpbmsudmFyaWFudH1gO1xuICAgICAgY2xhc3Nlc1t2YXJpYW50XSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgcHVibGljIGdldExpbmtUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmlzRGlzYWJsZWQoKSA/ICdkaXNhYmxlZCcgOiB0aGlzLmlzRXh0ZXJuYWxMaW5rKCkgPyAnZXh0ZXJuYWwnIDogJyc7XG4gIH1cblxuICBwdWJsaWMgaGFzVmFyaWFudCgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5rLnZhcmlhbnQgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaXNCYWRnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5rLmJhZGdlID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluay5hdHRyaWJ1dGVzICYmIHRoaXMubGluay5hdHRyaWJ1dGVzLmRpc2FibGVkID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzRXh0ZXJuYWxMaW5rKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmsudXJsLnN1YnN0cmluZygwLCA0KSA9PT0gJ2h0dHAnID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzSWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5saW5rLmljb24gPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaGlkZU1vYmlsZSgpIHtcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItc2hvdycpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3NpZGViYXItc2hvdycpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtZHJvcGRvd24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgbmF2LWRyb3Bkb3duLXRvZ2dsZVwiIGFwcE5hdkRyb3Bkb3duVG9nZ2xlPlxuICAgICAgPGkgKm5nSWY9XCJpc0ljb24oKVwiIGNsYXNzPVwibmF2LWljb24ge3sgbGluay5pY29uIH19XCI+PC9pPlxuICAgICAge3sgbGluay5uYW1lIH19XG4gICAgICA8c3BhbiAqbmdJZj1cImlzQmFkZ2UoKVwiIFtuZ0NsYXNzXT1cIidiYWRnZSBiYWRnZS0nICsgbGluay5iYWRnZS52YXJpYW50XCI+e3sgbGluay5iYWRnZS50ZXh0IH19PC9zcGFuPlxuICAgIDwvYT5cbiAgICA8dWwgY2xhc3M9XCJuYXYtZHJvcGRvd24taXRlbXNcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtY2hpbGQgW25nRm9yT2ZdPVwibGluay5jaGlsZHJlblwiPlxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWl0ZW0gW2l0ZW1dPSdjaGlsZCc+PC9hcHAtc2lkZWJhci1uYXYtaXRlbT5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC91bD5cbiAgYCxcbiAgc3R5bGVzOiBbJy5uYXYtZHJvcGRvd24tdG9nZ2xlIHsgY3Vyc29yOiBwb2ludGVyOyB9J11cbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGluazogYW55O1xuXG4gIHB1YmxpYyBpc0JhZGdlKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmsuYmFkZ2UgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgaXNJY29uKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmsuaWNvbiA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtdGl0bGUnLFxuICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGl0bGU6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGxpID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQodGhpcy50aXRsZS5uYW1lKTtcblxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MobGksICduYXYtdGl0bGUnKTtcblxuICAgIGlmICggdGhpcy50aXRsZS5jbGFzcyApIHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLnRpdGxlLmNsYXNzO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhsaSwgY2xhc3Nlcyk7XG4gICAgfVxuXG4gICAgaWYgKCB0aGlzLnRpdGxlLndyYXBwZXIgKSB7XG4gICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KHRoaXMudGl0bGUud3JhcHBlci5lbGVtZW50KTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh3cmFwcGVyLCBuYW1lKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQobGksIHdyYXBwZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGxpLCBuYW1lKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChuYXRpdmVFbGVtZW50LCBsaSk7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgfVxufVxuIl19