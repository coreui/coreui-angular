import { FormCheckLabelDirective } from './form-check-label.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: '<label cFormCheckLabel>Label</label>',
  imports: [FormCheckLabelDirective]
})
class TestComponent {}

describe('FormCheckLabelDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(FormCheckLabelDirective));
  });

  it('should create an instance', () => {
    const directive = new FormCheckLabelDirective();
    expect(directive).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(debugElement.nativeElement).toHaveClass('form-check-label');
  });
});
