import { ChangeDetectorRef, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { IntersectionService, ListenersService } from '../services';
import { TooltipDirective } from './tooltip.directive';

class MockElementRef extends ElementRef {}

describe('TooltipDirective', () => {
  it('should create an instance', () => {
    TestBed.configureTestingModule({
      providers: [
        IntersectionService,
        Renderer2,
        ListenersService,
        { provide: ElementRef, useClass: MockElementRef },
        ViewContainerRef,
        ChangeDetectorRef
      ]
    });

    TestBed.runInInjectionContext(() => {
      const directive = new TooltipDirective();
      expect(directive).toBeTruthy();
    });
  });
});
