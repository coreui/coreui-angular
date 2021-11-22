import { ButtonDirective } from './button.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonCloseDirective } from './button-close.directive';
import { Component, DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

class MockElementRef extends ElementRef {}

@Component({
  template: `<button cButton></button>`
})
class TestComponent { }

describe('ButtonDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let buttonEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonCloseDirective, TestComponent],
      providers: [{ provide: ElementRef, useClass: MockElementRef }]
    })

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    buttonEl = fixture.debugElement.query(By.css('button'));

    fixture.detectChanges(); // initial binding
  })


  it('should create an instance', () => {
    const directive = new ButtonDirective();
    expect(directive).toBeTruthy();
  });
});
