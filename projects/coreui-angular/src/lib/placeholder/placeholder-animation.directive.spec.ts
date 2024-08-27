import { TestBed } from '@angular/core/testing';
import { PlaceholderAnimationDirective } from './placeholder-animation.directive';

describe('PlaceholderAnimationDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new PlaceholderAnimationDirective();
      expect(directive).toBeTruthy();
    });
  });
});
