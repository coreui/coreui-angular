import { Directive, inject, input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[cTemplateId]'
})
export class TemplateIdDirective {
  readonly templateRef = inject(TemplateRef);

  /**
   * Predefined template name (id) for optional slots
   * @returns string
   */
  readonly cTemplateId = input.required<string>();

  get id() {
    return this.cTemplateId();
  }
}
