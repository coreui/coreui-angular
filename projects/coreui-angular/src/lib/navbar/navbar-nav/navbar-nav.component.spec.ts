import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavbarNavComponent } from './navbar-nav.component';

describe('NavbarNavComponent', () => {
  let component: NavbarNavComponent;
  let fixture: ComponentFixture<NavbarNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
