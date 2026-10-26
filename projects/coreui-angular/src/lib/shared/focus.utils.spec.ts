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

  it('should skip a candidate inside the overlay', () => {
    inside.focus();
    const insideFocus = vi.spyOn(inside, 'focus');
    expect(restoreFocus(overlay, [inside, second])).toBe(true);
    expect(insideFocus).not.toHaveBeenCalled();
    expect(document.activeElement).toBe(second);
  });

  it('should focus without scrolling', () => {
    const focus = vi.spyOn(first, 'focus');
    restoreFocus(overlay, [first]);
    expect(focus).toHaveBeenCalledWith({ preventScroll: true });
  });

  it('should return false when no candidate takes focus', () => {
    inside.focus();
    expect(restoreFocus(overlay, [])).toBe(false);
    expect(document.activeElement).toBe(inside);
  });

  it('should focus the candidate with the given function', () => {
    const focus = vi.fn((target: HTMLElement) => target.focus());
    inside.focus();
    expect(restoreFocus(overlay, [first], focus)).toBe(true);
    expect(focus).toHaveBeenCalledWith(first);
    expect(document.activeElement).toBe(first);
  });
});

describe('restoreFocus in a shadow root', () => {
  let host: HTMLDivElement;
  let root: ShadowRoot;
  let overlay: HTMLDivElement;
  let inside: HTMLButtonElement;
  let toggle: HTMLButtonElement;
  let outside: HTMLButtonElement;

  beforeEach(() => {
    host = document.createElement('div');
    root = host.attachShadow({ mode: 'open' });
    overlay = document.createElement('div');
    inside = document.createElement('button');
    overlay.append(inside);
    toggle = document.createElement('button');
    root.append(toggle, overlay);
    outside = document.createElement('button');
    document.body.append(host, outside);
  });

  afterEach(() => {
    host.remove();
    outside.remove();
  });

  it('should treat the focus inside a shadow root as held by the overlay', () => {
    inside.focus();
    expect(document.activeElement).toBe(host);
    expect(restoreFocus(overlay, [toggle])).toBe(true);
    expect(root.activeElement).toBe(toggle);
  });

  it('should leave the focus that moved elsewhere in the document while the overlay sits in a shadow root', () => {
    outside.focus();
    expect(restoreFocus(overlay, [toggle])).toBe(false);
    expect(document.activeElement).toBe(outside);
  });

  it('should see a candidate focused inside a shadow root', () => {
    inside.focus();
    expect(restoreFocus(overlay, [toggle, outside])).toBe(true);
    expect(root.activeElement).toBe(toggle);
    expect(document.activeElement).toBe(host);
  });
});
