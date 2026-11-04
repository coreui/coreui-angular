import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TabDirective } from './tab/tab.directive';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { TabsContentComponent } from './tabs-content/tabs-content.component';
import { TabsListComponent } from './tabs-list/tabs-list.component';
import { TabsComponent } from './tabs.component';

@Component({
  template: '<c-tabs />',
  imports: [TabsComponent]
})
class TestComponent {}

@Component({
  template: `
    <c-tabs activeItemKey="a" [id]="tabsId()">
      <c-tabs-list>
        <button cTab itemKey="a" [id]="tabId()">A</button>
      </c-tabs-list>
      <c-tabs-content>
        <c-tab-panel itemKey="a" [id]="panelId()" [transition]="false">A</c-tab-panel>
      </c-tabs-content>
    </c-tabs>
  `,
  imports: [TabsComponent, TabsListComponent, TabDirective, TabsContentComponent, TabPanelComponent]
})
class IdTestComponent {
  readonly panelId = signal<string | null | undefined>('customPanel');
  readonly tabId = signal<string | null | undefined>('customTab');
  readonly tabsId = signal<string | null | undefined>('customTabs');
}

@Component({
  template: `
    <c-tabs activeItemKey="a">
      <c-tabs-list>
        <button cTab itemKey="a" [id]="tabId()">A</button>
        @if (showTabB()) {
          <button cTab itemKey="b" id="tabB" [aria-controls]="tabBControls()">B</button>
        }
      </c-tabs-list>
      <c-tabs-content>
        <c-tab-panel itemKey="a" [id]="panelId()" [transition]="false">A</c-tab-panel>
        @if (showPanelB()) {
          <c-tab-panel itemKey="b" id="panelB" [aria-labelledby]="panelBLabelledBy()" [transition]="false"
            >B</c-tab-panel
          >
        }
      </c-tabs-content>
    </c-tabs>
  `,
  imports: [TabsComponent, TabsListComponent, TabDirective, TabsContentComponent, TabPanelComponent]
})
class PairTestComponent {
  readonly panelBLabelledBy = signal<string | undefined>(undefined);
  readonly panelId = signal<string | null | undefined>('customPanel');
  readonly showPanelB = signal(false);
  readonly showTabB = signal(false);
  readonly tabBControls = signal<string | undefined>(undefined);
  readonly tabId = signal<string | null | undefined>('customTab');
}

@Component({
  template: `
    @for (group of groups; track group; let g = $index) {
      <c-tabs [activeItemKey]="0">
        <c-tabs-list>
          @for (key of group; track key) {
            <button cTab [itemKey]="key" [id]="'tab-' + g + '-' + key">Tab {{ key }}</button>
          }
        </c-tabs-list>
        <c-tabs-content>
          <c-tab-panel [itemKey]="0" [id]="'panel-' + g + '-0'" [transition]="false">Panel 0</c-tab-panel>
          <c-tab-panel [itemKey]="1" [id]="'panel-' + g + '-1'" [transition]="false">Panel 1</c-tab-panel>
        </c-tabs-content>
      </c-tabs>
    }
  `,
  imports: [TabsComponent, TabsListComponent, TabDirective, TabsContentComponent, TabPanelComponent]
})
class KeyPairTestComponent {
  readonly groups = [
    [1, 0],
    [0, 1]
  ];
}

describe('TabsComponent', () => {
  let component: TabsComponent;

  beforeEach(async () => {
    const fixture = TestBed.createComponent(TestComponent);
    await fixture.whenStable();

    component = fixture.debugElement.query(By.directive(TabsComponent)).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('TabsComponent ids', () => {
  it('accepts null for the tabs, tab and panel id and falls back to the generated ids, like undefined', async () => {
    const fixture = TestBed.createComponent(IdTestComponent);
    await fixture.whenStable();
    const tabs: HTMLElement = fixture.nativeElement.querySelector('c-tabs');
    const tab: HTMLButtonElement = fixture.nativeElement.querySelector('button[cTab]');
    const panel: HTMLElement = fixture.nativeElement.querySelector('c-tab-panel');
    expect(tabs.id).toBe('customTabs');
    expect(tab.id).toBe('customTab');
    expect(panel.id).toBe('customPanel');

    fixture.componentInstance.tabId.set(null);
    fixture.componentInstance.panelId.set(null);
    await fixture.whenStable();
    expect(tab.id).toBe('customTabs-tab-a');
    expect(panel.id).toBe('customTabs-panel-a');

    for (const value of [null, undefined]) {
      fixture.componentInstance.tabsId.set(value);
      fixture.componentInstance.tabId.set(value);
      fixture.componentInstance.panelId.set(value);
      await fixture.whenStable();
      expect(tabs.id).toMatch(/^tabs-\d+$/);
      expect(tab.id).toBe(`${tabs.id}-tab-a`);
      expect(panel.id).toBe(`${tabs.id}-panel-a`);
    }
  });
});

describe('TabsComponent tab and panel pairing', () => {
  let fixture: ComponentFixture<PairTestComponent>;

  const tab = (index: number): HTMLButtonElement => fixture.nativeElement.querySelectorAll('button[cTab]')[index];
  const panel = (index: number): HTMLElement => fixture.nativeElement.querySelectorAll('c-tab-panel')[index];

  beforeEach(async () => {
    fixture = TestBed.createComponent(PairTestComponent);
    await fixture.whenStable();
  });

  it('points aria-controls at the custom panel id and follows its changes', async () => {
    expect(tab(0).getAttribute('aria-controls')).toBe('customPanel');
    fixture.componentInstance.panelId.set('otherPanel');
    await fixture.whenStable();
    expect(tab(0).getAttribute('aria-controls')).toBe('otherPanel');
    fixture.componentInstance.panelId.set(null);
    await fixture.whenStable();
    expect(tab(0).getAttribute('aria-controls')).toBe(panel(0).id);
  });

  it('points aria-labelledby at the custom tab id and follows its changes', async () => {
    expect(panel(0).getAttribute('aria-labelledby')).toBe('customTab');
    fixture.componentInstance.tabId.set('otherTab');
    await fixture.whenStable();
    expect(panel(0).getAttribute('aria-labelledby')).toBe('otherTab');
    fixture.componentInstance.tabId.set(null);
    await fixture.whenStable();
    expect(panel(0).getAttribute('aria-labelledby')).toBe(tab(0).id);
  });

  it('points aria-controls of a tab without a panel at the default panel id and at the panel id while it is rendered', async () => {
    fixture.componentInstance.showTabB.set(true);
    await fixture.whenStable();
    const defaultPanelId = `${fixture.nativeElement.querySelector('c-tabs').id}-panel-b`;
    expect(tab(1).getAttribute('aria-controls')).toBe(defaultPanelId);
    fixture.componentInstance.showPanelB.set(true);
    await fixture.whenStable();
    expect(tab(1).getAttribute('aria-controls')).toBe('panelB');
    fixture.componentInstance.showPanelB.set(false);
    await fixture.whenStable();
    expect(tab(1).getAttribute('aria-controls')).toBe(defaultPanelId);
  });

  it('points aria-labelledby of a panel without a tab at the default tab id and at the tab id while it is rendered', async () => {
    fixture.componentInstance.showPanelB.set(true);
    await fixture.whenStable();
    const defaultTabId = `${fixture.nativeElement.querySelector('c-tabs').id}-tab-b`;
    expect(panel(1).getAttribute('aria-labelledby')).toBe(defaultTabId);
    fixture.componentInstance.showTabB.set(true);
    await fixture.whenStable();
    expect(panel(1).getAttribute('aria-labelledby')).toBe('tabB');
    fixture.componentInstance.showTabB.set(false);
    await fixture.whenStable();
    expect(panel(1).getAttribute('aria-labelledby')).toBe(defaultTabId);
  });

  it('keeps an explicit aria-controls on a tab without a panel', async () => {
    fixture.componentInstance.tabBControls.set('ownPanel');
    fixture.componentInstance.showTabB.set(true);
    await fixture.whenStable();
    expect(tab(1).getAttribute('aria-controls')).toBe('ownPanel');
  });

  it('keeps an explicit aria-labelledby on a panel without a tab', async () => {
    fixture.componentInstance.panelBLabelledBy.set('ownTab');
    fixture.componentInstance.showPanelB.set(true);
    await fixture.whenStable();
    expect(panel(1).getAttribute('aria-labelledby')).toBe('ownTab');
  });
});

describe('TabsComponent tab and panel pairing by item key', () => {
  let tabs: HTMLButtonElement[];
  let panels: HTMLElement[];

  beforeEach(async () => {
    const fixture = TestBed.createComponent(KeyPairTestComponent);
    await fixture.whenStable();
    tabs = Array.from(fixture.nativeElement.querySelectorAll('button[cTab]'));
    panels = Array.from(fixture.nativeElement.querySelectorAll('c-tab-panel'));
  });

  it('pairs numeric item keys, 0 included, regardless of order', () => {
    expect(tabs[0].getAttribute('aria-controls')).toBe('panel-0-1');
    expect(tabs[1].getAttribute('aria-controls')).toBe('panel-0-0');
    expect(panels[0].getAttribute('aria-labelledby')).toBe('tab-0-0');
    expect(panels[1].getAttribute('aria-labelledby')).toBe('tab-0-1');
  });

  it('pairs a tab and a panel only within the same c-tabs', () => {
    expect(tabs[2].getAttribute('aria-controls')).toBe('panel-1-0');
    expect(tabs[3].getAttribute('aria-controls')).toBe('panel-1-1');
    expect(panels[2].getAttribute('aria-labelledby')).toBe('tab-1-0');
    expect(panels[3].getAttribute('aria-labelledby')).toBe('tab-1-1');
  });
});
