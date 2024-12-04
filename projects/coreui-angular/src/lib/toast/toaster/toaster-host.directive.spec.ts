import { Component, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToasterHostDirective } from './toaster-host.directive';

@Component({
  template: ` <div cToasterHost></div>`,
  imports: [ToasterHostDirective]
})
class TestComponent {}

describe('ToasterHostDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, ToasterHostDirective],
      providers: [ViewContainerRef]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new ToasterHostDirective();
      expect(directive).toBeTruthy();
    });
  });
});
