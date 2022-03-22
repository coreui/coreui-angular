import { VisibleDirective } from './visible.directive';
import { TemplateRef, ViewContainerRef } from '@angular/core';

describe('VisibleDirective', () => {
  let templateRef: TemplateRef<any>;
  let viewContainerRef: ViewContainerRef;

  it('should create an instance', () => {
    const directive = new VisibleDirective(templateRef, viewContainerRef);
    expect(directive).toBeTruthy();
  });
});
