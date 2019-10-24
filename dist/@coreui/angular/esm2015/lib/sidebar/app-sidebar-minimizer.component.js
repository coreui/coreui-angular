/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, HostListener, Input } from '@angular/core';
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
    role: [{ type: HostBinding, args: ['attr.role',] }, { type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbWluaW1pemVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW1pbmltaXplci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFNMUQsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQVd2QyxZQUNVLGNBQWlDO1FBQWpDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQVZSLFNBQUksR0FBRyxRQUFRLENBQUM7UUFDWCxlQUFVLEdBQUcsSUFBSSxDQUFDO0lBVXRELENBQUM7Ozs7O0lBUEwsVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4Q0FBOEM7Z0JBQ3hELFFBQVEsRUFBRSxFQUFFO2FBQ2I7Ozs7WUFMUSxpQkFBaUI7OzttQkFRdkIsV0FBVyxTQUFDLFdBQVcsY0FBRyxLQUFLO3lCQUMvQixXQUFXLFNBQUMseUJBQXlCO3lCQUVyQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBSGpDLDRDQUFtRDs7SUFDbkQsa0RBQTBEOzs7OztJQVN4RCxzREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBcHBTaWRlYmFyU2VydmljZSB9IGZyb20gJy4vYXBwLXNpZGViYXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW1pbmltaXplciwgY3VpLXNpZGViYXItbWluaW1pemVyJyxcbiAgdGVtcGxhdGU6IGBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQge1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgQElucHV0KCkgcm9sZSA9ICdidXR0b24nO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpZGViYXItbWluaW1pemVyJykgX21pbmltaXplciA9IHRydWU7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zaWRlYmFyU2VydmljZS50b2dnbGUoe21pbmltaXplOiAndG9nZ2xlJ30pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzaWRlYmFyU2VydmljZTogQXBwU2lkZWJhclNlcnZpY2VcbiAgKSB7IH1cbn1cbiJdfQ==