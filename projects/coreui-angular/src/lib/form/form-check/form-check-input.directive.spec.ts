import { Component, DebugElement, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormCheckInputDirective } from './form-check-input.directive';

class MockElementRef extends ElementRef {}

@Component({
  template: '<input cFormCheckInput [indeterminate]="indeterminate" [checked]="true">',
  imports: [FormCheckInputDirective]
})
class TestComponent {
  indeterminate = false;
}

describe('FormCheckInputDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: DebugElement;
  // let renderer: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormCheckInputDirective, TestComponent],
      providers: [Renderer2, { provide: ElementRef, useClass: MockElementRef }]
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.directive(FormCheckInputDirective));
    fixture.detectChanges();
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

  it('should have indeterminate state', () => {
    component.indeterminate = true;
    fixture.detectChanges();
    expect(inputEl.nativeElement.checked).toBeFalse();
    expect(inputEl.nativeElement.indeterminate).toBeTrue();
  });
});
