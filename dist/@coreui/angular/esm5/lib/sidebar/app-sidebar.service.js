import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
var AppSidebarService = /** @class */ (function () {
    function AppSidebarService() {
        this.events = new BehaviorSubject({});
        this.events$ = this.events.asObservable();
    }
    AppSidebarService.prototype.toggle = function (action) {
        this.events.next(action);
    };
    AppSidebarService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AppSidebarService_Factory() { return new AppSidebarService(); }, token: AppSidebarService, providedIn: "root" });
    AppSidebarService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AppSidebarService);
    return AppSidebarService;
}());
export { AppSidebarService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFTdkM7SUFLRTtRQUhRLFdBQU0sR0FBRyxJQUFJLGVBQWUsQ0FBaUIsRUFBRSxDQUFDLENBQUM7UUFDekQsWUFBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFdEIsQ0FBQztJQUVoQixrQ0FBTSxHQUFOLFVBQU8sTUFBc0I7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7SUFUVSxpQkFBaUI7UUFIN0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzs7T0FDVyxpQkFBaUIsQ0FVN0I7NEJBcEJEO0NBb0JDLEFBVkQsSUFVQztTQVZZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTaWRlYmFyQWN0aW9uIHtcclxuICBtaW5pbWl6ZT86IGJvb2xlYW4gfCAndG9nZ2xlJztcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhclNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIGV2ZW50cyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SVNpZGViYXJBY3Rpb24+KHt9KTtcclxuICBldmVudHMkID0gdGhpcy5ldmVudHMuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgdG9nZ2xlKGFjdGlvbjogSVNpZGViYXJBY3Rpb24pIHtcclxuICAgIHRoaXMuZXZlbnRzLm5leHQoYWN0aW9uKTtcclxuICB9XHJcbn1cclxuIl19