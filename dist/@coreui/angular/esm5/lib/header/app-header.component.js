/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { Replace } from './../shared';
var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    AppHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        Replace(this.el);
        this.isFixed(this.fixed);
    };
    /**
     * @return {?}
     */
    AppHeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        document.body.classList.remove('header-fixed');
    };
    /**
     * @param {?} fixed
     * @return {?}
     */
    AppHeaderComponent.prototype.isFixed = /**
     * @param {?} fixed
     * @return {?}
     */
    function (fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('header-fixed');
        }
    };
    /**
     * @param {?} brand
     * @return {?}
     */
    AppHeaderComponent.prototype.imgSrc = /**
     * @param {?} brand
     * @return {?}
     */
    function (brand) {
        return brand.src ? brand.src : '';
    };
    /**
     * @param {?} brand
     * @return {?}
     */
    AppHeaderComponent.prototype.imgWidth = /**
     * @param {?} brand
     * @return {?}
     */
    function (brand) {
        return brand.width ? brand.width : 'auto';
    };
    /**
     * @param {?} brand
     * @return {?}
     */
    AppHeaderComponent.prototype.imgHeight = /**
     * @param {?} brand
     * @return {?}
     */
    function (brand) {
        return brand.height ? brand.height : 'auto';
    };
    /**
     * @param {?} brand
     * @return {?}
     */
    AppHeaderComponent.prototype.imgAlt = /**
     * @param {?} brand
     * @return {?}
     */
    function (brand) {
        return brand.alt ? brand.alt : '';
    };
    /**
     * @param {?} breakpoint
     * @return {?}
     */
    AppHeaderComponent.prototype.breakpoint = /**
     * @param {?} breakpoint
     * @return {?}
     */
    function (breakpoint) {
        console.log(breakpoint);
        return breakpoint ? breakpoint : '';
    };
    AppHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-header',
                    template: "\n    <header class=\"app-header navbar\">\n      <ng-template [ngIf]=\"mobileSidebarToggler != false\">\n        <button class=\"navbar-toggler d-lg-none\" type=\"button\" appSidebarToggler>\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </ng-template>\n      <ng-template [ngIf]=\"navbarBrand || navbarBrandFull || navbarBrandMinimized\">\n        <a class=\"navbar-brand\" href=\"#\">\n          <img *ngIf=\"navbarBrand\"\n               [src]=\"imgSrc(navbarBrand)\"\n               [attr.width]=\"imgWidth(navbarBrand)\"\n               [attr.height]=\"imgHeight(navbarBrand)\"\n               [attr.alt]=\"imgAlt(navbarBrand)\"\n               class=\"navbar-brand\">\n          <img *ngIf=\"navbarBrandFull\"\n               [src]=\"imgSrc(navbarBrandFull)\"\n               [attr.width]=\"imgWidth(navbarBrandFull)\"\n               [attr.height]=\"imgHeight(navbarBrandFull)\"\n               [attr.alt]=\"imgAlt(navbarBrandFull)\"\n               class=\"navbar-brand-full\">\n          <img *ngIf=\"navbarBrandMinimized\"\n               [src]=\"imgSrc(navbarBrandMinimized)\"\n               [attr.width]=\"imgWidth(navbarBrandMinimized)\"\n               [attr.height]=\"imgHeight(navbarBrandMinimized)\"\n               [attr.alt]=\"imgAlt(navbarBrandMinimized)\"\n               class=\"navbar-brand-minimized\">\n        </a>\n      </ng-template>\n      <ng-template [ngIf]=\"sidebarToggler != false\">\n        <button class=\"navbar-toggler d-md-down-none\" type=\"button\" [appSidebarToggler]=\"sidebarToggler\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </ng-template>\n      <ng-content></ng-content>\n      <ng-template [ngIf]=\"asideMenuToggler != false\">\n        <button class=\"navbar-toggler d-md-down-none\" type=\"button\" [appAsideMenuToggler]=\"asideMenuToggler\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </ng-template>\n      <ng-template [ngIf]=\"mobileAsideMenuToggler != false\">\n        <button class=\"navbar-toggler d-lg-none\" type=\"button\" appAsideMenuToggler>\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </ng-template>\n    </header>\n  "
                }] }
    ];
    /** @nocollapse */
    AppHeaderComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    AppHeaderComponent.propDecorators = {
        fixed: [{ type: Input }],
        navbarBrand: [{ type: Input }],
        navbarBrandFull: [{ type: Input }],
        navbarBrandMinimized: [{ type: Input }],
        sidebarToggler: [{ type: Input }],
        mobileSidebarToggler: [{ type: Input }],
        asideMenuToggler: [{ type: Input }],
        mobileAsideMenuToggler: [{ type: Input }]
    };
    return AppHeaderComponent;
}());
export { AppHeaderComponent };
if (false) {
    /** @type {?} */
    AppHeaderComponent.prototype.fixed;
    /** @type {?} */
    AppHeaderComponent.prototype.navbarBrand;
    /** @type {?} */
    AppHeaderComponent.prototype.navbarBrandFull;
    /** @type {?} */
    AppHeaderComponent.prototype.navbarBrandMinimized;
    /** @type {?} */
    AppHeaderComponent.prototype.sidebarToggler;
    /** @type {?} */
    AppHeaderComponent.prototype.mobileSidebarToggler;
    /** @type {?} */
    AppHeaderComponent.prototype.asideMenuToggler;
    /** @type {?} */
    AppHeaderComponent.prototype.mobileAsideMenuToggler;
    /**
     * @type {?}
     * @private
     */
    AppHeaderComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFdEM7SUFnRUUsNEJBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQzs7OztJQUV0QyxxQ0FBUTs7O0lBQVI7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFRCxvQ0FBTzs7OztJQUFQLFVBQVEsS0FBYztRQUNwQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7U0FBRTtJQUNuRixDQUFDOzs7OztJQUVELG1DQUFNOzs7O0lBQU4sVUFBTyxLQUFVO1FBQ2YsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxxQ0FBUTs7OztJQUFSLFVBQVMsS0FBVTtRQUNqQixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELHNDQUFTOzs7O0lBQVQsVUFBVSxLQUFVO1FBQ2xCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBRUQsbUNBQU07Ozs7SUFBTixVQUFPLEtBQVU7UUFDZixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELHVDQUFVOzs7O0lBQVYsVUFBVyxVQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3RDLENBQUM7O2dCQWxHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSw2ckVBOENUO2lCQUNGOzs7O2dCQXBEbUIsVUFBVTs7O3dCQXVEM0IsS0FBSzs4QkFFTCxLQUFLO2tDQUNMLEtBQUs7dUNBQ0wsS0FBSztpQ0FFTCxLQUFLO3VDQUNMLEtBQUs7bUNBRUwsS0FBSzt5Q0FDTCxLQUFLOztJQXFDUix5QkFBQztDQUFBLEFBbkdELElBbUdDO1NBakRZLGtCQUFrQjs7O0lBRTdCLG1DQUF3Qjs7SUFFeEIseUNBQTBCOztJQUMxQiw2Q0FBOEI7O0lBQzlCLGtEQUFtQzs7SUFFbkMsNENBQTZCOztJQUM3QixrREFBbUM7O0lBRW5DLDhDQUErQjs7SUFDL0Isb0RBQXFDOzs7OztJQUV6QixnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGFjZSB9IGZyb20gJy4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGhlYWRlciBjbGFzcz1cImFwcC1oZWFkZXIgbmF2YmFyXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwibW9iaWxlU2lkZWJhclRvZ2dsZXIgIT0gZmFsc2VcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGQtbGctbm9uZVwiIHR5cGU9XCJidXR0b25cIiBhcHBTaWRlYmFyVG9nZ2xlcj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJuYXZiYXJCcmFuZCB8fCBuYXZiYXJCcmFuZEZ1bGwgfHwgbmF2YmFyQnJhbmRNaW5pbWl6ZWRcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlxuICAgICAgICAgIDxpbWcgKm5nSWY9XCJuYXZiYXJCcmFuZFwiXG4gICAgICAgICAgICAgICBbc3JjXT1cImltZ1NyYyhuYXZiYXJCcmFuZClcIlxuICAgICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwiaW1nV2lkdGgobmF2YmFyQnJhbmQpXCJcbiAgICAgICAgICAgICAgIFthdHRyLmhlaWdodF09XCJpbWdIZWlnaHQobmF2YmFyQnJhbmQpXCJcbiAgICAgICAgICAgICAgIFthdHRyLmFsdF09XCJpbWdBbHQobmF2YmFyQnJhbmQpXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwibmF2YmFyLWJyYW5kXCI+XG4gICAgICAgICAgPGltZyAqbmdJZj1cIm5hdmJhckJyYW5kRnVsbFwiXG4gICAgICAgICAgICAgICBbc3JjXT1cImltZ1NyYyhuYXZiYXJCcmFuZEZ1bGwpXCJcbiAgICAgICAgICAgICAgIFthdHRyLndpZHRoXT1cImltZ1dpZHRoKG5hdmJhckJyYW5kRnVsbClcIlxuICAgICAgICAgICAgICAgW2F0dHIuaGVpZ2h0XT1cImltZ0hlaWdodChuYXZiYXJCcmFuZEZ1bGwpXCJcbiAgICAgICAgICAgICAgIFthdHRyLmFsdF09XCJpbWdBbHQobmF2YmFyQnJhbmRGdWxsKVwiXG4gICAgICAgICAgICAgICBjbGFzcz1cIm5hdmJhci1icmFuZC1mdWxsXCI+XG4gICAgICAgICAgPGltZyAqbmdJZj1cIm5hdmJhckJyYW5kTWluaW1pemVkXCJcbiAgICAgICAgICAgICAgIFtzcmNdPVwiaW1nU3JjKG5hdmJhckJyYW5kTWluaW1pemVkKVwiXG4gICAgICAgICAgICAgICBbYXR0ci53aWR0aF09XCJpbWdXaWR0aChuYXZiYXJCcmFuZE1pbmltaXplZClcIlxuICAgICAgICAgICAgICAgW2F0dHIuaGVpZ2h0XT1cImltZ0hlaWdodChuYXZiYXJCcmFuZE1pbmltaXplZClcIlxuICAgICAgICAgICAgICAgW2F0dHIuYWx0XT1cImltZ0FsdChuYXZiYXJCcmFuZE1pbmltaXplZClcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJuYXZiYXItYnJhbmQtbWluaW1pemVkXCI+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwic2lkZWJhclRvZ2dsZXIgIT0gZmFsc2VcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGQtbWQtZG93bi1ub25lXCIgdHlwZT1cImJ1dHRvblwiIFthcHBTaWRlYmFyVG9nZ2xlcl09XCJzaWRlYmFyVG9nZ2xlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImFzaWRlTWVudVRvZ2dsZXIgIT0gZmFsc2VcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGQtbWQtZG93bi1ub25lXCIgdHlwZT1cImJ1dHRvblwiIFthcHBBc2lkZU1lbnVUb2dnbGVyXT1cImFzaWRlTWVudVRvZ2dsZXJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJtb2JpbGVBc2lkZU1lbnVUb2dnbGVyICE9IGZhbHNlXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlciBkLWxnLW5vbmVcIiB0eXBlPVwiYnV0dG9uXCIgYXBwQXNpZGVNZW51VG9nZ2xlcj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2hlYWRlcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgbmF2YmFyQnJhbmQ6IGFueTtcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRGdWxsOiBhbnk7XG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kTWluaW1pemVkOiBhbnk7XG5cbiAgQElucHV0KCkgc2lkZWJhclRvZ2dsZXI6IGFueTtcbiAgQElucHV0KCkgbW9iaWxlU2lkZWJhclRvZ2dsZXI6IGFueTtcblxuICBASW5wdXQoKSBhc2lkZU1lbnVUb2dnbGVyOiBhbnk7XG4gIEBJbnB1dCgpIG1vYmlsZUFzaWRlTWVudVRvZ2dsZXI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gICAgdGhpcy5pc0ZpeGVkKHRoaXMuZml4ZWQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItZml4ZWQnKTtcbiAgfVxuXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maXhlZCkgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWZpeGVkJyk7IH1cbiAgfVxuXG4gIGltZ1NyYyhicmFuZDogYW55KTogdm9pZCB7XG4gICAgcmV0dXJuIGJyYW5kLnNyYyA/IGJyYW5kLnNyYyA6ICcnO1xuICB9XG5cbiAgaW1nV2lkdGgoYnJhbmQ6IGFueSk6IHZvaWQge1xuICAgIHJldHVybiBicmFuZC53aWR0aCA/IGJyYW5kLndpZHRoIDogJ2F1dG8nO1xuICB9XG5cbiAgaW1nSGVpZ2h0KGJyYW5kOiBhbnkpOiB2b2lkIHtcbiAgICByZXR1cm4gYnJhbmQuaGVpZ2h0ID8gYnJhbmQuaGVpZ2h0IDogJ2F1dG8nO1xuICB9XG5cbiAgaW1nQWx0KGJyYW5kOiBhbnkpOiB2b2lkIHtcbiAgICByZXR1cm4gYnJhbmQuYWx0ID8gYnJhbmQuYWx0IDogJyc7XG4gIH1cblxuICBicmVha3BvaW50KGJyZWFrcG9pbnQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGJyZWFrcG9pbnQpO1xuICAgIHJldHVybiBicmVha3BvaW50ID8gYnJlYWtwb2ludCA6ICcnO1xuICB9XG59XG4iXX0=