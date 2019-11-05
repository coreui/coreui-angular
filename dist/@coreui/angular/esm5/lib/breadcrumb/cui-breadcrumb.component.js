import { __decorate, __metadata, __param } from "tslib";
import { Component, ElementRef, Inject, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AppBreadcrumbService } from './app-breadcrumb.service';
var CuiBreadcrumbComponent = /** @class */ (function () {
    function CuiBreadcrumbComponent(document, renderer, service) {
        this.document = document;
        this.renderer = renderer;
        this.service = service;
        this.fixedClass = 'breadcrumb-fixed';
    }
    CuiBreadcrumbComponent.prototype.ngOnInit = function () {
        this.isFixed(this.fixed);
        this.breadcrumbs = this.service.breadcrumbs;
    };
    CuiBreadcrumbComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    };
    CuiBreadcrumbComponent.prototype.isFixed = function (fixed) {
        if (fixed === void 0) { fixed = this.fixed; }
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    };
    CuiBreadcrumbComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: AppBreadcrumbService }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CuiBreadcrumbComponent.prototype, "fixed", void 0);
    CuiBreadcrumbComponent = __decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: 'cui-breadcrumb',
            template: "<ol class=\"breadcrumb\">\r\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs | async\" let-last = last>\r\n    <li class=\"breadcrumb-item\"\r\n        *ngIf=\"breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)\"\r\n        [ngClass]=\"{active: last}\">\r\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\r\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\r\n    </li>\r\n  </ng-template>\r\n  <ng-content></ng-content>\r\n</ol>\r\n"
        }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object, Renderer2,
            AppBreadcrumbService])
    ], CuiBreadcrumbComponent);
    return CuiBreadcrumbComponent;
}());
export { CuiBreadcrumbComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VpLWJyZWFkY3J1bWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvY3VpLWJyZWFkY3J1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQU85RDtJQU1FLGdDQUM0QixRQUFhLEVBQy9CLFFBQW1CLEVBQ3BCLE9BQTZCO1FBRlYsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3BCLFlBQU8sR0FBUCxPQUFPLENBQXNCO1FBTHJCLGVBQVUsR0FBRyxrQkFBa0IsQ0FBQztJQU03QyxDQUFDO0lBRUUseUNBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDOUMsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELHdDQUFPLEdBQVAsVUFBUSxLQUEyQjtRQUEzQixzQkFBQSxFQUFBLFFBQWlCLElBQUksQ0FBQyxLQUFLO1FBQ2pDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQzs7Z0RBbEJFLE1BQU0sU0FBQyxRQUFRO2dCQUNFLFNBQVM7Z0JBQ1gsb0JBQW9COztJQVI3QjtRQUFSLEtBQUssRUFBRTs7eURBQWdCO0lBRGIsc0JBQXNCO1FBTGxDLFNBQVMsQ0FBQztZQUNULDhDQUE4QztZQUM5QyxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLDhpQkFBOEM7U0FDL0MsQ0FBQztRQVFHLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2lEQUNDLFNBQVM7WUFDWCxvQkFBb0I7T0FUM0Isc0JBQXNCLENBMEJsQztJQUFELDZCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0ExQlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHtBcHBCcmVhZGNydW1iU2VydmljZX0gZnJvbSAnLi9hcHAtYnJlYWRjcnVtYi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2N1aS1icmVhZGNydW1iJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY3VpLWJyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdWlCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgYnJlYWRjcnVtYnM7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBmaXhlZENsYXNzID0gJ2JyZWFkY3J1bWItZml4ZWQnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHB1YmxpYyBzZXJ2aWNlOiBBcHBCcmVhZGNydW1iU2VydmljZSxcclxuICApIHsgfVxyXG5cclxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRml4ZWQodGhpcy5maXhlZCk7XHJcbiAgICB0aGlzLmJyZWFkY3J1bWJzID0gdGhpcy5zZXJ2aWNlLmJyZWFkY3J1bWJzO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5maXhlZENsYXNzKTtcclxuICB9XHJcblxyXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4gPSB0aGlzLmZpeGVkKTogdm9pZCB7XHJcbiAgICBpZiAoZml4ZWQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuZml4ZWRDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==