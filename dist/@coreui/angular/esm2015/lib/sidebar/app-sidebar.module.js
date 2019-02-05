/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../shared/layout/layout.module';
// App Sidebar Component
import { AppSidebarFooterComponent } from './app-sidebar-footer.component';
import { AppSidebarFormComponent } from './app-sidebar-form.component';
import { AppSidebarHeaderComponent } from './app-sidebar-header.component';
import { AppSidebarMinimizerComponent } from './app-sidebar-minimizer.component';
import { AppSidebarComponent } from './app-sidebar.component';
import { AppSidebarNavComponent, AppSidebarNavDropdownComponent, AppSidebarNavItemComponent, AppSidebarNavLinkComponent, AppSidebarNavTitleComponent, NavDropdownDirective, NavDropdownToggleDirective } from './app-sidebar-nav.component';
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
                    AppSidebarNavComponent,
                    AppSidebarNavDropdownComponent,
                    AppSidebarNavItemComponent,
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
                    AppSidebarNavComponent,
                    AppSidebarNavDropdownComponent,
                    AppSidebarNavItemComponent,
                    AppSidebarNavLinkComponent,
                    AppSidebarNavTitleComponent,
                    NavDropdownDirective,
                    NavDropdownToggleDirective
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUU5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLDhCQUE4QixFQUM5QiwwQkFBMEIsRUFDMUIsMEJBQTBCLEVBQzFCLDJCQUEyQixFQUMzQixvQkFBb0IsRUFDcEIsMEJBQTBCLEVBQzNCLE1BQU0sNkJBQTZCLENBQUM7QUF1Q3JDLE1BQU0sT0FBTyxnQkFBZ0I7OztZQXJDNUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AseUJBQXlCO29CQUN6Qix1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtvQkFDekIsNEJBQTRCO29CQUM1QixtQkFBbUI7b0JBQ25CLHNCQUFzQjtvQkFDdEIsOEJBQThCO29CQUM5QiwwQkFBMEI7b0JBQzFCLDBCQUEwQjtvQkFDMUIsMkJBQTJCO29CQUMzQixvQkFBb0I7b0JBQ3BCLDBCQUEwQjtvQkFDMUIsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1oseUJBQXlCO29CQUN6Qix1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtvQkFDekIsNEJBQTRCO29CQUM1Qiw0QkFBNEI7b0JBQzVCLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0Qiw4QkFBOEI7b0JBQzlCLDBCQUEwQjtvQkFDMUIsMEJBQTBCO29CQUMxQiwyQkFBMkI7b0JBQzNCLG9CQUFvQjtvQkFDcEIsMEJBQTBCO2lCQUMzQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9sYXlvdXQvbGF5b3V0Lm1vZHVsZSc7XG4vLyBBcHAgU2lkZWJhciBDb21wb25lbnRcbmltcG9ydCB7IEFwcFNpZGViYXJGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhckZvcm1Db21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFNpZGViYXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItbWluaW1pemVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgQXBwU2lkZWJhck5hdkNvbXBvbmVudCxcbiAgQXBwU2lkZWJhck5hdkRyb3Bkb3duQ29tcG9uZW50LFxuICBBcHBTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCxcbiAgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXG4gIEFwcFNpZGViYXJOYXZUaXRsZUNvbXBvbmVudCxcbiAgTmF2RHJvcGRvd25EaXJlY3RpdmUsXG4gIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlXG59IGZyb20gJy4vYXBwLXNpZGViYXItbmF2LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIExheW91dE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQXBwU2lkZWJhckZvb3RlckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyRm9ybUNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFySGVhZGVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2Q29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQsXG4gICAgTmF2RHJvcGRvd25EaXJlY3RpdmUsXG4gICAgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUsXG4gICAgTGF5b3V0TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcFNpZGViYXJGb290ZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhckZvcm1Db21wb25lbnQsXG4gICAgQXBwU2lkZWJhckhlYWRlckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2Q29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQsXG4gICAgTmF2RHJvcGRvd25EaXJlY3RpdmUsXG4gICAgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyTW9kdWxlIHsgfVxuIl19