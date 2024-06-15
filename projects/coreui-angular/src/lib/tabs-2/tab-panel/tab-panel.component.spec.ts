import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from '../tabs.component';
import { TabDirective } from '../tab/tab.directive';
import { TabsContentComponent } from '../tabs-content/tabs-content.component';
import { TabsListComponent } from '../tabs-list/tabs-list.component';
import { TabPanelComponent } from './tab-panel.component';

@Component({
  template: `
    <c-tabs activeItemKey="test-0">
      <c-tabs-list>
        <button cTab itemKey="test-0"></button>
        <button cTab itemKey="test-1"></button>
      </c-tabs-list>
      <c-tabs-content>
        <c-tab-panel itemKey="test-0">Tab panel 0 content</c-tab-panel>
        <c-tab-panel itemKey="test-1">Tab panel 1 content</c-tab-panel>
      </c-tabs-content>
    </c-tabs>
  `,
  standalone: true,
  imports: [TabPanelComponent, TabsComponent, TabDirective, TabsContentComponent, TabsListComponent]
})
class TestComponent {}

describe('TabPanelComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    const fixture = TestBed.configureTestingModule({
      imports: [TestComponent, NoopAnimationsModule]
    }).createComponent(TestComponent);
    fixture.detectChanges();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
