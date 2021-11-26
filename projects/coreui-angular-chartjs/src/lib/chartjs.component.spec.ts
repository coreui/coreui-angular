import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsComponent } from './chartjs.component';

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
    await TestBed.configureTestingModule({
      declarations: [ChartjsComponent]
    }).compileComponents();

    // Chart.register(...registerables);

    fixture = TestBed.createComponent(ChartjsComponent);
    component = fixture.componentInstance;
    component.data = undefined;
    component.type = 'line';
  });

  it('chart should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.chart).toBeDefined();
  });

  it('chart should receive data', () => {
    component.data = { ...data };
    fixture.detectChanges();
    expect(component.chart?.data.labels?.length).toBe(7);
    expect(component.chart?.data.labels).toEqual(labels);
    expect(component.chart?.data.datasets[0]?.data.length).toBe(7);
  });

  it('chart to Base64Image', () => {
    component.data = { ...data };
    fixture.detectChanges();
    const image = component.chartToBase64Image();
    expect(image).toBeDefined();
    expect(typeof image).toBe('string');
    expect(image).toContain('data:image/png;base64,');
  });

  it('chart should update on data change', () => {
    component.data = { ...data };
    // todo
    fixture.detectChanges();

    component.data = {
      ...data,
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        { ...data.datasets[0], data: [42, 88, 42, 66, 77] },
        { ...data.datasets[0], data: [55, 44, 55, 66, 22] }
      ]
    };
    // todo
    // @ts-ignore
    component.chart.data.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    // @ts-ignore
    component.chart.data.datasets.fill({ ...data.datasets[0], data: [42, 88, 42, 66, 77] });
    // @ts-ignore
    component.chart.data.datasets.push({ ...data.datasets[0], data: [55, 44, 55, 66, 22] });
    fixture.detectChanges();
    expect(component.chart?.data.labels?.length).toBe(5);
    expect(component.chart?.data.datasets[1].data.length).toBe(5);
  });
});
