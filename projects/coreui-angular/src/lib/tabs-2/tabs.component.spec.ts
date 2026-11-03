import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
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
