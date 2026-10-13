import { Component, input, inputBinding, signal, WritableSignal } from '@angular/core';
import { ComponentFixture, DirectiveFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NavLinkDirective } from './nav-link.directive';
import { NavGroupComponent } from './nav-group.component';
import { SidebarNavComponent } from '../sidebar/sidebar-nav/sidebar-nav.component';

@Component({
  template: '<c-nav-group toggler="group"><a cNavLink [active]="active()">test</a></c-nav-group>',
  imports: [NavGroupComponent, NavLinkDirective]
})
class TestNavGroupComponent {
  readonly active = input(false);
}

@Component({
  template: `
    <c-sidebar-nav dropdownMode="none">
      <c-nav-group toggler="group">
        <a cNavLink [active]="active()">test</a>
        <c-nav-group toggler="nested">
          <a cNavLink [active]="nestedActive()">nested</a>
        </c-nav-group>
      </c-nav-group>
    </c-sidebar-nav>
  `,
  imports: [NavGroupComponent, NavLinkDirective, SidebarNavComponent]
})
class TestSidebarNavDropdownModeComponent {
  readonly active = input(false);
  readonly nestedActive = input(false);
}

describe('NavLinkDirective', () => {
  let active: WritableSignal<boolean>;
  let disabled: WritableSignal<boolean>;
  let fixture: DirectiveFixture<NavLinkDirective>;
  let element: Element;

  beforeEach(async () => {
    active = signal(false);
    disabled = signal(false);
    fixture = TestBed.createDirective(NavLinkDirective, {
      tagName: 'a',
      bindings: [inputBinding('active', active), inputBinding('disabled', disabled)]
    });
    element = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should create an instance', () => {
    expect(fixture.directiveInstance).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(element.classList.contains('nav-link')).toBe(true);
  });

  it('should have css classes for active', async () => {
    expect(element.classList.contains('active')).toBe(false);
    active.set(true);
    await fixture.whenStable();
    expect(element.classList.contains('active')).toBe(true);
    active.set(false);
    await fixture.whenStable();
    expect(element.classList.contains('active')).toBe(false);
  });

  it('should have css classes for disabled', async () => {
    expect(element.classList.contains('disabled')).toBe(false);
    disabled.set(true);
    await fixture.whenStable();
    expect(element.classList.contains('disabled')).toBe(true);
    disabled.set(false);
    await fixture.whenStable();
    expect(element.classList.contains('disabled')).toBe(false);
  });

  it('should have aria-* attr for active', async () => {
    expect(element.getAttribute('aria-current')).not.toBe('page');
    active.set(true);
    await fixture.whenStable();
    expect(element.getAttribute('aria-current')).toBe('page');
  });

  it('should have attributes for disabled', async () => {
    expect(element.getAttribute('disabled')).toBeNull();
    expect(element.getAttribute('aria-disabled')).not.toBeTruthy();
    expect(element.getAttribute('tabindex')).not.toBe('-1');
    disabled.set(true);
    await fixture.whenStable();
    expect(element.getAttribute('disabled')).toBeNull();
    expect(element.getAttribute('aria-disabled')).toBeTruthy();
    expect(element.getAttribute('tabindex')).toBe('-1');
  });
});

describe('NavLinkDirective on a button host', () => {
  it('should have disabled attr instead of aria-disabled', async () => {
    const fixture = TestBed.createDirective(NavLinkDirective, {
      tagName: 'button',
      bindings: [inputBinding('disabled', () => true)]
    });
    await fixture.whenStable();
    expect(fixture.nativeElement.getAttribute('disabled')).not.toBeNull();
    expect(fixture.nativeElement.getAttribute('aria-disabled')).not.toBeTruthy();
    expect(fixture.nativeElement.getAttribute('tabindex')).not.toBe('-1');
  });
});

describe('NavLinkDirective in a nav group', () => {
  let fixture: ComponentFixture<TestNavGroupComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [TestNavGroupComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestNavGroupComponent);
    await fixture.whenStable();
  });

  it('should open the group for an active link', async () => {
    const group = fixture.nativeElement.querySelector('c-nav-group');
    expect(group.classList.contains('show')).toBe(false);

    fixture.componentRef.setInput('active', true);
    await fixture.whenStable();
    expect(group.classList.contains('show')).toBe(true);
  });
});

describe('NavLinkDirective in a sidebar nav with dropdownMode none', () => {
  let fixture: ComponentFixture<TestSidebarNavDropdownModeComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [TestSidebarNavDropdownModeComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(TestSidebarNavDropdownModeComponent);
    await fixture.whenStable();
  });

  it('should keep the group closed for an active link', async () => {
    const group = fixture.nativeElement.querySelector('c-nav-group');

    fixture.componentRef.setInput('active', true);
    await fixture.whenStable();
    expect(group.classList.contains('show')).toBe(false);
  });

  it('should keep a nested group closed for an active link', async () => {
    const [, nested] = fixture.nativeElement.querySelectorAll('c-nav-group');

    fixture.componentRef.setInput('nestedActive', true);
    await fixture.whenStable();
    expect(nested.classList.contains('show')).toBe(false);
  });
});
