/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
/** @type {?} */
const RemoveClasses = (/**
 * @param {?} NewClassNames
 * @return {?}
 */
(NewClassNames) => {
    /** @type {?} */
    const MatchClasses = NewClassNames.map((/**
     * @param {?} Class
     * @return {?}
     */
    (Class) => document.body.classList.contains(Class)));
    return MatchClasses.indexOf(true) !== -1;
});
const ɵ0 = RemoveClasses;
/** @type {?} */
export const ToggleClasses = (/**
 * @param {?} Toggle
 * @param {?} ClassNames
 * @return {?}
 */
(Toggle, ClassNames) => {
    /** @type {?} */
    const Level = ClassNames.indexOf(Toggle);
    /** @type {?} */
    const NewClassNames = ClassNames.slice(0, Level + 1);
    if (RemoveClasses(NewClassNames)) {
        NewClassNames.map((/**
         * @param {?} Class
         * @return {?}
         */
        (Class) => document.body.classList.remove(Class)));
    }
    else {
        document.body.classList.add(Toggle);
    }
});
export class ClassToggler {
    /**
     * @param {?} document
     * @param {?} renderer
     */
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    /**
     * @param {?} NewClassNames
     * @return {?}
     */
    removeClasses(NewClassNames) {
        /** @type {?} */
        const MatchClasses = NewClassNames.map((/**
         * @param {?} Class
         * @return {?}
         */
        (Class) => this.document.body.classList.contains(Class)));
        return MatchClasses.indexOf(true) !== -1;
    }
    /**
     * @param {?} Toggle
     * @param {?} ClassNames
     * @return {?}
     */
    toggleClasses(Toggle, ClassNames) {
        /** @type {?} */
        const Level = ClassNames.indexOf(Toggle);
        /** @type {?} */
        const NewClassNames = ClassNames.slice(0, Level + 1);
        if (this.removeClasses(NewClassNames)) {
            NewClassNames.map((/**
             * @param {?} Class
             * @return {?}
             */
            (Class) => this.renderer.removeClass(this.document.body, Class)));
        }
        else {
            this.renderer.addClass(this.document.body, Toggle);
        }
    }
}
ClassToggler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ClassToggler.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Renderer2 }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ClassToggler.prototype.document;
    /**
     * @type {?}
     * @private
     */
    ClassToggler.prototype.renderer;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWNsYXNzZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3RvZ2dsZS1jbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDOztNQUVuQyxhQUFhOzs7O0FBQUcsQ0FBQyxhQUFhLEVBQUUsRUFBRTs7VUFDaEMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxHQUFHOzs7O0lBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBQztJQUMxRixPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFBOzs7QUFFRCxNQUFNLE9BQU8sYUFBYTs7Ozs7QUFBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsRUFBRTs7VUFDNUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOztVQUNsQyxhQUFhLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUVwRCxJQUFJLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUNoQyxhQUFhLENBQUMsR0FBRzs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztLQUNyRTtTQUFNO1FBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3JDO0FBQ0gsQ0FBQyxDQUFBO0FBR0QsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBRXZCLFlBQzRCLFFBQWEsRUFDL0IsUUFBbUI7UUFERCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDMUIsQ0FBQzs7Ozs7SUFFSixhQUFhLENBQUMsYUFBYTs7Y0FDbkIsWUFBWSxHQUFHLGFBQWEsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUM7UUFDL0YsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxNQUFNLEVBQUUsVUFBVTs7Y0FDeEIsS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOztjQUNsQyxhQUFhLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVwRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDckMsYUFBYSxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUMsQ0FBQztTQUNwRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDOzs7WUF0QkYsVUFBVTs7Ozs0Q0FJTixNQUFNLFNBQUMsUUFBUTtZQXZCUSxTQUFTOzs7Ozs7O0lBdUJqQyxnQ0FBdUM7Ozs7O0lBQ3ZDLGdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlLCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuY29uc3QgUmVtb3ZlQ2xhc3NlcyA9IChOZXdDbGFzc05hbWVzKSA9PiB7XHJcbiAgY29uc3QgTWF0Y2hDbGFzc2VzID0gTmV3Q2xhc3NOYW1lcy5tYXAoKENsYXNzKSA9PiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhDbGFzcykpO1xyXG4gIHJldHVybiBNYXRjaENsYXNzZXMuaW5kZXhPZih0cnVlKSAhPT0gLTE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVG9nZ2xlQ2xhc3NlcyA9IChUb2dnbGUsIENsYXNzTmFtZXMpID0+IHtcclxuICBjb25zdCBMZXZlbCA9IENsYXNzTmFtZXMuaW5kZXhPZihUb2dnbGUpO1xyXG4gIGNvbnN0IE5ld0NsYXNzTmFtZXMgPSBDbGFzc05hbWVzLnNsaWNlKDAsIExldmVsICsgMSk7XHJcblxyXG4gIGlmIChSZW1vdmVDbGFzc2VzKE5ld0NsYXNzTmFtZXMpKSB7XHJcbiAgICBOZXdDbGFzc05hbWVzLm1hcCgoQ2xhc3MpID0+IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShDbGFzcykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoVG9nZ2xlKTtcclxuICB9XHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDbGFzc1RvZ2dsZXIge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICApIHt9XHJcblxyXG4gIHJlbW92ZUNsYXNzZXMoTmV3Q2xhc3NOYW1lcykge1xyXG4gICAgY29uc3QgTWF0Y2hDbGFzc2VzID0gTmV3Q2xhc3NOYW1lcy5tYXAoKENsYXNzKSA9PiB0aGlzLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzKSk7XHJcbiAgICByZXR1cm4gTWF0Y2hDbGFzc2VzLmluZGV4T2YodHJ1ZSkgIT09IC0xO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQ2xhc3NlcyhUb2dnbGUsIENsYXNzTmFtZXMpIHtcclxuICAgIGNvbnN0IExldmVsID0gQ2xhc3NOYW1lcy5pbmRleE9mKFRvZ2dsZSk7XHJcbiAgICBjb25zdCBOZXdDbGFzc05hbWVzID0gQ2xhc3NOYW1lcy5zbGljZSgwLCBMZXZlbCArIDEpO1xyXG5cclxuICAgIGlmICh0aGlzLnJlbW92ZUNsYXNzZXMoTmV3Q2xhc3NOYW1lcykpIHtcclxuICAgICAgTmV3Q2xhc3NOYW1lcy5tYXAoKENsYXNzKSA9PiB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgQ2xhc3MpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCBUb2dnbGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=