import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { GutterDirective } from './gutter.directive';
import { GutterBreakpoints, Gutters, IGutterObject } from './gutter.type';

describe('GutterDirective', () => {
  let gutter: WritableSignal<IGutterObject | GutterBreakpoints | Gutters>;
  let fixture: DirectiveFixture<GutterDirective>;

  beforeEach(async () => {
    gutter = signal<IGutterObject | GutterBreakpoints | Gutters>(5);
    fixture = TestBed.createDirective(GutterDirective, {
      tagName: 'div',
      bindings: [inputBinding('gutter', gutter)]
    });
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css class', async () => {
    expect(fixture.nativeElement.classList.contains('g-5')).toBe(true);
    gutter.set({ gx: 2, gy: 1 });
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('gx-2')).toBe(true);
    expect(fixture.nativeElement.classList.contains('gy-1')).toBe(true);
    gutter.set({ md: { g: 3 } });
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('g-md-3')).toBe(true);
  });
});
