import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsComponent } from '../tabs.component';
import { TabDirective } from '../tab/tab.directive';
import { TabsContentComponent } from '../tabs-content/tabs-content.component';
import { TabsListComponent } from '../tabs-list/tabs-list.component';
import { TabPanelComponent } from './tab-panel.component';

@Component({
  template: `
    <c-tabs activeItemKey="test-2">
      <c-tabs-list>
        <button cTab itemKey="test-0"></button>
        <button cTab itemKey="test-1"></button>
        <button cTab itemKey="test-2"></button>
      </c-tabs-list>
      <c-tabs-content>
        <c-tab-panel itemKey="test-0">Tab panel 0 content</c-tab-panel>
        <c-tab-panel itemKey="test-1">Tab panel 1 content</c-tab-panel>
        <c-tab-panel itemKey="test-2">Tab panel 2 content</c-tab-panel>
      </c-tabs-content>
    </c-tabs>
  `,
  imports: [TabPanelComponent, TabsComponent, TabDirective, TabsContentComponent, TabsListComponent]
})
class TestComponent {}

describe('TabPanelComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    fixture = TestBed.configureTestingModule({
      imports: [TestComponent]
    }).createComponent(TestComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set tabindex on the visible panel and -1 on the hidden one', () => {
    const panels: HTMLElement[] = Array.from(fixture.nativeElement.querySelectorAll('c-tab-panel'));
    expect(panels[0].getAttribute('tabindex')).toBe('-1');
    expect(panels[1].getAttribute('tabindex')).toBe('-1');
    expect(panels[2].getAttribute('tabindex')).toBe('0');
  });
});

@Component({
  template: `
    <c-tabs [(activeItemKey)]="active">
      <c-tabs-content>
        <c-tab-panel itemKey="a" [transition]="transition()" style="transition-duration: 10s">
          <span id="child">A</span>
        </c-tab-panel>
        <c-tab-panel itemKey="b" [transition]="transition()" style="transition-duration: 10s">B</c-tab-panel>
      </c-tabs-content>
    </c-tabs>
  `,
  imports: [TabPanelComponent, TabsComponent, TabsContentComponent]
})
class TransitionTestComponent {
  readonly active = signal<string | number | undefined>('a');
  readonly transition = signal(true);
}

describe('TabPanelComponent show state', () => {
  let fixture: ComponentFixture<TransitionTestComponent>;
  let panels: HTMLElement[];

  const render = async () => {
    await fixture.whenStable();
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await fixture.whenStable();
    panels = Array.from(fixture.nativeElement.querySelectorAll('c-tab-panel'));
  };

  const transitionEnd = async (target: Element, propertyName: string) => {
    target.dispatchEvent(new TransitionEvent('transitionend', { propertyName, bubbles: true }));
    await fixture.whenStable();
  };

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionTestComponent);
  });

  it('should show the active panel at once without a transition', async () => {
    fixture.componentInstance.transition.set(false);
    await render();
    expect(panels[0].classList.contains('show')).toBe(true);
    expect(panels[0].classList.contains('fade')).toBe(false);

    fixture.componentInstance.active.set('b');
    await fixture.whenStable();
    expect(panels[1].classList.contains('show')).toBe(true);
    expect(panels[0].classList.contains('show')).toBe(false);
  });

  it('should show the active panel on its own opacity transitionend', async () => {
    await render();
    expect(panels[0].classList.contains('active')).toBe(true);
    expect(panels[0].classList.contains('show')).toBe(false);

    await transitionEnd(panels[0], 'transform');
    await transitionEnd(panels[0].querySelector('#child') as Element, 'opacity');
    expect(panels[0].classList.contains('show')).toBe(false);

    await transitionEnd(panels[0], 'opacity');
    expect(panels[0].classList.contains('show')).toBe(true);
  });
});

@Component({
  template: `
    <c-tabs [(activeItemKey)]="active">
      <c-tabs-list>
        <button cTab itemKey="a" [disabled]="disabledKeys().includes('a')">A</button>
        <button cTab itemKey="b" [disabled]="disabledKeys().includes('b')">B</button>
        <button cTab itemKey="c" [disabled]="disabledKeys().includes('c')">C</button>
      </c-tabs-list>
      <c-tabs-content>
        <c-tab-panel itemKey="a" [transition]="false">A</c-tab-panel>
        <c-tab-panel itemKey="b" [transition]="false">B</c-tab-panel>
        <c-tab-panel itemKey="c" [transition]="false">C</c-tab-panel>
      </c-tabs-content>
    </c-tabs>
  `,
  imports: [TabPanelComponent, TabsComponent, TabDirective, TabsContentComponent, TabsListComponent]
})
class DisabledTabTestComponent {
  readonly active = signal<string | number | undefined>('a');
  readonly disabledKeys = signal<string[]>([]);
}

describe('TabPanelComponent with a disabled tab', () => {
  let fixture: ComponentFixture<DisabledTabTestComponent>;
  let tabs: HTMLButtonElement[];
  let panels: HTMLElement[];

  const render = async () => {
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve));
    await fixture.whenStable();
    tabs = Array.from(fixture.nativeElement.querySelectorAll('button[cTab]'));
    panels = Array.from(fixture.nativeElement.querySelectorAll('c-tab-panel'));
  };

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledTabTestComponent);
  });

  it('should keep the selected panel visible when another tab is disabled', async () => {
    await render();
    tabs[2].focus();
    await fixture.whenStable();
    fixture.componentInstance.disabledKeys.set(['a']);
    await fixture.whenStable();
    expect(panels[2].classList.contains('active')).toBe(true);
    expect(panels.some((panel) => panel.classList.contains('invisible'))).toBe(false);
  });

  it('should keep a disabled selected tab selected with its panel visible', async () => {
    fixture.componentInstance.active.set('c');
    await render();
    fixture.componentInstance.disabledKeys.set(['c']);
    await fixture.whenStable();
    expect(tabs[2].getAttribute('aria-selected')).toBe('true');
    expect(tabs[2].classList.contains('active')).toBe(true);
    expect(panels[2].classList.contains('active')).toBe(true);
    expect(panels[2].getAttribute('aria-labelledby')).toBe(tabs[2].id);
    expect(panels.some((panel) => panel.classList.contains('invisible'))).toBe(false);
  });

  it('should select the first tab when every tab is disabled and no key is set', async () => {
    fixture.componentInstance.active.set(undefined);
    fixture.componentInstance.disabledKeys.set(['a', 'b', 'c']);
    await render();
    expect(fixture.componentInstance.active()).toBe('a');
    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
    expect(panels[0].classList.contains('active')).toBe(true);
  });

  it('should keep the first tab selected and reachable once the tabs are enabled', async () => {
    fixture.componentInstance.active.set(undefined);
    fixture.componentInstance.disabledKeys.set(['a', 'b', 'c']);
    await render();
    fixture.componentInstance.disabledKeys.set([]);
    await render();
    expect(fixture.componentInstance.active()).toBe('a');
    expect(tabs[0].disabled).toBe(false);
    expect(tabs[0].getAttribute('tabindex')).toBe('0');
  });
});
