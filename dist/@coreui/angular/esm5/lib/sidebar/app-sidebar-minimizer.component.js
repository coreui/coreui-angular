/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { AppSidebarService } from './app-sidebar.service';
var AppSidebarMinimizerComponent = /** @class */ (function () {
    function AppSidebarMinimizerComponent(sidebarService) {
        this.sidebarService = sidebarService;
        this.role = 'button';
        this._minimizer = true;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    AppSidebarMinimizerComponent.prototype.toggleOpen = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        this.sidebarService.toggle({ minimize: 'toggle' });
    };
    AppSidebarMinimizerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-minimizer, cui-sidebar-minimizer',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    AppSidebarMinimizerComponent.ctorParameters = function () { return [
        { type: AppSidebarService }
    ]; };
    AppSidebarMinimizerComponent.propDecorators = {
        role: [{ type: HostBinding, args: ['attr.role',] }, { type: Input }],
        _minimizer: [{ type: HostBinding, args: ['class.sidebar-minimizer',] }],
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return AppSidebarMinimizerComponent;
}());
export { AppSidebarMinimizerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbWluaW1pemVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW1pbmltaXplci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQ7SUFlRSxzQ0FDVSxjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFWUixTQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ1gsZUFBVSxHQUFHLElBQUksQ0FBQztJQVV0RCxDQUFDOzs7OztJQVBMLGlEQUFVOzs7O0lBRFYsVUFDVyxNQUFXO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOENBQThDO29CQUN4RCxRQUFRLEVBQUUsRUFBRTtpQkFDYjs7OztnQkFMUSxpQkFBaUI7Ozt1QkFRdkIsV0FBVyxTQUFDLFdBQVcsY0FBRyxLQUFLOzZCQUMvQixXQUFXLFNBQUMseUJBQXlCOzZCQUVyQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQVNuQyxtQ0FBQztDQUFBLEFBbEJELElBa0JDO1NBZFksNEJBQTRCOzs7SUFFdkMsNENBQW1EOztJQUNuRCxrREFBMEQ7Ozs7O0lBU3hELHNEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwcFNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi9hcHAtc2lkZWJhci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbWluaW1pemVyLCBjdWktc2lkZWJhci1taW5pbWl6ZXInLFxuICB0ZW1wbGF0ZTogYGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCB7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSBASW5wdXQoKSByb2xlID0gJ2J1dHRvbic7XG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2lkZWJhci1taW5pbWl6ZXInKSBfbWluaW1pemVyID0gdHJ1ZTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh7bWluaW1pemU6ICd0b2dnbGUnfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNpZGViYXJTZXJ2aWNlOiBBcHBTaWRlYmFyU2VydmljZVxuICApIHsgfVxufVxuIl19