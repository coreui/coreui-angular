import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NavbarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have css classes', () => {
    expect(fixture.nativeElement).toHaveClass('navbar');
  });

  it('should have container class', () => {
    fixture.componentRef.setInput('expand', 'xl');
    fixture.componentRef.setInput('container', 'sm');
    fixture.detectChanges();
    expect(fixture.componentInstance.containerClass()).toBe('container-sm');
    expect(fixture.componentInstance.breakpoint()).toBe('');
  });
});
