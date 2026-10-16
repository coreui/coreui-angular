import { FocusKeyManager } from '@angular/cdk/a11y';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ComponentRef, signal } from '@angular/core';

import { TabsListComponent } from './tabs-list.component';
import { TabsService } from '../tabs.service';
import { TabsComponent } from '../tabs.component';
import { TabDirective } from '../tab/tab.directive';

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
