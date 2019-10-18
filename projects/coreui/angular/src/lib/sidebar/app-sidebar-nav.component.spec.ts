import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppSidebarNavComponent } from './app-sidebar-nav.component';

describe('AppSidebarNavComponent', () => {
  let component: AppSidebarNavComponent;
  let fixture: ComponentFixture<AppSidebarNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppSidebarNavComponent],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
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
