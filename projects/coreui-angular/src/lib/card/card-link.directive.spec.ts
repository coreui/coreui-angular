import { TestBed } from '@angular/core/testing';
import { CardLinkDirective } from './card-link.directive';

describe('CardLinkDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(CardLinkDirective, { tagName: 'a' });
    expect(fixture.directiveInstance).toBeTruthy();
    expect(fixture.nativeElement.classList.contains('card-link')).toBe(true);
  });
});
