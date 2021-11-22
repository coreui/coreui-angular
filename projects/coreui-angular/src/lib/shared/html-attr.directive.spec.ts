import { Component, DebugElement, Renderer2, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HtmlAttributesDirective } from './html-attr.directive';

@Component({
  template: `<div [cHtmlAttr]="{class: 'test', style: {backgroundColor: 'red'}, id: 'id-1'}"></div>`
})
class TestComponent {}

describe('HtmlAttributesDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: DebugElement;
  let renderer: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, HtmlAttributesDirective]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('div'));
    renderer = fixture.componentRef.injector.get(Renderer2 as Type<Renderer2>);
  });

  it('should create an instance', () => {
    const directive = new HtmlAttributesDirective(renderer, inputEl);
    expect(directive).toBeTruthy();
  });

  it('should render a class attr', () => {
    fixture.detectChanges();
    // console.log(inputEl.nativeElement.classList);
    expect(inputEl.nativeElement.classList.contains('test')).toBeTruthy();
  });

  it('should render a style attr', () => {
    fixture.detectChanges();
    // console.log(inputEl.nativeElement.style.backgroundColor);
    expect(inputEl.nativeElement.style.backgroundColor).toBe('red');
  });

  it('should render an id attr', () => {
    fixture.detectChanges();
    // console.log(inputEl.nativeElement.attributes);
    expect(inputEl.nativeElement.getAttribute('id')).toBe('id-1');
  });
});
