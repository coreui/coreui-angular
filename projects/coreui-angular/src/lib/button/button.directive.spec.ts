import { ButtonDirective } from './button.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

class MockElementRef extends ElementRef {}

@Component({
  template: '<button cButton color="info" size="lg"></button>',
  standalone: true,
  imports: [ButtonDirective]
})
class TestComponent {}

describe('ButtonDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let elementRef: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, ButtonDirective],
      providers: [{ provide: ElementRef, useClass: MockElementRef }]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    elementRef = fixture.debugElement.query(By.directive(ButtonDirective));

    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new ButtonDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes', () => {
    expect(elementRef.nativeElement).toHaveClass('btn');
    expect(elementRef.nativeElement).toHaveClass('btn-lg');
    expect(elementRef.nativeElement).toHaveClass('btn-info');
  });
});
