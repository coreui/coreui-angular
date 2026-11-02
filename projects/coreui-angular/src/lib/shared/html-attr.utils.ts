import { Renderer2, RendererStyleFlags2 } from '@angular/core';

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
 * Lists the own keys of a map with their values, without the keys set to `undefined`.
 * @param map names mapped to values
 * @returns the name and value pairs
 */
const ownEntries = (map: unknown): [string, unknown][] =>
  Object.entries(map && typeof map === 'object' ? map : {}).filter(([, value]) => value !== undefined);

/**
 * Turns a style property name into its dash-case form, the form of the `style` attribute.
 * @param property a style property name in camelCase or dash-case
 * @returns the dash-case name
 */
const dashCase = (property: string): string =>
  property.startsWith('--') ? property : property.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

/**
 * Picks the renderer flags for a style property: dash-case for a name with a dash.
 * @param property a style property name in camelCase or dash-case
 * @returns the renderer flags
 */
const styleFlags = (property: string): RendererStyleFlags2 | undefined =>
  property.includes('-') ? RendererStyleFlags2.DashCase : undefined;

/**
 * Lists the property names of a `style` value: the keys of a style object or the declarations of a style string.
 * @param style a style object or a style string
 * @returns the property names, those of a style string in lowercase except for custom properties
 */
const styleProperties = (style: unknown): string[] =>
  typeof style === 'string'
    ? style
        .split(';')
        .map((declaration) => declaration.split(':')[0].trim())
        .map((property) => (property.startsWith('--') ? property : property.toLowerCase()))
        .filter(Boolean)
    : ownEntries(style).map(([property]) => property);

/**
 * The names a map of HTML attributes writes to an element.
 */
export interface HtmlAttributeNames {
  attributes: string[];
  classes: string[];
  styles: string[];
}

/**
 * Lists the names a map of HTML attributes writes: its attributes other than `class` and `style`, its classes and
 * its style properties.
 * @param attributes attribute names mapped to their values
 * @returns the names
 */
export const htmlAttributeNames = (attributes?: Record<string, unknown>): HtmlAttributeNames => {
  const map = Object.fromEntries(ownEntries(attributes));
  return {
    attributes: Object.keys(map).filter((name) => name !== 'class' && name !== 'style'),
    classes: splitClasses(map['class']),
    styles: styleProperties(map['style'])
  };
};

/**
 * Takes off an element the classes, style properties and attributes the previous map of HTML attributes wrote and
 * neither the next map nor the element's static names have.
 * @param renderer the renderer that writes to the element
 * @param element the element to write to
 * @param previous the names the previous map wrote
 * @param next the names the next map writes
 * @param kept the static names of the element
 */
export const removeHtmlAttributes = (
  renderer: Renderer2,
  element: Element,
  previous: HtmlAttributeNames | undefined,
  next: HtmlAttributeNames,
  kept: HtmlAttributeNames
): void => {
  const classes = new Set([...next.classes, ...kept.classes]);
  const styles = new Set([...next.styles, ...kept.styles].map(dashCase));
  const attributes = new Set(next.attributes);
  const keptAttributes = new Set(kept.attributes.map((name) => name.toLowerCase()));
  previous?.classes
    .filter((className) => !classes.has(className))
    .forEach((className) => renderer.removeClass(element, className));
  previous?.styles
    .filter((property) => !styles.has(dashCase(property)))
    .forEach((property) => renderer.removeStyle(element, property, styleFlags(property)));
  previous?.attributes
    .filter((name) => !attributes.has(name) && !keptAttributes.has(name.toLowerCase()))
    .forEach((name) => renderer.removeAttribute(element, name));
};

/**
 * Writes the own keys of a map of HTML attributes to an element: `class` adds each class, a `style` object sets
 * each property, any other value sets the attribute. `null` removes the attribute, except for `class` and `style`,
 * where it changes nothing; a `style` string is set as the attribute. `undefined` counts as a missing key.
 * @param renderer the renderer that writes to the element
 * @param element the element to write to
 * @param attributes attribute names mapped to their values
 */
export const setHtmlAttributes = (renderer: Renderer2, element: Element, attributes?: Record<string, any>): void => {
  for (const [name, value] of ownEntries(attributes)) {
    if (name === 'class') {
      splitClasses(value).forEach((className) => renderer.addClass(element, className));
    } else if (name === 'style' && typeof value === 'object') {
      for (const [property, propertyValue] of ownEntries(value)) {
        if (property) {
          renderer.setStyle(element, property, propertyValue, styleFlags(property));
        }
      }
    } else if (value === null) {
      renderer.removeAttribute(element, name);
    } else {
      renderer.setAttribute(element, name, value as string);
    }
  }
};
