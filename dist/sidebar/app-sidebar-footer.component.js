import { Component, ElementRef } from '@angular/core';
import { Replace } from './../shared';
var AppSidebarFooterComponent = /** @class */ (function () {
    function AppSidebarFooterComponent(el) {
        this.el = el;
    }
    AppSidebarFooterComponent.prototype.ngOnInit = function () {
        Replace(this.el);
    };
    AppSidebarFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-footer',
                    template: "\n    <div class=\"sidebar-footer\">\n      <ng-content></ng-content>\n    </div>"
                },] },
    ];
    /** @nocollapse */
    AppSidebarFooterComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return AppSidebarFooterComponent;
}());
export { AppSidebarFooterComponent };
//# sourceMappingURL=app-sidebar-footer.component.js.map