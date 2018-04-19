import { Component, Input, HostBinding } from '@angular/core';
import { sidebarCssClasses } from './../shared';
var AppSidebarComponent = /** @class */ (function () {
    function AppSidebarComponent() {
    }
    AppSidebarComponent.prototype.ngOnInit = function () {
        this.displayBreakpoint(this.display);
        this.isCompact(this.compact);
        this.isFixed(this.fixed);
        this.isMinimized(this.minimized);
        this.isOffCanvas(this.offCanvas);
    };
    AppSidebarComponent.prototype.isCompact = function (compact) {
        if (this.compact) {
            document.querySelector('body').classList.add('sidebar-compact');
        }
    };
    AppSidebarComponent.prototype.isFixed = function (fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('sidebar-fixed');
        }
    };
    AppSidebarComponent.prototype.isMinimized = function (minimized) {
        if (this.minimized) {
            document.querySelector('body').classList.add('sidebar-minimized');
        }
    };
    AppSidebarComponent.prototype.isOffCanvas = function (offCanvas) {
        if (this.offCanvas) {
            document.querySelector('body').classList.add('sidebar-off-canvas');
        }
    };
    AppSidebarComponent.prototype.fixedPosition = function (fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('sidebar-fixed');
        }
    };
    AppSidebarComponent.prototype.displayBreakpoint = function (display) {
        if (this.display !== false) {
            var cssClass = void 0;
            this.display ? cssClass = "sidebar-" + this.display + "-show" : cssClass = sidebarCssClasses[0];
            document.querySelector('body').classList.add(cssClass);
        }
    };
    AppSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    AppSidebarComponent.ctorParameters = function () { return []; };
    AppSidebarComponent.propDecorators = {
        "compact": [{ type: Input },],
        "display": [{ type: Input },],
        "fixed": [{ type: Input },],
        "minimized": [{ type: Input },],
        "offCanvas": [{ type: Input },],
        "true": [{ type: HostBinding, args: ['class.sidebar',] },],
    };
    return AppSidebarComponent;
}());
export { AppSidebarComponent };
//# sourceMappingURL=app-sidebar.component.js.map