/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, HostListener, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
var AppSidebarMinimizerComponent = /** @class */ (function () {
    function AppSidebarMinimizerComponent(document, renderer, hostElement) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.role = 'button';
        renderer.addClass(hostElement.nativeElement, 'sidebar-minimizer');
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
        /** @type {?} */
        var body = this.document.body;
        body.classList.contains('sidebar-minimized') ?
            this.renderer.removeClass(body, 'sidebar-minimized') :
            this.renderer.addClass(body, 'sidebar-minimized');
        body.classList.contains('brand-minimized') ?
            this.renderer.removeClass(body, 'brand-minimized') :
            this.renderer.addClass(body, 'brand-minimized');
    };
    /**
     * @return {?}
     */
    AppSidebarMinimizerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    AppSidebarMinimizerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-minimizer, cui-sidebar-minimizer',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    AppSidebarMinimizerComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    AppSidebarMinimizerComponent.propDecorators = {
        role: [{ type: HostBinding, args: ['attr.role',] }],
        toggleOpen: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return AppSidebarMinimizerComponent;
}());
export { AppSidebarMinimizerComponent };
if (false) {
    /** @type {?} */
    AppSidebarMinimizerComponent.prototype.role;
    /**
     * @type {?}
     * @private
     */
    AppSidebarMinimizerComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    AppSidebarMinimizerComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    AppSidebarMinimizerComponent.prototype.hostElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbWluaW1pemVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW1pbmltaXplci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekM7SUFvQkUsc0NBQzRCLFFBQWEsRUFDL0IsUUFBbUIsRUFDbkIsV0FBdUI7UUFGTCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFqQlAsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQW1CeEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7SUFqQkQsaURBQVU7Ozs7SUFEVixVQUNXLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDOztZQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFVRCwrQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkE1QmQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4Q0FBOEM7b0JBQ3hELFFBQVEsRUFBRSxFQUFFO2lCQUNiOzs7O2dEQWtCSSxNQUFNLFNBQUMsUUFBUTtnQkF4QnNELFNBQVM7Z0JBQWhFLFVBQVU7Ozt1QkFTMUIsV0FBVyxTQUFDLFdBQVc7NkJBRXZCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBcUJuQyxtQ0FBQztDQUFBLEFBN0JELElBNkJDO1NBekJZLDRCQUE0Qjs7O0lBRXZDLDRDQUEwQzs7Ozs7SUFleEMsZ0RBQXVDOzs7OztJQUN2QyxnREFBMkI7Ozs7O0lBQzNCLG1EQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbmplY3QsIE9uSW5pdCwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbWluaW1pemVyLCBjdWktc2lkZWJhci1taW5pbWl6ZXInLFxyXG4gIHRlbXBsYXRlOiBgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJvbGUgPSAnYnV0dG9uJztcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgYm9keSA9IHRoaXMuZG9jdW1lbnQuYm9keTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLW1pbmltaXplZCcpID9cclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhib2R5LCAnc2lkZWJhci1taW5pbWl6ZWQnKSA6XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYm9keSwgJ3NpZGViYXItbWluaW1pemVkJyk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5jb250YWlucygnYnJhbmQtbWluaW1pemVkJykgP1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGJvZHksICdicmFuZC1taW5pbWl6ZWQnKSA6XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYm9keSwgJ2JyYW5kLW1pbmltaXplZCcpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2lkZWJhci1taW5pbWl6ZXInKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxufVxyXG4iXX0=