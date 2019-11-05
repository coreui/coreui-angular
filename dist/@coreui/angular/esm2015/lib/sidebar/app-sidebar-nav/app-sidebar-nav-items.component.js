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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFpRDVELElBQWEsMkJBQTJCLEdBQXhDLE1BQWEsMkJBQTJCO0lBWXRDLFlBQzRCLFFBQWEsRUFDL0IsUUFBbUIsRUFDcEIsTUFBYyxFQUNkLE1BQXdCO1FBSEwsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM5QixDQUFDO0lBWkosSUFBSSxLQUFLLENBQUMsS0FBa0I7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBU00sVUFBVTtRQUNmLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztTQUMvRDtJQUNILENBQUM7Q0FDRixDQUFBOzs0Q0FYSSxNQUFNLFNBQUMsUUFBUTtZQUNFLFNBQVM7WUFDWixNQUFNO1lBQ04sZ0JBQWdCOztBQVhqQztJQURDLEtBQUssRUFBRTs7O3dEQUdQO0FBUFUsMkJBQTJCO0lBOUN2QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsOENBQThDO1FBQ3hELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMENUO0tBQ0YsQ0FBQztJQWNHLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBOzZDQUNDLFNBQVM7UUFDWixNQUFNO1FBQ04sZ0JBQWdCO0dBaEJ0QiwyQkFBMkIsQ0F3QnZDO1NBeEJZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIElucHV0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcbmltcG9ydCB7SU5hdkRhdGF9IGZyb20gJy4uL2FwcC1zaWRlYmFyLW5hdic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1pdGVtcywgY3VpLXNpZGViYXItbmF2LWl0ZW1zJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCI+XG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJoZWxwZXIuaXRlbVR5cGUoaXRlbSlcIj5cbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1kcm9wZG93blxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInZHJvcGRvd24nXCJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgICAgICBbY2xhc3Mub3Blbl09XCJoZWxwZXIuaXNBY3RpdmUocm91dGVyLCBpdGVtKVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaXRlbSB8IGFwcFNpZGViYXJOYXZJdGVtQ2xhc3NcIlxuICAgICAgICAgIGFwcE5hdkRyb3Bkb3duXG4gICAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cIm9wZW5cIj5cbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtZHJvcGRvd24+XG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtZGl2aWRlclxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInZGl2aWRlcidcIlxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2SXRlbUNsYXNzXCJcbiAgICAgICAgICBbYXBwSHRtbEF0dHJdPVwiaXRlbS5hdHRyaWJ1dGVzXCI+XG4gICAgICAgIDwvYXBwLXNpZGViYXItbmF2LWRpdmlkZXI+XG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtdGl0bGVcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ3RpdGxlJ1wiXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaXRlbSB8IGFwcFNpZGViYXJOYXZJdGVtQ2xhc3NcIlxuICAgICAgICAgIFthcHBIdG1sQXR0cl09XCJpdGVtLmF0dHJpYnV0ZXNcIj5cbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtdGl0bGU+XG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtbGFiZWxcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2xhYmVsJ1wiXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaXRlbSB8IGFwcFNpZGViYXJOYXZJdGVtQ2xhc3NcIj5cbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtbGFiZWw+XG4gICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2VtcHR5J1wiPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1saW5rXG4gICAgICAgICAgKm5nU3dpdGNoRGVmYXVsdFxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxuICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW1cIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2SXRlbUNsYXNzXCJcbiAgICAgICAgICAobGlua0NsaWNrKT1cImhpZGVNb2JpbGUoKVwiXG4gICAgICAgID5cbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtbGluaz5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZJdGVtc0NvbXBvbmVudCB7XG5cbiAgcHJvdGVjdGVkIF9pdGVtczogSU5hdkRhdGFbXTtcblxuICBASW5wdXQoKVxuICBzZXQgaXRlbXMoaXRlbXM6ICBJTmF2RGF0YVtdKSB7XG4gICAgdGhpcy5faXRlbXMgPSBbLi4uaXRlbXNdO1xuICB9XG4gIGdldCBpdGVtcygpOiBJTmF2RGF0YVtdIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyXG4gICkge31cblxuICBwdWJsaWMgaGlkZU1vYmlsZSgpIHtcbiAgICBpZiAodGhpcy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1zaG93JykpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnc2lkZWJhci1zaG93Jyk7XG4gICAgfVxuICB9XG59XG4iXX0=