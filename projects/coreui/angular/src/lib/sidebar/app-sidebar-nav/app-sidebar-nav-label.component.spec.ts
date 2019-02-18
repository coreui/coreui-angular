import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSidebarNavLabelComponent } from './app-sidebar-nav-label.component';

describe('AppSidebarNavLabelComponent', () => {
  let component: AppSidebarNavLabelComponent;
  let fixture: ComponentFixture<AppSidebarNavLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSidebarNavLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidebarNavLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
