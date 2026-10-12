import { TestBed } from '@angular/core/testing';
import { CardTextDirective } from './card-text.directive';

describe('CardTextDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(CardTextDirective, { tagName: 'p' });
    expect(fixture.directiveInstance).toBeTruthy();
    expect(fixture.nativeElement.classList.contains('card-text')).toBe(true);
  });
});
