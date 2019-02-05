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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFcEM7SUFnRUUsNEJBQzRCLFFBQWEsRUFDL0IsUUFBbUIsRUFDbkIsRUFBYztRQUZJLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBZmYsb0JBQWUsR0FBUSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQyxDQUFDO1FBQ3ZELG9CQUFlLEdBQVEsRUFBRSxDQUFDO1FBUWxCLGVBQVUsR0FBRyxjQUFjLENBQUM7SUFPMUMsQ0FBQzs7OztJQUVKLHFDQUFROzs7SUFBUjtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7SUFFRCxvQ0FBTzs7OztJQUFQLFVBQVEsS0FBMkI7UUFBM0Isc0JBQUEsRUFBQSxRQUFpQixJQUFJLENBQUMsS0FBSztRQUNqQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM3RDtJQUNILENBQUM7O2dCQXBGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxzN0RBeUNUO2lCQUNGOzs7O2dEQXFCSSxNQUFNLFNBQUMsUUFBUTtnQkF0RTZDLFNBQVM7Z0JBQXZELFVBQVU7Ozt3QkFvRDFCLEtBQUs7OEJBRUwsS0FBSztrQ0FDTCxLQUFLO3VDQUNMLEtBQUs7a0NBQ0wsS0FBSztrQ0FDTCxLQUFLO2lDQUVMLEtBQUs7dUNBQ0wsS0FBSzttQ0FFTCxLQUFLO3lDQUNMLEtBQUs7O0lBMEJSLHlCQUFDO0NBQUEsQUFyRkQsSUFxRkM7U0F4Q1ksa0JBQWtCOzs7SUFFN0IsbUNBQXdCOztJQUV4Qix5Q0FBMEI7O0lBQzFCLDZDQUE4Qjs7SUFDOUIsa0RBQW1DOztJQUNuQyw2Q0FBZ0U7O0lBQ2hFLDZDQUFtQzs7SUFFbkMsNENBQTZCOztJQUM3QixrREFBbUM7O0lBRW5DLDhDQUErQjs7SUFDL0Isb0RBQXFDOzs7OztJQUVyQyx3Q0FBNkM7O0lBQzdDLDRDQUF3Qjs7Ozs7SUFHdEIsc0NBQXVDOzs7OztJQUN2QyxzQ0FBMkI7Ozs7O0lBQzNCLGdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIEluamVjdCwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgUmVwbGFjZSB9IGZyb20gJy4uL3NoYXJlZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1oZWFkZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aGVhZGVyIGNsYXNzPVwiYXBwLWhlYWRlciBuYXZiYXJcIj5cclxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIm1vYmlsZVNpZGViYXJUb2dnbGVyICE9IGZhbHNlXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGQtbGctbm9uZVwiIHR5cGU9XCJidXR0b25cIiBhcHBTaWRlYmFyVG9nZ2xlcj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIFtocmVmXT1cIm5hdmJhckJyYW5kSHJlZlwiPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIm5hdmJhckJyYW5kSW1nXCI+XHJcbiAgICAgICAgICA8aW1nICpuZ0lmPVwibmF2YmFyQnJhbmRcIlxyXG4gICAgICAgICAgICAgICBbYXBwSHRtbEF0dHJdPVwibmF2YmFyQnJhbmRcIlxyXG4gICAgICAgICAgICAgICBbbmdDbGFzc109XCInbmF2YmFyLWJyYW5kJ1wiPlxyXG4gICAgICAgICAgPGltZyAqbmdJZj1cIm5hdmJhckJyYW5kRnVsbFwiXHJcbiAgICAgICAgICAgICAgIFthcHBIdG1sQXR0cl09XCJuYXZiYXJCcmFuZEZ1bGxcIlxyXG4gICAgICAgICAgICAgICBbbmdDbGFzc109XCInbmF2YmFyLWJyYW5kLWZ1bGwnXCI+XHJcbiAgICAgICAgICA8aW1nICpuZ0lmPVwibmF2YmFyQnJhbmRNaW5pbWl6ZWRcIlxyXG4gICAgICAgICAgICAgICBbYXBwSHRtbEF0dHJdPVwibmF2YmFyQnJhbmRNaW5pbWl6ZWRcIlxyXG4gICAgICAgICAgICAgICBbbmdDbGFzc109XCInbmF2YmFyLWJyYW5kLW1pbmltaXplZCdcIj5cclxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiIW5hdmJhckJyYW5kSW1nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItYnJhbmQtZnVsbFwiIFtpbm5lckhUTUxdPVwibmF2YmFyQnJhbmRUZXh0LnRleHRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1icmFuZC1taW5pbWl6ZWRcIiBbaW5uZXJIVE1MXT1cIm5hdmJhckJyYW5kVGV4dC5pY29uXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cInNpZGViYXJUb2dnbGVyICE9IGZhbHNlXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGQtbWQtZG93bi1ub25lXCIgdHlwZT1cImJ1dHRvblwiIFthcHBTaWRlYmFyVG9nZ2xlcl09XCJzaWRlYmFyVG9nZ2xlclwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJhc2lkZU1lbnVUb2dnbGVyICE9IGZhbHNlXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIGQtbWQtZG93bi1ub25lXCIgdHlwZT1cImJ1dHRvblwiIFthcHBBc2lkZU1lbnVUb2dnbGVyXT1cImFzaWRlTWVudVRvZ2dsZXJcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIm1vYmlsZUFzaWRlTWVudVRvZ2dsZXIgIT0gZmFsc2VcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXIgZC1sZy1ub25lXCIgdHlwZT1cImJ1dHRvblwiIGFwcEFzaWRlTWVudVRvZ2dsZXI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L2hlYWRlcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSBuYXZiYXJCcmFuZDogYW55O1xyXG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kRnVsbDogYW55O1xyXG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kTWluaW1pemVkOiBhbnk7XHJcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRUZXh0OiBhbnkgPSB7aWNvbjogJ/CfhbInLCB0ZXh0OiAn8J+FsiBDb3JlVUknfTtcclxuICBASW5wdXQoKSBuYXZiYXJCcmFuZEhyZWY6IGFueSA9ICcnO1xyXG5cclxuICBASW5wdXQoKSBzaWRlYmFyVG9nZ2xlcjogYW55O1xyXG4gIEBJbnB1dCgpIG1vYmlsZVNpZGViYXJUb2dnbGVyOiBhbnk7XHJcblxyXG4gIEBJbnB1dCgpIGFzaWRlTWVudVRvZ2dsZXI6IGFueTtcclxuICBASW5wdXQoKSBtb2JpbGVBc2lkZU1lbnVUb2dnbGVyOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgZml4ZWRDbGFzcyA9ICdoZWFkZXItZml4ZWQnO1xyXG4gIG5hdmJhckJyYW5kSW1nOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgUmVwbGFjZSh0aGlzLmVsKTtcclxuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcclxuICAgIHRoaXMubmF2YmFyQnJhbmRJbWcgPSBCb29sZWFuKHRoaXMubmF2YmFyQnJhbmQgfHwgdGhpcy5uYXZiYXJCcmFuZEZ1bGwgfHwgdGhpcy5uYXZiYXJCcmFuZE1pbmltaXplZCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCB0aGlzLmZpeGVkQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgaXNGaXhlZChmaXhlZDogYm9vbGVhbiA9IHRoaXMuZml4ZWQpOiB2b2lkIHtcclxuICAgIGlmIChmaXhlZCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5maXhlZENsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19