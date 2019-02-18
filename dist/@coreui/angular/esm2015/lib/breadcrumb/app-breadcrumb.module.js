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
export class AppBreadcrumbModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: AppBreadcrumbModule,
            providers: [
                AppBreadcrumbService
            ]
        };
    }
}
AppBreadcrumbModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule],
                exports: [AppBreadcrumbComponent, CuiBreadcrumbComponent],
                declarations: [AppBreadcrumbComponent, CuiBreadcrumbComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJyZWFkY3J1bWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvYXBwLWJyZWFkY3J1bWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUcvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFRcEUsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFDOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFZO1FBQ3pCLE9BQU87WUFDTCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFNBQVMsRUFBRTtnQkFDVCxvQkFBb0I7YUFDckI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBYkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFFLFlBQVksRUFBRSxZQUFZLENBQUU7Z0JBQ3ZDLE9BQU8sRUFBRSxDQUFFLHNCQUFzQixFQUFFLHNCQUFzQixDQUFFO2dCQUMzRCxZQUFZLEVBQUUsQ0FBRSxzQkFBc0IsRUFBRSxzQkFBc0IsQ0FBRTthQUNqRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vIEFwcCBCcmVhZGNydW1iIENvbXBvbmVudFxuaW1wb3J0IHsgQXBwQnJlYWRjcnVtYlNlcnZpY2UgfSBmcm9tICcuL2FwcC1icmVhZGNydW1iLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBwQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vYXBwLWJyZWFkY3J1bWIuY29tcG9uZW50JztcbmltcG9ydCB7IEN1aUJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2N1aS1icmVhZGNydW1iLmNvbXBvbmVudCc7XG5cbi8vIEBkeW5hbWljXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlIF0sXG4gIGV4cG9ydHM6IFsgQXBwQnJlYWRjcnVtYkNvbXBvbmVudCwgQ3VpQnJlYWRjcnVtYkNvbXBvbmVudCBdLFxuICBkZWNsYXJhdGlvbnM6IFsgQXBwQnJlYWRjcnVtYkNvbXBvbmVudCwgQ3VpQnJlYWRjcnVtYkNvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcEJyZWFkY3J1bWJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFwcEJyZWFkY3J1bWJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQXBwQnJlYWRjcnVtYlNlcnZpY2VcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=