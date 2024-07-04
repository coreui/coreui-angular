import { TestBed } from '@angular/core/testing';
import { TextBgColorDirective } from './text-bg-color.directive';

describe('TextBgColorDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new TextBgColorDirective();
      expect(directive).toBeTruthy();
    });
  });
});
