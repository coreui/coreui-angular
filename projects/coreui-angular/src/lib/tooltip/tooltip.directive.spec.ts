import { ChangeDetectorRef, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { IntersectionService, ListenersService } from '../services';
import { TooltipDirective } from './tooltip.directive';

describe('TooltipDirective', () => {
  let renderer: Renderer2;
  let hostElement: ElementRef;
  let viewContainerRef: ViewContainerRef;
  let changeDetectorRef: ChangeDetectorRef;

  it('should create an instance', () => {
    TestBed.configureTestingModule({
      providers: [IntersectionService, Renderer2, ListenersService]
    });
    const intersectionService = TestBed.inject(IntersectionService);
    const listenersService = TestBed.inject(ListenersService);
    TestBed.runInInjectionContext(() => {
      const directive = new TooltipDirective(
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
});
