/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @param {?} el
 * @return {?}
 */
export function Replace(el) {
    /** @type {?} */
    const nativeElement = el.nativeElement;
    /** @type {?} */
    const parentElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
        parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvcmVwbGFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU0sa0JBQWtCLEVBQU87O1VBQ3ZCLGFBQWEsR0FBZ0IsRUFBRSxDQUFDLGFBQWE7O1VBQzdDLGFBQWEsR0FBZ0IsYUFBYSxDQUFDLGFBQWE7SUFDOUQsdUNBQXVDO0lBQ3ZDLE9BQU8sYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2hDLGFBQWEsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBQ0QscUNBQXFDO0lBQ3JDLGFBQWEsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDM0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBSZXBsYWNlKGVsOiBhbnkpOiBhbnkge1xyXG4gIGNvbnN0IG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZWwubmF0aXZlRWxlbWVudDtcclxuICBjb25zdCBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCA9IG5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAvLyBtb3ZlIGFsbCBjaGlsZHJlbiBvdXQgb2YgdGhlIGVsZW1lbnRcclxuICB3aGlsZSAobmF0aXZlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICBwYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShuYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQsIG5hdGl2ZUVsZW1lbnQpO1xyXG4gIH1cclxuICAvLyByZW1vdmUgdGhlIGVtcHR5IGVsZW1lbnQodGhlIGhvc3QpXHJcbiAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChuYXRpdmVFbGVtZW50KTtcclxufVxyXG4iXX0=