import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { FormLabelDirective } from './form-label.directive';

describe('FormLabelDirective', () => {
  let col: WritableSignal<'col' | ''>;
  let sizing: WritableSignal<'' | 'sm' | 'lg' | undefined>;
  let fixture: DirectiveFixture<FormLabelDirective>;

  beforeEach(() => {
    col = signal<'col' | ''>('');
    sizing = signal<'' | 'sm' | 'lg' | undefined>('sm');
    fixture = TestBed.createDirective(FormLabelDirective, {
      tagName: 'label',
      bindings: [inputBinding('cLabel', col), inputBinding('sizing', sizing)]
    });
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('form-label')).toBe(true);
    expect(fixture.nativeElement.classList.contains('col-form-label')).toBe(false);
    expect(fixture.nativeElement.classList.contains('col-form-label-sm')).toBe(false);
    col.set('col');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('form-label')).toBe(true);
    expect(fixture.nativeElement.classList.contains('col-form-label')).toBe(true);
    expect(fixture.nativeElement.classList.contains('col-form-label-sm')).toBe(true);
  });
});
