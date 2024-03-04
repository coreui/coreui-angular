import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ProgressBarDirective } from './progress-bar.directive';

class MockElementRef extends ElementRef {}

describe('ProgressBarDirective', () => {
  let directive: ProgressBarDirective;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        Renderer2,
        { provide: ElementRef, useClass: MockElementRef }
      ]
    });

    TestBed.runInInjectionContext(() => {
      directive = new ProgressBarDirective();
    });
  });

  it('should create an instance', () => {
    expect(directive).toBeDefined();
  });

  it('should have percent value', () => {
    directive.value = 42;
    expect(directive.percent()).toBe(42);
  });

});
