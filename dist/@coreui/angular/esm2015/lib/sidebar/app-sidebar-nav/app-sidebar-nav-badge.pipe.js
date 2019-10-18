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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWJhZGdlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWJhZGdlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQUVqQyxTQUFTLENBQUMsSUFBUyxFQUFFLElBQVU7O2NBQ3ZCLE9BQU8sR0FBRztZQUNkLE9BQU8sRUFBRSxJQUFJO1NBQ2Q7O2NBQ0ssT0FBTyxHQUFHLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7UUFDN0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDL0MsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7O1lBYkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxvQkFBb0I7YUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2FwcFNpZGViYXJOYXZCYWRnZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZCYWRnZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKGl0ZW06IGFueSwgYXJncz86IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0ge1xyXG4gICAgICAnYmFkZ2UnOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdmFyaWFudCA9IGBiYWRnZS0ke2l0ZW0uYmFkZ2UudmFyaWFudH1gO1xyXG4gICAgY2xhc3Nlc1t2YXJpYW50XSA9ICEhaXRlbS5iYWRnZS52YXJpYW50O1xyXG4gICAgY2xhc3Nlc1tpdGVtLmJhZGdlLmNsYXNzXSA9ICEhaXRlbS5iYWRnZS5jbGFzcztcclxuICAgIHJldHVybiBjbGFzc2VzO1xyXG4gIH1cclxuXHJcbn1cclxuIl19