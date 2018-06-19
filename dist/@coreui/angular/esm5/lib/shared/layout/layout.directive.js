/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { sidebarCssClasses, asideMenuCssClasses } from '../classes';
import { ToggleClasses } from '../toggle-classes';
/**
 * Allows the sidebar to be toggled via click.
 */
var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective() {
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
        var /** @type {?} */ cssClass;
        this.bp ? cssClass = "sidebar-" + this.bp + "-show" : cssClass = sidebarCssClasses[0];
        ToggleClasses(cssClass, sidebarCssClasses);
    };
    SidebarToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appSidebarToggler]'
                },] },
    ];
    /** @nocollapse */
    SidebarToggleDirective.ctorParameters = function () { return []; };
    SidebarToggleDirective.propDecorators = {
        breakpoint: [{ type: Input, args: ['appSidebarToggler',] }],
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return SidebarToggleDirective;
}());
export { SidebarToggleDirective };
function SidebarToggleDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    SidebarToggleDirective.prototype.breakpoint;
    /** @type {?} */
    SidebarToggleDirective.prototype.bp;
}
var SidebarMinimizeDirective = /** @class */ (function () {
    function SidebarMinimizeDirective() {
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
        document.querySelector('body').classList.toggle('sidebar-minimized');
    };
    SidebarMinimizeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appSidebarMinimizer]'
                },] },
    ];
    /** @nocollapse */
    SidebarMinimizeDirective.ctorParameters = function () { return []; };
    SidebarMinimizeDirective.propDecorators = {
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return SidebarMinimizeDirective;
}());
export { SidebarMinimizeDirective };
var MobileSidebarToggleDirective = /** @class */ (function () {
    function MobileSidebarToggleDirective() {
    }
    /**
     * @param {?} target
     * @param {?} elementClassName
     * @return {?}
     */
    MobileSidebarToggleDirective.prototype.hasClass = /**
     * @param {?} target
     * @param {?} elementClassName
     * @return {?}
     */
    function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
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
        document.querySelector('body').classList.toggle('sidebar-show');
    };
    MobileSidebarToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appMobileSidebarToggler]'
                },] },
    ];
    /** @nocollapse */
    MobileSidebarToggleDirective.ctorParameters = function () { return []; };
    MobileSidebarToggleDirective.propDecorators = {
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return MobileSidebarToggleDirective;
}());
export { MobileSidebarToggleDirective };
/**
 * Allows the off-canvas sidebar to be closed via click.
 */
var SidebarOffCanvasCloseDirective = /** @class */ (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    /**
     * @param {?} target
     * @param {?} elementClassName
     * @return {?}
     */
    SidebarOffCanvasCloseDirective.prototype.hasClass = /**
     * @param {?} target
     * @param {?} elementClassName
     * @return {?}
     */
    function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    /**
     * @param {?} elem
     * @param {?} elementClassName
     * @return {?}
     */
    SidebarOffCanvasCloseDirective.prototype.toggleClass = /**
     * @param {?} elem
     * @param {?} elementClassName
     * @return {?}
     */
    function (elem, elementClassName) {
        var /** @type {?} */ newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
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
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    SidebarOffCanvasCloseDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appSidebarClose]'
                },] },
    ];
    /** @nocollapse */
    SidebarOffCanvasCloseDirective.ctorParameters = function () { return []; };
    SidebarOffCanvasCloseDirective.propDecorators = {
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return SidebarOffCanvasCloseDirective;
}());
export { SidebarOffCanvasCloseDirective };
var BrandMinimizeDirective = /** @class */ (function () {
    function BrandMinimizeDirective() {
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
        document.querySelector('body').classList.toggle('brand-minimized');
    };
    BrandMinimizeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appBrandMinimizer]'
                },] },
    ];
    /** @nocollapse */
    BrandMinimizeDirective.ctorParameters = function () { return []; };
    BrandMinimizeDirective.propDecorators = {
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return BrandMinimizeDirective;
}());
export { BrandMinimizeDirective };
/**
 * Allows the aside to be toggled via click.
 */
var AsideToggleDirective = /** @class */ (function () {
    function AsideToggleDirective() {
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
        var /** @type {?} */ cssClass;
        this.bp ? cssClass = "aside-menu-" + this.bp + "-show" : cssClass = asideMenuCssClasses[0];
        ToggleClasses(cssClass, asideMenuCssClasses);
    };
    AsideToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appAsideMenuToggler]',
                },] },
    ];
    /** @nocollapse */
    AsideToggleDirective.ctorParameters = function () { return []; };
    AsideToggleDirective.propDecorators = {
        breakpoint: [{ type: Input, args: ['appAsideMenuToggler',] }],
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return AsideToggleDirective;
}());
export { AsideToggleDirective };
function AsideToggleDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    AsideToggleDirective.prototype.breakpoint;
    /** @type {?} */
    AsideToggleDirective.prototype.bp;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvbGF5b3V0L2xheW91dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7SUFXbEQ7S0FBZ0I7Ozs7SUFDaEIseUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQzNCOzs7OztJQUVELDJDQUFVOzs7O0lBRFYsVUFDVyxNQUFXO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixxQkFBSSxRQUFRLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsYUFBVyxJQUFJLENBQUMsRUFBRSxVQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRixhQUFhLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDLENBQUM7S0FDNUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtpQkFDaEM7Ozs7OzZCQUVFLEtBQUssU0FBQyxtQkFBbUI7NkJBTXpCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2lDQWpCbkM7O1NBVWEsc0JBQXNCOzs7Ozs7OztJQW9CakM7S0FBaUI7Ozs7O0lBR2pCLDZDQUFVOzs7O0lBRFYsVUFDVyxNQUFXO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixRQUFRLENB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QUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUNwRTs7Z0JBVkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7aUJBQ2hDOzs7Ozs2QkFJRSxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztpQ0FwR25DOztTQWlHYSxzQkFBc0I7Ozs7O0lBb0JqQztLQUFnQjs7OztJQUNoQix1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDM0I7Ozs7O0lBRUQseUNBQVU7Ozs7SUFEVixVQUNXLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLHFCQUFJLFFBQVEsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxnQkFBYyxJQUFJLENBQUMsRUFBRSxVQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RixhQUFhLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDLENBQUM7S0FDOUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtpQkFDbEM7Ozs7OzZCQUVFLEtBQUssU0FBQyxxQkFBcUI7NkJBTTNCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7OytCQXpIbkM7O1NBa0hhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHNpZGViYXJDc3NDbGFzc2VzLCBhc2lkZU1lbnVDc3NDbGFzc2VzIH0gZnJvbSAnLi8uLi9jbGFzc2VzJztcclxuaW1wb3J0IHsgVG9nZ2xlQ2xhc3NlcyB9IGZyb20gJy4vLi4vdG9nZ2xlLWNsYXNzZXMnO1xyXG5cclxuLyoqXHJcbiogQWxsb3dzIHRoZSBzaWRlYmFyIHRvIGJlIHRvZ2dsZWQgdmlhIGNsaWNrLlxyXG4qL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thcHBTaWRlYmFyVG9nZ2xlcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoJ2FwcFNpZGViYXJUb2dnbGVyJykgYnJlYWtwb2ludDogc3RyaW5nO1xyXG4gIHB1YmxpYyBicDtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJwID0gdGhpcy5icmVha3BvaW50O1xyXG4gIH1cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgY3NzQ2xhc3M7XHJcbiAgICB0aGlzLmJwID8gY3NzQ2xhc3MgPSBgc2lkZWJhci0ke3RoaXMuYnB9LXNob3dgIDogY3NzQ2xhc3MgPSBzaWRlYmFyQ3NzQ2xhc3Nlc1swXTtcclxuICAgIFRvZ2dsZUNsYXNzZXMoY3NzQ2xhc3MsIHNpZGViYXJDc3NDbGFzc2VzKTtcclxuICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwcFNpZGViYXJNaW5pbWl6ZXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZWJhck1pbmltaXplRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnc2lkZWJhci1taW5pbWl6ZWQnKTtcclxuICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwcE1vYmlsZVNpZGViYXJUb2dnbGVyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vYmlsZVNpZGViYXJUb2dnbGVEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8vIENoZWNrIGlmIGVsZW1lbnQgaGFzIGNsYXNzXHJcbiAgcHJpdmF0ZSBoYXNDbGFzcyh0YXJnZXQ6IGFueSwgZWxlbWVudENsYXNzTmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKFxcXFxzfF4pJyArIGVsZW1lbnRDbGFzc05hbWUgKyAnKFxcXFxzfCQpJykudGVzdCh0YXJnZXQuY2xhc3NOYW1lKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdzaWRlYmFyLXNob3cnKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4qIEFsbG93cyB0aGUgb2ZmLWNhbnZhcyBzaWRlYmFyIHRvIGJlIGNsb3NlZCB2aWEgY2xpY2suXHJcbiovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwcFNpZGViYXJDbG9zZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyT2ZmQ2FudmFzQ2xvc2VEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8vIENoZWNrIGlmIGVsZW1lbnQgaGFzIGNsYXNzXHJcbiAgcHJpdmF0ZSBoYXNDbGFzcyh0YXJnZXQ6IGFueSwgZWxlbWVudENsYXNzTmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKFxcXFxzfF4pJyArIGVsZW1lbnRDbGFzc05hbWUgKyAnKFxcXFxzfCQpJykudGVzdCh0YXJnZXQuY2xhc3NOYW1lKTtcclxuICB9XHJcblxyXG4gIC8vIFRvZ2dsZSBlbGVtZW50IGNsYXNzXHJcbiAgcHJpdmF0ZSB0b2dnbGVDbGFzcyhlbGVtOiBhbnksIGVsZW1lbnRDbGFzc05hbWU6IHN0cmluZykge1xyXG4gICAgbGV0IG5ld0NsYXNzID0gJyAnICsgZWxlbS5jbGFzc05hbWUucmVwbGFjZSggL1tcXHRcXHJcXG5dL2csICcgJyApICsgJyAnO1xyXG4gICAgaWYgKHRoaXMuaGFzQ2xhc3MoZWxlbSwgZWxlbWVudENsYXNzTmFtZSkpIHtcclxuICAgICAgd2hpbGUgKG5ld0NsYXNzLmluZGV4T2YoJyAnICsgZWxlbWVudENsYXNzTmFtZSArICcgJykgPj0gMCApIHtcclxuICAgICAgICBuZXdDbGFzcyA9IG5ld0NsYXNzLnJlcGxhY2UoICcgJyArIGVsZW1lbnRDbGFzc05hbWUgKyAnICcgLCAnICcgKTtcclxuICAgICAgfVxyXG4gICAgICBlbGVtLmNsYXNzTmFtZSA9IG5ld0NsYXNzLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsZW0uY2xhc3NOYW1lICs9ICcgJyArIGVsZW1lbnRDbGFzc05hbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHRoaXMuaGFzQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCAnc2lkZWJhci1vZmYtY2FudmFzJykpIHtcclxuICAgICAgdGhpcy50b2dnbGVDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksICdzaWRlYmFyLW9wZW5lZCcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwQnJhbmRNaW5pbWl6ZXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJhbmRNaW5pbWl6ZURpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ2JyYW5kLW1pbmltaXplZCcpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4qIEFsbG93cyB0aGUgYXNpZGUgdG8gYmUgdG9nZ2xlZCB2aWEgY2xpY2suXHJcbiovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwcEFzaWRlTWVudVRvZ2dsZXJdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFzaWRlVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoJ2FwcEFzaWRlTWVudVRvZ2dsZXInKSBicmVha3BvaW50OiBzdHJpbmc7XHJcbiAgcHVibGljIGJwO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYnAgPSB0aGlzLmJyZWFrcG9pbnQ7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBjc3NDbGFzcztcclxuICAgIHRoaXMuYnAgPyBjc3NDbGFzcyA9IGBhc2lkZS1tZW51LSR7dGhpcy5icH0tc2hvd2AgOiBjc3NDbGFzcyA9IGFzaWRlTWVudUNzc0NsYXNzZXNbMF07XHJcbiAgICBUb2dnbGVDbGFzc2VzKGNzc0NsYXNzLCBhc2lkZU1lbnVDc3NDbGFzc2VzKTtcclxuICB9XHJcbn1cclxuIl19
