import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ComponentRef, DebugElement, input } from '@angular/core';
import { FormSelectDirective } from './form-select.directive';
import { By } from '@angular/platform-browser';

@Component({
  imports: [FormSelectDirective],
  template: ` <select cSelect [sizing]="sizing()" [valid]="valid()"></select> `
})
class TestComponent {
  readonly sizing = input<'' | 'sm' | 'lg' | string>();
  readonly valid = input<boolean>();
}

describe('FormSelectDirective', () => {
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
    debugElement = fixture.debugElement.query(By.directive(FormSelectDirective));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new FormSelectDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes', () => {
    expect(debugElement.nativeElement).toHaveClass('form-select');
    componentRef.setInput('sizing', 'sm');
    fixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('form-select-sm');
    componentRef.setInput('sizing', 'lg');
    fixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('form-select-lg');
    componentRef.setInput('sizing', '');
    fixture.detectChanges();
    expect(debugElement.nativeElement).not.toHaveClass('form-select-sm');
    expect(debugElement.nativeElement).not.toHaveClass('form-select-lg');
    expect(debugElement.nativeElement).not.toHaveClass('is-invalid');
    expect(debugElement.nativeElement).not.toHaveClass('is-valid');
    componentRef.setInput('valid', true);
    fixture.detectChanges();
    expect(debugElement.nativeElement).not.toHaveClass('is-invalid');
    expect(debugElement.nativeElement).toHaveClass('is-valid');
    componentRef.setInput('valid', false);
    fixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('is-invalid');
    expect(debugElement.nativeElement).not.toHaveClass('is-valid');
    componentRef.setInput('valid', undefined);
    fixture.detectChanges();
    expect(debugElement.nativeElement).not.toHaveClass('is-invalid');
    expect(debugElement.nativeElement).not.toHaveClass('is-valid');
  });
});
