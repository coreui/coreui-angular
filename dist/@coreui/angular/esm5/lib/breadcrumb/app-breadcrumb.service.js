import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
var AppBreadcrumbService = /** @class */ (function () {
    function AppBreadcrumbService(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.breadcrumbSubject = new BehaviorSubject(new Array());
        this.breadcrumbs = this.breadcrumbSubject.asObservable();
        this.router.events.pipe(filter(function (event) { return event instanceof NavigationEnd; })).subscribe(function (event) {
            var breadcrumbs = [];
            var currentRoute = _this.route.root;
            var url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                // tslint:disable-next-line:no-shadowed-variable
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
            _this.breadcrumbSubject.next(Object.assign([], breadcrumbs));
            return breadcrumbs;
        });
    }
    AppBreadcrumbService.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute }
    ]; };
    AppBreadcrumbService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AppBreadcrumbService_Factory() { return new AppBreadcrumbService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i1.ActivatedRoute)); }, token: AppBreadcrumbService, providedIn: "root" });
    AppBreadcrumbService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute])
    ], AppBreadcrumbService);
    return AppBreadcrumbService;
}());
export { AppBreadcrumbService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJyZWFkY3J1bWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9icmVhZGNydW1iL2FwcC1icmVhZGNydW1iLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU14QztJQU1FLDhCQUFvQixNQUFjLEVBQVUsS0FBcUI7UUFBakUsaUJBK0JDO1FBL0JtQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFFL0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksZUFBZSxDQUFRLElBQUksS0FBSyxFQUFPLENBQUMsQ0FBQztRQUV0RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV6RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxZQUFZLGFBQWEsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBSztZQUN2RixJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDdkIsSUFBSSxZQUFZLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDbkMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2IsR0FBRztnQkFDRCxJQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUM3QyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixnREFBZ0Q7Z0JBQ2hELGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO29CQUMxQixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO3dCQUM5QixJQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO3dCQUNyQyxHQUFHLElBQUksR0FBRyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLElBQUksRUFBWixDQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3RFLFdBQVcsQ0FBQyxJQUFJLENBQUM7NEJBQ2YsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSTs0QkFDMUIsR0FBRyxLQUFBO3lCQUNKLENBQUMsQ0FBQzt3QkFDSCxZQUFZLEdBQUcsS0FBSyxDQUFDO3FCQUN0QjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKLFFBQVEsWUFBWSxFQUFFO1lBRXZCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUU1RCxPQUFPLFdBQVcsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQS9CMkIsTUFBTTtnQkFBaUIsY0FBYzs7O0lBTnRELG9CQUFvQjtRQUpoQyxVQUFVLENBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUNGO3lDQU82QixNQUFNLEVBQWlCLGNBQWM7T0FOdEQsb0JBQW9CLENBc0NoQzsrQkEvQ0Q7Q0ErQ0MsQUF0Q0QsSUFzQ0M7U0F0Q1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG4gIH1cclxuKVxyXG5leHBvcnQgY2xhc3MgQXBwQnJlYWRjcnVtYlNlcnZpY2Uge1xyXG5cclxuICBicmVhZGNydW1iczogT2JzZXJ2YWJsZTxBcnJheTxhbnk+PjtcclxuXHJcbiAgcHJpdmF0ZSBicmVhZGNydW1iU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PEFycmF5PGFueT4+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG5cclxuICAgIHRoaXMuYnJlYWRjcnVtYlN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueVtdPihuZXcgQXJyYXk8YW55PigpKTtcclxuXHJcbiAgICB0aGlzLmJyZWFkY3J1bWJzID0gdGhpcy5icmVhZGNydW1iU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSkuc3Vic2NyaWJlKChldmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBicmVhZGNydW1icyA9IFtdO1xyXG4gICAgICBsZXQgY3VycmVudFJvdXRlID0gdGhpcy5yb3V0ZS5yb290O1xyXG4gICAgICBsZXQgdXJsID0gJyc7XHJcbiAgICAgIGRvIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlblJvdXRlcyA9IGN1cnJlbnRSb3V0ZS5jaGlsZHJlbjtcclxuICAgICAgICBjdXJyZW50Um91dGUgPSBudWxsO1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zaGFkb3dlZC12YXJpYWJsZVxyXG4gICAgICAgIGNoaWxkcmVuUm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xyXG4gICAgICAgICAgaWYgKHJvdXRlLm91dGxldCA9PT0gJ3ByaW1hcnknKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlU25hcHNob3QgPSByb3V0ZS5zbmFwc2hvdDtcclxuICAgICAgICAgICAgdXJsICs9ICcvJyArIHJvdXRlU25hcHNob3QudXJsLm1hcChzZWdtZW50ID0+IHNlZ21lbnQucGF0aCkuam9pbignLycpO1xyXG4gICAgICAgICAgICBicmVhZGNydW1icy5wdXNoKHtcclxuICAgICAgICAgICAgICBsYWJlbDogcm91dGUuc25hcHNob3QuZGF0YSxcclxuICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRSb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IHdoaWxlIChjdXJyZW50Um91dGUpO1xyXG5cclxuICAgICAgdGhpcy5icmVhZGNydW1iU3ViamVjdC5uZXh0KE9iamVjdC5hc3NpZ24oW10sIGJyZWFkY3J1bWJzKSk7XHJcblxyXG4gICAgICByZXR1cm4gYnJlYWRjcnVtYnM7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19