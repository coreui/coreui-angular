/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../shared/layout';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUdoRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLDhCQUE4QixFQUM5QiwwQkFBMEIsRUFDMUIsMEJBQTBCLEVBQzFCLDJCQUEyQixFQUMzQixvQkFBb0IsRUFDcEIsMEJBQTBCLEVBQzNCLE1BQU0sNkJBQTZCLENBQUM7QUF1Q3JDLE1BQU0sT0FBTyxnQkFBZ0I7OztZQXJDNUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AseUJBQXlCO29CQUN6Qix1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtvQkFDekIsNEJBQTRCO29CQUM1QixtQkFBbUI7b0JBQ25CLHNCQUFzQjtvQkFDdEIsOEJBQThCO29CQUM5QiwwQkFBMEI7b0JBQzFCLDBCQUEwQjtvQkFDMUIsMkJBQTJCO29CQUMzQixvQkFBb0I7b0JBQ3BCLDBCQUEwQjtvQkFDMUIsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1oseUJBQXlCO29CQUN6Qix1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtvQkFDekIsNEJBQTRCO29CQUM1Qiw0QkFBNEI7b0JBQzVCLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0Qiw4QkFBOEI7b0JBQzlCLDBCQUEwQjtvQkFDMUIsMEJBQTBCO29CQUMxQiwyQkFBMkI7b0JBQzNCLG9CQUFvQjtvQkFDcEIsMEJBQTBCO2lCQUMzQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvbGF5b3V0JztcblxuLy8gQXBwIFNpZGViYXIgQ29tcG9uZW50XG5pbXBvcnQgeyBBcHBTaWRlYmFyRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFNpZGViYXJGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTaWRlYmFySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLW1pbmltaXplci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIEFwcFNpZGViYXJOYXZDb21wb25lbnQsXG4gIEFwcFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCxcbiAgQXBwU2lkZWJhck5hdkl0ZW1Db21wb25lbnQsXG4gIEFwcFNpZGViYXJOYXZMaW5rQ29tcG9uZW50LFxuICBBcHBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQsXG4gIE5hdkRyb3Bkb3duRGlyZWN0aXZlLFxuICBOYXZEcm9wZG93blRvZ2dsZURpcmVjdGl2ZVxufSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBMYXlvdXRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFwcFNpZGViYXJGb290ZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhckZvcm1Db21wb25lbnQsXG4gICAgQXBwU2lkZWJhckhlYWRlckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkl0ZW1Db21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50LFxuICAgIE5hdkRyb3Bkb3duRGlyZWN0aXZlLFxuICAgIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLFxuICAgIExheW91dE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBTaWRlYmFyRm9vdGVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJGb3JtQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJIZWFkZXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50LFxuICAgIEFwcFNpZGViYXJDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkNvbXBvbmVudCxcbiAgICBBcHBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkl0ZW1Db21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXG4gICAgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50LFxuICAgIE5hdkRyb3Bkb3duRGlyZWN0aXZlLFxuICAgIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck1vZHVsZSB7IH1cbiJdfQ==