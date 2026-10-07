/// <reference types="vitest/globals" />
import { restoreFocus } from './focus.utils';

describe('restoreFocus', () => {
  let overlay: HTMLDivElement;
  let inside: HTMLButtonElement;
  let first: HTMLButtonElement;
  let second: HTMLInputElement;
  let outside: HTMLButtonElement;

  beforeEach(() => {
    overlay = document.createElement('div');
    inside = document.createElement('button');
    overlay.append(inside);
    first = document.createElement('button');
    second = document.createElement('input');
    outside = document.createElement('button');
    document.body.append(overlay, first, second, outside);
  });

  afterEach(() => {
    overlay.remove();
    first.remove();
    second.remove();
    outside.remove();
  });

  it('should focus the first candidate when focus is inside the overlay', () => {
    inside.focus();
    expect(restoreFocus(overlay, [first, second])).toBe(true);
    expect(document.activeElement).toBe(first);
  });

  it('should focus the first candidate when focus is on the body', () => {
    expect(document.activeElement).toBe(document.body);
    expect(restoreFocus(overlay, [first, second])).toBe(true);
    expect(document.activeElement).toBe(first);
  });

  it('should not move focus that is on an element outside the overlay', () => {
    outside.focus();
    expect(restoreFocus(overlay, [first, second])).toBe(false);
    expect(document.activeElement).toBe(outside);
  });

  it('should skip a candidate that cannot take focus', () => {
    first.disabled = true;
    inside.focus();
    expect(restoreFocus(overlay, [first, second])).toBe(true);
    expect(document.activeElement).toBe(second);
  });

  it('should skip missing and detached candidates', () => {
    first.remove();
    const focus = vi.spyOn(first, 'focus');
    inside.focus();
    expect(restoreFocus(overlay, [null, undefined, first, second])).toBe(true);
    expect(focus).not.toHaveBeenCalled();
    expect(document.activeElement).toBe(second);
  });

  it('should leave focus in place when the only candidate is the body', () => {
    inside.focus();
    expect(restoreFocus(overlay, [document.body])).toBe(false);
    expect(document.activeElement).toBe(inside);
  });

  it('should focus without scrolling', () => {
    const focus = vi.spyOn(first, 'focus');
    restoreFocus(overlay, [first]);
    expect(focus).toHaveBeenCalledWith({ preventScroll: true });
  });

  it('should read focus inside a shadow root', () => {
    const shadowHost = document.createElement('div');
    document.body.append(shadowHost);
    const root = shadowHost.attachShadow({ mode: 'open' });
    const shadowOverlay = document.createElement('div');
    const shadowInside = document.createElement('button');
    const shadowTrigger = document.createElement('button');
    shadowOverlay.append(shadowInside);
    root.append(shadowOverlay, shadowTrigger);
    shadowInside.focus();
    expect(restoreFocus(shadowOverlay, [shadowTrigger])).toBe(true);
    expect(root.activeElement).toBe(shadowTrigger);
    shadowHost.remove();
  });

  it('should return false when no candidate takes focus', () => {
    inside.focus();
    expect(restoreFocus(overlay, [])).toBe(false);
    expect(document.activeElement).toBe(inside);
  });
});
