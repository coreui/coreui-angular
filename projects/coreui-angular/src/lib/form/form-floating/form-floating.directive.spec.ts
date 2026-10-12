import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { FormFloatingDirective } from './form-floating.directive';

describe('FormFloatingDirective', () => {
  let floating: WritableSignal<boolean>;
  let fixture: DirectiveFixture<FormFloatingDirective>;

  beforeEach(() => {
    floating = signal(false);
    fixture = TestBed.createDirective(FormFloatingDirective, {
      tagName: 'div',
      bindings: [inputBinding('cFormFloating', floating)]
    });
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('form-floating')).toBe(false);
    floating.set(true);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('form-floating')).toBe(true);
    floating.set(false);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('form-floating')).toBe(false);
  });

  it('should be floating by default', () => {
    const defaultFixture = TestBed.createDirective(FormFloatingDirective, { tagName: 'div' });
    defaultFixture.detectChanges();
    expect(defaultFixture.nativeElement.classList.contains('form-floating')).toBe(true);
  });
});
