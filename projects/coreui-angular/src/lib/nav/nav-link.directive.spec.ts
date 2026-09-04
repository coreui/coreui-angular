import { NavLinkDirective } from './nav-link.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ComponentRef, DebugElement, input } from '@angular/core';
import { By } from '@angular/platform-browser';

import { provideRouter } from '@angular/router';

import { NavGroupComponent } from './nav-group.component';
import { SidebarNavComponent } from '../sidebar/sidebar-nav/sidebar-nav.component';

@Component({
  template: '<a cNavLink [active]="active()" [disabled]="disabled()">test</a>',
  imports: [NavLinkDirective]
})
class TestComponent {
  readonly active = input(false);
  readonly disabled = input(false);
}

@Component({
  template: '<button cNavLink [disabled]="disabled()">test</button>',
  imports: [NavLinkDirective]
})
class TestButtonComponent {
  readonly disabled = input(false);
}

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
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let componentRef: ComponentRef<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    debugElement = fixture.debugElement.query(By.directive(NavLinkDirective));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(debugElement.injector.get(NavLinkDirective)).toBeTruthy();
  });

  it('should have css classes', () => {
        expect(debugElement.nativeElement.classList.contains('nav-link')).toBe(true);
  });

  it('should have css classes for active', () => {
        expect(debugElement.nativeElement.classList.contains('active')).toBe(false);
    componentRef.setInput('active', true);
    fixture.detectChanges();
        expect(debugElement.nativeElement.classList.contains('active')).toBe(true);
    componentRef.setInput('active', false);
    fixture.detectChanges();
        expect(debugElement.nativeElement.classList.contains('active')).toBe(false);
  });

  it('should have css classes for disabled', () => {
        expect(debugElement.nativeElement.classList.contains('disabled')).toBe(false);
    componentRef.setInput('disabled', true);
    fixture.detectChanges();
        expect(debugElement.nativeElement.classList.contains('disabled')).toBe(true);
    componentRef.setInput('disabled', false);
    fixture.detectChanges();
        expect(debugElement.nativeElement.classList.contains('disabled')).toBe(false);
  });

  it('should have aria-* attr for active', () => {
    expect(debugElement.nativeElement.getAttribute('aria-current')).not.toBe('page');
    componentRef.setInput('active', true);
    fixture.detectChanges();
    expect(debugElement.nativeElement.getAttribute('aria-current')).toBe('page');
  });

  it('should have attributes for disabled', () => {
    expect(debugElement.nativeElement.getAttribute('disabled')).toBeNull();
    expect(debugElement.nativeElement.getAttribute('aria-disabled')).not.toBeTruthy();
    expect(debugElement.nativeElement.getAttribute('tabindex')).not.toBe('-1');
    componentRef.setInput('disabled', true);
    fixture.detectChanges();
    expect(debugElement.nativeElement.getAttribute('disabled')).toBeNull();
    expect(debugElement.nativeElement.getAttribute('aria-disabled')).toBeTruthy();
    expect(debugElement.nativeElement.getAttribute('tabindex')).toBe('-1');
    componentRef.setInput('disabled', false);
    fixture.detectChanges();
  });
});

describe('NavLinkDirective on a button host', () => {
  let fixture: ComponentFixture<TestButtonComponent>;
  let componentRef: ComponentRef<TestButtonComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestButtonComponent);
    componentRef = fixture.componentRef;
    debugElement = fixture.debugElement.query(By.directive(NavLinkDirective));
    fixture.detectChanges();
  });

  it('should have disabled attr instead of aria-disabled', () => {
    componentRef.setInput('disabled', true);
    fixture.detectChanges();
    expect(debugElement.nativeElement.getAttribute('disabled')).not.toBeNull();
    expect(debugElement.nativeElement.getAttribute('aria-disabled')).not.toBeTruthy();
    expect(debugElement.nativeElement.getAttribute('tabindex')).not.toBe('-1');
  });
});

describe('NavLinkDirective in a nav group', () => {
  let fixture: ComponentFixture<TestNavGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestNavGroupComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestNavGroupComponent);
    fixture.detectChanges();
  });

  it('should open the group for an active link', () => {
    const group = fixture.nativeElement.querySelector('c-nav-group');
    expect(group.classList.contains('show')).toBe(false);

    fixture.componentRef.setInput('active', true);
    fixture.detectChanges();
    expect(group.classList.contains('show')).toBe(true);
  });
});

describe('NavLinkDirective in a sidebar nav with dropdownMode none', () => {
  let fixture: ComponentFixture<TestSidebarNavDropdownModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestSidebarNavDropdownModeComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(TestSidebarNavDropdownModeComponent);
    fixture.detectChanges();
  });

  it('should keep the group closed for an active link', () => {
    const group = fixture.nativeElement.querySelector('c-nav-group');

    fixture.componentRef.setInput('active', true);
    fixture.detectChanges();
    expect(group.classList.contains('show')).toBe(false);
  });

  it('should keep a nested group closed for an active link', () => {
    const [, nested] = fixture.nativeElement.querySelectorAll('c-nav-group');

    fixture.componentRef.setInput('nestedActive', true);
    fixture.detectChanges();
    expect(nested.classList.contains('show')).toBe(false);
  });
});
