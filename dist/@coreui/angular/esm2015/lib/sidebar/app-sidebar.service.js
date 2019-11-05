import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
let AppSidebarService = class AppSidebarService {
    constructor() {
        this.events = new BehaviorSubject({});
        this.events$ = this.events.asObservable();
    }
    toggle(action) {
        this.events.next(action);
    }
};
AppSidebarService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AppSidebarService_Factory() { return new AppSidebarService(); }, token: AppSidebarService, providedIn: "root" });
AppSidebarService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], AppSidebarService);
export { AppSidebarService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFTdkMsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFLNUI7UUFIUSxXQUFNLEdBQUcsSUFBSSxlQUFlLENBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELFlBQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXRCLENBQUM7SUFFaEIsTUFBTSxDQUFDLE1BQXNCO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDRixDQUFBOztBQVZZLGlCQUFpQjtJQUg3QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDOztHQUNXLGlCQUFpQixDQVU3QjtTQVZZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTaWRlYmFyQWN0aW9uIHtcclxuICBtaW5pbWl6ZT86IGJvb2xlYW4gfCAndG9nZ2xlJztcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhclNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIGV2ZW50cyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SVNpZGViYXJBY3Rpb24+KHt9KTtcclxuICBldmVudHMkID0gdGhpcy5ldmVudHMuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgdG9nZ2xlKGFjdGlvbjogSVNpZGViYXJBY3Rpb24pIHtcclxuICAgIHRoaXMuZXZlbnRzLm5leHQoYWN0aW9uKTtcclxuICB9XHJcbn1cclxuIl19