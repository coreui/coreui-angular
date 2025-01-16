import { TestBed } from '@angular/core/testing';
import { AlignDirective } from './align.directive';

describe('AlignDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
    const directive = new AlignDirective();
    expect(directive).toBeTruthy();
    });
  });
});
