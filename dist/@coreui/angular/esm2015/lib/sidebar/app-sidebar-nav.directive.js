/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUtsRSxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRS9CLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUksQ0FBQzs7OztJQUV2QyxNQUFNO1FBQ0osSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUFURixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7OztZQUprQixVQUFVOzs7Ozs7O0lBT2Ysa0NBQXNCOzs7OztBQWFwQyxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBQ3JDLFlBQW9CLFFBQThCO1FBQTlCLGFBQVEsR0FBUixRQUFRLENBQXNCO0lBQUcsQ0FBQzs7Ozs7SUFHdEQsVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7YUFDbkM7Ozs7WUFFK0Isb0JBQW9COzs7eUJBRWpELFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUFGckIsOENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thcHBOYXZEcm9wZG93bl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZEcm9wZG93bkRpcmVjdGl2ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFsbG93cyB0aGUgZHJvcGRvd24gdG8gYmUgdG9nZ2xlZCB2aWEgY2xpY2suXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thcHBOYXZEcm9wZG93blRvZ2dsZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkcm9wZG93bjogTmF2RHJvcGRvd25EaXJlY3RpdmUpIHt9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuZHJvcGRvd24udG9nZ2xlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==