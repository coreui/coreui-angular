import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { BreadcrumbRouterComponent } from './breadcrumb-router.component';
import { BreadcrumbRouterService } from './breadcrumb-router.service';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbRouterComponent;
  let fixture: ComponentFixture<BreadcrumbRouterComponent>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        BreadcrumbRouterComponent
      ],
      providers: [BreadcrumbRouterService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbRouterComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
