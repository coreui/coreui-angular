import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavbarTextComponent } from './navbar-text.component';

describe('NavbarTextComponent', () => {
  let component: NavbarTextComponent;
  let fixture: ComponentFixture<NavbarTextComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
