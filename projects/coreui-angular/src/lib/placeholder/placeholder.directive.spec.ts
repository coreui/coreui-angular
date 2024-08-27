import { TestBed } from '@angular/core/testing';
import { PlaceholderDirective } from './placeholder.directive';

describe('PlaceholderDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new PlaceholderDirective();
      expect(directive).toBeTruthy();
    });
  });
});
