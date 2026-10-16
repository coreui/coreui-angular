import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { SearchButtonComponent } from './search-button.component';
import { TemplateIdDirective } from '../shared';

@Component({
  template: `
    <c-search-button
      [placeholder]="placeholder()"
      [shortcut]="shortcut()"
      [disabled]="disabled()"
      [preventDefault]="preventDefault()"
      (trigger)="onTrigger()"
    ></c-search-button>
  `,
  imports: [SearchButtonComponent]
})
class TestHostComponent {
  readonly placeholder = signal('Search');
  readonly shortcut = signal('meta+/,ctrl+/');
  readonly disabled = signal(false);
  readonly preventDefault = signal(true);
  readonly onTrigger = vi.fn();
}

describe('SearchButtonComponent', () => {
  let host: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let button: HTMLButtonElement;
  const originalPlatform = window.navigator.platform;

  beforeEach(async () => {
    Object.defineProperty(window.navigator, 'platform', {
      configurable: true,
      value: 'MacIntel'
    });

    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    await fixture.whenStable();

    host = fixture.componentInstance;
    button = fixture.nativeElement.querySelector('button');
  });

  afterEach(() => {
    Object.defineProperty(window.navigator, 'platform', {
      configurable: true,
      value: originalPlatform
    });
  });

  it('should create', () => {
    expect(button).toBeTruthy();
  });

  it('should render as a button with default css classes and attributes', () => {
    expect(button.tagName).toBe('BUTTON');
    expect(button.classList.contains('search-button')).toBe(true);
    expect(button.getAttribute('type')).toBe('button');
    expect(button.hasAttribute('disabled')).toBe(false);
  });

  it('should render the default icon, placeholder, and shortcut keys', () => {
    expect(button.querySelector('.search-button-icon')).toBeTruthy();
    expect(button.querySelector('.search-button-placeholder')?.textContent?.trim()).toBe('Search');

    const keys = button.querySelectorAll('.search-button-key');
    expect(keys.length).toBe(2);
    expect(keys[0].textContent?.trim()).toBe('⌘');
    expect(keys[1].textContent?.trim()).toBe('/');
  });

  it('should customize placeholder and shortcut', async () => {
    host.placeholder.set('Command palette');
    host.shortcut.set('meta+k,ctrl+k');
    await fixture.whenStable();

    expect(button.querySelector('.search-button-placeholder')?.textContent?.trim()).toBe('Command palette');

    const keys = button.querySelectorAll('.search-button-key');
    expect(keys.length).toBe(2);
    expect(keys[0].textContent?.trim()).toBe('⌘');
    expect(keys[1].textContent?.trim()).toBe('K');
  });

  it('should reflect the disabled input as an attribute', async () => {
    host.disabled.set(true);
    await fixture.whenStable();

    expect(button.getAttribute('disabled')).toBe('');
  });

  it('should emit trigger on click', () => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(host.onTrigger).toHaveBeenCalledTimes(1);
  });

  it('should emit trigger on a matching shortcut', async () => {
    host.shortcut.set('meta+k,ctrl+k');
    await fixture.whenStable();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));

    expect(host.onTrigger).toHaveBeenCalledTimes(1);
  });

  it('should ignore key events without a key, as autofill sends them', async () => {
    host.shortcut.set('meta+k,ctrl+k');
    await fixture.whenStable();

    const onError = vi.fn();
    window.addEventListener('error', onError);
    document.dispatchEvent(new Event('keydown'));
    document.dispatchEvent(new Event('keyup'));
    window.removeEventListener('error', onError);
    await fixture.whenStable();

    expect(onError).not.toHaveBeenCalled();
    expect(host.onTrigger).not.toHaveBeenCalled();
  });

  it('should not emit trigger on a matching shortcut when disabled', async () => {
    host.shortcut.set('meta+k,ctrl+k');
    host.disabled.set(true);
    await fixture.whenStable();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));

    expect(host.onTrigger).not.toHaveBeenCalled();
  });

  it('should not track active shortcut keys while disabled', async () => {
    host.shortcut.set('meta+k,ctrl+k');
    host.disabled.set(true);
    await fixture.whenStable();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Meta', metaKey: true }));
    await fixture.whenStable();

    const keys = button.querySelectorAll('.search-button-key');
    expect(keys[0].classList.contains('active')).toBe(false);
    expect(host.onTrigger).not.toHaveBeenCalled();
  });

  it('should clear an already-active shortcut key as soon as the component becomes disabled', async () => {
    host.shortcut.set('meta+k,ctrl+k');
    await fixture.whenStable();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Meta', metaKey: true }));
    await fixture.whenStable();

    let keys = button.querySelectorAll('.search-button-key');
    expect(keys[0].classList.contains('active')).toBe(true);

    // a real keyup never arrives while the key is held and the button becomes
    // disabled mid-press; the highlight must clear immediately rather than get stuck
    host.disabled.set(true);
    await fixture.whenStable();

    keys = button.querySelectorAll('.search-button-key');
    expect(keys[0].classList.contains('active')).toBe(false);
  });

  it('should prevent the default action of a matching shortcut only with preventDefault on', async () => {
    host.shortcut.set('meta+k');
    await fixture.whenStable();

    const prevented = new KeyboardEvent('keydown', { key: 'k', metaKey: true, cancelable: true });
    document.dispatchEvent(prevented);
    expect(prevented.defaultPrevented).toBe(true);

    host.preventDefault.set(false);
    await fixture.whenStable();
    const allowed = new KeyboardEvent('keydown', { key: 'k', metaKey: true, cancelable: true });
    document.dispatchEvent(allowed);
    expect(allowed.defaultPrevented).toBe(false);
    expect(host.onTrigger).toHaveBeenCalledTimes(2);
  });

  it('should ignore a repeated or an already handled shortcut', async () => {
    host.shortcut.set('meta+k');
    await fixture.whenStable();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, repeat: true }));
    const handled = new KeyboardEvent('keydown', { key: 'k', metaKey: true, cancelable: true });
    handled.preventDefault();
    document.dispatchEvent(handled);

    expect(host.onTrigger).not.toHaveBeenCalled();
  });

  it('should not track released keys while disabled', async () => {
    host.shortcut.set('meta+k,ctrl+k');
    host.disabled.set(true);
    await fixture.whenStable();

    document.dispatchEvent(new KeyboardEvent('keyup', { key: 'k', metaKey: true }));
    await fixture.whenStable();

    expect(button.querySelectorAll('.search-button-key')[0].classList.contains('active')).toBe(false);
  });

  it('should ignore plain typing in editable targets', async () => {
    host.shortcut.set('k');
    await fixture.whenStable();

    const input = document.createElement('input');
    document.body.append(input);

    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', bubbles: true }));

    expect(host.onTrigger).not.toHaveBeenCalled();

    input.remove();
  });

  it('should trigger a modifier shortcut from an editable target', async () => {
    host.shortcut.set('meta+k');
    await fixture.whenStable();

    const input = document.createElement('input');
    document.body.append(input);

    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true }));

    expect(host.onTrigger).toHaveBeenCalledTimes(1);

    input.remove();
  });

  it('should highlight and clear active shortcut keys', async () => {
    host.shortcut.set('meta+k,ctrl+k');
    await fixture.whenStable();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Meta', metaKey: true }));
    await fixture.whenStable();

    let keys = button.querySelectorAll('.search-button-key');
    expect(keys[0].classList.contains('active')).toBe(true);
    expect(keys[1].classList.contains('active')).toBe(false);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
    await fixture.whenStable();

    keys = button.querySelectorAll('.search-button-key');
    expect(keys[0].classList.contains('active')).toBe(true);
    expect(keys[1].classList.contains('active')).toBe(true);

    // a keyup carries the modifier flags still held at release time; this synthetic
    // event (like the vanilla/React/Vue suites) omits metaKey, so both keys clear
    document.dispatchEvent(new KeyboardEvent('keyup', { key: 'k' }));
    await fixture.whenStable();

    keys = button.querySelectorAll('.search-button-key');
    expect(keys[0].classList.contains('active')).toBe(false);
    expect(keys[1].classList.contains('active')).toBe(false);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
    await fixture.whenStable();

    window.dispatchEvent(new FocusEvent('blur'));
    await fixture.whenStable();

    keys = button.querySelectorAll('.search-button-key');
    expect(keys[0].classList.contains('active')).toBe(false);
    expect(keys[1].classList.contains('active')).toBe(false);
  });
});

@Component({
  template: `
    <c-search-button>
      <ng-template cTemplateId="icon">
        <span class="custom-icon">★</span>
      </ng-template>
    </c-search-button>
  `,
  imports: [SearchButtonComponent, TemplateIdDirective]
})
class IconTemplateHostComponent {}

describe('SearchButtonComponent icon template', () => {
  it('should render a custom icon template instead of the default icon', async () => {
    const fixture: ComponentFixture<IconTemplateHostComponent> = TestBed.configureTestingModule({
      imports: [IconTemplateHostComponent]
    }).createComponent(IconTemplateHostComponent);

    await fixture.whenStable();

    const button = fixture.nativeElement.querySelector('button');
    expect(button.querySelector('.custom-icon')).toBeTruthy();
    expect(button.querySelector('.search-button-icon')).toBeFalsy();
  });
});

@Component({
  template: `
    <c-search-button>
      <span class="custom-content">Custom content</span>
    </c-search-button>
  `,
  imports: [SearchButtonComponent]
})
class ProjectedContentHostComponent {}

describe('SearchButtonComponent projected content', () => {
  it('should render fully custom projected content instead of the default icon and placeholder', async () => {
    const fixture: ComponentFixture<ProjectedContentHostComponent> = TestBed.configureTestingModule({
      imports: [ProjectedContentHostComponent]
    }).createComponent(ProjectedContentHostComponent);

    await fixture.whenStable();

    const button = fixture.nativeElement.querySelector('button');
    expect(button.querySelector('.custom-content')?.textContent?.trim()).toBe('Custom content');
    expect(button.querySelector('.search-button-icon')).toBeFalsy();
    expect(button.querySelector('.search-button-placeholder')).toBeFalsy();
  });
});
