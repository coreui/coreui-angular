import { CollapseDirective } from './collapse.directive';
import { Component, DebugElement, ElementRef, Renderer2, Type } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

class MockElementRef extends ElementRef {}

@Component({
  template: `<div cCollapse></div>`
})
class TestComponent {}

describe('CollapseDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let elementRef: DebugElement;
  let renderer: Renderer2;
  let animationBuilder: AnimationBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [CollapseDirective, NoopAnimationsModule],
      providers: [
        { provide: ElementRef, useClass: MockElementRef },
        { provide: AnimationBuilder },
        Renderer2
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    elementRef = fixture.debugElement.query(By.directive(CollapseDirective));
    renderer = fixture.componentRef.injector.get(Renderer2 as Type<Renderer2>);

    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    const directive = new CollapseDirective(elementRef, renderer, animationBuilder);
    expect(directive).toBeTruthy();
  });
});
