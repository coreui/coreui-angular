import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppSidebarNavBadgePipe } from './app-sidebar-nav-badge.pipe';
import { AppSidebarNavLinkComponent } from './app-sidebar-nav-link.component';
import { AppSidebarNavLinkPipe } from './app-sidebar-nav-link.pipe';

describe('AppSidebarNavLinkComponent', () => {
  let component: AppSidebarNavLinkComponent;
  let fixture: ComponentFixture<AppSidebarNavLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppSidebarNavLinkComponent,
        AppSidebarNavLinkPipe,
        AppSidebarNavBadgePipe,
      ],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidebarNavLinkComponent);
    component = fixture.componentInstance;
    component.item = {
      url: '',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
