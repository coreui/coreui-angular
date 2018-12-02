/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} el
 * @return {?}
 */
export function Replace(el) {
    /** @type {?} */
    var nativeElement = el.nativeElement;
    /** @type {?} */
    var parentElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
        parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvcmVwbGFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU0sa0JBQWtCLEVBQU87O1FBQ3ZCLGFBQWEsR0FBZ0IsRUFBRSxDQUFDLGFBQWE7O1FBQzdDLGFBQWEsR0FBZ0IsYUFBYSxDQUFDLGFBQWE7SUFDOUQsdUNBQXVDO0lBQ3ZDLE9BQU8sYUFBYSxDQUFDLFVBQVUsRUFBRTtRQUMvQixhQUFhLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7S0FDckU7SUFDRCxxQ0FBcUM7SUFDckMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIFJlcGxhY2UoZWw6IGFueSk6IGFueSB7XHJcbiAgY29uc3QgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQgPSBlbC5uYXRpdmVFbGVtZW50O1xyXG4gIGNvbnN0IHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gIC8vIG1vdmUgYWxsIGNoaWxkcmVuIG91dCBvZiB0aGUgZWxlbWVudFxyXG4gIHdoaWxlIChuYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgIHBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCwgbmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG4gIC8vIHJlbW92ZSB0aGUgZW1wdHkgZWxlbWVudCh0aGUgaG9zdClcclxuICBwYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG5hdGl2ZUVsZW1lbnQpO1xyXG59XHJcbiJdfQ==