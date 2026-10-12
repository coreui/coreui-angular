import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { BackgroundColors } from '../coreui.types';
import { BgColorDirective } from './bg-color.directive';

describe('BgColorDirective', () => {
  let color: WritableSignal<BackgroundColors>;
  let gradient: WritableSignal<boolean>;
  let fixture: DirectiveFixture<BgColorDirective>;

  beforeEach(() => {
    color = signal('primary');
    gradient = signal(false);
    fixture = TestBed.createDirective(BgColorDirective, {
      tagName: 'div',
      bindings: [inputBinding('cBgColor', color), inputBinding('gradient', gradient)]
    });
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('bg-primary')).toBe(true);
    expect(fixture.nativeElement.classList.contains('bg-gradient')).toBe(false);
    color.set('success');
    gradient.set(true);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('bg-primary')).toBe(false);
    expect(fixture.nativeElement.classList.contains('bg-success')).toBe(true);
    expect(fixture.nativeElement.classList.contains('bg-gradient')).toBe(true);
  });
});
