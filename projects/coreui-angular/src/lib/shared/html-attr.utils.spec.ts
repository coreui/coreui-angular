import { Renderer2, RendererFactory2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { setHtmlAttributes, splitClasses } from './html-attr.utils';

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

  it('should do nothing without attributes', () => {
    setHtmlAttributes(renderer, element, undefined);
    expect(element.attributes.length).toBe(0);
  });
});
