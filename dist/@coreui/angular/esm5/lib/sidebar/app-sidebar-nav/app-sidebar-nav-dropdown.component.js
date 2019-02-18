/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
var AppSidebarNavDropdownComponent = /** @class */ (function () {
    function AppSidebarNavDropdownComponent(helper) {
        this.helper = helper;
    }
    AppSidebarNavDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-nav-dropdown',
                    template: "\n    <a class=\"nav-link nav-dropdown-toggle\"\n       appNavDropdownToggle\n       [appHtmlAttr]=\"item.attributes\">\n      <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"helper.getIconClass(item)\"></i>\n      <ng-container>{{item.name}}</ng-container>\n      <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"helper.getBadgeClass(item)\">{{ item.badge.text }}</span>\n    </a>\n    <app-sidebar-nav-items\n      class=\"nav-dropdown-items\"\n      [items]=\"item.children\">\n    </app-sidebar-nav-items>\n  ",
                    providers: [SidebarNavHelper],
                    styles: ['.nav-dropdown-toggle { cursor: pointer; }',
                        '.nav-dropdown-items { display: block; }']
                }] }
    ];
    /** @nocollapse */
    AppSidebarNavDropdownComponent.ctorParameters = function () { return [
        { type: SidebarNavHelper }
    ]; };
    AppSidebarNavDropdownComponent.propDecorators = {
        item: [{ type: Input }]
    };
    return AppSidebarNavDropdownComponent;
}());
export { AppSidebarNavDropdownComponent };
if (false) {
    /** @type {?} */
    AppSidebarNavDropdownComponent.prototype.item;
    /** @type {?} */
    AppSidebarNavDropdownComponent.prototype.helper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RDtJQXdCRSx3Q0FDUyxNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM3QixDQUFDOztnQkExQk4sU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFFBQVEsRUFBRSxrZ0JBWVQ7b0JBS0QsU0FBUyxFQUFFLENBQUUsZ0JBQWdCLENBQUU7NkJBSDdCLDJDQUEyQzt3QkFDM0MseUNBQXlDO2lCQUc1Qzs7OztnQkF0Qk8sZ0JBQWdCOzs7dUJBd0JyQixLQUFLOztJQUtSLHFDQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0FOWSw4QkFBOEI7OztJQUN6Qyw4Q0FBbUI7O0lBR2pCLGdEQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGEgY2xhc3M9XCJuYXYtbGluayBuYXYtZHJvcGRvd24tdG9nZ2xlXCJcclxuICAgICAgIGFwcE5hdkRyb3Bkb3duVG9nZ2xlXHJcbiAgICAgICBbYXBwSHRtbEF0dHJdPVwiaXRlbS5hdHRyaWJ1dGVzXCI+XHJcbiAgICAgIDxpICpuZ0lmPVwiaGVscGVyLmhhc0ljb24oaXRlbSlcIiBbbmdDbGFzc109XCJoZWxwZXIuZ2V0SWNvbkNsYXNzKGl0ZW0pXCI+PC9pPlxyXG4gICAgICA8bmctY29udGFpbmVyPnt7aXRlbS5uYW1lfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJoZWxwZXIuaGFzQmFkZ2UoaXRlbSlcIiBbbmdDbGFzc109XCJoZWxwZXIuZ2V0QmFkZ2VDbGFzcyhpdGVtKVwiPnt7IGl0ZW0uYmFkZ2UudGV4dCB9fTwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIDxhcHAtc2lkZWJhci1uYXYtaXRlbXNcclxuICAgICAgY2xhc3M9XCJuYXYtZHJvcGRvd24taXRlbXNcIlxyXG4gICAgICBbaXRlbXNdPVwiaXRlbS5jaGlsZHJlblwiPlxyXG4gICAgPC9hcHAtc2lkZWJhci1uYXYtaXRlbXM+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgICcubmF2LWRyb3Bkb3duLXRvZ2dsZSB7IGN1cnNvcjogcG9pbnRlcjsgfScsXHJcbiAgICAnLm5hdi1kcm9wZG93bi1pdGVtcyB7IGRpc3BsYXk6IGJsb2NrOyB9J1xyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbIFNpZGViYXJOYXZIZWxwZXIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBpdGVtOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlclxyXG4gICkgeyB9XHJcbn1cclxuIl19