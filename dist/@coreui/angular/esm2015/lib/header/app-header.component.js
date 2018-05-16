/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            },] },
];
/** @nocollapse */
AppHeaderComponent.ctorParameters = () => [
    { type: ElementRef, },
];
AppHeaderComponent.propDecorators = {
    "fixed": [{ type: Input },],
    "navbarBrand": [{ type: Input },],
    "navbarBrandFull": [{ type: Input },],
    "navbarBrandMinimized": [{ type: Input },],
    "sidebarToggler": [{ type: Input },],
    "mobileSidebarToggler": [{ type: Input },],
    "asideMenuToggler": [{ type: Input },],
    "mobileAsideMenuToggler": [{ type: Input },],
};
function AppHeaderComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppHeaderComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppHeaderComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AppHeaderComponent.propDecorators;
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
    /** @type {?} */
    AppHeaderComponent.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQW9EdEMsTUFBTTs7OztJQWNKLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0tBQUk7Ozs7SUFFdEMsUUFBUTtRQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDMUI7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQWM7UUFDcEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7U0FBRTtLQUNsRjs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBVTtRQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7S0FDbkM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQVU7UUFDakIsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztLQUMzQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBVTtRQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0tBQzdDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFVO1FBQ2YsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUNuQzs7Ozs7SUFFRCxVQUFVLENBQUMsVUFBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0tBQ3JDOzs7WUE5RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Q1Q7YUFDRjs7OztZQXBEbUIsVUFBVTs7O3NCQXVEM0IsS0FBSzs0QkFFTCxLQUFLO2dDQUNMLEtBQUs7cUNBQ0wsS0FBSzsrQkFFTCxLQUFLO3FDQUNMLEtBQUs7aUNBRUwsS0FBSzt1Q0FDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXBsYWNlIH0gZnJvbSAnLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aGVhZGVyIGNsYXNzPVwiYXBwLWhlYWRlciBuYXZiYXJcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJtb2JpbGVTaWRlYmFyVG9nZ2xlciAhPSBmYWxzZVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXIgZC1sZy1ub25lXCIgdHlwZT1cImJ1dHRvblwiIGFwcFNpZGViYXJUb2dnbGVyPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIm5hdmJhckJyYW5kIHx8IG5hdmJhckJyYW5kRnVsbCB8fCBuYXZiYXJCcmFuZE1pbmltaXplZFwiPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgPGltZyAqbmdJZj1cIm5hdmJhckJyYW5kXCJcbiAgICAgICAgICAgICAgIFtzcmNdPVwiaW1nU3JjKG5hdmJhckJyYW5kKVwiXG4gICAgICAgICAgICAgICBbYXR0ci53aWR0aF09XCJpbWdXaWR0aChuYXZiYXJCcmFuZClcIlxuICAgICAgICAgICAgICAgW2F0dHIuaGVpZ2h0XT1cImltZ0hlaWdodChuYXZiYXJCcmFuZClcIlxuICAgICAgICAgICAgICAgW2F0dHIuYWx0XT1cImltZ0FsdChuYXZiYXJCcmFuZClcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgICA8aW1nICpuZ0lmPVwibmF2YmFyQnJhbmRGdWxsXCJcbiAgICAgICAgICAgICAgIFtzcmNdPVwiaW1nU3JjKG5hdmJhckJyYW5kRnVsbClcIlxuICAgICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwiaW1nV2lkdGgobmF2YmFyQnJhbmRGdWxsKVwiXG4gICAgICAgICAgICAgICBbYXR0ci5oZWlnaHRdPVwiaW1nSGVpZ2h0KG5hdmJhckJyYW5kRnVsbClcIlxuICAgICAgICAgICAgICAgW2F0dHIuYWx0XT1cImltZ0FsdChuYXZiYXJCcmFuZEZ1bGwpXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwibmF2YmFyLWJyYW5kLWZ1bGxcIj5cbiAgICAgICAgICA8aW1nICpuZ0lmPVwibmF2YmFyQnJhbmRNaW5pbWl6ZWRcIlxuICAgICAgICAgICAgICAgW3NyY109XCJpbWdTcmMobmF2YmFyQnJhbmRNaW5pbWl6ZWQpXCJcbiAgICAgICAgICAgICAgIFthdHRyLndpZHRoXT1cImltZ1dpZHRoKG5hdmJhckJyYW5kTWluaW1pemVkKVwiXG4gICAgICAgICAgICAgICBbYXR0ci5oZWlnaHRdPVwiaW1nSGVpZ2h0KG5hdmJhckJyYW5kTWluaW1pemVkKVwiXG4gICAgICAgICAgICAgICBbYXR0ci5hbHRdPVwiaW1nQWx0KG5hdmJhckJyYW5kTWluaW1pemVkKVwiXG4gICAgICAgICAgICAgICBjbGFzcz1cIm5hdmJhci1icmFuZC1taW5pbWl6ZWRcIj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJzaWRlYmFyVG9nZ2xlciAhPSBmYWxzZVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXIgZC1tZC1kb3duLW5vbmVcIiB0eXBlPVwiYnV0dG9uXCIgW2FwcFNpZGViYXJUb2dnbGVyXT1cInNpZGViYXJUb2dnbGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiYXNpZGVNZW51VG9nZ2xlciAhPSBmYWxzZVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXIgZC1tZC1kb3duLW5vbmVcIiB0eXBlPVwiYnV0dG9uXCIgW2FwcEFzaWRlTWVudVRvZ2dsZXJdPVwiYXNpZGVNZW51VG9nZ2xlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIm1vYmlsZUFzaWRlTWVudVRvZ2dsZXIgIT0gZmFsc2VcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGQtbGctbm9uZVwiIHR5cGU9XCJidXR0b25cIiBhcHBBc2lkZU1lbnVUb2dnbGVyPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvaGVhZGVyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgbmF2YmFyQnJhbmQ6IGFueTtcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRGdWxsOiBhbnk7XG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kTWluaW1pemVkOiBhbnk7XG5cbiAgQElucHV0KCkgc2lkZWJhclRvZ2dsZXI6IGFueTtcbiAgQElucHV0KCkgbW9iaWxlU2lkZWJhclRvZ2dsZXI6IGFueTtcblxuICBASW5wdXQoKSBhc2lkZU1lbnVUb2dnbGVyOiBhbnk7XG4gIEBJbnB1dCgpIG1vYmlsZUFzaWRlTWVudVRvZ2dsZXI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gICAgdGhpcy5pc0ZpeGVkKHRoaXMuZml4ZWQpO1xuICB9XG5cbiAgaXNGaXhlZChmaXhlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpeGVkKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItZml4ZWQnKTsgfVxuICB9XG5cbiAgaW1nU3JjKGJyYW5kOiBhbnkpOiB2b2lkIHtcbiAgICByZXR1cm4gYnJhbmQuc3JjID8gYnJhbmQuc3JjIDogJyc7XG4gIH1cblxuICBpbWdXaWR0aChicmFuZDogYW55KTogdm9pZCB7XG4gICAgcmV0dXJuIGJyYW5kLndpZHRoID8gYnJhbmQud2lkdGggOiAnYXV0byc7XG4gIH1cblxuICBpbWdIZWlnaHQoYnJhbmQ6IGFueSk6IHZvaWQge1xuICAgIHJldHVybiBicmFuZC5oZWlnaHQgPyBicmFuZC5oZWlnaHQgOiAnYXV0byc7XG4gIH1cblxuICBpbWdBbHQoYnJhbmQ6IGFueSk6IHZvaWQge1xuICAgIHJldHVybiBicmFuZC5hbHQgPyBicmFuZC5hbHQgOiAnJztcbiAgfVxuXG4gIGJyZWFrcG9pbnQoYnJlYWtwb2ludDogYW55KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coYnJlYWtwb2ludCk7XG4gICAgcmV0dXJuIGJyZWFrcG9pbnQgPyBicmVha3BvaW50IDogJyc7XG4gIH1cbn1cbiJdfQ==