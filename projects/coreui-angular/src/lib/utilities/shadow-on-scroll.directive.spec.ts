import { Component, DebugElement, DOCUMENT, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShadowOnScrollDirective } from './shadow-on-scroll.directive';
import { By } from '@angular/platform-browser';

@Component({
  imports: [ShadowOnScrollDirective],
  template: '<div cShadowOnScroll></div>'
})
class TestComponent {}

class MockElementRef extends ElementRef {}

describe('ShadowOnScrollDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, ShadowOnScrollDirective],
      providers: [{ provide: ElementRef, useClass: MockElementRef }]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    document = TestBed.inject(DOCUMENT);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.directive(ShadowOnScrollDirective));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new ShadowOnScrollDirective();
      expect(directive).toBeTruthy();
    });
  });
});
