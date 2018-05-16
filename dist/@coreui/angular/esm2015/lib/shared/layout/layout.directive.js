/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        let /** @type {?} */ cssClass;
        this.bp ? cssClass = `sidebar-${this.bp}-show` : cssClass = sidebarCssClasses[0];
        ToggleClasses(cssClass, sidebarCssClasses);
    }
}
SidebarToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appSidebarToggler]'
            },] },
];
/** @nocollapse */
SidebarToggleDirective.ctorParameters = () => [];
SidebarToggleDirective.propDecorators = {
    "breakpoint": [{ type: Input, args: ['appSidebarToggler',] },],
    "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
};
function SidebarToggleDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SidebarToggleDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SidebarToggleDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SidebarToggleDirective.propDecorators;
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
/** @nocollapse */
SidebarMinimizeDirective.ctorParameters = () => [];
SidebarMinimizeDirective.propDecorators = {
    "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
};
function SidebarMinimizeDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SidebarMinimizeDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SidebarMinimizeDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SidebarMinimizeDirective.propDecorators;
}
export class MobileSidebarToggleDirective {
    constructor() { }
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
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    }
}
MobileSidebarToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appMobileSidebarToggler]'
            },] },
];
/** @nocollapse */
MobileSidebarToggleDirective.ctorParameters = () => [];
MobileSidebarToggleDirective.propDecorators = {
    "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
};
function MobileSidebarToggleDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MobileSidebarToggleDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MobileSidebarToggleDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MobileSidebarToggleDirective.propDecorators;
}
/**
 * Allows the off-canvas sidebar to be closed via click.
 */
export class SidebarOffCanvasCloseDirective {
    constructor() { }
    /**
     * @param {?} target
     * @param {?} elementClassName
     * @return {?}
     */
    hasClass(target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    }
    /**
     * @param {?} elem
     * @param {?} elementClassName
     * @return {?}
     */
    toggleClass(elem, elementClassName) {
        let /** @type {?} */ newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
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
/** @nocollapse */
SidebarOffCanvasCloseDirective.ctorParameters = () => [];
SidebarOffCanvasCloseDirective.propDecorators = {
    "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
};
function SidebarOffCanvasCloseDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SidebarOffCanvasCloseDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SidebarOffCanvasCloseDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SidebarOffCanvasCloseDirective.propDecorators;
}
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
/** @nocollapse */
BrandMinimizeDirective.ctorParameters = () => [];
BrandMinimizeDirective.propDecorators = {
    "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
};
function BrandMinimizeDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BrandMinimizeDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BrandMinimizeDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    BrandMinimizeDirective.propDecorators;
}
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
        let /** @type {?} */ cssClass;
        this.bp ? cssClass = `aside-menu-${this.bp}-show` : cssClass = asideMenuCssClasses[0];
        ToggleClasses(cssClass, asideMenuCssClasses);
    }
}
AsideToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appAsideMenuToggler]',
            },] },
];
/** @nocollapse */
AsideToggleDirective.ctorParameters = () => [];
AsideToggleDirective.propDecorators = {
    "breakpoint": [{ type: Input, args: ['appAsideMenuToggler',] },],
    "toggleOpen": [{ type: HostListener, args: ['click', ['$event'],] },],
};
function AsideToggleDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AsideToggleDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AsideToggleDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AsideToggleDirective.propDecorators;
    /** @type {?} */
    AsideToggleDirective.prototype.breakpoint;
    /** @type {?} */
    AsideToggleDirective.prototype.bp;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvbGF5b3V0L2xheW91dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQVFwRCxNQUFNO0lBR0osaUJBQWdCOzs7O0lBQ2hCLFFBQVE7UUFDTixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDM0I7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLHFCQUFJLFFBQVEsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxXQUFXLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLGFBQWEsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzs7OztZQWY5QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjthQUNoQzs7Ozs7MkJBRUUsS0FBSyxTQUFDLG1CQUFtQjsyQkFNekIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZbkMsTUFBTTtJQUNKLGlCQUFpQjs7Ozs7SUFHakIsVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOzs7O1lBVHhFLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2FBQ2xDOzs7OzsyQkFJRSxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBVW5DLE1BQU07SUFDSixpQkFBaUI7Ozs7OztJQUdULFFBQVEsQ0FBQyxNQUFXLEVBQUUsZ0JBQXdCO1FBQ3BELE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Ozs7O0lBSXJGLFVBQVUsQ0FBQyxNQUFXO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7OztZQWQxRSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjthQUN0Qzs7Ozs7MkJBU0UsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQWFuQyxNQUFNO0lBQ0osaUJBQWlCOzs7Ozs7SUFHVCxRQUFRLENBQUMsTUFBVyxFQUFFLGdCQUF3QjtRQUNwRCxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsU0FBUyxHQUFHLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7Ozs7SUFJN0UsV0FBVyxDQUFDLElBQVMsRUFBRSxnQkFBd0I7UUFDckQscUJBQUksUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBRSxXQUFXLEVBQUUsR0FBRyxDQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3RFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFHLENBQUM7Z0JBQzVELFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFFLEdBQUcsR0FBRyxnQkFBZ0IsR0FBRyxHQUFHLEVBQUcsR0FBRyxDQUFFLENBQUM7YUFDbkU7WUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3JEO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQztTQUMxQzs7Ozs7O0lBSUgsVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztTQUNwRTs7OztZQTlCSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs7Ozs7MkJBc0JFLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhbkMsTUFBTTtJQUNKLGlCQUFpQjs7Ozs7SUFHakIsVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOzs7O1lBVHRFLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2FBQ2hDOzs7OzsyQkFJRSxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBY25DLE1BQU07SUFHSixpQkFBZ0I7Ozs7SUFDaEIsUUFBUTtRQUNOLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztLQUMzQjs7Ozs7SUFFRCxVQUFVLENBQUMsTUFBVztRQUNwQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIscUJBQUksUUFBUSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLGNBQWMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEYsYUFBYSxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDOzs7O1lBZmhELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2FBQ2xDOzs7OzsyQkFFRSxLQUFLLFNBQUMscUJBQXFCOzJCQU0zQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNpZGViYXJDc3NDbGFzc2VzLCBhc2lkZU1lbnVDc3NDbGFzc2VzIH0gZnJvbSAnLi8uLi9jbGFzc2VzJztcbmltcG9ydCB7IFRvZ2dsZUNsYXNzZXMgfSBmcm9tICcuLy4uL3RvZ2dsZS1jbGFzc2VzJztcblxuLyoqXG4qIEFsbG93cyB0aGUgc2lkZWJhciB0byBiZSB0b2dnbGVkIHZpYSBjbGljay5cbiovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwU2lkZWJhclRvZ2dsZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdhcHBTaWRlYmFyVG9nZ2xlcicpIGJyZWFrcG9pbnQ6IHN0cmluZztcbiAgcHVibGljIGJwO1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYnAgPSB0aGlzLmJyZWFrcG9pbnQ7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGNzc0NsYXNzO1xuICAgIHRoaXMuYnAgPyBjc3NDbGFzcyA9IGBzaWRlYmFyLSR7dGhpcy5icH0tc2hvd2AgOiBjc3NDbGFzcyA9IHNpZGViYXJDc3NDbGFzc2VzWzBdO1xuICAgIFRvZ2dsZUNsYXNzZXMoY3NzQ2xhc3MsIHNpZGViYXJDc3NDbGFzc2VzKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwU2lkZWJhck1pbmltaXplcl0nXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJNaW5pbWl6ZURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ3NpZGViYXItbWluaW1pemVkJyk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcE1vYmlsZVNpZGViYXJUb2dnbGVyXSdcbn0pXG5leHBvcnQgY2xhc3MgTW9iaWxlU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLy8gQ2hlY2sgaWYgZWxlbWVudCBoYXMgY2xhc3NcbiAgcHJpdmF0ZSBoYXNDbGFzcyh0YXJnZXQ6IGFueSwgZWxlbWVudENsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJyhcXFxcc3xeKScgKyBlbGVtZW50Q2xhc3NOYW1lICsgJyhcXFxcc3wkKScpLnRlc3QodGFyZ2V0LmNsYXNzTmFtZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnc2lkZWJhci1tb2JpbGUtc2hvdycpO1xuICB9XG59XG5cbi8qKlxuKiBBbGxvd3MgdGhlIG9mZi1jYW52YXMgc2lkZWJhciB0byBiZSBjbG9zZWQgdmlhIGNsaWNrLlxuKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBTaWRlYmFyQ2xvc2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyT2ZmQ2FudmFzQ2xvc2VEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8vIENoZWNrIGlmIGVsZW1lbnQgaGFzIGNsYXNzXG4gIHByaXZhdGUgaGFzQ2xhc3ModGFyZ2V0OiBhbnksIGVsZW1lbnRDbGFzc05hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKCcoXFxcXHN8XiknICsgZWxlbWVudENsYXNzTmFtZSArICcoXFxcXHN8JCknKS50ZXN0KHRhcmdldC5jbGFzc05hbWUpO1xuICB9XG5cbiAgLy8gVG9nZ2xlIGVsZW1lbnQgY2xhc3NcbiAgcHJpdmF0ZSB0b2dnbGVDbGFzcyhlbGVtOiBhbnksIGVsZW1lbnRDbGFzc05hbWU6IHN0cmluZykge1xuICAgIGxldCBuZXdDbGFzcyA9ICcgJyArIGVsZW0uY2xhc3NOYW1lLnJlcGxhY2UoIC9bXFx0XFxyXFxuXS9nLCAnICcgKSArICcgJztcbiAgICBpZiAodGhpcy5oYXNDbGFzcyhlbGVtLCBlbGVtZW50Q2xhc3NOYW1lKSkge1xuICAgICAgd2hpbGUgKG5ld0NsYXNzLmluZGV4T2YoJyAnICsgZWxlbWVudENsYXNzTmFtZSArICcgJykgPj0gMCApIHtcbiAgICAgICAgbmV3Q2xhc3MgPSBuZXdDbGFzcy5yZXBsYWNlKCAnICcgKyBlbGVtZW50Q2xhc3NOYW1lICsgJyAnICwgJyAnICk7XG4gICAgICB9XG4gICAgICBlbGVtLmNsYXNzTmFtZSA9IG5ld0NsYXNzLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5jbGFzc05hbWUgKz0gJyAnICsgZWxlbWVudENsYXNzTmFtZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICh0aGlzLmhhc0NsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJ3NpZGViYXItb2ZmLWNhbnZhcycpKSB7XG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJ3NpZGViYXItb3BlbmVkJyk7XG4gICAgfVxuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBCcmFuZE1pbmltaXplcl0nXG59KVxuZXhwb3J0IGNsYXNzIEJyYW5kTWluaW1pemVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdicmFuZC1taW5pbWl6ZWQnKTtcbiAgfVxufVxuXG5cbi8qKlxuKiBBbGxvd3MgdGhlIGFzaWRlIHRvIGJlIHRvZ2dsZWQgdmlhIGNsaWNrLlxuKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBBc2lkZU1lbnVUb2dnbGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIEFzaWRlVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdhcHBBc2lkZU1lbnVUb2dnbGVyJykgYnJlYWtwb2ludDogc3RyaW5nO1xuICBwdWJsaWMgYnA7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5icCA9IHRoaXMuYnJlYWtwb2ludDtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgY3NzQ2xhc3M7XG4gICAgdGhpcy5icCA/IGNzc0NsYXNzID0gYGFzaWRlLW1lbnUtJHt0aGlzLmJwfS1zaG93YCA6IGNzc0NsYXNzID0gYXNpZGVNZW51Q3NzQ2xhc3Nlc1swXTtcbiAgICBUb2dnbGVDbGFzc2VzKGNzc0NsYXNzLCBhc2lkZU1lbnVDc3NDbGFzc2VzKTtcbiAgfVxufVxuIl19