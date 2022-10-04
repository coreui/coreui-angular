import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ChartjsComponent } from './chartjs.component';
import { Chart, registerables } from 'chart.js';

describe('ChartjsComponent', () => {
  let component: ChartjsComponent;
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
    datasets: [{
      data: [65, 59, 84, 84, 51, 55, 40],
      ...colors,
      fill: { value: 65 }
    }]
  };

  beforeEach(async () => {
    Chart.register(...registerables);

    await TestBed.configureTestingModule({
      declarations: [ChartjsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    // @ts-ignore
    fixture = TestBed.createComponent(ChartjsComponent);
    component = fixture.componentInstance;
    component.data = undefined;
    component.type = 'line';
  });

  it('chart should create', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    expect(component).toBeTruthy();
    expect(component.chart).toBeDefined();
  }));

  it('chart should receive data', fakeAsync(() => {
    component.data = { ...data };
    fixture.detectChanges();
    tick();
    expect(component.chart?.config.data.labels?.length).toBe(7);
    expect(component.chart?.config.data.labels).toEqual(labels);
    expect(component.chart?.config.data.datasets[0]?.data.length).toBe(7);
  }));

  it('chart to Base64Image', fakeAsync(() => {
    component.data = { ...data };
    fixture.detectChanges();
    tick();
    const image = component.chartToBase64Image();
    expect(image).toBeDefined();
    expect(typeof image).toBe('string');
    expect(image).toContain('data:image/png;base64,');
  }));

  it('chart should update on data change', fakeAsync(() => {
    component.data = {
      ...data,
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        { ...data.datasets[0], data: [42, 88, 42, 66, 77] },
        { ...data.datasets[0], data: [55, 44, 55, 66, 22] }
      ]
    };
    fixture.detectChanges();
    tick();
    expect(component.chart?.config?.data.labels?.length).toBe(5);
    expect(component.chart?.config?.data.datasets[1]?.data.length).toBe(5);
  }));
});
