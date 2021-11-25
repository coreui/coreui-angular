import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chart, registerables } from 'chart.js';

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
    })
      .compileComponents();

    Chart.register(...registerables);

    fixture = TestBed.createComponent(ChartjsComponent);
    component = fixture.componentInstance;
    component.data = { ...data };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    fixture.detectChanges();

    expect(component.chart).toBeDefined();
  });

  it('chart should receive data', () => {

    fixture.detectChanges();
    expect(component.chart?.data.labels?.length).toBe(7);
    expect(component.chart?.data.labels).toEqual(labels);
    expect(component.chart?.data.datasets[0]?.data.length).toBe(7);
  });

  // it('should trigger an update when labels or datasets change', () => {
  //   const newData = { ...data}
  //   newData.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  //   newData.datasets[0] = {...data.datasets[0], data: [42, 88, 42, 66, 77]};
  //
  //   component.data = newData;
  //   fixture.detectChanges();
  //
  //   expect(component.chart?.data.labels?.length).toBe(5);
  //
  // });
});
