import { inputBinding } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { HtmlAttributesDirective } from './html-attr.directive';

describe('HtmlAttributesDirective', () => {
  let fixture: DirectiveFixture<HtmlAttributesDirective>;
  let element: HTMLElement;

  beforeEach(() => {
    fixture = TestBed.createDirective(HtmlAttributesDirective, {
      tagName: 'div',
      bindings: [inputBinding('cHtmlAttr', () => ({ class: 'test', style: { backgroundColor: 'red' }, id: 'id-1' }))]
    });
    element = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should render a class attr', () => {
    expect(element.classList.contains('test')).toBe(true);
  });

  it('should render a style attr', () => {
    expect(element.style.backgroundColor).toBe('red');
  });

  it('should render an id attr', () => {
    expect(element.getAttribute('id')).toBe('id-1');
  });
});
