/**
 * Returns focus after an overlay closes: to the first candidate that takes it, without scrolling by default.
 * Does nothing when focus has already moved to an element outside the overlay; skips candidates inside the overlay.
 * Focus is read in the root of the overlay and of each candidate, so an overlay in a shadow root holds its own focus.
 * @param overlay the closing overlay host
 * @param candidates focus targets in order of preference, e.g. the opening toggle, then the element focused at open
 * @param focus moves focus to a candidate, by default `focus({ preventScroll: true })`
 * @returns whether a candidate took focus
 */
export const restoreFocus = (
  overlay: HTMLElement,
  candidates: readonly (HTMLElement | null | undefined)[],
  focus: (target: HTMLElement) => void = (target) => target.focus({ preventScroll: true })
): boolean => {
  const document = overlay.ownerDocument;
  const held = (overlay.getRootNode() as Document | ShadowRoot).activeElement;
  const active = document.activeElement;
  if (!(held && overlay.contains(held)) && active && active !== document.body) {
    return false;
  }
  for (const target of candidates) {
    if (target?.isConnected && !overlay.contains(target)) {
      focus(target);
      if ((target.getRootNode() as Document | ShadowRoot).activeElement === target) {
        return true;
      }
    }
  }
  return false;
};
