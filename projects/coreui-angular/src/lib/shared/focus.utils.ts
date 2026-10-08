/**
 * Returns focus after an overlay closes: to the first candidate that takes it, without scrolling.
 * Does nothing when focus has already moved to an element outside the overlay; skips candidates inside the overlay.
 * @param overlay the closing overlay host
 * @param candidates focus targets in order of preference, e.g. the opening toggle, then the element focused at open
 * @returns whether a candidate took focus
 */
export const restoreFocus = (overlay: HTMLElement, candidates: readonly (HTMLElement | null | undefined)[]): boolean => {
  const document = overlay.ownerDocument;
  const active = document.activeElement;
  if (active && active !== document.body && !overlay.contains(active)) {
    return false;
  }
  for (const target of candidates) {
    if (target?.isConnected && !overlay.contains(target)) {
      target.focus({ preventScroll: true });
      if (document.activeElement === target) {
        return true;
      }
    }
  }
  return false;
};
