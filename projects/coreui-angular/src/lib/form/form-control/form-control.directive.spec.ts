import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { FormControlDirective } from './form-control.directive';

describe('FormControlDirective', () => {
  let type: WritableSignal<string>;
  let sizing: WritableSignal<'' | 'sm' | 'lg' | undefined>;
  let valid: WritableSignal<boolean | undefined>;
  let plaintext: WritableSignal<boolean>;
  let fixture: DirectiveFixture<FormControlDirective>;

  beforeEach(() => {
    type = signal('text');
    sizing = signal<'' | 'sm' | 'lg' | undefined>(undefined);
    valid = signal<boolean | undefined>(undefined);
    plaintext = signal(false);
    fixture = TestBed.createDirective(FormControlDirective, {
      tagName: 'input',
      bindings: [
        inputBinding('type', type),
        inputBinding('sizing', sizing),
        inputBinding('valid', valid),
        inputBinding('plaintext', plaintext)
      ]
    });
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes and type attribute', () => {
    expect(fixture.nativeElement.classList.contains('form-control')).toBe(true);
    expect(fixture.nativeElement.getAttribute('type')).toBe('text');
    sizing.set('lg');
    valid.set(false);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('form-control-lg')).toBe(true);
    expect(fixture.nativeElement.classList.contains('is-invalid')).toBe(true);
    valid.set(true);
    plaintext.set(true);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('is-valid')).toBe(true);
    expect(fixture.nativeElement.classList.contains('form-control')).toBe(false);
    expect(fixture.nativeElement.classList.contains('form-control-plaintext')).toBe(true);
  });

  it('should render range and color types', () => {
    type.set('range');
    sizing.set('sm');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('form-range')).toBe(true);
    expect(fixture.nativeElement.classList.contains('form-control')).toBe(false);
    expect(fixture.nativeElement.classList.contains('form-control-sm')).toBe(false);
    type.set('color');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('form-control')).toBe(true);
    expect(fixture.nativeElement.classList.contains('form-control-color')).toBe(true);
  });

  it('should warn on unsupported host element', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    TestBed.createDirective(FormControlDirective, { tagName: 'div' }).detectChanges();
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('<div>'));
    warn.mockRestore();
  });
});
