const RemoveClasses = (NewClassNames) => {
  const MatchClasses = NewClassNames.map((Class) => document.querySelector('body').classList.contains(Class));
  return MatchClasses.indexOf(true) !== -1;
};

export const ToggleClasses = (Toggle, ClassNames) => {
  const Level = ClassNames.indexOf(Toggle);
  const NewClassNames = ClassNames.slice(0, Level + 1);

  if (RemoveClasses(NewClassNames)) {
    NewClassNames.map((Class) => document.querySelector('body').classList.remove(Class));
  } else {
    document.querySelector('body').classList.add(Toggle);
  }
};
