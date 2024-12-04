import { TestBed } from '@angular/core/testing';
import { ElementRef, Renderer2 } from '@angular/core';

import { HeaderTogglerDirective } from './header-toggler.directive';

class MockElementRef extends ElementRef {}

describe('HeaderTogglerDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Renderer2, { provide: ElementRef, useClass: MockElementRef }]
    });
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new HeaderTogglerDirective();
      expect(directive).toBeTruthy();
    });
  });
});
