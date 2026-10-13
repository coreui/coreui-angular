import { inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { ThemeDirective } from './theme.directive';

describe('ThemeDirective', () => {
  let colorScheme: WritableSignal<'dark' | 'light' | undefined>;
  let dark: WritableSignal<boolean>;
  let fixture: DirectiveFixture<ThemeDirective>;

  beforeEach(() => {
    colorScheme = signal<'dark' | 'light' | undefined>(undefined);
    dark = signal(false);
    fixture = TestBed.createDirective(ThemeDirective, {
      tagName: 'div',
      bindings: [inputBinding('colorScheme', colorScheme), inputBinding('dark', dark)]
    });
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should set data-coreui-theme attribute', async () => {
    await fixture.whenStable();
    expect(fixture.nativeElement.getAttribute('data-coreui-theme')).toBeNull();
    colorScheme.set('dark');
    await fixture.whenStable();
    expect(fixture.nativeElement.getAttribute('data-coreui-theme')).toBe('dark');
    colorScheme.set('light');
    await fixture.whenStable();
    expect(fixture.nativeElement.getAttribute('data-coreui-theme')).toBe('light');
    colorScheme.set(undefined);
    await fixture.whenStable();
    expect(fixture.nativeElement.getAttribute('data-coreui-theme')).toBeNull();
  });

  it('should keep a light colorScheme on the first render', async () => {
    colorScheme.set('light');
    await fixture.whenStable();
    expect(fixture.nativeElement.getAttribute('data-coreui-theme')).toBe('light');
  });

  it('should keep a light colorScheme on the first render without a dark binding', async () => {
    const lightFixture = TestBed.createDirective(ThemeDirective, {
      tagName: 'div',
      bindings: [inputBinding('colorScheme', () => 'light')]
    });
    await lightFixture.whenStable();
    expect(lightFixture.nativeElement.getAttribute('data-coreui-theme')).toBe('light');
  });

  it('should apply dark over colorScheme and restore colorScheme when dark is unset', async () => {
    colorScheme.set('light');
    dark.set(true);
    await fixture.whenStable();
    expect(fixture.nativeElement.getAttribute('data-coreui-theme')).toBe('dark');
    dark.set(false);
    await fixture.whenStable();
    expect(fixture.nativeElement.getAttribute('data-coreui-theme')).toBe('light');
  });

  it('should keep dark when colorScheme changes or is unset', async () => {
    dark.set(true);
    colorScheme.set('dark');
    await fixture.whenStable();
    colorScheme.set('light');
    await fixture.whenStable();
    expect(fixture.nativeElement.getAttribute('data-coreui-theme')).toBe('dark');
    colorScheme.set(undefined);
    await fixture.whenStable();
    expect(fixture.nativeElement.getAttribute('data-coreui-theme')).toBe('dark');
  });
});
