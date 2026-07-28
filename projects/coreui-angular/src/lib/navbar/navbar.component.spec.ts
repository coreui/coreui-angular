import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Subject } from 'rxjs';
import { expect, Mock, vi } from 'vitest';

import { CollapseDirective } from '../collapse';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('navbar')).toBe(true);
  });

  it('should have container class', () => {
    fixture.componentRef.setInput('expand', 'xl');
    fixture.componentRef.setInput('container', 'sm');
    fixture.detectChanges();
    expect(fixture.componentInstance.containerClass()).toBe('container-sm');
    expect(fixture.componentInstance.breakpoint()).toBe('');
  });
});

@Component({
  selector: 'c-test-navbar',
  standalone: true,
  imports: [NavbarComponent, CollapseDirective],
  template: `
    <c-navbar [expand]="expand()">
      <div cCollapse>Navbar content</div>
    </c-navbar>
  `
})
class TestNavbarComponent {
  readonly expand = signal<'md' | undefined>('md');
}

describe('NavbarComponent with BreakpointObserver', () => {
  let fixture: ComponentFixture<TestNavbarComponent>;
  let breakpointSubject: Subject<BreakpointState>;
  let breakpointObserver: { observe: Mock };
  let collapseDirective: CollapseDirective;

  beforeEach(async () => {
    vi.useFakeTimers();

    breakpointSubject = new Subject<BreakpointState>();
    breakpointObserver = { observe: vi.fn() };
    breakpointObserver.observe.mockReturnValue(breakpointSubject.asObservable());

    await TestBed.configureTestingModule({
      imports: [TestNavbarComponent],
      providers: [provideAnimationsAsync(), { provide: BreakpointObserver, useValue: breakpointObserver }]
    }).compileComponents();

    fixture = TestBed.createComponent(TestNavbarComponent);

    // Set up CSS custom property for breakpoint
    const navbarElement = fixture.nativeElement.querySelector('c-navbar');
    navbarElement.style.setProperty('--cui-breakpoint-md', '768px');

    // Trigger initial change detection
    fixture.detectChanges();

    // Run timers to let afterEveryRender execute
    await vi.runAllTimersAsync();

    // Detect changes again to trigger the effect
    fixture.detectChanges();

    // Run timers again for any async operations
    await vi.runAllTimersAsync();

    await fixture.whenStable();

    // Get the CollapseDirective instance
    const collapseElement = fixture.nativeElement.querySelector('[cCollapse]');
    expect(collapseElement).toBeTruthy();
    collapseDirective = fixture.debugElement
      .query((el) => el.nativeElement === collapseElement)
      ?.injector.get(CollapseDirective) as CollapseDirective;
    expect(collapseDirective).toBeTruthy();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should subscribe to BreakpointObserver when expand is set to a breakpoint', async () => {
    // After the component initializes with expand="md", it should observe breakpoints
    await fixture.whenStable();
    expect(breakpointObserver.observe).toHaveBeenCalledWith([expect.stringMatching(/\(min-width: .*\)/)]);
  });

  it('should toggle collapse directive when breakpoint matches change from false to true', async () => {
    vi.spyOn(collapseDirective, 'toggle');

    // Emit matches: false (below breakpoint - navbar should collapse)
    breakpointSubject.next({ matches: false, breakpoints: {} });
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    expect(collapseDirective.toggle).toHaveBeenCalledWith(false);

    // Reset the spy
    (collapseDirective.toggle as Mock).mockClear();

    // Emit matches: true (above breakpoint - navbar should expand)
    breakpointSubject.next({ matches: true, breakpoints: {} });
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    expect(collapseDirective.toggle).toHaveBeenCalledWith(true);
  });

  it('should toggle collapse directive when breakpoint matches change from true to false', async () => {
    vi.spyOn(collapseDirective, 'toggle');

    // Emit matches: true (above breakpoint - navbar should expand)
    breakpointSubject.next({ matches: true, breakpoints: {} });
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    expect(collapseDirective.toggle).toHaveBeenCalledWith(true);

    // Reset the spy
    (collapseDirective.toggle as Mock).mockClear();

    // Emit matches: false (below breakpoint - navbar should collapse)
    breakpointSubject.next({ matches: false, breakpoints: {} });
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    expect(collapseDirective.toggle).toHaveBeenCalledWith(false);
  });

  it('should disable animations temporarily when toggling via breakpoint observer', async () => {
    const originalAnimate = collapseDirective.animate();
    collapseDirective.animate.set(true);

    vi.spyOn(collapseDirective.animate, 'set');

    // Emit a breakpoint change
    breakpointSubject.next({ matches: true, breakpoints: {} });
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    // Should first disable animations
    expect(collapseDirective.animate.set).toHaveBeenCalledWith(false);

    // Should eventually restore animations
    expect(collapseDirective.animate.set).toHaveBeenCalledWith(originalAnimate);
  });

  it('should unsubscribe from BreakpointObserver when component is destroyed', async () => {
    // Emit a value to ensure subscription is active
    breakpointSubject.next({ matches: false, breakpoints: {} });
    fixture.detectChanges();
    await vi.runAllTimersAsync();

    const subscriberCount = breakpointSubject.observers.length;
    expect(subscriberCount).toBeGreaterThan(0);

    // Destroy the component
    fixture.destroy();

    // Subscription should be cleaned up
    expect(breakpointSubject.observers.length).toBe(0);
  });
});
