import { TestBed } from '@angular/core/testing';
import { FormCheckLabelDirective } from './form-check-label.directive';

describe('FormCheckLabelDirective', () => {
  it('should create an instance', () => {
    const fixture = TestBed.createDirective(FormCheckLabelDirective);
    expect(fixture.directiveInstance).toBeTruthy();
    expect(fixture.nativeElement.tagName).toBe('LABEL');
  });

  it('should have css classes', () => {
    const fixture = TestBed.createDirective(FormCheckLabelDirective);
    expect(fixture.nativeElement.classList.contains('form-check-label')).toBe(true);
  });
});
