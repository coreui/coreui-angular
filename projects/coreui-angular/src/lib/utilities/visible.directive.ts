import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cVisible]',
  exportAs: 'cVisible'
})
/**
 * A directive that conditionally includes a template based on the value of an input boolean.
 *
 * @example
 * ```html
 * <ng-template [cVisible]="isVisible">Content to display</ng-template>
 * ```
 *
 * @remarks
 * This directive uses Angular's dependency injection to get references to `TemplateRef` and `ViewContainerRef`.
 * It creates or clears the embedded view based on the value of the `cVisible` input.
 */
export class VisibleDirective {
  readonly #templateRef = inject<TemplateRef<any>>(TemplateRef);
  readonly #viewContainer = inject(ViewContainerRef);

  #hasView!: boolean;

  readonly cVisible = input<boolean>();

  readonly #visibleEffect = effect(() => {
    const condition = this.cVisible();
    if (condition && !this.#hasView) {
      this.#viewContainer.createEmbeddedView(this.#templateRef);
      this.#hasView = true;
    } else if (!condition && this.#hasView) {
      this.#viewContainer.clear();
      this.#hasView = false;
    }
  });
}
