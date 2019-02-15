/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
      <i *ngIf="helper.hasIcon(item)" [ngClass]="helper.getIconClass(item)"></i>
      <ng-container>{{item.name}}</ng-container>
      <span *ngIf="helper.hasBadge(item)" [ngClass]="helper.getBadgeClass(item)">{{ item.badge.text }}</span>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtZHJvcGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQXVCNUQsTUFBTSxPQUFPLDhCQUE4Qjs7OztJQUd6QyxZQUNTLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzdCLENBQUM7OztZQTFCTixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7R0FZVDtnQkFLRCxTQUFTLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTt5QkFIN0IsMkNBQTJDO29CQUMzQyx5Q0FBeUM7YUFHNUM7Ozs7WUF0Qk8sZ0JBQWdCOzs7bUJBd0JyQixLQUFLOzs7O0lBQU4sOENBQW1COztJQUdqQixnREFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1NpZGViYXJOYXZIZWxwZXJ9IGZyb20gJy4uL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YSBjbGFzcz1cIm5hdi1saW5rIG5hdi1kcm9wZG93bi10b2dnbGVcIlxuICAgICAgIGFwcE5hdkRyb3Bkb3duVG9nZ2xlXG4gICAgICAgW2FwcEh0bWxBdHRyXT1cIml0ZW0uYXR0cmlidXRlc1wiPlxuICAgICAgPGkgKm5nSWY9XCJoZWxwZXIuaGFzSWNvbihpdGVtKVwiIFtuZ0NsYXNzXT1cImhlbHBlci5nZXRJY29uQ2xhc3MoaXRlbSlcIj48L2k+XG4gICAgICA8bmctY29udGFpbmVyPnt7aXRlbS5uYW1lfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDxzcGFuICpuZ0lmPVwiaGVscGVyLmhhc0JhZGdlKGl0ZW0pXCIgW25nQ2xhc3NdPVwiaGVscGVyLmdldEJhZGdlQ2xhc3MoaXRlbSlcIj57eyBpdGVtLmJhZGdlLnRleHQgfX08L3NwYW4+XG4gICAgPC9hPlxuICAgIDxhcHAtc2lkZWJhci1uYXYtaXRlbXNcbiAgICAgIGNsYXNzPVwibmF2LWRyb3Bkb3duLWl0ZW1zXCJcbiAgICAgIFtpdGVtc109XCJpdGVtLmNoaWxkcmVuXCI+XG4gICAgPC9hcHAtc2lkZWJhci1uYXYtaXRlbXM+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgICcubmF2LWRyb3Bkb3duLXRvZ2dsZSB7IGN1cnNvcjogcG9pbnRlcjsgfScsXG4gICAgJy5uYXYtZHJvcGRvd24taXRlbXMgeyBkaXNwbGF5OiBibG9jazsgfSdcbiAgXSxcbiAgcHJvdmlkZXJzOiBbIFNpZGViYXJOYXZIZWxwZXIgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQge1xuICBASW5wdXQoKSBpdGVtOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlclxuICApIHsgfVxufVxuIl19