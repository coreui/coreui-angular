import { ChangeDetectorRef, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { IntersectionService, ListenersService } from '../services';
import { TooltipDirective } from './tooltip.directive';

describe('TooltipDirective', () => {
  let document: Document;
  let renderer: Renderer2;
  let hostElement: ElementRef;
  let viewContainerRef: ViewContainerRef;
  let changeDetectorRef: ChangeDetectorRef;

  it('should create an instance', () => {
    const listenersService = new ListenersService(renderer);
    const intersectionService = new IntersectionService();
    const directive = new TooltipDirective(
      document,
      renderer,
      hostElement,
      viewContainerRef,
      listenersService,
      changeDetectorRef,
      intersectionService
    );
    expect(directive).toBeTruthy();
  });
});
