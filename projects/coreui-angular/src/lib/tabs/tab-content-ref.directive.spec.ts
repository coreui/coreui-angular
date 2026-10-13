import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { TabContentRefDirective } from './tab-content-ref.directive';

describe('TabContentRefDirective', () => {
  let disabled: WritableSignal<boolean>;
  let fixture: DirectiveFixture<TabContentRefDirective>;

  beforeEach(async () => {
    disabled = signal(false);
    fixture = TestBed.createDirective(TabContentRefDirective, {
      tagName: 'a',
      bindings: [inputBinding('cTabContent', () => undefined), inputBinding('disabled', disabled)]
    });
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should not set tabindex when enabled', () => {
    expect(fixture.nativeElement.getAttribute('tabindex')).toBeNull();
  });

  it('should set tabindex to -1 when disabled', async () => {
    disabled.set(true);
    await fixture.whenStable();
    expect(fixture.nativeElement.getAttribute('tabindex')).toBe('-1');
  });
});
