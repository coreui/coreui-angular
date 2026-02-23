import { Component, ComponentRef, DebugElement, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormCheckComponent } from './form-check.component';
import { FormCheckInputDirective } from './form-check-input.directive';
import { FormCheckLabelDirective } from './form-check-label.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <c-form-check [inline]="inline()" [reverse]="reverse()" [switch]="switch()" [sizing]="'xl'">
      <input cFormCheckInput id="check1" type="checkbox" />
      <label cFormCheckLabel for="check1">Label</label>
    </c-form-check>
  `,
  imports: [FormCheckInputDirective, FormCheckComponent, FormCheckLabelDirective]
})
class TestComponent {
  readonly inline = signal(true);
  readonly reverse = signal(true);
  readonly switch = signal(false);
}

describe('FormCheckComponent', () => {
  let component: FormCheckComponent;
  let fixture: ComponentFixture<FormCheckComponent>;
  let componentRef: ComponentRef<FormCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCheckComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FormCheckComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('switch', true);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('form-switch')).toBe(true);
    expect(fixture.nativeElement.classList.contains('form-check')).toBe(false);
  });
});

describe('FormCheckComponent Test', () => {
  let testFixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();
    testFixture = TestBed.createComponent(TestComponent);
    await testFixture.whenStable();

    debugElement = testFixture.debugElement.query(By.directive(FormCheckComponent));
    testFixture.detectChanges(); // initial binding
  });

  it('should have css classes', () => {
    expect(debugElement.nativeElement.classList.contains('form-switch')).toBe(false);
    expect(debugElement.nativeElement.classList.contains('form-switch-xl')).toBe(false);
    expect(debugElement.nativeElement.classList.contains('form-check-inline')).toBe(true);
    expect(debugElement.nativeElement.classList.contains('form-check-reverse')).toBe(true);
    testFixture.componentInstance.switch.set(true);
    testFixture.componentInstance.inline.set(false);
    testFixture.componentInstance.reverse.set(false);
    testFixture.detectChanges();
    expect(debugElement.nativeElement.classList.contains('form-switch')).toBe(true);
    expect(debugElement.nativeElement.classList.contains('form-switch-xl')).toBe(true);
    expect(debugElement.nativeElement.classList.contains('form-check-inline')).toBe(false);
    expect(debugElement.nativeElement.classList.contains('form-check-reverse')).toBe(false);
    expect(debugElement.nativeElement.classList.contains('form-check')).toBe(true);
  });
});
