import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, ViewChild } from '@angular/core';

import { cilList } from '@coreui/icons';
import { HtmlAttributesDirective } from '../shared/html-attr.directive';
import { IconComponent } from './icon.component';
import { IconSetService } from '../icon-set';
import { By } from '@angular/platform-browser';

@Component({
  template: '<c-icon #icon name="cil-list" size="lg" class="test" />',
  standalone: true,
  imports: [IconComponent],
  providers: [IconSetService]
})
class TestComponent {
  @ViewChild('icon', { read: IconComponent }) iconRef!: IconComponent;

  constructor(
    public iconSet: IconSetService
  ) {
    this.iconSet.icons = { cilList };
  }
}

describe('IconComponent', () => {
  let inputEl: DebugElement;
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [TestComponent, IconComponent, HtmlAttributesDirective],
      providers: [IconSetService]
    }).compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    inputEl = fixture.debugElement.query(By.css('svg'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('service should exist', () => {
    expect(component.iconSet).toBeTruthy();
  });
  it('icon component should render', () => {
    expect(component.iconRef).toBeTruthy();
    expect(component.iconRef.name).toBe('cilList');
    expect(component.iconRef.svgElementRef).toBeTruthy();
  });
  it('icon classes should be applied', () => {
    expect(inputEl.nativeElement).toBeTruthy();
    expect(inputEl.nativeElement).toHaveClass('icon');
    expect(inputEl.nativeElement).toHaveClass('icon-lg');
    expect(inputEl.nativeElement).toHaveClass('test');
  });
});
