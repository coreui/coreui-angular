import { NavLinkDirective } from './nav-link.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ComponentRef, DebugElement, input } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: '<a cNavLink [active]="active()" [disabled]="disabled()">test</a>',
  imports: [NavLinkDirective]
})
class TestComponent {
  readonly active = input(false);
  readonly disabled = input(false);
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
    TestBed.runInInjectionContext(() => {
      const directive = new NavLinkDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes', () => {
    expect(debugElement.nativeElement).toHaveClass('nav-link');
  });

  it('should have css classes for active', () => {
    expect(debugElement.nativeElement).not.toHaveClass('active');
    componentRef.setInput('active', true);
    fixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('active');
    componentRef.setInput('active', false);
    fixture.detectChanges();
    expect(debugElement.nativeElement).not.toHaveClass('active');
  });

  it('should have css classes for disabled', () => {
    expect(debugElement.nativeElement).not.toHaveClass('disabled');
    componentRef.setInput('disabled', true);
    fixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('disabled');
    componentRef.setInput('disabled', false);
    fixture.detectChanges();
    expect(debugElement.nativeElement).not.toHaveClass('disabled');
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
    expect(debugElement.nativeElement.style.cursor).toBe('pointer');
    componentRef.setInput('disabled', true);
    fixture.detectChanges();
    expect(debugElement.nativeElement.getAttribute('disabled')).not.toBeNull();
    expect(debugElement.nativeElement.getAttribute('aria-disabled')).toBeTruthy();
    expect(debugElement.nativeElement.getAttribute('tabindex')).toBe('-1');
    expect(debugElement.nativeElement.style.cursor).not.toBe('pointer');
    componentRef.setInput('disabled', false);
    fixture.detectChanges();
  });
});
