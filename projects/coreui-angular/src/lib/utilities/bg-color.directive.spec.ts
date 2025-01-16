import { TestBed } from '@angular/core/testing';
import { BgColorDirective } from './bg-color.directive';

describe('BgColorDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
    const directive = new BgColorDirective();
    expect(directive).toBeTruthy();
    });
  });
});
