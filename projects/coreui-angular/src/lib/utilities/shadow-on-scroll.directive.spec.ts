import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ShadowOnScrollDirective } from './shadow-on-scroll.directive';

class MockElementRef extends ElementRef {}

describe('ShadowOnScrollDirective', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShadowOnScrollDirective],
      providers: [{ provide: ElementRef, useClass: MockElementRef }]
    });
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new ShadowOnScrollDirective();
      expect(directive).toBeTruthy();
    });
  });
});
