/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class AppSidebarNavBadgePipe {
    /**
     * @param {?} item
     * @param {?=} args
     * @return {?}
     */
    transform(item, args) {
        /** @type {?} */
        const classes = {
            'badge': true
        };
        /** @type {?} */
        const variant = `badge-${item.badge.variant}`;
        classes[variant] = !!item.badge.variant;
        classes[item.badge.class] = !!item.badge.class;
        return classes;
    }
}
AppSidebarNavBadgePipe.decorators = [
    { type: Pipe, args: [{
                name: 'appSidebarNavBadge'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWJhZGdlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWJhZGdlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQUVqQyxTQUFTLENBQUMsSUFBUyxFQUFFLElBQVU7O2NBQ3ZCLE9BQU8sR0FBRztZQUNkLE9BQU8sRUFBRSxJQUFJO1NBQ2Q7O2NBQ0ssT0FBTyxHQUFHLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7UUFDN0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDL0MsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7O1lBYkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxvQkFBb0I7YUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2FwcFNpZGViYXJOYXZCYWRnZSdcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkJhZGdlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShpdGVtOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICAnYmFkZ2UnOiB0cnVlXG4gICAgfTtcbiAgICBjb25zdCB2YXJpYW50ID0gYGJhZGdlLSR7aXRlbS5iYWRnZS52YXJpYW50fWA7XG4gICAgY2xhc3Nlc1t2YXJpYW50XSA9ICEhaXRlbS5iYWRnZS52YXJpYW50O1xuICAgIGNsYXNzZXNbaXRlbS5iYWRnZS5jbGFzc10gPSAhIWl0ZW0uYmFkZ2UuY2xhc3M7XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxufVxuIl19