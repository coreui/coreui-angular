/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { Replace } from './../shared';
export class AppHeaderComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        Replace(this.el);
        this.isFixed(this.fixed);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        document.body.classList.remove('header-fixed');
    }
    /**
     * @param {?} fixed
     * @return {?}
     */
    isFixed(fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('header-fixed');
        }
    }
    /**
     * @param {?} brand
     * @return {?}
     */
    imgSrc(brand) {
        return brand.src ? brand.src : '';
    }
    /**
     * @param {?} brand
     * @return {?}
     */
    imgWidth(brand) {
        return brand.width ? brand.width : 'auto';
    }
    /**
     * @param {?} brand
     * @return {?}
     */
    imgHeight(brand) {
        return brand.height ? brand.height : 'auto';
    }
    /**
     * @param {?} brand
     * @return {?}
     */
    imgAlt(brand) {
        return brand.alt ? brand.alt : '';
    }
    /**
     * @param {?} breakpoint
     * @return {?}
     */
    breakpoint(breakpoint) {
        console.log(breakpoint);
        return breakpoint ? breakpoint : '';
    }
}
AppHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-header',
                template: `
    <header class="app-header navbar">
      <ng-template [ngIf]="mobileSidebarToggler != false">
        <button class="navbar-toggler d-lg-none" type="button" appSidebarToggler>
          <span class="navbar-toggler-icon"></span>
        </button>
      </ng-template>
      <ng-template [ngIf]="navbarBrand || navbarBrandFull || navbarBrandMinimized">
        <a class="navbar-brand" href="#">
          <img *ngIf="navbarBrand"
               [src]="imgSrc(navbarBrand)"
               [attr.width]="imgWidth(navbarBrand)"
               [attr.height]="imgHeight(navbarBrand)"
               [attr.alt]="imgAlt(navbarBrand)"
               class="navbar-brand">
          <img *ngIf="navbarBrandFull"
               [src]="imgSrc(navbarBrandFull)"
               [attr.width]="imgWidth(navbarBrandFull)"
               [attr.height]="imgHeight(navbarBrandFull)"
               [attr.alt]="imgAlt(navbarBrandFull)"
               class="navbar-brand-full">
          <img *ngIf="navbarBrandMinimized"
               [src]="imgSrc(navbarBrandMinimized)"
               [attr.width]="imgWidth(navbarBrandMinimized)"
               [attr.height]="imgHeight(navbarBrandMinimized)"
               [attr.alt]="imgAlt(navbarBrandMinimized)"
               class="navbar-brand-minimized">
        </a>
      </ng-template>
      <ng-template [ngIf]="sidebarToggler != false">
        <button class="navbar-toggler d-md-down-none" type="button" [appSidebarToggler]="sidebarToggler">
          <span class="navbar-toggler-icon"></span>
        </button>
      </ng-template>
      <ng-content></ng-content>
      <ng-template [ngIf]="asideMenuToggler != false">
        <button class="navbar-toggler d-md-down-none" type="button" [appAsideMenuToggler]="asideMenuToggler">
          <span class="navbar-toggler-icon"></span>
        </button>
      </ng-template>
      <ng-template [ngIf]="mobileAsideMenuToggler != false">
        <button class="navbar-toggler d-lg-none" type="button" appAsideMenuToggler>
          <span class="navbar-toggler-icon"></span>
        </button>
      </ng-template>
    </header>
  `
            }] }
];
/** @nocollapse */
AppHeaderComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFvRHRDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFjN0IsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBRyxDQUFDOzs7O0lBRXRDLFFBQVE7UUFDTixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQWM7UUFDcEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQUU7SUFDbkYsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBVTtRQUNmLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQVU7UUFDakIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBVTtRQUNsQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFVO1FBQ2YsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsVUFBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7WUFsR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Q1Q7YUFDRjs7OztZQXBEbUIsVUFBVTs7O29CQXVEM0IsS0FBSzswQkFFTCxLQUFLOzhCQUNMLEtBQUs7bUNBQ0wsS0FBSzs2QkFFTCxLQUFLO21DQUNMLEtBQUs7K0JBRUwsS0FBSztxQ0FDTCxLQUFLOzs7O0lBVk4sbUNBQXdCOztJQUV4Qix5Q0FBMEI7O0lBQzFCLDZDQUE4Qjs7SUFDOUIsa0RBQW1DOztJQUVuQyw0Q0FBNkI7O0lBQzdCLGtEQUFtQzs7SUFFbkMsOENBQStCOztJQUMvQixvREFBcUM7Ozs7O0lBRXpCLGdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aGVhZGVyIGNsYXNzPVwiYXBwLWhlYWRlciBuYXZiYXJcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJtb2JpbGVTaWRlYmFyVG9nZ2xlciAhPSBmYWxzZVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXIgZC1sZy1ub25lXCIgdHlwZT1cImJ1dHRvblwiIGFwcFNpZGViYXJUb2dnbGVyPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIm5hdmJhckJyYW5kIHx8IG5hdmJhckJyYW5kRnVsbCB8fCBuYXZiYXJCcmFuZE1pbmltaXplZFwiPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgPGltZyAqbmdJZj1cIm5hdmJhckJyYW5kXCJcbiAgICAgICAgICAgICAgIFtzcmNdPVwiaW1nU3JjKG5hdmJhckJyYW5kKVwiXG4gICAgICAgICAgICAgICBbYXR0ci53aWR0aF09XCJpbWdXaWR0aChuYXZiYXJCcmFuZClcIlxuICAgICAgICAgICAgICAgW2F0dHIuaGVpZ2h0XT1cImltZ0hlaWdodChuYXZiYXJCcmFuZClcIlxuICAgICAgICAgICAgICAgW2F0dHIuYWx0XT1cImltZ0FsdChuYXZiYXJCcmFuZClcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgICA8aW1nICpuZ0lmPVwibmF2YmFyQnJhbmRGdWxsXCJcbiAgICAgICAgICAgICAgIFtzcmNdPVwiaW1nU3JjKG5hdmJhckJyYW5kRnVsbClcIlxuICAgICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwiaW1nV2lkdGgobmF2YmFyQnJhbmRGdWxsKVwiXG4gICAgICAgICAgICAgICBbYXR0ci5oZWlnaHRdPVwiaW1nSGVpZ2h0KG5hdmJhckJyYW5kRnVsbClcIlxuICAgICAgICAgICAgICAgW2F0dHIuYWx0XT1cImltZ0FsdChuYXZiYXJCcmFuZEZ1bGwpXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwibmF2YmFyLWJyYW5kLWZ1bGxcIj5cbiAgICAgICAgICA8aW1nICpuZ0lmPVwibmF2YmFyQnJhbmRNaW5pbWl6ZWRcIlxuICAgICAgICAgICAgICAgW3NyY109XCJpbWdTcmMobmF2YmFyQnJhbmRNaW5pbWl6ZWQpXCJcbiAgICAgICAgICAgICAgIFthdHRyLndpZHRoXT1cImltZ1dpZHRoKG5hdmJhckJyYW5kTWluaW1pemVkKVwiXG4gICAgICAgICAgICAgICBbYXR0ci5oZWlnaHRdPVwiaW1nSGVpZ2h0KG5hdmJhckJyYW5kTWluaW1pemVkKVwiXG4gICAgICAgICAgICAgICBbYXR0ci5hbHRdPVwiaW1nQWx0KG5hdmJhckJyYW5kTWluaW1pemVkKVwiXG4gICAgICAgICAgICAgICBjbGFzcz1cIm5hdmJhci1icmFuZC1taW5pbWl6ZWRcIj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJzaWRlYmFyVG9nZ2xlciAhPSBmYWxzZVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXIgZC1tZC1kb3duLW5vbmVcIiB0eXBlPVwiYnV0dG9uXCIgW2FwcFNpZGViYXJUb2dnbGVyXT1cInNpZGViYXJUb2dnbGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiYXNpZGVNZW51VG9nZ2xlciAhPSBmYWxzZVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXIgZC1tZC1kb3duLW5vbmVcIiB0eXBlPVwiYnV0dG9uXCIgW2FwcEFzaWRlTWVudVRvZ2dsZXJdPVwiYXNpZGVNZW51VG9nZ2xlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIm1vYmlsZUFzaWRlTWVudVRvZ2dsZXIgIT0gZmFsc2VcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGQtbGctbm9uZVwiIHR5cGU9XCJidXR0b25cIiBhcHBBc2lkZU1lbnVUb2dnbGVyPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvaGVhZGVyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSBmaXhlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBuYXZiYXJCcmFuZDogYW55O1xuICBASW5wdXQoKSBuYXZiYXJCcmFuZEZ1bGw6IGFueTtcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRNaW5pbWl6ZWQ6IGFueTtcblxuICBASW5wdXQoKSBzaWRlYmFyVG9nZ2xlcjogYW55O1xuICBASW5wdXQoKSBtb2JpbGVTaWRlYmFyVG9nZ2xlcjogYW55O1xuXG4gIEBJbnB1dCgpIGFzaWRlTWVudVRvZ2dsZXI6IGFueTtcbiAgQElucHV0KCkgbW9iaWxlQXNpZGVNZW51VG9nZ2xlcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcbiAgICB0aGlzLmlzRml4ZWQodGhpcy5maXhlZCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci1maXhlZCcpO1xuICB9XG5cbiAgaXNGaXhlZChmaXhlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpeGVkKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItZml4ZWQnKTsgfVxuICB9XG5cbiAgaW1nU3JjKGJyYW5kOiBhbnkpOiB2b2lkIHtcbiAgICByZXR1cm4gYnJhbmQuc3JjID8gYnJhbmQuc3JjIDogJyc7XG4gIH1cblxuICBpbWdXaWR0aChicmFuZDogYW55KTogdm9pZCB7XG4gICAgcmV0dXJuIGJyYW5kLndpZHRoID8gYnJhbmQud2lkdGggOiAnYXV0byc7XG4gIH1cblxuICBpbWdIZWlnaHQoYnJhbmQ6IGFueSk6IHZvaWQge1xuICAgIHJldHVybiBicmFuZC5oZWlnaHQgPyBicmFuZC5oZWlnaHQgOiAnYXV0byc7XG4gIH1cblxuICBpbWdBbHQoYnJhbmQ6IGFueSk6IHZvaWQge1xuICAgIHJldHVybiBicmFuZC5hbHQgPyBicmFuZC5hbHQgOiAnJztcbiAgfVxuXG4gIGJyZWFrcG9pbnQoYnJlYWtwb2ludDogYW55KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coYnJlYWtwb2ludCk7XG4gICAgcmV0dXJuIGJyZWFrcG9pbnQgPyBicmVha3BvaW50IDogJyc7XG4gIH1cbn1cbiJdfQ==