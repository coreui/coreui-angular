import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';

/**
 * Returns focus after an overlay closes: to the first candidate that takes it, without scrolling.
 * Does nothing when focus has already moved to an element outside the overlay.
 * @param overlay the closing overlay host
 * @param candidates focus targets in order of preference, e.g. the opening toggle, then the element focused at open
 * @returns whether a candidate took focus
 */
export const restoreFocus = (overlay: HTMLElement, candidates: readonly (HTMLElement | null | undefined)[]): boolean => {
  const active = _getFocusedElementPierceShadowDom();
  if (active && active !== overlay.ownerDocument.body && !overlay.contains(active)) {
    return false;
  }
  for (const target of candidates) {
    if (target?.isConnected) {
      target.focus({ preventScroll: true });
      if (_getFocusedElementPierceShadowDom() === target) {
        return true;
      }
    }
  }
  return false;
};
