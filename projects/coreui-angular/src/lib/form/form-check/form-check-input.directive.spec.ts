import { Component, DebugElement, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormCheckInputDirective } from './form-check-input.directive';

class MockElementRef extends ElementRef {}

@Component({
  template: '<input cFormCheckInput>',
  imports: [FormCheckInputDirective]
})
class TestComponent {}

describe('FormCheckInputDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: DebugElement;
  // let renderer: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormCheckInputDirective, TestComponent],
      providers: [Renderer2, { provide: ElementRef, useClass: MockElementRef }]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.directive(FormCheckInputDirective));
    // renderer = fixture.componentRef.injector.get(Renderer2 as Type<Renderer2>);
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new FormCheckInputDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes', () => {
    expect(inputEl.nativeElement).toHaveClass('form-check-input');
  });
});
