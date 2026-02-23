import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBrandComponent } from './header-brand.component';

describe('HeaderBrandComponent', () => {
  let component: HeaderBrandComponent;
  let fixture: ComponentFixture<HeaderBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBrandComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderBrandComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('header-brand')).toBe(true);
  });

  it('should have role', () => {
    expect(fixture.nativeElement.getAttribute('role')).toBe('button');
  });
});
