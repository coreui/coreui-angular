import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ComponentRef, DebugElement, input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormDirective } from './form.directive';

@Component({
  imports: [FormDirective],
  template: '<form cForm [validated]="validated()"></form>'
})
class TestComponent {
  readonly validated = input(false);
}

describe('FormDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;
  let componentRef: ComponentRef<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    debugElement = fixture.debugElement.query(By.directive(FormDirective));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new FormDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes', () => {
    expect(debugElement.nativeElement).not.toHaveClass('was-validated');
    componentRef.setInput('validated', true);
    fixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('was-validated');
    componentRef.setInput('validated', false);
    fixture.detectChanges();
    expect(debugElement.nativeElement).not.toHaveClass('was-validated');
  });
});
