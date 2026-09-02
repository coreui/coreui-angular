import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsComponent } from '../tabs.component';
import { TabsListComponent } from '../tabs-list/tabs-list.component';
import { TabsService } from '../tabs.service';
import { TabDirective } from './tab.directive';

class MockElementRef extends ElementRef {}

@Component({
  template: `
    <c-tabs activeItemKey="test-1">
      <c-tabs-list>
        <button cTab itemKey="test-0"></button>
        <button cTab itemKey="test-1"></button>
        <button cTab itemKey="test-2"></button>
      </c-tabs-list>
    </c-tabs>
  `,
  imports: [TabsComponent, TabsListComponent, TabDirective]
})
class TestComponent {}

describe('TabDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabsService, { provide: ElementRef, useClass: MockElementRef }]
    });
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new TabDirective();
      expect(directive).toBeTruthy();
    });
  });

  describe('in a tabs list', () => {
    let fixture: ComponentFixture<TestComponent>;
    let tabs: HTMLButtonElement[];

    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      tabs = Array.from(fixture.nativeElement.querySelectorAll('button[cTab]'));
    });

    it('should set tabindex 0 on the active tab and -1 on the others', () => {
      expect(tabs[0].getAttribute('tabindex')).toBe('-1');
      expect(tabs[1].getAttribute('tabindex')).toBe('0');
      expect(tabs[2].getAttribute('tabindex')).toBe('-1');
    });
  });
});
