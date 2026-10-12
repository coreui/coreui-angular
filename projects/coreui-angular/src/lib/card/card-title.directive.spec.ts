import { TestBed } from '@angular/core/testing';
import { CardTitleDirective } from './card-title.directive';

describe('CardTitleDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(CardTitleDirective, { tagName: 'h5' });
    expect(fixture.directiveInstance).toBeTruthy();
    expect(fixture.nativeElement.classList.contains('card-title')).toBe(true);
  });
});
