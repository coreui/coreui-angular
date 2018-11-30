/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { Replace } from './../shared';
import { AppBreadcrumbService } from './app-breadcrumb.service';
export class AppBreadcrumbComponent {
    /**
     * @param {?} service
     * @param {?} el
     */
    constructor(service, el) {
        this.service = service;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        Replace(this.el);
        this.isFixed(this.fixed);
        this.breadcrumbs = this.service.breadcrumbs;
    }
    /**
     * @param {?} fixed
     * @return {?}
     */
    isFixed(fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('breadcrumb-fixed');
        }
    }
}
AppBreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-breadcrumb',
                template: `
    <ng-template ngFor let-breadcrumb [ngForOf]="breadcrumbs | async" let-last = last>
      <li class="breadcrumb-item"
          *ngIf="breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)"
          [ngClass]="{active: last}">
        <a *ngIf="!last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</a>
        <span *ngIf="last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</span>
      </li>
    </ng-template>
  `
            },] },
];
AppBreadcrumbComponent.ctorParameters = () => [
    { type: AppBreadcrumbService },
    { type: ElementRef }
];
AppBreadcrumbComponent.propDecorators = {
    fixed: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AppBreadcrumbComponent.prototype.fixed;
    /** @type {?} */
    AppBreadcrumbComponent.prototype.breadcrumbs;
    /** @type {?} */
    AppBreadcrumbComponent.prototype.service;
    /** @type {?} */
    AppBreadcrumbComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJyZWFkY3J1bWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvYXBwLWJyZWFkY3J1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQWVoRSxNQUFNOzs7OztJQUlKLFlBQW1CLE9BQTZCLEVBQVMsRUFBYztRQUFwRCxZQUFPLEdBQVAsT0FBTyxDQUFzQjtRQUFTLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBSSxDQUFDOzs7O0lBRXJFLFFBQVE7UUFDYixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBYztRQUNwQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUFFO0lBQ3ZGLENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7R0FTVDthQUNGOzs7WUFkUSxvQkFBb0I7WUFGVCxVQUFVOzs7b0JBa0IzQixLQUFLOzs7O0lBQU4sdUNBQXdCOztJQUN4Qiw2Q0FBbUI7O0lBRVAseUNBQW9DOztJQUFFLG9DQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVwbGFjZSB9IGZyb20gJy4vLi4vc2hhcmVkJztcclxuaW1wb3J0IHsgQXBwQnJlYWRjcnVtYlNlcnZpY2UgfSBmcm9tICcuL2FwcC1icmVhZGNydW1iLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYnJlYWRjcnVtYicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtYnJlYWRjcnVtYiBbbmdGb3JPZl09XCJicmVhZGNydW1icyB8IGFzeW5jXCIgbGV0LWxhc3QgPSBsYXN0PlxyXG4gICAgICA8bGkgY2xhc3M9XCJicmVhZGNydW1iLWl0ZW1cIlxyXG4gICAgICAgICAgKm5nSWY9XCJicmVhZGNydW1iLmxhYmVsLnRpdGxlICYmIChicmVhZGNydW1iLnVybC5zbGljZSgtMSkgPT0gJy8nIHx8IGxhc3QpXCJcclxuICAgICAgICAgIFtuZ0NsYXNzXT1cInthY3RpdmU6IGxhc3R9XCI+XHJcbiAgICAgICAgPGEgKm5nSWY9XCIhbGFzdFwiIFtyb3V0ZXJMaW5rXT1cImJyZWFkY3J1bWIudXJsXCI+e3ticmVhZGNydW1iLmxhYmVsLnRpdGxlfX08L2E+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJsYXN0XCIgW3JvdXRlckxpbmtdPVwiYnJlYWRjcnVtYi51cmxcIj57e2JyZWFkY3J1bWIubGFiZWwudGl0bGV9fTwvc3Bhbj5cclxuICAgICAgPC9saT5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XHJcbiAgcHVibGljIGJyZWFkY3J1bWJzO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogQXBwQnJlYWRjcnVtYlNlcnZpY2UsIHB1YmxpYyBlbDogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIFJlcGxhY2UodGhpcy5lbCk7XHJcbiAgICB0aGlzLmlzRml4ZWQodGhpcy5maXhlZCk7XHJcbiAgICB0aGlzLmJyZWFkY3J1bWJzID0gdGhpcy5zZXJ2aWNlLmJyZWFkY3J1bWJzO1xyXG4gIH1cclxuXHJcbiAgaXNGaXhlZChmaXhlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZml4ZWQpIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2JyZWFkY3J1bWItZml4ZWQnKTsgfVxyXG4gIH1cclxufVxyXG4iXX0=