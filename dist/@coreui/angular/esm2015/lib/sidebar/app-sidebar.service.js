/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @record
 */
export function ISidebarAction() { }
if (false) {
    /** @type {?|undefined} */
    ISidebarAction.prototype.minimize;
}
export class AppSidebarService {
    constructor() {
        this.events = new BehaviorSubject({});
        this.events$ = this.events.asObservable();
    }
    /**
     * @param {?} action
     * @return {?}
     */
    toggle(action) {
        this.events.next(action);
    }
}
AppSidebarService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AppSidebarService.ctorParameters = () => [];
/** @nocollapse */ AppSidebarService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AppSidebarService_Factory() { return new AppSidebarService(); }, token: AppSidebarService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AppSidebarService.prototype.events;
    /** @type {?} */
    AppSidebarService.prototype.events$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFFdkMsb0NBRUM7OztJQURDLGtDQUE4Qjs7QUFNaEMsTUFBTSxPQUFPLGlCQUFpQjtJQUs1QjtRQUhRLFdBQU0sR0FBRyxJQUFJLGVBQWUsQ0FBaUIsRUFBRSxDQUFDLENBQUM7UUFDekQsWUFBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFdEIsQ0FBQzs7Ozs7SUFFaEIsTUFBTSxDQUFDLE1BQXNCO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQVpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztJQUdDLG1DQUF5RDs7SUFDekQsb0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNpZGViYXJBY3Rpb24ge1xuICBtaW5pbWl6ZT86IGJvb2xlYW4gfCAndG9nZ2xlJztcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhclNlcnZpY2Uge1xuXG4gIHByaXZhdGUgZXZlbnRzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJU2lkZWJhckFjdGlvbj4oe30pO1xuICBldmVudHMkID0gdGhpcy5ldmVudHMuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHRvZ2dsZShhY3Rpb246IElTaWRlYmFyQWN0aW9uKSB7XG4gICAgdGhpcy5ldmVudHMubmV4dChhY3Rpb24pO1xuICB9XG59XG4iXX0=