import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cVisible]'
})
export class VisibleDirective {
  readonly #templateRef = inject<TemplateRef<any>>(TemplateRef);
  readonly #viewContainer = inject(ViewContainerRef);

  #hasView!: boolean;

  @Input() set cVisible(condition: boolean) {
    if (condition && !this.#hasView) {
      this.#viewContainer.createEmbeddedView(this.#templateRef);
      this.#hasView = true;
    } else if (!condition && this.#hasView) {
      this.#viewContainer.clear();
      this.#hasView = false;
    }
  }
}
