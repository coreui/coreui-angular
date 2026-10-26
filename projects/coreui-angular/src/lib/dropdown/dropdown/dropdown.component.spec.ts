import { FocusMonitor } from '@angular/cdk/a11y';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Options, Placement } from '@popperjs/core';

import { DropdownComponent, DropdownFocusReturn, DropdownToggleDirective } from './dropdown.component';
import {
  afterNextRender,
  Component,
  DebugElement,
  DOCUMENT,
  ElementRef,
  ErrorHandler,
  forwardRef,
  inject,
  input,
  Renderer2,
  signal,
  viewChild
} from '@angular/core';
import { DropdownAlignment } from '../../coreui.types';
import { DropdownService } from '../dropdown.service';
import { By } from '@angular/platform-browser';
import { provideRouter, RouterLink } from '@angular/router';
import { DropdownMenuDirective } from '../dropdown-menu/dropdown-menu.directive';
import { DropdownItemDirective } from '../dropdown-item/dropdown-item.directive';
import { DropdownCloseDirective } from '../dropdown-close/dropdown-close.directive';
import { ModalComponent } from '../../modal/modal/modal.component';
import { OffcanvasComponent } from '../../offcanvas/offcanvas/offcanvas.component';

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

  beforeEach(async () => {
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

    await fixture.whenStable(); // initial binding
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
    await fixture.whenStable();
    expect(elementRef.nativeElement.classList.contains('disabled')).toBe(true);
    expect(elementRef.nativeElement.classList.contains('dropdown-toggle')).toBe(false);
    expect(elementRef.nativeElement.classList.contains('dropdown-toggle-split')).toBe(true);
    expect(elementRef.nativeElement.getAttribute('aria-expanded')).toBe('false');
    component.variant.set('nav-item');
    component.visible.set(true);
    await fixture.whenStable();
    expect(elementRef.nativeElement.getAttribute('aria-expanded')).toBe('true');
  });

  it('should pass its alignment down to the menu', async () => {
    const menu = fixture.debugElement.query(By.directive(DropdownMenuDirective)).nativeElement;

    component.alignment.set('end');
    await fixture.whenStable();
    expect(menu.classList.contains('dropdown-menu-end')).toBe(true);

    component.alignment.set({ xs: 'end', lg: 'start' });
    await fixture.whenStable();
    expect(menu.classList.contains('dropdown-menu-end')).toBe(true);
    expect(menu.classList.contains('dropdown-menu-lg-start')).toBe(true);
  });

  it('should skip dynamic positioning for responsive alignment', async () => {
    const dropdown = dropdownRef.injector.get(DropdownComponent);

    component.visible.set(true);
    await fixture.whenStable();
    expect(dropdown['popperInstance']).toBeDefined();

    component.visible.set(false);
    await fixture.whenStable();

    component.alignment.set({ lg: 'end' });
    component.visible.set(true);
    await fixture.whenStable();
    expect(dropdown['popperInstance']).toBeUndefined();
  });

  it('should call event handling functions', async () => {
    expect(component.visible()).toBe(false);
    elementRef.nativeElement.dispatchEvent(new MouseEvent('click'));
    await fixture.whenStable();
    expect(component.visible()).toBe(true);
    elementRef.nativeElement.dispatchEvent(new MouseEvent('click'));
    await fixture.whenStable();
    expect(component.visible()).toBe(false);
    elementRef.nativeElement.dispatchEvent(new MouseEvent('click'));
    await fixture.whenStable();
    expect(component.visible()).toBe(true);
    dropdownRef.nativeElement.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true })
    );
    await fixture.whenStable();
    expect(component.visible()).toBe(false);
    component.visible.set(true);
    await fixture.whenStable();
    document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Tab' }));
    await fixture.whenStable();
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
  it('should set aria-expanded on first render', async () => {
    const fixture = TestBed.createComponent(InitiallyVisibleComponent);
    await fixture.whenStable();

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

@Component({
  template: `
    <div [attr.dir]="dir()">
      <c-dropdown
        [(visible)]="visible"
        [alignment]="alignment()"
        [direction]="direction()"
        [placement]="placement()"
        [popperOptions]="popperOptions()"
      >
        <button cDropdownToggle>Toggle</button>
        <ul cDropdownMenu [alignment]="menuAlignment()">
          <li><button cDropdownItem>One</button></li>
        </ul>
      </c-dropdown>
    </div>
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective, DropdownItemDirective]
})
class PlacementTestComponent {
  readonly alignment = signal<DropdownAlignment | undefined>(undefined);
  readonly dir = signal<'ltr' | 'rtl'>('ltr');
  readonly direction = signal<'center' | 'dropup' | 'dropup-center' | 'dropend' | 'dropstart' | undefined>(undefined);
  readonly menuAlignment = signal<DropdownAlignment | undefined>(undefined);
  readonly placement = signal<Placement | undefined>(undefined);
  readonly popperOptions = signal<Partial<Options>>({});
  readonly visible = signal(false);
}

@Component({
  template: `
    <c-dropdown alignment="end" visible>
      <button cDropdownToggle>Toggle</button>
      <ul cDropdownMenu>
        <li><button cDropdownItem>One</button></li>
      </ul>
    </c-dropdown>
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective, DropdownItemDirective]
})
class InitiallyVisibleEndComponent {}

@Component({
  template: `
    <c-dropdown alignment="end" [(visible)]="outer">
      <button cDropdownToggle>Outer</button>
      <div cDropdownMenu>
        <c-dropdown [(visible)]="inner" id="inner">
          <button cDropdownToggle>Inner</button>
          <ul cDropdownMenu>
            <li><button cDropdownItem>One</button></li>
          </ul>
        </c-dropdown>
      </div>
    </c-dropdown>
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective, DropdownItemDirective]
})
class NestedInEndMenuComponent {
  readonly inner = signal(false);
  readonly outer = signal(true);
}

@Component({
  template: `
    <c-dropdown visible>
      <button cDropdownToggle>Toggle</button>
      <ul cDropdownMenu class="dropdown-menu-end">
        <li><button cDropdownItem>One</button></li>
      </ul>
    </c-dropdown>
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective, DropdownItemDirective]
})
class MarkupEndClassComponent {}

describe('DropdownComponent placement', () => {
  let fixture: ComponentFixture<PlacementTestComponent>;

  type Direction = 'center' | 'dropup' | 'dropup-center' | 'dropend' | 'dropstart' | undefined;
  type Case = [Direction, DropdownAlignment | undefined, Placement | undefined, Placement];

  const placementWhenOpen = async (): Promise<Placement | undefined> => {
    const dropdown = fixture.debugElement.query(By.directive(DropdownComponent)).componentInstance;
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    const placement = dropdown['popperInstance']?.state.options.placement;
    fixture.componentInstance.visible.set(false);
    await fixture.whenStable();
    return placement;
  };

  const expectPlacements = async (cases: Case[]) => {
    const component = fixture.componentInstance;
    for (const [direction, alignment, placement, expected] of cases) {
      component.direction.set(direction);
      component.alignment.set(alignment);
      component.placement.set(placement);
      await fixture.whenStable();
      expect(await placementWhenOpen(), `${direction} ${alignment} ${placement}`).toBe(expected);
    }
  };

  beforeEach(async () => {
    fixture = TestBed.createComponent(PlacementTestComponent);
    await fixture.whenStable();
  });

  it('should place the menu from direction and end alignment left to right', async () => {
    await expectPlacements([
      [undefined, undefined, undefined, 'bottom-start'],
      [undefined, 'end', undefined, 'bottom-end'],
      ['dropup', undefined, undefined, 'top-start'],
      ['dropup', 'end', undefined, 'top-end'],
      ['dropend', 'end', undefined, 'right-start'],
      ['dropstart', 'end', undefined, 'left-start'],
      ['center', 'end', undefined, 'bottom'],
      ['dropup-center', 'end', undefined, 'top']
    ]);
  });

  it('should mirror the direction and end alignment placements right to left', async () => {
    fixture.componentInstance.dir.set('rtl');
    await expectPlacements([
      [undefined, undefined, undefined, 'bottom-end'],
      [undefined, 'end', undefined, 'bottom-start'],
      ['dropup', undefined, undefined, 'top-end'],
      ['dropup', 'end', undefined, 'top-start'],
      ['dropend', undefined, undefined, 'left-start'],
      ['dropstart', undefined, undefined, 'right-start'],
      ['center', undefined, undefined, 'bottom']
    ]);
  });

  it('should use a placement set on the input as given', async () => {
    await expectPlacements([
      ['dropend', 'end', 'top', 'top'],
      [undefined, 'end', 'auto', 'auto']
    ]);
    fixture.componentInstance.dir.set('rtl');
    await expectPlacements([
      [undefined, undefined, 'bottom-start', 'bottom-start'],
      ['dropup', 'end', 'top-end', 'top-end']
    ]);
  });

  it('should ignore a placement passed in popperOptions', async () => {
    fixture.componentInstance.popperOptions.set({ placement: 'top-end' });
    await fixture.whenStable();
    await expectPlacements([[undefined, undefined, undefined, 'bottom-start']]);
  });

  it('should take the end alignment from the menu', async () => {
    const component = fixture.componentInstance;
    component.menuAlignment.set('end');
    await expectPlacements([[undefined, undefined, undefined, 'bottom-end']]);
    component.menuAlignment.set('start');
    await expectPlacements([[undefined, 'end', undefined, 'bottom-start']]);
  });

  it('should not take the alignment from a class set in the markup', async () => {
    const classFixture = TestBed.createComponent(MarkupEndClassComponent);
    await classFixture.whenStable();
    const dropdown = classFixture.debugElement.query(By.directive(DropdownComponent)).componentInstance;
    expect(dropdown['popperInstance']?.state.options.placement).toBe('bottom-start');
  });

  it('should open an initially visible dropdown at its end alignment', async () => {
    const visibleFixture = TestBed.createComponent(InitiallyVisibleEndComponent);
    await visibleFixture.whenStable();
    const dropdown = visibleFixture.debugElement.query(By.directive(DropdownComponent)).componentInstance;
    expect(dropdown['popperInstance']?.state.options.placement).toBe('bottom-end');
  });

  it('should not take the end alignment of an enclosing menu', async () => {
    const nestedFixture = TestBed.createComponent(NestedInEndMenuComponent);
    await nestedFixture.whenStable();
    nestedFixture.componentInstance.inner.set(true);
    await nestedFixture.whenStable();
    const inner = nestedFixture.debugElement.query(By.css('#inner')).injector.get(DropdownComponent);
    expect(inner['popperInstance']?.state.options.placement).toBe('bottom-start');
  });
});

describe('DropdownComponent alignment scope', () => {
  it('should keep each dropdown alignment to itself', async () => {
    const fixture = TestBed.createComponent(TwoDropdownsComponent);
    const component = fixture.componentInstance;
    await fixture.whenStable();

    const first = fixture.debugElement.query(By.css('#first')).nativeElement;
    const second = fixture.debugElement.query(By.css('#second')).nativeElement;

    component.first.set('end');
    component.second.set({ lg: 'start' });
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
    const keyCode = { ArrowDown: 40, ArrowUp: 38, End: 35, Home: 36 }[key];
    target.dispatchEvent(new KeyboardEvent('keydown', { key, keyCode, bubbles: true, cancelable: true }));
    await fixture.whenStable();
  };

  beforeEach(async () => {
    fixture = TestBed.createComponent(KeyboardTestComponent);
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

  it('should continue arrow navigation from the item that received focus', async () => {
    await keydown(toggle, 'ArrowDown');
    items[2].focus();
    await keydown(items[2], 'ArrowUp');
    expect(document.activeElement).toBe(items[1]);
  });

  it('should wrap the arrows and jump with Home and End', async () => {
    await keydown(toggle, 'ArrowUp');
    expect(document.activeElement).toBe(items[2]);
    await keydown(items[2], 'ArrowDown');
    expect(document.activeElement).toBe(items[0]);
    await keydown(items[0], 'End');
    expect(document.activeElement).toBe(items[2]);
    await keydown(items[2], 'Home');
    expect(document.activeElement).toBe(items[0]);
  });

  it('should move focus to the first item only after the menu rendered', async () => {
    const dropdownRef = fixture.debugElement.query(By.directive(DropdownComponent));
    const service = dropdownRef.injector.get(DropdownService);
    service.toggle({ visible: true, dropdown: dropdownRef.componentInstance, focus: 'first' });
    expect(document.activeElement).not.toBe(items[0]);
    await fixture.whenStable();
    expect(document.activeElement).toBe(items[0]);
  });

  it('should focus the toggle on click', async () => {
    toggle.blur();
    toggle.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(true);
    expect(document.activeElement).toBe(toggle);
  });

  it('should keep focus on a field inside the toggle on click', async () => {
    const field = fixture.nativeElement.querySelector('#field');
    field.focus();
    field.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await fixture.whenStable();
    expect(document.activeElement).toBe(field);
  });

  it('should close and focus the toggle on Escape from an item', async () => {
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    items[0].focus();
    items[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(false);
    expect(document.activeElement).toBe(toggle);
  });

  it('should leave an Escape that a control in the menu already handled', async () => {
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    items[0].focus();
    items[0].addEventListener('keydown', (event) => event.preventDefault());
    items[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(true);
    expect(document.activeElement).toBe(items[0]);
  });

  it('should not click the toggle again while Enter is held on it', () => {
    const press = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true });
    const repeat = new KeyboardEvent('keydown', { key: 'Enter', repeat: true, bubbles: true, cancelable: true });
    toggle.dispatchEvent(press);
    toggle.dispatchEvent(repeat);
    expect(press.defaultPrevented).toBe(false);
    expect(repeat.defaultPrevented).toBe(true);
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
      <a cDropdownToggle id="nested">Search <input id="nestedField" /> <input type="submit" id="go" value="Go" /></a>
      <ul cDropdownMenu></ul>
    </c-dropdown>
    <c-dropdown [(visible)]="disabledVisible">
      <a cDropdownToggle href="#" [disabled]="true" id="disabledAnchor">Off</a>
      <ul cDropdownMenu></ul>
    </c-dropdown>
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective, DropdownItemDirective, RouterLink]
})
class AnchorToggleComponent {
  readonly disabledVisible = signal(false);
  readonly visible = signal(false);
  readonly nestedVisible = signal(false);
}

describe('DropdownToggleDirective on anchor', () => {
  let fixture: ComponentFixture<AnchorToggleComponent>;
  const element = (id: string): HTMLElement => fixture.nativeElement.querySelector(`#${id}`);
  const keydown = async (target: HTMLElement, key: string) => {
    const event = new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true });
    target.dispatchEvent(event);
    await fixture.whenStable();
    return event.defaultPrevented;
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    fixture = TestBed.createComponent(AnchorToggleComponent);
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

  it('should toggle once while Space is held on an anchor toggle', async () => {
    const toggle = element('toggle');
    await keydown(toggle, ' ');
    toggle.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', repeat: true, bubbles: true, cancelable: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(true);
  });

  it('should expose an anchor toggle with interactive content as a button too', () => {
    expect(element('nested').getAttribute('role')).toBe('button');
  });

  it('should not prevent Enter and Space keydown on a native control inside an anchor toggle', async () => {
    const go = element('go');
    go.focus();
    expect(await keydown(go, 'Enter')).toBe(false);
    expect(await keydown(go, ' ')).toBe(false);
  });

  it('should ignore a repeated Enter on a native control inside an anchor toggle', () => {
    const go = element('go');
    const repeat = new KeyboardEvent('keydown', { key: 'Enter', repeat: true, bubbles: true, cancelable: true });
    go.dispatchEvent(repeat);
    expect(repeat.defaultPrevented).toBe(true);
  });

  it('should not expose aria-disabled from the directive input', () => {
    expect(element('disabledAnchor').hasAttribute('aria-disabled')).toBe(false);
  });

  it('should ignore the arrows on a disabled anchor toggle', async () => {
    await keydown(element('disabledAnchor'), 'ArrowDown');
    expect(fixture.componentInstance.disabledVisible()).toBe(false);
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
  it('should stay open when change detection runs before the click reaches document', async () => {
    const fixture = TestBed.createComponent(ExternalToggleComponent);
    await fixture.whenStable();
    const toggle: HTMLElement = fixture.nativeElement.querySelector('#external');
    fixture.nativeElement.addEventListener('click', () => fixture.detectChanges());
    toggle.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(true);
  });

  it('should close on Escape pressed on the external toggle and stay open on Tab from it', async () => {
    const fixture = TestBed.createComponent(ExternalToggleComponent);
    await fixture.whenStable();
    const toggle: HTMLElement = fixture.nativeElement.querySelector('#external');
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    toggle.focus();
    toggle.dispatchEvent(new KeyboardEvent('keyup', { key: 'Tab', bubbles: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(true);
    toggle.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(false);
  });

  it('should close on Escape and focus the external toggle', async () => {
    const fixture = TestBed.createComponent(ExternalToggleComponent);
    await fixture.whenStable();
    const toggle: HTMLElement = fixture.nativeElement.querySelector('#external');
    const item: HTMLElement = fixture.nativeElement.querySelector('#item');

    toggle.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(true);

    item.focus();
    item.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(false);
    expect(document.activeElement).toBe(toggle);
  });
});

@Component({
  template: `
    <c-dropdown [(visible)]="visible">
      <div cDropdownToggle id="group">
        <span tabindex="-1" id="icon"></span>
        <input aria-hidden="true" tabindex="-1" id="hint" />
        <span aria-hidden="true"><button id="hiddenGroup">x</button></span>
        <button tabindex="-1" id="clear">x</button>
        <input id="field" />
        <input id="second" />
      </div>
      <ul cDropdownMenu>
        <li><button cDropdownItem id="item">One</button></li>
      </ul>
    </c-dropdown>
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective, DropdownItemDirective]
})
class FieldToggleComponent {
  readonly visible = signal(false);
}

describe('DropdownToggleDirective on a non-focusable host', () => {
  it('should toggle on a click bubbling from a button inside the toggle', async () => {
    const fixture = TestBed.createComponent(FieldToggleComponent);
    await fixture.whenStable();
    fixture.nativeElement
      .querySelector('#clear')
      .dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(true);
  });

  it('should return focus to the field inside the toggle on Escape', async () => {
    const fixture = TestBed.createComponent(FieldToggleComponent);
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    const item: HTMLElement = fixture.nativeElement.querySelector('#item');
    item.focus();
    item.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(false);
    expect(document.activeElement).toBe(fixture.nativeElement.querySelector('#field'));
  });

  it('should not move into a toggle that does not take the focus unless Escape closes the menu', async () => {
    const fixture = TestBed.createComponent(FieldToggleComponent);
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    const item: HTMLElement = fixture.nativeElement.querySelector('#item');
    item.focus();
    item.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(false);
    expect(fixture.nativeElement.querySelector('#group').contains(document.activeElement)).toBe(false);
  });
});

@Component({
  template: `
    <c-dropdown [(visible)]="visible">
      <div cDropdownToggle><input #field id="field" /></div>
      <ul cDropdownMenu>
        <li><button cDropdownItem id="item">One</button></li>
      </ul>
    </c-dropdown>
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective, DropdownItemDirective]
})
class KeyboardFocusOpensComponent {
  readonly #focusMonitor = inject(FocusMonitor);
  readonly dropdown = viewChild.required(DropdownComponent);
  readonly field = viewChild.required<ElementRef<HTMLInputElement>>('field');
  readonly visible = signal(false);

  constructor() {
    afterNextRender(() => {
      this.#focusMonitor.monitor(this.field()).subscribe((origin) => {
        if (origin === 'keyboard' && !this.dropdown().visible()) {
          this.dropdown().visible.set(true);
        }
      });
    });
  }
}

describe('DropdownComponent focus origin tracking', () => {
  it('should not start listening for input modality before Escape returns focus', async () => {
    const addEventListener = vi.spyOn(document, 'addEventListener');
    const fixture = TestBed.createComponent(KeyboardTestComponent);
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    expect(addEventListener).not.toHaveBeenCalledWith('mousedown', expect.any(Function), expect.anything());
    addEventListener.mockRestore();
  });
});

describe('DropdownToggleDirective on a field that opens on keyboard focus', () => {
  it('should stay closed when Escape returns focus to the field', async () => {
    const fixture = TestBed.createComponent(KeyboardFocusOpensComponent);
    await fixture.whenStable();
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    const item: HTMLElement = fixture.nativeElement.querySelector('#item');
    item.focus();
    item.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(false);
    expect(document.activeElement).toBe(fixture.nativeElement.querySelector('#field'));
  });
});

@Component({
  template: `
    <div (keydown.escape)="ancestorEscape = $event" tabindex="-1">
      <c-dropdown autoClose="outside" [(visible)]="outer">
        <button cDropdownToggle id="outerToggle">Outer</button>
        <div cDropdownMenu>
          <c-dropdown [(visible)]="inner">
            <button cDropdownToggle id="innerToggle">Inner</button>
            <ul cDropdownMenu>
              <li><button cDropdownItem id="innerItem">One</button></li>
            </ul>
          </c-dropdown>
        </div>
      </c-dropdown>
    </div>
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective, DropdownItemDirective]
})
class NestedDropdownComponent {
  readonly inner = signal(false);
  readonly outer = signal(false);
  ancestorEscape?: Event;
}

describe('DropdownComponent nested', () => {
  it('should close only the inner dropdown on Escape and mark it handled for ancestors', async () => {
    const fixture = TestBed.createComponent(NestedDropdownComponent);
    const component = fixture.componentInstance;
    component.outer.set(true);
    await fixture.whenStable();
    component.inner.set(true);
    await fixture.whenStable();
    const innerItem: HTMLElement = fixture.nativeElement.querySelector('#innerItem');
    innerItem.focus();
    innerItem.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }));
    await fixture.whenStable();
    expect(component.inner()).toBe(false);
    expect(component.outer()).toBe(true);
    expect(component.ancestorEscape?.defaultPrevented).toBe(true);
    expect(document.activeElement).toBe(fixture.nativeElement.querySelector('#innerToggle'));
  });
});

@Component({
  template: `
    <c-modal [(visible)]="modal">
      <div (keyup.escape)="keyupEscape = keyupEscape + 1" tabindex="-1">
        <c-dropdown [(visible)]="modalDropdown">
          <button cDropdownToggle id="modalToggle">Toggle</button>
          <ul cDropdownMenu>
            <li><button cDropdownItem id="modalItem">One</button></li>
          </ul>
        </c-dropdown>
      </div>
    </c-modal>
    <c-offcanvas [(visible)]="offcanvas">
      <c-dropdown [(visible)]="offcanvasDropdown">
        <button cDropdownToggle id="offcanvasToggle">Toggle</button>
        <ul cDropdownMenu>
          <li><button cDropdownItem id="offcanvasItem">One</button></li>
        </ul>
      </c-dropdown>
    </c-offcanvas>
  `,
  imports: [
    DropdownComponent,
    DropdownItemDirective,
    DropdownMenuDirective,
    DropdownToggleDirective,
    ModalComponent,
    OffcanvasComponent
  ]
})
class DropdownInOverlayComponent {
  keyupEscape = 0;
  readonly modal = signal(false);
  readonly modalDropdown = signal(false);
  readonly offcanvas = signal(false);
  readonly offcanvasDropdown = signal(false);
}

describe('DropdownComponent in a modal or offcanvas', () => {
  let fixture: ComponentFixture<DropdownInOverlayComponent>;
  const element = (id: string): HTMLElement => fixture.nativeElement.querySelector(`#${id}`);
  const pressEscape = async (target: HTMLElement) => {
    const keydown = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true });
    target.dispatchEvent(keydown);
    await fixture.whenStable();
    document.activeElement?.dispatchEvent(
      new KeyboardEvent('keyup', { key: 'Escape', bubbles: true, cancelable: true })
    );
    await fixture.whenStable();
    return keydown.defaultPrevented;
  };

  beforeEach(async () => {
    fixture = TestBed.createComponent(DropdownInOverlayComponent);
    await fixture.whenStable();
  });

  it('should close only the menu on Escape in a modal and leave the next Escape to the modal', async () => {
    const component = fixture.componentInstance;
    component.modal.set(true);
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve));
    component.modalDropdown.set(true);
    await fixture.whenStable();
    element('modalItem').focus();
    expect(await pressEscape(element('modalItem'))).toBe(true);
    expect(component.modalDropdown()).toBe(false);
    expect(component.modal()).toBe(true);
    expect(document.activeElement).toBe(element('modalToggle'));
    expect(component.keyupEscape).toBe(1);
    expect(await pressEscape(element('modalToggle'))).toBe(false);
    expect(component.modal()).toBe(false);
  });

  it('should close only the menu on Escape from its toggle in a modal', async () => {
    const component = fixture.componentInstance;
    component.modal.set(true);
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve));
    component.modalDropdown.set(true);
    await fixture.whenStable();
    element('modalToggle').focus();
    expect(await pressEscape(element('modalToggle'))).toBe(true);
    expect(component.modalDropdown()).toBe(false);
    expect(component.modal()).toBe(true);
    expect(document.activeElement).toBe(element('modalToggle'));
  });

  it('should close only the menu on Escape in an offcanvas and leave the next Escape to the offcanvas', async () => {
    const component = fixture.componentInstance;
    component.offcanvas.set(true);
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve));
    component.offcanvasDropdown.set(true);
    await fixture.whenStable();
    element('offcanvasItem').focus();
    expect(await pressEscape(element('offcanvasItem'))).toBe(true);
    expect(component.offcanvasDropdown()).toBe(false);
    expect(component.offcanvas()).toBe(true);
    expect(document.activeElement).toBe(element('offcanvasToggle'));
    expect(await pressEscape(element('offcanvasToggle'))).toBe(false);
    expect(component.offcanvas()).toBe(false);
  });
});

describe('DropdownComponent with shadow DOM', () => {
  it('should keep the menu open on Tab inside a shadow root in the menu', async () => {
    const fixture = TestBed.createComponent(KeyboardTestComponent);
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    const host = document.createElement('x-item');
    fixture.nativeElement.querySelector('li').append(host);
    const inner = document.createElement('button');
    host.attachShadow({ mode: 'open' }).append(inner);
    inner.dispatchEvent(new KeyboardEvent('keyup', { key: 'Tab', bubbles: true, composed: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(true);
  });

  it('should close on Tab leaving a dropdown rendered inside a shadow root and return focus on Escape', async () => {
    const fixture = TestBed.createComponent(KeyboardTestComponent);
    const host = document.createElement('div');
    document.body.append(host);
    const root = host.attachShadow({ mode: 'open' });
    root.append(fixture.nativeElement);
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    const toggle: HTMLElement = fixture.nativeElement.querySelector('#toggle');
    const items: HTMLElement[] = [...fixture.nativeElement.querySelectorAll('.dropdown-item')];
    items[0].focus();
    items[0].dispatchEvent(new KeyboardEvent('keyup', { key: 'Tab', bubbles: true, composed: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(true);
    items[0].dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true, composed: true })
    );
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(false);
    expect(root.activeElement).toBe(toggle);
    const outside = document.createElement('button');
    root.append(outside);
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    outside.focus();
    outside.dispatchEvent(new KeyboardEvent('keyup', { key: 'Tab', bubbles: true, composed: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(false);
    host.remove();
  });

  it('should return the focus to the toggle when an item closes a dropdown rendered inside a shadow root', async () => {
    const fixture = TestBed.createComponent(KeyboardTestComponent);
    const host = document.createElement('div');
    document.body.append(host);
    const root = host.attachShadow({ mode: 'open' });
    root.append(fixture.nativeElement);
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    const toggle: HTMLElement = fixture.nativeElement.querySelector('#toggle');
    const item: HTMLElement = fixture.nativeElement.querySelector('.dropdown-item');
    item.focus();
    item.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(false);
    expect(root.activeElement).toBe(toggle);
    host.remove();
  });
});

@Component({
  template: `
    <c-dropdown [(visible)]="visible">
      <button cDropdownToggle id="toggle">Toggle</button>
      <ul cDropdownMenu>
        <li><button cDropdownItem id="item">One</button></li>
        <li><button cDropdownClose id="close" type="button">Close</button></li>
      </ul>
    </c-dropdown>
    <button id="outside">Outside</button>
  `,
  imports: [
    DropdownToggleDirective,
    DropdownComponent,
    DropdownMenuDirective,
    DropdownItemDirective,
    DropdownCloseDirective
  ]
})
class FocusReturnComponent {
  readonly visible = signal(false);
}

describe('DropdownComponent focus return', () => {
  let fixture: ComponentFixture<FocusReturnComponent>;

  const element = (id: string): HTMLElement => fixture.nativeElement.querySelector(`#${id}`);

  const setVisible = async (visible: boolean) => {
    fixture.componentInstance.visible.set(visible);
    await fixture.whenStable();
  };

  const dispatch = async (target: HTMLElement, event: Event) => {
    target.dispatchEvent(event);
    await fixture.whenStable();
  };

  const click = (target: HTMLElement) => dispatch(target, new MouseEvent('click', { bubbles: true }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(FocusReturnComponent);
    await fixture.whenStable();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return the focus to the toggle when an item closes the menu', async () => {
    await setVisible(true);
    element('item').focus();
    await click(element('item'));
    expect(fixture.componentInstance.visible()).toBe(false);
    expect(document.activeElement).toBe(element('toggle'));
  });

  it('should return the focus to the toggle when cDropdownClose closes the menu', async () => {
    await setVisible(true);
    element('close').focus();
    await click(element('close'));
    expect(fixture.componentInstance.visible()).toBe(false);
    expect(document.activeElement).toBe(element('toggle'));
  });

  it('should return the focus to the toggle when a click in the menu leaves it on the body', async () => {
    element('toggle').focus();
    await setVisible(true);
    element('item').dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, pointerType: 'mouse' }));
    element('toggle').blur();
    expect(document.activeElement).toBe(document.body);
    await click(element('item'));
    expect(document.activeElement).toBe(element('toggle'));
  });

  it('should count a press in the menu from a pointer of unknown type', async () => {
    element('toggle').focus();
    await setVisible(true);
    element('item').dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, pointerType: '' }));
    element('toggle').blur();
    await click(element('item'));
    expect(document.activeElement).toBe(element('toggle'));
  });

  it('should not move the focus when the menu closes before any interaction in it', async () => {
    element('toggle').focus();
    await setVisible(true);
    element('toggle').blur();
    await setVisible(false);
    expect(document.activeElement).toBe(document.body);
  });

  it('should forget the menu interaction when the menu opens again', async () => {
    await setVisible(true);
    element('item').focus();
    element('outside').focus();
    await setVisible(false);
    expect(document.activeElement).toBe(element('outside'));
    await setVisible(true);
    element('outside').blur();
    await setVisible(false);
    expect(document.activeElement).toBe(document.body);
  });

  it('should leave the focus in a menu that opens again before the render', async () => {
    await setVisible(true);
    element('item').focus();
    const dropdown: DropdownComponent = fixture.debugElement.query(By.directive(DropdownComponent)).componentInstance;
    let reopened = false;
    dropdown.visibleChange.subscribe((visible) => {
      if (!visible && !reopened) {
        reopened = true;
        fixture.componentInstance.visible.set(true);
      }
    });
    await setVisible(false);
    expect(fixture.componentInstance.visible()).toBe(true);
    expect(document.activeElement).toBe(element('item'));
  });

  it('should not return the focus when the window does not have it', async () => {
    await setVisible(true);
    element('item').focus();
    vi.spyOn(document, 'hasFocus').mockReturnValue(false);
    await click(element('item'));
    expect(fixture.componentInstance.visible()).toBe(false);
    expect(document.activeElement).toBe(element('item'));
  });

  it('should return the focus after a click outside that leaves it on the body once the menu was used', async () => {
    await setVisible(true);
    element('item').focus();
    element('item').blur();
    document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, pointerType: 'mouse' }));
    await click(document.body);
    expect(fixture.componentInstance.visible()).toBe(false);
    expect(document.activeElement).toBe(element('toggle'));
  });

  it('should leave the focus where a click outside the menu moved it', async () => {
    await setVisible(true);
    element('item').focus();
    element('outside').focus();
    await click(element('outside'));
    expect(fixture.componentInstance.visible()).toBe(false);
    expect(document.activeElement).toBe(element('outside'));
  });

  it('should keep the focus on the next element when Tab leaves the menu', async () => {
    await setVisible(true);
    element('item').focus();
    element('outside').focus();
    await dispatch(element('outside'), new KeyboardEvent('keyup', { key: 'Tab', bubbles: true }));
    expect(fixture.componentInstance.visible()).toBe(false);
    expect(document.activeElement).toBe(element('outside'));
  });

  it('should move the focus only after the menu is hidden', async () => {
    await setVisible(true);
    const menu: HTMLElement = fixture.nativeElement.querySelector('.dropdown-menu');
    const toggle = element('toggle');
    const focus = toggle.focus.bind(toggle);
    let shownAtFocus: boolean | undefined;
    vi.spyOn(toggle, 'focus').mockImplementation((options) => {
      shownAtFocus = menu.classList.contains('show');
      focus(options);
    });
    element('item').focus();
    await setVisible(false);
    expect(shownAtFocus).toBe(false);
    expect(document.activeElement).toBe(toggle);
  });

  it('should return the focus as program focus without scrolling unless Escape closes the menu', async () => {
    const focusVia = vi.spyOn(TestBed.inject(FocusMonitor), 'focusVia');
    await setVisible(true);
    element('item').focus();
    await click(element('item'));
    expect(focusVia).toHaveBeenLastCalledWith(element('toggle'), 'program', { preventScroll: true });
    await setVisible(true);
    element('item').focus();
    await dispatch(element('item'), new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }));
    expect(focusVia).toHaveBeenLastCalledWith(element('toggle'), 'program', { preventScroll: false });
  });
});

@Component({
  template: `
    <c-dropdown [(visible)]="visible">
      <div cDropdownToggle id="group">
        <input id="start" />
        <input id="end" />
        <div id="indicator" tabindex="0"></div>
      </div>
      <ul cDropdownMenu>
        <li><button cDropdownItem id="item">One</button></li>
      </ul>
    </c-dropdown>
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective, DropdownItemDirective],
  viewProviders: [{ provide: DropdownFocusReturn, useExisting: forwardRef(() => FocusTargetsComponent) }]
})
class FocusTargetsComponent implements DropdownFocusReturn {
  readonly #elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly visible = signal(false);

  focusReturnTargets() {
    const host = this.#elementRef.nativeElement;
    return [host.querySelector<HTMLElement>('#end'), host.querySelector<HTMLElement>('#indicator')];
  }
}

describe('DropdownComponent with focus targets from the component', () => {
  let fixture: ComponentFixture<FocusTargetsComponent>;

  const element = (id: string): HTMLElement => fixture.nativeElement.querySelector(`#${id}`);

  const open = async () => {
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
  };

  const pick = async () => {
    element('item').dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await fixture.whenStable();
  };

  const touch = () =>
    element('item').dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, pointerType: 'touch' }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(FocusTargetsComponent);
    await open();
  });

  it('should use the targets the component provides, also on Escape', async () => {
    element('item').focus();
    await pick();
    expect(document.activeElement).toBe(element('end'));
    await open();
    element('item').focus();
    element('item').dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(false);
    expect(document.activeElement).toBe(element('end'));
  });

  it('should skip a field that opens the on-screen keyboard after a touch in the menu', async () => {
    touch();
    element('item').focus();
    await pick();
    expect(document.activeElement).toBe(element('indicator'));
  });

  it('should skip a field that opens the on-screen keyboard after a pen in the menu', async () => {
    element('item').dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, pointerType: 'pen' }));
    element('item').focus();
    await pick();
    expect(document.activeElement).toBe(element('indicator'));
  });

  it('should keep a read-only field after a touch in the menu', async () => {
    (element('end') as HTMLInputElement).readOnly = true;
    touch();
    element('item').focus();
    await pick();
    expect(document.activeElement).toBe(element('end'));
  });

  it('should keep a control that does not open the on-screen keyboard after a touch in the menu', async () => {
    (element('end') as HTMLInputElement).type = 'checkbox';
    touch();
    element('item').focus();
    await pick();
    expect(document.activeElement).toBe(element('end'));
  });

  it('should keep a select after a touch in the menu', async () => {
    const select = document.createElement('select');
    select.id = 'end';
    select.append(new Option('One'));
    element('end').replaceWith(select);
    touch();
    element('item').focus();
    await pick();
    expect(document.activeElement).toBe(select);
  });

  it('should skip a textarea unless it is read-only after a touch in the menu', async () => {
    const textarea = document.createElement('textarea');
    textarea.id = 'end';
    element('end').replaceWith(textarea);
    touch();
    element('item').focus();
    await pick();
    expect(document.activeElement).toBe(element('indicator'));
    textarea.readOnly = true;
    await open();
    touch();
    element('item').focus();
    await pick();
    expect(document.activeElement).toBe(textarea);
  });

  it('should skip an editable region after a touch in the menu', async () => {
    element('indicator').setAttribute('contenteditable', 'true');
    touch();
    element('item').focus();
    await pick();
    expect(element('group').contains(document.activeElement)).toBe(false);
  });

  it('should not skip the field when a key follows the touch', async () => {
    touch();
    element('item').focus();
    element('item').dispatchEvent(new KeyboardEvent('keydown', { key: 'Shift', bubbles: true }));
    await pick();
    expect(document.activeElement).toBe(element('end'));
  });
});

@Component({
  selector: 'c-inner-dropdown',
  template: `
    <c-dropdown [(visible)]="visible">
      <button cDropdownToggle id="inner-toggle">Toggle</button>
      <ul cDropdownMenu>
        <li><button cDropdownItem id="inner-item">One</button></li>
      </ul>
    </c-dropdown>
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective, DropdownItemDirective]
})
class InnerDropdownComponent {
  readonly visible = signal(false);
}

@Component({
  template: `
    <button id="outer-target">Outer</button>
    <c-inner-dropdown />
  `,
  imports: [InnerDropdownComponent],
  viewProviders: [{ provide: DropdownFocusReturn, useExisting: forwardRef(() => OuterFocusTargetsComponent) }]
})
class OuterFocusTargetsComponent implements DropdownFocusReturn {
  readonly #elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly inner = viewChild.required(InnerDropdownComponent);

  focusReturnTargets() {
    return [this.#elementRef.nativeElement.querySelector<HTMLElement>('#outer-target')];
  }
}

describe('DropdownComponent inside a component that provides focus targets', () => {
  it('should not take the focus targets of a component around its own host', async () => {
    const fixture = TestBed.createComponent(OuterFocusTargetsComponent);
    fixture.componentInstance.inner().visible.set(true);
    await fixture.whenStable();
    const item: HTMLElement = fixture.nativeElement.querySelector('#inner-item');
    item.focus();
    item.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await fixture.whenStable();
    expect(document.activeElement).toBe(fixture.nativeElement.querySelector('#inner-toggle'));
  });
});

@Component({
  template: `
    <c-dropdown [(visible)]="visible">
      <input cDropdownToggle id="toggle" />
      <ul cDropdownMenu>
        <li><button cDropdownItem id="item">One</button></li>
      </ul>
    </c-dropdown>
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective, DropdownItemDirective]
})
class TextFieldToggleComponent {
  readonly visible = signal(false);
}

describe('DropdownToggleDirective on a text field', () => {
  it('should return the focus to the field after a mouse pick and not after a touch in the menu', async () => {
    const fixture = TestBed.createComponent(TextFieldToggleComponent);
    const item: HTMLElement = fixture.nativeElement.querySelector('#item');
    const toggle: HTMLElement = fixture.nativeElement.querySelector('#toggle');
    const pick = async (pointerType: string) => {
      fixture.componentInstance.visible.set(true);
      await fixture.whenStable();
      item.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, pointerType }));
      item.focus();
      item.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await fixture.whenStable();
      expect(fixture.componentInstance.visible()).toBe(false);
    };
    await pick('mouse');
    expect(document.activeElement).toBe(toggle);
    await pick('touch');
    expect(document.activeElement).not.toBe(toggle);
  });
});

@Component({
  template: `
    <c-dropdown [autoClose]="false" [(visible)]="visible">
      <button cDropdownToggle id="toggle">Toggle</button>
      <ul cDropdownMenu>
        <li><button cDropdownItem id="item">One</button></li>
      </ul>
    </c-dropdown>
    <button id="outside">Outside</button>
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective, DropdownItemDirective]
})
class NoAutoCloseComponent {
  readonly visible = signal(true);
}

describe('DropdownComponent with autoClose false', () => {
  it('should neither close nor move focus on Escape or Tab', async () => {
    const fixture = TestBed.createComponent(NoAutoCloseComponent);
    await fixture.whenStable();
    const item: HTMLElement = fixture.nativeElement.querySelector('#item');
    const outside: HTMLElement = fixture.nativeElement.querySelector('#outside');
    item.focus();
    let reachedHost = false;
    fixture.nativeElement.addEventListener('keydown', () => (reachedHost = true));
    const escape = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true });
    item.dispatchEvent(escape);
    await fixture.whenStable();
    expect(escape.defaultPrevented).toBe(false);
    expect(reachedHost).toBe(true);
    expect(fixture.componentInstance.visible()).toBe(true);
    expect(document.activeElement).toBe(item);
    outside.focus();
    outside.dispatchEvent(new KeyboardEvent('keyup', { key: 'Tab', bubbles: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(true);
  });
});

@Component({
  template: `
    <c-dropdown [autoClose]="autoClose()" [(visible)]="visible">
      <button id="action">Action</button>
      <button cDropdownToggle id="toggle">Toggle</button>
      <div cDropdownMenu id="menu">
        <p id="inside">Text</p>
        <button cDropdownItem [autoClose]="false" id="item">One</button>
        <label cDropdownItem id="pick"><input type="radio" /> Name</label>
        <input id="search" />
        <select id="loose-select">
          <option>One</option>
        </select>
        <textarea id="loose-textarea"></textarea>
        <form id="form">
          <label for="field" id="label">Email</label>
          <input id="field" />
          <select id="select">
            <option id="option">One</option>
          </select>
          <textarea id="textarea"></textarea>
          <button id="submit" type="button">Sign in</button>
        </form>
      </div>
    </c-dropdown>
    <button id="outside">Outside</button>
    <input id="outside-field" />
  `,
  imports: [DropdownToggleDirective, DropdownComponent, DropdownMenuDirective, DropdownItemDirective]
})
class AutoCloseClickComponent {
  readonly autoClose = signal<boolean | 'inside' | 'outside'>(true);
  readonly visible = signal(false);
}

describe('DropdownComponent autoClose on click', () => {
  let fixture: ComponentFixture<AutoCloseClickComponent>;

  const element = (id: string): HTMLElement => fixture.nativeElement.querySelector(`#${id}`);

  const visibleAfter = async (target: string | HTMLElement, event: Event) => {
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    const node = typeof target === 'string' ? element(target) : target;
    node.dispatchEvent(event);
    await fixture.whenStable();
    return fixture.componentInstance.visible();
  };

  const visibleAfterClick = (target: string | HTMLElement) =>
    visibleAfter(target, new MouseEvent('click', { bubbles: true, composed: true }));

  const visibleAfterTab = (target: string | HTMLElement) =>
    visibleAfter(target, new KeyboardEvent('keyup', { key: 'Tab', bubbles: true, composed: true }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(AutoCloseClickComponent);
    await fixture.whenStable();
  });

  it('should close on a click inside the menu and outside the dropdown with autoClose true', async () => {
    expect(await visibleAfterClick('inside')).toBe(false);
    expect(await visibleAfterClick('outside')).toBe(false);
  });

  it('should close only on a click inside the menu with autoClose inside', async () => {
    fixture.componentInstance.autoClose.set('inside');
    expect(await visibleAfterClick('outside')).toBe(true);
    expect(await visibleAfterClick('inside')).toBe(false);
  });

  it('should close only on a click outside the dropdown with autoClose outside', async () => {
    fixture.componentInstance.autoClose.set('outside');
    expect(await visibleAfterClick('inside')).toBe(true);
    expect(await visibleAfterClick('item')).toBe(true);
    expect(await visibleAfterClick('outside')).toBe(false);
  });

  it('should stay open on a click inside the menu and outside the dropdown with autoClose false', async () => {
    fixture.componentInstance.autoClose.set(false);
    expect(await visibleAfterClick('inside')).toBe(true);
    expect(await visibleAfterClick('outside')).toBe(true);
  });

  it('should stay open on a click on a form field in the menu with autoClose true or inside', async () => {
    for (const autoClose of [true, 'inside'] as const) {
      fixture.componentInstance.autoClose.set(autoClose);
      for (const id of ['search', 'loose-select', 'loose-textarea', 'form', 'field', 'select', 'option', 'textarea']) {
        expect(await visibleAfterClick(id)).toBe(true);
      }
    }
  });

  it('should stay open on a click on a label or button inside a form in the menu', async () => {
    expect(await visibleAfterClick('label')).toBe(true);
    expect(await visibleAfterClick('submit')).toBe(true);
  });

  it('should close on a click on a label item wrapping its own radio with autoClose true or outside', async () => {
    for (const autoClose of [true, 'outside'] as const) {
      fixture.componentInstance.autoClose.set(autoClose);
      fixture.componentInstance.visible.set(true);
      await fixture.whenStable();
      element('pick').click();
      await fixture.whenStable();
      expect(fixture.componentInstance.visible()).toBe(false);
    }
  });

  it('should close on a click on a label outside a form in the menu with autoClose true', async () => {
    const check = document.createElement('x-form-check');
    check.innerHTML = '<label>Remember me</label>';
    element('menu').append(check);
    expect(await visibleAfterClick(check.querySelector('label') as HTMLElement)).toBe(false);
  });

  it('should stay open on a click on a form field in a menu moved out of the dropdown with autoClose true', async () => {
    const menu = element('menu');
    const search = element('search');
    document.body.append(menu);
    expect(await visibleAfterClick(search)).toBe(true);
    menu.remove();
  });

  it('should close on a click on a form field outside the dropdown with autoClose true', async () => {
    expect(await visibleAfterClick('outside-field')).toBe(false);
  });

  it('should close on a click in the menu outside its own form when the dropdown sits in a page form', async () => {
    const form = document.createElement('form');
    document.body.append(form);
    form.append(fixture.nativeElement);
    expect(await visibleAfterClick('label')).toBe(true);
    expect(await visibleAfterClick('inside')).toBe(false);
    form.remove();
  });

  it('should stay open on a click on a form field inside a shadow root in the menu', async () => {
    const host = document.createElement('x-field');
    element('inside').append(host);
    const field = document.createElement('input');
    host.attachShadow({ mode: 'open' }).append(field);
    expect(await visibleAfterClick(field)).toBe(true);
    expect(await visibleAfterClick(host)).toBe(false);
  });

  it('should stay open on a click on a button inside a shadow root in a form in the menu', async () => {
    const host = document.createElement('x-button');
    element('form').append(host);
    const button = document.createElement('button');
    host.attachShadow({ mode: 'open' }).append(button);
    expect(await visibleAfterClick(button)).toBe(true);
  });

  it('should close on a click on a text node in the menu with autoClose true', async () => {
    expect(await visibleAfterClick(element('inside').firstChild as HTMLElement)).toBe(false);
  });

  it('should close once on a click on the toggle of an open dropdown', async () => {
    expect(await visibleAfterClick('toggle')).toBe(false);
  });

  it('should treat a click in the dropdown outside the menu as a click outside the menu', async () => {
    fixture.componentInstance.autoClose.set('inside');
    expect(await visibleAfterClick('action')).toBe(true);
    fixture.componentInstance.autoClose.set('outside');
    expect(await visibleAfterClick('action')).toBe(false);
    fixture.componentInstance.autoClose.set(true);
    expect(await visibleAfterClick('action')).toBe(false);
  });

  it('should close on Tab onto an element of the dropdown outside the menu', async () => {
    expect(await visibleAfterTab('item')).toBe(true);
    expect(await visibleAfterTab('toggle')).toBe(true);
    expect(await visibleAfterTab('action')).toBe(false);
  });

  it('should open on a click on the toggle in a shadow root when change detection runs during the click', async () => {
    const host = document.createElement('div');
    document.body.append(host);
    host.attachShadow({ mode: 'open' }).append(fixture.nativeElement);
    fixture.nativeElement.addEventListener('click', () => fixture.detectChanges());
    element('toggle').dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
    await fixture.whenStable();
    expect(fixture.componentInstance.visible()).toBe(true);
    host.remove();
  });

  it('should tell a click inside the menu from a click outside it in a shadow root', async () => {
    const host = document.createElement('div');
    document.body.append(host);
    host.attachShadow({ mode: 'open' }).append(fixture.nativeElement);
    fixture.componentInstance.autoClose.set('inside');
    expect(await visibleAfterClick('outside')).toBe(true);
    expect(await visibleAfterClick('action')).toBe(true);
    expect(await visibleAfterClick('inside')).toBe(false);
    fixture.componentInstance.autoClose.set('outside');
    expect(await visibleAfterClick('inside')).toBe(true);
    expect(await visibleAfterClick('item')).toBe(true);
    expect(await visibleAfterClick('action')).toBe(false);
    expect(await visibleAfterClick('outside')).toBe(false);
    fixture.componentInstance.autoClose.set(true);
    expect(await visibleAfterClick('toggle')).toBe(false);
    host.remove();
  });

  it('should keep a menu moved out of the dropdown open on a click or Tab inside it with autoClose outside', async () => {
    fixture.componentInstance.autoClose.set('outside');
    const menu = element('menu');
    const inside = element('inside');
    document.body.append(menu);
    expect(await visibleAfterClick(inside)).toBe(true);
    expect(await visibleAfterTab(inside)).toBe(true);
    const removed = document.createElement('span');
    menu.append(removed);
    removed.addEventListener('click', () => removed.remove());
    expect(await visibleAfterClick(removed)).toBe(true);
    expect(await visibleAfterClick('outside')).toBe(false);
    menu.remove();
  });
});

@Component({
  template: `
    <c-dropdown [(visible)]="visible">
      <button cDropdownToggle>Toggle</button>
      <form cDropdownMenu id="menu" (submit)="$event.preventDefault()">
        <label for="email" id="label">Email</label>
        <input id="email" />
        <button id="submit" type="submit">Sign in</button>
        <a href="#" id="link">Help</a>
        <button cDropdownClose id="close" type="submit">Close</button>
        <button cDropdownItem id="item" type="button">Forgot password?</button>
      </form>
    </c-dropdown>
  `,
  imports: [
    DropdownToggleDirective,
    DropdownComponent,
    DropdownMenuDirective,
    DropdownCloseDirective,
    DropdownItemDirective
  ]
})
class FormMenuComponent {
  readonly visible = signal(true);
}

describe('DropdownComponent with a form as the menu', () => {
  it('should stay open on a click inside the menu with autoClose true', async () => {
    const fixture = TestBed.createComponent(FormMenuComponent);
    await fixture.whenStable();
    for (const id of ['menu', 'label', 'submit', 'link']) {
      fixture.nativeElement.querySelector(`#${id}`).dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await fixture.whenStable();
      expect(fixture.componentInstance.visible()).toBe(true);
    }
  });

  it('should close on a click on cDropdownClose or cDropdownItem in the menu', async () => {
    const fixture = TestBed.createComponent(FormMenuComponent);
    for (const id of ['close', 'item']) {
      fixture.componentInstance.visible.set(true);
      await fixture.whenStable();
      fixture.nativeElement.querySelector(`#${id}`).dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await fixture.whenStable();
      expect(fixture.componentInstance.visible()).toBe(false);
    }
  });
});

const replayed = (type: string, init: KeyboardEventInit): KeyboardEvent => {
  const event = new KeyboardEvent(type, { bubbles: true, cancelable: true, ...init });
  Object.defineProperty(event, 'eventPhase', { value: 101 });
  Object.defineProperty(event, 'preventDefault', {
    value: () => {
      throw new Error('preventDefault called during event replay');
    }
  });
  Object.defineProperty(event, 'composedPath', {
    value: () => {
      throw new Error('composedPath called during event replay');
    }
  });
  return event;
};

describe('DropdownComponent with replayed events', () => {
  it('should ignore a replayed key on the toggle and in the menu without an error', async () => {
    const fixture = TestBed.createComponent(KeyboardTestComponent);
    await fixture.whenStable();
    const errorSpy = vi.spyOn(TestBed.inject(ErrorHandler), 'handleError').mockImplementation(() => undefined);
    const service = fixture.debugElement.query(By.directive(DropdownComponent)).injector.get(DropdownService);
    const toggleSpy = vi.spyOn(service, 'toggle');
    const toggle: HTMLElement = fixture.nativeElement.querySelector('#toggle');
    toggle.dispatchEvent(replayed('keydown', { key: 'ArrowDown', keyCode: 40 }));
    expect(toggleSpy).not.toHaveBeenCalled();
    fixture.componentInstance.visible.set(true);
    await fixture.whenStable();
    const items: HTMLElement[] = [...fixture.nativeElement.querySelectorAll('.dropdown-item')];
    items[0].focus();
    items[0].dispatchEvent(replayed('keydown', { key: 'ArrowDown', keyCode: 40 }));
    expect(document.activeElement).toBe(items[0]);
    expect(errorSpy).not.toHaveBeenCalled();
  });
});
