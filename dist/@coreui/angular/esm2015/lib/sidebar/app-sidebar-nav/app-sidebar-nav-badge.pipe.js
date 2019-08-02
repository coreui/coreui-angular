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
        return classes;
    }
}
AppSidebarNavBadgePipe.decorators = [
    { type: Pipe, args: [{
                name: 'appSidebarNavBadge'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWJhZGdlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2lkZWJhci9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWJhZGdlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQUVqQyxTQUFTLENBQUMsSUFBUyxFQUFFLElBQVU7O2NBQ3ZCLE9BQU8sR0FBRztZQUNkLE9BQU8sRUFBRSxJQUFJO1NBQ2Q7O2NBQ0ssT0FBTyxHQUFHLFNBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7UUFDN0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7WUFaRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLG9CQUFvQjthQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnYXBwU2lkZWJhck5hdkJhZGdlJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2QmFkZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKGl0ZW06IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICdiYWRnZSc6IHRydWVcbiAgICB9O1xuICAgIGNvbnN0IHZhcmlhbnQgPSBgYmFkZ2UtJHtpdGVtLmJhZGdlLnZhcmlhbnR9YDtcbiAgICBjbGFzc2VzW3ZhcmlhbnRdID0gISFpdGVtLmJhZGdlLnZhcmlhbnQ7XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxufVxuIl19