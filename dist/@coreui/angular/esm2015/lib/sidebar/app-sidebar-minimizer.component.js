/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, HostListener } from '@angular/core';
import { AppSidebarService } from './app-sidebar.service';
export class AppSidebarMinimizerComponent {
    /**
     * @param {?} sidebarService
     */
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        this.role = 'button';
        this._minimizer = true;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    toggleOpen($event) {
        $event.preventDefault();
        this.sidebarService.toggle({ minimize: 'toggle' });
    }
}
AppSidebarMinimizerComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar-minimizer, cui-sidebar-minimizer',
                template: ``
            }] }
];
/** @nocollapse */
AppSidebarMinimizerComponent.ctorParameters = () => [
    { type: AppSidebarService }
];
AppSidebarMinimizerComponent.propDecorators = {
    role: [{ type: HostBinding, args: ['attr.role',] }],
    _minimizer: [{ type: HostBinding, args: ['class.sidebar-minimizer',] }],
    toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    AppSidebarMinimizerComponent.prototype.role;
    /** @type {?} */
    AppSidebarMinimizerComponent.prototype._minimizer;
    /**
     * @type {?}
     * @private
     */
    AppSidebarMinimizerComponent.prototype.sidebarService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbWluaW1pemVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW1pbmltaXplci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU0xRCxNQUFNLE9BQU8sNEJBQTRCOzs7O0lBV3ZDLFlBQ1UsY0FBaUM7UUFBakMsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBVmpCLFNBQUksR0FBRyxRQUFRLENBQUM7UUFDRixlQUFVLEdBQUcsSUFBSSxDQUFDO0lBVXRELENBQUM7Ozs7O0lBUEwsVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4Q0FBOEM7Z0JBQ3hELFFBQVEsRUFBRSxFQUFFO2FBQ2I7Ozs7WUFMUSxpQkFBaUI7OzttQkFRdkIsV0FBVyxTQUFDLFdBQVc7eUJBQ3ZCLFdBQVcsU0FBQyx5QkFBeUI7eUJBRXJDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFIakMsNENBQTBDOztJQUMxQyxrREFBMEQ7Ozs7O0lBU3hELHNEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuL2FwcC1zaWRlYmFyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1taW5pbWl6ZXIsIGN1aS1zaWRlYmFyLW1pbmltaXplcicsXG4gIHRlbXBsYXRlOiBgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50IHtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJvbGUgPSAnYnV0dG9uJztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaWRlYmFyLW1pbmltaXplcicpIF9taW5pbWl6ZXIgPSB0cnVlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2lkZWJhclNlcnZpY2UudG9nZ2xlKHttaW5pbWl6ZTogJ3RvZ2dsZSd9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2lkZWJhclNlcnZpY2U6IEFwcFNpZGViYXJTZXJ2aWNlXG4gICkgeyB9XG59XG4iXX0=