/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { asideMenuCssClasses, sidebarCssClasses } from '../classes';
import { ClassToggler, ToggleClasses } from '../toggle-classes';
/**
 * Allows the sidebar to be toggled via click.
 */
export class SidebarToggleDirective {
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
if (false) {
    /** @type {?} */
    SidebarToggleDirective.prototype.breakpoint;
    /** @type {?} */
    SidebarToggleDirective.prototype.bp;
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
if (false) {
    /** @type {?} */
    HtmlAttributesDirective.prototype.appHtmlAttr;
    /**
     * @type {?}
     * @private
     */
    HtmlAttributesDirective.prototype.document;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvbGF5b3V0L2xheW91dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFRaEUsTUFBTSxPQUFPLHNCQUFzQjtJQUdqQyxnQkFBZSxDQUFDOzs7O0lBQ2hCLFFBQVE7UUFDTixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsTUFBVztRQUNwQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7O1lBQ3BCLFFBQVE7UUFDWixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsV0FBVyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRixhQUFhLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDN0MsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2FBQ2hDOzs7Ozt5QkFFRSxLQUFLLFNBQUMsbUJBQW1CO3lCQU16QixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBTmpDLDRDQUErQzs7SUFDL0Msb0NBQVU7O0FBaUJaLE1BQU0sT0FBTyx3QkFBd0I7Ozs7O0lBQ25DLFlBQzRCLFFBQWEsRUFDL0IsUUFBbUI7UUFERCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDekIsQ0FBQzs7Ozs7SUFHTCxVQUFVLENBQUMsTUFBVztRQUNwQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7O2NBQ2xCLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDcEQsdURBQXVEO0lBQ3pELENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjthQUNsQzs7Ozs0Q0FHSSxNQUFNLFNBQUMsUUFBUTtZQWpDZ0QsU0FBUzs7O3lCQXFDMUUsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQUovQiw0Q0FBdUM7Ozs7O0lBQ3ZDLDRDQUEyQjs7QUFpQi9CLE1BQU0sT0FBTyw0QkFBNEI7Ozs7O0lBQ3ZDLFlBQzRCLFFBQWEsRUFDL0IsUUFBbUI7UUFERCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDekIsQ0FBQzs7Ozs7Ozs7SUFHRyxRQUFRLENBQUMsTUFBVyxFQUFFLGdCQUF3QjtRQUNwRCxPQUFPLElBQUksTUFBTSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Ozs7O0lBR0QsVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDOztjQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQy9DLGtEQUFrRDtJQUNwRCxDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7Ozs7NENBR0ksTUFBTSxTQUFDLFFBQVE7WUFyRGdELFNBQVM7Ozt5QkE4RDFFLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUFUL0IsZ0RBQXVDOzs7OztJQUN2QyxnREFBMkI7Ozs7O0FBeUIvQixNQUFNLE9BQU8sOEJBQThCOzs7OztJQUN6QyxZQUM0QixRQUFhLEVBQy9CLFFBQW1CO1FBREQsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQ3pCLENBQUM7Ozs7Ozs7O0lBR0csUUFBUSxDQUFDLE1BQVcsRUFBRSxnQkFBd0I7UUFDcEQsT0FBTyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRixDQUFDOzs7Ozs7OztJQUdPLFdBQVcsQ0FBQyxJQUFTLEVBQUUsZ0JBQXdCOztZQUNqRCxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFFLFdBQVcsRUFBRSxHQUFHLENBQUUsR0FBRyxHQUFHO1FBQ3JFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsRUFBRTtZQUN6QyxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRztnQkFDM0QsUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUUsR0FBRyxHQUFHLGdCQUFnQixHQUFHLEdBQUcsRUFBRyxHQUFHLENBQUUsQ0FBQzthQUNuRTtZQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLElBQUksR0FBRyxHQUFHLGdCQUFnQixDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7Ozs7SUFHRCxVQUFVLENBQUMsTUFBVztRQUNwQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7O2NBRWxCLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7UUFDL0IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDL0MscURBQXFEO1NBQ3REO0lBQ0gsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2FBQzlCOzs7OzRDQUdJLE1BQU0sU0FBQyxRQUFRO1lBakZnRCxTQUFTOzs7eUJBdUcxRSxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0lBdEIvQixrREFBdUM7Ozs7O0lBQ3ZDLGtEQUEyQjs7QUFzQy9CLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBQ2pDLFlBQzRCLFFBQWEsRUFDL0IsUUFBbUI7UUFERCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDekIsQ0FBQzs7Ozs7SUFHTCxVQUFVLENBQUMsTUFBVztRQUNwQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7O2NBQ2xCLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDbEQscURBQXFEO0lBQ3ZELENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjthQUNoQzs7Ozs0Q0FHSSxNQUFNLFNBQUMsUUFBUTtZQTFIZ0QsU0FBUzs7O3lCQThIMUUsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQUovQiwwQ0FBdUM7Ozs7O0lBQ3ZDLDBDQUEyQjs7Ozs7QUFzQi9CLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFHL0IsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDOzs7O0lBQ2xELFFBQVE7UUFDTixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsTUFBVztRQUNwQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7O2NBQ2xCLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQzFCOzs7O1lBNUlRLFlBQVk7Ozt5QkE4SWxCLEtBQUssU0FBQyxxQkFBcUI7eUJBTTNCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFOakMsMENBQWlEOztJQUNqRCxrQ0FBVTs7Ozs7SUFDRSw0Q0FBa0M7O0FBZWhELE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQUdsQyxZQUM0QixRQUFhLEVBQy9CLFFBQW1CLEVBQ25CLEVBQWM7UUFGSSxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUNyQixDQUFDOzs7O0lBRUosUUFBUTs7Y0FDQSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVc7UUFDaEMsS0FBSyxNQUFNLElBQUksSUFBSSxPQUFPLEVBQUU7WUFDMUIsSUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLE9BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUc7Z0JBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDOUI7aUJBQU0sSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO2dCQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQzlCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFTyxRQUFRLENBQUMsTUFBTTtRQUNyQixLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUM7U0FDdEU7SUFDSCxDQUFDOzs7Ozs7SUFFTyxRQUFRLENBQUMsT0FBTzs7Y0FDaEIsVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFFLFVBQVUsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDLENBQUMsT0FBTzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25FLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBRSxDQUFDO1FBQzFELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVPLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFFLENBQUM7SUFDakUsQ0FBQzs7O1lBeENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTthQUMxQjs7Ozs0Q0FLSSxNQUFNLFNBQUMsUUFBUTtZQXZLZ0QsU0FBUztZQUExRCxVQUFVOzs7MEJBb0sxQixLQUFLOzs7O0lBQU4sOENBQStDOzs7OztJQUc3QywyQ0FBdUM7Ozs7O0lBQ3ZDLDJDQUEyQjs7Ozs7SUFDM0IscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgYXNpZGVNZW51Q3NzQ2xhc3Nlcywgc2lkZWJhckNzc0NsYXNzZXMgfSBmcm9tICcuLi9jbGFzc2VzJztcbmltcG9ydCB7IENsYXNzVG9nZ2xlciwgVG9nZ2xlQ2xhc3NlcyB9IGZyb20gJy4uL3RvZ2dsZS1jbGFzc2VzJztcblxuLyoqXG4qIEFsbG93cyB0aGUgc2lkZWJhciB0byBiZSB0b2dnbGVkIHZpYSBjbGljay5cbiovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwU2lkZWJhclRvZ2dsZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdhcHBTaWRlYmFyVG9nZ2xlcicpIGJyZWFrcG9pbnQ6IHN0cmluZztcbiAgcHVibGljIGJwO1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYnAgPSB0aGlzLmJyZWFrcG9pbnQ7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGNzc0NsYXNzO1xuICAgIHRoaXMuYnAgPyBjc3NDbGFzcyA9IGBzaWRlYmFyLSR7dGhpcy5icH0tc2hvd2AgOiBjc3NDbGFzcyA9IHNpZGViYXJDc3NDbGFzc2VzWzBdO1xuICAgIFRvZ2dsZUNsYXNzZXMoY3NzQ2xhc3MsIHNpZGViYXJDc3NDbGFzc2VzKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwU2lkZWJhck1pbmltaXplcl0nXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJNaW5pbWl6ZURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuZG9jdW1lbnQuYm9keTtcbiAgICBib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1taW5pbWl6ZWQnKSA/XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGJvZHksICdzaWRlYmFyLW1pbmltaXplZCcpIDpcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYm9keSwgJ3NpZGViYXItbWluaW1pemVkJyk7XG4gICAgLy8gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdzaWRlYmFyLW1pbmltaXplZCcpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBNb2JpbGVTaWRlYmFyVG9nZ2xlcl0nXG59KVxuZXhwb3J0IGNsYXNzIE1vYmlsZVNpZGViYXJUb2dnbGVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHsgfVxuXG4gIC8vIENoZWNrIGlmIGVsZW1lbnQgaGFzIGNsYXNzXG4gIHByaXZhdGUgaGFzQ2xhc3ModGFyZ2V0OiBhbnksIGVsZW1lbnRDbGFzc05hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKCcoXFxcXHN8XiknICsgZWxlbWVudENsYXNzTmFtZSArICcoXFxcXHN8JCknKS50ZXN0KHRhcmdldC5jbGFzc05hbWUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuZG9jdW1lbnQuYm9keTtcbiAgICBib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1zaG93JykgP1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhib2R5LCAnc2lkZWJhci1zaG93JykgOlxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhib2R5LCAnc2lkZWJhci1zaG93Jyk7XG4gICAgLy8gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdzaWRlYmFyLXNob3cnKTtcbiAgfVxufVxuXG4vKipcbiogQWxsb3dzIHRoZSBvZmYtY2FudmFzIHNpZGViYXIgdG8gYmUgY2xvc2VkIHZpYSBjbGljay5cbiovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwU2lkZWJhckNsb3NlXSdcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck9mZkNhbnZhc0Nsb3NlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7IH1cblxuICAvLyBDaGVjayBpZiBlbGVtZW50IGhhcyBjbGFzc1xuICBwcml2YXRlIGhhc0NsYXNzKHRhcmdldDogYW55LCBlbGVtZW50Q2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKFxcXFxzfF4pJyArIGVsZW1lbnRDbGFzc05hbWUgKyAnKFxcXFxzfCQpJykudGVzdCh0YXJnZXQuY2xhc3NOYW1lKTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBlbGVtZW50IGNsYXNzXG4gIHByaXZhdGUgdG9nZ2xlQ2xhc3MoZWxlbTogYW55LCBlbGVtZW50Q2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgbmV3Q2xhc3MgPSAnICcgKyBlbGVtLmNsYXNzTmFtZS5yZXBsYWNlKCAvW1xcdFxcclxcbl0vZywgJyAnICkgKyAnICc7XG4gICAgaWYgKHRoaXMuaGFzQ2xhc3MoZWxlbSwgZWxlbWVudENsYXNzTmFtZSkpIHtcbiAgICAgIHdoaWxlIChuZXdDbGFzcy5pbmRleE9mKCcgJyArIGVsZW1lbnRDbGFzc05hbWUgKyAnICcpID49IDAgKSB7XG4gICAgICAgIG5ld0NsYXNzID0gbmV3Q2xhc3MucmVwbGFjZSggJyAnICsgZWxlbWVudENsYXNzTmFtZSArICcgJyAsICcgJyApO1xuICAgICAgfVxuICAgICAgZWxlbS5jbGFzc05hbWUgPSBuZXdDbGFzcy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uY2xhc3NOYW1lICs9ICcgJyArIGVsZW1lbnRDbGFzc05hbWU7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBib2R5ID0gdGhpcy5kb2N1bWVudC5ib2R5O1xuICAgIGlmICh0aGlzLmhhc0NsYXNzKGJvZHksICdzaWRlYmFyLW9mZi1jYW52YXMnKSkge1xuICAgICAgYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItc2hvdycpID9cbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhib2R5LCAnc2lkZWJhci1zaG93JykgOlxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGJvZHksICdzaWRlYmFyLXNob3cnKTtcbiAgICAgIC8vIHRoaXMudG9nZ2xlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItb3BlbmVkJyk7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBCcmFuZE1pbmltaXplcl0nXG59KVxuZXhwb3J0IGNsYXNzIEJyYW5kTWluaW1pemVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICApIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmRvY3VtZW50LmJvZHk7XG4gICAgYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2JyYW5kLW1pbmltaXplZCcpID9cbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoYm9keSwgJ2JyYW5kLW1pbmltaXplZCcpIDpcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYm9keSwgJ2JyYW5kLW1pbmltaXplZCcpO1xuICAgIC8vIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnYnJhbmQtbWluaW1pemVkJyk7XG4gIH1cbn1cblxuXG4vKipcbiogQWxsb3dzIHRoZSBhc2lkZSB0byBiZSB0b2dnbGVkIHZpYSBjbGljay5cbiovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwQXNpZGVNZW51VG9nZ2xlcl0nLFxuICBwcm92aWRlcnM6IFtDbGFzc1RvZ2dsZXJdXG59KVxuZXhwb3J0IGNsYXNzIEFzaWRlVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdhcHBBc2lkZU1lbnVUb2dnbGVyJykgYnJlYWtwb2ludDogc3RyaW5nO1xuICBwdWJsaWMgYnA7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xhc3NUb2dnbGVyOiBDbGFzc1RvZ2dsZXIpIHt9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYnAgPSB0aGlzLmJyZWFrcG9pbnQ7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3NzQ2xhc3MgPSB0aGlzLmJwID8gYGFzaWRlLW1lbnUtJHt0aGlzLmJwfS1zaG93YCA6IGFzaWRlTWVudUNzc0NsYXNzZXNbMF07XG4gICAgdGhpcy5jbGFzc1RvZ2dsZXIudG9nZ2xlQ2xhc3Nlcyhjc3NDbGFzcywgYXNpZGVNZW51Q3NzQ2xhc3Nlcyk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcEh0bWxBdHRyXSdcbn0pXG5leHBvcnQgY2xhc3MgSHRtbEF0dHJpYnV0ZXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBhcHBIdG1sQXR0cjoge1trZXk6IHN0cmluZ106IHN0cmluZyB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgYXR0cmlicyA9IHRoaXMuYXBwSHRtbEF0dHI7XG4gICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJpYnMpIHtcbiAgICAgIGlmIChhdHRyID09PSAnc3R5bGUnICYmIHR5cGVvZihhdHRyaWJzW2F0dHJdKSA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgIHRoaXMuc2V0U3R5bGUoYXR0cmlic1thdHRyXSk7XG4gICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdjbGFzcycpIHtcbiAgICAgICAgdGhpcy5hZGRDbGFzcyhhdHRyaWJzW2F0dHJdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmliKGF0dHIsIGF0dHJpYnNbYXR0cl0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0U3R5bGUoc3R5bGVzKSB7XG4gICAgZm9yIChjb25zdCBzdHlsZSBpbiBzdHlsZXMpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBzdHlsZSwgc3R5bGVzW3N0eWxlXSApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkQ2xhc3MoY2xhc3Nlcykge1xuICAgIGNvbnN0IGNsYXNzQXJyYXkgPSAoQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJykpO1xuICAgIGNsYXNzQXJyYXkuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50Lmxlbmd0aCA+IDApLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgZWxlbWVudCApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBdHRyaWIoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwga2V5LCB2YWx1ZSApO1xuICB9XG59XG4iXX0=