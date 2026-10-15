import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStatEComponent } from './widget-stat-e.component';

const classesOf = (element: Element) => [...element.classList].sort();

describe('WidgetStatEComponent', () => {
  let component: WidgetStatEComponent;
  let fixture: ComponentFixture<WidgetStatEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetStatEComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetStatEComponent);
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

describe('WidgetStatEComponent content', () => {
  it('should render title and value and color the title', async () => {
    const fixture = TestBed.createComponent(WidgetStatEComponent);
    fixture.componentRef.setInput('title', 'Title');
    fixture.componentRef.setInput('value', 1000);
    await fixture.whenStable();

    const [title, value] = Array.from(fixture.nativeElement.querySelectorAll('.card-body > div')) as HTMLElement[];
    expect(title.textContent).toBe('Title');
    expect(classesOf(title)).toEqual(['fw-semibold', 'small', 'text-body-secondary', 'text-uppercase']);
    expect(value.textContent).toBe('1000');

    fixture.componentRef.setInput('textColor', 'danger');
    await fixture.whenStable();
    expect(classesOf(title)).toEqual(['fw-semibold', 'small', 'text-danger', 'text-uppercase']);
  });
});
