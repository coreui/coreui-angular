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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxpbmsucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGluay5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRCxNQUFNLE9BQU8scUJBQXFCOzs7OztJQUVoQyxTQUFTLENBQUMsSUFBUzs7Y0FFWCxPQUFPLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFOztjQUU5QixRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVE7UUFDNUQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUMvQixPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3JELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7OztZQWRGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsbUJBQW1CO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdhcHBTaWRlYmFyTmF2TGluaydcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZMaW5rUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICB0cmFuc2Zvcm0oaXRlbTogYW55KTogYW55IHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0geyAnbmF2LWxpbmsnOiB0cnVlIH07XHJcblxyXG4gICAgY29uc3QgZGlzYWJsZWQgPSBpdGVtLmF0dHJpYnV0ZXMgJiYgaXRlbS5hdHRyaWJ1dGVzLmRpc2FibGVkO1xyXG4gICAgY2xhc3Nlc1snZGlzYWJsZWQnXSA9IGRpc2FibGVkO1xyXG4gICAgY2xhc3Nlc1snYnRuLWxpbmsnXSA9IGRpc2FibGVkO1xyXG4gICAgY2xhc3Nlc1tgbmF2LWxpbmstJHtpdGVtLnZhcmlhbnR9YF0gPSAhIWl0ZW0udmFyaWFudDtcclxuICAgIHJldHVybiBjbGFzc2VzO1xyXG4gIH1cclxufVxyXG4iXX0=