import { Component, DebugElement, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HtmlAttributesDirective } from './html-attr.directive';

@Component({
  template: `<div [cHtmlAttr]="{ class: 'test', style: { backgroundColor: 'red' }, id: 'id-1' }"></div>`
})
class TestComponent {}

class MockElementRef extends ElementRef {}

describe('HtmlAttributesDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [HtmlAttributesDirective],
      providers: [Renderer2, { provide: ElementRef, useClass: MockElementRef }]
    });
    fixture = TestBed.createComponent(TestComponent);
    debugElement = fixture.debugElement.query(By.css('div'));
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new HtmlAttributesDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('should render a class attr', () => {
    fixture.detectChanges();
    expect(debugElement.nativeElement).toHaveClass('test');
  });

  it('should render a style attr', () => {
    fixture.detectChanges();
    // console.log(inputEl.nativeElement.style.backgroundColor);
    expect(debugElement.nativeElement.style.backgroundColor).toBe('red');
  });

  it('should render an id attr', () => {
    fixture.detectChanges();
    expect(debugElement.nativeElement.getAttribute('id')).toBe('id-1');
  });
});
