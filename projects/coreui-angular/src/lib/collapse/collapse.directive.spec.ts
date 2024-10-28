import { CollapseDirective } from './collapse.directive';
import { Component, DebugElement, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

class MockElementRef extends ElementRef {}

@Component({
  template: '<div cCollapse horizontal>Test</div>',
  standalone: true,
  imports: [CollapseDirective]
})
class TestComponent {}

describe('CollapseDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let elementRef: DebugElement;
  let renderer: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, CollapseDirective, NoopAnimationsModule],
      providers: [{ provide: ElementRef, useClass: MockElementRef }, Renderer2]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    elementRef = fixture.debugElement.query(By.directive(CollapseDirective));

    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new CollapseDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css classes', () => {
    expect(elementRef.nativeElement).toHaveClass('collapse-horizontal');
  });
});
