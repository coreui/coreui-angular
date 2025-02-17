import { Component, DebugElement, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { NavbarTogglerDirective } from './navbar-toggler.directive';
import { By } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CollapseDirective } from '../../collapse';

class MockElementRef extends ElementRef {}

@Component({
  imports: [NavbarTogglerDirective, CollapseDirective],
  template: `
    <button [cNavbarToggler]="collapseRef"></button>
    <div #collapseRef="cCollapse" navbar cCollapse></div>
  `
})
class TestComponent {}

describe('NavbarTogglerDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;
  let debugElementCollapse: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [Renderer2, { provide: ElementRef, useValue: MockElementRef }, provideAnimationsAsync()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(NavbarTogglerDirective));
    debugElementCollapse = fixture.debugElement.query(By.directive(CollapseDirective));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new NavbarTogglerDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes', () => {
    expect(debugElement.nativeElement).toHaveClass('navbar-toggler');
  });

  it('should have default aria-label', () => {
    expect(debugElement.nativeElement.getAttribute('aria-label')).toBe('Toggle navigation');
  });

  it('should have default type', () => {
    expect(debugElement.nativeElement.getAttribute('type')).toBe('button');
  });

  it('should toggle collapse on click', fakeAsync(() => {
    const collapseRef = debugElementCollapse.injector.get(CollapseDirective);
    expect(collapseRef.visible()).toBeFalse();
    fixture.autoDetectChanges();
    debugElement.nativeElement.dispatchEvent(new Event('click'));
    expect(collapseRef.visible()).toBeTrue();
    debugElement.nativeElement.dispatchEvent(new Event('click'));
    expect(collapseRef.visible()).toBeFalse();
  }));

  it('should add default icon', () => {
    const directive = debugElement.injector.get(NavbarTogglerDirective);
    directive.addDefaultIcon();
    const renderer = debugElement.injector.get(Renderer2);
    const span = debugElement.nativeElement.querySelector('span');
    expect(span).toBeTruthy();
    expect(span.classList.contains('navbar-toggler-icon')).toBeTrue();
  });
});
