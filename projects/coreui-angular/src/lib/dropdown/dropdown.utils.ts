const EDITABLE_SELECTOR = 'input, select, textarea, [contenteditable]';

/**
 * Whether the event target types or selects natively, so dropdown key handling must leave it alone.
 */
export const isEditableTarget = (target: EventTarget | null): boolean =>
  target instanceof Element && target.closest(EDITABLE_SELECTOR) !== null;

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
