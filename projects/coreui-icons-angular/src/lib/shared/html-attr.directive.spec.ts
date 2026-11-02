import { Component, inputBinding, signal } from '@angular/core';
import { DirectiveFixture, TestBed } from '@angular/core/testing';
import { HtmlAttributesDirective } from './html-attr.directive';

describe('HtmlAttributesDirective', () => {
  let fixture: DirectiveFixture<HtmlAttributesDirective>;
  let element: HTMLElement;

  beforeEach(async () => {
    fixture = TestBed.createDirective(HtmlAttributesDirective, {
      tagName: 'div',
      bindings: [inputBinding('cHtmlAttr', () => ({ class: 'test', style: { backgroundColor: 'red' }, id: 'id-1' }))]
    });
    element = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
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

  it('should render each class of a class attr split by tabs and new lines', async () => {
    const multiline = TestBed.createDirective(HtmlAttributesDirective, {
      tagName: 'div',
      bindings: [inputBinding('cHtmlAttr', () => ({ class: 'first\tsecond\nthird' }))]
    });
    await multiline.whenStable();
    expect([...(multiline.nativeElement as HTMLElement).classList]).toEqual(['first', 'second', 'third']);
  });

  it('should take off what the map before set and the new one leaves out', async () => {
    const attributes = signal<Record<string, any> | undefined>({
      class: 'first second',
      style: { color: 'red', marginTop: '1px' },
      title: 'A'
    });
    const changing = TestBed.createDirective(HtmlAttributesDirective, {
      tagName: 'div',
      bindings: [inputBinding('cHtmlAttr', attributes)]
    });
    const host = changing.nativeElement as HTMLElement;
    await changing.whenStable();
    attributes.set({ class: 'second', style: { color: 'blue' } });
    await changing.whenStable();
    expect([...host.classList]).toEqual(['second']);
    expect(host.style.color).toBe('blue');
    expect(host.style.marginTop).toBe('');
    expect(host.hasAttribute('title')).toBe(false);
    attributes.set(undefined);
    await changing.whenStable();
    expect(host.classList.length).toBe(0);
    expect(host.style.color).toBe('');
  });

  it('should compare with the map as it was set, not as it was changed in place later', async () => {
    const style: Record<string, string> = { color: 'red', marginTop: '1px' };
    const attributes = signal<Record<string, any>>({ style });
    const changing = TestBed.createDirective(HtmlAttributesDirective, {
      tagName: 'div',
      bindings: [inputBinding('cHtmlAttr', attributes)]
    });
    await changing.whenStable();
    delete style['marginTop'];
    attributes.set({ style });
    await changing.whenStable();
    expect((changing.nativeElement as HTMLElement).style.marginTop).toBe('');
  });

  it('should not take off the static classes, styles and attributes and should win over the template bindings', async () => {
    @Component({
      imports: [HtmlAttributesDirective],
      template: `<a
        class="nav-link"
        href=""
        style="padding: 2px"
        [style]="{ cursor: 'pointer' }"
        [cHtmlAttr]="attributes()"
      ></a>`
    })
    class TestHost {
      readonly attributes = signal<Record<string, any>>({
        class: 'nav-link extra',
        style: { cursor: 'default', padding: '1px' },
        href: '#x'
      });
    }
    const hostFixture = TestBed.createComponent(TestHost);
    await hostFixture.whenStable();
    const anchor = (hostFixture.nativeElement as HTMLElement).querySelector('a') as HTMLAnchorElement;
    expect(anchor.style.cursor).toBe('default');
    hostFixture.componentInstance.attributes.set({});
    await hostFixture.whenStable();
    expect([...anchor.classList]).toEqual(['nav-link']);
    expect(anchor.style.padding).toBe('1px');
    expect(anchor.getAttribute('href')).toBe('#x');
  });
});
