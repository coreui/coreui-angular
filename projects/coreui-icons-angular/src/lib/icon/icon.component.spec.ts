import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, ViewChild, inject } from '@angular/core';
import { By } from '@angular/platform-browser';

import { cilList } from '@coreui/icons';
import { HtmlAttributesDirective } from '../shared/html-attr.directive';
import { IconSetService } from '../icon-set';
import { IconComponent } from './icon.component';

@Component({
    template: '<c-icon #icon name="cil-list" size="lg" class="test" />',
    imports: [IconComponent],
    providers: [IconSetService]
})
class TestComponent {
  iconSet = inject(IconSetService);

  @ViewChild('icon', { read: IconComponent }) iconRef!: IconComponent;

  constructor() {
    this.iconSet.icons = { cilList };
  }
}

describe('IconComponent', () => {
  let debugEl: DebugElement;
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
    debugEl = fixture.debugElement.query(By.css('svg'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('service should exist', () => {
    expect(component.iconSet).toBeTruthy();
  });
  it('icon component should render', () => {
    expect(component.iconRef).toBeTruthy();
    expect(component.iconRef.name()).toBe('cilList');
    expect(component.iconRef.svgElementRef).toBeTruthy();
  });
  it('icon classes should be applied', () => {
    expect(debugEl.nativeElement).toBeTruthy();
    expect(debugEl.nativeElement).toHaveClass('icon');
    expect(debugEl.nativeElement).toHaveClass('icon-lg');
    expect(debugEl.nativeElement).toHaveClass('test');
  });
});
