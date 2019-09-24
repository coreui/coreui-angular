/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
export class AppSidebarNavItemClassPipe {
    /**
     * @param {?} helper
     */
    constructor(helper) {
        this.helper = helper;
    }
    /**
     * @param {?} item
     * @param {...?} args
     * @return {?}
     */
    transform(item, ...args) {
        /** @type {?} */
        const itemType = this.helper.itemType(item);
        /** @type {?} */
        let itemClass;
        if (['divider', 'title'].includes(itemType)) {
            itemClass = `nav-${itemType}`;
        }
        else if (itemType === 'dropdown') {
            itemClass = 'nav-item nav-dropdown';
        }
        else {
            itemClass = 'nav-item';
        }
        return item.class ? `${itemClass} ${item.class}` : itemClass;
    }
}
AppSidebarNavItemClassPipe.decorators = [
    { type: Pipe, args: [{
                name: 'appSidebarNavItemClass'
            },] }
];
/** @nocollapse */
AppSidebarNavItemClassPipe.ctorParameters = () => [
    { type: SidebarNavHelper }
];
if (false) {
    /** @type {?} */
    AppSidebarNavItemClassPipe.prototype.helper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWl0ZW0tY2xhc3MucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaXRlbS1jbGFzcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUs1RCxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBRXJDLFlBQ1MsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFDOUIsQ0FBQzs7Ozs7O0lBRUosU0FBUyxDQUFDLElBQVMsRUFBRSxHQUFHLElBQVc7O2NBQ3pCLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7O1lBQ3ZDLFNBQVM7UUFDYixJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMzQyxTQUFTLEdBQUcsT0FBTyxRQUFRLEVBQUUsQ0FBQztTQUMvQjthQUFNLElBQUksUUFBUSxLQUFLLFVBQVUsRUFBRTtZQUNsQyxTQUFTLEdBQUcsdUJBQXVCLENBQUU7U0FDdEM7YUFBTTtZQUNMLFNBQVMsR0FBRyxVQUFVLENBQUM7U0FDeEI7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQy9ELENBQUM7OztZQXBCSixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLHdCQUF3QjthQUMvQjs7OztZQUpPLGdCQUFnQjs7OztJQVFwQiw0Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7U2lkZWJhck5hdkhlbHBlcn0gZnJvbSAnLi4vYXBwLXNpZGViYXItbmF2LnNlcnZpY2UnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdhcHBTaWRlYmFyTmF2SXRlbUNsYXNzJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2SXRlbUNsYXNzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBoZWxwZXI6IFNpZGViYXJOYXZIZWxwZXJcbiAgKSB7fVxuXG4gIHRyYW5zZm9ybShpdGVtOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogYW55IHtcbiAgICAgIGNvbnN0IGl0ZW1UeXBlID0gdGhpcy5oZWxwZXIuaXRlbVR5cGUoaXRlbSk7XG4gICAgICBsZXQgaXRlbUNsYXNzO1xuICAgICAgaWYgKFsnZGl2aWRlcicsICd0aXRsZSddLmluY2x1ZGVzKGl0ZW1UeXBlKSkge1xuICAgICAgICBpdGVtQ2xhc3MgPSBgbmF2LSR7aXRlbVR5cGV9YDtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09ICdkcm9wZG93bicpIHtcbiAgICAgICAgaXRlbUNsYXNzID0gJ25hdi1pdGVtIG5hdi1kcm9wZG93bicgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbUNsYXNzID0gJ25hdi1pdGVtJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtLmNsYXNzID8gYCR7aXRlbUNsYXNzfSAke2l0ZW0uY2xhc3N9YCA6IGl0ZW1DbGFzcztcbiAgICB9XG59XG4iXX0=