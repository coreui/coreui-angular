import { TestBed } from '@angular/core/testing';
import { ElementRefDirective } from './element-ref.directive';

describe('ElementRefDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(ElementRefDirective, { tagName: 'div' });
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should expose elementRef of the host', () => {
    const fixture = TestBed.createDirective(ElementRefDirective, { tagName: 'div' });
    expect(fixture.directiveInstance.elementRef.nativeElement).toBe(fixture.nativeElement);
  });
});
