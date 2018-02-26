/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ RemoveClasses = function (NewClassNames) {
    var /** @type {?} */ MatchClasses = NewClassNames.map(function (Class) { return document.querySelector('body').classList.contains(Class); });
    return MatchClasses.indexOf(true) !== -1;
};
var ɵ0 = RemoveClasses;
export var /** @type {?} */ ToggleClasses = function (Toggle, ClassNames) {
    var /** @type {?} */ Level = ClassNames.indexOf(Toggle);
    var /** @type {?} */ NewClassNames = ClassNames.slice(0, Level + 1);
    if (RemoveClasses(NewClassNames)) {
        NewClassNames.map(function (Class) { return document.querySelector('body').classList.remove(Class); });
    }
    else {
        document.querySelector('body').classList.add(Toggle);
    }
};
export { ɵ0 };
//# sourceMappingURL=toggle-classes.js.map