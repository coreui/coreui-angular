import { booleanAttribute, numberAttribute } from '@angular/core';

const TEXT_EXCLUDED = '.chip-check, .chip-remove, svg, [aria-hidden="true"]';

/**
 * Coerces an attribute value to a boolean, keeping `undefined` so a chip can inherit the value from its set.
 * @param value - The bound or static attribute value
 * @returns `undefined` when nothing was bound, otherwise the `booleanAttribute` result
 */
export const optionalBooleanAttribute = (value: unknown): boolean | undefined =>
  value === undefined ? undefined : booleanAttribute(value);

/**
 * Coerces an attribute value to a number, keeping `undefined` and `null` as `undefined`.
 * @param value - The bound or static attribute value
 * @returns `undefined` when nothing was bound, otherwise the `numberAttribute` result
 */
export const optionalNumberAttribute = (value: unknown): number | undefined =>
  value === undefined || value === null ? undefined : numberAttribute(value);

/**
 * Reads the visible text of a chip: its text content without the check and remove indicators,
 * icons (`svg`) and anything hidden from assistive technology.
 * @param element - The chip host element
 * @returns The trimmed text with collapsed whitespace, an empty string for an icon-only chip
 */
export const getChipText = (element: HTMLElement): string => {
  const clone = element.cloneNode(true) as HTMLElement;
  clone.querySelectorAll(TEXT_EXCLUDED).forEach((node) => node.remove());
  return (clone.textContent ?? '').replace(/\s+/g, ' ').trim();
};
