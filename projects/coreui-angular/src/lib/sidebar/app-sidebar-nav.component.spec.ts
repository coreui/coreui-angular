import { NO_ERRORS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppSidebarNavComponent } from './app-sidebar-nav.component';
import { SidebarNavHelper } from './app-sidebar-nav.service';

describe('AppSidebarNavComponent', () => {
  let component: AppSidebarNavComponent;
  let fixture: ComponentFixture<AppSidebarNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppSidebarNavComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [SidebarNavHelper]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidebarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
