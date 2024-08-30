import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListGroupItemDirective } from './list-group-item.directive';

class MockElementRef extends ElementRef {}

@Component({
  template: '<li cListGroupItem></li>'
})
class TestComponent {}

describe('ListGroupItemDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [ListGroupItemDirective],
      providers: [{ provide: ElementRef, useClass: MockElementRef }]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges(); // initial binding
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new ListGroupItemDirective();
      expect(directive).toBeTruthy();
    });
  });
});
