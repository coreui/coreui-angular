/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    selector: 'app-sidebar-minimizer',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbWluaW1pemVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW1pbmltaXplci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekM7SUFvQkUsc0NBQzRCLFFBQWEsRUFDL0IsUUFBbUIsRUFDbkIsV0FBdUI7UUFGTCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFqQlAsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQW1CeEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7SUFqQkQsaURBQVU7Ozs7SUFEVixVQUNXLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDOztZQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFVRCwrQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOztnQkE1QmQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSxFQUFFO2lCQUNiOzs7O2dEQWtCSSxNQUFNLFNBQUMsUUFBUTtnQkF4QnNELFNBQVM7Z0JBQWhFLFVBQVU7Ozt1QkFTMUIsV0FBVyxTQUFDLFdBQVc7NkJBRXZCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBcUJuQyxtQ0FBQztDQUFBLEFBN0JELElBNkJDO1NBekJZLDRCQUE0Qjs7O0lBRXZDLDRDQUEwQzs7Ozs7SUFleEMsZ0RBQXVDOzs7OztJQUN2QyxnREFBMkI7Ozs7O0lBQzNCLG1EQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbmplY3QsIE9uSW5pdCwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW1pbmltaXplcicsXG4gIHRlbXBsYXRlOiBgYCxcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSByb2xlID0gJ2J1dHRvbic7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICB0b2dnbGVPcGVuKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuZG9jdW1lbnQuYm9keTtcbiAgICBib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1taW5pbWl6ZWQnKSA/XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGJvZHksICdzaWRlYmFyLW1pbmltaXplZCcpIDpcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYm9keSwgJ3NpZGViYXItbWluaW1pemVkJyk7XG4gICAgYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2JyYW5kLW1pbmltaXplZCcpID9cbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoYm9keSwgJ2JyYW5kLW1pbmltaXplZCcpIDpcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoYm9keSwgJ2JyYW5kLW1pbmltaXplZCcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzaWRlYmFyLW1pbmltaXplcicpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19