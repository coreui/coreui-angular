import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { FormControlDirective } from './form-control.directive';

describe('FormControlDirective', () => {
  let type: WritableSignal<string>;
  let sizing: WritableSignal<'' | 'sm' | 'lg' | undefined>;
  let valid: WritableSignal<boolean | undefined>;
  let plaintext: WritableSignal<boolean>;
  let fixture: DirectiveFixture<FormControlDirective>;

  beforeEach(async () => {
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
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes and type attribute', async () => {
    expect(fixture.nativeElement.classList.contains('form-control')).toBe(true);
    expect(fixture.nativeElement.getAttribute('type')).toBe('text');
    sizing.set('lg');
    valid.set(false);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('form-control-lg')).toBe(true);
    expect(fixture.nativeElement.classList.contains('is-invalid')).toBe(true);
    valid.set(true);
    plaintext.set(true);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('is-valid')).toBe(true);
    expect(fixture.nativeElement.classList.contains('form-control')).toBe(false);
    expect(fixture.nativeElement.classList.contains('form-control-plaintext')).toBe(true);
  });

  it('should render range and color types', async () => {
    type.set('range');
    sizing.set('sm');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('form-range')).toBe(true);
    expect(fixture.nativeElement.classList.contains('form-control')).toBe(false);
    expect(fixture.nativeElement.classList.contains('form-control-sm')).toBe(false);
    type.set('color');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('form-control')).toBe(true);
    expect(fixture.nativeElement.classList.contains('form-control-color')).toBe(true);
  });

  it('should warn on unsupported host element', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    await TestBed.createDirective(FormControlDirective, { tagName: 'div' }).whenStable();
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('<div>'));
    warn.mockRestore();
  });
});
