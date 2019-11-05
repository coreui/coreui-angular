import { __decorate, __metadata } from "tslib";
import { Component, HostBinding } from '@angular/core';
var AppSidebarHeaderComponent = /** @class */ (function () {
    function AppSidebarHeaderComponent() {
        this._sidebarHeader = true;
    }
    __decorate([
        HostBinding('class.sidebar-header'),
        __metadata("design:type", Object)
    ], AppSidebarHeaderComponent.prototype, "_sidebarHeader", void 0);
    AppSidebarHeaderComponent = __decorate([
        Component({
            selector: 'app-sidebar-header, cui-sidebar-header',
            template: "<ng-content></ng-content>"
        }),
        __metadata("design:paramtypes", [])
    ], AppSidebarHeaderComponent);
    return AppSidebarHeaderComponent;
}());
export { AppSidebarHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBTXJEO0lBSUU7UUFGcUMsbUJBQWMsR0FBRyxJQUFJLENBQUM7SUFFM0MsQ0FBQztJQUZvQjtRQUFwQyxXQUFXLENBQUMsc0JBQXNCLENBQUM7O3FFQUF1QjtJQUZoRCx5QkFBeUI7UUFKckMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdDQUF3QztZQUNsRCxRQUFRLEVBQUUsMkJBQTJCO1NBQ3RDLENBQUM7O09BQ1cseUJBQXlCLENBS3JDO0lBQUQsZ0NBQUM7Q0FBQSxBQUxELElBS0M7U0FMWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSG9zdEJpbmRpbmd9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1oZWFkZXIsIGN1aS1zaWRlYmFyLWhlYWRlcicsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhckhlYWRlckNvbXBvbmVudCB7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2lkZWJhci1oZWFkZXInKSBfc2lkZWJhckhlYWRlciA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcbn1cclxuIl19