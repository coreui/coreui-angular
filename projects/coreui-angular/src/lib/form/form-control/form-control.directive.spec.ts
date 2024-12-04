import { FormControlDirective } from './form-control.directive';
import { TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';

class MockElementRef extends ElementRef {}

describe('FormControlDirective', () => {
  it('should create an instance', () => {
    TestBed.configureTestingModule({
      providers: [{ provide: ElementRef, useClass: MockElementRef }]
    });
    TestBed.runInInjectionContext(() => {
      const directive = new FormControlDirective();
      expect(directive).toBeTruthy();
    });
  });
});
