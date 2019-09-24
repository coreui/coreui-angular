/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "\n    <a class=\"nav-link nav-dropdown-toggle\"\n       appNavDropdownToggle\n       [appHtmlAttr]=\"item.attributes\">\n      <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"item | appSidebarNavIcon\"></i>\n      <ng-container>{{item.name}}</ng-container>\n      <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\n    </a>\n    <app-sidebar-nav-items\n      class=\"nav-dropdown-items\"\n      [items]=\"item.children\">\n    </app-sidebar-nav-items>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RDtJQXdCRSx3Q0FDUyxNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM3QixDQUFDOztnQkExQk4sU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFFBQVEsRUFBRSxnZ0JBWVQ7b0JBS0QsU0FBUyxFQUFFLENBQUUsZ0JBQWdCLENBQUU7NkJBSDdCLDJDQUEyQzt3QkFDM0MseUNBQXlDO2lCQUc1Qzs7OztnQkF0Qk8sZ0JBQWdCOzs7dUJBd0JyQixLQUFLOztJQUtSLHFDQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0FOWSw4QkFBOEI7OztJQUN6Qyw4Q0FBbUI7O0lBR2pCLGdEQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7U2lkZWJhck5hdkhlbHBlcn0gZnJvbSAnLi4vYXBwLXNpZGViYXItbmF2LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtZHJvcGRvd24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgbmF2LWRyb3Bkb3duLXRvZ2dsZVwiXG4gICAgICAgYXBwTmF2RHJvcGRvd25Ub2dnbGVcbiAgICAgICBbYXBwSHRtbEF0dHJdPVwiaXRlbS5hdHRyaWJ1dGVzXCI+XG4gICAgICA8aSAqbmdJZj1cImhlbHBlci5oYXNJY29uKGl0ZW0pXCIgW25nQ2xhc3NdPVwiaXRlbSB8IGFwcFNpZGViYXJOYXZJY29uXCI+PC9pPlxuICAgICAgPG5nLWNvbnRhaW5lcj57e2l0ZW0ubmFtZX19PC9uZy1jb250YWluZXI+XG4gICAgICA8c3BhbiAqbmdJZj1cImhlbHBlci5oYXNCYWRnZShpdGVtKVwiIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2QmFkZ2VcIj57eyBpdGVtLmJhZGdlLnRleHQgfX08L3NwYW4+XG4gICAgPC9hPlxuICAgIDxhcHAtc2lkZWJhci1uYXYtaXRlbXNcbiAgICAgIGNsYXNzPVwibmF2LWRyb3Bkb3duLWl0ZW1zXCJcbiAgICAgIFtpdGVtc109XCJpdGVtLmNoaWxkcmVuXCI+XG4gICAgPC9hcHAtc2lkZWJhci1uYXYtaXRlbXM+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgICcubmF2LWRyb3Bkb3duLXRvZ2dsZSB7IGN1cnNvcjogcG9pbnRlcjsgfScsXG4gICAgJy5uYXYtZHJvcGRvd24taXRlbXMgeyBkaXNwbGF5OiBibG9jazsgfSdcbiAgXSxcbiAgcHJvdmlkZXJzOiBbIFNpZGViYXJOYXZIZWxwZXIgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQge1xuICBASW5wdXQoKSBpdGVtOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlclxuICApIHsgfVxufVxuIl19