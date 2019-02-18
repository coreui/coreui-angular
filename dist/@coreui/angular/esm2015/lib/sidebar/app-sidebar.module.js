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
                    AppSidebarNavLabelComponent
                ],
                providers: [
                    SidebarNavHelper
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUU5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFFakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDOUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUE2Q2hHLE1BQU0sT0FBTyxnQkFBZ0I7OztZQTNDNUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AseUJBQXlCO29CQUN6Qix1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtvQkFDekIsNEJBQTRCO29CQUM1QixtQkFBbUI7b0JBQ25CLDJCQUEyQjtvQkFDM0Isc0JBQXNCO29CQUN0Qiw2QkFBNkI7b0JBQzdCLDhCQUE4QjtvQkFDOUIsMEJBQTBCO29CQUMxQiwyQkFBMkI7b0JBQzNCLG9CQUFvQjtvQkFDcEIsMEJBQTBCO29CQUMxQixZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWix5QkFBeUI7b0JBQ3pCLHVCQUF1QjtvQkFDdkIseUJBQXlCO29CQUN6Qiw0QkFBNEI7b0JBQzVCLDRCQUE0QjtvQkFDNUIsbUJBQW1CO29CQUNuQiwyQkFBMkI7b0JBQzNCLHNCQUFzQjtvQkFDdEIsNkJBQTZCO29CQUM3Qiw4QkFBOEI7b0JBQzlCLDBCQUEwQjtvQkFDMUIsMkJBQTJCO29CQUMzQixvQkFBb0I7b0JBQ3BCLDBCQUEwQjtvQkFDMUIsMkJBQTJCO2lCQUM1QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsZ0JBQWdCO2lCQUNqQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2xheW91dC9sYXlvdXQubW9kdWxlJztcclxuLy8gQXBwIFNpZGViYXIgQ29tcG9uZW50XHJcbmltcG9ydCB7IEFwcFNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcFNpZGViYXJGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLWZvb3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBTaWRlYmFyRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBTaWRlYmFySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItbWluaW1pemVyLmNvbXBvbmVudCc7XHJcbi8vIEFwcCBTaWRlYmFyTmF2IENvbXBvbmVudFxyXG5pbXBvcnQgeyBOYXZEcm9wZG93bkRpcmVjdGl2ZSwgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkRpdmlkZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtZGl2aWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtZHJvcGRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWl0ZW1zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcFNpZGViYXJOYXZMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWxpbmsuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LXRpdGxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNpZGViYXJOYXZIZWxwZXIgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkxhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWxhYmVsLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIExheW91dE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQXBwU2lkZWJhckZvb3RlckNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJGb3JtQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhckhlYWRlckNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdkl0ZW1zQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdkNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZEaXZpZGVyQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQsXHJcbiAgICBOYXZEcm9wZG93bkRpcmVjdGl2ZSxcclxuICAgIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLFxyXG4gICAgTGF5b3V0TW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFwcFNpZGViYXJGb290ZXJDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyRm9ybUNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJIZWFkZXJDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTmF2SXRlbXNDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTmF2Q29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdkRpdmlkZXJDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZUaXRsZUNvbXBvbmVudCxcclxuICAgIE5hdkRyb3Bkb3duRGlyZWN0aXZlLFxyXG4gICAgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsXHJcbiAgICBBcHBTaWRlYmFyTmF2TGFiZWxDb21wb25lbnRcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgU2lkZWJhck5hdkhlbHBlclxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJNb2R1bGUgeyB9XHJcbiJdfQ==