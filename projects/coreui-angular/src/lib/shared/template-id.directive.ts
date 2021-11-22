import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[cTemplateId]'
})
export class TemplateIdDirective {
  @Input('cTemplateId') id!: string;

  constructor(
    public templateRef: TemplateRef<any>
  ) { }
}
