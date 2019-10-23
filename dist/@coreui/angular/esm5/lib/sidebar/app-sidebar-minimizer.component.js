/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, HostListener } from '@angular/core';
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
        role: [{ type: HostBinding, args: ['attr.role',] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbWluaW1pemVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW1pbmltaXplci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRDtJQWVFLHNDQUNVLGNBQWlDO1FBQWpDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQVZqQixTQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ0YsZUFBVSxHQUFHLElBQUksQ0FBQztJQVV0RCxDQUFDOzs7OztJQVBMLGlEQUFVOzs7O0lBRFYsVUFDVyxNQUFXO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOENBQThDO29CQUN4RCxRQUFRLEVBQUUsRUFBRTtpQkFDYjs7OztnQkFMUSxpQkFBaUI7Ozt1QkFRdkIsV0FBVyxTQUFDLFdBQVc7NkJBQ3ZCLFdBQVcsU0FBQyx5QkFBeUI7NkJBRXJDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBU25DLG1DQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FkWSw0QkFBNEI7OztJQUV2Qyw0Q0FBMEM7O0lBQzFDLGtEQUEwRDs7Ozs7SUFTeEQsc0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBcHBTaWRlYmFyU2VydmljZSB9IGZyb20gJy4vYXBwLXNpZGViYXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW1pbmltaXplciwgY3VpLXNpZGViYXItbWluaW1pemVyJyxcbiAgdGVtcGxhdGU6IGBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQge1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZSA9ICdidXR0b24nO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpZGViYXItbWluaW1pemVyJykgX21pbmltaXplciA9IHRydWU7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zaWRlYmFyU2VydmljZS50b2dnbGUoe21pbmltaXplOiAndG9nZ2xlJ30pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzaWRlYmFyU2VydmljZTogQXBwU2lkZWJhclNlcnZpY2VcbiAgKSB7IH1cbn1cbiJdfQ==