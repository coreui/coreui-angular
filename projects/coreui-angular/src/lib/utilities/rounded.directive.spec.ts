import { TestBed } from '@angular/core/testing';
import { RoundedDirective } from './rounded.directive';

describe('RoundedDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
    const directive = new RoundedDirective();
    expect(directive).toBeTruthy();
    });
  });
});
