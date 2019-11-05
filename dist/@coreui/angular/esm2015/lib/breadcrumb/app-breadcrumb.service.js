import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
let AppBreadcrumbService = class AppBreadcrumbService {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this._breadcrumbs = new BehaviorSubject(new Array());
        this.breadcrumbs = this._breadcrumbs.asObservable();
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
            const breadcrumbs = [];
            let currentRoute = this.route.root, url = '';
            do {
                const childrenRoutes = currentRoute.children;
                currentRoute = null;
                // tslint:disable-next-line:no-shadowed-variable
                childrenRoutes.forEach(route => {
                    if (route.outlet === 'primary') {
                        const routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
                        breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
            this._breadcrumbs.next(Object.assign([], breadcrumbs));
            return breadcrumbs;
        });
    }
};
AppBreadcrumbService.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute }
];
AppBreadcrumbService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AppBreadcrumbService_Factory() { return new AppBreadcrumbService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i1.ActivatedRoute)); }, token: AppBreadcrumbService, providedIn: "root" });
AppBreadcrumbService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [Router, ActivatedRoute])
], AppBreadcrumbService);
export { AppBreadcrumbService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJyZWFkY3J1bWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9icmVhZGNydW1iL2FwcC1icmVhZGNydW1iLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU14QyxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQU0vQixZQUFvQixNQUFjLEVBQVUsS0FBcUI7UUFBN0MsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBRS9ELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxlQUFlLENBQVcsSUFBSSxLQUFLLEVBQVUsQ0FBQyxDQUFDO1FBRXZFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxZQUFZLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDM0YsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUNsQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ1QsR0FBRztnQkFDRCxNQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUM3QyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixnREFBZ0Q7Z0JBQ2hELGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzdCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7d0JBQzlCLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7d0JBQ3JDLEdBQUcsSUFBSSxHQUFHLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN0RSxXQUFXLENBQUMsSUFBSSxDQUFDOzRCQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUk7NEJBQzFCLEdBQUcsRUFBSSxHQUFHO3lCQUNYLENBQUMsQ0FBQzt3QkFDSCxZQUFZLEdBQUcsS0FBSyxDQUFDO3FCQUN0QjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKLFFBQVEsWUFBWSxFQUFFO1lBRXZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFFdkQsT0FBTyxXQUFXLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTs7WUFoQzZCLE1BQU07WUFBaUIsY0FBYzs7O0FBTnRELG9CQUFvQjtJQUpoQyxVQUFVLENBQUM7UUFDUixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUNGO3FDQU82QixNQUFNLEVBQWlCLGNBQWM7R0FOdEQsb0JBQW9CLENBc0NoQztTQXRDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbiAgfVxyXG4pXHJcbmV4cG9ydCBjbGFzcyBBcHBCcmVhZGNydW1iU2VydmljZSB7XHJcblxyXG4gIGJyZWFkY3J1bWJzOiBPYnNlcnZhYmxlPEFycmF5PE9iamVjdD4+O1xyXG5cclxuICBwcml2YXRlIF9icmVhZGNydW1iczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PE9iamVjdD4+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG5cclxuICAgIHRoaXMuX2JyZWFkY3J1bWJzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxPYmplY3RbXT4obmV3IEFycmF5PE9iamVjdD4oKSk7XHJcblxyXG4gICAgdGhpcy5icmVhZGNydW1icyA9IHRoaXMuX2JyZWFkY3J1bWJzLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGJyZWFkY3J1bWJzID0gW107XHJcbiAgICAgIGxldCBjdXJyZW50Um91dGUgPSB0aGlzLnJvdXRlLnJvb3QsXHJcbiAgICAgIHVybCA9ICcnO1xyXG4gICAgICBkbyB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW5Sb3V0ZXMgPSBjdXJyZW50Um91dGUuY2hpbGRyZW47XHJcbiAgICAgICAgY3VycmVudFJvdXRlID0gbnVsbDtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc2hhZG93ZWQtdmFyaWFibGVcclxuICAgICAgICBjaGlsZHJlblJvdXRlcy5mb3JFYWNoKHJvdXRlID0+IHtcclxuICAgICAgICAgIGlmIChyb3V0ZS5vdXRsZXQgPT09ICdwcmltYXJ5Jykge1xyXG4gICAgICAgICAgICBjb25zdCByb3V0ZVNuYXBzaG90ID0gcm91dGUuc25hcHNob3Q7XHJcbiAgICAgICAgICAgIHVybCArPSAnLycgKyByb3V0ZVNuYXBzaG90LnVybC5tYXAoc2VnbWVudCA9PiBzZWdtZW50LnBhdGgpLmpvaW4oJy8nKTtcclxuICAgICAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IHJvdXRlLnNuYXBzaG90LmRhdGEsXHJcbiAgICAgICAgICAgICAgdXJsOiAgIHVybFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY3VycmVudFJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gd2hpbGUgKGN1cnJlbnRSb3V0ZSk7XHJcblxyXG4gICAgICB0aGlzLl9icmVhZGNydW1icy5uZXh0KE9iamVjdC5hc3NpZ24oW10sIGJyZWFkY3J1bWJzKSk7XHJcblxyXG4gICAgICByZXR1cm4gYnJlYWRjcnVtYnM7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19