import { Injectable, Renderer2, DOCUMENT, inject } from '@angular/core';


const RemoveClasses = (NewClassNames: string[]) => {
  const MatchClasses = NewClassNames.map((Class) => document.body.classList.contains(Class));
  return MatchClasses.indexOf(true) !== -1;
};

export const ToggleClasses = (Toggle: string, ClassNames: string[]) => {
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
  private document = inject<Document>(DOCUMENT);
  private renderer = inject(Renderer2);


  removeClasses(NewClassNames: string[]) {
    const MatchClasses = NewClassNames.map((Class) => this.document.body.classList.contains(Class));
    return MatchClasses.indexOf(true) !== -1;
  }

  toggleClasses(Toggle: string, ClassNames: string[]) {
    const Level = ClassNames.indexOf(Toggle);
    const NewClassNames = ClassNames.slice(0, Level + 1);

    if (this.removeClasses(NewClassNames)) {
      NewClassNames.map((Class) => this.renderer.removeClass(this.document.body, Class));
    } else {
      this.renderer.addClass(this.document.body, Toggle);
    }
  }
}
