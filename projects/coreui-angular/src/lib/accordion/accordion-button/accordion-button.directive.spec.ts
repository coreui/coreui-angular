import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { AccordionButtonDirective } from './accordion-button.directive';

describe('AccordionButtonDirective', () => {
  let collapsed: WritableSignal<boolean | undefined>;
  let fixture: DirectiveFixture<AccordionButtonDirective>;

  beforeEach(() => {
    collapsed = signal<boolean | undefined>(true);
    fixture = TestBed.createDirective(AccordionButtonDirective, {
      tagName: 'button',
      bindings: [inputBinding('collapsed', collapsed)]
    });
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes and attributes', () => {
    expect(fixture.nativeElement.classList.contains('accordion-button')).toBe(true);
    expect(fixture.nativeElement.classList.contains('collapsed')).toBe(true);
    expect(fixture.nativeElement.getAttribute('type')).toBe('button');
    expect(fixture.nativeElement.getAttribute('aria-expanded')).toBe('false');
    collapsed.set(false);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('collapsed')).toBe(false);
    expect(fixture.nativeElement.getAttribute('aria-expanded')).toBe('true');
  });
});
