import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTitleComponent } from './nav-title.component';

describe('NavTitleComponent', () => {
  let component: NavTitleComponent;
  let fixture: ComponentFixture<NavTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavTitleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavTitleComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('nav-title')).toBe(true);
  });
});
