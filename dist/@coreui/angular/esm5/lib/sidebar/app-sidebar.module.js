/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../shared/layout/layout.module';
// App Sidebar Component
import { AppSidebarComponent } from './app-sidebar.component';
import { AppSidebarFooterComponent } from './app-sidebar-footer.component';
import { AppSidebarFormComponent } from './app-sidebar-form.component';
import { AppSidebarHeaderComponent } from './app-sidebar-header.component';
import { AppSidebarMinimizerComponent } from './app-sidebar-minimizer.component';
// App SidebarNav Component
import { NavDropdownDirective, NavDropdownToggleDirective } from './app-sidebar-nav.directive';
import { AppSidebarNavComponent } from './app-sidebar-nav.component';
import { AppSidebarNavDividerComponent } from './app-sidebar-nav/app-sidebar-nav-divider.component';
import { AppSidebarNavDropdownComponent } from './app-sidebar-nav/app-sidebar-nav-dropdown.component';
import { AppSidebarNavItemsComponent } from './app-sidebar-nav/app-sidebar-nav-items.component';
import { AppSidebarNavLinkComponent } from './app-sidebar-nav/app-sidebar-nav-link.component';
import { AppSidebarNavTitleComponent } from './app-sidebar-nav/app-sidebar-nav-title.component';
import { SidebarNavHelper } from './app-sidebar-nav.service';
import { AppSidebarNavLabelComponent } from './app-sidebar-nav/app-sidebar-nav-label.component';
var AppSidebarModule = /** @class */ (function () {
    function AppSidebarModule() {
    }
    AppSidebarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        LayoutModule
                    ],
                    exports: [
                        AppSidebarFooterComponent,
                        AppSidebarFormComponent,
                        AppSidebarHeaderComponent,
                        AppSidebarMinimizerComponent,
                        AppSidebarComponent,
                        AppSidebarNavItemsComponent,
                        AppSidebarNavComponent,
                        AppSidebarNavDividerComponent,
                        AppSidebarNavDropdownComponent,
                        AppSidebarNavLinkComponent,
                        AppSidebarNavTitleComponent,
                        NavDropdownDirective,
                        NavDropdownToggleDirective,
                        LayoutModule
                    ],
                    declarations: [
                        AppSidebarFooterComponent,
                        AppSidebarFormComponent,
                        AppSidebarHeaderComponent,
                        AppSidebarMinimizerComponent,
                        AppSidebarMinimizerComponent,
                        AppSidebarComponent,
                        AppSidebarNavItemsComponent,
                        AppSidebarNavComponent,
                        AppSidebarNavDividerComponent,
                        AppSidebarNavDropdownComponent,
                        AppSidebarNavLinkComponent,
                        AppSidebarNavTitleComponent,
                        NavDropdownDirective,
                        NavDropdownToggleDirective,
                        AppSidebarNavLabelComponent
                    ],
                    providers: [
                        SidebarNavHelper
                    ]
                },] }
    ];
    return AppSidebarModule;
}());
export { AppSidebarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUU5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFFakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDOUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFaEc7SUFBQTtJQTJDZ0MsQ0FBQzs7Z0JBM0NoQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCx5QkFBeUI7d0JBQ3pCLHVCQUF1Qjt3QkFDdkIseUJBQXlCO3dCQUN6Qiw0QkFBNEI7d0JBQzVCLG1CQUFtQjt3QkFDbkIsMkJBQTJCO3dCQUMzQixzQkFBc0I7d0JBQ3RCLDZCQUE2Qjt3QkFDN0IsOEJBQThCO3dCQUM5QiwwQkFBMEI7d0JBQzFCLDJCQUEyQjt3QkFDM0Isb0JBQW9CO3dCQUNwQiwwQkFBMEI7d0JBQzFCLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHlCQUF5Qjt3QkFDekIsdUJBQXVCO3dCQUN2Qix5QkFBeUI7d0JBQ3pCLDRCQUE0Qjt3QkFDNUIsNEJBQTRCO3dCQUM1QixtQkFBbUI7d0JBQ25CLDJCQUEyQjt3QkFDM0Isc0JBQXNCO3dCQUN0Qiw2QkFBNkI7d0JBQzdCLDhCQUE4Qjt3QkFDOUIsMEJBQTBCO3dCQUMxQiwyQkFBMkI7d0JBQzNCLG9CQUFvQjt3QkFDcEIsMEJBQTBCO3dCQUMxQiwyQkFBMkI7cUJBQzVCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxnQkFBZ0I7cUJBQ2pCO2lCQUNGOztJQUMrQix1QkFBQztDQUFBLEFBM0NqQyxJQTJDaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9sYXlvdXQvbGF5b3V0Lm1vZHVsZSc7XG4vLyBBcHAgU2lkZWJhciBDb21wb25lbnRcbmltcG9ydCB7IEFwcFNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFNpZGViYXJGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW1pbmltaXplci5jb21wb25lbnQnO1xuLy8gQXBwIFNpZGViYXJOYXYgQ29tcG9uZW50XG5pbXBvcnQgeyBOYXZEcm9wZG93bkRpcmVjdGl2ZSwgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2RGl2aWRlckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1kaXZpZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFNpZGViYXJOYXZJdGVtc0NvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1pdGVtcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGluay5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2SGVscGVyIH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYuc2VydmljZSc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2TGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTGF5b3V0TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBcHBTaWRlYmFyRm9vdGVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJGb3JtQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJIZWFkZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZJdGVtc0NvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2Q29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZEaXZpZGVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQsXG4gICAgTmF2RHJvcGRvd25EaXJlY3RpdmUsXG4gICAgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsXG4gICAgTGF5b3V0TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcFNpZGViYXJGb290ZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhckZvcm1Db21wb25lbnQsXG4gICAgQXBwU2lkZWJhckhlYWRlckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2SXRlbXNDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2RGl2aWRlckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50LFxuICAgIE5hdkRyb3Bkb3duRGlyZWN0aXZlLFxuICAgIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLFxuICAgIEFwcFNpZGViYXJOYXZMYWJlbENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBTaWRlYmFyTmF2SGVscGVyXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck1vZHVsZSB7IH1cbiJdfQ==