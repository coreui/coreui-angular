import { OffcanvasTitleDirective } from './offcanvas-title.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: '<div cOffcanvasTitle>Test</div>',
  imports: [OffcanvasTitleDirective]
})
class TestComponent {}

describe('OffcanvasTitleDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let elementRef: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    elementRef = fixture.debugElement.query(By.directive(OffcanvasTitleDirective));

    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    const directive = new OffcanvasTitleDirective();
    expect(directive).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(elementRef.nativeElement).toHaveClass('offcanvas-title');
  });
});
