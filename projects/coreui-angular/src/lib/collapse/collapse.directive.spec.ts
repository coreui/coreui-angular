import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { CollapseDirective } from './collapse.directive';

describe('CollapseDirective', () => {
  let horizontal: WritableSignal<boolean>;
  let visible: WritableSignal<boolean>;
  let fixture: DirectiveFixture<CollapseDirective>;

  beforeEach(() => {
    horizontal = signal(false);
    visible = signal(false);
    fixture = TestBed.createDirective(CollapseDirective, {
      tagName: 'div',
      bindings: [
        inputBinding('horizontal', horizontal),
        inputBinding('visible', visible),
        inputBinding('animate', () => false)
      ]
    });
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.classList.contains('collapse-horizontal')).toBe(false);
    horizontal.set(true);
    visible.set(true);
    fixture.detectChanges();
    expect(element.classList.contains('collapse-horizontal')).toBe(true);
    expect(element.style.display).toBe('');
    horizontal.set(false);
    visible.set(false);
    fixture.detectChanges();
    expect(element.classList.contains('collapse-horizontal')).toBe(false);
  });
});
