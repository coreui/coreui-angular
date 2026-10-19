/**
 * Maps a whitespace-separated class string to a `[class]` binding object, one key per class.
 * @param classes the classes, e.g. `item.class` of a nav item
 * @returns a key set to `true` for each class, empty without classes
 */
export const classMap = (classes?: string): Record<string, boolean> =>
  Object.fromEntries(
    (classes ?? '')
      .split(/[\t\n\f\r ]+/)
      .filter(Boolean)
      .map((name) => [name, true])
  );
