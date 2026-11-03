import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { patchSvgInnerHtml } from './svg-inner-html';

const svgNamespace = 'http://www.w3.org/2000/svg';

/**
 * Makes `innerHTML` on svg elements of the test DOM throw on write, one prototype above `SVGSVGElement` like domino.
 * @returns a function that takes the stub and the patch off
 */
const stubServerSvgInnerHtml = (): (() => void) => {
  const element = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
  Object.defineProperty(SVGElement.prototype, 'innerHTML', {
    configurable: true,
    get: element?.get,
    set: () => {
      throw new Error('NotYetImplemented');
    }
  });
  return () => {
    delete (SVGSVGElement.prototype as Partial<Element>).innerHTML;
    delete (SVGElement.prototype as Partial<Element>).innerHTML;
  };
};

describe('patchSvgInnerHtml', () => {
  let restore: () => void;

  beforeEach(() => {
    restore = stubServerSvgInnerHtml();
  });

  afterEach(() => {
    restore();
  });

  it('should parse the markup into svg children when the DOM throws on innerHTML', () => {
    patchSvgInnerHtml(document);
    const svg = document.createElementNS(svgNamespace, 'svg');
    svg.appendChild(document.createElementNS(svgNamespace, 'circle'));
    svg.innerHTML = '<title>List &amp; more</title><path d="M0 0"></path>';

    expect(Array.from(svg.childNodes, (node) => node.nodeName)).toEqual(['title', 'path']);
    expect((svg.firstChild as Element).namespaceURI).toBe(svgNamespace);
    expect(svg.firstChild?.ownerDocument).toBe(document);
    expect(svg.firstChild?.textContent).toBe('List & more');
    expect(svg.innerHTML).toBe('<title>List &amp; more</title><path d="M0 0"></path>');
    svg.innerHTML = '';
    expect(svg.childNodes.length).toBe(0);
  });

  it('should drop the scripts of the markup', () => {
    patchSvgInnerHtml(document);
    const svg = document.createElementNS(svgNamespace, 'svg');
    svg.innerHTML = '<path d="M0 0"></path><script>alert(1)</script><g><script>alert(2)</script></g>';

    expect(svg.innerHTML).toBe('<path d="M0 0"></path><g></g>');
  });

  it('should leave a DOM whose svg innerHTML works as it is', () => {
    restore();
    patchSvgInnerHtml(document);

    expect(Object.getOwnPropertyDescriptor(SVGSVGElement.prototype, 'innerHTML')).toBeUndefined();
    restore = stubServerSvgInnerHtml();
  });
});
