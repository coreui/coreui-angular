import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
import { AppSidebarNavBadgePipe } from './app-sidebar-nav-badge.pipe';
import { AppSidebarNavLabelComponent } from './app-sidebar-nav-label.component';

describe('AppSidebarNavLabelComponent', () => {
  let component: AppSidebarNavLabelComponent;
  let fixture: ComponentFixture<AppSidebarNavLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppSidebarNavLabelComponent, AppSidebarNavBadgePipe],
      providers: [SidebarNavHelper],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidebarNavLabelComponent);
    component = fixture.componentInstance;
    component.item = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
