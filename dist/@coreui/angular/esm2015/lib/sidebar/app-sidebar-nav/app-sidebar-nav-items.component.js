import { __decorate, __metadata, __param } from "tslib";
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
let AppSidebarNavItemsComponent = class AppSidebarNavItemsComponent {
    constructor(document, renderer, router, helper) {
        this.document = document;
        this.renderer = renderer;
        this.router = router;
        this.helper = helper;
    }
    set items(items) {
        this._items = [...items];
    }
    get items() {
        return this._items;
    }
    hideMobile() {
        if (this.document.body.classList.contains('sidebar-show')) {
            this.renderer.removeClass(this.document.body, 'sidebar-show');
        }
    }
};
AppSidebarNavItemsComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: Router },
    { type: SidebarNavHelper }
];
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], AppSidebarNavItemsComponent.prototype, "items", null);
AppSidebarNavItemsComponent = __decorate([
    Component({
        selector: 'app-sidebar-nav-items, cui-sidebar-nav-items',
        template: `
    <ng-container *ngFor="let item of items">
      <ng-container [ngSwitch]="helper.itemType(item)">
        <app-sidebar-nav-dropdown
          *ngSwitchCase="'dropdown'"
          [item]="item"
          [class.open]="helper.isActive(router, item)"
          [ngClass]="item | appSidebarNavItemClass"
          appNavDropdown
          routerLinkActive="open">
        </app-sidebar-nav-dropdown>
        <app-sidebar-nav-divider
          *ngSwitchCase="'divider'"
          [item]="item"
          [ngClass]="item | appSidebarNavItemClass"
          [appHtmlAttr]="item.attributes">
        </app-sidebar-nav-divider>
        <app-sidebar-nav-title
          *ngSwitchCase="'title'"
          [item]="item"
          [ngClass]="item | appSidebarNavItemClass"
          [appHtmlAttr]="item.attributes">
        </app-sidebar-nav-title>
        <app-sidebar-nav-label
          *ngSwitchCase="'label'"
          [item]="item"
          class="nav-item"
          [ngClass]="item | appSidebarNavItemClass">
        </app-sidebar-nav-label>
        <ng-container
          *ngSwitchCase="'empty'">
        </ng-container>
        <app-sidebar-nav-link
          *ngSwitchDefault
          [item]="item"
          class="nav-item"
          [ngClass]="item | appSidebarNavItemClass"
          (linkClick)="hideMobile()"
        >
        </app-sidebar-nav-link>
      </ng-container>
    </ng-container>
  `
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2,
        Router,
        SidebarNavHelper])
], AppSidebarNavItemsComponent);
export { AppSidebarNavItemsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFpRDVELElBQWEsMkJBQTJCLEdBQXhDLE1BQWEsMkJBQTJCO0lBWXRDLFlBQzRCLFFBQWEsRUFDL0IsUUFBbUIsRUFDcEIsTUFBYyxFQUNkLE1BQXdCO1FBSEwsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM5QixDQUFDO0lBWkosSUFBSSxLQUFLLENBQUMsS0FBaUI7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBU00sVUFBVTtRQUNmLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztTQUMvRDtJQUNILENBQUM7Q0FDRixDQUFBOzs0Q0FYSSxNQUFNLFNBQUMsUUFBUTtZQUNFLFNBQVM7WUFDWixNQUFNO1lBQ04sZ0JBQWdCOztBQVhqQztJQURDLEtBQUssRUFBRTs7O3dEQUdQO0FBUFUsMkJBQTJCO0lBOUN2QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsOENBQThDO1FBQ3hELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMENUO0tBQ0YsQ0FBQztJQWNHLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBOzZDQUNDLFNBQVM7UUFDWixNQUFNO1FBQ04sZ0JBQWdCO0dBaEJ0QiwyQkFBMkIsQ0F3QnZDO1NBeEJZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIElucHV0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7U2lkZWJhck5hdkhlbHBlcn0gZnJvbSAnLi4vYXBwLXNpZGViYXItbmF2LnNlcnZpY2UnO1xyXG5pbXBvcnQge0lOYXZEYXRhfSBmcm9tICcuLi9hcHAtc2lkZWJhci1uYXYnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtaXRlbXMsIGN1aS1zaWRlYmFyLW5hdi1pdGVtcycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiaGVscGVyLml0ZW1UeXBlKGl0ZW0pXCI+XHJcbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1kcm9wZG93blxyXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidkcm9wZG93bidcIlxyXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXHJcbiAgICAgICAgICBbY2xhc3Mub3Blbl09XCJoZWxwZXIuaXNBY3RpdmUocm91dGVyLCBpdGVtKVwiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJpdGVtIHwgYXBwU2lkZWJhck5hdkl0ZW1DbGFzc1wiXHJcbiAgICAgICAgICBhcHBOYXZEcm9wZG93blxyXG4gICAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cIm9wZW5cIj5cclxuICAgICAgICA8L2FwcC1zaWRlYmFyLW5hdi1kcm9wZG93bj5cclxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWRpdmlkZXJcclxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInZGl2aWRlcidcIlxyXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJpdGVtIHwgYXBwU2lkZWJhck5hdkl0ZW1DbGFzc1wiXHJcbiAgICAgICAgICBbYXBwSHRtbEF0dHJdPVwiaXRlbS5hdHRyaWJ1dGVzXCI+XHJcbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtZGl2aWRlcj5cclxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LXRpdGxlXHJcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ3RpdGxlJ1wiXHJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2SXRlbUNsYXNzXCJcclxuICAgICAgICAgIFthcHBIdG1sQXR0cl09XCJpdGVtLmF0dHJpYnV0ZXNcIj5cclxuICAgICAgICA8L2FwcC1zaWRlYmFyLW5hdi10aXRsZT5cclxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWxhYmVsXHJcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2xhYmVsJ1wiXHJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcclxuICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW1cIlxyXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaXRlbSB8IGFwcFNpZGViYXJOYXZJdGVtQ2xhc3NcIj5cclxuICAgICAgICA8L2FwcC1zaWRlYmFyLW5hdi1sYWJlbD5cclxuICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2VtcHR5J1wiPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtbGlua1xyXG4gICAgICAgICAgKm5nU3dpdGNoRGVmYXVsdFxyXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXHJcbiAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtXCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2SXRlbUNsYXNzXCJcclxuICAgICAgICAgIChsaW5rQ2xpY2spPVwiaGlkZU1vYmlsZSgpXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtbGluaz5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2SXRlbXNDb21wb25lbnQge1xyXG5cclxuICBwcm90ZWN0ZWQgX2l0ZW1zOiBJTmF2RGF0YVtdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBpdGVtcyhpdGVtczogSU5hdkRhdGFbXSkge1xyXG4gICAgdGhpcy5faXRlbXMgPSBbLi4uaXRlbXNdO1xyXG4gIH1cclxuICBnZXQgaXRlbXMoKTogSU5hdkRhdGFbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcclxuICAgIHB1YmxpYyBoZWxwZXI6IFNpZGViYXJOYXZIZWxwZXJcclxuICApIHt9XHJcblxyXG4gIHB1YmxpYyBoaWRlTW9iaWxlKCkge1xyXG4gICAgaWYgKHRoaXMuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItc2hvdycpKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnc2lkZWJhci1zaG93Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==