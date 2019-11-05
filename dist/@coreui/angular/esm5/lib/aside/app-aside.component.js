import { __decorate, __metadata, __param } from "tslib";
import { Component, Input, OnInit, OnDestroy, Inject, Renderer2, HostBinding } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { asideMenuCssClasses } from '../shared';
var AppAsideComponent = /** @class */ (function () {
    function AppAsideComponent(document, renderer) {
        this.document = document;
        this.renderer = renderer;
        this.fixedClass = 'aside-menu-fixed';
        this._aside = true;
    }
    AppAsideComponent.prototype.ngOnInit = function () {
        this.isFixed(this.fixed);
        this.isOffCanvas(this.offCanvas);
        this.displayBreakpoint(this.display);
    };
    AppAsideComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    };
    AppAsideComponent.prototype.isFixed = function (fixed) {
        if (fixed === void 0) { fixed = this.fixed; }
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    };
    AppAsideComponent.prototype.isOffCanvas = function (offCanvas) {
        if (offCanvas === void 0) { offCanvas = this.offCanvas; }
        if (offCanvas) {
            this.renderer.addClass(this.document.body, 'aside-menu-off-canvas');
        }
    };
    AppAsideComponent.prototype.displayBreakpoint = function (display) {
        if (display === void 0) { display = this.display; }
        if (display !== false) {
            var cssClass = this.display ? "aside-menu-" + this.display + "-show" : asideMenuCssClasses[0];
            this.renderer.addClass(this.document.body, cssClass);
        }
    };
    AppAsideComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AppAsideComponent.prototype, "display", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AppAsideComponent.prototype, "fixed", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AppAsideComponent.prototype, "offCanvas", void 0);
    __decorate([
        HostBinding('class.aside-menu'),
        __metadata("design:type", Object)
    ], AppAsideComponent.prototype, "_aside", void 0);
    AppAsideComponent = __decorate([
        Component({
            selector: 'app-aside, cui-aside',
            template: "<ng-content></ng-content>"
        }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object, Renderer2])
    ], AppAsideComponent);
    return AppAsideComponent;
}());
export { AppAsideComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWFzaWRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9hc2lkZS9hcHAtYXNpZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFNaEQ7SUFTRSwyQkFDNEIsUUFBYSxFQUMvQixRQUFtQjtRQURELGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQU5aLGVBQVUsR0FBRyxrQkFBa0IsQ0FBQztRQUVoQixXQUFNLEdBQUcsSUFBSSxDQUFDO0lBSzNDLENBQUM7SUFFTCxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsbUNBQU8sR0FBUCxVQUFRLEtBQTJCO1FBQTNCLHNCQUFBLEVBQUEsUUFBaUIsSUFBSSxDQUFDLEtBQUs7UUFDakMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDN0Q7SUFDSCxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLFNBQW1DO1FBQW5DLDBCQUFBLEVBQUEsWUFBcUIsSUFBSSxDQUFDLFNBQVM7UUFDN0MsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQztJQUVELDZDQUFpQixHQUFqQixVQUFrQixPQUEyQjtRQUEzQix3QkFBQSxFQUFBLFVBQWUsSUFBSSxDQUFDLE9BQU87UUFDM0MsSUFBSSxPQUFPLEtBQUssS0FBSyxFQUFHO1lBQ3RCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGdCQUFjLElBQUksQ0FBQyxPQUFPLFVBQU8sQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDOztnREEvQkUsTUFBTSxTQUFDLFFBQVE7Z0JBQ0UsU0FBUzs7SUFWcEI7UUFBUixLQUFLLEVBQUU7O3NEQUFjO0lBQ2I7UUFBUixLQUFLLEVBQUU7O29EQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFOzt3REFBb0I7SUFJSztRQUFoQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7O3FEQUFlO0lBUHBDLGlCQUFpQjtRQUo3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFFBQVEsRUFBRSwyQkFBMkI7U0FDdEMsQ0FBQztRQVdHLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2lEQUNDLFNBQVM7T0FYbEIsaUJBQWlCLENBMEM3QjtJQUFELHdCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0ExQ1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSwgSW5qZWN0LCBSZW5kZXJlcjIsIEhvc3RCaW5kaW5nfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IGFzaWRlTWVudUNzc0NsYXNzZXMgfSBmcm9tICcuLi9zaGFyZWQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtYXNpZGUsIGN1aS1hc2lkZScsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQXNpZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgZGlzcGxheTogYW55O1xyXG4gIEBJbnB1dCgpIGZpeGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG9mZkNhbnZhczogYm9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBmaXhlZENsYXNzID0gJ2FzaWRlLW1lbnUtZml4ZWQnO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFzaWRlLW1lbnUnKSBfYXNpZGUgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcclxuICAgIHRoaXMuaXNPZmZDYW52YXModGhpcy5vZmZDYW52YXMpO1xyXG4gICAgdGhpcy5kaXNwbGF5QnJlYWtwb2ludCh0aGlzLmRpc3BsYXkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy5maXhlZENsYXNzKTtcclxuICB9XHJcblxyXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4gPSB0aGlzLmZpeGVkKTogdm9pZCB7XHJcbiAgICBpZiAoZml4ZWQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuZml4ZWRDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc09mZkNhbnZhcyhvZmZDYW52YXM6IGJvb2xlYW4gPSB0aGlzLm9mZkNhbnZhcyk6IHZvaWQge1xyXG4gICAgaWYgKG9mZkNhbnZhcykge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ2FzaWRlLW1lbnUtb2ZmLWNhbnZhcycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGlzcGxheUJyZWFrcG9pbnQoZGlzcGxheTogYW55ID0gdGhpcy5kaXNwbGF5KTogdm9pZCB7XHJcbiAgICBpZiAoZGlzcGxheSAhPT0gZmFsc2UgKSB7XHJcbiAgICAgIGNvbnN0IGNzc0NsYXNzID0gdGhpcy5kaXNwbGF5ID8gYGFzaWRlLW1lbnUtJHt0aGlzLmRpc3BsYXl9LXNob3dgIDogYXNpZGVNZW51Q3NzQ2xhc3Nlc1swXTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIGNzc0NsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19