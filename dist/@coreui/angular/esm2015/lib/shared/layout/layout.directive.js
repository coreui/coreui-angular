/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { asideMenuCssClasses, sidebarCssClasses } from '../classes';
import { ClassToggler } from '../toggle-classes';
/**
 * Allows the sidebar to be toggled via click.
 */
export class SidebarToggleDirective {
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
export class SidebarMinimizeDirective {
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
export class MobileSidebarToggleDirective {
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
        body.classList.contains('sidebar-show') ?
            this.renderer.removeClass(body, 'sidebar-show') :
            this.renderer.addClass(body, 'sidebar-show');
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
export class SidebarOffCanvasCloseDirective {
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
        if (body.classList.contains('sidebar-off-canvas')) {
            body.classList.contains('sidebar-show') ?
                this.renderer.removeClass(body, 'sidebar-show') :
                this.renderer.addClass(body, 'sidebar-show');
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
export class BrandMinimizeDirective {
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
export class AsideToggleDirective {
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
export class HtmlAttributesDirective {
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
    { type: Renderer2 },
    { type: ElementRef }
];
HtmlAttributesDirective.propDecorators = {
    appHtmlAttr: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvbGF5b3V0L2xheW91dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQVNqRCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBR2pDLFlBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUcsQ0FBQzs7OztJQUNsRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDOztjQUNsQixRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQzthQUMxQjs7OztZQVJRLFlBQVk7Ozt5QkFVbEIsS0FBSyxTQUFDLG1CQUFtQjt5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SUFFTyxRQUFRLENBQUMsTUFBTTtRQUNyQixLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUM7U0FDdEU7SUFDSCxDQUFDOzs7Ozs7SUFFTyxRQUFRLENBQUMsT0FBTzs7Y0FDaEIsVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFFLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDLENBQUMsT0FBTzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25FLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBRSxDQUFDO1FBQzFELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVPLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFFLENBQUM7SUFDakUsQ0FBQzs7O1lBdkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTthQUMxQjs7OztZQXZJbUUsU0FBUztZQUExRCxVQUFVOzs7MEJBeUkxQixLQUFLOzs7O0lBQU4sOENBQStDOzs7OztJQUc3QywyQ0FBMkI7Ozs7O0lBQzNCLHFDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIEluamVjdCwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IGFzaWRlTWVudUNzc0NsYXNzZXMsIHNpZGViYXJDc3NDbGFzc2VzIH0gZnJvbSAnLi4vY2xhc3Nlcyc7XHJcbmltcG9ydCB7IENsYXNzVG9nZ2xlciB9IGZyb20gJy4uL3RvZ2dsZS1jbGFzc2VzJztcclxuXHJcbi8qKlxyXG4qIEFsbG93cyB0aGUgc2lkZWJhciB0byBiZSB0b2dnbGVkIHZpYSBjbGljay5cclxuKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwU2lkZWJhclRvZ2dsZXJdJyxcclxuICBwcm92aWRlcnM6IFtDbGFzc1RvZ2dsZXJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoJ2FwcFNpZGViYXJUb2dnbGVyJykgYnJlYWtwb2ludDogc3RyaW5nO1xyXG4gIHB1YmxpYyBicDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsYXNzVG9nZ2xlcjogQ2xhc3NUb2dnbGVyKSB7fVxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5icCA9IHRoaXMuYnJlYWtwb2ludDtcclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgY3NzQ2xhc3MgPSB0aGlzLmJwID8gYHNpZGViYXItJHt0aGlzLmJwfS1zaG93YCA6IHNpZGViYXJDc3NDbGFzc2VzWzBdO1xyXG4gICAgdGhpcy5jbGFzc1RvZ2dsZXIudG9nZ2xlQ2xhc3Nlcyhjc3NDbGFzcywgc2lkZWJhckNzc0NsYXNzZXMpO1xyXG4gIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwU2lkZWJhck1pbmltaXplcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTWluaW1pemVEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICkgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmRvY3VtZW50LmJvZHk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1taW5pbWl6ZWQnKSA/XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoYm9keSwgJ3NpZGViYXItbWluaW1pemVkJykgOlxyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGJvZHksICdzaWRlYmFyLW1pbmltaXplZCcpO1xyXG4gIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwTW9iaWxlU2lkZWJhclRvZ2dsZXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9iaWxlU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgKSB7IH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZG9jdW1lbnQuYm9keTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLXNob3cnKSA/XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoYm9keSwgJ3NpZGViYXItc2hvdycpIDpcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhib2R5LCAnc2lkZWJhci1zaG93Jyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuKiBBbGxvd3MgdGhlIG9mZi1jYW52YXMgc2lkZWJhciB0byBiZSBjbG9zZWQgdmlhIGNsaWNrLlxyXG4qL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thcHBTaWRlYmFyQ2xvc2VdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZWJhck9mZkNhbnZhc0Nsb3NlRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICApIHsgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZG9jdW1lbnQuYm9keTtcclxuICAgIGlmIChib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1vZmYtY2FudmFzJykpIHtcclxuICAgICAgYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItc2hvdycpID9cclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGJvZHksICdzaWRlYmFyLXNob3cnKSA6XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhib2R5LCAnc2lkZWJhci1zaG93Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thcHBCcmFuZE1pbmltaXplcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcmFuZE1pbmltaXplRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICApIHsgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBib2R5ID0gdGhpcy5kb2N1bWVudC5ib2R5O1xyXG4gICAgYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2JyYW5kLW1pbmltaXplZCcpID9cclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhib2R5LCAnYnJhbmQtbWluaW1pemVkJykgOlxyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGJvZHksICdicmFuZC1taW5pbWl6ZWQnKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuKiBBbGxvd3MgdGhlIGFzaWRlIHRvIGJlIHRvZ2dsZWQgdmlhIGNsaWNrLlxyXG4qL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thcHBBc2lkZU1lbnVUb2dnbGVyXScsXHJcbiAgcHJvdmlkZXJzOiBbQ2xhc3NUb2dnbGVyXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXNpZGVUb2dnbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgnYXBwQXNpZGVNZW51VG9nZ2xlcicpIGJyZWFrcG9pbnQ6IHN0cmluZztcclxuICBwdWJsaWMgYnA7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjbGFzc1RvZ2dsZXI6IENsYXNzVG9nZ2xlcikge31cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYnAgPSB0aGlzLmJyZWFrcG9pbnQ7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGNzc0NsYXNzID0gdGhpcy5icCA/IGBhc2lkZS1tZW51LSR7dGhpcy5icH0tc2hvd2AgOiBhc2lkZU1lbnVDc3NDbGFzc2VzWzBdO1xyXG4gICAgdGhpcy5jbGFzc1RvZ2dsZXIudG9nZ2xlQ2xhc3Nlcyhjc3NDbGFzcywgYXNpZGVNZW51Q3NzQ2xhc3Nlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thcHBIdG1sQXR0cl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIdG1sQXR0cmlidXRlc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgYXBwSHRtbEF0dHI6IHtba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnN0IGF0dHJpYnMgPSB0aGlzLmFwcEh0bWxBdHRyO1xyXG4gICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJpYnMpIHtcclxuICAgICAgaWYgKGF0dHIgPT09ICdzdHlsZScgJiYgdHlwZW9mKGF0dHJpYnNbYXR0cl0pID09PSAnb2JqZWN0JyApIHtcclxuICAgICAgICB0aGlzLnNldFN0eWxlKGF0dHJpYnNbYXR0cl0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdjbGFzcycpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzKGF0dHJpYnNbYXR0cl0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0QXR0cmliKGF0dHIsIGF0dHJpYnNbYXR0cl0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFN0eWxlKHN0eWxlcykge1xyXG4gICAgZm9yIChjb25zdCBzdHlsZSBpbiBzdHlsZXMpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHN0eWxlLCBzdHlsZXNbc3R5bGVdICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZENsYXNzKGNsYXNzZXMpIHtcclxuICAgIGNvbnN0IGNsYXNzQXJyYXkgPSAoQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJykpO1xyXG4gICAgY2xhc3NBcnJheS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQubGVuZ3RoID4gMCkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGVsZW1lbnQgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRBdHRyaWIoa2V5LCB2YWx1ZSkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBrZXksIHZhbHVlICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==