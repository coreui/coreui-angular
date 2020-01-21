import { __decorate, __metadata, __param } from "tslib";
import { Component, ElementRef, Inject, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AppBreadcrumbService } from './app-breadcrumb.service';
import { Replace } from '../shared';
let AppBreadcrumbComponent = class AppBreadcrumbComponent {
    constructor(document, renderer, service, el) {
        this.document = document;
        this.renderer = renderer;
        this.service = service;
        this.el = el;
        this.fixedClass = 'breadcrumb-fixed';
    }
    ngOnInit() {
        Replace(this.el);
        this.isFixed(this.fixed);
        this.breadcrumbs = this.service.breadcrumbs;
    }
    ngOnDestroy() {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    }
    isFixed(fixed = this.fixed) {
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    }
};
AppBreadcrumbComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 },
    { type: AppBreadcrumbService },
    { type: ElementRef }
];
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AppBreadcrumbComponent.prototype, "fixed", void 0);
AppBreadcrumbComponent = __decorate([
    Component({
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
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, Renderer2,
        AppBreadcrumbService,
        ElementRef])
], AppBreadcrumbComponent);
export { AppBreadcrumbComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJyZWFkY3J1bWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvYXBwLWJyZWFkY3J1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBZWxDLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBS2pDLFlBQzRCLFFBQWEsRUFDL0IsUUFBbUIsRUFDcEIsT0FBNkIsRUFDN0IsRUFBYztRQUhLLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwQixZQUFPLEdBQVAsT0FBTyxDQUFzQjtRQUM3QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBTk4sZUFBVSxHQUFHLGtCQUFrQixDQUFDO0lBTzdDLENBQUM7SUFFRSxRQUFRO1FBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQzlDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxPQUFPLENBQUMsUUFBaUIsSUFBSSxDQUFDLEtBQUs7UUFDakMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDN0Q7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7NENBckJJLE1BQU0sU0FBQyxRQUFRO1lBQ0UsU0FBUztZQUNYLG9CQUFvQjtZQUN6QixVQUFVOztBQVJkO0lBQVIsS0FBSyxFQUFFOztxREFBZ0I7QUFEYixzQkFBc0I7SUFibEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixRQUFRLEVBQUU7Ozs7Ozs7OztHQVNUO0tBQ0YsQ0FBQztJQU9HLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBOzZDQUNDLFNBQVM7UUFDWCxvQkFBb0I7UUFDekIsVUFBVTtHQVRaLHNCQUFzQixDQTJCbEM7U0EzQlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtBcHBCcmVhZGNydW1iU2VydmljZX0gZnJvbSAnLi9hcHAtYnJlYWRjcnVtYi5zZXJ2aWNlJztcbmltcG9ydCB7UmVwbGFjZX0gZnJvbSAnLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWJyZWFkY3J1bWInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtYnJlYWRjcnVtYiBbbmdGb3JPZl09XCJicmVhZGNydW1icyB8IGFzeW5jXCIgbGV0LWxhc3QgPSBsYXN0PlxuICAgICAgPGxpIGNsYXNzPVwiYnJlYWRjcnVtYi1pdGVtXCJcbiAgICAgICAgICAqbmdJZj1cImJyZWFkY3J1bWIubGFiZWwudGl0bGUgJiYgKGJyZWFkY3J1bWIudXJsLnNsaWNlKC0xKSA9PSAnLycgfHwgbGFzdClcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInthY3RpdmU6IGxhc3R9XCI+XG4gICAgICAgIDxhICpuZ0lmPVwiIWxhc3RcIiBbcm91dGVyTGlua109XCJicmVhZGNydW1iLnVybFwiPnt7YnJlYWRjcnVtYi5sYWJlbC50aXRsZX19PC9hPlxuICAgICAgICA8c3BhbiAqbmdJZj1cImxhc3RcIiBbcm91dGVyTGlua109XCJicmVhZGNydW1iLnVybFwiPnt7YnJlYWRjcnVtYi5sYWJlbC50aXRsZX19PC9zcGFuPlxuICAgICAgPC9saT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcEJyZWFkY3J1bWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xuICBwdWJsaWMgYnJlYWRjcnVtYnM7XG4gIHByaXZhdGUgcmVhZG9ubHkgZml4ZWRDbGFzcyA9ICdicmVhZGNydW1iLWZpeGVkJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBzZXJ2aWNlOiBBcHBCcmVhZGNydW1iU2VydmljZSxcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWZcbiAgKSB7IH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgICB0aGlzLmlzRml4ZWQodGhpcy5maXhlZCk7XG4gICAgdGhpcy5icmVhZGNydW1icyA9IHRoaXMuc2VydmljZS5icmVhZGNydW1icztcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCB0aGlzLmZpeGVkQ2xhc3MpO1xuICB9XG5cbiAgaXNGaXhlZChmaXhlZDogYm9vbGVhbiA9IHRoaXMuZml4ZWQpOiB2b2lkIHtcbiAgICBpZiAoZml4ZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCB0aGlzLmZpeGVkQ2xhc3MpO1xuICAgIH1cbiAgfVxufVxuIl19