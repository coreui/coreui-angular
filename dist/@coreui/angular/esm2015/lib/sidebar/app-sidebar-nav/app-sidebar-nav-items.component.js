/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
export class AppSidebarNavItemsComponent {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} router
     * @param {?} helper
     */
    constructor(document, renderer, router, helper) {
        this.document = document;
        this.renderer = renderer;
        this.router = router;
        this.helper = helper;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    set items(items) {
        this._items = [...items];
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * @return {?}
     */
    hideMobile() {
        if (this.document.body.classList.contains('sidebar-show')) {
            this.renderer.removeClass(this.document.body, 'sidebar-show');
        }
    }
}
AppSidebarNavItemsComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar-nav-items',
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
            }] }
];
/** @nocollapse */
AppSidebarNavItemsComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: Router },
    { type: SidebarNavHelper }
];
AppSidebarNavItemsComponent.propDecorators = {
    items: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AppSidebarNavItemsComponent.prototype._items;
    /**
     * @type {?}
     * @private
     */
    AppSidebarNavItemsComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    AppSidebarNavItemsComponent.prototype.renderer;
    /** @type {?} */
    AppSidebarNavItemsComponent.prototype.router;
    /** @type {?} */
    AppSidebarNavItemsComponent.prototype.helper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFnRDVELE1BQU0sT0FBTywyQkFBMkI7Ozs7Ozs7SUFZdEMsWUFDNEIsUUFBYSxFQUMvQixRQUFtQixFQUNwQixNQUFjLEVBQ2QsTUFBd0I7UUFITCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzlCLENBQUM7Ozs7O0lBYkosSUFDSSxLQUFLLENBQUMsS0FBaUI7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7O0lBU00sVUFBVTtRQUNmLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztTQUMvRDtJQUNILENBQUM7OztZQXJFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQ1Q7YUFDRjs7Ozs0Q0FjSSxNQUFNLFNBQUMsUUFBUTtZQWpFYyxTQUFTO1lBQ25DLE1BQU07WUFHTixnQkFBZ0I7OztvQkFvRHJCLEtBQUs7Ozs7Ozs7SUFGTiw2Q0FBc0I7Ozs7O0lBV3BCLCtDQUF1Qzs7Ozs7SUFDdkMsK0NBQTJCOztJQUMzQiw2Q0FBcUI7O0lBQ3JCLDZDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIElucHV0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWl0ZW1zJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCI+XG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJoZWxwZXIuaXRlbVR5cGUoaXRlbSlcIj5cbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1kcm9wZG93blxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInZHJvcGRvd24nXCJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgICAgICBbY2xhc3Mub3Blbl09XCJoZWxwZXIuaXNBY3RpdmUocm91dGVyLCBpdGVtKVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaXRlbSB8IGFwcFNpZGViYXJOYXZJdGVtQ2xhc3NcIlxuICAgICAgICAgIGFwcE5hdkRyb3Bkb3duXG4gICAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cIm9wZW5cIj5cbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtZHJvcGRvd24+XG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtZGl2aWRlclxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInZGl2aWRlcidcIlxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2SXRlbUNsYXNzXCJcbiAgICAgICAgICBbYXBwSHRtbEF0dHJdPVwiaXRlbS5hdHRyaWJ1dGVzXCI+XG4gICAgICAgIDwvYXBwLXNpZGViYXItbmF2LWRpdmlkZXI+XG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtdGl0bGVcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ3RpdGxlJ1wiXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaXRlbSB8IGFwcFNpZGViYXJOYXZJdGVtQ2xhc3NcIlxuICAgICAgICAgIFthcHBIdG1sQXR0cl09XCJpdGVtLmF0dHJpYnV0ZXNcIj5cbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtdGl0bGU+XG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtbGFiZWxcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2xhYmVsJ1wiXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaXRlbSB8IGFwcFNpZGViYXJOYXZJdGVtQ2xhc3NcIj5cbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtbGFiZWw+XG4gICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2VtcHR5J1wiPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1saW5rXG4gICAgICAgICAgKm5nU3dpdGNoRGVmYXVsdFxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxuICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW1cIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2SXRlbUNsYXNzXCJcbiAgICAgICAgICAobGlua0NsaWNrKT1cImhpZGVNb2JpbGUoKVwiXG4gICAgICAgID5cbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtbGluaz5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZJdGVtc0NvbXBvbmVudCB7XG5cbiAgcHJvdGVjdGVkIF9pdGVtczogYW55O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBpdGVtcyhpdGVtczogQXJyYXk8YW55Pikge1xuICAgIHRoaXMuX2l0ZW1zID0gWy4uLml0ZW1zXTtcbiAgfVxuICBnZXQgaXRlbXMoKTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlclxuICApIHt9XG5cbiAgcHVibGljIGhpZGVNb2JpbGUoKSB7XG4gICAgaWYgKHRoaXMuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXItc2hvdycpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItc2hvdycpO1xuICAgIH1cbiAgfVxufVxuIl19