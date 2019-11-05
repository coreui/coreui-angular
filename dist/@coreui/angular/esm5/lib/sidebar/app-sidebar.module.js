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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELHdCQUF3QjtBQUN4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUcsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRCwyQkFBMkI7QUFDM0IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDakksT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFvRC9GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFsRDVCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osWUFBWTthQUNiO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHlCQUF5QjtnQkFDekIsdUJBQXVCO2dCQUN2Qix5QkFBeUI7Z0JBQ3pCLDRCQUE0QjtnQkFDNUIsbUJBQW1CO2dCQUNuQiwyQkFBMkI7Z0JBQzNCLHNCQUFzQjtnQkFDdEIsNkJBQTZCO2dCQUM3Qiw4QkFBOEI7Z0JBQzlCLDBCQUEwQjtnQkFDMUIsaUNBQWlDO2dCQUNqQywyQkFBMkI7Z0JBQzNCLG9CQUFvQjtnQkFDcEIsMEJBQTBCO2dCQUMxQixZQUFZO2FBQ2I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1oseUJBQXlCO2dCQUN6Qix1QkFBdUI7Z0JBQ3ZCLHlCQUF5QjtnQkFDekIsNEJBQTRCO2dCQUM1Qiw0QkFBNEI7Z0JBQzVCLG1CQUFtQjtnQkFDbkIsMkJBQTJCO2dCQUMzQixzQkFBc0I7Z0JBQ3RCLDZCQUE2QjtnQkFDN0IsOEJBQThCO2dCQUM5QiwwQkFBMEI7Z0JBQzFCLGlDQUFpQztnQkFDakMsMkJBQTJCO2dCQUMzQixvQkFBb0I7Z0JBQ3BCLDBCQUEwQjtnQkFDMUIsMkJBQTJCO2dCQUMzQixxQkFBcUI7Z0JBQ3JCLHNCQUFzQjtnQkFDdEIscUJBQXFCO2dCQUNyQiwwQkFBMEI7YUFDM0I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsZ0JBQWdCO2dCQUNoQixpQkFBaUI7YUFDbEI7U0FDRixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvbGF5b3V0L2xheW91dC5tb2R1bGUnO1xyXG4vLyBBcHAgU2lkZWJhciBDb21wb25lbnRcclxuaW1wb3J0IHsgQXBwU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwU2lkZWJhckZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItZm9vdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcFNpZGViYXJGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcFNpZGViYXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLWhlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1taW5pbWl6ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwU2lkZWJhclNlcnZpY2UgIH0gZnJvbSAnLi9hcHAtc2lkZWJhci5zZXJ2aWNlJztcclxuXHJcbi8vIEFwcCBTaWRlYmFyTmF2IENvbXBvbmVudFxyXG5pbXBvcnQgeyBOYXZEcm9wZG93bkRpcmVjdGl2ZSwgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkRpdmlkZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtZGl2aWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtZHJvcGRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWl0ZW1zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcFNpZGViYXJOYXZMaW5rQ29tcG9uZW50LCBBcHBTaWRlYmFyTmF2TGlua0NvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGluay5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtdGl0bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2lkZWJhck5hdkhlbHBlciB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2TGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGFiZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkljb25QaXBlIH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWljb24ucGlwZSc7XHJcbmltcG9ydCB7IEFwcFNpZGViYXJOYXZCYWRnZVBpcGUgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtYmFkZ2UucGlwZSc7XHJcbmltcG9ydCB7IEFwcFNpZGViYXJOYXZMaW5rUGlwZSB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1saW5rLnBpcGUnO1xyXG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2SXRlbUNsYXNzUGlwZSB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1pdGVtLWNsYXNzLnBpcGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBMYXlvdXRNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEFwcFNpZGViYXJGb290ZXJDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyRm9ybUNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJIZWFkZXJDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhckNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZJdGVtc0NvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTmF2RGl2aWRlckNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZMaW5rQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdkxpbmtDb250ZW50Q29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50LFxyXG4gICAgTmF2RHJvcGRvd25EaXJlY3RpdmUsXHJcbiAgICBOYXZEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSxcclxuICAgIExheW91dE1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBTaWRlYmFyRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhckZvcm1Db21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFySGVhZGVyQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdkl0ZW1zQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdkNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZEaXZpZGVyQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTmF2TGlua0NvbnRlbnRDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQsXHJcbiAgICBOYXZEcm9wZG93bkRpcmVjdGl2ZSxcclxuICAgIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLFxyXG4gICAgQXBwU2lkZWJhck5hdkxhYmVsQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdkljb25QaXBlLFxyXG4gICAgQXBwU2lkZWJhck5hdkJhZGdlUGlwZSxcclxuICAgIEFwcFNpZGViYXJOYXZMaW5rUGlwZSxcclxuICAgIEFwcFNpZGViYXJOYXZJdGVtQ2xhc3NQaXBlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFNpZGViYXJOYXZIZWxwZXIsXHJcbiAgICBBcHBTaWRlYmFyU2VydmljZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJNb2R1bGUgeyB9XHJcbiJdfQ==