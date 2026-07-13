import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, ElementRef, Renderer2 } from '@angular/core';
import { By } from '@angular/platform-browser';

import { HeaderTogglerDirective } from './header-toggler.directive';

@Component({
  imports: [HeaderTogglerDirective],
  template: '<div cHeaderToggler></div>'
})
export class TestComponent {
  theme!: 'dark' | 'light' | undefined;
}

class MockElementRef extends ElementRef {}

describe('HeaderTogglerDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [Renderer2, { provide: ElementRef, useClass: MockElementRef }]
    });
    fixture = TestBed.createComponent(TestComponent);
    debugElement = fixture.debugElement.query(By.directive(HeaderTogglerDirective));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new HeaderTogglerDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should have css class', () => {
    expect(debugElement.nativeElement).toHaveClass('header-toggler');
  });

  it('should set attributes', () => {
    expect(debugElement.nativeElement.getAttribute('type')).toBe('button');
    expect(debugElement.nativeElement.getAttribute('aria-label')).toBe('Toggle navigation');
  });
});
