import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { ChartjsComponent } from './chartjs.component';
import { Chart, registerables } from 'chart.js';
import { ComponentRef } from '@angular/core';

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

  it('chart should create', fakeAsync(() => {
    expect(component).toBeTruthy();
    expect(component.chart).toBeDefined();
  }));

  it('chart should receive data', fakeAsync(() => {
    componentRef.setInput('data', { ...data });
    fixture.detectChanges();
    // tick();
    expect(component.chart?.config.data.labels?.length).toBe(7);
    expect(component.chart?.config.data.labels).toEqual(labels);
    expect(component.chart?.config.data.datasets[0]?.data.length).toBe(7);
  }));

  it('chart to Base64Image', fakeAsync(() => {
    componentRef.setInput('height', 100);
    componentRef.setInput('width', 100);
    componentRef.setInput('data', { ...data });
    fixture.detectChanges();
    // tick();
    const image = component.chartToBase64Image();
    expect(image).toBeDefined();
    expect(typeof image).toBe('string');
    expect(image).toContain('data:image/png;base64,');
  }));

  it('chart should update on data change', fakeAsync(() => {
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
  }));

  it('should have css classes', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('chart-wrapper');
  });
});
