import { Component, DebugElement, DOCUMENT, ElementRef, Renderer2, signal, viewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DropdownAlignment } from '../../coreui.types';
import { DropdownService } from '../dropdown.service';
import { DropdownMenuDirective } from './dropdown-menu.directive';
import { DropdownComponent, DropdownToggleDirective } from '../dropdown/dropdown.component';
import { DropdownItemDirective } from '../dropdown-item/dropdown-item.directive';
import { ButtonDirective } from '../../button';

class MockElementRef extends ElementRef {}

@Component({
  template: `
    <c-dropdown #dropdown="cDropdown" [popper]="popper()" [(visible)]="visible">
      <button cButton cDropdownToggle color="secondary">Dropdown button</button>
      <ul cDropdownMenu [alignment]="alignment()">
        <li>
          <button cDropdownItem [active]="true" tabIndex="0" #item="cDropdownItem">Action</button>
        </li>
      </ul>
    </c-dropdown>
  `,
  imports: [DropdownComponent, DropdownMenuDirective, DropdownItemDirective, ButtonDirective, DropdownToggleDirective]
})
class TestComponent {
  readonly visible = signal(true);
  readonly alignment = signal<DropdownAlignment | undefined>(undefined);
  readonly popper = signal(true);
  readonly dropdown = viewChild(DropdownComponent);
  readonly menu = viewChild(DropdownMenuDirective);
  readonly item = viewChild(DropdownItemDirective);
}

describe('DropdownMenuDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let dropdownRef: DebugElement;
  let elementRef: DebugElement;
  let itemRef: DebugElement;
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [{ provide: ElementRef, useClass: MockElementRef }, Renderer2, DropdownService]
    });
    document = TestBed.inject(DOCUMENT);
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    dropdownRef = fixture.debugElement.query(By.directive(DropdownComponent));
    elementRef = fixture.debugElement.query(By.directive(DropdownMenuDirective));
    itemRef = fixture.debugElement.query(By.directive(DropdownItemDirective));
    component.visible.set(true);
    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new DropdownMenuDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes', async () => {
    component.visible.set(false);
    fixture.detectChanges();
    expect(dropdownRef.nativeElement.classList.contains('show')).toBe(false);
    expect(elementRef.nativeElement.classList.contains('dropdown-menu')).toBe(true);
    expect(elementRef.nativeElement.classList.contains('dropdown-menu-end')).toBe(false);
    expect(elementRef.nativeElement.classList.contains('dropdown-menu-start')).toBe(false);
    expect(elementRef.nativeElement.classList.contains('show')).toBe(false);
    component.visible.set(true);
    component.alignment.set('end');
    fixture.detectChanges();
    expect(dropdownRef.nativeElement.classList.contains('show')).toBe(true);
    expect(elementRef.nativeElement.classList.contains('dropdown-menu-end')).toBe(true);
    expect(elementRef.nativeElement.classList.contains('dropdown-menu-start')).toBe(false);
    expect(elementRef.nativeElement.classList.contains('show')).toBe(true);
    component.alignment.set('start');
    fixture.detectChanges();
    expect(elementRef.nativeElement.classList.contains('dropdown-menu-end')).toBe(false);
    expect(elementRef.nativeElement.classList.contains('dropdown-menu-start')).toBe(true);
    component.alignment.set({ xs: 'end', lg: 'start' });
    fixture.detectChanges();
    expect(elementRef.nativeElement.classList.contains('dropdown-menu-end')).toBe(true);
    expect(elementRef.nativeElement.classList.contains('dropdown-menu-lg-start')).toBe(true);
    component.alignment.set(undefined);
    fixture.detectChanges();
    expect(elementRef.nativeElement.classList.contains('dropdown-menu-end')).toBe(false);
    expect(elementRef.nativeElement.classList.contains('dropdown-menu-start')).toBe(false);
  });

  it('should set data-coreui-popper when dynamic positioning is off', () => {
    expect(elementRef.nativeElement.hasAttribute('data-coreui-popper')).toBe(false);
    component.alignment.set({ xs: 'end', lg: 'start' });
    fixture.detectChanges();
    expect(elementRef.nativeElement.getAttribute('data-coreui-popper')).toBe('static');
    component.alignment.set('end');
    fixture.detectChanges();
    expect(elementRef.nativeElement.hasAttribute('data-coreui-popper')).toBe(false);
    component.popper.set(false);
    fixture.detectChanges();
    expect(elementRef.nativeElement.getAttribute('data-coreui-popper')).toBe('static');
  });

  it('should call event handling functions', async () => {
    expect(document.activeElement).not.toEqual(elementRef.nativeElement);
    elementRef.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space' }));
    elementRef.nativeElement.dispatchEvent(new KeyboardEvent('keyup', { key: 'Tab' }));
    component.visible.set(true);
    fixture.detectChanges();
    elementRef.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space' }));
    elementRef.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', keyCode: 40 }));
    expect(document.activeElement).toEqual(itemRef.nativeElement);
    elementRef.nativeElement.focus();
    fixture.detectChanges();
    expect(document.activeElement).toEqual(itemRef.nativeElement);
  });
});

@Component({
  template: `
    <c-dropdown visible>
      <button cDropdownToggle>Dropdown button</button>
      <ul cDropdownMenu>
        <li><button cDropdownItem id="button">Action</button></li>
        <li><input type="button" cDropdownItem id="inputItem" value="Go" /></li>
        <li><a cDropdownItem href="#" id="link">Link</a></li>
        <li><input id="field" /></li>
        <li><input type="checkbox" id="check" /></li>
      </ul>
    </c-dropdown>
  `,
  imports: [DropdownComponent, DropdownMenuDirective, DropdownItemDirective, DropdownToggleDirective]
})
class SpaceTestComponent {}

describe('DropdownMenuDirective Space', () => {
  it('should prevent page scroll on Space only for targets without native Space handling', () => {
    const fixture = TestBed.createComponent(SpaceTestComponent);
    fixture.detectChanges();
    const menu = fixture.debugElement.query(By.directive(DropdownMenuDirective)).nativeElement;
    const press = (target: HTMLElement, code: string) => {
      const event = new KeyboardEvent('keydown', { code, bubbles: true, cancelable: true });
      target.dispatchEvent(event);
      return event.defaultPrevented;
    };

    expect(press(menu.querySelector('#button'), 'Space')).toBe(false);
    expect(press(menu.querySelector('#inputItem'), 'Space')).toBe(false);
    expect(press(menu.querySelector('#field'), 'Space')).toBe(false);
    expect(press(menu.querySelector('#check'), 'Space')).toBe(false);
    expect(press(menu.querySelector('#link'), 'Space')).toBe(true);
    expect(press(menu, 'Space')).toBe(true);
    expect(press(menu.querySelector('#button'), 'ArrowDown')).toBe(true);
  });

  it('should move the arrows from an input button item', () => {
    const fixture = TestBed.createComponent(SpaceTestComponent);
    fixture.detectChanges();
    const menu = fixture.debugElement.query(By.directive(DropdownMenuDirective)).nativeElement;
    const inputItem: HTMLInputElement = menu.querySelector('#inputItem');
    inputItem.focus();
    const event = new KeyboardEvent('keydown', { key: 'ArrowDown', keyCode: 40, bubbles: true, cancelable: true });
    inputItem.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
    expect(document.activeElement).toBe(menu.querySelector('#link'));
  });

  it('should leave every key to a form control inside a shadow root in the menu', () => {
    const fixture = TestBed.createComponent(SpaceTestComponent);
    fixture.detectChanges();
    const menu = fixture.debugElement.query(By.directive(DropdownMenuDirective)).nativeElement;
    const host = document.createElement('x-field');
    menu.querySelector('li').append(host);
    const field = document.createElement('input');
    host.attachShadow({ mode: 'open' }).append(field);
    field.focus();
    for (const [key, code, keyCode] of [
      [' ', 'Space', 32],
      ['ArrowDown', 'ArrowDown', 40]
    ] as const) {
      const event = new KeyboardEvent('keydown', {
        key,
        code,
        keyCode,
        bubbles: true,
        composed: true,
        cancelable: true
      });
      field.dispatchEvent(event);
      expect(event.defaultPrevented).toBe(false);
      expect(host.shadowRoot?.activeElement).toBe(field);
    }
  });

  it('should leave every key to a form control inside the menu', () => {
    const fixture = TestBed.createComponent(SpaceTestComponent);
    fixture.detectChanges();
    const menu = fixture.debugElement.query(By.directive(DropdownMenuDirective)).nativeElement;
    const field: HTMLInputElement = menu.querySelector('#field');
    field.focus();
    for (const [key, keyCode] of [
      ['Home', 36],
      ['End', 35],
      ['ArrowDown', 40],
      ['ArrowUp', 38]
    ] as const) {
      const event = new KeyboardEvent('keydown', { key, keyCode, bubbles: true, cancelable: true });
      field.dispatchEvent(event);
      expect(event.defaultPrevented).toBe(false);
      expect(document.activeElement).toBe(field);
    }
  });
});
