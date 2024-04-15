import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ThemeDirective } from './theme.directive';

class MockElementRef extends ElementRef {}

describe('ThemeDirective', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ElementRef, useClass: MockElementRef }, Renderer2]
    });
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new ThemeDirective();
      expect(directive).toBeTruthy();
    });
  });
});
