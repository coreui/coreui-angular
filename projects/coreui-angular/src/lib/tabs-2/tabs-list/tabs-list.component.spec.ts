import { FocusKeyManager } from '@angular/cdk/a11y';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ComponentRef, input, signal, ViewEncapsulation } from '@angular/core';
import { By } from '@angular/platform-browser';

import { TabsListComponent } from './tabs-list.component';
import { TabsService } from '../tabs.service';
import { TabsComponent } from '../tabs.component';
import { TabDirective } from '../tab/tab.directive';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';
import { TabsContentComponent } from '../tabs-content/tabs-content.component';

describe('TabsListComponent', () => {
  let component: TabsListComponent;
  let fixture: ComponentFixture<TabsListComponent>;
  let componentRef: ComponentRef<TabsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsListComponent],
      providers: [TabsService]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsListComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes for variant', async () => {
    expect(fixture.nativeElement.classList.contains('nav')).toBe(true);

    componentRef.setInput('variant', 'pills');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('nav-pills')).toBe(true);
    expect(fixture.nativeElement.classList.contains('nav-enclosed')).toBe(false);

    componentRef.setInput('variant', 'enclosed');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('nav-enclosed')).toBe(true);
    expect(fixture.nativeElement.classList.contains('nav-enclosed-pills')).toBe(false);

    componentRef.setInput('variant', 'enclosed-pills');
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('nav-enclosed')).toBe(true);
    expect(fixture.nativeElement.classList.contains('nav-enclosed-pills')).toBe(true);
  });
});

@Component({
  template: `
    <div [dir]="dir()">
      <c-tabs [(activeItemKey)]="activeItemKey">
        <c-tabs-list>
          <button cTab itemKey="a" [disabled]="disabledKey() === 'a'">A</button>
          <button cTab itemKey="b" [disabled]="disabledKey() === 'b'">B</button>
          <button cTab itemKey="c" [disabled]="disabledKey() === 'c'">C</button>
          @if (extraTab()) {
            <button cTab itemKey="d">D</button>
          }
        </c-tabs-list>
      </c-tabs>
    </div>
  `,
  imports: [TabsComponent, TabsListComponent, TabDirective]
})
class KeyboardTestComponent {
  readonly activeItemKey = signal<string | number | undefined>('a');
  readonly dir = signal<'ltr' | 'rtl'>('ltr');
  readonly disabledKey = signal<string | undefined>(undefined);
  readonly extraTab = signal(false);
}

describe('TabsListComponent keyboard', () => {
  let fixture: ComponentFixture<KeyboardTestComponent>;
  let tabs: HTMLButtonElement[];

  const keydown = async (key: string, target: Element | null = document.activeElement) => {
    const keyCode = { ArrowDown: 40, ArrowLeft: 37, ArrowRight: 39, End: 35, Home: 36 }[key];
    const event = new KeyboardEvent('keydown', { key, keyCode, bubbles: true, cancelable: true });
    target?.dispatchEvent(event);
    await fixture.whenStable();
    return event;
  };

  const render = async () => {
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve));
    await fixture.whenStable();
    tabs = Array.from(fixture.nativeElement.querySelectorAll('button[cTab]'));
  };

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardTestComponent);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should focus and select the next tab on ArrowRight', async () => {
    await render();
    tabs[0].focus();
    await keydown('ArrowRight');
    expect(document.activeElement).toBe(tabs[1]);
    expect(fixture.componentInstance.activeItemKey()).toBe('b');
    expect(tabs[1].getAttribute('aria-selected')).toBe('true');
    expect(tabs[1].getAttribute('tabindex')).toBe('0');
    expect(tabs[0].getAttribute('aria-selected')).toBe('false');
    expect(tabs[0].getAttribute('tabindex')).toBe('-1');
  });

  it('should move from a tab selected by a click', async () => {
    await render();
    tabs[2].click();
    await fixture.whenStable();
    expect(fixture.componentInstance.activeItemKey()).toBe('c');
    await keydown('ArrowLeft', tabs[2]);
    expect(document.activeElement).toBe(tabs[1]);
    expect(fixture.componentInstance.activeItemKey()).toBe('b');
  });

  it('should skip a disabled tab', async () => {
    fixture.componentInstance.disabledKey.set('b');
    await render();
    tabs[0].focus();
    await keydown('ArrowRight');
    expect(document.activeElement).toBe(tabs[2]);
    expect(fixture.componentInstance.activeItemKey()).toBe('c');
  });

  it('should focus and select the last tab on End and the first on Home', async () => {
    await render();
    tabs[0].focus();
    const end = await keydown('End');
    expect(end.defaultPrevented).toBe(true);
    expect(document.activeElement).toBe(tabs[2]);
    expect(fixture.componentInstance.activeItemKey()).toBe('c');
    expect(tabs[2].getAttribute('aria-selected')).toBe('true');
    const home = await keydown('Home');
    expect(home.defaultPrevented).toBe(true);
    expect(document.activeElement).toBe(tabs[0]);
    expect(fixture.componentInstance.activeItemKey()).toBe('a');
  });

  it('should move from a tab selected from outside', async () => {
    await render();
    fixture.componentInstance.activeItemKey.set('c');
    await fixture.whenStable();
    expect(tabs[2].getAttribute('aria-selected')).toBe('true');
    await keydown('ArrowLeft', tabs[2]);
    expect(document.activeElement).toBe(tabs[1]);
    expect(fixture.componentInstance.activeItemKey()).toBe('b');
  });

  it('should ignore keys that do not come from a tab', async () => {
    await render();
    tabs[0].focus();
    const list = fixture.nativeElement.querySelector('c-tabs-list');
    for (const [key, keyCode] of [
      ['ArrowRight', 39],
      ['End', 35]
    ] as const) {
      const event = new KeyboardEvent('keydown', { key, keyCode, bubbles: true, cancelable: true });
      list.dispatchEvent(event);
      await fixture.whenStable();
      expect(event.defaultPrevented).toBe(false);
      expect(document.activeElement).toBe(tabs[0]);
      expect(fixture.componentInstance.activeItemKey()).toBe('a');
    }
  });

  it('should skip a disabled tab on Home', async () => {
    fixture.componentInstance.disabledKey.set('a');
    fixture.componentInstance.activeItemKey.set('c');
    await render();
    tabs[2].focus();
    await keydown('Home');
    expect(document.activeElement).toBe(tabs[1]);
    expect(fixture.componentInstance.activeItemKey()).toBe('b');
  });

  it('should skip a disabled tab on End', async () => {
    fixture.componentInstance.disabledKey.set('c');
    await render();
    tabs[0].focus();
    await keydown('End');
    expect(document.activeElement).toBe(tabs[1]);
    expect(fixture.componentInstance.activeItemKey()).toBe('b');
  });

  it('should wrap from the last tab to the first and back', async () => {
    fixture.componentInstance.activeItemKey.set('c');
    await render();
    tabs[2].focus();
    await keydown('ArrowRight');
    expect(document.activeElement).toBe(tabs[0]);
    await keydown('ArrowLeft');
    expect(document.activeElement).toBe(tabs[2]);
    expect(fixture.componentInstance.activeItemKey()).toBe('c');
  });

  it('should mirror the arrows in a right-to-left context', async () => {
    fixture.componentInstance.dir.set('rtl');
    await render();
    tabs[0].focus();
    await keydown('ArrowLeft');
    expect(document.activeElement).toBe(tabs[1]);
    await keydown('ArrowRight');
    expect(document.activeElement).toBe(tabs[0]);
  });

  it('should mirror the arrows when the direction changes without a render', async () => {
    await render();
    tabs[0].focus();
    fixture.nativeElement.querySelector('div').dir = 'rtl';
    await keydown('ArrowLeft');
    expect(document.activeElement).toBe(tabs[1]);
  });

  it('should ignore the vertical arrows', async () => {
    await render();
    tabs[0].focus();
    await keydown('ArrowDown');
    expect(document.activeElement).toBe(tabs[0]);
    expect(fixture.componentInstance.activeItemKey()).toBe('a');
  });

  it('should select the first enabled tab when no item key is set', async () => {
    fixture.componentInstance.activeItemKey.set(undefined);
    fixture.componentInstance.disabledKey.set('a');
    await render();
    expect(fixture.componentInstance.activeItemKey()).toBe('b');
    expect(tabs[1].getAttribute('aria-selected')).toBe('true');
  });

  it('should reach a tab added after the first render', async () => {
    await render();
    fixture.componentInstance.extraTab.set(true);
    await render();
    tabs[0].focus();
    await keydown('ArrowRight');
    await keydown('ArrowRight');
    await keydown('ArrowRight');
    expect(document.activeElement).toBe(tabs[3]);
    expect(fixture.componentInstance.activeItemKey()).toBe('d');
  });

  it('should keep the key on a disabled selected tab when the tab list changes', async () => {
    fixture.componentInstance.activeItemKey.set('c');
    fixture.componentInstance.disabledKey.set('c');
    await render();
    fixture.componentInstance.extraTab.set(true);
    await render();
    expect(fixture.componentInstance.activeItemKey()).toBe('c');
    expect(tabs[2].getAttribute('aria-selected')).toBe('true');
  });

  it('should keep one key manager and destroy it with the list', async () => {
    fixture.destroy();
    const created = vi.spyOn(FocusKeyManager.prototype, 'withWrap');
    const destroyed = vi.spyOn(FocusKeyManager.prototype, 'destroy');
    fixture = TestBed.createComponent(KeyboardTestComponent);
    await render();
    for (const extraTab of [true, false]) {
      fixture.componentInstance.extraTab.set(extraTab);
      await render();
    }
    fixture.componentInstance.dir.set('rtl');
    await render();
    fixture.destroy();
    expect(created).toHaveBeenCalledTimes(1);
    expect(destroyed).toHaveBeenCalledTimes(1);
  });
});

@Component({
  template: `
    <c-tabs [(activeItemKey)]="key" (activeItemKeyChange)="changes.push($event)">
      @if (list()) {
        <c-tabs-list>
          @if (lazyFirst()) {
            <button cTab [itemKey]="'z'">Z</button>
          }
          @for (k of keys(); track k) {
            <button cTab [itemKey]="k" [disabled]="disabledKeys().includes(k)" (keydown)="onTabKeydown($event)">
              {{ k }}
            </button>
          }
        </c-tabs-list>
      }
      <c-tabs-content>
        @for (k of keys(); track k) {
          <c-tab-panel [itemKey]="k" [transition]="false">{{ k }}</c-tab-panel>
        }
      </c-tabs-content>
    </c-tabs>
  `,
  imports: [TabsComponent, TabsListComponent, TabDirective, TabsContentComponent, TabPanelComponent]
})
class SelectionModelTestComponent {
  readonly key = signal<string | number | undefined>('a');
  readonly keys = signal<(string | number)[]>(['a', 'b', 'c']);
  readonly disabledKeys = signal<(string | number)[]>([]);
  readonly list = signal(true);
  readonly lazyFirst = signal(false);
  readonly blockKeys = signal(false);
  readonly changes: (string | number | undefined)[] = [];

  onTabKeydown($event: KeyboardEvent) {
    if (this.blockKeys()) {
      $event.preventDefault();
    }
  }
}

describe('TabsListComponent selection model', () => {
  let fixture: ComponentFixture<SelectionModelTestComponent>;

  const host = () => fixture.componentInstance;
  const tabs = (): HTMLButtonElement[] => Array.from(fixture.nativeElement.querySelectorAll('button[cTab]'));
  const panels = (): HTMLElement[] => Array.from(fixture.nativeElement.querySelectorAll('c-tab-panel'));
  const tabStops = () => tabs().filter((tab) => tab.getAttribute('tabindex') === '0');
  const selected = () => tabs().filter((tab) => tab.getAttribute('aria-selected') === 'true');
  const flush = async () => {
    await new Promise((resolve) => setTimeout(resolve));
    await fixture.whenStable();
  };
  const keydown = async (
    key: string,
    target: Element | null = document.activeElement,
    init: KeyboardEventInit = {}
  ) => {
    const keyCode = { ArrowLeft: 37, ArrowRight: 39, End: 35, Home: 36 }[key];
    const event = new KeyboardEvent('keydown', { key, keyCode, bubbles: true, cancelable: true, ...init });
    target?.dispatchEvent(event);
    await fixture.whenStable();
    return event;
  };

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionModelTestComponent);
  });

  it('should keep a disabled selected tab as the Tab stop with aria-disabled instead of disabled', async () => {
    host().key.set('c');
    host().disabledKeys.set(['c']);
    await fixture.whenStable();
    const [a, b, c] = tabs();
    expect(tabStops()).toEqual([c]);
    expect(c.getAttribute('aria-selected')).toBe('true');
    expect(c.getAttribute('aria-disabled')).toBe('true');
    expect(c.hasAttribute('disabled')).toBe(false);
    expect(c.classList.contains('disabled')).toBe(true);
    expect([a.getAttribute('tabindex'), b.getAttribute('tabindex')]).toEqual(['-1', '-1']);
  });

  it('should keep native disabled on a disabled tab that is neither selected nor focused', async () => {
    host().disabledKeys.set(['b']);
    await fixture.whenStable();
    const b = tabs()[1];
    expect(b.hasAttribute('disabled')).toBe(true);
    expect(b.hasAttribute('aria-disabled')).toBe(false);
    expect(b.getAttribute('tabindex')).toBe('-1');
  });

  it('should keep a focused disabled tab focusable when the key moves away from it', async () => {
    host().key.set('b');
    host().disabledKeys.set(['b']);
    await fixture.whenStable();
    const b = tabs()[1];
    b.focus();
    host().key.set('c');
    await fixture.whenStable();
    expect(b.hasAttribute('disabled')).toBe(false);
    expect(b.getAttribute('aria-disabled')).toBe('true');
    expect(document.activeElement).toBe(b);
    b.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
    await fixture.whenStable();
    expect(b.hasAttribute('disabled')).toBe(false);
    tabs()[2].focus();
    await fixture.whenStable();
    expect(b.hasAttribute('disabled')).toBe(true);
    expect(b.hasAttribute('aria-disabled')).toBe(false);
  });

  it('should move the Tab stop to the first enabled tab when the key matches no tab', async () => {
    host().key.set('x');
    host().disabledKeys.set(['a', 'c']);
    await fixture.whenStable();
    await flush();
    expect(tabStops()).toEqual([tabs()[1]]);
  });

  it('should keep a key that matches no tab', async () => {
    host().key.set('x');
    await fixture.whenStable();
    await flush();
    expect(host().key()).toBe('x');
    expect(host().changes).toEqual([]);
    expect(selected()).toEqual([]);
    expect(tabStops()).toEqual([tabs()[0]]);
  });

  it('should leave no Tab stop when no tab is selected and every tab is disabled', async () => {
    host().key.set('x');
    host().disabledKeys.set(['a', 'b', 'c']);
    await fixture.whenStable();
    await flush();
    expect(tabStops()).toEqual([]);
  });

  it('should keep the key when the selected tab is removed', async () => {
    host().key.set('c');
    await fixture.whenStable();
    host().keys.set(['a', 'b']);
    await fixture.whenStable();
    await flush();
    expect(host().key()).toBe('c');
    expect(selected()).toEqual([]);
    expect(tabStops()).toEqual([tabs()[0]]);
  });

  it('should keep the Tab stop on the selected tab when it becomes disabled', async () => {
    host().key.set('b');
    await fixture.whenStable();
    host().disabledKeys.set(['b']);
    await fixture.whenStable();
    const b = tabs()[1];
    expect(tabStops()).toEqual([b]);
    expect(b.getAttribute('aria-disabled')).toBe('true');
    expect(b.getAttribute('aria-selected')).toBe('true');
  });

  it('should keep the Tab stop focusable when the page writes isActive', async () => {
    host().key.set('c');
    host().disabledKeys.set(['c']);
    await fixture.whenStable();
    fixture.debugElement.queryAll(By.directive(TabDirective))[2].injector.get(TabDirective).isActive.set(false);
    await fixture.whenStable();
    const c = tabs()[2];
    expect(c.getAttribute('tabindex')).toBe('0');
    expect(c.hasAttribute('disabled')).toBe(false);
    expect(c.getAttribute('aria-disabled')).toBe('true');
  });

  it('should keep the Tab stop on the selected tab when it is disabled through the setter', async () => {
    host().key.set('b');
    await fixture.whenStable();
    fixture.debugElement.queryAll(By.directive(TabDirective))[1].injector.get(TabDirective).disabled = true;
    await fixture.whenStable();
    const b = tabs()[1];
    expect(tabStops()).toEqual([b]);
    expect(b.getAttribute('aria-disabled')).toBe('true');
    expect(b.hasAttribute('disabled')).toBe(false);
  });

  it('should not select a tab on focus', async () => {
    await fixture.whenStable();
    await flush();
    const b = tabs()[1];
    b.focus();
    b.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    await fixture.whenStable();
    expect(host().key()).toBe('a');
    expect(host().changes).toEqual([]);
  });

  it('should select the focused tab on Home and End when the key points elsewhere', async () => {
    await fixture.whenStable();
    const [a, , c] = tabs();
    a.focus();
    host().key.set('c');
    await fixture.whenStable();
    await keydown('Home', a);
    expect(document.activeElement).toBe(a);
    expect(host().key()).toBe('a');
    c.focus();
    await keydown('End', c);
    expect(document.activeElement).toBe(c);
    expect(host().key()).toBe('c');
  });

  it('should not select on a modified arrow key', async () => {
    await fixture.whenStable();
    const b = tabs()[1];
    b.focus();
    await keydown('ArrowRight', b, { altKey: true });
    expect(document.activeElement).toBe(b);
    expect(host().key()).toBe('a');
  });

  it('should ignore a key the page already handled', async () => {
    await fixture.whenStable();
    const a = tabs()[0];
    a.focus();
    host().blockKeys.set(true);
    await keydown('ArrowRight', a);
    expect(document.activeElement).toBe(a);
    expect(host().key()).toBe('a');
  });

  it('should move from a focused disabled selected tab to the next enabled one', async () => {
    host().key.set('b');
    host().disabledKeys.set(['b']);
    await fixture.whenStable();
    const [, b, c] = tabs();
    b.focus();
    expect(document.activeElement).toBe(b);
    await keydown('ArrowRight', b);
    expect(document.activeElement).toBe(c);
    expect(host().key()).toBe('c');
  });

  it('should not select a disabled tab from the keyboard when no enabled tab is left', async () => {
    host().disabledKeys.set(['a', 'b', 'c']);
    await fixture.whenStable();
    host().key.set('b');
    await fixture.whenStable();
    await keydown('ArrowRight', tabs()[0]);
    expect(host().key()).toBe('b');
  });

  it('should select the first enabled tab in the first change detection when no key is set', async () => {
    host().key.set(undefined);
    host().disabledKeys.set(['a']);
    await fixture.whenStable();
    expect(host().key()).toBe('b');
    expect(host().changes).toEqual(['b']);
    expect(tabStops()).toEqual([tabs()[1]]);
  });

  it('should keep a click made right after the first change detection', async () => {
    host().key.set(undefined);
    await fixture.whenStable();
    tabs()[2].click();
    await flush();
    expect(host().key()).toBe('c');
  });

  it('should not write the key after the list is destroyed', async () => {
    host().key.set(undefined);
    await fixture.whenStable();
    const before = host().changes.length;
    host().list.set(false);
    await fixture.whenStable();
    await flush();
    expect(host().changes.length).toBe(before);
  });

  it('should select the first enabled tab again when the page clears the key', async () => {
    host().key.set('b');
    await fixture.whenStable();
    host().key.set(undefined);
    await fixture.whenStable();
    expect(host().key()).toBe('a');
    expect(host().changes).toEqual(['a']);
  });

  it('should keep the numeric key 0', async () => {
    host().keys.set([1, 0]);
    host().key.set(0);
    await fixture.whenStable();
    await flush();
    expect(host().key()).toBe(0);
    expect(host().changes).toEqual([]);
    expect(tabStops()).toEqual([tabs()[1]]);
  });

  it('should select the first tab in DOM order when it renders in its own block', async () => {
    host().key.set(undefined);
    host().lazyFirst.set(true);
    await fixture.whenStable();
    expect(host().key()).toBe('z');
  });

  it('should select a tab added in the same tick as its key', async () => {
    await fixture.whenStable();
    host().keys.set(['a', 'b', 'c', 'd']);
    host().key.set('d');
    await fixture.whenStable();
    await flush();
    const d = tabs()[3];
    expect(host().key()).toBe('d');
    expect(d.getAttribute('aria-selected')).toBe('true');
    expect(tabStops()).toEqual([d]);
    expect(host().changes).toEqual([]);
  });

  it('should put the Tab stop on a selected tab rendered by @for', async () => {
    host().key.set('b');
    await fixture.whenStable();
    expect(tabStops()).toEqual([tabs()[1]]);
    expect(panels()[1].classList.contains('active')).toBe(true);
  });

  it('should not emit at start when the key matches a tab', async () => {
    host().key.set('c');
    await fixture.whenStable();
    await flush();
    expect(host().changes).toEqual([]);
  });

  it('should derive the deprecated active item from the key', async () => {
    await fixture.whenStable();
    const service = fixture.debugElement.query(By.directive(TabsComponent)).injector.get(TabsService);
    const directives = fixture.debugElement.queryAll(By.directive(TabDirective));
    tabs()[2].click();
    await fixture.whenStable();
    expect(service.activeItem()).toBe(directives[2].injector.get(TabDirective));
    host().key.set('a');
    await fixture.whenStable();
    expect(service.activeItem()).toBe(directives[0].injector.get(TabDirective));
  });

  it('should derive the active item from the tabs of a re-created list', async () => {
    await fixture.whenStable();
    const service = fixture.debugElement.query(By.directive(TabsComponent)).injector.get(TabsService);
    host().list.set(false);
    await fixture.whenStable();
    expect(service.activeItem()).toBeUndefined();
    host().list.set(true);
    await fixture.whenStable();
    expect(service.activeItem()).toBe(
      fixture.debugElement.queryAll(By.directive(TabDirective))[0].injector.get(TabDirective)
    );
  });

  it('should write the key through the service to the bound model', async () => {
    await fixture.whenStable();
    const service = fixture.debugElement.query(By.directive(TabsComponent)).injector.get(TabsService);
    service.activeItemKey.set('b');
    await fixture.whenStable();
    expect(host().key()).toBe('b');
    expect(host().changes).toEqual(['b']);
    expect(tabs()[1].getAttribute('aria-selected')).toBe('true');
  });
});

@Component({
  template: `
    <c-tabs [(activeItemKey)]="key">
      <c-tabs-list>
        <button cTab itemKey="a">A</button>
        <button cTab itemKey="b" disabled>B</button>
        <button cTab itemKey="c">C</button>
      </c-tabs-list>
    </c-tabs>
  `,
  imports: [TabsComponent, TabsListComponent, TabDirective],
  encapsulation: ViewEncapsulation.ShadowDom
})
class ShadowTabsTestComponent {
  readonly key = signal<string | number | undefined>('b');
}

describe('TabsListComponent in a shadow root', () => {
  it('should keep a focused disabled tab focusable when focus leaves the window', async () => {
    const fixture = TestBed.createComponent(ShadowTabsTestComponent);
    await fixture.whenStable();
    const b: HTMLButtonElement = fixture.nativeElement.shadowRoot.querySelectorAll('button[cTab]')[1];
    b.focus();
    expect(fixture.nativeElement.shadowRoot.activeElement).toBe(b);
    fixture.componentInstance.key.set('c');
    await fixture.whenStable();
    b.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
    await fixture.whenStable();
    expect(b.hasAttribute('disabled')).toBe(false);
    expect(b.getAttribute('aria-disabled')).toBe('true');
    const c: HTMLButtonElement = fixture.nativeElement.shadowRoot.querySelectorAll('button[cTab]')[2];
    c.focus();
    await fixture.whenStable();
    expect(b.hasAttribute('disabled')).toBe(true);
  });
});

@Component({
  template: `
    <c-tabs [(activeItemKey)]="key">
      <c-tabs-list>
        @if (lazy()) {
          <button cTab [itemKey]="'z'">Z</button>
        }
        <button cTab itemKey="a">A</button>
        <button cTab itemKey="b">B</button>
      </c-tabs-list>
    </c-tabs>
  `,
  imports: [TabsComponent, TabsListComponent, TabDirective]
})
class MixedTabsTestComponent {
  readonly key = signal<string | number | undefined>(undefined);
  readonly lazy = signal(true);
}

describe('TabsListComponent with static and deferred tabs', () => {
  it('should wait for every tab before it selects the first one in DOM order', async () => {
    const fixture = TestBed.createComponent(MixedTabsTestComponent);
    await fixture.whenStable();
    const tabs: HTMLButtonElement[] = Array.from(fixture.nativeElement.querySelectorAll('button[cTab]'));
    expect(fixture.componentInstance.key()).toBe('z');
    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
    expect(tabs.map((tab) => tab.getAttribute('tabindex'))).toEqual(['0', '-1', '-1']);
  });
});

@Component({
  template: `
    <c-tabs activeItemKey="e">
      <c-tabs-list>
        <button cTab itemKey="a">A</button>
        <button cTab itemKey="b">B</button>
      </c-tabs-list>
      <c-tabs-list>
        <button cTab itemKey="c">C</button>
        <button cTab itemKey="d">D</button>
      </c-tabs-list>
      <c-tabs-list>
        <button cTab itemKey="g">G</button>
        <li><button cTab itemKey="e">E</button></li>
        <li><button cTab itemKey="f">F</button></li>
      </c-tabs-list>
    </c-tabs>
  `,
  imports: [TabsComponent, TabsListComponent, TabDirective]
})
class SeveralListsTestComponent {}

describe('TabsListComponent Tab stop per list', () => {
  it('should move between wrapped tabs with the arrow keys', async () => {
    const fixture = TestBed.createComponent(SeveralListsTestComponent);
    await fixture.whenStable();
    const [, e, f] = Array.from<HTMLButtonElement>(
      fixture.nativeElement.querySelectorAll('c-tabs-list')[2].querySelectorAll('button[cTab]')
    );
    e.focus();
    e.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', keyCode: 39, bubbles: true, cancelable: true }));
    await fixture.whenStable();
    expect(document.activeElement).toBe(f);
    expect(f.getAttribute('aria-selected')).toBe('true');
  });

  it('should give each list one Tab stop and keep wrapped tabs on the selected one', async () => {
    const fixture = TestBed.createComponent(SeveralListsTestComponent);
    await fixture.whenStable();
    const lists: HTMLElement[] = Array.from(fixture.nativeElement.querySelectorAll('c-tabs-list'));
    const stops = lists.map((list) =>
      Array.from(list.querySelectorAll('button[cTab]'))
        .filter((tab) => tab.getAttribute('tabindex') === '0')
        .map((tab) => tab.textContent)
    );
    expect(stops).toEqual([['A'], ['C'], ['E']]);
  });
});

@Component({
  selector: 'c-wrapped-tab',
  template: '<button cTab [itemKey]="key()">W</button>',
  imports: [TabDirective]
})
class WrappedTabComponent {
  readonly key = input.required<string>();
}

@Component({
  template: `
    <c-tabs [(activeItemKey)]="key">
      <c-tabs-list>
        <button cTab itemKey="a" [disabled]="firstDisabled()">A</button>
        <c-wrapped-tab key="w" />
      </c-tabs-list>
    </c-tabs>
    <c-tabs [(activeItemKey)]="split">
      <c-tabs-list>
        <button cTab itemKey="a1" disabled>A1</button>
        <button cTab itemKey="a2" disabled>A2</button>
      </c-tabs-list>
      <c-tabs-list>
        <button cTab itemKey="b1">B1</button>
        <button cTab itemKey="b2">B2</button>
      </c-tabs-list>
    </c-tabs>
    <c-tabs [(activeItemKey)]="allDisabled">
      <c-tabs-list>
        <button cTab itemKey="a1" disabled>A1</button>
      </c-tabs-list>
      <c-tabs-list>
        <button cTab itemKey="b1" disabled>B1</button>
      </c-tabs-list>
    </c-tabs>
    <c-tabs [(activeItemKey)]="outside">
      <c-tabs-list>
        <button cTab itemKey="a" disabled>A</button>
      </c-tabs-list>
      <button cTab itemKey="x">X</button>
    </c-tabs>
    <c-tabs [(activeItemKey)]="wrappedOnly">
      <c-tabs-list>
        <button cTab itemKey="a" disabled>A</button>
      </c-tabs-list>
      <c-tabs-list>
        <c-wrapped-tab key="w" />
      </c-tabs-list>
    </c-tabs>
  `,
  imports: [TabsComponent, TabsListComponent, TabDirective, WrappedTabComponent]
})
class ComponentTabTestComponent {
  readonly key = signal<string | number | undefined>('w');
  readonly firstDisabled = signal(false);
  readonly split = signal<string | number | undefined>(undefined);
  readonly allDisabled = signal<string | number | undefined>(undefined);
  readonly outside = signal<string | number | undefined>(undefined);
  readonly wrappedOnly = signal<string | number | undefined>(undefined);
}

describe('TabsListComponent with tabs from other templates and lists', () => {
  it('should give one Tab stop to a selected tab rendered by a child component', async () => {
    const fixture = TestBed.createComponent(ComponentTabTestComponent);
    await fixture.whenStable();
    const tabs: HTMLButtonElement[] = Array.from(
      fixture.nativeElement.querySelector('c-tabs').querySelectorAll('button[cTab]')
    );
    expect(tabs.map((tab) => tab.getAttribute('tabindex'))).toEqual(['-1', '0']);
  });

  it('should select a disabled first tab when the only enabled tab is rendered by a child component', async () => {
    const fixture = TestBed.createComponent(ComponentTabTestComponent);
    fixture.componentInstance.firstDisabled.set(true);
    await fixture.whenStable();
    fixture.componentInstance.key.set(undefined);
    await fixture.whenStable();
    expect(fixture.componentInstance.key()).toBe('a');
  });

  it('should select an enabled tab of another list over a disabled first tab', async () => {
    const fixture = TestBed.createComponent(ComponentTabTestComponent);
    await fixture.whenStable();
    expect(fixture.componentInstance.split()).toBe('b1');
  });

  it('should select the disabled first tab when no list has an enabled tab', async () => {
    const fixture = TestBed.createComponent(ComponentTabTestComponent);
    await fixture.whenStable();
    expect(fixture.componentInstance.allDisabled()).toBe('a1');
  });

  it('should not count an enabled tab outside every list against the default', async () => {
    const fixture = TestBed.createComponent(ComponentTabTestComponent);
    await fixture.whenStable();
    expect(fixture.componentInstance.outside()).toBe('a');
  });

  it('should not count a list of child component tabs against the default', async () => {
    const fixture = TestBed.createComponent(ComponentTabTestComponent);
    fixture.componentInstance.wrappedOnly.set('w');
    await fixture.whenStable();
    fixture.componentInstance.wrappedOnly.set(undefined);
    await fixture.whenStable();
    expect(fixture.componentInstance.wrappedOnly()).toBe('a');
  });
});
