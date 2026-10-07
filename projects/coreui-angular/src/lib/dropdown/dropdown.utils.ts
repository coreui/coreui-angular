const FORM_CONTROL_SELECTOR =
  'input:not([type="button"]):not([type="image"]):not([type="reset"]):not([type="submit"]), select, textarea';

/**
 * Whether the event target types or selects natively, so dropdown key handling must leave it alone.
 */
export const isEditableTarget = (target: EventTarget | null): boolean => {
  if (!(target instanceof Element)) {
    return false;
  }
  if (target.closest(FORM_CONTROL_SELECTOR)) {
    return true;
  }
  for (
    let host = target.closest('[contenteditable]');
    host;
    host = host.parentElement?.closest('[contenteditable]') ?? null
  ) {
    const value = host.getAttribute('contenteditable')?.toLowerCase();
    if (value === '' || value === 'true' || value === 'plaintext-only') {
      return true;
    }
    if (value === 'false') {
      return false;
    }
  }
  return false;
};

/**
 * Whether the element dispatches a native click on Enter.
 */
export const clicksOnEnter = (element: Element): boolean =>
  element instanceof HTMLButtonElement ||
  (element instanceof HTMLInputElement && /^(button|image|reset|submit)$/.test(element.type)) ||
  (element instanceof HTMLAnchorElement && element.hasAttribute('href')) ||
  element.tagName === 'SUMMARY';

/**
 * Whether the element dispatches a native click on Space.
 */
export const clicksOnSpace = (element: Element): boolean =>
  element instanceof HTMLButtonElement ||
  (element instanceof HTMLInputElement && /^(button|checkbox|image|radio|reset|submit)$/.test(element.type)) ||
  element.tagName === 'SUMMARY';
