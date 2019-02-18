/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// App Breadcrumb Component
import { AppBreadcrumbService } from './app-breadcrumb.service';
import { AppBreadcrumbComponent } from './app-breadcrumb.component';
import { CuiBreadcrumbComponent } from './cui-breadcrumb.component';
// @dynamic
var AppBreadcrumbModule = /** @class */ (function () {
    function AppBreadcrumbModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    AppBreadcrumbModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: AppBreadcrumbModule,
            providers: [
                AppBreadcrumbService
            ]
        };
    };
    AppBreadcrumbModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule],
                    exports: [AppBreadcrumbComponent, CuiBreadcrumbComponent],
                    declarations: [AppBreadcrumbComponent, CuiBreadcrumbComponent]
                },] }
    ];
    return AppBreadcrumbModule;
}());
export { AppBreadcrumbModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJyZWFkY3J1bWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvYXBwLWJyZWFkY3J1bWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUcvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFHcEU7SUFBQTtJQWNBLENBQUM7Ozs7O0lBUlEsMkJBQU87Ozs7SUFBZCxVQUFlLE1BQVk7UUFDekIsT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFO2dCQUNULG9CQUFvQjthQUNyQjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFiRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUUsWUFBWSxFQUFFLFlBQVksQ0FBRTtvQkFDdkMsT0FBTyxFQUFFLENBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLENBQUU7b0JBQzNELFlBQVksRUFBRSxDQUFFLHNCQUFzQixFQUFFLHNCQUFzQixDQUFFO2lCQUNqRTs7SUFVRCwwQkFBQztDQUFBLEFBZEQsSUFjQztTQVRZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuLy8gQXBwIEJyZWFkY3J1bWIgQ29tcG9uZW50XHJcbmltcG9ydCB7IEFwcEJyZWFkY3J1bWJTZXJ2aWNlIH0gZnJvbSAnLi9hcHAtYnJlYWRjcnVtYi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vYXBwLWJyZWFkY3J1bWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ3VpQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vY3VpLWJyZWFkY3J1bWIuY29tcG9uZW50JztcclxuXHJcbi8vIEBkeW5hbWljXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSBdLFxyXG4gIGV4cG9ydHM6IFsgQXBwQnJlYWRjcnVtYkNvbXBvbmVudCwgQ3VpQnJlYWRjcnVtYkNvbXBvbmVudCBdLFxyXG4gIGRlY2xhcmF0aW9uczogWyBBcHBCcmVhZGNydW1iQ29tcG9uZW50LCBDdWlCcmVhZGNydW1iQ29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcEJyZWFkY3J1bWJNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEFwcEJyZWFkY3J1bWJNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEFwcEJyZWFkY3J1bWJTZXJ2aWNlXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==