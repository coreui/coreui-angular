import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStatAComponent } from './widget-stat-a.component';
import { TemplateIdDirective } from '../../shared';

describe('WidgetStatAComponent', () => {
  let component: WidgetStatAComponent;
  let fixture: ComponentFixture<WidgetStatAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetStatAComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetStatAComponent);
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
    <c-widget-stat-a color="primary" title="Users" value="26K">
      <button id="action">Action</button>
      <div class="chart-wrapper" id="chart"></div>
    </c-widget-stat-a>
    <c-widget-stat-a title="Users" value="26K" id="custom">
      <ng-template cTemplateId="widgetValueTemplate"><b id="value">Custom value</b></ng-template>
      <ng-template cTemplateId="widgetTitleTemplate"><b id="title">Custom title</b></ng-template>
      <ng-template cTemplateId="widgetActionTemplate"><b id="customAction">Custom action</b></ng-template>
      <ng-template cTemplateId="widgetChartTemplate"><b id="customChart">Custom chart</b></ng-template>
    </c-widget-stat-a>
  `,
  imports: [WidgetStatAComponent, TemplateIdDirective]
})
class WidgetStatAHostComponent {}

describe('WidgetStatAComponent content', () => {
  let fixture: ComponentFixture<WidgetStatAHostComponent>;
  let widgets: HTMLElement[];

  beforeEach(async () => {
    fixture = TestBed.createComponent(WidgetStatAHostComponent);
    await fixture.whenStable();
    widgets = Array.from(fixture.nativeElement.querySelectorAll('c-widget-stat-a'));
  });

  it('should render value, title, action and chart with color classes', () => {
    const [widget] = widgets;
    expect(widget.querySelector('.fs-4.fw-semibold')?.textContent?.trim()).toBe('26K');
    expect(widget.querySelector('.card-body')?.textContent).toContain('Users');
    expect(widget.querySelector('.card-body #action')).not.toBeNull();
    expect(widget.querySelector(':scope > #chart')).not.toBeNull();
    expect(widget.classList.contains('bg-primary')).toBe(true);
    expect(widget.classList.contains('text-white')).toBe(true);
  });

  it('should render the templates in place of the defaults', () => {
    const widget = widgets[1];
    expect(widget.querySelector('#value')).not.toBeNull();
    expect(widget.querySelector('#title')).not.toBeNull();
    expect(widget.querySelector('.card-body #customAction')).not.toBeNull();
    expect(widget.querySelector('#customChart')).not.toBeNull();
    expect(widget.textContent).not.toContain('26K');
    expect(widget.classList.contains('text-white')).toBe(false);
  });
});
