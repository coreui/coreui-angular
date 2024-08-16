import { ButtonCloseDirective } from './button-close.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

class MockElementRef extends ElementRef {}

@Component({
  template: '<button cButtonClose></button>',
  standalone: true,
  imports: [ButtonCloseDirective]
})
class TestComponent {}

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
    expect(elementRef.nativeElement).toHaveClass('btn');
    expect(elementRef.nativeElement).toHaveClass('btn-close');
  });
});
