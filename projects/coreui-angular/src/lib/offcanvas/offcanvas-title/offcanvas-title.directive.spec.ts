import { TestBed } from '@angular/core/testing';
import { OffcanvasTitleDirective } from './offcanvas-title.directive';

describe('OffcanvasTitleDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(OffcanvasTitleDirective, { tagName: 'h5' });
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', () => {
    const fixture = TestBed.createDirective(OffcanvasTitleDirective, { tagName: 'h5' });
    expect(fixture.nativeElement.classList.contains('offcanvas-title')).toBe(true);
  });
});
