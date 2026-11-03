import { Component, inject, PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { cilList } from '@coreui/icons';
import { IconSetService } from '../icon-set';
import { IconComponent } from './icon.component';
import { IconDirective } from './icon.directive';

/**
 * Makes `innerHTML` on svg elements of the test DOM throw on write, one prototype above `SVGSVGElement` like domino.
 * @returns a function that takes the stub and the patch off
 */
const stubServerSvgInnerHtml = (): (() => void) => {
  const element = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
  Object.defineProperty(SVGElement.prototype, 'innerHTML', {
    configurable: true,
    get: element?.get,
    set: () => {
      throw new Error('NotYetImplemented');
    }
  });
  return () => {
    delete (SVGSVGElement.prototype as Partial<Element>).innerHTML;
    delete (SVGElement.prototype as Partial<Element>).innerHTML;
  };
};

@Component({
  template: '<p><svg cIcon name="cilList" title="List"></svg><span>after</span></p>',
  imports: [IconDirective]
})
class DirectiveTestComponent {
  constructor() {
    inject(IconSetService).icons = { cilList };
  }
}

@Component({
  template: '<p><c-icon name="cil-list" /><c-icon use="#icon" class="test" /><span>after</span></p>',
  imports: [IconComponent]
})
class ComponentTestComponent {
  constructor() {
    inject(IconSetService).icons = { cilList };
  }
}

describe('icons with a server DOM', () => {
  const forEach = Object.getOwnPropertyDescriptor(DOMTokenList.prototype, 'forEach');
  let restore: () => void;

  beforeEach(() => {
    restore = stubServerSvgInnerHtml();
    Object.defineProperty(DOMTokenList.prototype, 'forEach', { configurable: true, value: undefined });
  });

  afterEach(() => {
    restore();
    Object.defineProperty(DOMTokenList.prototype, 'forEach', forEach as PropertyDescriptor);
  });

  it('should render svg[cIcon] and what comes after it on the server', () => {
    TestBed.configureTestingModule({ providers: [{ provide: PLATFORM_ID, useValue: 'server' }] });
    const fixture = TestBed.createComponent(DirectiveTestComponent);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('svg title')?.textContent).toBe('List');
    expect(element.querySelectorAll('svg path').length).toBeGreaterThan(0);
    expect(element.querySelector('span')?.textContent).toBe('after');
  });

  it('should render no inline c-icon, leave a use svg in its host and render what comes after on the server', () => {
    TestBed.configureTestingModule({ providers: [{ provide: PLATFORM_ID, useValue: 'server' }] });
    const fixture = TestBed.createComponent(ComponentTestComponent);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const hosts = element.querySelectorAll('c-icon');
    expect(hosts.length).toBe(2);
    expect(hosts[0].querySelector('svg')).toBeNull();
    expect(hosts[1].querySelector('svg')).not.toBeNull();
    expect(element.querySelector('span')?.textContent).toBe('after');
  });

  it('should leave svg[cIcon] in the browser as it is', () => {
    const fixture = TestBed.createComponent(DirectiveTestComponent);
    expect(() => fixture.detectChanges()).toThrowError('NotYetImplemented');
  });
});
