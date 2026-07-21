import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, signal } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Subject } from 'rxjs';

import { CollapseDirective } from '../collapse';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NavbarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('navbar');
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
  let breakpointObserver: jasmine.SpyObj<BreakpointObserver>;
  let collapseDirective: CollapseDirective;

  beforeEach(waitForAsync(() => {
    breakpointSubject = new Subject<BreakpointState>();
    breakpointObserver = jasmine.createSpyObj('BreakpointObserver', ['observe']);
    breakpointObserver.observe.and.returnValue(breakpointSubject.asObservable());

    TestBed.configureTestingModule({
      imports: [TestNavbarComponent],
      providers: [provideAnimationsAsync(), { provide: BreakpointObserver, useValue: breakpointObserver }]
    }).compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(TestNavbarComponent);

    // Set up CSS custom property for breakpoint
    const navbarElement = fixture.nativeElement.querySelector('c-navbar');
    navbarElement.style.setProperty('--cui-breakpoint-md', '768px');

    fixture.detectChanges();
    flush();

    // Get the CollapseDirective instance
    const collapseElement = fixture.nativeElement.querySelector('[cCollapse]');
    expect(collapseElement).toBeTruthy();
    collapseDirective = fixture.debugElement
      .query((el) => el.nativeElement === collapseElement)
      ?.injector.get(CollapseDirective) as CollapseDirective;
    expect(collapseDirective).toBeTruthy();
  }));

  it('should subscribe to BreakpointObserver when expand is set to a breakpoint', fakeAsync(() => {
    // After the component initializes with expand="md", it should observe breakpoints
    flush();
    expect(breakpointObserver.observe).toHaveBeenCalledWith([jasmine.stringMatching(/\(min-width: .*\)/)]);
  }));

  it('should toggle collapse directive when breakpoint matches change from false to true', fakeAsync(() => {
    spyOn(collapseDirective, 'toggle').and.callThrough();

    // Emit matches: false (below breakpoint - navbar should collapse)
    breakpointSubject.next({ matches: false, breakpoints: {} });
    tick();
    flush();

    expect(collapseDirective.toggle).toHaveBeenCalledWith(false);

    // Reset the spy
    (collapseDirective.toggle as jasmine.Spy).calls.reset();

    // Emit matches: true (above breakpoint - navbar should expand)
    breakpointSubject.next({ matches: true, breakpoints: {} });
    tick();
    flush();

    expect(collapseDirective.toggle).toHaveBeenCalledWith(true);
  }));

  it('should toggle collapse directive when breakpoint matches change from true to false', fakeAsync(() => {
    spyOn(collapseDirective, 'toggle').and.callThrough();

    // Emit matches: true (above breakpoint - navbar should expand)
    breakpointSubject.next({ matches: true, breakpoints: {} });
    tick();
    flush();

    expect(collapseDirective.toggle).toHaveBeenCalledWith(true);

    // Reset the spy
    (collapseDirective.toggle as jasmine.Spy).calls.reset();

    // Emit matches: false (below breakpoint - navbar should collapse)
    breakpointSubject.next({ matches: false, breakpoints: {} });
    tick();
    flush();

    expect(collapseDirective.toggle).toHaveBeenCalledWith(false);
  }));

  it('should disable animations temporarily when toggling via breakpoint observer', fakeAsync(() => {
    const originalAnimate = collapseDirective.animate();
    collapseDirective.animate.set(true);

    spyOn(collapseDirective.animate, 'set').and.callThrough();

    // Emit a breakpoint change
    breakpointSubject.next({ matches: true, breakpoints: {} });
    tick();

    // Should first disable animations
    expect(collapseDirective.animate.set).toHaveBeenCalledWith(false);

    flush();

    // Should eventually restore animations
    expect(collapseDirective.animate.set).toHaveBeenCalledWith(originalAnimate);
  }));

  it('should unsubscribe from BreakpointObserver when component is destroyed', fakeAsync(() => {
    // Emit a value to ensure subscription is active
    breakpointSubject.next({ matches: false, breakpoints: {} });
    tick();
    flush();

    const subscriberCount = breakpointSubject.observers.length;
    expect(subscriberCount).toBeGreaterThan(0);

    // Destroy the component
    fixture.destroy();

    // Subscription should be cleaned up
    expect(breakpointSubject.observers.length).toBe(0);
  }));
});
