import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { HeaderTogglerDirective } from './header-toggler.directive';

describe('HeaderTogglerDirective', () => {
  let fixture: DirectiveFixture<HeaderTogglerDirective>;

  beforeEach(() => {
    fixture = TestBed.createDirective(HeaderTogglerDirective, { tagName: 'button' });
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css class', () => {
    expect(fixture.nativeElement.classList.contains('header-toggler')).toBe(true);
  });

  it('should set attributes', () => {
    expect(fixture.nativeElement.getAttribute('type')).toBe('button');
    expect(fixture.nativeElement.getAttribute('aria-label')).toBe('Toggle navigation');
  });
});
