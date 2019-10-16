/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class AppSidebarNavLinkPipe {
    /**
     * @param {?} item
     * @return {?}
     */
    transform(item) {
        /** @type {?} */
        const classes = { 'nav-link': true };
        /** @type {?} */
        const disabled = item.attributes && item.attributes.disabled;
        classes['disabled'] = disabled;
        classes['btn-link'] = disabled;
        classes[`nav-link-${item.variant}`] = !!item.variant;
        return classes;
    }
}
AppSidebarNavLinkPipe.decorators = [
    { type: Pipe, args: [{
                name: 'appSidebarNavLink'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxpbmsucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGluay5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRCxNQUFNLE9BQU8scUJBQXFCOzs7OztJQUVoQyxTQUFTLENBQUMsSUFBUzs7Y0FFWCxPQUFPLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFOztjQUU5QixRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVE7UUFDNUQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUMvQixPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3JELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7OztZQWRGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsbUJBQW1CO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdhcHBTaWRlYmFyTmF2TGluaydcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkxpbmtQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKGl0ZW06IGFueSk6IGFueSB7XG5cbiAgICBjb25zdCBjbGFzc2VzID0geyAnbmF2LWxpbmsnOiB0cnVlIH07XG5cbiAgICBjb25zdCBkaXNhYmxlZCA9IGl0ZW0uYXR0cmlidXRlcyAmJiBpdGVtLmF0dHJpYnV0ZXMuZGlzYWJsZWQ7XG4gICAgY2xhc3Nlc1snZGlzYWJsZWQnXSA9IGRpc2FibGVkO1xuICAgIGNsYXNzZXNbJ2J0bi1saW5rJ10gPSBkaXNhYmxlZDtcbiAgICBjbGFzc2VzW2BuYXYtbGluay0ke2l0ZW0udmFyaWFudH1gXSA9ICEhaXRlbS52YXJpYW50O1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG59XG4iXX0=