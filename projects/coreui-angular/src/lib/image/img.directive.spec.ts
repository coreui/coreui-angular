import { TestBed } from '@angular/core/testing';
import { ImgDirective } from './img.directive';

describe('ImgDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new ImgDirective();
      expect(directive).toBeTruthy();
    });
  });
});
