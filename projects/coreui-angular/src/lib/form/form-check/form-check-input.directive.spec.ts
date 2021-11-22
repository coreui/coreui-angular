import { Component, DebugElement, Renderer2, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormCheckInputDirective } from './form-check-input.directive';

@Component({
  template: `<input cFormCheckInput>`
})
class TestComponent {}

describe('FormCheckInputDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: DebugElement;
  let renderer: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, FormCheckInputDirective]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
    renderer = fixture.componentRef.injector.get(Renderer2 as Type<Renderer2>);
  });

  it('should create an instance', () => {
    const directive = new FormCheckInputDirective(renderer, inputEl);
    expect(directive).toBeTruthy();
  });
});
