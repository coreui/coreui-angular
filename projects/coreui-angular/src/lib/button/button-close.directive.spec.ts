import { Component, DebugElement, ElementRef, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonCloseDirective } from './button-close.directive';

class MockElementRef extends ElementRef {}

@Component({
  template: '<button cButtonClose></button>',
  imports: [ButtonCloseDirective]
})
class TestComponent {}

@Component({
  template: '<button cButtonClose [disabled]="disabled()" [tabindex]="tabindex()"></button>',
  imports: [ButtonCloseDirective]
})
class TestBoundComponent {
  readonly disabled = signal(false);
  readonly tabindex = signal<number | undefined>(undefined);
}

describe('ButtonCloseDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let elementRef: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, ButtonCloseDirective],
      providers: [{ provide: ElementRef, useClass: MockElementRef }]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    elementRef = fixture.debugElement.query(By.directive(ButtonCloseDirective));

    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new ButtonCloseDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes', () => {
    expect(elementRef.nativeElement.classList.contains('btn')).toBe(true);
    expect(elementRef.nativeElement.classList.contains('btn-close')).toBe(true);
  });

  it('should not set tabindex when not given', () => {
    expect(elementRef.nativeElement.getAttribute('tabindex')).toBeNull();
  });

  describe('with bound inputs', () => {
    let boundFixture: ComponentFixture<TestBoundComponent>;
    let boundComponent: TestBoundComponent;
    let boundElementRef: DebugElement;

    beforeEach(() => {
      boundFixture = TestBed.createComponent(TestBoundComponent);
      boundComponent = boundFixture.componentInstance;
      boundElementRef = boundFixture.debugElement.query(By.directive(ButtonCloseDirective));
      boundFixture.detectChanges();
    });

    it('should not set tabindex when bound to undefined', () => {
      expect(boundElementRef.nativeElement.getAttribute('tabindex')).toBeNull();
    });

    it('should pass tabindex to the host', () => {
      boundComponent.tabindex.set(2);
      boundFixture.detectChanges();
      expect(boundElementRef.nativeElement.getAttribute('tabindex')).toBe('2');
    });

    it('should set tabindex to -1 when disabled', () => {
      boundComponent.tabindex.set(2);
      boundComponent.disabled.set(true);
      boundFixture.detectChanges();
      expect(boundElementRef.nativeElement.getAttribute('tabindex')).toBe('-1');
    });
  });
});
