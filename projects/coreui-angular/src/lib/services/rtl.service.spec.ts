import { TestBed } from '@angular/core/testing';

import { RtlService } from './rtl.service';

describe('RtlService', () => {
  let service: RtlService;
  let fixtureEl: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RtlService);
    fixtureEl = document.createElement('div');
    document.body.append(fixtureEl);
  });

  afterEach(() => {
    fixtureEl.remove();
    document.documentElement.removeAttribute('dir');
    document.body.removeAttribute('dir');
    vi.restoreAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should read the direction of the element, not of the document', () => {
    fixtureEl.innerHTML = '<div dir="rtl"><span id="inside"></span></div><span id="outside"></span>';

    expect(service.isRTL(fixtureEl.querySelector<HTMLElement>('#inside'))).toBe(true);
    expect(service.isRTL(fixtureEl.querySelector<HTMLElement>('#outside'))).toBe(false);
  });

  it('should leave an element that sets its own direction out of an RTL subtree', () => {
    document.documentElement.dir = 'rtl';
    fixtureEl.innerHTML = '<div dir="ltr"><span id="island"></span></div>';

    expect(service.isRTL(fixtureEl.querySelector<HTMLElement>('#island'))).toBe(false);
  });

  it('should fall back to the document when given nothing', () => {
    document.documentElement.dir = 'rtl';
    expect(service.isRTL()).toBe(true);

    document.documentElement.dir = '';
    expect(service.isRTL()).toBe(false);
  });

  it('should answer the same for a detached element as for a connected one', () => {
    const cases: [string, boolean][] = [
      ['<div dir="rtl"><span data-probe></span></div>', true],
      ['<div dir="rtl"><div dir="ltr"><span data-probe></span></div></div>', false]
    ];

    for (const [markup, expected] of cases) {
      const detached = document.createElement('div');
      detached.innerHTML = markup;

      expect(service.isRTL(detached.querySelector<HTMLElement>('[data-probe]'))).toBe(expected);

      fixtureEl.append(detached);

      expect(service.isRTL(detached.querySelector<HTMLElement>('[data-probe]'))).toBe(expected);
    }
  });

  it('should answer for the document when a detached element declares nothing', () => {
    const detached = document.createElement('div');
    detached.style.direction = 'rtl';
    detached.innerHTML = '<span></span>';

    expect(service.isRTL(detached.firstElementChild as HTMLElement)).toBe(false);

    document.documentElement.dir = 'rtl';

    expect(service.isRTL(document.createElement('div'))).toBe(true);
  });

  it('should answer for an element that is not in the document yet', () => {
    const detached = document.createElement('div');
    detached.dir = 'rtl';
    detached.innerHTML = '<span></span>';

    expect(service.isRTL(detached.firstElementChild as HTMLElement)).toBe(true);
  });

  it('should answer a detached element in a browser without :dir()', () => {
    const matches = Element.prototype.matches;
    vi.spyOn(Element.prototype, 'matches').mockImplementation(function (this: Element, selectors: string) {
      if (selectors.includes(':dir(')) {
        throw new SyntaxError(`'${selectors}' is not a valid selector`);
      }
      return matches.call(this, selectors);
    });
    const detached = document.createElement('div');
    detached.innerHTML = '<div dir="rtl"><div dir="auto">hello<span id="probe"></span></div></div>';

    expect(service.isRTL(detached.querySelector<HTMLElement>('#probe'))).toBe(true);
  });

  it('should resolve dir=auto from the content it has at the time', () => {
    fixtureEl.innerHTML = '<div dir="auto">مرحبا<span id="probe"></span></div>';
    const probe = fixtureEl.querySelector<HTMLElement>('#probe');

    expect(service.isRTL(probe)).toBe(true);

    probe?.parentElement?.firstChild?.replaceWith('hello');

    expect(service.isRTL(probe)).toBe(false);
  });

  it('should follow a direction set from CSS, which is what the layout follows', () => {
    fixtureEl.innerHTML =
      '<div style="direction: rtl"><span id="rtl-by-css"></span></div>' +
      '<div dir="rtl"><div style="direction: ltr"><span id="ltr-by-css"></span></div></div>';

    expect(service.isRTL(fixtureEl.querySelector<HTMLElement>('#rtl-by-css'))).toBe(true);
    expect(service.isRTL(fixtureEl.querySelector<HTMLElement>('#ltr-by-css'))).toBe(false);
  });

  it('should answer for a field the stylesheet keeps left-to-right, not for its container', () => {
    document.documentElement.dir = 'rtl';
    fixtureEl.innerHTML =
      '<style>*[dir="rtl"] [type="email"] { direction: ltr; }</style><div><input id="field" type="email" /></div>';
    const field = fixtureEl.querySelector<HTMLElement>('#field');

    expect(service.isRTL(field)).toBe(false);
    expect(service.isRTL(field?.parentElement)).toBe(true);
  });

  it('should read the nearest dir when there is no computed direction', () => {
    vi.spyOn(window, 'getComputedStyle').mockReturnValue({ direction: '' } as CSSStyleDeclaration);
    document.documentElement.dir = 'rtl';
    fixtureEl.innerHTML =
      '<span id="page"></span><div dir="ltr"><span id="island"></span></div>' +
      '<div dir="auto">hello<span id="auto"></span></div>';

    expect(service.isRTL(fixtureEl.querySelector<HTMLElement>('#page'))).toBe(true);
    expect(service.isRTL(fixtureEl.querySelector<HTMLElement>('#island'))).toBe(false);
    expect(service.isRTL(fixtureEl.querySelector<HTMLElement>('#auto'))).toBe(true);
  });
});
