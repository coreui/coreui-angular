/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { sidebarCssClasses, asideMenuCssClasses } from './../classes';
import { ToggleClasses } from './../toggle-classes';
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
            },] },
];
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
    constructor() { }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleOpen($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-minimized');
    }
}
SidebarMinimizeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appSidebarMinimizer]'
            },] },
];
SidebarMinimizeDirective.ctorParameters = () => [];
SidebarMinimizeDirective.propDecorators = {
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
export class MobileSidebarToggleDirective {
    constructor() { }
    // Check if element has class
    /**
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
        document.querySelector('body').classList.toggle('sidebar-show');
    }
}
MobileSidebarToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appMobileSidebarToggler]'
            },] },
];
MobileSidebarToggleDirective.ctorParameters = () => [];
MobileSidebarToggleDirective.propDecorators = {
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
/**
 * Allows the off-canvas sidebar to be closed via click.
 */
export class SidebarOffCanvasCloseDirective {
    constructor() { }
    // Check if element has class
    /**
     * @param {?} target
     * @param {?} elementClassName
     * @return {?}
     */
    hasClass(target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    }
    // Toggle element class
    /**
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
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    }
}
SidebarOffCanvasCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appSidebarClose]'
            },] },
];
SidebarOffCanvasCloseDirective.ctorParameters = () => [];
SidebarOffCanvasCloseDirective.propDecorators = {
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
export class BrandMinimizeDirective {
    constructor() { }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleOpen($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('brand-minimized');
    }
}
BrandMinimizeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appBrandMinimizer]'
            },] },
];
BrandMinimizeDirective.ctorParameters = () => [];
BrandMinimizeDirective.propDecorators = {
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
/**
 * Allows the aside to be toggled via click.
 */
export class AsideToggleDirective {
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
        this.bp ? cssClass = `aside-menu-${this.bp}-show` : cssClass = asideMenuCssClasses[0];
        ToggleClasses(cssClass, asideMenuCssClasses);
    }
}
AsideToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appAsideMenuToggler]',
            },] },
];
AsideToggleDirective.ctorParameters = () => [];
AsideToggleDirective.propDecorators = {
    breakpoint: [{ type: Input, args: ['appAsideMenuToggler',] }],
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    AsideToggleDirective.prototype.breakpoint;
    /** @type {?} */
    AsideToggleDirective.prototype.bp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvbGF5b3V0L2xheW91dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQVFwRCxNQUFNO0lBR0osZ0JBQWUsQ0FBQzs7OztJQUNoQixRQUFRO1FBQ04sSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDOztZQUNwQixRQUFRO1FBQ1osSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLFdBQVcsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakYsYUFBYSxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjthQUNoQzs7Ozt5QkFFRSxLQUFLLFNBQUMsbUJBQW1CO3lCQU16QixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBTmpDLDRDQUErQzs7SUFDL0Msb0NBQVU7O0FBaUJaLE1BQU07SUFDSixnQkFBZ0IsQ0FBQzs7Ozs7SUFHakIsVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7OztZQVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2FBQ2xDOzs7O3lCQUlFLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0FBVW5DLE1BQU07SUFDSixnQkFBZ0IsQ0FBQzs7Ozs7OztJQUdULFFBQVEsQ0FBQyxNQUFXLEVBQUUsZ0JBQXdCO1FBQ3BELE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRixDQUFDOzs7OztJQUdELFVBQVUsQ0FBQyxNQUFXO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7Ozs7eUJBU0UsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7QUFhbkMsTUFBTTtJQUNKLGdCQUFnQixDQUFDOzs7Ozs7O0lBR1QsUUFBUSxDQUFDLE1BQVcsRUFBRSxnQkFBd0I7UUFDcEQsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Ozs7Ozs7SUFHTyxXQUFXLENBQUMsSUFBUyxFQUFFLGdCQUF3Qjs7WUFDakQsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBRSxXQUFXLEVBQUUsR0FBRyxDQUFFLEdBQUcsR0FBRztRQUNyRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRyxDQUFDO2dCQUM1RCxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBRSxHQUFHLEdBQUcsZ0JBQWdCLEdBQUcsR0FBRyxFQUFHLEdBQUcsQ0FBRSxDQUFDO1lBQ3BFLENBQUM7WUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxTQUFTLElBQUksR0FBRyxHQUFHLGdCQUFnQixDQUFDO1FBQzNDLENBQUM7SUFDSCxDQUFDOzs7OztJQUdELFVBQVUsQ0FBQyxNQUFXO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDckUsQ0FBQztJQUNILENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs7Ozt5QkFzQkUsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7QUFhbkMsTUFBTTtJQUNKLGdCQUFnQixDQUFDOzs7OztJQUdqQixVQUFVLENBQUMsTUFBVztRQUNwQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDckUsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7YUFDaEM7Ozs7eUJBSUUsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7QUFjbkMsTUFBTTtJQUdKLGdCQUFlLENBQUM7Ozs7SUFDaEIsUUFBUTtRQUNOLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxNQUFXO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7WUFDcEIsUUFBUTtRQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxjQUFjLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLGFBQWEsQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7YUFDbEM7Ozs7eUJBRUUsS0FBSyxTQUFDLHFCQUFxQjt5QkFNM0IsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQU5qQywwQ0FBaUQ7O0lBQ2pELGtDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgc2lkZWJhckNzc0NsYXNzZXMsIGFzaWRlTWVudUNzc0NsYXNzZXMgfSBmcm9tICcuLy4uL2NsYXNzZXMnO1xyXG5pbXBvcnQgeyBUb2dnbGVDbGFzc2VzIH0gZnJvbSAnLi8uLi90b2dnbGUtY2xhc3Nlcyc7XHJcblxyXG4vKipcclxuKiBBbGxvd3MgdGhlIHNpZGViYXIgdG8gYmUgdG9nZ2xlZCB2aWEgY2xpY2suXHJcbiovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwcFNpZGViYXJUb2dnbGVyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGViYXJUb2dnbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgnYXBwU2lkZWJhclRvZ2dsZXInKSBicmVha3BvaW50OiBzdHJpbmc7XHJcbiAgcHVibGljIGJwO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYnAgPSB0aGlzLmJyZWFrcG9pbnQ7XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBjc3NDbGFzcztcclxuICAgIHRoaXMuYnAgPyBjc3NDbGFzcyA9IGBzaWRlYmFyLSR7dGhpcy5icH0tc2hvd2AgOiBjc3NDbGFzcyA9IHNpZGViYXJDc3NDbGFzc2VzWzBdO1xyXG4gICAgVG9nZ2xlQ2xhc3Nlcyhjc3NDbGFzcywgc2lkZWJhckNzc0NsYXNzZXMpO1xyXG4gIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwU2lkZWJhck1pbmltaXplcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTWluaW1pemVEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdzaWRlYmFyLW1pbmltaXplZCcpO1xyXG4gIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwTW9iaWxlU2lkZWJhclRvZ2dsZXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9iaWxlU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgZWxlbWVudCBoYXMgY2xhc3NcclxuICBwcml2YXRlIGhhc0NsYXNzKHRhcmdldDogYW55LCBlbGVtZW50Q2xhc3NOYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKCcoXFxcXHN8XiknICsgZWxlbWVudENsYXNzTmFtZSArICcoXFxcXHN8JCknKS50ZXN0KHRhcmdldC5jbGFzc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ3NpZGViYXItc2hvdycpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiogQWxsb3dzIHRoZSBvZmYtY2FudmFzIHNpZGViYXIgdG8gYmUgY2xvc2VkIHZpYSBjbGljay5cclxuKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwU2lkZWJhckNsb3NlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGViYXJPZmZDYW52YXNDbG9zZURpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgZWxlbWVudCBoYXMgY2xhc3NcclxuICBwcml2YXRlIGhhc0NsYXNzKHRhcmdldDogYW55LCBlbGVtZW50Q2xhc3NOYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKCcoXFxcXHN8XiknICsgZWxlbWVudENsYXNzTmFtZSArICcoXFxcXHN8JCknKS50ZXN0KHRhcmdldC5jbGFzc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gVG9nZ2xlIGVsZW1lbnQgY2xhc3NcclxuICBwcml2YXRlIHRvZ2dsZUNsYXNzKGVsZW06IGFueSwgZWxlbWVudENsYXNzTmFtZTogc3RyaW5nKSB7XHJcbiAgICBsZXQgbmV3Q2xhc3MgPSAnICcgKyBlbGVtLmNsYXNzTmFtZS5yZXBsYWNlKCAvW1xcdFxcclxcbl0vZywgJyAnICkgKyAnICc7XHJcbiAgICBpZiAodGhpcy5oYXNDbGFzcyhlbGVtLCBlbGVtZW50Q2xhc3NOYW1lKSkge1xyXG4gICAgICB3aGlsZSAobmV3Q2xhc3MuaW5kZXhPZignICcgKyBlbGVtZW50Q2xhc3NOYW1lICsgJyAnKSA+PSAwICkge1xyXG4gICAgICAgIG5ld0NsYXNzID0gbmV3Q2xhc3MucmVwbGFjZSggJyAnICsgZWxlbWVudENsYXNzTmFtZSArICcgJyAsICcgJyApO1xyXG4gICAgICB9XHJcbiAgICAgIGVsZW0uY2xhc3NOYW1lID0gbmV3Q2xhc3MucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbS5jbGFzc05hbWUgKz0gJyAnICsgZWxlbWVudENsYXNzTmFtZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAodGhpcy5oYXNDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksICdzaWRlYmFyLW9mZi1jYW52YXMnKSkge1xyXG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJ3NpZGViYXItb3BlbmVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thcHBCcmFuZE1pbmltaXplcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcmFuZE1pbmltaXplRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnYnJhbmQtbWluaW1pemVkJyk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiogQWxsb3dzIHRoZSBhc2lkZSB0byBiZSB0b2dnbGVkIHZpYSBjbGljay5cclxuKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwQXNpZGVNZW51VG9nZ2xlcl0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXNpZGVUb2dnbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgnYXBwQXNpZGVNZW51VG9nZ2xlcicpIGJyZWFrcG9pbnQ6IHN0cmluZztcclxuICBwdWJsaWMgYnA7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5icCA9IHRoaXMuYnJlYWtwb2ludDtcclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGNzc0NsYXNzO1xyXG4gICAgdGhpcy5icCA/IGNzc0NsYXNzID0gYGFzaWRlLW1lbnUtJHt0aGlzLmJwfS1zaG93YCA6IGNzc0NsYXNzID0gYXNpZGVNZW51Q3NzQ2xhc3Nlc1swXTtcclxuICAgIFRvZ2dsZUNsYXNzZXMoY3NzQ2xhc3MsIGFzaWRlTWVudUNzc0NsYXNzZXMpO1xyXG4gIH1cclxufVxyXG4iXX0=