/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { Replace } from './../shared';
var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    AppFooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        Replace(this.el);
        this.isFixed(this.fixed);
    };
    /**
     * @param {?} fixed
     * @return {?}
     */
    AppFooterComponent.prototype.isFixed = /**
     * @param {?} fixed
     * @return {?}
     */
    function (fixed) {
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
function AppFooterComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AppFooterComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AppFooterComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AppFooterComponent.propDecorators;
    /** @type {?} */
    AppFooterComponent.prototype.fixed;
    /** @type {?} */
    AppFooterComponent.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZm9vdGVyL2FwcC1mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFhcEMsNEJBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0tBQUk7Ozs7SUFFdEMscUNBQVE7OztJQUFSO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxQjs7Ozs7SUFFRCxvQ0FBTzs7OztJQUFQLFVBQVEsS0FBYztRQUNwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUFFO0tBQ2xGOztnQkFwQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUseUZBSVQ7aUJBQ0Y7Ozs7Z0JBVm1CLFVBQVU7OzswQkFZM0IsS0FBSzs7NkJBWlI7O1NBV2Esa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0ICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVwbGFjZSB9IGZyb20gJy4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZvb3RlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGZvb3RlciBjbGFzcz1cImFwcC1mb290ZXJcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Zvb3Rlcj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmaXhlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFJlcGxhY2UodGhpcy5lbCk7XG4gICAgdGhpcy5pc0ZpeGVkKHRoaXMuZml4ZWQpO1xuICB9XG5cbiAgaXNGaXhlZChmaXhlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmZpeGVkKSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdmb290ZXItZml4ZWQnKTsgfVxuICB9XG59XG4iXX0=