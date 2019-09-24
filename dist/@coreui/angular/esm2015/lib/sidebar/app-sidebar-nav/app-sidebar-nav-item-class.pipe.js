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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWl0ZW0tY2xhc3MucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaXRlbS1jbGFzcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUs1RCxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBRXJDLFlBQ1MsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFDOUIsQ0FBQzs7Ozs7O0lBRUosU0FBUyxDQUFDLElBQVMsRUFBRSxHQUFHLElBQVc7O2NBQ3pCLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7O1lBQ3ZDLFNBQVM7UUFDYixJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMzQyxTQUFTLEdBQUcsT0FBTyxRQUFRLEVBQUUsQ0FBQztTQUMvQjthQUFNLElBQUksUUFBUSxLQUFLLFVBQVUsRUFBRTtZQUNsQyxTQUFTLEdBQUcsdUJBQXVCLENBQUU7U0FDdEM7YUFBTTtZQUNMLFNBQVMsR0FBRyxVQUFVLENBQUM7U0FDeEI7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQy9ELENBQUM7OztZQXBCSixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLHdCQUF3QjthQUMvQjs7OztZQUpPLGdCQUFnQjs7OztJQVFwQiw0Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnYXBwU2lkZWJhck5hdkl0ZW1DbGFzcydcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZJdGVtQ2xhc3NQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlclxyXG4gICkge31cclxuXHJcbiAgdHJhbnNmb3JtKGl0ZW06IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICBjb25zdCBpdGVtVHlwZSA9IHRoaXMuaGVscGVyLml0ZW1UeXBlKGl0ZW0pO1xyXG4gICAgICBsZXQgaXRlbUNsYXNzO1xyXG4gICAgICBpZiAoWydkaXZpZGVyJywgJ3RpdGxlJ10uaW5jbHVkZXMoaXRlbVR5cGUpKSB7XHJcbiAgICAgICAgaXRlbUNsYXNzID0gYG5hdi0ke2l0ZW1UeXBlfWA7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09ICdkcm9wZG93bicpIHtcclxuICAgICAgICBpdGVtQ2xhc3MgPSAnbmF2LWl0ZW0gbmF2LWRyb3Bkb3duJyA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbUNsYXNzID0gJ25hdi1pdGVtJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaXRlbS5jbGFzcyA/IGAke2l0ZW1DbGFzc30gJHtpdGVtLmNsYXNzfWAgOiBpdGVtQ2xhc3M7XHJcbiAgICB9XHJcbn1cclxuIl19