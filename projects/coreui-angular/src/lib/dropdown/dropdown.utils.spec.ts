/// <reference types="vitest/globals" />
import { clicksOnEnter, clicksOnSpace, isEditableTarget } from './dropdown.utils';

const element = (html: string): Element => {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstElementChild as Element;
};

describe('dropdown.utils', () => {
  it('isEditableTarget should match form controls and editable hosts, also from a descendant', () => {
    expect(isEditableTarget(element('<input />'))).toBe(true);
    expect(isEditableTarget(element('<textarea></textarea>'))).toBe(true);
    expect(isEditableTarget(element('<select></select>'))).toBe(true);
    expect(isEditableTarget(element('<div contenteditable=""><b id="x">x</b></div>').querySelector('#x'))).toBe(true);
    expect(isEditableTarget(element('<button>b</button>'))).toBe(false);
    expect(isEditableTarget(element('<a href="#">a</a>'))).toBe(false);
    expect(isEditableTarget(null)).toBe(false);
  });

  it('clicksOnEnter should be true only for elements the browser clicks on Enter', () => {
    expect(clicksOnEnter(element('<button>b</button>'))).toBe(true);
    expect(clicksOnEnter(element('<input type="submit" />'))).toBe(true);
    expect(clicksOnEnter(element('<input type="button" />'))).toBe(true);
    expect(clicksOnEnter(element('<a href="#">a</a>'))).toBe(true);
    expect(clicksOnEnter(element('<summary>s</summary>'))).toBe(true);
    expect(clicksOnEnter(element('<a>a</a>'))).toBe(false);
    expect(clicksOnEnter(element('<input type="checkbox" />'))).toBe(false);
    expect(clicksOnEnter(element('<div tabindex="0">d</div>'))).toBe(false);
  });

  it('clicksOnSpace should be true only for elements the browser clicks on Space', () => {
    expect(clicksOnSpace(element('<button>b</button>'))).toBe(true);
    expect(clicksOnSpace(element('<input type="checkbox" />'))).toBe(true);
    expect(clicksOnSpace(element('<input type="radio" />'))).toBe(true);
    expect(clicksOnSpace(element('<input type="submit" />'))).toBe(true);
    expect(clicksOnSpace(element('<summary>s</summary>'))).toBe(true);
    expect(clicksOnSpace(element('<a href="#">a</a>'))).toBe(false);
    expect(clicksOnSpace(element('<input type="text" />'))).toBe(false);
  });
});
