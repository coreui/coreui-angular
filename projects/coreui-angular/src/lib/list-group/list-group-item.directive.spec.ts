import { Component, DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListGroupItemDirective } from './list-group-item.directive';
import { By } from '@angular/platform-browser';

class MockElementRef extends ElementRef {}

@Component({
  template: `<li cListGroupItem></li>`
})
class TestComponent {}

describe('ListGroupItemDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let liEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [ListGroupItemDirective],
      providers: [{ provide: ElementRef, useClass: MockElementRef }]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    liEl = fixture.debugElement.query(By.css('li'));

    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    const directive = new ListGroupItemDirective(liEl);
    expect(directive).toBeTruthy();
  });
});
