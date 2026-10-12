import { TestBed } from '@angular/core/testing';
import { CardSubtitleDirective } from './card-subtitle.directive';

describe('CardSubtitleDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(CardSubtitleDirective, { tagName: 'h6' });
    expect(fixture.directiveInstance).toBeTruthy();
    expect(fixture.nativeElement.classList.contains('card-subtitle')).toBe(true);
  });
});
