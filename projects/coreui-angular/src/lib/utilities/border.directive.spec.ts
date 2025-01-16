import { TestBed } from '@angular/core/testing';
import { BorderDirective } from './border.directive';

describe('BorderDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
    const directive = new BorderDirective();
    expect(directive).toBeTruthy();
    });
  });
});
