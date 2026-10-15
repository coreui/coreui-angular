import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStatCComponent } from './widget-stat-c.component';
import { TemplateIdDirective } from '../../shared';

const classesOf = (element: Element) => [...element.classList].sort();

describe('WidgetStatCComponent', () => {
  let component: WidgetStatCComponent;
  let fixture: ComponentFixture<WidgetStatCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetStatCComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetStatCComponent);
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
    <c-widget-stat-c icon="icon" title="Visitors" value="87.500" />
    <c-widget-stat-c inverse textColor="info" title="Visitors" value="87.500">
      <ng-template cTemplateId="widgetIconTemplate"><b id="icon">Icon</b></ng-template>
      <ng-template cTemplateId="widgetProgressTemplate"><b id="progress">Progress</b></ng-template>
    </c-widget-stat-c>
  `,
  imports: [WidgetStatCComponent, TemplateIdDirective]
})
class WidgetStatCHostComponent {}

describe('WidgetStatCComponent content', () => {
  let widgets: HTMLElement[];

  beforeEach(async () => {
    const fixture = TestBed.createComponent(WidgetStatCHostComponent);
    await fixture.whenStable();
    widgets = Array.from(fixture.nativeElement.querySelectorAll('c-widget-stat-c'));
  });

  it('should render icon, value and title with the default classes', () => {
    const [icon, value, title] = Array.from(widgets[0].querySelectorAll<HTMLElement>('.card-body > div'));
    expect(icon.textContent?.trim()).toBe('icon');
    expect(classesOf(icon)).toEqual(['mb-4', 'text-body-secondary', 'text-end']);
    expect(value.textContent?.trim()).toBe('87.500');
    expect(classesOf(value)).toEqual(['fs-4', 'fw-semibold', 'text-body-secondary']);
    expect(title.textContent?.trim()).toBe('Visitors');
    expect(classesOf(title)).toEqual(['text-body-secondary']);
    expect(widgets[0].classList.contains('text-white')).toBe(false);
  });

  it('should render the templates and invert the colors', () => {
    const widget = widgets[1];
    const [icon, value, title] = Array.from(widget.querySelectorAll<HTMLElement>('.card-body > div'));
    expect(icon.querySelector('#icon')).not.toBeNull();
    expect(widget.querySelector('#progress')).not.toBeNull();
    expect(widget.classList.contains('text-white')).toBe(true);
    expect(classesOf(title)).toEqual(['text-info', 'text-opacity-75', 'text-white']);
    expect(classesOf(value)).toEqual(['fw-semibold', 'text-info', 'text-white']);
    expect(classesOf(icon)).toEqual(['text-end', 'text-info', 'text-opacity-75', 'text-white']);
  });
});
