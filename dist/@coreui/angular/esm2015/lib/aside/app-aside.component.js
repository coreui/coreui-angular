/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { asideMenuCssClasses, Replace } from './../shared/index';
export class AppAsideComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        Replace(this.el);
        this.isFixed(this.fixed);
        this.displayBreakpoint(this.display);
    }
    /**
     * @param {?} fixed
     * @return {?}
     */
    isFixed(fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('aside-menu-fixed');
        }
    }
    /**
     * @param {?} offCanvas
     * @return {?}
     */
    isOffCanvas(offCanvas) {
        if (this.offCanvas) {
            document.querySelector('body').classList.add('aside-menu-off-canvas');
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
            this.display ? cssClass = `aside-menu-${this.display}-show` : cssClass = asideMenuCssClasses[0];
            document.querySelector('body').classList.add(cssClass);
        }
    }
}
AppAsideComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-aside',
                template: `
    <aside class="aside-menu">
      <ng-content></ng-content>
    </aside>
  `
            },] },
];
AppAsideComponent.ctorParameters = () => [
    { type: ElementRef }
];
AppAsideComponent.propDecorators = {
    display: [{ type: Input }],
    fixed: [{ type: Input }],
    offCanvas: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AppAsideComponent.prototype.display;
    /** @type {?} */
    AppAsideComponent.prototype.fixed;
    /** @type {?} */
    AppAsideComponent.prototype.offCanvas;
    /** @type {?} */
    AppAsideComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWFzaWRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9hc2lkZS9hcHAtYXNpZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBVWpFLE1BQU07Ozs7SUFLSixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFHLENBQUM7Ozs7SUFFdEMsUUFBUTtRQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxLQUFjO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFBQyxDQUFDO0lBQ3ZGLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFNBQWtCO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFBQyxDQUFDO0lBQ2hHLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsT0FBWTtRQUM1QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQU0sQ0FBQyxDQUFDLENBQUM7O2dCQUN4QixRQUFRO1lBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLGNBQWMsSUFBSSxDQUFDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELENBQUM7SUFDSCxDQUFDOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7R0FJVDthQUNGOzs7WUFWbUIsVUFBVTs7O3NCQVkzQixLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSzs7OztJQUZOLG9DQUFzQjs7SUFDdEIsa0NBQXdCOztJQUN4QixzQ0FBNEI7O0lBRWhCLCtCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBhc2lkZU1lbnVDc3NDbGFzc2VzLCBSZXBsYWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQvaW5kZXgnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYXNpZGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YXNpZGUgY2xhc3M9XCJhc2lkZS1tZW51XCI+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvYXNpZGU+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQXNpZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGRpc3BsYXk6IGFueTtcclxuICBASW5wdXQoKSBmaXhlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBvZmZDYW52YXM6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcclxuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcclxuICAgIHRoaXMuZGlzcGxheUJyZWFrcG9pbnQodGhpcy5kaXNwbGF5KTtcclxuICB9XHJcblxyXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmZpeGVkKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdhc2lkZS1tZW51LWZpeGVkJyk7IH1cclxuICB9XHJcblxyXG4gIGlzT2ZmQ2FudmFzKG9mZkNhbnZhczogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub2ZmQ2FudmFzKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdhc2lkZS1tZW51LW9mZi1jYW52YXMnKTsgfVxyXG4gIH1cclxuXHJcbiAgZGlzcGxheUJyZWFrcG9pbnQoZGlzcGxheTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaXNwbGF5ICE9PSBmYWxzZSApIHtcclxuICAgICAgbGV0IGNzc0NsYXNzO1xyXG4gICAgICB0aGlzLmRpc3BsYXkgPyBjc3NDbGFzcyA9IGBhc2lkZS1tZW51LSR7dGhpcy5kaXNwbGF5fS1zaG93YCA6IGNzc0NsYXNzID0gYXNpZGVNZW51Q3NzQ2xhc3Nlc1swXTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=