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
let AppSidebarModule = class AppSidebarModule {
};
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
export { AppSidebarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELHdCQUF3QjtBQUN4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUcsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRCwyQkFBMkI7QUFDM0IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDcEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLGlDQUFpQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDakksT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFvRC9GLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0NBQUksQ0FBQTtBQUFwQixnQkFBZ0I7SUFsRDVCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtTQUNiO1FBQ0QsT0FBTyxFQUFFO1lBQ1AseUJBQXlCO1lBQ3pCLHVCQUF1QjtZQUN2Qix5QkFBeUI7WUFDekIsNEJBQTRCO1lBQzVCLG1CQUFtQjtZQUNuQiwyQkFBMkI7WUFDM0Isc0JBQXNCO1lBQ3RCLDZCQUE2QjtZQUM3Qiw4QkFBOEI7WUFDOUIsMEJBQTBCO1lBQzFCLGlDQUFpQztZQUNqQywyQkFBMkI7WUFDM0Isb0JBQW9CO1lBQ3BCLDBCQUEwQjtZQUMxQixZQUFZO1NBQ2I7UUFDRCxZQUFZLEVBQUU7WUFDWix5QkFBeUI7WUFDekIsdUJBQXVCO1lBQ3ZCLHlCQUF5QjtZQUN6Qiw0QkFBNEI7WUFDNUIsNEJBQTRCO1lBQzVCLG1CQUFtQjtZQUNuQiwyQkFBMkI7WUFDM0Isc0JBQXNCO1lBQ3RCLDZCQUE2QjtZQUM3Qiw4QkFBOEI7WUFDOUIsMEJBQTBCO1lBQzFCLGlDQUFpQztZQUNqQywyQkFBMkI7WUFDM0Isb0JBQW9CO1lBQ3BCLDBCQUEwQjtZQUMxQiwyQkFBMkI7WUFDM0IscUJBQXFCO1lBQ3JCLHNCQUFzQjtZQUN0QixxQkFBcUI7WUFDckIsMEJBQTBCO1NBQzNCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtTQUNsQjtLQUNGLENBQUM7R0FDVyxnQkFBZ0IsQ0FBSTtTQUFwQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL2xheW91dC9sYXlvdXQubW9kdWxlJztcclxuLy8gQXBwIFNpZGViYXIgQ29tcG9uZW50XHJcbmltcG9ydCB7IEFwcFNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcFNpZGViYXJGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLWZvb3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBTaWRlYmFyRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBTaWRlYmFySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItbWluaW1pemVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcFNpZGViYXJTZXJ2aWNlICB9IGZyb20gJy4vYXBwLXNpZGViYXIuc2VydmljZSc7XHJcblxyXG4vLyBBcHAgU2lkZWJhck5hdiBDb21wb25lbnRcclxuaW1wb3J0IHsgTmF2RHJvcGRvd25EaXJlY3RpdmUsIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcFNpZGViYXJOYXZEaXZpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWRpdmlkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWRyb3Bkb3duLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcFNpZGViYXJOYXZJdGVtc0NvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1pdGVtcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCwgQXBwU2lkZWJhck5hdkxpbmtDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWxpbmsuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LXRpdGxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNpZGViYXJOYXZIZWxwZXIgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkxhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWxhYmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcFNpZGViYXJOYXZJY29uUGlwZSB9IGZyb20gJy4vYXBwLXNpZGViYXItbmF2L2FwcC1zaWRlYmFyLW5hdi1pY29uLnBpcGUnO1xyXG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2QmFkZ2VQaXBlIH0gZnJvbSAnLi9hcHAtc2lkZWJhci1uYXYvYXBwLXNpZGViYXItbmF2LWJhZGdlLnBpcGUnO1xyXG5pbXBvcnQgeyBBcHBTaWRlYmFyTmF2TGlua1BpcGUgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtbGluay5waXBlJztcclxuaW1wb3J0IHsgQXBwU2lkZWJhck5hdkl0ZW1DbGFzc1BpcGUgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaXRlbS1jbGFzcy5waXBlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlLFxyXG4gICAgTGF5b3V0TW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBBcHBTaWRlYmFyRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhckZvcm1Db21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFySGVhZGVyQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTmF2SXRlbXNDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTmF2Q29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdkRpdmlkZXJDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZMaW5rQ29udGVudENvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZUaXRsZUNvbXBvbmVudCxcclxuICAgIE5hdkRyb3Bkb3duRGlyZWN0aXZlLFxyXG4gICAgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsXHJcbiAgICBMYXlvdXRNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXBwU2lkZWJhckZvb3RlckNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJGb3JtQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhckhlYWRlckNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhckNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZJdGVtc0NvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTmF2RGl2aWRlckNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZMaW5rQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdkxpbmtDb250ZW50Q29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50LFxyXG4gICAgTmF2RHJvcGRvd25EaXJlY3RpdmUsXHJcbiAgICBOYXZEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSxcclxuICAgIEFwcFNpZGViYXJOYXZMYWJlbENvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZJY29uUGlwZSxcclxuICAgIEFwcFNpZGViYXJOYXZCYWRnZVBpcGUsXHJcbiAgICBBcHBTaWRlYmFyTmF2TGlua1BpcGUsXHJcbiAgICBBcHBTaWRlYmFyTmF2SXRlbUNsYXNzUGlwZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBTaWRlYmFyTmF2SGVscGVyLFxyXG4gICAgQXBwU2lkZWJhclNlcnZpY2VcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTW9kdWxlIHsgfVxyXG4iXX0=