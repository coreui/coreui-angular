import { __decorate } from "tslib";
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
import { AppSidebarService } from './app-sidebar.service';
// App SidebarNav Component
import { NavDropdownDirective, NavDropdownToggleDirective } from './app-sidebar-nav.directive';
import { AppSidebarNavComponent } from './app-sidebar-nav.component';
import { AppSidebarNavDividerComponent } from './app-sidebar-nav/app-sidebar-nav-divider.component';
import { AppSidebarNavDropdownComponent } from './app-sidebar-nav/app-sidebar-nav-dropdown.component';
import { AppSidebarNavItemsComponent } from './app-sidebar-nav/app-sidebar-nav-items.component';
import { AppSidebarNavLinkComponent, AppSidebarNavLinkContentComponent } from './app-sidebar-nav/app-sidebar-nav-link.component';
import { AppSidebarNavTitleComponent } from './app-sidebar-nav/app-sidebar-nav-title.component';
import { SidebarNavHelper } from './app-sidebar-nav.service';
import { AppSidebarNavLabelComponent } from './app-sidebar-nav/app-sidebar-nav-label.component';
import { AppSidebarNavIconPipe } from './app-sidebar-nav/app-sidebar-nav-icon.pipe';
import { AppSidebarNavBadgePipe } from './app-sidebar-nav/app-sidebar-nav-badge.pipe';
import { AppSidebarNavLinkPipe } from './app-sidebar-nav/app-sidebar-nav-link.pipe';
import { AppSidebarNavItemClassPipe } from './app-sidebar-nav/app-sidebar-nav-item-class.pipe';
var AppSidebarModule = /** @class */ (function () {
    function AppSidebarModule() {
    }
    AppSidebarModule = __decorate([
        NgModule({
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
                AppSidebarNavLabelComponent,
                AppSidebarNavLinkComponent,
                AppSidebarNavLinkContentComponent,
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
                AppSidebarNavLinkContentComponent,
                AppSidebarNavTitleComponent,
                NavDropdownDirective,
                NavDropdownToggleDirective,
                AppSidebarNavLabelComponent,
                AppSidebarNavIconPipe,
                AppSidebarNavBadgePipe,
                AppSidebarNavLinkPipe,
                AppSidebarNavItemClassPipe
            ],
            providers: [
                SidebarNavHelper,
                AppSidebarService
            ]
        })
    ], AppSidebarModule);
    return AppSidebarModule;
}());
export { AppSidebarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELHdCQUF3QjtBQUN4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUcsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRCwyQkFBMkI7QUFDM0IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDakksT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFxRC9GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFuRDVCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osWUFBWTthQUNiO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHlCQUF5QjtnQkFDekIsdUJBQXVCO2dCQUN2Qix5QkFBeUI7Z0JBQ3pCLDRCQUE0QjtnQkFDNUIsbUJBQW1CO2dCQUNuQiwyQkFBMkI7Z0JBQzNCLHNCQUFzQjtnQkFDdEIsNkJBQTZCO2dCQUM3Qiw4QkFBOEI7Z0JBQzlCLDJCQUEyQjtnQkFDM0IsMEJBQTBCO2dCQUMxQixpQ0FBaUM7Z0JBQ2pDLDJCQUEyQjtnQkFDM0Isb0JBQW9CO2dCQUNwQiwwQkFBMEI7Z0JBQzFCLFlBQVk7YUFDYjtZQUNELFlBQVksRUFBRTtnQkFDWix5QkFBeUI7Z0JBQ3pCLHVCQUF1QjtnQkFDdkIseUJBQXlCO2dCQUN6Qiw0QkFBNEI7Z0JBQzVCLDRCQUE0QjtnQkFDNUIsbUJBQW1CO2dCQUNuQiwyQkFBMkI7Z0JBQzNCLHNCQUFzQjtnQkFDdEIsNkJBQTZCO2dCQUM3Qiw4QkFBOEI7Z0JBQzlCLDBCQUEwQjtnQkFDMUIsaUNBQWlDO2dCQUNqQywyQkFBMkI7Z0JBQzNCLG9CQUFvQjtnQkFDcEIsMEJBQTBCO2dCQUMxQiwyQkFBMkI7Z0JBQzNCLHFCQUFxQjtnQkFDckIsc0JBQXNCO2dCQUN0QixxQkFBcUI7Z0JBQ3JCLDBCQUEwQjthQUMzQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxnQkFBZ0I7Z0JBQ2hCLGlCQUFpQjthQUNsQjtTQUNGLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvbGF5b3V0L2xheW91dC5tb2R1bGUnO1xuLy8gQXBwIFNpZGViYXIgQ29tcG9uZW50XG5pbXBvcnQgeyBBcHBTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhckZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhckhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1taW5pbWl6ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFNpZGViYXJTZXJ2aWNlICB9IGZyb20gJy4vYXBwLXNpZGViYXIuc2VydmljZSc7XG5cbi8vIEFwcCBTaWRlYmFyTmF2IENvbXBvbmVudFxuaW1wb3J0IHsgTmF2RHJvcGRvd25EaXJlY3RpdmUsIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFwcFNpZGViYXJOYXZDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkRpdmlkZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtZGl2aWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2SXRlbXNDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFNpZGViYXJOYXZMaW5rQ29tcG9uZW50LCBBcHBTaWRlYmFyTmF2TGlua0NvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGluay5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2SGVscGVyIH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYuc2VydmljZSc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2TGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFNpZGViYXJOYXZJY29uUGlwZSB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1pY29uLnBpcGUnO1xuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkJhZGdlUGlwZSB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1iYWRnZS5waXBlJztcbmltcG9ydCB7IEFwcFNpZGViYXJOYXZMaW5rUGlwZSB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1saW5rLnBpcGUnO1xuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkl0ZW1DbGFzc1BpcGUgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaXRlbS1jbGFzcy5waXBlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTGF5b3V0TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBcHBTaWRlYmFyRm9vdGVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJGb3JtQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJIZWFkZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZJdGVtc0NvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2Q29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZEaXZpZGVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2TGFiZWxDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkxpbmtDb250ZW50Q29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZUaXRsZUNvbXBvbmVudCxcbiAgICBOYXZEcm9wZG93bkRpcmVjdGl2ZSxcbiAgICBOYXZEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSxcbiAgICBMYXlvdXRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwU2lkZWJhckZvb3RlckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyRm9ybUNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFySGVhZGVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZJdGVtc0NvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2Q29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZEaXZpZGVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2TGlua0NvbnRlbnRDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50LFxuICAgIE5hdkRyb3Bkb3duRGlyZWN0aXZlLFxuICAgIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLFxuICAgIEFwcFNpZGViYXJOYXZMYWJlbENvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2SWNvblBpcGUsXG4gICAgQXBwU2lkZWJhck5hdkJhZGdlUGlwZSxcbiAgICBBcHBTaWRlYmFyTmF2TGlua1BpcGUsXG4gICAgQXBwU2lkZWJhck5hdkl0ZW1DbGFzc1BpcGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU2lkZWJhck5hdkhlbHBlcixcbiAgICBBcHBTaWRlYmFyU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJNb2R1bGUgeyB9XG4iXX0=