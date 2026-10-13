import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentComponent } from '../tab-content/tab-content.component';
import { TabService } from '../tab.service';
import { TabPaneComponent } from './tab-pane.component';

@Component({
  imports: [TabContentComponent, TabPaneComponent],
  template: `
    <c-tab-content [activeTabPaneIdx]="activeIdx()">
      <c-tab-pane>One</c-tab-pane>
      <c-tab-pane role="region">Two</c-tab-pane>
    </c-tab-content>
  `
})
class TestComponent {
  readonly activeIdx = signal(0);
}

@Component({
  imports: [TabPaneComponent],
  template: '<c-tab-pane />',
  changeDetection: ChangeDetectionStrategy.OnPush
})
class OnPushHostComponent {}

describe('TabPaneComponent', () => {
  let component: TabPaneComponent;
  let fixture: ComponentFixture<TabPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabPaneComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TabPaneComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('tab-pane')).toBe(true);
    expect(fixture.nativeElement.classList.contains('fade')).toBe(true);
    expect(fixture.nativeElement.classList.contains('active')).toBe(false);
    expect(fixture.nativeElement.classList.contains('show')).toBe(false);
  });

  it('should have the tab-pane class before the first change detection', () => {
    const element: HTMLElement = TestBed.createComponent(TabPaneComponent).nativeElement;
    expect(element.classList.contains('tab-pane')).toBe(true);
  });

  it('should have default role', () => {
    expect(fixture.nativeElement.getAttribute('role')).toBe('tabpanel');
  });

  it('should toggle active and show classes', async () => {
    component.active = true;
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('active')).toBe(true);
    expect(fixture.nativeElement.classList.contains('show')).toBe(true);

    component.active = false;
    await fixture.whenStable();
    expect(fixture.nativeElement.classList.contains('active')).toBe(false);
    expect(fixture.nativeElement.classList.contains('show')).toBe(false);
  });

  it('should follow the active index of its tab content', async () => {
    const hostFixture = TestBed.createComponent(TestComponent);
    await hostFixture.whenStable();

    const panes: HTMLElement[] = Array.from(hostFixture.nativeElement.querySelectorAll('c-tab-pane'));
    expect(panes.map((pane) => pane.classList.contains('active'))).toEqual([true, false]);
    expect(panes[1].getAttribute('role')).toBe('region');

    hostFixture.componentInstance.activeIdx.set(1);
    await hostFixture.whenStable();
    expect(panes.map((pane) => pane.classList.contains('active'))).toEqual([false, true]);
    expect(panes.map((pane) => pane.classList.contains('show'))).toEqual([false, true]);
  });

  it('should stop listening to the tab service on destroy', () => {
    const tabService = TestBed.inject(TabService);
    const tabContent = {} as TabContentComponent;
    component.tabContent = tabContent;
    component.tabPaneIdx = 0;
    tabService.setActiveTabIdx({ tabContent, activeIdx: 0 });
    expect(component.active).toBe(true);
    tabService.setActiveTabIdx({ tabContent, activeIdx: 1 });
    expect(component.active).toBe(false);
    fixture.destroy();

    tabService.setActiveTabIdx({ tabContent, activeIdx: 0 });
    expect(component.active).toBe(false);
  });

  it('should update its classes inside an OnPush host on a tab service change', async () => {
    const hostFixture = TestBed.createComponent(OnPushHostComponent);
    await hostFixture.whenStable();
    const pane = hostFixture.debugElement.children[0];
    const paneComponent: TabPaneComponent = pane.componentInstance;
    const tabContent = {} as TabContentComponent;
    paneComponent.tabContent = tabContent;
    paneComponent.tabPaneIdx = 0;

    TestBed.inject(TabService).setActiveTabIdx({ tabContent, activeIdx: 0 });
    await hostFixture.whenStable();
    expect(pane.nativeElement.classList.contains('active')).toBe(true);
    expect(pane.nativeElement.classList.contains('show')).toBe(true);
  });
});
