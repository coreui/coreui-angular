/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { Replace } from './../shared';
export class AppFooterComponent {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        document.body.classList.remove('footer-fixed');
    }
    /**
     * @param {?} fixed
     * @return {?}
     */
    isFixed(fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('footer-fixed');
        }
    }
}
AppFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-footer',
                template: `
    <footer class="app-footer">
      <ng-content></ng-content>
    </footer>
  `
            }] }
];
/** @nocollapse */
AppFooterComponent.ctorParameters = () => [
    { type: ElementRef }
];
AppFooterComponent.propDecorators = {
    fixed: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AppFooterComponent.prototype.fixed;
    /**
     * @type {?}
     * @private
     */
    AppFooterComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZm9vdGVyL2FwcC1mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFVdEMsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUc3QixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFHLENBQUM7Ozs7SUFFdEMsUUFBUTtRQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBYztRQUNwQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7U0FBRTtJQUNuRixDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7R0FJVDthQUNGOzs7O1lBVm1CLFVBQVU7OztvQkFZM0IsS0FBSzs7OztJQUFOLG1DQUF3Qjs7Ozs7SUFFWixnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGFjZSB9IGZyb20gJy4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZvb3RlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGZvb3RlciBjbGFzcz1cImFwcC1mb290ZXJcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Zvb3Rlcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgICB0aGlzLmlzRml4ZWQodGhpcy5maXhlZCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvb3Rlci1maXhlZCcpO1xuICB9XG5cbiAgaXNGaXhlZChmaXhlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpeGVkKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdmb290ZXItZml4ZWQnKTsgfVxuICB9XG59XG4iXX0=