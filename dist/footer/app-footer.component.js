import { Component, ElementRef, Input } from '@angular/core';
import { Replace } from './../shared';
var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent(el) {
        this.el = el;
    }
    AppFooterComponent.prototype.ngOnInit = function () {
        Replace(this.el);
        this.isFixed(this.fixed);
    };
    AppFooterComponent.prototype.isFixed = function (fixed) {
        if (this.fixed) {
            document.querySelector('body').classList.add('footer-fixed');
        }
    };
    AppFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-footer',
                    template: "\n    <footer class=\"app-footer\">\n      <ng-content></ng-content>\n    </footer>\n  "
                },] },
    ];
    /** @nocollapse */
    AppFooterComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    AppFooterComponent.propDecorators = {
        "fixed": [{ type: Input },],
    };
    return AppFooterComponent;
}());
export { AppFooterComponent };
//# sourceMappingURL=app-footer.component.js.map