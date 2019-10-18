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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFnRDVELE1BQU0sT0FBTywyQkFBMkI7Ozs7Ozs7SUFZdEMsWUFDNEIsUUFBYSxFQUMvQixRQUFtQixFQUNwQixNQUFjLEVBQ2QsTUFBd0I7UUFITCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzlCLENBQUM7Ozs7O0lBYkosSUFDSSxLQUFLLENBQUMsS0FBaUI7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7O0lBU00sVUFBVTtRQUNmLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztTQUMvRDtJQUNILENBQUM7OztZQXJFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhDQUE4QztnQkFDeEQsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQ1Q7YUFDRjs7Ozs0Q0FjSSxNQUFNLFNBQUMsUUFBUTtZQWpFYyxTQUFTO1lBQ25DLE1BQU07WUFHTixnQkFBZ0I7OztvQkFvRHJCLEtBQUs7Ozs7Ozs7SUFGTiw2Q0FBc0I7Ozs7O0lBV3BCLCtDQUF1Qzs7Ozs7SUFDdkMsK0NBQTJCOztJQUMzQiw2Q0FBcUI7O0lBQ3JCLDZDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3QsIElucHV0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7U2lkZWJhck5hdkhlbHBlcn0gZnJvbSAnLi4vYXBwLXNpZGViYXItbmF2LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtaXRlbXMsIGN1aS1zaWRlYmFyLW5hdi1pdGVtcycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiaGVscGVyLml0ZW1UeXBlKGl0ZW0pXCI+XHJcbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1kcm9wZG93blxyXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidkcm9wZG93bidcIlxyXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXHJcbiAgICAgICAgICBbY2xhc3Mub3Blbl09XCJoZWxwZXIuaXNBY3RpdmUocm91dGVyLCBpdGVtKVwiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJpdGVtIHwgYXBwU2lkZWJhck5hdkl0ZW1DbGFzc1wiXHJcbiAgICAgICAgICBhcHBOYXZEcm9wZG93blxyXG4gICAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cIm9wZW5cIj5cclxuICAgICAgICA8L2FwcC1zaWRlYmFyLW5hdi1kcm9wZG93bj5cclxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWRpdmlkZXJcclxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInZGl2aWRlcidcIlxyXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJpdGVtIHwgYXBwU2lkZWJhck5hdkl0ZW1DbGFzc1wiXHJcbiAgICAgICAgICBbYXBwSHRtbEF0dHJdPVwiaXRlbS5hdHRyaWJ1dGVzXCI+XHJcbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtZGl2aWRlcj5cclxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LXRpdGxlXHJcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ3RpdGxlJ1wiXHJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2SXRlbUNsYXNzXCJcclxuICAgICAgICAgIFthcHBIdG1sQXR0cl09XCJpdGVtLmF0dHJpYnV0ZXNcIj5cclxuICAgICAgICA8L2FwcC1zaWRlYmFyLW5hdi10aXRsZT5cclxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWxhYmVsXHJcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2xhYmVsJ1wiXHJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcclxuICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW1cIlxyXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaXRlbSB8IGFwcFNpZGViYXJOYXZJdGVtQ2xhc3NcIj5cclxuICAgICAgICA8L2FwcC1zaWRlYmFyLW5hdi1sYWJlbD5cclxuICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2VtcHR5J1wiPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtbGlua1xyXG4gICAgICAgICAgKm5nU3dpdGNoRGVmYXVsdFxyXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXHJcbiAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtXCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2SXRlbUNsYXNzXCJcclxuICAgICAgICAgIChsaW5rQ2xpY2spPVwiaGlkZU1vYmlsZSgpXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtbGluaz5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2SXRlbXNDb21wb25lbnQge1xyXG5cclxuICBwcm90ZWN0ZWQgX2l0ZW1zOiBhbnk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGl0ZW1zKGl0ZW1zOiBBcnJheTxhbnk+KSB7XHJcbiAgICB0aGlzLl9pdGVtcyA9IFsuLi5pdGVtc107XHJcbiAgfVxyXG4gIGdldCBpdGVtcygpOiBBcnJheTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtcztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlclxyXG4gICkge31cclxuXHJcbiAgcHVibGljIGhpZGVNb2JpbGUoKSB7XHJcbiAgICBpZiAodGhpcy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1zaG93JykpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdzaWRlYmFyLXNob3cnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19