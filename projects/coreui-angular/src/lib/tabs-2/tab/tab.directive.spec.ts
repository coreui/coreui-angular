import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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

    beforeEach(async () => {
      fixture = TestBed.createComponent(TestComponent);
      await fixture.whenStable();
      await new Promise((resolve) => setTimeout(resolve));
      await fixture.whenStable();
      tabs = Array.from(fixture.nativeElement.querySelectorAll('button[cTab]'));
    });

    it('should set tabindex 0 on the active tab and -1 on the others', () => {
      expect(tabs[0].getAttribute('tabindex')).toBe('-1');
      expect(tabs[1].getAttribute('tabindex')).toBe('0');
      expect(tabs[2].getAttribute('tabindex')).toBe('-1');
    });

    it('should select a tab on click', async () => {
      tabs[2].click();
      await fixture.whenStable();
      expect(tabs[2].getAttribute('aria-selected')).toBe('true');
      expect(tabs[1].getAttribute('aria-selected')).toBe('false');
    });

    it('should focus its host on focus()', () => {
      const directive = fixture.debugElement.queryAll(By.directive(TabDirective))[2].injector.get(TabDirective);
      directive.focus();
      expect(document.activeElement).toBe(tabs[2]);
    });

    it('should keep the active tab selected when disabled through the setter', async () => {
      const directive = fixture.debugElement.queryAll(By.directive(TabDirective))[1].injector.get(TabDirective);
      directive.disabled = true;
      await fixture.whenStable();
      expect(directive.disabled).toBe(true);
      expect(tabs[1].hasAttribute('disabled')).toBe(true);
      expect(tabs[1].getAttribute('aria-selected')).toBe('true');
    });
  });
});
