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
      ['<div dir="auto">مرحبا<span data-probe></span></div>', true],
      ['<div dir="rtl"><div dir="auto">hello<span data-probe></span></div></div>', false]
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
    document.documentElement.dir = 'rtl';

    expect(service.isRTL(document.createElement('div'))).toBe(true);
  });

  it('should answer for an element that is not in the document yet', () => {
    const detached = document.createElement('div');
    detached.dir = 'rtl';
    detached.innerHTML = '<span></span>';

    expect(service.isRTL(detached.firstElementChild as HTMLElement)).toBe(true);
  });

  it('should resolve dir=auto from the content it has at the time', () => {
    fixtureEl.innerHTML =
      '<div dir="auto">مرحبا<span id="arabic"></span></div><div dir="auto">hello<span id="latin"></span></div>';

    expect(service.isRTL(fixtureEl.querySelector<HTMLElement>('#arabic'))).toBe(true);
    expect(service.isRTL(fixtureEl.querySelector<HTMLElement>('#latin'))).toBe(false);
  });

  it('should follow a direction set from CSS, which is what the layout follows', () => {
    fixtureEl.innerHTML =
      '<div style="direction: rtl"><span id="styled"></span></div>' +
      '<div dir="rtl"><div style="direction: ltr"><span id="unstyled"></span></div></div>';

    expect(service.isRTL(fixtureEl.querySelector<HTMLElement>('#styled'))).toBe(true);
    expect(service.isRTL(fixtureEl.querySelector<HTMLElement>('#unstyled'))).toBe(false);

    const detached = document.createElement('div');
    detached.style.direction = 'rtl';
    detached.innerHTML = '<span></span>';

    expect(service.isRTL(detached.firstElementChild as HTMLElement)).toBe(false);
  });

  it('should read the nearest dir when there is no computed direction', () => {
    vi.spyOn(window, 'getComputedStyle').mockReturnValue({ direction: '' } as CSSStyleDeclaration);
    document.documentElement.dir = 'rtl';
    fixtureEl.innerHTML = '<span id="page"></span><div dir="ltr"><span id="island"></span></div>';

    expect(service.isRTL(fixtureEl.querySelector<HTMLElement>('#page'))).toBe(true);
    expect(service.isRTL(fixtureEl.querySelector<HTMLElement>('#island'))).toBe(false);
  });
});
