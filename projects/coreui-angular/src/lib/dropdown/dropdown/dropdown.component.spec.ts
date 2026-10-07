import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent, DropdownToggleDirective } from './dropdown.component';
import { Component, DebugElement, DOCUMENT, ElementRef, input, Renderer2, signal } from '@angular/core';
import { DropdownAlignment } from '../../coreui.types';
import { DropdownService } from '../dropdown.service';
import { By } from '@angular/platform-browser';
import { provideRouter, RouterLink } from '@angular/router';
import { DropdownMenuDirective } from '../dropdown-menu/dropdown-menu.directive';
import { DropdownItemDirective } from '../dropdown-item/dropdown-item.directive';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('dropdown')).toBe(true);
  });
});

class MockElementRef extends ElementRef {}

@Component({
  template: `
    <c-dropdown
      #dropdown="cDropdown"
      [(visible)]="visible"
      [alignment]="alignment()"
      direction="dropup"
      [variant]="variant()"
    >
      <div
        cDropdownToggle
        [caret]="caret()"
        [split]="split()"
        [disabled]="disabled()"
        [dropdownComponent]="dropdown"
      ></div>
      <ul cDropdownMenu>
        <li><a cDropdownItem>Action</a></li>
        <li><a cDropdownItem>Another action</a></li>
        <li><a cDropdownItem>Something else here</a></li>
        <li><a cDropdownItem>Separated link</a></li>
      </ul>
    </c-dropdown>
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective, DropdownItemDirective]
})
class TestComponent {
  readonly alignment = signal<DropdownAlignment | undefined>(undefined);
  readonly variant = signal<'btn-group' | 'dropdown' | 'input-group' | 'nav-item' | undefined>('nav-item');
  readonly visible = signal(false);
  readonly disabled = input(false);
  readonly caret = input(true);
  readonly split = input(false);
}

describe('DropdownToggleDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let elementRef: DebugElement;
  let dropdownRef: DebugElement;
  let service: DropdownService;
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [
        { provide: ElementRef, useClass: MockElementRef },
        DropdownService,
        DropdownComponent,
        { provide: Renderer2, useValue: { setAttribute: vi.fn() } }
        // ChangeDetectorRef
      ]
    });
    document = TestBed.inject(DOCUMENT);
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    elementRef = fixture.debugElement.query(By.directive(DropdownToggleDirective));
    dropdownRef = fixture.debugElement.query(By.directive(DropdownComponent));
    service = new DropdownService();

    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new DropdownToggleDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes and attributes', async () => {
    expect(elementRef.nativeElement.classList.contains('disabled')).toBe(false);
    expect(elementRef.nativeElement.classList.contains('dropdown-toggle')).toBe(true);
    expect(elementRef.nativeElement.classList.contains('dropdown-toggle-split')).toBe(false);
    component.variant.set('input-group');
    fixture.componentRef.setInput('disabled', true);
    fixture.componentRef.setInput('split', true);
    fixture.componentRef.setInput('caret', false);
    fixture.detectChanges();
    expect(elementRef.nativeElement.classList.contains('disabled')).toBe(true);
    expect(elementRef.nativeElement.classList.contains('dropdown-toggle')).toBe(false);
    expect(elementRef.nativeElement.classList.contains('dropdown-toggle-split')).toBe(true);
    expect(elementRef.nativeElement.getAttribute('aria-expanded')).toBe('false');
    component.variant.set('nav-item');
    component.visible.set(true);
    fixture.detectChanges();
    expect(elementRef.nativeElement.getAttribute('aria-expanded')).toBe('true');
  });

  it('should pass its alignment down to the menu', async () => {
    const menu = fixture.debugElement.query(By.directive(DropdownMenuDirective)).nativeElement;

    component.alignment.set('end');
    fixture.detectChanges();
    await fixture.whenStable();
    expect(menu.classList.contains('dropdown-menu-end')).toBe(true);

    component.alignment.set({ xs: 'end', lg: 'start' });
    fixture.detectChanges();
    await fixture.whenStable();
    expect(menu.classList.contains('dropdown-menu-end')).toBe(true);
    expect(menu.classList.contains('dropdown-menu-lg-start')).toBe(true);
  });

  it('should skip dynamic positioning for responsive alignment', async () => {
    const dropdown = dropdownRef.injector.get(DropdownComponent);

    component.visible.set(true);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(dropdown['popperInstance']).toBeDefined();

    component.visible.set(false);
    fixture.detectChanges();
    await fixture.whenStable();

    component.alignment.set({ lg: 'end' });
    component.visible.set(true);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(dropdown['popperInstance']).toBeUndefined();
  });

  it('should call event handling functions', async () => {
    expect(component.visible()).toBe(false);
    elementRef.nativeElement.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    expect(component.visible()).toBe(true);
    elementRef.nativeElement.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    expect(component.visible()).toBe(false);
    elementRef.nativeElement.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    expect(component.visible()).toBe(true);
    dropdownRef.nativeElement.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape' }));
    fixture.detectChanges();
    expect(component.visible()).toBe(false);
    component.visible.set(true);
    fixture.detectChanges();
    document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Tab' }));
    fixture.detectChanges();
    expect(component.visible()).toBe(false);
  });
});

@Component({
  template: `
    <c-dropdown visible>
      <button cDropdownToggle>Toggle</button>
      <ul cDropdownMenu></ul>
    </c-dropdown>
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective]
})
class InitiallyVisibleComponent {}

describe('DropdownToggleDirective initially visible', () => {
  it('should set aria-expanded on first render', () => {
    const fixture = TestBed.createComponent(InitiallyVisibleComponent);
    fixture.detectChanges();

    const toggle = fixture.debugElement.query(By.directive(DropdownToggleDirective)).nativeElement;
    const menu = fixture.debugElement.query(By.directive(DropdownMenuDirective)).nativeElement;

    expect(menu.classList.contains('show')).toBe(true);
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
  });
});

@Component({
  template: `
    <c-dropdown [alignment]="first()">
      <div cDropdownToggle></div>
      <ul cDropdownMenu id="first"></ul>
    </c-dropdown>
    <c-dropdown [alignment]="second()">
      <div cDropdownToggle></div>
      <ul cDropdownMenu id="second"></ul>
    </c-dropdown>
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective]
})
class TwoDropdownsComponent {
  readonly first = signal<DropdownAlignment | undefined>(undefined);
  readonly second = signal<DropdownAlignment | undefined>(undefined);
}

describe('DropdownComponent alignment scope', () => {
  it('should keep each dropdown alignment to itself', async () => {
    const fixture = TestBed.createComponent(TwoDropdownsComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const first = fixture.debugElement.query(By.css('#first')).nativeElement;
    const second = fixture.debugElement.query(By.css('#second')).nativeElement;

    component.first.set('end');
    component.second.set({ lg: 'start' });
    fixture.detectChanges();
    await fixture.whenStable();

    expect(first.classList.contains('dropdown-menu-end')).toBe(true);
    expect(first.classList.contains('dropdown-menu-lg-start')).toBe(false);
    expect(second.classList.contains('dropdown-menu-lg-start')).toBe(true);
    expect(second.classList.contains('dropdown-menu-end')).toBe(false);
  });
});

@Component({
  template: `
    <c-dropdown [(visible)]="visible">
      <button cDropdownToggle id="toggle">Toggle <input id="field" /></button>
      <ul cDropdownMenu>
        <li><button cDropdownItem>One</button></li>
        <li><button cDropdownItem>Two</button></li>
        <li><button cDropdownItem>Three</button></li>
      </ul>
    </c-dropdown>
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective, DropdownItemDirective]
})
class KeyboardTestComponent {
  readonly visible = signal(false);
}

describe('Dropdown keyboard', () => {
  let fixture: ComponentFixture<KeyboardTestComponent>;
  let toggle: HTMLElement;
  let items: HTMLElement[];

  const keydown = async (target: HTMLElement, key: string) => {
    const keyCode = { ArrowDown: 40, ArrowUp: 38 }[key];
    target.dispatchEvent(new KeyboardEvent('keydown', { key, keyCode, bubbles: true, cancelable: true }));
    fixture.detectChanges();
    await fixture.whenStable();
  };

  beforeEach(async () => {
    fixture = TestBed.createComponent(KeyboardTestComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    toggle = fixture.nativeElement.querySelector('#toggle');
    items = [...fixture.nativeElement.querySelectorAll('.dropdown-item')];
    toggle.focus();
  });

  it('should open and focus the first item on ArrowDown on the toggle', async () => {
    await keydown(toggle, 'ArrowDown');
    expect(fixture.componentInstance.visible()).toBe(true);
    expect(document.activeElement).toBe(items[0]);
  });

  it('should open and focus the last item on ArrowUp on the toggle', async () => {
    await keydown(toggle, 'ArrowUp');
    expect(fixture.componentInstance.visible()).toBe(true);
    expect(document.activeElement).toBe(items[2]);
  });

  it('should focus the first item on ArrowDown on the toggle of an open menu', async () => {
    fixture.componentInstance.visible.set(true);
    fixture.detectChanges();
    await fixture.whenStable();
    await keydown(toggle, 'ArrowDown');
    expect(document.activeElement).toBe(items[0]);
  });

  it('should ignore ArrowDown from a field inside the toggle', async () => {
    const field = fixture.nativeElement.querySelector('#field');
    field.focus();
    await keydown(field, 'ArrowDown');
    expect(fixture.componentInstance.visible()).toBe(false);
    expect(document.activeElement).toBe(field);
  });

  it('should continue arrow navigation from the item focused by Tab', async () => {
    await keydown(toggle, 'ArrowDown');
    items[1].focus();
    items[1].dispatchEvent(new KeyboardEvent('keyup', { key: 'Tab', bubbles: true }));
    expect(document.activeElement).toBe(items[1]);
    await keydown(items[1], 'ArrowDown');
    expect(document.activeElement).toBe(items[2]);
  });

  it('should focus the toggle on click', async () => {
    toggle.blur();
    toggle.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(true);
    expect(document.activeElement).toBe(toggle);
  });

  it('should keep focus on a field inside the toggle on click', async () => {
    const field = fixture.nativeElement.querySelector('#field');
    field.focus();
    field.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(document.activeElement).toBe(field);
  });

  it('should close and focus the toggle on Escape from an item', async () => {
    fixture.componentInstance.visible.set(true);
    fixture.detectChanges();
    await fixture.whenStable();
    items[0].focus();
    items[0].dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape', bubbles: true }));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(false);
    expect(document.activeElement).toBe(toggle);
  });
});

@Component({
  template: `
    <c-dropdown [(visible)]="visible">
      <a cDropdownToggle id="toggle">Toggle</a>
      <ul cDropdownMenu>
        <li><button cDropdownItem>One</button></li>
      </ul>
    </c-dropdown>
    <c-dropdown>
      <a cDropdownToggle href="#" id="link">Link</a>
      <ul cDropdownMenu></ul>
    </c-dropdown>
    <c-dropdown>
      <a cDropdownToggle role="tab" tabindex="-1" id="custom">Custom</a>
      <ul cDropdownMenu></ul>
    </c-dropdown>
    <c-dropdown>
      <button cDropdownToggle id="button">Button</button>
      <ul cDropdownMenu></ul>
    </c-dropdown>
    <c-dropdown>
      <a cDropdownToggle routerLink="/route" id="router">Router</a>
      <ul cDropdownMenu></ul>
    </c-dropdown>
    <c-dropdown [(visible)]="nestedVisible">
      <a cDropdownToggle id="nested">Search <input id="nestedField" /></a>
      <ul cDropdownMenu></ul>
    </c-dropdown>
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective, DropdownItemDirective, RouterLink]
})
class AnchorToggleComponent {
  readonly visible = signal(false);
  readonly nestedVisible = signal(false);
}

describe('DropdownToggleDirective on anchor', () => {
  let fixture: ComponentFixture<AnchorToggleComponent>;
  const element = (id: string): HTMLElement => fixture.nativeElement.querySelector(`#${id}`);
  const keydown = async (target: HTMLElement, key: string) => {
    const event = new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true });
    target.dispatchEvent(event);
    fixture.detectChanges();
    await fixture.whenStable();
    return event.defaultPrevented;
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    fixture = TestBed.createComponent(AnchorToggleComponent);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should expose an anchor toggle as a button and keep its tabindex and href', () => {
    expect(element('toggle').getAttribute('role')).toBe('button');
    expect(element('toggle').hasAttribute('tabindex')).toBe(false);
    expect(element('link').getAttribute('role')).toBe('button');
    expect(element('link').hasAttribute('tabindex')).toBe(false);
    expect(element('custom').getAttribute('role')).toBe('tab');
    expect(element('custom').getAttribute('tabindex')).toBe('-1');
    expect(element('button').hasAttribute('role')).toBe(false);
    expect(element('button').hasAttribute('tabindex')).toBe(false);
    expect(element('router').getAttribute('href')).toBe('/route');
    expect(element('router').getAttribute('role')).toBe('button');
    expect(element('router').hasAttribute('tabindex')).toBe(false);
  });

  it('should toggle an anchor without href on Enter and Space', async () => {
    const toggle = element('toggle');
    expect(await keydown(toggle, 'Enter')).toBe(true);
    expect(fixture.componentInstance.visible()).toBe(true);
    expect(await keydown(toggle, ' ')).toBe(true);
    expect(fixture.componentInstance.visible()).toBe(false);
  });

  it('should leave Space and Enter to a field inside an anchor toggle', async () => {
    const field = element('nestedField');
    field.focus();
    expect(await keydown(field, ' ')).toBe(false);
    expect(await keydown(field, 'Enter')).toBe(false);
    expect(fixture.componentInstance.nestedVisible()).toBe(false);
  });

  it('should leave Enter on an anchor with href to the native click', async () => {
    expect(await keydown(element('link'), 'Enter')).toBe(false);
  });
});

@Component({
  template: `
    <button cDropdownToggle [dropdownComponent]="dd" id="external">External</button>
    <c-dropdown #dd="cDropdown" [(visible)]="visible">
      <ul cDropdownMenu>
        <li><button cDropdownItem id="item">One</button></li>
      </ul>
    </c-dropdown>
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective, DropdownItemDirective]
})
class ExternalToggleComponent {
  readonly visible = signal(false);
}

describe('DropdownToggleDirective outside the dropdown', () => {
  it('should close on Escape and focus the external toggle', async () => {
    const fixture = TestBed.createComponent(ExternalToggleComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    const toggle: HTMLElement = fixture.nativeElement.querySelector('#external');
    const item: HTMLElement = fixture.nativeElement.querySelector('#item');

    toggle.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(true);

    item.focus();
    item.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape', bubbles: true }));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(false);
    expect(document.activeElement).toBe(toggle);
  });
});
