import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStatDComponent } from './widget-stat-d.component';

describe('WidgetStatDComponent', () => {
  let component: WidgetStatDComponent;
  let fixture: ComponentFixture<WidgetStatDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetStatDComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetStatDComponent);
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

describe('WidgetStatDComponent values', () => {
  it('should render each value in a column with a divider between pairs and color the header', async () => {
    const fixture = TestBed.createComponent(WidgetStatDComponent);
    fixture.componentRef.setInput('color', 'warning');
    fixture.componentRef.setInput('values', [
      { title: 'friends', value: '89K' },
      { title: 'feeds', value: '459' }
    ]);
    await fixture.whenStable();

    const body: HTMLElement = fixture.nativeElement.querySelector('.card-body');
    expect(Array.from(body.children).map((child) => child.className)).toEqual(['col', 'vr', 'col']);
    expect(body.querySelectorAll('.fs-5')[1].textContent).toBe('459');
    expect(body.querySelectorAll('.text-uppercase')[0].textContent).toBe('friends');
    expect(fixture.nativeElement.querySelector('.card-header').classList.contains('bg-warning')).toBe(true);
  });
});
