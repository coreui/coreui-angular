/// <reference types="vitest/globals" />
import { clicksOnEnter, clicksOnSpace, isEditableTarget, isReplayedEvent } from './dropdown.utils';

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
    expect(isEditableTarget(element('<div contenteditable="false"><b id="y">y</b></div>').querySelector('#y'))).toBe(
      false
    );
    expect(
      isEditableTarget(
        element('<div contenteditable=""><span contenteditable="false"><b id="z">z</b></span></div>').querySelector(
          '#z'
        )
      )
    ).toBe(false);
    expect(isEditableTarget(element('<div contenteditable="False"><b id="w">w</b></div>').querySelector('#w'))).toBe(
      false
    );
    expect(
      isEditableTarget(
        element(
          '<div contenteditable="false"><span contenteditable="inherit"><b id="u">u</b></span></div>'
        ).querySelector('#u')
      )
    ).toBe(false);
    expect(isEditableTarget(element('<div contenteditable="foo"><b id="t">t</b></div>').querySelector('#t'))).toBe(
      false
    );
    expect(isEditableTarget(element('<div contenteditable="TRUE"><b id="c">c</b></div>').querySelector('#c'))).toBe(
      true
    );
    expect(
      isEditableTarget(element('<div contenteditable="plaintext-only"><b id="p">p</b></div>').querySelector('#p'))
    ).toBe(true);
    expect(
      isEditableTarget(
        element('<div contenteditable=""><span contenteditable="False"><b id="d">d</b></span></div>').querySelector(
          '#d'
        )
      )
    ).toBe(false);
    expect(
      isEditableTarget(
        element(
          '<div contenteditable="true"><span contenteditable="inherit"><b id="s">s</b></span></div>'
        ).querySelector('#s')
      )
    ).toBe(true);
    expect(
      isEditableTarget(
        element('<div contenteditable="false"><span contenteditable=""><b id="v">v</b></span></div>').querySelector(
          '#v'
        )
      )
    ).toBe(true);
    expect(isEditableTarget(element('<input type="checkbox" />'))).toBe(true);
    expect(isEditableTarget(element('<input type="button" />'))).toBe(false);
    expect(isEditableTarget(element('<input type="submit" />'))).toBe(false);
    expect(isEditableTarget(element('<button>b</button>'))).toBe(false);
    expect(isEditableTarget(element('<a href="#">a</a>'))).toBe(false);
    expect(isEditableTarget(null)).toBe(false);
  });

  it('clicksOnEnter should be true only for elements the browser clicks on Enter', () => {
    expect(clicksOnEnter(element('<button>b</button>'))).toBe(true);
    expect(clicksOnEnter(element('<input type="submit" />'))).toBe(true);
    expect(clicksOnEnter(element('<input type="button" />'))).toBe(true);
    expect(clicksOnEnter(element('<a href="#">a</a>'))).toBe(true);
    expect(clicksOnEnter(element('<input type="image" />'))).toBe(true);
    expect(clicksOnEnter(element('<input type="reset" />'))).toBe(true);
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
    expect(clicksOnSpace(element('<input type="button" />'))).toBe(true);
    expect(clicksOnSpace(element('<input type="reset" />'))).toBe(true);
    expect(clicksOnSpace(element('<input type="image" />'))).toBe(true);
    expect(clicksOnSpace(element('<summary>s</summary>'))).toBe(true);
    expect(clicksOnSpace(element('<a href="#">a</a>'))).toBe(false);
    expect(clicksOnSpace(element('<input type="text" />'))).toBe(false);
  });

  it('isReplayedEvent should recognise the replay phase', () => {
    const live = new KeyboardEvent('keydown');
    const replay = new KeyboardEvent('keydown');
    Object.defineProperty(replay, 'eventPhase', { value: 101 });
    expect(isReplayedEvent(live)).toBe(false);
    expect(isReplayedEvent(replay)).toBe(true);
  });
});
