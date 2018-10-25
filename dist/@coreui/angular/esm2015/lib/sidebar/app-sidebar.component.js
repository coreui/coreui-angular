/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding } from '@angular/core';
import { sidebarCssClasses } from './../shared';
export class AppSidebarComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.displayBreakpoint(this.display);
        this.isCompact(this.compact);
        this.isFixed(this.fixed);
        this.isMinimized(this.minimized);
        this.isOffCanvas(this.offCanvas);
    }
    /**
     * @param {?} compact
     * @return {?}
     */
    isCompact(compact) {
        if (this.compact) {
            document.querySelector('body').classList.add('sidebar-compact');
        }
    }
    /**
     * @param {?} fixed
     * @return {?}
     */
    isFixed(fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('sidebar-fixed');
        }
    }
    /**
     * @param {?} minimized
     * @return {?}
     */
    isMinimized(minimized) {
        if (this.minimized) {
            document.querySelector('body').classList.add('sidebar-minimized');
        }
    }
    /**
     * @param {?} offCanvas
     * @return {?}
     */
    isOffCanvas(offCanvas) {
        if (this.offCanvas) {
            document.querySelector('body').classList.add('sidebar-off-canvas');
        }
    }
    /**
     * @param {?} fixed
     * @return {?}
     */
    fixedPosition(fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('sidebar-fixed');
        }
    }
    /**
     * @param {?} display
     * @return {?}
     */
    displayBreakpoint(display) {
        if (this.display !== false) {
            /** @type {?} */
            let cssClass;
            this.display ? cssClass = `sidebar-${this.display}-show` : cssClass = sidebarCssClasses[0];
            document.querySelector('body').classList.add(cssClass);
        }
    }
}
AppSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar',
                template: `<ng-content></ng-content>`
            },] },
];
AppSidebarComponent.ctorParameters = () => [];
AppSidebarComponent.propDecorators = {
    compact: [{ type: Input }],
    display: [{ type: Input }],
    fixed: [{ type: Input }],
    minimized: [{ type: Input }],
    offCanvas: [{ type: Input }],
    true: [{ type: HostBinding, args: ['class.sidebar',] }]
};
if (false) {
    /** @type {?} */
    AppSidebarComponent.prototype.compact;
    /** @type {?} */
    AppSidebarComponent.prototype.display;
    /** @type {?} */
    AppSidebarComponent.prototype.fixed;
    /** @type {?} */
    AppSidebarComponent.prototype.minimized;
    /** @type {?} */
    AppSidebarComponent.prototype.offCanvas;
    /** @type {?} */
    AppSidebarComponent.prototype.true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBTWhELE1BQU07SUFTSixnQkFBZSxDQUFDOzs7O0lBRWhCLFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE9BQWdCO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFBQyxDQUFDO0lBQ3hGLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQWM7UUFDcEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFBQyxDQUFDO0lBQ3BGLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFNBQWtCO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFBQyxDQUFDO0lBQzVGLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFNBQWtCO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFBQyxDQUFDO0lBQzdGLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWM7UUFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFBQyxDQUFDO0lBQ3BGLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsT0FBWTtRQUM1QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQU0sQ0FBQyxDQUFDLENBQUM7O2dCQUN4QixRQUFRO1lBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLFdBQVcsSUFBSSxDQUFDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0YsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELENBQUM7SUFDSCxDQUFDOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDOzs7O3NCQUVFLEtBQUs7c0JBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzttQkFFTCxXQUFXLFNBQUMsZUFBZTs7OztJQU41QixzQ0FBMEI7O0lBQzFCLHNDQUFzQjs7SUFDdEIsb0NBQXdCOztJQUN4Qix3Q0FBNEI7O0lBQzVCLHdDQUE0Qjs7SUFFNUIsbUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBzaWRlYmFyQ3NzQ2xhc3NlcyB9IGZyb20gJy4vLi4vc2hhcmVkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXInLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGNvbXBhY3Q6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZGlzcGxheTogYW55O1xyXG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG1pbmltaXplZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBvZmZDYW52YXM6IGJvb2xlYW47XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2lkZWJhcicpIHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmRpc3BsYXlCcmVha3BvaW50KHRoaXMuZGlzcGxheSk7XHJcbiAgICB0aGlzLmlzQ29tcGFjdCh0aGlzLmNvbXBhY3QpO1xyXG4gICAgdGhpcy5pc0ZpeGVkKHRoaXMuZml4ZWQpO1xyXG4gICAgdGhpcy5pc01pbmltaXplZCh0aGlzLm1pbmltaXplZCk7XHJcbiAgICB0aGlzLmlzT2ZmQ2FudmFzKHRoaXMub2ZmQ2FudmFzKTtcclxuICB9XHJcblxyXG4gIGlzQ29tcGFjdChjb21wYWN0OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jb21wYWN0KSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWNvbXBhY3QnKTsgfVxyXG4gIH1cclxuXHJcbiAgaXNGaXhlZChmaXhlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZml4ZWQpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItZml4ZWQnKTsgfVxyXG4gIH1cclxuXHJcbiAgaXNNaW5pbWl6ZWQobWluaW1pemVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5taW5pbWl6ZWQpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItbWluaW1pemVkJyk7IH1cclxuICB9XHJcblxyXG4gIGlzT2ZmQ2FudmFzKG9mZkNhbnZhczogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub2ZmQ2FudmFzKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLW9mZi1jYW52YXMnKTsgfVxyXG4gIH1cclxuXHJcbiAgZml4ZWRQb3NpdGlvbihmaXhlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZml4ZWQpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItZml4ZWQnKTsgfVxyXG4gIH1cclxuXHJcbiAgZGlzcGxheUJyZWFrcG9pbnQoZGlzcGxheTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaXNwbGF5ICE9PSBmYWxzZSApIHtcclxuICAgICAgbGV0IGNzc0NsYXNzO1xyXG4gICAgICB0aGlzLmRpc3BsYXkgPyBjc3NDbGFzcyA9IGBzaWRlYmFyLSR7dGhpcy5kaXNwbGF5fS1zaG93YCA6IGNzc0NsYXNzID0gc2lkZWJhckNzc0NsYXNzZXNbMF07XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19