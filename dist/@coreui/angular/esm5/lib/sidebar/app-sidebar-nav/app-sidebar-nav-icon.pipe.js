import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
var AppSidebarNavIconPipe = /** @class */ (function () {
    function AppSidebarNavIconPipe() {
    }
    AppSidebarNavIconPipe.prototype.transform = function (item, args) {
        var classes = {
            'nav-icon': true
        };
        var icon = item.icon;
        classes[icon] = !!item.icon;
        return classes;
    };
    AppSidebarNavIconPipe = __decorate([
        Pipe({
            name: 'appSidebarNavIcon'
        })
    ], AppSidebarNavIconPipe);
    return AppSidebarNavIconPipe;
}());
export { AppSidebarNavIconPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWljb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaWNvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRDtJQUFBO0lBVUEsQ0FBQztJQVJDLHlDQUFTLEdBQVQsVUFBVSxJQUFTLEVBQUUsSUFBVTtRQUM3QixJQUFNLE9BQU8sR0FBRztZQUNkLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUM7UUFDRixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBVFUscUJBQXFCO1FBSGpDLElBQUksQ0FBQztZQUNKLElBQUksRUFBRSxtQkFBbUI7U0FDMUIsQ0FBQztPQUNXLHFCQUFxQixDQVVqQztJQUFELDRCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdhcHBTaWRlYmFyTmF2SWNvbidcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZJY29uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICB0cmFuc2Zvcm0oaXRlbTogYW55LCBhcmdzPzogYW55KTogYW55IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgICAgICduYXYtaWNvbic6IHRydWVcclxuICAgIH07XHJcbiAgICBjb25zdCBpY29uID0gaXRlbS5pY29uO1xyXG4gICAgY2xhc3Nlc1tpY29uXSA9ICEhaXRlbS5pY29uO1xyXG4gICAgcmV0dXJuIGNsYXNzZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==