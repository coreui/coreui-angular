/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            }] }
];
/** @nocollapse */
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
    /**
     * @type {?}
     * @private
     */
    AppAsideComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWFzaWRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9hc2lkZS9hcHAtYXNpZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBVWpFLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFLNUIsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBRyxDQUFDOzs7O0lBRXRDLFFBQVE7UUFDTixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBYztRQUNwQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUFFO0lBQ3ZGLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFNBQWtCO1FBQzVCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQUU7SUFDaEcsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxPQUFZO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUc7O2dCQUN2QixRQUFRO1lBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLGNBQWMsSUFBSSxDQUFDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQzs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7O0dBSVQ7YUFDRjs7OztZQVZtQixVQUFVOzs7c0JBWTNCLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzs7O0lBRk4sb0NBQXNCOztJQUN0QixrQ0FBd0I7O0lBQ3hCLHNDQUE0Qjs7Ozs7SUFFaEIsK0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGFzaWRlTWVudUNzc0NsYXNzZXMsIFJlcGxhY2UgfSBmcm9tICcuLy4uL3NoYXJlZC9pbmRleCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1hc2lkZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxhc2lkZSBjbGFzcz1cImFzaWRlLW1lbnVcIj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9hc2lkZT5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBBc2lkZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZGlzcGxheTogYW55O1xyXG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG9mZkNhbnZhczogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBSZXBsYWNlKHRoaXMuZWwpO1xyXG4gICAgdGhpcy5pc0ZpeGVkKHRoaXMuZml4ZWQpO1xyXG4gICAgdGhpcy5kaXNwbGF5QnJlYWtwb2ludCh0aGlzLmRpc3BsYXkpO1xyXG4gIH1cclxuXHJcbiAgaXNGaXhlZChmaXhlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZml4ZWQpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2FzaWRlLW1lbnUtZml4ZWQnKTsgfVxyXG4gIH1cclxuXHJcbiAgaXNPZmZDYW52YXMob2ZmQ2FudmFzOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vZmZDYW52YXMpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2FzaWRlLW1lbnUtb2ZmLWNhbnZhcycpOyB9XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5QnJlYWtwb2ludChkaXNwbGF5OiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc3BsYXkgIT09IGZhbHNlICkge1xyXG4gICAgICBsZXQgY3NzQ2xhc3M7XHJcbiAgICAgIHRoaXMuZGlzcGxheSA/IGNzc0NsYXNzID0gYGFzaWRlLW1lbnUtJHt0aGlzLmRpc3BsYXl9LXNob3dgIDogY3NzQ2xhc3MgPSBhc2lkZU1lbnVDc3NDbGFzc2VzWzBdO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==