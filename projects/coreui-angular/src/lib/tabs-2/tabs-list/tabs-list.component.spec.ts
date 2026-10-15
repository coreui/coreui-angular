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
          <button cTab itemKey="c">C</button>
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
}

describe('TabsListComponent keyboard', () => {
  let fixture: ComponentFixture<KeyboardTestComponent>;
  let tabs: HTMLButtonElement[];

  const keydown = async (key: string) => {
    const keyCode = { ArrowDown: 40, ArrowLeft: 37, ArrowRight: 39 }[key];
    document.activeElement?.dispatchEvent(
      new KeyboardEvent('keydown', { key, keyCode, bubbles: true, cancelable: true })
    );
    await fixture.whenStable();
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

  it('should skip a disabled tab', async () => {
    fixture.componentInstance.disabledKey.set('b');
    await render();
    tabs[0].focus();
    await keydown('ArrowRight');
    expect(document.activeElement).toBe(tabs[2]);
    expect(fixture.componentInstance.activeItemKey()).toBe('c');
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
});
