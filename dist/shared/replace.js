/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} el
 * @return {?}
 */
export function Replace(el) {
    var /** @type {?} */ nativeElement = el.nativeElement;
    var /** @type {?} */ parentElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
        parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
}
//# sourceMappingURL=replace.js.map