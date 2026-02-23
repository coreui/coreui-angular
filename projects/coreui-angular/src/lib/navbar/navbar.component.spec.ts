import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    await fixture.whenStable();

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement.classList.contains('navbar')).toBe(true);
  });

  it('should have container class', () => {
    fixture.componentRef.setInput('expand', 'xl');
    fixture.componentRef.setInput('container', 'sm');
    fixture.detectChanges();
    expect(fixture.componentInstance.containerClass()).toBe('container-sm');
    expect(fixture.componentInstance.breakpoint()).toBe('');
  });
});
