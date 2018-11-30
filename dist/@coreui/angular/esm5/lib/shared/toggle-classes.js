/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var RemoveClasses = function (NewClassNames) {
    /** @type {?} */
    var MatchClasses = NewClassNames.map(function (Class) { return document.querySelector('body').classList.contains(Class); });
    return MatchClasses.indexOf(true) !== -1;
};
var ɵ0 = RemoveClasses;
/** @type {?} */
export var ToggleClasses = function (Toggle, ClassNames) {
    /** @type {?} */
    var Level = ClassNames.indexOf(Toggle);
    /** @type {?} */
    var NewClassNames = ClassNames.slice(0, Level + 1);
    if (RemoveClasses(NewClassNames)) {
        NewClassNames.map(function (Class) { return document.querySelector('body').classList.remove(Class); });
    }
    else {
        document.querySelector('body').classList.add(Toggle);
    }
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWNsYXNzZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3RvZ2dsZS1jbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0lBQU0sYUFBYSxHQUFHLFVBQUMsYUFBYTs7UUFDNUIsWUFBWSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQXhELENBQXdELENBQUM7SUFDM0csT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzNDLENBQUM7OztBQUVELE1BQU0sS0FBTyxhQUFhLEdBQUcsVUFBQyxNQUFNLEVBQUUsVUFBVTs7UUFDeEMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOztRQUNsQyxhQUFhLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUVwRCxJQUFJLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUNoQyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUF0RCxDQUFzRCxDQUFDLENBQUM7S0FDdEY7U0FBTTtRQUNMLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN0RDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSZW1vdmVDbGFzc2VzID0gKE5ld0NsYXNzTmFtZXMpID0+IHtcclxuICBjb25zdCBNYXRjaENsYXNzZXMgPSBOZXdDbGFzc05hbWVzLm1hcCgoQ2xhc3MpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3MpKTtcclxuICByZXR1cm4gTWF0Y2hDbGFzc2VzLmluZGV4T2YodHJ1ZSkgIT09IC0xO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvZ2dsZUNsYXNzZXMgPSAoVG9nZ2xlLCBDbGFzc05hbWVzKSA9PiB7XHJcbiAgY29uc3QgTGV2ZWwgPSBDbGFzc05hbWVzLmluZGV4T2YoVG9nZ2xlKTtcclxuICBjb25zdCBOZXdDbGFzc05hbWVzID0gQ2xhc3NOYW1lcy5zbGljZSgwLCBMZXZlbCArIDEpO1xyXG5cclxuICBpZiAoUmVtb3ZlQ2xhc3NlcyhOZXdDbGFzc05hbWVzKSkge1xyXG4gICAgTmV3Q2xhc3NOYW1lcy5tYXAoKENsYXNzKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZShDbGFzcykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZChUb2dnbGUpO1xyXG4gIH1cclxufTtcclxuIl19