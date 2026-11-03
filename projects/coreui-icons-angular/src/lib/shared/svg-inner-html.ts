/**
 * Tells whether a call throws.
 * @param call the call to make
 * @returns `true` when the call threw
 */
const throws = (call: () => void): boolean => {
  try {
    call();
    return false;
  } catch {
    return true;
  }
};

/**
 * Gives `<svg>` elements an `innerHTML` setter when setting it throws, as in the server DOM of
 * `@angular/platform-server` (domino throws `NotYetImplemented`): the markup is parsed in a `template` element, its
 * `script` elements are dropped, as the browser does not run scripts set through `innerHTML`, and its nodes replace the
 * svg's children. The setter goes on the prototype of the svg element, so it serves every document that shares that
 * prototype. HTML elements outside `foreignObject` stay inside the svg, while the browser moves them out when it parses
 * the page.
 * @param document the document to create the probe svg in
 */
export const patchSvgInnerHtml = (document: Document): void => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  if (!throws(() => (svg.innerHTML = ''))) {
    return;
  }
  let owner: object | null = svg;
  while (owner && !Object.getOwnPropertyDescriptor(owner, 'innerHTML')) {
    owner = Object.getPrototypeOf(owner);
  }
  const getter = owner ? Object.getOwnPropertyDescriptor(owner, 'innerHTML')?.get : undefined;
  Object.defineProperty(Object.getPrototypeOf(svg), 'innerHTML', {
    configurable: true,
    get(this: Element) {
      return getter?.call(this);
    },
    set(this: Element, markup: string) {
      const template = this.ownerDocument.createElement('template');
      template.innerHTML = `<svg>${markup}</svg>`;
      for (const script of Array.from(template.content.querySelectorAll('script'))) {
        script.remove();
      }
      while (this.firstChild) {
        this.removeChild(this.firstChild);
      }
      for (const node of Array.from(template.content.firstChild?.childNodes ?? [])) {
        this.appendChild(node);
      }
    }
  });
};
