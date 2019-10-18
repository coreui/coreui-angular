/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        set: /**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            this._items = tslib_1.__spread(items);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AppSidebarNavItemsComponent.prototype.hideMobile = /**
     * @return {?}
     */
    function () {
        if (this.document.body.classList.contains('sidebar-show')) {
            this.renderer.removeClass(this.document.body, 'sidebar-show');
        }
    };
    AppSidebarNavItemsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-nav-items, cui-sidebar-nav-items',
                    template: "\n    <ng-container *ngFor=\"let item of items\">\n      <ng-container [ngSwitch]=\"helper.itemType(item)\">\n        <app-sidebar-nav-dropdown\n          *ngSwitchCase=\"'dropdown'\"\n          [item]=\"item\"\n          [class.open]=\"helper.isActive(router, item)\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          appNavDropdown\n          routerLinkActive=\"open\">\n        </app-sidebar-nav-dropdown>\n        <app-sidebar-nav-divider\n          *ngSwitchCase=\"'divider'\"\n          [item]=\"item\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          [appHtmlAttr]=\"item.attributes\">\n        </app-sidebar-nav-divider>\n        <app-sidebar-nav-title\n          *ngSwitchCase=\"'title'\"\n          [item]=\"item\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          [appHtmlAttr]=\"item.attributes\">\n        </app-sidebar-nav-title>\n        <app-sidebar-nav-label\n          *ngSwitchCase=\"'label'\"\n          [item]=\"item\"\n          class=\"nav-item\"\n          [ngClass]=\"item | appSidebarNavItemClass\">\n        </app-sidebar-nav-label>\n        <ng-container\n          *ngSwitchCase=\"'empty'\">\n        </ng-container>\n        <app-sidebar-nav-link\n          *ngSwitchDefault\n          [item]=\"item\"\n          class=\"nav-item\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          (linkClick)=\"hideMobile()\"\n        >\n        </app-sidebar-nav-link>\n      </ng-container>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    AppSidebarNavItemsComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: Router },
        { type: SidebarNavHelper }
    ]; };
    AppSidebarNavItemsComponent.propDecorators = {
        items: [{ type: Input }]
    };
    return AppSidebarNavItemsComponent;
}());
export { AppSidebarNavItemsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRTVEO0lBMERFLHFDQUM0QixRQUFhLEVBQy9CLFFBQW1CLEVBQ3BCLE1BQWMsRUFDZCxNQUF3QjtRQUhMLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFDOUIsQ0FBQztJQWJKLHNCQUNJLDhDQUFLOzs7O1FBR1Q7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFORCxVQUNVLEtBQWlCO1lBQ3pCLElBQUksQ0FBQyxNQUFNLG9CQUFPLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQUFBOzs7O0lBWU0sZ0RBQVU7OztJQUFqQjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztTQUMvRDtJQUNILENBQUM7O2dCQXJFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDhDQUE4QztvQkFDeEQsUUFBUSxFQUFFLDI5Q0EwQ1Q7aUJBQ0Y7Ozs7Z0RBY0ksTUFBTSxTQUFDLFFBQVE7Z0JBakVjLFNBQVM7Z0JBQ25DLE1BQU07Z0JBR04sZ0JBQWdCOzs7d0JBb0RyQixLQUFLOztJQW9CUixrQ0FBQztDQUFBLEFBdEVELElBc0VDO1NBeEJZLDJCQUEyQjs7Ozs7O0lBRXRDLDZDQUFzQjs7Ozs7SUFXcEIsK0NBQXVDOzs7OztJQUN2QywrQ0FBMkI7O0lBQzNCLDZDQUFxQjs7SUFDckIsNkNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHtTaWRlYmFyTmF2SGVscGVyfSBmcm9tICcuLi9hcHAtc2lkZWJhci1uYXYuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlYmFyLW5hdi1pdGVtcywgY3VpLXNpZGViYXItbmF2LWl0ZW1zJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiPlxyXG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJoZWxwZXIuaXRlbVR5cGUoaXRlbSlcIj5cclxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWRyb3Bkb3duXHJcbiAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2Ryb3Bkb3duJ1wiXHJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcclxuICAgICAgICAgIFtjbGFzcy5vcGVuXT1cImhlbHBlci5pc0FjdGl2ZShyb3V0ZXIsIGl0ZW0pXCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2SXRlbUNsYXNzXCJcclxuICAgICAgICAgIGFwcE5hdkRyb3Bkb3duXHJcbiAgICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwib3BlblwiPlxyXG4gICAgICAgIDwvYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duPlxyXG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtZGl2aWRlclxyXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidkaXZpZGVyJ1wiXHJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2SXRlbUNsYXNzXCJcclxuICAgICAgICAgIFthcHBIdG1sQXR0cl09XCJpdGVtLmF0dHJpYnV0ZXNcIj5cclxuICAgICAgICA8L2FwcC1zaWRlYmFyLW5hdi1kaXZpZGVyPlxyXG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtdGl0bGVcclxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCIndGl0bGUnXCJcclxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxyXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaXRlbSB8IGFwcFNpZGViYXJOYXZJdGVtQ2xhc3NcIlxyXG4gICAgICAgICAgW2FwcEh0bWxBdHRyXT1cIml0ZW0uYXR0cmlidXRlc1wiPlxyXG4gICAgICAgIDwvYXBwLXNpZGViYXItbmF2LXRpdGxlPlxyXG4gICAgICAgIDxhcHAtc2lkZWJhci1uYXYtbGFiZWxcclxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInbGFiZWwnXCJcclxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxyXG4gICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbVwiXHJcbiAgICAgICAgICBbbmdDbGFzc109XCJpdGVtIHwgYXBwU2lkZWJhck5hdkl0ZW1DbGFzc1wiPlxyXG4gICAgICAgIDwvYXBwLXNpZGViYXItbmF2LWxhYmVsPlxyXG4gICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInZW1wdHknXCI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1saW5rXHJcbiAgICAgICAgICAqbmdTd2l0Y2hEZWZhdWx0XHJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcclxuICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW1cIlxyXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaXRlbSB8IGFwcFNpZGViYXJOYXZJdGVtQ2xhc3NcIlxyXG4gICAgICAgICAgKGxpbmtDbGljayk9XCJoaWRlTW9iaWxlKClcIlxyXG4gICAgICAgID5cclxuICAgICAgICA8L2FwcC1zaWRlYmFyLW5hdi1saW5rPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJOYXZJdGVtc0NvbXBvbmVudCB7XHJcblxyXG4gIHByb3RlY3RlZCBfaXRlbXM6IGFueTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgaXRlbXMoaXRlbXM6IEFycmF5PGFueT4pIHtcclxuICAgIHRoaXMuX2l0ZW1zID0gWy4uLml0ZW1zXTtcclxuICB9XHJcbiAgZ2V0IGl0ZW1zKCk6IEFycmF5PGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyXHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgaGlkZU1vYmlsZSgpIHtcclxuICAgIGlmICh0aGlzLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLXNob3cnKSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItc2hvdycpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=