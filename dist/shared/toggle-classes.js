var RemoveClasses = function (NewClassNames) {
    var MatchClasses = NewClassNames.map(function (Class) { return document.querySelector('body').classList.contains(Class); });
    return MatchClasses.indexOf(true) !== -1;
};
var ɵ0 = RemoveClasses;
export var ToggleClasses = function (Toggle, ClassNames) {
    var Level = ClassNames.indexOf(Toggle);
    var NewClassNames = ClassNames.slice(0, Level + 1);
    if (RemoveClasses(NewClassNames)) {
        NewClassNames.map(function (Class) { return document.querySelector('body').classList.remove(Class); });
    }
    else {
        document.querySelector('body').classList.add(Toggle);
    }
};
export { ɵ0 };
//# sourceMappingURL=toggle-classes.js.map