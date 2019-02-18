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
var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective(classToggler) {
        this.classToggler = classToggler;
    }
    /**
     * @return {?}
     */
    SidebarToggleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.bp = this.breakpoint;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SidebarToggleDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        /** @type {?} */
        var cssClass = this.bp ? "sidebar-" + this.bp + "-show" : sidebarCssClasses[0];
        this.classToggler.toggleClasses(cssClass, sidebarCssClasses);
    };
    SidebarToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appSidebarToggler]',
                    providers: [ClassToggler]
                },] }
    ];
    /** @nocollapse */
    SidebarToggleDirective.ctorParameters = function () { return [
        { type: ClassToggler }
    ]; };
    SidebarToggleDirective.propDecorators = {
        breakpoint: [{ type: Input, args: ['appSidebarToggler',] }],
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return SidebarToggleDirective;
}());
export { SidebarToggleDirective };
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
var SidebarMinimizeDirective = /** @class */ (function () {
    function SidebarMinimizeDirective(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    SidebarMinimizeDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        /** @type {?} */
        var body = this.document.body;
        body.classList.contains('sidebar-minimized') ?
            this.renderer.removeClass(body, 'sidebar-minimized') :
            this.renderer.addClass(body, 'sidebar-minimized');
    };
    SidebarMinimizeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appSidebarMinimizer]'
                },] }
    ];
    /** @nocollapse */
    SidebarMinimizeDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
    SidebarMinimizeDirective.propDecorators = {
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return SidebarMinimizeDirective;
}());
export { SidebarMinimizeDirective };
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
var MobileSidebarToggleDirective = /** @class */ (function () {
    function MobileSidebarToggleDirective(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    MobileSidebarToggleDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        /** @type {?} */
        var body = this.document.body;
        body.classList.contains('sidebar-show') ?
            this.renderer.removeClass(body, 'sidebar-show') :
            this.renderer.addClass(body, 'sidebar-show');
    };
    MobileSidebarToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appMobileSidebarToggler]'
                },] }
    ];
    /** @nocollapse */
    MobileSidebarToggleDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
    MobileSidebarToggleDirective.propDecorators = {
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return MobileSidebarToggleDirective;
}());
export { MobileSidebarToggleDirective };
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
var SidebarOffCanvasCloseDirective = /** @class */ (function () {
    function SidebarOffCanvasCloseDirective(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        /** @type {?} */
        var body = this.document.body;
        if (body.classList.contains('sidebar-off-canvas')) {
            body.classList.contains('sidebar-show') ?
                this.renderer.removeClass(body, 'sidebar-show') :
                this.renderer.addClass(body, 'sidebar-show');
        }
    };
    SidebarOffCanvasCloseDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appSidebarClose]'
                },] }
    ];
    /** @nocollapse */
    SidebarOffCanvasCloseDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
    SidebarOffCanvasCloseDirective.propDecorators = {
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return SidebarOffCanvasCloseDirective;
}());
export { SidebarOffCanvasCloseDirective };
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
var BrandMinimizeDirective = /** @class */ (function () {
    function BrandMinimizeDirective(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    BrandMinimizeDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        /** @type {?} */
        var body = this.document.body;
        body.classList.contains('brand-minimized') ?
            this.renderer.removeClass(body, 'brand-minimized') :
            this.renderer.addClass(body, 'brand-minimized');
    };
    BrandMinimizeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appBrandMinimizer]'
                },] }
    ];
    /** @nocollapse */
    BrandMinimizeDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
    BrandMinimizeDirective.propDecorators = {
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return BrandMinimizeDirective;
}());
export { BrandMinimizeDirective };
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
var AsideToggleDirective = /** @class */ (function () {
    function AsideToggleDirective(classToggler) {
        this.classToggler = classToggler;
    }
    /**
     * @return {?}
     */
    AsideToggleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.bp = this.breakpoint;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AsideToggleDirective.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        /** @type {?} */
        var cssClass = this.bp ? "aside-menu-" + this.bp + "-show" : asideMenuCssClasses[0];
        this.classToggler.toggleClasses(cssClass, asideMenuCssClasses);
    };
    AsideToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appAsideMenuToggler]',
                    providers: [ClassToggler]
                },] }
    ];
    /** @nocollapse */
    AsideToggleDirective.ctorParameters = function () { return [
        { type: ClassToggler }
    ]; };
    AsideToggleDirective.propDecorators = {
        breakpoint: [{ type: Input, args: ['appAsideMenuToggler',] }],
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return AsideToggleDirective;
}());
export { AsideToggleDirective };
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
var HtmlAttributesDirective = /** @class */ (function () {
    function HtmlAttributesDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * @return {?}
     */
    HtmlAttributesDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var attribs = this.appHtmlAttr;
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
    HtmlAttributesDirective.prototype.setStyle = /**
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
    HtmlAttributesDirective.prototype.addClass = /**
     * @private
     * @param {?} classes
     * @return {?}
     */
    function (classes) {
        var _this = this;
        /** @type {?} */
        var classArray = (Array.isArray(classes) ? classes : classes.split(' '));
        classArray.filter((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return element.length > 0; })).forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            _this.renderer.addClass(_this.el.nativeElement, element);
        }));
    };
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    HtmlAttributesDirective.prototype.setAttrib = /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.renderer.setAttribute(this.el.nativeElement, key, value);
    };
    HtmlAttributesDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appHtmlAttr]'
                },] }
    ];
    /** @nocollapse */
    HtmlAttributesDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    HtmlAttributesDirective.propDecorators = {
        appHtmlAttr: [{ type: Input }]
    };
    return HtmlAttributesDirective;
}());
export { HtmlAttributesDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvbGF5b3V0L2xheW91dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUtqRDtJQU9FLGdDQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7Ozs7SUFDbEQseUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsMkNBQVU7Ozs7SUFEVixVQUNXLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDOztZQUNsQixRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBVyxJQUFJLENBQUMsRUFBRSxVQUFPLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUMvRCxDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDMUI7Ozs7Z0JBUlEsWUFBWTs7OzZCQVVsQixLQUFLLFNBQUMsbUJBQW1COzZC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QUcsRUFBRSxLQUFLLENBQUUsQ0FBQztJQUNqRSxDQUFDOztnQkF2Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO2lCQUMxQjs7OztnQkF2SW1FLFNBQVM7Z0JBQTFELFVBQVU7Ozs4QkF5STFCLEtBQUs7O0lBb0NSLDhCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FyQ1ksdUJBQXVCOzs7SUFDbEMsOENBQStDOzs7OztJQUc3QywyQ0FBMkI7Ozs7O0lBQzNCLHFDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIEluamVjdCwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IGFzaWRlTWVudUNzc0NsYXNzZXMsIHNpZGViYXJDc3NDbGFzc2VzIH0gZnJvbSAnLi4vY2xhc3Nlcyc7XG5pbXBvcnQgeyBDbGFzc1RvZ2dsZXIgfSBmcm9tICcuLi90b2dnbGUtY2xhc3Nlcyc7XG5cbi8qKlxuKiBBbGxvd3MgdGhlIHNpZGViYXIgdG8gYmUgdG9nZ2xlZCB2aWEgY2xpY2suXG4qL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcFNpZGViYXJUb2dnbGVyXScsXG4gIHByb3ZpZGVyczogW0NsYXNzVG9nZ2xlcl1cbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnYXBwU2lkZWJhclRvZ2dsZXInKSBicmVha3BvaW50OiBzdHJpbmc7XG4gIHB1YmxpYyBicDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjbGFzc1RvZ2dsZXI6IENsYXNzVG9nZ2xlcikge31cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5icCA9IHRoaXMuYnJlYWtwb2ludDtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjc3NDbGFzcyA9IHRoaXMuYnAgPyBgc2lkZWJhci0ke3RoaXMuYnB9LXNob3dgIDogc2lkZWJhckNzc0NsYXNzZXNbMF07XG4gICAgdGhpcy5jbGFzc1RvZ2dsZXIudG9nZ2xlQ2xhc3Nlcyhjc3NDbGFzcywgc2lkZWJhckNzc0NsYXNzZXMpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBTaWRlYmFyTWluaW1pemVyXSdcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck1pbmltaXplRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5kb2N1bWVudC5ib2R5O1xuICAgIGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLW1pbmltaXplZCcpID9cbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoYm9keSwgJ3NpZGViYXItbWluaW1pemVkJykgOlxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhib2R5LCAnc2lkZWJhci1taW5pbWl6ZWQnKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwTW9iaWxlU2lkZWJhclRvZ2dsZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBNb2JpbGVTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5kb2N1bWVudC5ib2R5O1xuICAgIGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLXNob3cnKSA/XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGJvZHksICdzaWRlYmFyLXNob3cnKSA6XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGJvZHksICdzaWRlYmFyLXNob3cnKTtcbiAgfVxufVxuXG4vKipcbiogQWxsb3dzIHRoZSBvZmYtY2FudmFzIHNpZGViYXIgdG8gYmUgY2xvc2VkIHZpYSBjbGljay5cbiovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwU2lkZWJhckNsb3NlXSdcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck9mZkNhbnZhc0Nsb3NlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmRvY3VtZW50LmJvZHk7XG4gICAgaWYgKGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLW9mZi1jYW52YXMnKSkge1xuICAgICAgYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItc2hvdycpID9cbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhib2R5LCAnc2lkZWJhci1zaG93JykgOlxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGJvZHksICdzaWRlYmFyLXNob3cnKTtcbiAgICB9XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcEJyYW5kTWluaW1pemVyXSdcbn0pXG5leHBvcnQgY2xhc3MgQnJhbmRNaW5pbWl6ZURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuZG9jdW1lbnQuYm9keTtcbiAgICBib2R5LmNsYXNzTGlzdC5jb250YWlucygnYnJhbmQtbWluaW1pemVkJykgP1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhib2R5LCAnYnJhbmQtbWluaW1pemVkJykgOlxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhib2R5LCAnYnJhbmQtbWluaW1pemVkJyk7XG4gIH1cbn1cblxuXG4vKipcbiogQWxsb3dzIHRoZSBhc2lkZSB0byBiZSB0b2dnbGVkIHZpYSBjbGljay5cbiovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwQXNpZGVNZW51VG9nZ2xlcl0nLFxuICBwcm92aWRlcnM6IFtDbGFzc1RvZ2dsZXJdXG59KVxuZXhwb3J0IGNsYXNzIEFzaWRlVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdhcHBBc2lkZU1lbnVUb2dnbGVyJykgYnJlYWtwb2ludDogc3RyaW5nO1xuICBwdWJsaWMgYnA7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xhc3NUb2dnbGVyOiBDbGFzc1RvZ2dsZXIpIHt9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYnAgPSB0aGlzLmJyZWFrcG9pbnQ7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3NzQ2xhc3MgPSB0aGlzLmJwID8gYGFzaWRlLW1lbnUtJHt0aGlzLmJwfS1zaG93YCA6IGFzaWRlTWVudUNzc0NsYXNzZXNbMF07XG4gICAgdGhpcy5jbGFzc1RvZ2dsZXIudG9nZ2xlQ2xhc3Nlcyhjc3NDbGFzcywgYXNpZGVNZW51Q3NzQ2xhc3Nlcyk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcEh0bWxBdHRyXSdcbn0pXG5leHBvcnQgY2xhc3MgSHRtbEF0dHJpYnV0ZXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBhcHBIdG1sQXR0cjoge1trZXk6IHN0cmluZ106IHN0cmluZyB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBhdHRyaWJzID0gdGhpcy5hcHBIdG1sQXR0cjtcbiAgICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cmlicykge1xuICAgICAgaWYgKGF0dHIgPT09ICdzdHlsZScgJiYgdHlwZW9mKGF0dHJpYnNbYXR0cl0pID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgdGhpcy5zZXRTdHlsZShhdHRyaWJzW2F0dHJdKTtcbiAgICAgIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ2NsYXNzJykge1xuICAgICAgICB0aGlzLmFkZENsYXNzKGF0dHJpYnNbYXR0cl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWIoYXR0ciwgYXR0cmlic1thdHRyXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdHlsZShzdHlsZXMpIHtcbiAgICBmb3IgKGNvbnN0IHN0eWxlIGluIHN0eWxlcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHN0eWxlLCBzdHlsZXNbc3R5bGVdICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRDbGFzcyhjbGFzc2VzKSB7XG4gICAgY29uc3QgY2xhc3NBcnJheSA9IChBcnJheS5pc0FycmF5KGNsYXNzZXMpID8gY2xhc3NlcyA6IGNsYXNzZXMuc3BsaXQoJyAnKSk7XG4gICAgY2xhc3NBcnJheS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQubGVuZ3RoID4gMCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBlbGVtZW50ICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldEF0dHJpYihrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBrZXksIHZhbHVlICk7XG4gIH1cbn1cbiJdfQ==