import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { TabContentRefDirective } from './tab-content-ref.directive';

describe('TabContentRefDirective', () => {
  let disabled: WritableSignal<boolean>;
  let fixture: DirectiveFixture<TabContentRefDirective>;

  beforeEach(() => {
    disabled = signal(false);
    fixture = TestBed.createDirective(TabContentRefDirective, {
      tagName: 'a',
      bindings: [inputBinding('cTabContent', () => undefined), inputBinding('disabled', disabled)]
    });
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should not set tabindex when enabled', () => {
    expect(fixture.nativeElement.getAttribute('tabindex')).toBeNull();
  });

  it('should set tabindex to -1 when disabled', () => {
    disabled.set(true);
    fixture.detectChanges();
    expect(fixture.nativeElement.getAttribute('tabindex')).toBe('-1');
  });
});
