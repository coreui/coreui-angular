import { TestBed } from '@angular/core/testing';
import { ElementRef, Renderer2 } from '@angular/core';

import { TableDirective } from './table.directive';

class MockElementRef extends ElementRef {}

describe('TableDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Renderer2, { provide: ElementRef, useClass: MockElementRef }]
    });
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new TableDirective();
      expect(directive).toBeTruthy();
    });
  });
});
