import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
var AppSidebarNavDropdownComponent = /** @class */ (function () {
    function AppSidebarNavDropdownComponent(helper) {
        this.helper = helper;
    }
    AppSidebarNavDropdownComponent.ctorParameters = function () { return [
        { type: SidebarNavHelper }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AppSidebarNavDropdownComponent.prototype, "item", void 0);
    AppSidebarNavDropdownComponent = __decorate([
        Component({
            selector: 'app-sidebar-nav-dropdown, cui-sidebar-nav-dropdown',
            template: "\n    <a class=\"nav-link nav-dropdown-toggle\"\n       appNavDropdownToggle\n       [appHtmlAttr]=\"item.attributes\">\n      <i *ngIf=\"helper.hasIcon(item)\" [ngClass]=\"item | appSidebarNavIcon\"></i>\n      <ng-container>{{item.name}}</ng-container>\n      <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | appSidebarNavBadge\">{{ item.badge.text }}</span>\n    </a>\n    <app-sidebar-nav-items\n      class=\"nav-dropdown-items\"\n      [items]=\"item.children\">\n    </app-sidebar-nav-items>\n  ",
            providers: [SidebarNavHelper],
            styles: ['.nav-dropdown-toggle { cursor: pointer; }',
                '.nav-dropdown-items { display: block; }']
        }),
        __metadata("design:paramtypes", [SidebarNavHelper])
    ], AppSidebarNavDropdownComponent);
    return AppSidebarNavDropdownComponent;
}());
export { AppSidebarNavDropdownComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQXVCNUQ7SUFHRSx3Q0FDUyxNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM3QixDQUFDOztnQkFEWSxnQkFBZ0I7O0lBSHhCO1FBQVIsS0FBSyxFQUFFOztnRUFBVztJQURSLDhCQUE4QjtRQXJCMUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9EQUFvRDtZQUM5RCxRQUFRLEVBQUUsZ2dCQVlUO1lBS0QsU0FBUyxFQUFFLENBQUUsZ0JBQWdCLENBQUU7cUJBSDdCLDJDQUEyQztnQkFDM0MseUNBQXlDO1NBRzVDLENBQUM7eUNBS2lCLGdCQUFnQjtPQUp0Qiw4QkFBOEIsQ0FNMUM7SUFBRCxxQ0FBQztDQUFBLEFBTkQsSUFNQztTQU5ZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duLCBjdWktc2lkZWJhci1uYXYtZHJvcGRvd24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YSBjbGFzcz1cIm5hdi1saW5rIG5hdi1kcm9wZG93bi10b2dnbGVcIlxyXG4gICAgICAgYXBwTmF2RHJvcGRvd25Ub2dnbGVcclxuICAgICAgIFthcHBIdG1sQXR0cl09XCJpdGVtLmF0dHJpYnV0ZXNcIj5cclxuICAgICAgPGkgKm5nSWY9XCJoZWxwZXIuaGFzSWNvbihpdGVtKVwiIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2SWNvblwiPjwvaT5cclxuICAgICAgPG5nLWNvbnRhaW5lcj57e2l0ZW0ubmFtZX19PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwiaGVscGVyLmhhc0JhZGdlKGl0ZW0pXCIgW25nQ2xhc3NdPVwiaXRlbSB8IGFwcFNpZGViYXJOYXZCYWRnZVwiPnt7IGl0ZW0uYmFkZ2UudGV4dCB9fTwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIDxhcHAtc2lkZWJhci1uYXYtaXRlbXNcclxuICAgICAgY2xhc3M9XCJuYXYtZHJvcGRvd24taXRlbXNcIlxyXG4gICAgICBbaXRlbXNdPVwiaXRlbS5jaGlsZHJlblwiPlxyXG4gICAgPC9hcHAtc2lkZWJhci1uYXYtaXRlbXM+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgICcubmF2LWRyb3Bkb3duLXRvZ2dsZSB7IGN1cnNvcjogcG9pbnRlcjsgfScsXHJcbiAgICAnLm5hdi1kcm9wZG93bi1pdGVtcyB7IGRpc3BsYXk6IGJsb2NrOyB9J1xyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbIFNpZGViYXJOYXZIZWxwZXIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBpdGVtOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlclxyXG4gICkgeyB9XHJcbn1cclxuIl19