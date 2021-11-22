import { Component, Renderer2, Type, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToasterHostDirective } from './toaster-host.directive';

@Component({
  template: `<div cToasterHost></div>`
})
class TestComponent {}

describe('ToasterHostDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let containerRef: ViewContainerRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, ToasterHostDirective]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });


  it('should create an instance', () => {
    const directive = new ToasterHostDirective(containerRef);
    expect(directive).toBeTruthy();
  });
});
