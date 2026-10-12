import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { FormSelectDirective } from './form-select.directive';

describe('FormSelectDirective', () => {
  let sizing: WritableSignal<'' | 'sm' | 'lg' | undefined>;
  let valid: WritableSignal<boolean | undefined>;
  let fixture: DirectiveFixture<FormSelectDirective>;

  beforeEach(() => {
    sizing = signal<'' | 'sm' | 'lg' | undefined>(undefined);
    valid = signal<boolean | undefined>(undefined);
    fixture = TestBed.createDirective(FormSelectDirective, {
      bindings: [inputBinding('sizing', sizing), inputBinding('valid', valid)]
    });
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', () => {
    const classList = fixture.nativeElement.classList;
    expect(classList.contains('form-select')).toBe(true);
    sizing.set('sm');
    fixture.detectChanges();
    expect(classList.contains('form-select-sm')).toBe(true);
    sizing.set('lg');
    fixture.detectChanges();
    expect(classList.contains('form-select-lg')).toBe(true);
    sizing.set('');
    fixture.detectChanges();
    expect(classList.contains('form-select-sm')).toBe(false);
    expect(classList.contains('form-select-lg')).toBe(false);
    expect(classList.contains('is-invalid')).toBe(false);
    expect(classList.contains('is-valid')).toBe(false);
    valid.set(true);
    fixture.detectChanges();
    expect(classList.contains('is-invalid')).toBe(false);
    expect(classList.contains('is-valid')).toBe(true);
    valid.set(false);
    fixture.detectChanges();
    expect(classList.contains('is-invalid')).toBe(true);
    expect(classList.contains('is-valid')).toBe(false);
    valid.set(undefined);
    fixture.detectChanges();
    expect(classList.contains('is-invalid')).toBe(false);
    expect(classList.contains('is-valid')).toBe(false);
  });
});
