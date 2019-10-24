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
var AppSidebarService = /** @class */ (function () {
    function AppSidebarService() {
        this.events = new BehaviorSubject({});
        this.events$ = this.events.asObservable();
    }
    /**
     * @param {?} action
     * @return {?}
     */
    AppSidebarService.prototype.toggle = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.events.next(action);
    };
    AppSidebarService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AppSidebarService.ctorParameters = function () { return []; };
    /** @nocollapse */ AppSidebarService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AppSidebarService_Factory() { return new AppSidebarService(); }, token: AppSidebarService, providedIn: "root" });
    return AppSidebarService;
}());
export { AppSidebarService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AppSidebarService.prototype.events;
    /** @type {?} */
    AppSidebarService.prototype.events$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFFdkMsb0NBRUM7OztJQURDLGtDQUE4Qjs7QUFHaEM7SUFRRTtRQUhRLFdBQU0sR0FBRyxJQUFJLGVBQWUsQ0FBaUIsRUFBRSxDQUFDLENBQUM7UUFDekQsWUFBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFdEIsQ0FBQzs7Ozs7SUFFaEIsa0NBQU07Ozs7SUFBTixVQUFPLE1BQXNCO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7O2dCQVpGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzRCQVREO0NBb0JDLEFBYkQsSUFhQztTQVZZLGlCQUFpQjs7Ozs7O0lBRTVCLG1DQUF5RDs7SUFDekQsb0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNpZGViYXJBY3Rpb24ge1xyXG4gIG1pbmltaXplPzogYm9vbGVhbiB8ICd0b2dnbGUnO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBTaWRlYmFyU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgZXZlbnRzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJU2lkZWJhckFjdGlvbj4oe30pO1xyXG4gIGV2ZW50cyQgPSB0aGlzLmV2ZW50cy5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICB0b2dnbGUoYWN0aW9uOiBJU2lkZWJhckFjdGlvbikge1xyXG4gICAgdGhpcy5ldmVudHMubmV4dChhY3Rpb24pO1xyXG4gIH1cclxufVxyXG4iXX0=