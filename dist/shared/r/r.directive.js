/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RDirective = /** @class */ (function () {
    function RDirective(el) {
        this.el = el;
    }
    // wait for the component to render completely
    /**
     * @return {?}
     */
    RDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ nativeElement = this.el.nativeElement;
        var /** @type {?} */ parentElement = nativeElement.parentElement;
        // move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    return RDirective;
}());
export { RDirective };
function RDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    RDirective.prototype.el;
}
//# sourceMappingURL=r.directive.js.map