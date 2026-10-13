import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { FormSelectDirective } from './form-select.directive';

describe('FormSelectDirective', () => {
  let sizing: WritableSignal<'' | 'sm' | 'lg' | undefined>;
  let valid: WritableSignal<boolean | undefined>;
  let fixture: DirectiveFixture<FormSelectDirective>;

  beforeEach(async () => {
    sizing = signal<'' | 'sm' | 'lg' | undefined>(undefined);
    valid = signal<boolean | undefined>(undefined);
    fixture = TestBed.createDirective(FormSelectDirective, {
      bindings: [inputBinding('sizing', sizing), inputBinding('valid', valid)]
    });
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', async () => {
    const classList = fixture.nativeElement.classList;
    expect(classList.contains('form-select')).toBe(true);
    sizing.set('sm');
    await fixture.whenStable();
    expect(classList.contains('form-select-sm')).toBe(true);
    sizing.set('lg');
    await fixture.whenStable();
    expect(classList.contains('form-select-lg')).toBe(true);
    sizing.set('');
    await fixture.whenStable();
    expect(classList.contains('form-select-sm')).toBe(false);
    expect(classList.contains('form-select-lg')).toBe(false);
    expect(classList.contains('is-invalid')).toBe(false);
    expect(classList.contains('is-valid')).toBe(false);
    valid.set(true);
    await fixture.whenStable();
    expect(classList.contains('is-invalid')).toBe(false);
    expect(classList.contains('is-valid')).toBe(true);
    valid.set(false);
    await fixture.whenStable();
    expect(classList.contains('is-invalid')).toBe(true);
    expect(classList.contains('is-valid')).toBe(false);
    valid.set(undefined);
    await fixture.whenStable();
    expect(classList.contains('is-invalid')).toBe(false);
    expect(classList.contains('is-valid')).toBe(false);
  });
});
