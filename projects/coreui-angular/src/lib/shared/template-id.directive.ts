import { Directive, inject, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[cTemplateId]',
  standalone: true,
})
export class TemplateIdDirective {
  public readonly templateRef = inject(TemplateRef);
  @Input('cTemplateId') id!: string;
}
