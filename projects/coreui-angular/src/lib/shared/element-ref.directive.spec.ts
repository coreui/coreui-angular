import { ElementRefDirective } from './element-ref.directive';
import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

class MockElementRef extends ElementRef {}

describe('ElementRefDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ElementRef, useClass: MockElementRef }],
    });
  });
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new ElementRefDirective();
      expect(directive).toBeTruthy();
    });
  });
});
