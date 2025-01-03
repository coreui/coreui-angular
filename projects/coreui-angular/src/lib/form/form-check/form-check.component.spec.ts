import { Component, ComponentRef, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormCheckComponent } from './form-check.component';
import { FormCheckInputDirective } from './form-check-input.directive';
import { FormCheckLabelDirective } from './form-check-label.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <c-form-check [inline]="inline" [reverse]="reverse" [switch]="switch" [sizing]="'xl'">
      <input cFormCheckInput id="check1" type="checkbox" />
      <label cFormCheckLabel for="check1">Label</label>
    </c-form-check>
  `,
  imports: [FormCheckInputDirective, FormCheckComponent, FormCheckLabelDirective]
})
class TestComponent {
  inline = true;
  reverse = true;
  switch = false;
}

describe('FormCheckComponent', () => {
  let component: FormCheckComponent;
  let fixture: ComponentFixture<FormCheckComponent>;
  let componentRef: ComponentRef<FormCheckComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormCheckComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FormCheckComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('switch', true);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('form-switch');
    expect(fixture.nativeElement).not.toHaveClass('form-check');
  });
});

describe('FormCheckComponent Test', () => {
  let testFixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();
    testFixture = TestBed.createComponent(TestComponent);
    debugElement = testFixture.debugElement.query(By.directive(FormCheckComponent));
    testFixture.detectChanges(); // initial binding
  }));

  it('should have css classes', () => {
    expect(debugElement.nativeElement).not.toHaveClass('form-switch');
    expect(debugElement.nativeElement).not.toHaveClass('form-switch-xl');
    expect(debugElement.nativeElement).toHaveClass('form-check-inline');
    expect(debugElement.nativeElement).toHaveClass('form-check-reverse');
    testFixture.componentInstance.switch = true;
    testFixture.componentInstance.inline = false;
    testFixture.componentInstance.reverse = false;
    testFixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('form-switch');
    expect(debugElement.nativeElement).toHaveClass('form-switch-xl');
    expect(debugElement.nativeElement).not.toHaveClass('form-check-inline');
    expect(debugElement.nativeElement).not.toHaveClass('form-check-reverse');
    expect(debugElement.nativeElement).toHaveClass('form-check');
  });
});
