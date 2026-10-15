import { Component, inputBinding, signal, WritableSignal } from '@angular/core';
import { ComponentFixture, DirectiveFixture, TestBed } from '@angular/core/testing';
import { TabContentRefDirective } from './tab-content-ref.directive';
import { TabContentComponent } from './tab-content/tab-content.component';
import { TabPaneComponent } from './tab-pane/tab-pane.component';

describe('TabContentRefDirective', () => {
  let disabled: WritableSignal<boolean>;
  let fixture: DirectiveFixture<TabContentRefDirective>;

  beforeEach(async () => {
    disabled = signal(false);
    fixture = TestBed.createDirective(TabContentRefDirective, {
      tagName: 'a',
      bindings: [inputBinding('cTabContent', () => undefined), inputBinding('disabled', disabled)]
    });
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should not set tabindex when enabled', () => {
    expect(fixture.nativeElement.getAttribute('tabindex')).toBeNull();
  });

  it('should set tabindex to -1 when disabled', async () => {
    disabled.set(true);
    await fixture.whenStable();
    expect(fixture.nativeElement.getAttribute('tabindex')).toBe('-1');
  });
});

@Component({
  template: `
    <a [cTabContent]="tabContent" [tabPaneIdx]="0" href id="tab0">A</a>
    <a [cTabContent]="tabContent" [tabPaneIdx]="1" [active]="activeTab1()" href id="tab1">B</a>
    <a [cTabContent]="tabContent" [tabPaneIdx]="2" href id="tab2">No pane</a>
    <c-tab-content #tabContent="cTabContent" [(activeTabPaneIdx)]="activePane">
      <c-tab-pane>Pane A</c-tab-pane>
      <c-tab-pane>Pane B</c-tab-pane>
    </c-tab-content>
  `,
  imports: [TabContentRefDirective, TabContentComponent, TabPaneComponent]
})
class TabsHostComponent {
  readonly activePane = signal(0);
  readonly activeTab1 = signal(false);
}

describe('TabContentRefDirective with tab panes', () => {
  let fixture: ComponentFixture<TabsHostComponent>;
  let tabs: HTMLElement[];
  let panes: HTMLElement[];

  const settle = async () => {
    await fixture.whenStable();
    await new Promise((resolve) => setTimeout(resolve));
    await fixture.whenStable();
  };

  beforeEach(async () => {
    fixture = TestBed.createComponent(TabsHostComponent);
    await settle();
    tabs = Array.from(fixture.nativeElement.querySelectorAll('a'));
    panes = Array.from(fixture.nativeElement.querySelectorAll('c-tab-pane'));
  });

  it('should activate the pane of a clicked tab', async () => {
    expect(panes[0].classList.contains('active')).toBe(true);

    tabs[1].click();
    await settle();

    expect(fixture.componentInstance.activePane()).toBe(1);
    expect(panes[1].classList.contains('active')).toBe(true);
    expect(panes[0].classList.contains('active')).toBe(false);
    expect(tabs[1].getAttribute('aria-selected')).toBe('true');
    expect(tabs[0].getAttribute('aria-selected')).toBe('false');
  });

  it('should disable a tab without a pane and keep the active pane on its click', async () => {
    expect(tabs[2].getAttribute('aria-disabled')).toBe('true');
    expect(tabs[2].hasAttribute('disabled')).toBe(true);
    expect(tabs[2].getAttribute('tabindex')).toBe('-1');

    tabs[2].click();
    await settle();

    expect(fixture.componentInstance.activePane()).toBe(0);
    expect(panes[0].classList.contains('active')).toBe(true);
    expect(tabs[2].getAttribute('aria-selected')).toBe('false');
  });

  it('should activate the pane of a tab set active', async () => {
    fixture.componentInstance.activeTab1.set(true);
    await settle();

    expect(fixture.componentInstance.activePane()).toBe(1);
    expect(panes[1].classList.contains('active')).toBe(true);
  });

  it('should select the tab of the pane set active on the content', async () => {
    fixture.componentInstance.activePane.set(1);
    await settle();

    expect(panes[1].classList.contains('active')).toBe(true);
    expect(tabs[1].getAttribute('aria-selected')).toBe('true');
    expect(tabs[0].getAttribute('aria-selected')).toBe('false');
  });
});
