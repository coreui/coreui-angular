import { CardImgDirective } from './card-img.directive';
import { TestBed } from '@angular/core/testing';

describe('CardImgDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new CardImgDirective();
      expect(directive).toBeTruthy();
    });
  });
});
