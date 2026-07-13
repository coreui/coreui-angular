import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextColorDirective } from './text-color.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  imports: [TextColorDirective],
  template: '<div cTextColor="primary"></div>'
})
class TestComponent {}

describe('TextColorDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(TextColorDirective));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new TextColorDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes', () => {
    expect(debugElement.nativeElement).toHaveClass('text-primary');
  });
});
