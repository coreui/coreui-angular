import { Component, DebugElement, Renderer2, Type, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By, DomSanitizer } from '@angular/platform-browser';

import { IconDirective } from './icon.directive';
import { IconSetService } from '../icon-set';
import { cilList } from '@coreui/icons';

@Component({
  template: `
    <svg [cIcon]="this.iconSet.icons.cilList" size="lg" class="test" title="Test"></svg>`
})
class TestComponent {
  constructor(
    public iconSet: IconSetService
  ) {
    this.iconSet.icons = { cilList };
  }

  @ViewChild(IconDirective, { read: IconDirective }) iconRef!: IconDirective;
}

describe('IconDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let svgEl: DebugElement;
  let renderer: Renderer2;
  let sanitizer: DomSanitizer;
  let iconSetService: IconSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      providers: [IconSetService],
      imports: [IconDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    svgEl = fixture.debugElement.query(By.css('svg'));
    renderer = fixture.componentRef.injector.get(Renderer2 as Type<Renderer2>);
    sanitizer = fixture.componentRef.injector.get(DomSanitizer);
    iconSetService = fixture.componentRef.injector.get(IconSetService);
  });

  it('should create an instance', () => {
    const directive = new IconDirective(renderer, svgEl, sanitizer, iconSetService);
    expect(directive).toBeTruthy();
  });
  it('icon classes should be applied', () => {
    expect(svgEl.nativeElement).toBeTruthy();
    expect(svgEl.nativeElement).toHaveClass('icon');
    expect(svgEl.nativeElement).toHaveClass('icon-lg');
    expect(svgEl.nativeElement).toHaveClass('test');
  });
});
