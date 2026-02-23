import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavComponent } from './header-nav.component';

describe('HeaderNavComponent', () => {
  let component: HeaderNavComponent;
  let fixture: ComponentFixture<HeaderNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderNavComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderNavComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('header-nav')).toBe(true);
  });

  it('should have role', () => {
    expect(fixture.nativeElement.getAttribute('role')).toBe('navigation');
  });
});
