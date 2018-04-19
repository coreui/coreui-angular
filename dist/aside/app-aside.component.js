import { Component, ElementRef, Input } from '@angular/core';
import { asideMenuCssClasses, Replace } from './../shared';
var AppAsideComponent = /** @class */ (function () {
    function AppAsideComponent(el) {
        this.el = el;
    }
    AppAsideComponent.prototype.ngOnInit = function () {
        Replace(this.el);
        this.isFixed(this.fixed);
        this.displayBreakpoint(this.display);
    };
    AppAsideComponent.prototype.isFixed = function (fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('aside-menu-fixed');
        }
    };
    AppAsideComponent.prototype.isOffCanvas = function (offCanvas) {
        if (this.offCanvas) {
            document.querySelector('body').classList.add('aside-menu-off-canvas');
        }
    };
    AppAsideComponent.prototype.displayBreakpoint = function (display) {
        if (this.display !== false) {
            var cssClass = void 0;
            this.display ? cssClass = "aside-menu-" + this.display + "-show" : cssClass = asideMenuCssClasses[0];
            document.querySelector('body').classList.add(cssClass);
        }
    };
    AppAsideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-aside',
                    template: "\n    <aside class=\"aside-menu\">\n      <ng-content></ng-content>\n    </aside>\n  "
                },] },
    ];
    /** @nocollapse */
    AppAsideComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    AppAsideComponent.propDecorators = {
        "display": [{ type: Input },],
        "fixed": [{ type: Input },],
        "offCanvas": [{ type: Input },],
    };
    return AppAsideComponent;
}());
export { AppAsideComponent };
//# sourceMappingURL=app-aside.component.js.map