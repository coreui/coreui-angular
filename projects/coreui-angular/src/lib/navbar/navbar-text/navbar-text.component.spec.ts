import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTextComponent } from './navbar-text.component';

describe('NavbarTextComponent', () => {
  let component: NavbarTextComponent;
  let fixture: ComponentFixture<NavbarTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarTextComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarTextComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('navbar-text')).toBe(true);
  });
});
