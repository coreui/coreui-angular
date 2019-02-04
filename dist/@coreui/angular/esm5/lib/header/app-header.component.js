/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Replace } from '../shared';
var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent(document, renderer, el) {
        this.document = document;
        this.renderer = renderer;
        this.el = el;
        this.navbarBrandText = { icon: '🅲', text: '🅲 CoreUI' };
        this.navbarBrandHref = '';
        this.fixedClass = 'header-fixed';
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
        this.navbarBrandImg = Boolean(this.navbarBrand || this.navbarBrandFull || this.navbarBrandMinimized);
    };
    /**
     * @return {?}
     */
    AppHeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    };
    /**
     * @param {?=} fixed
     * @return {?}
     */
    AppHeaderComponent.prototype.isFixed = /**
     * @param {?=} fixed
     * @return {?}
     */
    function (fixed) {
        if (fixed === void 0) { fixed = this.fixed; }
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    };
    AppHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-header',
                    template: "\n    <header class=\"app-header navbar\">\n      <ng-template [ngIf]=\"mobileSidebarToggler != false\">\n        <button class=\"navbar-toggler d-lg-none\" type=\"button\" appSidebarToggler>\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </ng-template>\n        <a class=\"navbar-brand\" [href]=\"navbarBrandHref\">\n          <ng-template [ngIf]=\"navbarBrandImg\">\n          <img *ngIf=\"navbarBrand\"\n               [appHtmlAttr]=\"navbarBrand\"\n               [ngClass]=\"'navbar-brand'\">\n          <img *ngIf=\"navbarBrandFull\"\n               [appHtmlAttr]=\"navbarBrandFull\"\n               [ngClass]=\"'navbar-brand-full'\">\n          <img *ngIf=\"navbarBrandMinimized\"\n               [appHtmlAttr]=\"navbarBrandMinimized\"\n               [ngClass]=\"'navbar-brand-minimized'\">\n          </ng-template>\n          <ng-template [ngIf]=\"!navbarBrandImg\">\n            <div class=\"navbar-brand-full\" [innerHTML]=\"navbarBrandText.text\"></div>\n            <div class=\"navbar-brand-minimized\" [innerHTML]=\"navbarBrandText.icon\"></div>\n          </ng-template>\n        </a>\n      <ng-template [ngIf]=\"sidebarToggler != false\">\n        <button class=\"navbar-toggler d-md-down-none\" type=\"button\" [appSidebarToggler]=\"sidebarToggler\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </ng-template>\n      <ng-content></ng-content>\n      <ng-template [ngIf]=\"asideMenuToggler != false\">\n        <button class=\"navbar-toggler d-md-down-none\" type=\"button\" [appAsideMenuToggler]=\"asideMenuToggler\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </ng-template>\n      <ng-template [ngIf]=\"mobileAsideMenuToggler != false\">\n        <button class=\"navbar-toggler d-lg-none\" type=\"button\" appAsideMenuToggler>\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </ng-template>\n    </header>\n  "
                }] }
    ];
    /** @nocollapse */
    AppHeaderComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    AppHeaderComponent.propDecorators = {
        fixed: [{ type: Input }],
        navbarBrand: [{ type: Input }],
        navbarBrandFull: [{ type: Input }],
        navbarBrandMinimized: [{ type: Input }],
        navbarBrandText: [{ type: Input }],
        navbarBrandHref: [{ type: Input }],
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
    AppHeaderComponent.prototype.navbarBrandText;
    /** @type {?} */
    AppHeaderComponent.prototype.navbarBrandHref;
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
    AppHeaderComponent.prototype.fixedClass;
    /** @type {?} */
    AppHeaderComponent.prototype.navbarBrandImg;
    /**
     * @type {?}
     * @private
     */
    AppHeaderComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    AppHeaderComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    AppHeaderComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFcEM7SUFnRUUsNEJBQzRCLFFBQWEsRUFDL0IsUUFBbUIsRUFDbkIsRUFBYztRQUZJLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBZmYsb0JBQWUsR0FBUSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQyxDQUFDO1FBQ3ZELG9CQUFlLEdBQVEsRUFBRSxDQUFDO1FBUWxCLGVBQVUsR0FBRyxjQUFjLENBQUM7SUFPMUMsQ0FBQzs7OztJQUVKLHFDQUFROzs7SUFBUjtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFFRCxvQ0FBTzs7OztJQUFQLFVBQVEsS0FBMkI7UUFBM0Isc0JBQUEsRUFBQSxRQUFpQixJQUFJLENBQUMsS0FBSztRQUNqQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM3RDtJQUNILENBQUM7O2dCQXBGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxzN0RBeUNUO2lCQUNGOzs7O2dEQXFCSSxNQUFNLFNBQUMsUUFBUTtnQkF0RTZDLFNBQVM7Z0JBQXZELFVBQVU7Ozt3QkFvRDFCLEtBQUs7OEJBRUwsS0FBSztrQ0FDTCxLQUFLO3VDQUNMLEtBQUs7a0NBQ0wsS0FBSztrQ0FDTCxLQUFLO2lDQUVMLEtBQUs7dUNBQ0wsS0FBSzttQ0FFTCxLQUFLO3lDQUNMLEtBQUs7O0lBMEJSLHlCQUFDO0NBQUEsQUFyRkQsSUFxRkM7U0F4Q1ksa0JBQWtCOzs7SUFFN0IsbUNBQXdCOztJQUV4Qix5Q0FBMEI7O0lBQzFCLDZDQUE4Qjs7SUFDOUIsa0RBQW1DOztJQUNuQyw2Q0FBZ0U7O0lBQ2hFLDZDQUFtQzs7SUFFbkMsNENBQTZCOztJQUM3QixrREFBbUM7O0lBRW5DLDhDQUErQjs7SUFDL0Isb0RBQXFDOzs7OztJQUVyQyx3Q0FBNkM7O0lBQzdDLDRDQUF3Qjs7Ozs7SUFHdEIsc0NBQXVDOzs7OztJQUN2QyxzQ0FBMkI7Ozs7O0lBQzNCLGdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIEluamVjdCwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgUmVwbGFjZSB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoZWFkZXIgY2xhc3M9XCJhcHAtaGVhZGVyIG5hdmJhclwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIm1vYmlsZVNpZGViYXJUb2dnbGVyICE9IGZhbHNlXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlciBkLWxnLW5vbmVcIiB0eXBlPVwiYnV0dG9uXCIgYXBwU2lkZWJhclRvZ2dsZXI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgW2hyZWZdPVwibmF2YmFyQnJhbmRIcmVmXCI+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIm5hdmJhckJyYW5kSW1nXCI+XG4gICAgICAgICAgPGltZyAqbmdJZj1cIm5hdmJhckJyYW5kXCJcbiAgICAgICAgICAgICAgIFthcHBIdG1sQXR0cl09XCJuYXZiYXJCcmFuZFwiXG4gICAgICAgICAgICAgICBbbmdDbGFzc109XCInbmF2YmFyLWJyYW5kJ1wiPlxuICAgICAgICAgIDxpbWcgKm5nSWY9XCJuYXZiYXJCcmFuZEZ1bGxcIlxuICAgICAgICAgICAgICAgW2FwcEh0bWxBdHRyXT1cIm5hdmJhckJyYW5kRnVsbFwiXG4gICAgICAgICAgICAgICBbbmdDbGFzc109XCInbmF2YmFyLWJyYW5kLWZ1bGwnXCI+XG4gICAgICAgICAgPGltZyAqbmdJZj1cIm5hdmJhckJyYW5kTWluaW1pemVkXCJcbiAgICAgICAgICAgICAgIFthcHBIdG1sQXR0cl09XCJuYXZiYXJCcmFuZE1pbmltaXplZFwiXG4gICAgICAgICAgICAgICBbbmdDbGFzc109XCInbmF2YmFyLWJyYW5kLW1pbmltaXplZCdcIj5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCIhbmF2YmFyQnJhbmRJbWdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItYnJhbmQtZnVsbFwiIFtpbm5lckhUTUxdPVwibmF2YmFyQnJhbmRUZXh0LnRleHRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItYnJhbmQtbWluaW1pemVkXCIgW2lubmVySFRNTF09XCJuYXZiYXJCcmFuZFRleHQuaWNvblwiPjwvZGl2PlxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvYT5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJzaWRlYmFyVG9nZ2xlciAhPSBmYWxzZVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXIgZC1tZC1kb3duLW5vbmVcIiB0eXBlPVwiYnV0dG9uXCIgW2FwcFNpZGViYXJUb2dnbGVyXT1cInNpZGViYXJUb2dnbGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiYXNpZGVNZW51VG9nZ2xlciAhPSBmYWxzZVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXIgZC1tZC1kb3duLW5vbmVcIiB0eXBlPVwiYnV0dG9uXCIgW2FwcEFzaWRlTWVudVRvZ2dsZXJdPVwiYXNpZGVNZW51VG9nZ2xlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIm1vYmlsZUFzaWRlTWVudVRvZ2dsZXIgIT0gZmFsc2VcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGQtbGctbm9uZVwiIHR5cGU9XCJidXR0b25cIiBhcHBBc2lkZU1lbnVUb2dnbGVyPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvaGVhZGVyPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEFwcEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSBmaXhlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBuYXZiYXJCcmFuZDogYW55O1xuICBASW5wdXQoKSBuYXZiYXJCcmFuZEZ1bGw6IGFueTtcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRNaW5pbWl6ZWQ6IGFueTtcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRUZXh0OiBhbnkgPSB7aWNvbjogJ/CfhbInLCB0ZXh0OiAn8J+FsiBDb3JlVUknfTtcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRIcmVmOiBhbnkgPSAnJztcblxuICBASW5wdXQoKSBzaWRlYmFyVG9nZ2xlcjogYW55O1xuICBASW5wdXQoKSBtb2JpbGVTaWRlYmFyVG9nZ2xlcjogYW55O1xuXG4gIEBJbnB1dCgpIGFzaWRlTWVudVRvZ2dsZXI6IGFueTtcbiAgQElucHV0KCkgbW9iaWxlQXNpZGVNZW51VG9nZ2xlcjogYW55O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgZml4ZWRDbGFzcyA9ICdoZWFkZXItZml4ZWQnO1xuICBuYXZiYXJCcmFuZEltZzogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gICAgdGhpcy5pc0ZpeGVkKHRoaXMuZml4ZWQpO1xuICAgIHRoaXMubmF2YmFyQnJhbmRJbWcgPSBCb29sZWFuKHRoaXMubmF2YmFyQnJhbmQgfHwgdGhpcy5uYXZiYXJCcmFuZEZ1bGwgfHwgdGhpcy5uYXZiYXJCcmFuZE1pbmltaXplZCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5maXhlZENsYXNzKTtcbiAgfVxuXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4gPSB0aGlzLmZpeGVkKTogdm9pZCB7XG4gICAgaWYgKGZpeGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5maXhlZENsYXNzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==