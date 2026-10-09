import { getChipText, optionalBooleanAttribute, optionalNumberAttribute } from './chip.utils';

describe('chip utils', () => {
  it('optionalBooleanAttribute keeps undefined and coerces the rest', () => {
    expect(optionalBooleanAttribute(undefined)).toBeUndefined();
    expect(optionalBooleanAttribute('')).toBe(true);
    expect(optionalBooleanAttribute('false')).toBe(false);
    expect(optionalBooleanAttribute(true)).toBe(true);
  });

  it('optionalNumberAttribute keeps undefined and null as undefined', () => {
    expect(optionalNumberAttribute(undefined)).toBeUndefined();
    expect(optionalNumberAttribute(null)).toBeUndefined();
    expect(optionalNumberAttribute('2')).toBe(2);
    expect(optionalNumberAttribute(-1)).toBe(-1);
  });

  it('getChipText drops indicators, icons and hidden content', () => {
    const element = document.createElement('span');
    element.innerHTML = `
      <span class="chip-check">✓</span>
      <svg><title>Star</title></svg>
      <span aria-hidden="true">close</span>
      Angular   framework
      <button class="chip-remove">x</button>`;
    expect(getChipText(element)).toBe('Angular framework');
    expect(element.querySelector('svg')).not.toBeNull();
  });

  it('getChipText returns an empty string for an icon-only chip', () => {
    const element = document.createElement('span');
    element.innerHTML = '<svg><title>Star</title></svg>';
    expect(getChipText(element)).toBe('');
  });
});
