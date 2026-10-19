import { Component, viewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStatFComponent } from './widget-stat-f.component';
import { TemplateIdDirective } from '../../shared';

const classesOf = (element: Element) => [...element.classList].sort();

describe('WidgetStatFComponent', () => {
  let component: WidgetStatFComponent;
  let fixture: ComponentFixture<WidgetStatFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetStatFComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetStatFComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css class"', () => {
    expect(fixture.nativeElement.classList.contains('card')).toBe(true);
  });
});

@Component({
  template: `
    <c-widget-stat-f color="primary" footer="View more" icon="icon" title="Income" value="$1.999,50" />
    <c-widget-stat-f color="info" padding textColor="info" title="Income" value="$1.999,50">
      <ng-template cTemplateId="widgetIconTemplate"><b id="icon">Icon</b></ng-template>
      <ng-template cTemplateId="widgetFooterTemplate"><b id="footer">Footer</b></ng-template>
    </c-widget-stat-f>
    <c-widget-stat-f title="Income" value="$1.999,50" />
  `,
  imports: [WidgetStatFComponent, TemplateIdDirective]
})
class WidgetStatFHostComponent {}

describe('WidgetStatFComponent content', () => {
  let widgets: HTMLElement[];

  beforeEach(async () => {
    const fixture = TestBed.createComponent(WidgetStatFHostComponent);
    await fixture.whenStable();
    widgets = Array.from(fixture.nativeElement.querySelectorAll('c-widget-stat-f'));
  });

  it('should render icon, value, title and footer with the default classes', () => {
    const widget = widgets[0];
    const icon = widget.querySelector('.card-body > div') as HTMLElement;
    expect(icon.textContent?.trim()).toBe('icon');
    expect(classesOf(icon)).toEqual(['bg-primary', 'me-3', 'p-4', 'rounded-start-1', 'text-white']);
    expect(widget.querySelector('.card-body')?.classList.contains('p-0')).toBe(true);
    expect(widget.querySelector('.fs-6.fw-semibold')?.textContent).toBe('$1.999,50');
    expect(widget.querySelector('.small.text-uppercase')?.textContent).toBe('Income');
    expect(widget.querySelector('.card-footer')?.textContent?.trim()).toBe('View more');
  });

  it('should render the templates with padding and text color', () => {
    const widget = widgets[1];
    const icon = widget.querySelector('.card-body > div') as HTMLElement;
    expect(icon.querySelector('#icon')).not.toBeNull();
    expect(classesOf(icon)).toEqual(['bg-info', 'p-3', 'text-white']);
    expect(widget.querySelector('.card-body')?.classList.contains('p-0')).toBe(false);
    expect(widget.querySelector('.fw-semibold.text-info')?.classList.contains('fs-6')).toBe(false);
    expect(widget.querySelector('.card-footer #footer')).not.toBeNull();
  });

  it('should leave out the footer without footer text or template', () => {
    expect(widgets[2].querySelector('.card-footer')).toBeNull();
  });
});

@Component({
  template: `
    <c-widget-stat-f #f="cWidgetStatF" title="F" />
    <c-widget-stat-f #b="cWidgetStatB" title="B" />
  `,
  imports: [WidgetStatFComponent]
})
class WidgetStatFExportAsHostComponent {
  readonly f = viewChild.required<WidgetStatFComponent>('f');
  readonly b = viewChild.required<WidgetStatFComponent>('b');
}

describe('WidgetStatFComponent exportAs', () => {
  it('should export as cWidgetStatF and cWidgetStatB', async () => {
    const fixture = TestBed.createComponent(WidgetStatFExportAsHostComponent);
    await fixture.whenStable();
    expect(fixture.componentInstance.f()).toBeInstanceOf(WidgetStatFComponent);
    expect(fixture.componentInstance.b()).toBeInstanceOf(WidgetStatFComponent);
  });
});
