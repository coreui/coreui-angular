import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { FormFloatingDirective } from './form-floating.directive';

describe('FormFloatingDirective', () => {
  let floating: WritableSignal<boolean>;
  let fixture: DirectiveFixture<FormFloatingDirective>;

  beforeEach(async () => {
    floating = signal(false);
    fixture = TestBed.createDirective(FormFloatingDirective, {
      tagName: 'div',
      bindings: [inputBinding('cFormFloating', floating)]
    });
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', async () => {
    expect(fixture.nativeElement.classList.contains('form-floating')).toBe(false);
    floating.set(true);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('form-floating')).toBe(true);
    floating.set(false);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('form-floating')).toBe(false);
  });

  it('should be floating by default', async () => {
    const defaultFixture = TestBed.createDirective(FormFloatingDirective, { tagName: 'div' });
    await defaultFixture.whenStable();
    expect(defaultFixture.nativeElement.classList.contains('form-floating')).toBe(true);
  });
});
