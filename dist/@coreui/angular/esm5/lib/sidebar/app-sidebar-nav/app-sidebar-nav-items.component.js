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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFpRDVEO0lBWUUscUNBQzRCLFFBQWEsRUFDL0IsUUFBbUIsRUFDcEIsTUFBYyxFQUNkLE1BQXdCO1FBSEwsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM5QixDQUFDO0lBWkosc0JBQUksOENBQUs7YUFHVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDO2FBTEQsVUFBVSxLQUFrQjtZQUMxQixJQUFJLENBQUMsTUFBTSxZQUFPLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBWU0sZ0RBQVUsR0FBakI7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDL0Q7SUFDSCxDQUFDOztnREFWRSxNQUFNLFNBQUMsUUFBUTtnQkFDRSxTQUFTO2dCQUNaLE1BQU07Z0JBQ04sZ0JBQWdCOztJQVhqQztRQURDLEtBQUssRUFBRTs7OzREQUdQO0lBUFUsMkJBQTJCO1FBOUN2QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsOENBQThDO1lBQ3hELFFBQVEsRUFBRSwyOUNBMENUO1NBQ0YsQ0FBQztRQWNHLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2lEQUNDLFNBQVM7WUFDWixNQUFNO1lBQ04sZ0JBQWdCO09BaEJ0QiwyQkFBMkIsQ0F3QnZDO0lBQUQsa0NBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXhCWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtTaWRlYmFyTmF2SGVscGVyfSBmcm9tICcuLi9hcHAtc2lkZWJhci1uYXYuc2VydmljZSc7XG5pbXBvcnQge0lOYXZEYXRhfSBmcm9tICcuLi9hcHAtc2lkZWJhci1uYXYnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtaXRlbXMsIGN1aS1zaWRlYmFyLW5hdi1pdGVtcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPlxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiaGVscGVyLml0ZW1UeXBlKGl0ZW0pXCI+XG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtZHJvcGRvd25cbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2Ryb3Bkb3duJ1wiXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgW2NsYXNzLm9wZW5dPVwiaGVscGVyLmlzQWN0aXZlKHJvdXRlciwgaXRlbSlcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2SXRlbUNsYXNzXCJcbiAgICAgICAgICBhcHBOYXZEcm9wZG93blxuICAgICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJvcGVuXCI+XG4gICAgICAgIDwvYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duPlxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWRpdmlkZXJcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2RpdmlkZXInXCJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJpdGVtIHwgYXBwU2lkZWJhck5hdkl0ZW1DbGFzc1wiXG4gICAgICAgICAgW2FwcEh0bWxBdHRyXT1cIml0ZW0uYXR0cmlidXRlc1wiPlxuICAgICAgICA8L2FwcC1zaWRlYmFyLW5hdi1kaXZpZGVyPlxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LXRpdGxlXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIid0aXRsZSdcIlxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2SXRlbUNsYXNzXCJcbiAgICAgICAgICBbYXBwSHRtbEF0dHJdPVwiaXRlbS5hdHRyaWJ1dGVzXCI+XG4gICAgICAgIDwvYXBwLXNpZGViYXItbmF2LXRpdGxlPlxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWxhYmVsXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidsYWJlbCdcIlxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxuICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW1cIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2SXRlbUNsYXNzXCI+XG4gICAgICAgIDwvYXBwLXNpZGViYXItbmF2LWxhYmVsPlxuICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidlbXB0eSdcIj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtbGlua1xuICAgICAgICAgICpuZ1N3aXRjaERlZmF1bHRcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJpdGVtIHwgYXBwU2lkZWJhck5hdkl0ZW1DbGFzc1wiXG4gICAgICAgICAgKGxpbmtDbGljayk9XCJoaWRlTW9iaWxlKClcIlxuICAgICAgICA+XG4gICAgICAgIDwvYXBwLXNpZGViYXItbmF2LWxpbms+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2SXRlbXNDb21wb25lbnQge1xuXG4gIHByb3RlY3RlZCBfaXRlbXM6IElOYXZEYXRhW107XG5cbiAgQElucHV0KClcbiAgc2V0IGl0ZW1zKGl0ZW1zOiAgSU5hdkRhdGFbXSkge1xuICAgIHRoaXMuX2l0ZW1zID0gWy4uLml0ZW1zXTtcbiAgfVxuICBnZXQgaXRlbXMoKTogSU5hdkRhdGFbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlclxuICApIHt9XG5cbiAgcHVibGljIGhpZGVNb2JpbGUoKSB7XG4gICAgaWYgKHRoaXMuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItc2hvdycpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItc2hvdycpO1xuICAgIH1cbiAgfVxufVxuIl19