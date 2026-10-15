import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStatBComponent } from './widget-stat-b.component';

const classesOf = (element: Element) => [...element.classList].sort();

describe('WidgetStatBComponent', () => {
  let component: WidgetStatBComponent;
  let fixture: ComponentFixture<WidgetStatBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetStatBComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetStatBComponent);
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

describe('WidgetStatBComponent content', () => {
  let fixture: ComponentFixture<WidgetStatBComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(WidgetStatBComponent);
    fixture.componentRef.setInput('value', '89.9%');
    fixture.componentRef.setInput('title', 'Widget title');
    fixture.componentRef.setInput('text', 'Widget helper text');
    await fixture.whenStable();
  });

  it('should render value, title and text', () => {
    expect(fixture.nativeElement.querySelector('.fs-4.fw-semibold')?.textContent).toBe('89.9%');
    expect(fixture.nativeElement.textContent).toContain('Widget title');
    const text: HTMLElement = fixture.nativeElement.querySelector('small');
    expect(text.textContent?.trim()).toBe('Widget helper text');
    expect(classesOf(text)).toEqual(['text-body-secondary']);
  });

  it('should invert the text colors', async () => {
    fixture.componentRef.setInput('inverse', true);
    fixture.componentRef.setInput('color', 'primary');
    fixture.componentRef.setInput('textColor', 'white');
    await fixture.whenStable();
    expect(classesOf(fixture.nativeElement.querySelector('small'))).toEqual(['text-opacity-75', 'text-white']);
    expect(fixture.nativeElement.classList.contains('text-white')).toBe(true);
    expect(fixture.nativeElement.classList.contains('bg-primary')).toBe(true);
  });

  it('should leave out empty parts', async () => {
    fixture.componentRef.setInput('value', undefined);
    fixture.componentRef.setInput('title', undefined);
    fixture.componentRef.setInput('text', undefined);
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.card-body').children.length).toBe(0);
  });
});
