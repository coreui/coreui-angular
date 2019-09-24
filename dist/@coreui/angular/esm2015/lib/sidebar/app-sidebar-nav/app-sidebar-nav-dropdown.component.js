/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
export class AppSidebarNavDropdownComponent {
    /**
     * @param {?} helper
     */
    constructor(helper) {
        this.helper = helper;
    }
}
AppSidebarNavDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-sidebar-nav-dropdown',
                template: `
    <a class="nav-link nav-dropdown-toggle"
       appNavDropdownToggle
       [appHtmlAttr]="item.attributes">
      <i *ngIf="helper.hasIcon(item)" [ngClass]="item | appSidebarNavIcon"></i>
      <ng-container>{{item.name}}</ng-container>
      <span *ngIf="helper.hasBadge(item)" [ngClass]="item | appSidebarNavBadge">{{ item.badge.text }}</span>
    </a>
    <app-sidebar-nav-items
      class="nav-dropdown-items"
      [items]="item.children">
    </app-sidebar-nav-items>
  `,
                providers: [SidebarNavHelper],
                styles: ['.nav-dropdown-toggle { cursor: pointer; }',
                    '.nav-dropdown-items { display: block; }']
            }] }
];
/** @nocollapse */
AppSidebarNavDropdownComponent.ctorParameters = () => [
    { type: SidebarNavHelper }
];
AppSidebarNavDropdownComponent.propDecorators = {
    item: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AppSidebarNavDropdownComponent.prototype.item;
    /** @type {?} */
    AppSidebarNavDropdownComponent.prototype.helper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQXVCNUQsTUFBTSxPQUFPLDhCQUE4Qjs7OztJQUd6QyxZQUNTLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzdCLENBQUM7OztZQTFCTixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7R0FZVDtnQkFLRCxTQUFTLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTt5QkFIN0IsMkNBQTJDO29CQUMzQyx5Q0FBeUM7YUFHNUM7Ozs7WUF0Qk8sZ0JBQWdCOzs7bUJBd0JyQixLQUFLOzs7O0lBQU4sOENBQW1COztJQUdqQixnREFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YSBjbGFzcz1cIm5hdi1saW5rIG5hdi1kcm9wZG93bi10b2dnbGVcIlxuICAgICAgIGFwcE5hdkRyb3Bkb3duVG9nZ2xlXG4gICAgICAgW2FwcEh0bWxBdHRyXT1cIml0ZW0uYXR0cmlidXRlc1wiPlxuICAgICAgPGkgKm5nSWY9XCJoZWxwZXIuaGFzSWNvbihpdGVtKVwiIFtuZ0NsYXNzXT1cIml0ZW0gfCBhcHBTaWRlYmFyTmF2SWNvblwiPjwvaT5cbiAgICAgIDxuZy1jb250YWluZXI+e3tpdGVtLm5hbWV9fTwvbmctY29udGFpbmVyPlxuICAgICAgPHNwYW4gKm5nSWY9XCJoZWxwZXIuaGFzQmFkZ2UoaXRlbSlcIiBbbmdDbGFzc109XCJpdGVtIHwgYXBwU2lkZWJhck5hdkJhZGdlXCI+e3sgaXRlbS5iYWRnZS50ZXh0IH19PC9zcGFuPlxuICAgIDwvYT5cbiAgICA8YXBwLXNpZGViYXItbmF2LWl0ZW1zXG4gICAgICBjbGFzcz1cIm5hdi1kcm9wZG93bi1pdGVtc1wiXG4gICAgICBbaXRlbXNdPVwiaXRlbS5jaGlsZHJlblwiPlxuICAgIDwvYXBwLXNpZGViYXItbmF2LWl0ZW1zPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICAnLm5hdi1kcm9wZG93bi10b2dnbGUgeyBjdXJzb3I6IHBvaW50ZXI7IH0nLFxuICAgICcubmF2LWRyb3Bkb3duLWl0ZW1zIHsgZGlzcGxheTogYmxvY2s7IH0nXG4gIF0sXG4gIHByb3ZpZGVyczogWyBTaWRlYmFyTmF2SGVscGVyIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXRlbTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBoZWxwZXI6IFNpZGViYXJOYXZIZWxwZXJcbiAgKSB7IH1cbn1cbiJdfQ==