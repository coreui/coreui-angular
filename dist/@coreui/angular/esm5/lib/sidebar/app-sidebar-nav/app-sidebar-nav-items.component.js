import { __decorate, __metadata, __param, __read, __spread } from "tslib";
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
var AppSidebarNavItemsComponent = /** @class */ (function () {
    function AppSidebarNavItemsComponent(document, renderer, router, helper) {
        this.document = document;
        this.renderer = renderer;
        this.router = router;
        this.helper = helper;
    }
    Object.defineProperty(AppSidebarNavItemsComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = __spread(items);
        },
        enumerable: true,
        configurable: true
    });
    AppSidebarNavItemsComponent.prototype.hideMobile = function () {
        if (this.document.body.classList.contains('sidebar-show')) {
            this.renderer.removeClass(this.document.body, 'sidebar-show');
        }
    };
    AppSidebarNavItemsComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: Router },
        { type: SidebarNavHelper }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], AppSidebarNavItemsComponent.prototype, "items", null);
    AppSidebarNavItemsComponent = __decorate([
        Component({
            selector: 'app-sidebar-nav-items, cui-sidebar-nav-items',
            template: "\n    <ng-container *ngFor=\"let item of items\">\n      <ng-container [ngSwitch]=\"helper.itemType(item)\">\n        <app-sidebar-nav-dropdown\n          *ngSwitchCase=\"'dropdown'\"\n          [item]=\"item\"\n          [class.open]=\"helper.isActive(router, item)\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          appNavDropdown\n          routerLinkActive=\"open\">\n        </app-sidebar-nav-dropdown>\n        <app-sidebar-nav-divider\n          *ngSwitchCase=\"'divider'\"\n          [item]=\"item\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          [appHtmlAttr]=\"item.attributes\">\n        </app-sidebar-nav-divider>\n        <app-sidebar-nav-title\n          *ngSwitchCase=\"'title'\"\n          [item]=\"item\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          [appHtmlAttr]=\"item.attributes\">\n        </app-sidebar-nav-title>\n        <app-sidebar-nav-label\n          *ngSwitchCase=\"'label'\"\n          [item]=\"item\"\n          class=\"nav-item\"\n          [ngClass]=\"item | appSidebarNavItemClass\">\n        </app-sidebar-nav-label>\n        <ng-container\n          *ngSwitchCase=\"'empty'\">\n        </ng-container>\n        <app-sidebar-nav-link\n          *ngSwitchDefault\n          [item]=\"item\"\n          class=\"nav-item\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          (linkClick)=\"hideMobile()\"\n        >\n        </app-sidebar-nav-link>\n      </ng-container>\n    </ng-container>\n  "
        }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object, Renderer2,
            Router,
            SidebarNavHelper])
    ], AppSidebarNavItemsComponent);
    return AppSidebarNavItemsComponent;
}());
export { AppSidebarNavItemsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFpRDVEO0lBWUUscUNBQzRCLFFBQWEsRUFDL0IsUUFBbUIsRUFDcEIsTUFBYyxFQUNkLE1BQXdCO1FBSEwsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM5QixDQUFDO0lBWkosc0JBQUksOENBQUs7YUFHVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDO2FBTEQsVUFBVSxLQUFpQjtZQUN6QixJQUFJLENBQUMsTUFBTSxZQUFPLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBWU0sZ0RBQVUsR0FBakI7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDL0Q7SUFDSCxDQUFDOztnREFWRSxNQUFNLFNBQUMsUUFBUTtnQkFDRSxTQUFTO2dCQUNaLE1BQU07Z0JBQ04sZ0JBQWdCOztJQVhqQztRQURDLEtBQUssRUFBRTs7OzREQUdQO0lBUFUsMkJBQTJCO1FBOUN2QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsOENBQThDO1lBQ3hELFFBQVEsRUFBRSwyOUNBMENUO1NBQ0YsQ0FBQztRQWNHLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2lEQUNDLFNBQVM7WUFDWixNQUFNO1lBQ04sZ0JBQWdCO09BaEJ0QiwyQkFBMkIsQ0F3QnZDO0lBQUQsa0NBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXhCWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcclxuaW1wb3J0IHtJTmF2RGF0YX0gZnJvbSAnLi4vYXBwLXNpZGViYXItbmF2JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWl0ZW1zLCBjdWktc2lkZWJhci1uYXYtaXRlbXMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImhlbHBlci5pdGVtVHlwZShpdGVtKVwiPlxyXG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtZHJvcGRvd25cclxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInZHJvcGRvd24nXCJcclxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxyXG4gICAgICAgICAgW2NsYXNzLm9wZW5dPVwiaGVscGVyLmlzQWN0aXZlKHJvdXRlciwgaXRlbSlcIlxyXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaXRlbSB8IGFwcFNpZGViYXJOYXZJdGVtQ2xhc3NcIlxyXG4gICAgICAgICAgYXBwTmF2RHJvcGRvd25cclxuICAgICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJvcGVuXCI+XHJcbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtZHJvcGRvd24+XHJcbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1kaXZpZGVyXHJcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2RpdmlkZXInXCJcclxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxyXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaXRlbSB8IGFwcFNpZGViYXJOYXZJdGVtQ2xhc3NcIlxyXG4gICAgICAgICAgW2FwcEh0bWxBdHRyXT1cIml0ZW0uYXR0cmlidXRlc1wiPlxyXG4gICAgICAgIDwvYXBwLXNpZGViYXItbmF2LWRpdmlkZXI+XHJcbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi10aXRsZVxyXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIid0aXRsZSdcIlxyXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJpdGVtIHwgYXBwU2lkZWJhck5hdkl0ZW1DbGFzc1wiXHJcbiAgICAgICAgICBbYXBwSHRtbEF0dHJdPVwiaXRlbS5hdHRyaWJ1dGVzXCI+XHJcbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtdGl0bGU+XHJcbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1sYWJlbFxyXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidsYWJlbCdcIlxyXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXHJcbiAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtXCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2SXRlbUNsYXNzXCI+XHJcbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtbGFiZWw+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidlbXB0eSdcIj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWxpbmtcclxuICAgICAgICAgICpuZ1N3aXRjaERlZmF1bHRcclxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxyXG4gICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbVwiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJpdGVtIHwgYXBwU2lkZWJhck5hdkl0ZW1DbGFzc1wiXHJcbiAgICAgICAgICAobGlua0NsaWNrKT1cImhpZGVNb2JpbGUoKVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvYXBwLXNpZGViYXItbmF2LWxpbms+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkl0ZW1zQ29tcG9uZW50IHtcclxuXHJcbiAgcHJvdGVjdGVkIF9pdGVtczogSU5hdkRhdGFbXTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgaXRlbXMoaXRlbXM6IElOYXZEYXRhW10pIHtcclxuICAgIHRoaXMuX2l0ZW1zID0gWy4uLml0ZW1zXTtcclxuICB9XHJcbiAgZ2V0IGl0ZW1zKCk6IElOYXZEYXRhW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyXHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgaGlkZU1vYmlsZSgpIHtcclxuICAgIGlmICh0aGlzLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLXNob3cnKSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItc2hvdycpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=