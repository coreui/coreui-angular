import { TestBed } from '@angular/core/testing';
import { TextColorDirective } from './text-color.directive';

describe('TextColorDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new TextColorDirective();
      expect(directive).toBeTruthy();
    });
  });
});
