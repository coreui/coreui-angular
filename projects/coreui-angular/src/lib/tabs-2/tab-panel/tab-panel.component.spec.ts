import { Component } from '@angular/core';
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
    fixture.detectChanges();

    component = fixture.componentInstance;
    fixture.detectChanges();
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
