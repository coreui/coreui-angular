import { Component, DebugElement, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { IconDirective } from './icon.directive';
import { IconSetService } from '../icon-set';
import { cilList } from '@coreui/icons';

@Component({
  template: '<svg [cIcon]="this.iconSet.icons.cilList" size="lg" class="test" title="Test"></svg>',
  standalone: true,
  imports: [IconDirective],
  providers: [IconSetService]
})
class TestComponent {
  constructor(public iconSet: IconSetService) {
    this.iconSet.icons = { cilList };
  }

  @ViewChild(IconDirective, { read: IconDirective }) public iconRef!: IconDirective;
}

class MockElementRef extends ElementRef {}

describe('IconDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let svgEl: DebugElement;
  // let renderer: Renderer2;
  // let sanitizer: DomSanitizer;
  // let iconSetService: IconSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IconSetService, { provide: ElementRef, useClass: MockElementRef }],
      imports: [IconDirective, TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    svgEl = fixture.debugElement.query(By.css('svg'));
    // renderer = fixture.componentRef.injector.get(Renderer2 as Type<Renderer2>);
    // sanitizer = fixture.componentRef.injector.get(DomSanitizer);
    // iconSetService = fixture.componentRef.injector.get(IconSetService);
  });
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new IconDirective();
      expect(directive).toBeTruthy();
    });
  });

  it('service should exist', () => {
    expect(component.iconSet).toBeTruthy();
  });

  it('icon component should render', () => {
    expect(component.iconRef).toBeTruthy();
    expect(component.iconRef.code()).toBe(component.iconSet.icons['cilList']);
  });

  it('icon classes should be applied', () => {
    expect(svgEl.nativeElement).toBeTruthy();
    expect(svgEl.nativeElement).toHaveClass('icon');
    expect(svgEl.nativeElement).toHaveClass('icon-lg');
    expect(svgEl.nativeElement).toHaveClass('test');
  });

  it('icon attributes should be applied', () => {
    expect(svgEl.nativeElement.getAttribute('aria-hidden')).toBe('true');
    expect(svgEl.nativeElement.getAttribute('pointer-events')).toBe('none');
    expect(svgEl.nativeElement.getAttribute('role')).toBe('img');
    expect(svgEl.nativeElement.getAttribute('title')).toBe('Test');
    expect(svgEl.nativeElement.getAttribute('viewBox')).toBeDefined();
    expect(svgEl.nativeElement.getAttribute('xmlns')).toBe('http://www.w3.org/2000/svg');
  });
});
