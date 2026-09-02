import { Component, DebugElement, ElementRef, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ListGroupItemDirective } from './list-group-item.directive';

class MockElementRef extends ElementRef {}

@Component({
  template: '<li cListGroupItem></li>',
  imports: [ListGroupItemDirective]
})
class TestComponent {}

@Component({
  template: '<li cListGroupItem [disabled]="disabled()" [tabindex]="tabindex()"></li>',
  imports: [ListGroupItemDirective]
})
class TestBoundComponent {
  readonly disabled = signal(false);
  readonly tabindex = signal<number | undefined>(undefined);
}

describe('ListGroupItemDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListGroupItemDirective, TestComponent],
      providers: [{ provide: ElementRef, useClass: MockElementRef }]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new ListGroupItemDirective();
      expect(directive).toBeTruthy();
    });
  });

  describe('with bound inputs', () => {
    let boundFixture: ComponentFixture<TestBoundComponent>;
    let boundComponent: TestBoundComponent;
    let boundElementRef: DebugElement;

    beforeEach(() => {
      boundFixture = TestBed.createComponent(TestBoundComponent);
      boundComponent = boundFixture.componentInstance;
      boundElementRef = boundFixture.debugElement.query(By.directive(ListGroupItemDirective));
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
