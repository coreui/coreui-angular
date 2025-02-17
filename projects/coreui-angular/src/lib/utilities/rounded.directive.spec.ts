import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoundedDirective } from './rounded.directive';
import { Component, DebugElement, input } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  imports: [RoundedDirective],
  template: '<div [cRounded]="rounded()"></div>'
})
class TestComponent {
  readonly rounded = input(1);
}

describe('RoundedDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(RoundedDirective));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new RoundedDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes', () => {
    expect(debugElement.nativeElement).toHaveClass('rounded-1');
    fixture.componentRef.setInput('rounded', true);
    fixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('rounded');
    fixture.componentRef.setInput('rounded', {
      top: false,
      end: true,
      circle: true,
      pill: true,
      size: 3
    });
    fixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('rounded-3');
    expect(debugElement.nativeElement).toHaveClass('rounded-end');
    expect(debugElement.nativeElement).toHaveClass('rounded-circle');
    expect(debugElement.nativeElement).toHaveClass('rounded-pill');
    expect(debugElement.nativeElement.classList.length).toBe(4);
    fixture.componentRef.setInput('rounded', {});
    fixture.detectChanges();
    expect(debugElement.nativeElement.classList.length).toBe(0);
    fixture.componentRef.setInput('rounded', 1234n);
    fixture.detectChanges();
    expect(debugElement.nativeElement.classList.length).toBe(0);
  });
});
