/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class AppSidebarNavIconPipe {
    /**
     * @param {?} item
     * @param {?=} args
     * @return {?}
     */
    transform(item, args) {
        /** @type {?} */
        const classes = {
            'nav-icon': true
        };
        /** @type {?} */
        const icon = item.icon;
        classes[icon] = !!item.icon;
        return classes;
    }
}
AppSidebarNavIconPipe.decorators = [
    { type: Pipe, args: [{
                name: 'appSidebarNavIcon'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWljb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaWNvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRCxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUFFaEMsU0FBUyxDQUFDLElBQVMsRUFBRSxJQUFVOztjQUN2QixPQUFPLEdBQUc7WUFDZCxVQUFVLEVBQUUsSUFBSTtTQUNqQjs7Y0FDSyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7OztZQVpGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsbUJBQW1CO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdhcHBTaWRlYmFyTmF2SWNvbidcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkljb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKGl0ZW06IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICduYXYtaWNvbic6IHRydWVcbiAgICB9O1xuICAgIGNvbnN0IGljb24gPSBpdGVtLmljb247XG4gICAgY2xhc3Nlc1tpY29uXSA9ICEhaXRlbS5pY29uO1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG59XG4iXX0=