import { Component, signal } from '@angular/core';
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
    fixture.detectChanges();
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

  it('should have default role', () => {
    expect(fixture.nativeElement.getAttribute('role')).toBe('tabpanel');
  });

  it('should toggle active and show classes', () => {
    component.active = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('active')).toBe(true);
    expect(fixture.nativeElement.classList.contains('show')).toBe(true);

    component.active = false;
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('active')).toBe(false);
    expect(fixture.nativeElement.classList.contains('show')).toBe(false);
  });

  it('should follow the active index of its tab content', async () => {
    const hostFixture = TestBed.createComponent(TestComponent);
    await hostFixture.whenStable();
    hostFixture.detectChanges();

    const panes: HTMLElement[] = Array.from(hostFixture.nativeElement.querySelectorAll('c-tab-pane'));
    expect(panes.map((pane) => pane.classList.contains('active'))).toEqual([true, false]);
    expect(panes[1].getAttribute('role')).toBe('region');

    hostFixture.componentInstance.activeIdx.set(1);
    hostFixture.detectChanges();
    expect(panes.map((pane) => pane.classList.contains('active'))).toEqual([false, true]);
    expect(panes.map((pane) => pane.classList.contains('show'))).toEqual([false, true]);
  });

  it('should stop listening to the tab service on destroy', () => {
    const tabService = TestBed.inject(TabService);
    const tabContent = {} as TabContentComponent;
    component.tabContent = tabContent;
    component.tabPaneIdx = 0;
    fixture.destroy();

    tabService.setActiveTabIdx({ tabContent, activeIdx: 0 });
    expect(component.active).toBe(false);
  });
});
