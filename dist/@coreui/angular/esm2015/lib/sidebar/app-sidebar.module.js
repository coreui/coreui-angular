/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
import { AppSidebarNavIconPipe } from './app-sidebar-nav/app-sidebar-nav-icon.pipe';
import { AppSidebarNavBadgePipe } from './app-sidebar-nav/app-sidebar-nav-badge.pipe';
export class AppSidebarModule {
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
                    AppSidebarNavLabelComponent,
                    AppSidebarNavIconPipe,
                    AppSidebarNavBadgePipe
                ],
                providers: [
                    SidebarNavHelper
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUU5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFFakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDOUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUErQ3RGLE1BQU0sT0FBTyxnQkFBZ0I7OztZQTdDNUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AseUJBQXlCO29CQUN6Qix1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtvQkFDekIsNEJBQTRCO29CQUM1QixtQkFBbUI7b0JBQ25CLDJCQUEyQjtvQkFDM0Isc0JBQXNCO29CQUN0Qiw2QkFBNkI7b0JBQzdCLDhCQUE4QjtvQkFDOUIsMEJBQTBCO29CQUMxQiwyQkFBMkI7b0JBQzNCLG9CQUFvQjtvQkFDcEIsMEJBQTBCO29CQUMxQixZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWix5QkFBeUI7b0JBQ3pCLHVCQUF1QjtvQkFDdkIseUJBQXlCO29CQUN6Qiw0QkFBNEI7b0JBQzVCLDRCQUE0QjtvQkFDNUIsbUJBQW1CO29CQUNuQiwyQkFBMkI7b0JBQzNCLHNCQUFzQjtvQkFDdEIsNkJBQTZCO29CQUM3Qiw4QkFBOEI7b0JBQzlCLDBCQUEwQjtvQkFDMUIsMkJBQTJCO29CQUMzQixvQkFBb0I7b0JBQ3BCLDBCQUEwQjtvQkFDMUIsMkJBQTJCO29CQUMzQixxQkFBcUI7b0JBQ3JCLHNCQUFzQjtpQkFDdkI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULGdCQUFnQjtpQkFDakI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvbGF5b3V0L2xheW91dC5tb2R1bGUnO1xuLy8gQXBwIFNpZGViYXIgQ29tcG9uZW50XG5pbXBvcnQgeyBBcHBTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhckZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhckhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1taW5pbWl6ZXIuY29tcG9uZW50Jztcbi8vIEFwcCBTaWRlYmFyTmF2IENvbXBvbmVudFxuaW1wb3J0IHsgTmF2RHJvcGRvd25EaXJlY3RpdmUsIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFwcFNpZGViYXJOYXZDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkRpdmlkZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtZGl2aWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2SXRlbXNDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFNpZGViYXJOYXZMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWxpbmsuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFNpZGViYXJOYXZUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi10aXRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhck5hdkhlbHBlciB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2LnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkxhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWxhYmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2SWNvblBpcGUgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaWNvbi5waXBlJztcbmltcG9ydCB7IEFwcFNpZGViYXJOYXZCYWRnZVBpcGUgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtYmFkZ2UucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIExheW91dE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQXBwU2lkZWJhckZvb3RlckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyRm9ybUNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFySGVhZGVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2SXRlbXNDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2RGl2aWRlckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50LFxuICAgIE5hdkRyb3Bkb3duRGlyZWN0aXZlLFxuICAgIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLFxuICAgIExheW91dE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBTaWRlYmFyRm9vdGVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJGb3JtQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJIZWFkZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkl0ZW1zQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkRpdmlkZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZMaW5rQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZUaXRsZUNvbXBvbmVudCxcbiAgICBOYXZEcm9wZG93bkRpcmVjdGl2ZSxcbiAgICBOYXZEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSxcbiAgICBBcHBTaWRlYmFyTmF2TGFiZWxDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkljb25QaXBlLFxuICAgIEFwcFNpZGViYXJOYXZCYWRnZVBpcGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU2lkZWJhck5hdkhlbHBlclxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJNb2R1bGUgeyB9XG4iXX0=