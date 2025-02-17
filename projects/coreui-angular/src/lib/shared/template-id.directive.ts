import { Directive, inject, input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[cTemplateId]'
})
export class TemplateIdDirective {
  readonly templateRef = inject(TemplateRef);
  readonly cTemplateId = input.required<string>();

  get id() {
    return this.cTemplateId();
  }
}
