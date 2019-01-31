import {Inject, Injectable, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

const RemoveClasses = (NewClassNames) => {
  const MatchClasses = NewClassNames.map((Class) => document.body.classList.contains(Class));
  return MatchClasses.indexOf(true) !== -1;
};

export const ToggleClasses = (Toggle, ClassNames) => {
  const Level = ClassNames.indexOf(Toggle);
  const NewClassNames = ClassNames.slice(0, Level + 1);

  if (RemoveClasses(NewClassNames)) {
    NewClassNames.map((Class) => document.body.classList.remove(Class));
  } else {
    document.body.classList.add(Toggle);
  }
};

@Injectable()
export class ClassToggler {

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
  ) {}

  removeClasses(NewClassNames) {
    const MatchClasses = NewClassNames.map((Class) => this.document.body.classList.contains(Class));
    return MatchClasses.indexOf(true) !== -1;
  }

  toggleClasses(Toggle, ClassNames) {
    const Level = ClassNames.indexOf(Toggle);
    const NewClassNames = ClassNames.slice(0, Level + 1);

    if (this.removeClasses(NewClassNames)) {
      NewClassNames.map((Class) => this.renderer.removeClass(this.document.body, Class));
    } else {
      this.renderer.addClass(this.document.body, Toggle);
    }
  }
}
