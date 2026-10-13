import { DOCUMENT, inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { ShadowOnScrollDirective } from './shadow-on-scroll.directive';

describe('ShadowOnScrollDirective', () => {
  let shadow: WritableSignal<'sm' | 'lg' | 'none' | boolean>;
  let fixture: DirectiveFixture<ShadowOnScrollDirective>;
  let document: Document;

  const scrollTo = async (scrollTop: number) => {
    Object.defineProperty(document.documentElement, 'scrollTop', { configurable: true, value: scrollTop });
    document.dispatchEvent(new Event('scroll'));
    await fixture.whenStable();
  };

  beforeEach(async () => {
    document = TestBed.inject(DOCUMENT);
    shadow = signal<'sm' | 'lg' | 'none' | boolean>(true);
    fixture = TestBed.createDirective(ShadowOnScrollDirective, {
      tagName: 'div',
      bindings: [inputBinding('cShadowOnScroll', shadow)]
    });
    await fixture.whenStable();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    delete (document.documentElement as { scrollTop?: number }).scrollTop;
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should toggle shadow on scroll', async () => {
    expect(fixture.nativeElement.classList.contains('shadow')).toBe(false);
    await scrollTo(10);
    expect(fixture.nativeElement.classList.contains('shadow')).toBe(true);
    await scrollTo(0);
    expect(fixture.nativeElement.classList.contains('shadow')).toBe(false);
  });

  it('should apply shadow size', async () => {
    shadow.set('lg');
    await fixture.whenStable();
    await scrollTo(10);
    expect(fixture.nativeElement.classList.contains('shadow-lg')).toBe(true);
  });

  it('should drop the previous shadow class when the input changes', async () => {
    await scrollTo(10);
    expect(fixture.nativeElement.classList.contains('shadow')).toBe(true);
    shadow.set('lg');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('shadow')).toBe(false);
    await scrollTo(10);
    expect(fixture.nativeElement.classList.contains('shadow')).toBe(false);
    expect(fixture.nativeElement.classList.contains('shadow-lg')).toBe(true);
  });

  it('should keep one scroll listener when the input changes', async () => {
    const add = vi.spyOn(document, 'addEventListener');
    const remove = vi.spyOn(document, 'removeEventListener');
    shadow.set('lg');
    await fixture.whenStable();
    shadow.set('sm');
    await fixture.whenStable();
    expect(add.mock.calls.filter(([type]) => type === 'scroll').length).toBe(2);
    expect(remove.mock.calls.filter(([type]) => type === 'scroll').length).toBe(2);
  });

  it('should remove the shadow and stop listening when disabled', async () => {
    await scrollTo(10);
    shadow.set(false);
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('shadow')).toBe(false);
    await scrollTo(10);
    expect(fixture.nativeElement.classList.contains('shadow')).toBe(false);
  });

  it('should not listen to scroll for none', async () => {
    const add = vi.spyOn(document, 'addEventListener');
    shadow.set('none');
    await fixture.whenStable();
    await scrollTo(10);
    expect(fixture.nativeElement.classList.contains('shadow-none')).toBe(false);
    expect(add.mock.calls.filter(([type]) => type === 'scroll').length).toBe(0);
  });

  it('should apply the shadow when the document is already scrolled', async () => {
    await scrollTo(10);
    shadow.set('lg');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('shadow-lg')).toBe(true);
  });

  it('should apply the shadow on mount when the document is already scrolled', async () => {
    Object.defineProperty(document.documentElement, 'scrollTop', { configurable: true, value: 10 });
    const scrolledFixture = TestBed.createDirective(ShadowOnScrollDirective, { tagName: 'div' });
    await scrolledFixture.whenStable();
    expect(scrolledFixture.nativeElement.classList.contains('shadow')).toBe(true);
  });

  it('should remove the shadow and stop listening when destroyed', async () => {
    await scrollTo(10);
    expect(fixture.nativeElement.classList.contains('shadow')).toBe(true);
    const remove = vi.spyOn(document, 'removeEventListener');
    const element = fixture.nativeElement;
    fixture.destroy();
    expect(element.classList.contains('shadow')).toBe(false);
    expect(remove.mock.calls.filter(([type]) => type === 'scroll').length).toBe(1);
  });
});
