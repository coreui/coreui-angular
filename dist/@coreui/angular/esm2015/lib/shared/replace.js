/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} el
 * @return {?}
 */
export function Replace(el) {
    const /** @type {?} */ nativeElement = el.nativeElement;
    const /** @type {?} */ parentElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
        parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvcmVwbGFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU0sa0JBQWtCLEVBQU87SUFDN0IsdUJBQU0sYUFBYSxHQUFnQixFQUFFLENBQUMsYUFBYSxDQUFDO0lBQ3BELHVCQUFNLGFBQWEsR0FBZ0IsYUFBYSxDQUFDLGFBQWEsQ0FBQzs7SUFFL0QsT0FBTyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEMsYUFBYSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0tBQ3JFOztJQUVELGFBQWEsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7Q0FDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gUmVwbGFjZShlbDogYW55KTogYW55IHtcbiAgY29uc3QgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQgPSBlbC5uYXRpdmVFbGVtZW50O1xuICBjb25zdCBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCA9IG5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgLy8gbW92ZSBhbGwgY2hpbGRyZW4gb3V0IG9mIHRoZSBlbGVtZW50XG4gIHdoaWxlIChuYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShuYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQsIG5hdGl2ZUVsZW1lbnQpO1xuICB9XG4gIC8vIHJlbW92ZSB0aGUgZW1wdHkgZWxlbWVudCh0aGUgaG9zdClcbiAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChuYXRpdmVFbGVtZW50KTtcbn1cbiJdfQ==