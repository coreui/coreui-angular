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
  const editable = target.closest('[contenteditable]');
  return editable !== null && editable.getAttribute('contenteditable')?.toLowerCase() !== 'false';
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
