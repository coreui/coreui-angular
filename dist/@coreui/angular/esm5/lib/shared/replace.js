/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvcmVwbGFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU0sVUFBVSxPQUFPLENBQUMsRUFBTzs7UUFDdkIsYUFBYSxHQUFnQixFQUFFLENBQUMsYUFBYTs7UUFDN0MsYUFBYSxHQUFnQixhQUFhLENBQUMsYUFBYTtJQUM5RCx1Q0FBdUM7SUFDdkMsT0FBTyxhQUFhLENBQUMsVUFBVSxFQUFFO1FBQy9CLGFBQWEsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztLQUNyRTtJQUNELHFDQUFxQztJQUNyQyxhQUFhLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gUmVwbGFjZShlbDogYW55KTogYW55IHtcclxuICBjb25zdCBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgY29uc3QgcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQgPSBuYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgLy8gbW92ZSBhbGwgY2hpbGRyZW4gb3V0IG9mIHRoZSBlbGVtZW50XHJcbiAgd2hpbGUgKG5hdGl2ZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgcGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUobmF0aXZlRWxlbWVudC5maXJzdENoaWxkLCBuYXRpdmVFbGVtZW50KTtcclxuICB9XHJcbiAgLy8gcmVtb3ZlIHRoZSBlbXB0eSBlbGVtZW50KHRoZSBob3N0KVxyXG4gIHBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobmF0aXZlRWxlbWVudCk7XHJcbn1cclxuIl19