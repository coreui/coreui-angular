/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './../shared/layout/layout.module';
// App Sidebar Component
import { AppSidebarFooterComponent } from './app-sidebar-footer.component';
import { AppSidebarFormComponent } from './app-sidebar-form.component';
import { AppSidebarHeaderComponent } from './app-sidebar-header.component';
import { AppSidebarMinimizerComponent } from './app-sidebar-minimizer.component';
import { AppSidebarComponent } from './app-sidebar.component';
import { AppSidebarNavComponent, AppSidebarNavDropdownComponent, AppSidebarNavItemComponent, AppSidebarNavLinkComponent, AppSidebarNavTitleComponent, NavDropdownDirective, NavDropdownToggleDirective } from './app-sidebar-nav.component';
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
                },] },
    ];
    return AppSidebarModule;
}());
export { AppSidebarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUdoRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLDhCQUE4QixFQUM5QiwwQkFBMEIsRUFDMUIsMEJBQTBCLEVBQzFCLDJCQUEyQixFQUMzQixvQkFBb0IsRUFDcEIsMEJBQTBCLEVBQzNCLE1BQU0sNkJBQTZCLENBQUM7QUFFckM7SUFBQTtJQXFDZ0MsQ0FBQzs7Z0JBckNoQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCx5QkFBeUI7d0JBQ3pCLHVCQUF1Qjt3QkFDdkIseUJBQXlCO3dCQUN6Qiw0QkFBNEI7d0JBQzVCLG1CQUFtQjt3QkFDbkIsc0JBQXNCO3dCQUN0Qiw4QkFBOEI7d0JBQzlCLDBCQUEwQjt3QkFDMUIsMEJBQTBCO3dCQUMxQiwyQkFBMkI7d0JBQzNCLG9CQUFvQjt3QkFDcEIsMEJBQTBCO3dCQUMxQixZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRTt3QkFDWix5QkFBeUI7d0JBQ3pCLHVCQUF1Qjt3QkFDdkIseUJBQXlCO3dCQUN6Qiw0QkFBNEI7d0JBQzVCLDRCQUE0Qjt3QkFDNUIsbUJBQW1CO3dCQUNuQixzQkFBc0I7d0JBQ3RCLDhCQUE4Qjt3QkFDOUIsMEJBQTBCO3dCQUMxQiwwQkFBMEI7d0JBQzFCLDJCQUEyQjt3QkFDM0Isb0JBQW9CO3dCQUNwQiwwQkFBMEI7cUJBQzNCO2lCQUNGOztJQUMrQix1QkFBQztDQUFBLEFBckNqQyxJQXFDaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICcuLy4uL3NoYXJlZC9sYXlvdXQvbGF5b3V0Lm1vZHVsZSc7XHJcblxyXG4vLyBBcHAgU2lkZWJhciBDb21wb25lbnRcclxuaW1wb3J0IHsgQXBwU2lkZWJhckZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXItZm9vdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcFNpZGViYXJGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcFNpZGViYXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2FwcC1zaWRlYmFyLWhlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtc2lkZWJhci1taW5pbWl6ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vYXBwLXNpZGViYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtcclxuICBBcHBTaWRlYmFyTmF2Q29tcG9uZW50LFxyXG4gIEFwcFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCxcclxuICBBcHBTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCxcclxuICBBcHBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCxcclxuICBBcHBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQsXHJcbiAgTmF2RHJvcGRvd25EaXJlY3RpdmUsXHJcbiAgTmF2RHJvcGRvd25Ub2dnbGVEaXJlY3RpdmVcclxufSBmcm9tICcuL2FwcC1zaWRlYmFyLW5hdi5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBMYXlvdXRNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEFwcFNpZGViYXJGb290ZXJDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyRm9ybUNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJIZWFkZXJDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTWluaW1pemVyQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhckNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTmF2RHJvcGRvd25Db21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTmF2SXRlbUNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZMaW5rQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50LFxyXG4gICAgTmF2RHJvcGRvd25EaXJlY3RpdmUsXHJcbiAgICBOYXZEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSxcclxuICAgIExheW91dE1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBcHBTaWRlYmFyRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhckZvcm1Db21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFySGVhZGVyQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck1pbmltaXplckNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJNaW5pbWl6ZXJDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdkNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZEcm9wZG93bkNvbXBvbmVudCxcclxuICAgIEFwcFNpZGViYXJOYXZJdGVtQ29tcG9uZW50LFxyXG4gICAgQXBwU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXHJcbiAgICBBcHBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQsXHJcbiAgICBOYXZEcm9wZG93bkRpcmVjdGl2ZSxcclxuICAgIE5hdkRyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck1vZHVsZSB7IH1cclxuIl19