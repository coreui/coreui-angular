/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
/** @type {?} */
var RemoveClasses = (/**
 * @param {?} NewClassNames
 * @return {?}
 */
function (NewClassNames) {
    /** @type {?} */
    var MatchClasses = NewClassNames.map((/**
     * @param {?} Class
     * @return {?}
     */
    function (Class) { return document.body.classList.contains(Class); }));
    return MatchClasses.indexOf(true) !== -1;
});
var ɵ0 = RemoveClasses;
/** @type {?} */
export var ToggleClasses = (/**
 * @param {?} Toggle
 * @param {?} ClassNames
 * @return {?}
 */
function (Toggle, ClassNames) {
    /** @type {?} */
    var Level = ClassNames.indexOf(Toggle);
    /** @type {?} */
    var NewClassNames = ClassNames.slice(0, Level + 1);
    if (RemoveClasses(NewClassNames)) {
        NewClassNames.map((/**
         * @param {?} Class
         * @return {?}
         */
        function (Class) { return document.body.classList.remove(Class); }));
    }
    else {
        document.body.classList.add(Toggle);
    }
});
var ClassToggler = /** @class */ (function () {
    function ClassToggler(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    /**
     * @param {?} NewClassNames
     * @return {?}
     */
    ClassToggler.prototype.removeClasses = /**
     * @param {?} NewClassNames
     * @return {?}
     */
    function (NewClassNames) {
        var _this = this;
        /** @type {?} */
        var MatchClasses = NewClassNames.map((/**
         * @param {?} Class
         * @return {?}
         */
        function (Class) { return _this.document.body.classList.contains(Class); }));
        return MatchClasses.indexOf(true) !== -1;
    };
    /**
     * @param {?} Toggle
     * @param {?} ClassNames
     * @return {?}
     */
    ClassToggler.prototype.toggleClasses = /**
     * @param {?} Toggle
     * @param {?} ClassNames
     * @return {?}
     */
    function (Toggle, ClassNames) {
        var _this = this;
        /** @type {?} */
        var Level = ClassNames.indexOf(Toggle);
        /** @type {?} */
        var NewClassNames = ClassNames.slice(0, Level + 1);
        if (this.removeClasses(NewClassNames)) {
            NewClassNames.map((/**
             * @param {?} Class
             * @return {?}
             */
            function (Class) { return _this.renderer.removeClass(_this.document.body, Class); }));
        }
        else {
            this.renderer.addClass(this.document.body, Toggle);
        }
    };
    ClassToggler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ClassToggler.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
    return ClassToggler;
}());
export { ClassToggler };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWNsYXNzZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3RvZ2dsZS1jbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDOztJQUVuQyxhQUFhOzs7O0FBQUcsVUFBQyxhQUFhOztRQUM1QixZQUFZLEdBQUcsYUFBYSxDQUFDLEdBQUc7Ozs7SUFBQyxVQUFDLEtBQUssSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBdkMsQ0FBdUMsRUFBQztJQUMxRixPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFBOzs7QUFFRCxNQUFNLEtBQU8sYUFBYTs7Ozs7QUFBRyxVQUFDLE1BQU0sRUFBRSxVQUFVOztRQUN4QyxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7O1FBQ2xDLGFBQWEsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRXBELElBQUksYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQ2hDLGFBQWEsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLEVBQUMsQ0FBQztLQUNyRTtTQUFNO1FBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3JDO0FBQ0gsQ0FBQyxDQUFBO0FBRUQ7SUFHRSxzQkFDNEIsUUFBYSxFQUMvQixRQUFtQjtRQURELGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUMxQixDQUFDOzs7OztJQUVKLG9DQUFhOzs7O0lBQWIsVUFBYyxhQUFhO1FBQTNCLGlCQUdDOztZQUZPLFlBQVksR0FBRyxhQUFhLENBQUMsR0FBRzs7OztRQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBNUMsQ0FBNEMsRUFBQztRQUMvRixPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRUQsb0NBQWE7Ozs7O0lBQWIsVUFBYyxNQUFNLEVBQUUsVUFBVTtRQUFoQyxpQkFTQzs7WUFSTyxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7O1lBQ2xDLGFBQWEsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRXBELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUNyQyxhQUFhLENBQUMsR0FBRzs7OztZQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQXBELENBQW9ELEVBQUMsQ0FBQztTQUNwRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDOztnQkF0QkYsVUFBVTs7OztnREFJTixNQUFNLFNBQUMsUUFBUTtnQkF2QlEsU0FBUzs7SUEwQ3JDLG1CQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F0QlksWUFBWTs7Ozs7O0lBR3JCLGdDQUF1Qzs7Ozs7SUFDdkMsZ0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5jb25zdCBSZW1vdmVDbGFzc2VzID0gKE5ld0NsYXNzTmFtZXMpID0+IHtcclxuICBjb25zdCBNYXRjaENsYXNzZXMgPSBOZXdDbGFzc05hbWVzLm1hcCgoQ2xhc3MpID0+IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzKSk7XHJcbiAgcmV0dXJuIE1hdGNoQ2xhc3Nlcy5pbmRleE9mKHRydWUpICE9PSAtMTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUb2dnbGVDbGFzc2VzID0gKFRvZ2dsZSwgQ2xhc3NOYW1lcykgPT4ge1xyXG4gIGNvbnN0IExldmVsID0gQ2xhc3NOYW1lcy5pbmRleE9mKFRvZ2dsZSk7XHJcbiAgY29uc3QgTmV3Q2xhc3NOYW1lcyA9IENsYXNzTmFtZXMuc2xpY2UoMCwgTGV2ZWwgKyAxKTtcclxuXHJcbiAgaWYgKFJlbW92ZUNsYXNzZXMoTmV3Q2xhc3NOYW1lcykpIHtcclxuICAgIE5ld0NsYXNzTmFtZXMubWFwKChDbGFzcykgPT4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKENsYXNzKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChUb2dnbGUpO1xyXG4gIH1cclxufTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENsYXNzVG9nZ2xlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICkge31cclxuXHJcbiAgcmVtb3ZlQ2xhc3NlcyhOZXdDbGFzc05hbWVzKSB7XHJcbiAgICBjb25zdCBNYXRjaENsYXNzZXMgPSBOZXdDbGFzc05hbWVzLm1hcCgoQ2xhc3MpID0+IHRoaXMuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3MpKTtcclxuICAgIHJldHVybiBNYXRjaENsYXNzZXMuaW5kZXhPZih0cnVlKSAhPT0gLTE7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVDbGFzc2VzKFRvZ2dsZSwgQ2xhc3NOYW1lcykge1xyXG4gICAgY29uc3QgTGV2ZWwgPSBDbGFzc05hbWVzLmluZGV4T2YoVG9nZ2xlKTtcclxuICAgIGNvbnN0IE5ld0NsYXNzTmFtZXMgPSBDbGFzc05hbWVzLnNsaWNlKDAsIExldmVsICsgMSk7XHJcblxyXG4gICAgaWYgKHRoaXMucmVtb3ZlQ2xhc3NlcyhOZXdDbGFzc05hbWVzKSkge1xyXG4gICAgICBOZXdDbGFzc05hbWVzLm1hcCgoQ2xhc3MpID0+IHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCBDbGFzcykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIFRvZ2dsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==