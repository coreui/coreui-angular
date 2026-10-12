import { DOCUMENT, inputBinding, signal, WritableSignal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { ShadowOnScrollDirective } from './shadow-on-scroll.directive';

describe('ShadowOnScrollDirective', () => {
  let shadow: WritableSignal<'sm' | 'lg' | 'none' | boolean>;
  let fixture: DirectiveFixture<ShadowOnScrollDirective>;
  let document: Document;

  const scrollTo = (scrollTop: number) => {
    Object.defineProperty(document.documentElement, 'scrollTop', { configurable: true, value: scrollTop });
    document.dispatchEvent(new Event('scroll'));
    fixture.detectChanges();
  };

  beforeEach(() => {
    document = TestBed.inject(DOCUMENT);
    shadow = signal<'sm' | 'lg' | 'none' | boolean>(true);
    fixture = TestBed.createDirective(ShadowOnScrollDirective, {
      tagName: 'div',
      bindings: [inputBinding('cShadowOnScroll', shadow)]
    });
    fixture.detectChanges();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    delete (document.documentElement as { scrollTop?: number }).scrollTop;
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should toggle shadow on scroll', () => {
    expect(fixture.nativeElement.classList.contains('shadow')).toBe(false);
    scrollTo(10);
    expect(fixture.nativeElement.classList.contains('shadow')).toBe(true);
    scrollTo(0);
    expect(fixture.nativeElement.classList.contains('shadow')).toBe(false);
  });

  it('should apply shadow size', () => {
    shadow.set('lg');
    fixture.detectChanges();
    scrollTo(10);
    expect(fixture.nativeElement.classList.contains('shadow-lg')).toBe(true);
  });

  it('should drop the previous shadow class when the input changes', () => {
    scrollTo(10);
    expect(fixture.nativeElement.classList.contains('shadow')).toBe(true);
    shadow.set('lg');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('shadow')).toBe(false);
    scrollTo(10);
    expect(fixture.nativeElement.classList.contains('shadow')).toBe(false);
    expect(fixture.nativeElement.classList.contains('shadow-lg')).toBe(true);
  });

  it('should keep one scroll listener when the input changes', () => {
    const add = vi.spyOn(document, 'addEventListener');
    const remove = vi.spyOn(document, 'removeEventListener');
    shadow.set('lg');
    fixture.detectChanges();
    shadow.set('sm');
    fixture.detectChanges();
    expect(add.mock.calls.filter(([type]) => type === 'scroll').length).toBe(2);
    expect(remove.mock.calls.filter(([type]) => type === 'scroll').length).toBe(2);
  });

  it('should remove the shadow and stop listening when disabled', () => {
    scrollTo(10);
    shadow.set(false);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('shadow')).toBe(false);
    scrollTo(10);
    expect(fixture.nativeElement.classList.contains('shadow')).toBe(false);
  });

  it('should not listen to scroll for none', () => {
    const add = vi.spyOn(document, 'addEventListener');
    shadow.set('none');
    fixture.detectChanges();
    scrollTo(10);
    expect(fixture.nativeElement.classList.contains('shadow-none')).toBe(false);
    expect(add.mock.calls.filter(([type]) => type === 'scroll').length).toBe(0);
  });

  it('should apply the shadow when the document is already scrolled', () => {
    scrollTo(10);
    shadow.set('lg');
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('shadow-lg')).toBe(true);
  });

  it('should apply the shadow on mount when the document is already scrolled', () => {
    Object.defineProperty(document.documentElement, 'scrollTop', { configurable: true, value: 10 });
    const scrolledFixture = TestBed.createDirective(ShadowOnScrollDirective, { tagName: 'div' });
    scrolledFixture.detectChanges();
    expect(scrolledFixture.nativeElement.classList.contains('shadow')).toBe(true);
  });

  it('should remove the shadow and stop listening when destroyed', () => {
    scrollTo(10);
    expect(fixture.nativeElement.classList.contains('shadow')).toBe(true);
    const remove = vi.spyOn(document, 'removeEventListener');
    const element = fixture.nativeElement;
    fixture.destroy();
    expect(element.classList.contains('shadow')).toBe(false);
    expect(remove.mock.calls.filter(([type]) => type === 'scroll').length).toBe(1);
  });
});
