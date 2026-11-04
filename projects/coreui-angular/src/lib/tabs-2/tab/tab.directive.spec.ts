import { Component, ElementRef, Renderer2, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';
import { TabsComponent } from '../tabs.component';
import { TabsContentComponent } from '../tabs-content/tabs-content.component';
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

@Component({
  template: `
    <c-tabs activeItemKey="a">
      <c-tabs-list>
        <button cTab itemKey="a" [aria-controls]="controls()">A</button>
      </c-tabs-list>
      <c-tabs-content>
        <c-tab-panel itemKey="a" id="pairedPanel" [transition]="false">A</c-tab-panel>
      </c-tabs-content>
    </c-tabs>
    <div id="customPanel">Panel</div>
  `,
  imports: [TabsComponent, TabsListComponent, TabDirective, TabsContentComponent, TabPanelComponent]
})
class ControlsTestComponent {
  readonly controls = signal<string | null | undefined>('customPanel');
}

@Component({
  template: `
    <c-tabs activeItemKey="b">
      <button cTab itemKey="a">A</button>
      <button cTab itemKey="b">B</button>
    </c-tabs>
  `,
  imports: [TabsComponent, TabDirective]
})
class NoListTestComponent {}

@Component({
  template: `
    <c-tabs>
      <button cTab itemKey="a">A</button>
      <button cTab itemKey="b">B</button>
    </c-tabs>
  `,
  imports: [TabsComponent, TabDirective]
})
class NoListNoKeyTestComponent {}

@Component({
  template: `
    <c-tabs activeItemKey="b">
      <c-tabs-list (click)="clicks.push('list')">
        <button cTab itemKey="a" disabled (click)="clicks.push('a')"><span>A</span></button>
        <button cTab itemKey="b" disabled (click)="clicks.push('b')">B</button>
        <button cTab itemKey="c" (click)="clicks.push('c')">C</button>
        <button cTab itemKey="d" (click)="clicks.push('d')">D</button>
      </c-tabs-list>
    </c-tabs>
  `,
  imports: [TabsComponent, TabsListComponent, TabDirective]
})
class StaticDisabledTestComponent {
  readonly clicks: string[] = [];
}

describe('TabDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabsService, { provide: ElementRef, useClass: MockElementRef }, { provide: Renderer2, useValue: {} }]
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
      expect(tabs[1].getAttribute('aria-disabled')).toBe('true');
      expect(tabs[1].getAttribute('aria-selected')).toBe('true');
    });

    it('should ignore a click on a tab disabled through the setter before change detection', async () => {
      const directive = fixture.debugElement.queryAll(By.directive(TabDirective))[2].injector.get(TabDirective);
      directive.disabled = true;
      tabs[2].click();
      await fixture.whenStable();
      expect(tabs[1].getAttribute('aria-selected')).toBe('true');
      expect(tabs[2].getAttribute('aria-selected')).toBe('false');
    });
  });

  it('should keep a static disabled attribute only on a disabled tab that is not selected', async () => {
    const fixture = TestBed.createComponent(StaticDisabledTestComponent);
    await fixture.whenStable();
    const tabs: HTMLButtonElement[] = Array.from(fixture.nativeElement.querySelectorAll('button[cTab]'));
    expect(tabs.map((tab) => tab.hasAttribute('disabled'))).toEqual([true, false, false, false]);
    expect(tabs.map((tab) => tab.getAttribute('aria-disabled'))).toEqual([null, 'true', null, null]);
    expect(tabs.map((tab) => tab.getAttribute('tabindex'))).toEqual(['-1', '0', '-1', '-1']);
  });

  it('should not pass a click on a disabled tab to the page', async () => {
    const fixture = TestBed.createComponent(StaticDisabledTestComponent);
    await fixture.whenStable();
    const tabs: HTMLButtonElement[] = Array.from(fixture.nativeElement.querySelectorAll('button[cTab]'));
    const click = new MouseEvent('click', { bubbles: true, cancelable: true });
    tabs[0].dispatchEvent(click);
    tabs[0].querySelector('span')!.click();
    tabs[1].click();
    fixture.debugElement.queryAll(By.directive(TabDirective))[3].injector.get(TabDirective).disabled = true;
    tabs[3].click();
    tabs[2].click();
    await fixture.whenStable();
    expect(click.defaultPrevented).toBe(true);
    expect(fixture.componentInstance.clicks).toEqual(['c', 'list']);
    expect(tabs[2].getAttribute('aria-selected')).toBe('true');
  });

  it('should not select a disabled tab when its click handler runs without the DOM event', async () => {
    const fixture = TestBed.createComponent(StaticDisabledTestComponent);
    await fixture.whenStable();
    fixture.debugElement.queryAll(By.directive(TabDirective))[0].triggerEventHandler('click', new MouseEvent('click'));
    await fixture.whenStable();
    const tabs: HTMLButtonElement[] = Array.from(fixture.nativeElement.querySelectorAll('button[cTab]'));
    expect(tabs.map((tab) => tab.getAttribute('aria-selected'))).toEqual(['false', 'true', 'false', 'false']);
  });

  it('should not select a default tab outside a tabs list', async () => {
    const fixture = TestBed.createComponent(NoListNoKeyTestComponent);
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve));
    const tabs: HTMLButtonElement[] = Array.from(fixture.nativeElement.querySelectorAll('button[cTab]'));
    expect(tabs.map((tab) => tab.getAttribute('aria-selected'))).toEqual(['false', 'false']);
  });

  it('should keep the Tab stop on the selected tab outside a tabs list', async () => {
    const fixture = TestBed.createComponent(NoListTestComponent);
    await fixture.whenStable();
    const tabs: HTMLButtonElement[] = Array.from(fixture.nativeElement.querySelectorAll('button[cTab]'));
    expect(tabs.map((tab) => tab.getAttribute('tabindex'))).toEqual(['-1', '0']);
  });

  it('accepts null for aria-controls and falls back to the paired panel id, like undefined', async () => {
    const fixture = TestBed.createComponent(ControlsTestComponent);
    await fixture.whenStable();
    const tab: HTMLButtonElement = fixture.nativeElement.querySelector('button[cTab]');
    expect(tab.getAttribute('aria-controls')).toBe('customPanel');
    fixture.componentInstance.controls.set(null);
    await fixture.whenStable();
    expect(tab.getAttribute('aria-controls')).toBe('pairedPanel');
    fixture.componentInstance.controls.set('customPanel');
    await fixture.whenStable();
    fixture.componentInstance.controls.set(undefined);
    await fixture.whenStable();
    expect(tab.getAttribute('aria-controls')).toBe('pairedPanel');
  });
});
