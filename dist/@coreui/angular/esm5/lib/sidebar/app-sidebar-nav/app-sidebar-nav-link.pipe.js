import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var AppSidebarNavLinkPipe = /** @class */ (function () {
    function AppSidebarNavLinkPipe() {
    }
    AppSidebarNavLinkPipe.prototype.transform = function (item) {
        var classes = { 'nav-link': true };
        var disabled = item.attributes && item.attributes.disabled;
        classes['disabled'] = disabled;
        classes['btn-link'] = disabled;
        classes["nav-link-" + item.variant] = !!item.variant;
        return classes;
    };
    AppSidebarNavLinkPipe = __decorate([
        Pipe({
            name: 'appSidebarNavLink'
        })
    ], AppSidebarNavLinkPipe);
    return AppSidebarNavLinkPipe;
}());
export { AppSidebarNavLinkPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWxpbmsucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGluay5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRDtJQUFBO0lBWUEsQ0FBQztJQVZDLHlDQUFTLEdBQVQsVUFBVSxJQUFTO1FBRWpCLElBQU0sT0FBTyxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDO1FBRXJDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDN0QsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUMvQixPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxjQUFZLElBQUksQ0FBQyxPQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBWFUscUJBQXFCO1FBSGpDLElBQUksQ0FBQztZQUNKLElBQUksRUFBRSxtQkFBbUI7U0FDMUIsQ0FBQztPQUNXLHFCQUFxQixDQVlqQztJQUFELDRCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdhcHBTaWRlYmFyTmF2TGluaydcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZMaW5rUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICB0cmFuc2Zvcm0oaXRlbTogYW55KTogYW55IHtcclxuXHJcbiAgICBjb25zdCBjbGFzc2VzID0geyAnbmF2LWxpbmsnOiB0cnVlIH07XHJcblxyXG4gICAgY29uc3QgZGlzYWJsZWQgPSBpdGVtLmF0dHJpYnV0ZXMgJiYgaXRlbS5hdHRyaWJ1dGVzLmRpc2FibGVkO1xyXG4gICAgY2xhc3Nlc1snZGlzYWJsZWQnXSA9IGRpc2FibGVkO1xyXG4gICAgY2xhc3Nlc1snYnRuLWxpbmsnXSA9IGRpc2FibGVkO1xyXG4gICAgY2xhc3Nlc1tgbmF2LWxpbmstJHtpdGVtLnZhcmlhbnR9YF0gPSAhIWl0ZW0udmFyaWFudDtcclxuICAgIHJldHVybiBjbGFzc2VzO1xyXG4gIH1cclxufVxyXG4iXX0=