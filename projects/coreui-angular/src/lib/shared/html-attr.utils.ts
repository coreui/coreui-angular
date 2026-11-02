import { Renderer2 } from '@angular/core';

/**
 * Splits class names on ASCII whitespace, the separators of the `class` attribute.
 * @param classes a whitespace-separated string of class names, or a list of such strings; values that are not
 * strings are skipped
 * @returns the class names, without empty entries
 */
export const splitClasses = (classes: unknown): string[] =>
  (Array.isArray(classes) ? classes : [classes])
    .flatMap((value) => (typeof value === 'string' ? value.split(/[\t\n\f\r ]+/) : []))
    .filter(Boolean);

/**
 * Writes the own keys of a map of HTML attributes to an element: `class` adds each class, a `style` object sets
 * each property, any other value sets the attribute. `null` removes the attribute, except for `class` and `style`,
 * where it changes nothing; a `style` string is set as the attribute.
 * @param renderer the renderer that writes to the element
 * @param element the element to write to
 * @param attributes attribute names mapped to their values
 */
export const setHtmlAttributes = (renderer: Renderer2, element: Element, attributes?: Record<string, any>): void => {
  for (const [name, value] of Object.entries(attributes ?? {})) {
    if (name === 'class') {
      splitClasses(value).forEach((className) => renderer.addClass(element, className));
    } else if (name === 'style' && typeof value === 'object') {
      for (const [property, propertyValue] of Object.entries(value ?? {})) {
        if (property) {
          renderer.setStyle(element, property, propertyValue);
        }
      }
    } else if (value === null) {
      renderer.removeAttribute(element, name);
    } else {
      renderer.setAttribute(element, name, value);
    }
  }
};
