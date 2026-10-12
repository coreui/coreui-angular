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
});
