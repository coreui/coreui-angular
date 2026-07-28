import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageItemComponent } from './page-item.component';

describe('PaginationItemComponent', () => {
  let component: PageItemComponent;
  let fixture: ComponentFixture<PageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PageItemComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('page-item')).toBe(true);
  });
});
