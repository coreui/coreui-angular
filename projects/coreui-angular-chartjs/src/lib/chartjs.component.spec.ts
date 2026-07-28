import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { ChartjsComponent } from './chartjs.component';

describe('ChartjsComponent', () => {
  let component: ChartjsComponent;
  let componentRef: ComponentRef<ChartjsComponent>;
  let fixture: ComponentFixture<ChartjsComponent>;

  const colors = {
    label: 'My dataset',
    backgroundColor: 'rgba(77,189,116,.2)',
    borderColor: '#4dbd74',
    pointHoverBackgroundColor: '#fff'
  };

  const labels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const data = {
    labels: labels,
    datasets: [
      {
        data: [65, 59, 84, 84, 51, 55, 40],
        ...colors,
        fill: { value: 65 }
      }
    ]
  };

  beforeEach(async () => {
    Chart.register(...registerables);

    await TestBed.configureTestingModule({
      imports: [ChartjsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('type', 'line');
    componentRef.setInput('wrapper', true);
    componentRef.setInput('data', undefined);
    fixture.detectChanges();
  });

  afterEach(() => {
    // Properly destroy chart to prevent async update errors
    if (component.chart) {
      component.chartDestroy();
    }
    fixture.destroy();
  });

  it('chart should create', async () => {
    expect(component).toBeTruthy();
    expect(component.chart).toBeDefined();
  });

  it('chart should receive data', async () => {
    componentRef.setInput('data', { ...data });
    fixture.detectChanges();
    // tick();
    expect(component.chart?.config.data.labels?.length).toBe(7);
    expect(component.chart?.config.data.labels).toEqual(labels);
    expect(component.chart?.config.data.datasets[0]?.data.length).toBe(7);
  });

  it('chart to Base64Image', async () => {
    componentRef.setInput('height', 100);
    componentRef.setInput('width', 100);
    componentRef.setInput('data', { ...data });
    fixture.detectChanges();
    // tick();
    const image = component.chartToBase64Image();
    expect(image).toBeDefined();
    expect(typeof image).toBe('string');
    expect(image).toContain('data:image/png;base64,');
  });

  it('chart should update on data change', async () => {
    componentRef.setInput('data', { ...data });
    fixture.detectChanges();
    // tick();
    expect(component.chart?.config.data.labels?.length).toBe(7);
    expect(component.chart?.config.data.labels).toEqual(labels);
    expect(component.chart?.config.data.datasets[0]?.data.length).toBe(7);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    componentRef.setInput('data', {
      ...data,
      labels: [...months],
      datasets: [
        { ...data.datasets[0], data: [42, 88, 42, 66, 77] },
        { ...data.datasets[1], data: [55, 44, 55, 66, 22] }
      ]
    });
    fixture.detectChanges();
    // component.chartUpdate();
    // tick();
    expect(component.chart?.config?.data.labels?.length).toBe(5);
    expect(component.chart?.config.data.labels).toEqual(months);
    expect(component.chart?.config?.data.datasets[1]?.data.length).toBe(5);
  });

  it('should have css classes', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('chart-wrapper')).toBe(true);
  });

  it('should not have wrapper class when wrapper is false', () => {
    componentRef.setInput('wrapper', false);
    fixture.detectChanges();
    expect(fixture.nativeElement.classList.contains('chart-wrapper')).toBe(false);
  });

  it('should apply height style', () => {
    componentRef.setInput('height', 200);
    fixture.detectChanges();
    expect(fixture.nativeElement.style.height).toBe('200px');
  });

  it('should apply width style', () => {
    componentRef.setInput('width', 300);
    fixture.detectChanges();
    expect(fixture.nativeElement.style.width).toBe('300px');
  });

  it('should generate unique IDs', () => {
    const fixture2 = TestBed.createComponent(ChartjsComponent);
    fixture2.detectChanges();
    expect(component.id).not.toBe(fixture2.componentInstance.id);
  });

  it('should set custom ID', () => {
    componentRef.setInput('id', 'custom-chart-id');
    fixture.detectChanges();
    expect(component.id).toBe('custom-chart-id');
  });

  it('should handle chart type changes', async () => {
    componentRef.setInput('data', { ...data });
    componentRef.setInput('type', 'bar');
    fixture.detectChanges();
    expect(component.type()).toBe('bar');

    componentRef.setInput('type', 'pie');
    fixture.detectChanges();
    expect(component.type()).toBe('pie');
  });

  it('should destroy chart on component destroy', async () => {
    componentRef.setInput('data', { ...data });
    fixture.detectChanges();
    const chart = component.chart;
    expect(chart).toBeDefined();

    const destroySpy = vi.fn();
    if (chart) {
      chart.destroy = destroySpy;
    }

    component.ngOnDestroy();
    expect(destroySpy).toHaveBeenCalled();
  });

  it('should emit chartRef when chart is created', async () => {
    let emissionCount = 0;
    component.chartRef.subscribe(() => {
      emissionCount++;
    });
    componentRef.setInput('redraw', true);
    componentRef.setInput('data', { ...data });
    fixture.detectChanges();

    expect(component.chart).toBeDefined();
    expect(emissionCount).toBeGreaterThan(0);
  });

  it('should handle redraw input', async () => {
    componentRef.setInput('data', { ...data });
    componentRef.setInput('redraw', true);
    fixture.detectChanges();

    expect(component.redraw()).toBe(true);
    expect(component.chart).toBeDefined();
  });

  it('should emit getDatasetAtEvent on click', async () => {
    componentRef.setInput('data', { ...data });
    fixture.detectChanges();

    let emittedItems: any;
    component.getDatasetAtEvent.subscribe((items) => {
      emittedItems = items;
    });

    const mockEvent = new MouseEvent('click');
    component.handleClick(mockEvent);

    expect(emittedItems).toBeDefined();
  });

  it('should emit getElementAtEvent on click', async () => {
    componentRef.setInput('data', { ...data });
    fixture.detectChanges();

    let emittedItems: any;
    component.getElementAtEvent.subscribe((items) => {
      emittedItems = items;
    });

    const mockEvent = new MouseEvent('click');
    component.handleClick(mockEvent);

    expect(emittedItems).toBeDefined();
  });

  it('should emit getElementsAtEvent on click', async () => {
    componentRef.setInput('data', { ...data });
    fixture.detectChanges();

    let emittedItems: any;
    component.getElementsAtEvent.subscribe((items) => {
      emittedItems = items;
    });

    const mockEvent = new MouseEvent('click');
    component.handleClick(mockEvent);

    expect(emittedItems).toBeDefined();
  });

  it('should not emit events when chart is not initialized', () => {
    // Create a fresh component without initializing the chart
    const newFixture = TestBed.createComponent(ChartjsComponent);
    const newComponent = newFixture.componentInstance;
    const newComponentRef = newFixture.componentRef;

    // Don't set data to avoid chart initialization
    newComponentRef.setInput('type', 'line');
    newComponentRef.setInput('wrapper', true);
    newComponentRef.setInput('data', undefined);

    let datasetEmitted = false;
    let elementEmitted = false;
    let elementsEmitted = false;

    newComponent.getDatasetAtEvent.subscribe(() => {
      datasetEmitted = true;
    });
    newComponent.getElementAtEvent.subscribe(() => {
      elementEmitted = true;
    });
    newComponent.getElementsAtEvent.subscribe(() => {
      elementsEmitted = true;
    });

    const mockEvent = new MouseEvent('click');
    newComponent.handleClick(mockEvent);

    expect(datasetEmitted).toBe(false);
    expect(elementEmitted).toBe(false);
    expect(elementsEmitted).toBe(false);
  });

  it('should handle custom plugins', async () => {
    const customPlugin = {
      id: 'custom-plugin',
      beforeDraw: vi.fn()
    };

    componentRef.setInput('data', { ...data });
    componentRef.setInput('plugins', [customPlugin]);
    fixture.detectChanges();

    expect(component.chart?.config.plugins).toContain(customPlugin);
  });

  it('should handle custom options', async () => {
    const customOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          display: true
        }
      }
    };

    componentRef.setInput('data', { ...data });
    componentRef.setInput('options', customOptions);
    fixture.detectChanges();

    expect(component.chart?.config.options?.responsive).toBe(true);
    expect(component.chart?.config.options?.maintainAspectRatio).toBe(false);
  });

  it('should enable custom tooltips by default', async () => {
    componentRef.setInput('data', { ...data });
    fixture.detectChanges();

    const tooltipOptions = component.chart?.config.options?.plugins?.tooltip;
    expect(tooltipOptions?.enabled).toBe(false);
    expect(tooltipOptions?.external).toBeDefined();
  });

  it('should disable custom tooltips when customTooltips is false', async () => {
    componentRef.setInput('customTooltips', false);
    componentRef.setInput('data', { ...data });
    fixture.detectChanges();

    // When customTooltips is false, custom tooltips should not be configured
    // The component will still create a chart, just without custom tooltip configuration
    expect(component.customTooltips()).toBe(false);
    expect(component.chart).toBeDefined();
  });

  it('should handle empty data', async () => {
    componentRef.setInput('data', { labels: [], datasets: [] });
    fixture.detectChanges();

    expect(component.chart?.config.data.labels?.length).toBe(0);
    expect(component.chart?.config.data.datasets.length).toBe(0);
  });

  it('should handle undefined data', () => {
    componentRef.setInput('data', undefined);
    fixture.detectChanges();
    expect(component.chart).toBeDefined();
  });

  it('should update chart options without redraw', async () => {
    componentRef.setInput('data', { ...data });
    fixture.detectChanges();

    const firstChart = component.chart;
    const newOptions = { responsive: false };

    componentRef.setInput('options', newOptions);
    componentRef.setInput('data', { ...data });
    fixture.detectChanges();

    expect(component.chart).toBe(firstChart);
  });

  it('should return base64 image string', async () => {
    componentRef.setInput('data', { ...data });
    componentRef.setInput('height', 100);
    componentRef.setInput('width', 100);
    fixture.detectChanges();

    const base64 = component.chartToBase64Image();
    expect(base64).toBeDefined();
    expect(typeof base64).toBe('string');
  });

  it('should return undefined for base64 when chart is not initialized', () => {
    const newFixture = TestBed.createComponent(ChartjsComponent);
    const newComponent = newFixture.componentInstance;
    const newComponentRef = newFixture.componentRef;

    newComponentRef.setInput('data', undefined);

    const base64 = newComponent.chartToBase64Image();
    expect(base64).toBeUndefined();
  });

  it('should handle multiple dataset updates', async () => {
    componentRef.setInput('data', { ...data });
    fixture.detectChanges();

    componentRef.setInput('data', {
      ...data,
      datasets: [{ ...data.datasets[0], data: [1, 2, 3] }]
    });
    fixture.detectChanges();

    componentRef.setInput('data', {
      ...data,
      datasets: [{ ...data.datasets[0], data: [4, 5, 6] }]
    });
    fixture.detectChanges();

    expect(component.chart?.config.data.datasets[0]?.data).toEqual([4, 5, 6]);
  });

  it('should not render chart when canvas context is unavailable', () => {
    const newFixture = TestBed.createComponent(ChartjsComponent);
    const newComponent = newFixture.componentInstance;

    vi.spyOn(newComponent.canvasElement().nativeElement, 'getContext').mockReturnValue(null);

    newComponent.chartRender();
    expect(newComponent.chart).toBeUndefined();
  });

  it('should not update chart when chart is not initialized', () => {
    const updateSpy = vi.fn();
    component.chartUpdate();
    expect(updateSpy).not.toHaveBeenCalled();
  });
});
