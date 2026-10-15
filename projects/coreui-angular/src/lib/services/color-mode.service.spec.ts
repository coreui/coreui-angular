import { DOCUMENT } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ColorModeService } from './color-mode.service';

describe('ColorModeService', () => {
  let service: ColorModeService;
  let document: Document;

  const preferColorScheme = (scheme: 'dark' | 'light') => {
    Object.defineProperty(document.defaultView, 'matchMedia', {
      configurable: true,
      value: (query: string) => ({ matches: query === `(prefers-color-scheme: ${scheme})` })
    });
  };

  beforeEach(() => {
    document = TestBed.inject(DOCUMENT);
    service = TestBed.inject(ColorModeService);
  });

  afterEach(() => {
    delete (document.defaultView as any).matchMedia;
    delete document.documentElement.dataset['coreuiTheme'];
    document.defaultView?.localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should switch themes', () => {
    expect(service.colorMode()).toBeUndefined();
    service.colorMode.set('light');
    expect(service.colorMode()).toBe('light');
    service.colorMode.set('dark');
    expect(service.colorMode()).toBe('dark');
    service.colorMode.set('auto');
    expect(service.colorMode()).toBe('auto');
  });

  it('should set the theme on the document and dispatch the change event', () => {
    const listener = vi.fn();
    document.documentElement.addEventListener('ColorSchemeChange', listener);

    service.colorMode.set('dark');
    TestBed.tick();

    expect(document.documentElement.dataset['coreuiTheme']).toBe('dark');
    expect(listener).toHaveBeenCalledTimes(1);
    document.documentElement.removeEventListener('ColorSchemeChange', listener);
  });

  it('should resolve auto to the preferred color scheme', () => {
    preferColorScheme('dark');
    service.colorMode.set('auto');
    TestBed.tick();
    expect(document.documentElement.dataset['coreuiTheme']).toBe('dark');

    preferColorScheme('light');
    service.colorMode.set('dark');
    TestBed.tick();
    service.colorMode.set('auto');
    TestBed.tick();
    expect(document.documentElement.dataset['coreuiTheme']).toBe('light');
  });

  it('should store the color mode under the local storage item name', () => {
    service.localStorageItemName.set('coreui-theme');
    service.colorMode.set('dark');
    TestBed.tick();

    expect(service.getStoredTheme('coreui-theme')).toBe('dark');
  });

  it('should restore the stored color mode after the first render', () => {
    service.setStoredTheme('coreui-theme', 'dark');
    service.localStorageItemName.set('coreui-theme');
    TestBed.tick();

    expect(service.colorMode()).toBe('dark');
    expect(document.documentElement.dataset['coreuiTheme']).toBe('dark');
  });

  it('should fall back to the theme set on the document without a stored one', () => {
    document.documentElement.dataset['coreuiTheme'] = 'light';
    service.localStorageItemName.set('coreui-theme');
    TestBed.tick();

    expect(service.colorMode()).toBe('light');
  });

  it('should remove the stored color mode', () => {
    service.setStoredTheme('coreui-theme', 'dark');
    service.removeStoredTheme('coreui-theme');

    expect(service.getStoredTheme('coreui-theme')).toBeNull();
  });
});
