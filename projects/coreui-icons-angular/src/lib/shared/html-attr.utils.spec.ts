import { Renderer2, RendererFactory2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import {
  HtmlAttributeNames,
  htmlAttributeNames,
  removeHtmlAttributes,
  setHtmlAttributes,
  splitClasses
} from './html-attr.utils';

describe('splitClasses', () => {
  it('should split on ASCII whitespace only, like the class attribute', () => {
    expect(splitClasses(' first\tsecond\nthird\fsixth\r seventh eighth ')).toEqual([
      'first',
      'second',
      'third',
      'sixth',
      'seventh eighth'
    ]);
  });

  it('should split each entry of a list', () => {
    expect(splitClasses(['first second', '', 'third'])).toEqual(['first', 'second', 'third']);
  });

  it('should skip entries that are not strings', () => {
    expect(splitClasses(['first', false, 1, null, 'second'])).toEqual(['first', 'second']);
  });

  it('should return no classes without a value', () => {
    expect(splitClasses(undefined)).toEqual([]);
    expect(splitClasses(null)).toEqual([]);
    expect(splitClasses('  ')).toEqual([]);
  });
});

describe('setHtmlAttributes', () => {
  let renderer: Renderer2;
  let element: HTMLElement;

  beforeEach(() => {
    renderer = TestBed.inject(RendererFactory2).createRenderer(null, null);
    element = document.createElement('div');
  });

  it('should add each class, split on whitespace', () => {
    setHtmlAttributes(renderer, element, { class: 'first\tsecond\nthird' });
    expect([...element.classList]).toEqual(['first', 'second', 'third']);
  });

  it('should add each class of a list', () => {
    setHtmlAttributes(renderer, element, { class: ['first second', 'third'] });
    expect([...element.classList]).toEqual(['first', 'second', 'third']);
  });

  it('should set each property of a style object', () => {
    setHtmlAttributes(renderer, element, { style: { color: 'red', marginTop: '1px' } });
    expect(element.style.color).toBe('red');
    expect(element.style.marginTop).toBe('1px');
    setHtmlAttributes(renderer, element, { style: null });
    expect(element.style.color).toBe('red');
  });

  it('should set an attribute and remove it on null', () => {
    setHtmlAttributes(renderer, element, { 'data-test': 'x', style: 'color: blue' });
    expect(element.getAttribute('data-test')).toBe('x');
    expect(element.style.color).toBe('blue');
    setHtmlAttributes(renderer, element, { 'data-test': null });
    expect(element.hasAttribute('data-test')).toBe(false);
  });

  it('should skip class list entries that are not strings and go on with the next keys', () => {
    setHtmlAttributes(renderer, element, { class: ['first', false, 1], id: 'x' });
    expect([...element.classList]).toEqual(['first']);
    expect(element.id).toBe('x');
  });

  it('should leave the element as it is for a null class or style', () => {
    setHtmlAttributes(renderer, element, { class: 'first', style: { color: 'red' } });
    setHtmlAttributes(renderer, element, { class: null, style: null });
    expect([...element.classList]).toEqual(['first']);
    expect(element.style.color).toBe('red');
  });

  it('should ignore inherited keys of the map', () => {
    setHtmlAttributes(renderer, element, Object.create({ onmouseover: 'alert(1)' }));
    expect(element.attributes.length).toBe(0);
  });

  it('should skip keys set to undefined', () => {
    setHtmlAttributes(renderer, element, { title: undefined, class: undefined });
    expect(element.attributes.length).toBe(0);
  });

  it('should do nothing without attributes', () => {
    setHtmlAttributes(renderer, element, undefined);
    expect(element.attributes.length).toBe(0);
  });
});

describe('htmlAttributeNames', () => {
  it('should list the attributes, the classes and the style properties of a map', () => {
    expect(
      htmlAttributeNames({
        class: 'first\tsecond',
        style: { marginTop: '1px', '--size': '2px' },
        title: 'A',
        id: undefined
      })
    ).toEqual({ attributes: ['title'], classes: ['first', 'second'], styles: ['marginTop', '--size'] });
  });

  it('should list the declarations of a style string, lowercase except for custom properties', () => {
    expect(htmlAttributeNames({ style: 'Margin-Top: 1px; color:red; --Size: 2px;' }).styles).toEqual([
      'margin-top',
      'color',
      '--Size'
    ]);
  });

  it('should list nothing without a map', () => {
    expect(htmlAttributeNames(undefined)).toEqual({ attributes: [], classes: [], styles: [] });
  });
});

describe('removeHtmlAttributes', () => {
  const none: HtmlAttributeNames = { attributes: [], classes: [], styles: [] };
  let renderer: Renderer2;
  let element: HTMLElement;

  beforeEach(() => {
    renderer = TestBed.inject(RendererFactory2).createRenderer(null, null);
    element = document.createElement('div');
  });

  const kept = (attributes: string[], classes: string | null, style: string | null): HtmlAttributeNames => ({
    ...htmlAttributeNames({ class: classes, style }),
    attributes
  });

  const write = (previous: Record<string, any> | undefined, next: Record<string, any>, staticNames = none) => {
    removeHtmlAttributes(
      renderer,
      element,
      previous && htmlAttributeNames(previous),
      htmlAttributeNames(next),
      staticNames
    );
    setHtmlAttributes(renderer, element, next);
  };

  it('should take off the classes, style properties and attributes the new map leaves out', () => {
    const previous = { class: 'first second', style: { color: 'red', 'margin-top': '1px' }, title: 'A', id: 'x' };
    write(undefined, previous);
    write(previous, { class: 'second', style: { color: 'blue' }, id: 'y', title: undefined });
    expect([...element.classList]).toEqual(['second']);
    expect(element.style.color).toBe('blue');
    expect(element.style.marginTop).toBe('');
    expect(element.hasAttribute('title')).toBe(false);
    expect(element.id).toBe('y');
  });

  it('should leave the static classes, style properties and attributes', () => {
    element.className = 'own';
    element.setAttribute('style', 'margin-top: 2px');
    element.setAttribute('href', '');
    const own = kept(['class', 'style', 'href'], 'own', 'margin-top: 2px');
    const previous = { class: 'own first', style: { marginTop: '1px', color: 'red' }, href: '#x' };
    write(undefined, previous, own);
    write(previous, {}, own);
    expect([...element.classList]).toEqual(['own']);
    expect(element.style.marginTop).toBe('1px');
    expect(element.style.color).toBe('');
    expect(element.getAttribute('href')).toBe('#x');
  });

  it('should take off the properties of a style string the new map leaves out, with a static style', () => {
    element.setAttribute('style', 'padding: 2px');
    const own = kept(['style'], null, 'padding: 2px');
    const previous = { style: 'color: red' };
    write(undefined, previous, own);
    write(previous, {}, own);
    expect(element.style.color).toBe('');
    write(undefined, previous, own);
    write(previous, { style: { cursor: 'pointer' } }, own);
    expect(element.style.color).toBe('');
    expect(element.style.cursor).toBe('pointer');
  });

  it('should set and take off a custom property of a style object', () => {
    const previous = { style: { '--size': '2px' } };
    write(undefined, previous);
    expect(element.style.getPropertyValue('--size')).toBe('2px');
    write(previous, {});
    expect(element.style.getPropertyValue('--size')).toBe('');
  });

  it('should take off a style property set to undefined', () => {
    const previous = { style: { display: 'none' } };
    write(undefined, previous);
    write(previous, { style: { display: undefined } });
    expect(element.style.display).toBe('');
  });

  it('should take off camelCase style keys, custom properties and capitalised names of a style string', () => {
    const previous = { style: { cssFloat: 'left' } };
    write(undefined, previous);
    write(previous, {});
    expect(element.style.cssFloat).toBe('');
    const custom = { style: '--Size: 1px; Color: red' };
    write(undefined, custom);
    write(custom, { style: {} });
    expect(element.getAttribute('style')).toBe('');
  });

  it('should keep a static SVG attribute with a mixed-case name', () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 64 64');
    const previous = { viewBox: '0 0 32 32' };
    setHtmlAttributes(renderer, svg, previous);
    removeHtmlAttributes(renderer, svg, htmlAttributeNames(previous), none, kept(['viewBox'], null, null));
    expect(svg.getAttribute('viewBox')).toBe('0 0 32 32');
  });

  it('should take off an SVG attribute the new map names in another case', () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const previous = { viewBox: '0 0 32 32' };
    setHtmlAttributes(renderer, svg, previous);
    removeHtmlAttributes(
      renderer,
      svg,
      htmlAttributeNames(previous),
      htmlAttributeNames({ viewbox: '0 0 16 16' }),
      none
    );
    expect(svg.hasAttribute('viewBox')).toBe(false);
  });

  it('should match the static attributes regardless of case', () => {
    element.setAttribute('tabindex', '0');
    const previous = { tabIndex: '-1' };
    write(undefined, previous, kept(['tabindex'], null, null));
    write(previous, {}, kept(['tabindex'], null, null));
    expect(element.getAttribute('tabindex')).toBe('-1');
  });

  it('should take off the classes and styles a null class or style replaces', () => {
    const previous = { class: 'first', style: { color: 'red' } };
    write(undefined, previous);
    write(previous, { class: null, style: null });
    expect(element.classList.length).toBe(0);
    expect(element.style.color).toBe('');
  });
});
